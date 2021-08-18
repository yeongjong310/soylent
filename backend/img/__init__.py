from flask import request, jsonify
import boto3
from werkzeug.utils import secure_filename



class Img:
    #BUCKET_NAME = ''
    def __init__(self, app):

        # Important
        # You must fill in this variables
        # Follow the instruction.md
        AWS_ACCESS_KEY = ""
        AWS_SECRET_KEY = ""
        BUCKET_NAME = ""
        
        s3 = boto3.client('s3',
                aws_access_key_id = AWS_ACCESS_KEY,
                aws_secret_access_key = AWS_SECRET_KEY)
        
        @app.route('/img/list')
        def show_img():
            public_urls = []
            try:
                for item in s3.list_objects(Bucket=BUCKET_NAME)['Contents']:
                    presigned_url = s3.generate_presinged_url('get_object', Params = {'Bucket':BUCKET_NAME, 'Key':item['Key']}, ExpiresIn = 100)
                    public_urls.append(presigned_url)
            except:
                pass
            return {'imgs':public_urls}
        # <input type="file" name="file" value="file">
        @app.route('/img/upload', methods=['POST'])
        def upload_img():
            if request.method == 'POST':
                img = request.files['file']
                if img:
                    filename = secure_filename(img.filename)
                    img.save(filename)
                    s3.upload_file(
                            Bucket = BUCKET_NAME,
                            Filename=filename,
                            Key = filename
                    )
                    msg = "success"
                else:
                    msg = "File not found"
            return jsonify({'status':msg})
