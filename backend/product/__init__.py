from flask import request, jsonify
import json
from random import sample

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
                result['banner']=json_data['all-drinks']['banner']
            elif for_category=='Meal':
                result['banner']=json_data['all-powder']['banner']
            elif for_category=='Square':
                result['banner']=json_data['squared']['banner'] 
                
            return result

        def get_all_categories():
            all_keys = list(json_data.keys())
            all_keys.remove('faq')
            all_keys.remove('all-products')
            return all_keys

        @app.route('/api/products/categories')
        def product_list():
            return {'categories': get_all_categories()}

        @app.route('/api/faq/')
        def get_faq():
            return {'faq': json_data['faq']}

        @app.route('/api/featured')
        def get_featured():
            categories = get_all_categories()
            result = {category: sample(json_data[category]['products'], 6) if len(json_data[category]['products'])>=6 else json_data[category]['products'] for category in categories}
            return result
