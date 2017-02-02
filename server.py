from flask import Flask, current_app, send_from_directory
app = Flask(__name__, static_url_path='')

@app.route('/')
def hello():
    return current_app.send_static_file('index.html')

@app.route('/static/<path:path>')
def send_file(path):
    return current_app.send_static_file('build/' + path);
