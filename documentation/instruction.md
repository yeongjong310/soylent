# How to Set Up

## MongoDB Atlas

1. Sign up Mongodb atlas

[Visit mongodb.com](https://www.mongodb.com/)

2. Set organization, project name choose 'python' for prefferd language

![](./img/mongo1.png)

3. choose shared plan

![](./img/mongo2.png)

4. Set these options

![](./img/mongo6.png)

5. Add new database user

![](./img/mongo7.png)
![](./img/mongo8.png)

6-1. Press connect button to allow all ip address

![](./img/mongo9.png)

6-2. Press Allow Access from Anywhere
![](./img/mongo10.png)
![](./img/mongo11.png)

6-3. Press this section and get uri
![](./img/mongo12.png)
![](./img/mongo13.png)

6-4. paste your mongouri into backend/config/dev.py

![](./img/aws1.png)

## Start AWS and get S3 bucket

1. Sign up Amazon Web Service

[https://aws.amazon.com/](https://aws.amazon.com/)

2. Click Storage-S3

![](./img/aws2.png)

3. Create bucket

![](./img/aws3.png)

4-1. set bucket name unique.

![](./img/aws4.png)

4-2. !Important : You should uncheck `Block all public access` to alow all public access

![](./img/aws7.png)

5-1. Click Down Arrow - My Security Credentials

![](./img/aws8.png)

5-2. Create and download Access Keys

## Don't upload access key, secret key to github

![](./img/aws9.png)

![](./img/aws6.png)

5-3. Fill this keys and names into backend/img/__init__.py

```
AWS_ACCESS_KEY: AWSAccessKeyId
AWS_SECRET_KEY: AWSSecretKey
BUCKET_NAME: Your bucket name
```
![](./img/aws10.png)