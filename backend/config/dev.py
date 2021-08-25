from . import Config
import boto3

class DevConfig(Config):
    DEBUG = True

    RUN_SETTING = {
        'host': Config.HOST,
        'port': 5000,
        'debug': DEBUG
    }
    # Important!
    # You must fill host value
    # Follow instruction.md
    MONGODB_SETTINGS = {
        'host': 'mongodb+srv://admin:nklcb-pw1234@cluster0.uxq6u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }

    JWT_SECRET_KEY = "nklcb"
