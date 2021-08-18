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
        'host': ''
    }

    JWT_SECRET_KEY = "nklcb"
