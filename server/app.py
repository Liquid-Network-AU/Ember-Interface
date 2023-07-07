from flask import Flask, request
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

datasets = [] # Temporary storage -> will be replaced with datasets in our Urbit cluster later

class DataSetResource(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('dataset_name', type=str, required=True, help="Dataset name is required")
        # Other fields will be added to match the postgres 'datasets' table schema
        args = parser.parse_args()
        dataset_name = args['dataset_name'] # Again, add the rest of the fields to match the desired schema

        # For now, we're just storing the requests inside a variable. Later they'll be pushed to our local cluster
        datasets.append({'dataset_name': dataset_name})
        return {'message': 'Dataset added successfully', 'dataset_name': dataset_name}, 201

api.add_resource(DataSetResource, '/api/datasets')

if __name__ == '__main__':
    app.run(debug=True)