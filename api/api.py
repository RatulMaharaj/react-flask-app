import datetime
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/api/time')
def get_current_time():
    return jsonify(time=datetime.datetime.now())
