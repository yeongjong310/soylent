from flask import request, jsonify
import json

class Product:
    def __init__(self, app):
        
        with open('./data.json') as json_file:
            json_data = json.load(json_file)

        @app.route('/api/collections/<string:category>')
        def category_items(category):
            return json_data[category]

        @app.route('/api/products/<string:slug>')
        def product_detail(slug):
            result = {}
            for item in json_data['all-products']:
                if item['url'] == f"/products/{slug}":
                    for_category = item['unitName']
                    result['product'] = item
            
            if for_category=='Bottle':
                result['banner']=json_data['all_drinks']['banner']
            elif for_category=='Meal':
                result['banner']=json_data['all_powder']['banner']
            elif for_category=='Square':
                result['banner']=json_data['squared']['banner'] 
                
            return result

        @app.route('/api/products/categories')
        def product_list_url():
            return {'categories': list(json_data.keys())}

        @app.route('/api/faq/')
        def get_faq():
            return {'faq': json_data['faq']}
