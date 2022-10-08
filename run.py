from flask import Flask, render_template, request, url_for, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from Backend.Profile import *
from Backend.Db_Caller import *

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://team_importname:hack_ohio_22@cluster0.ajbtefe.mongodb.net/test'
mongo = PyMongo(app)

all_users = mongo.db.users

@app.route('/')
def index():
    return 'Home Screen'

@app.route('/add_user_profile')
def add_user_profile():
    user_profile = Profile('koenig.485', 'password', 'Nate', 'Male', '20', '4193401464', '../image_path')
    add_user(user_profile, all_users)
    # return redirect(Home Screen)
    return 'Redirect to Home Screen'

@app.route('/find_user_profile')
def find_user_profile():
    user_profile = get_profile('koenig.485', all_users)
    # return redirect(Home Screen)
    return 'user_profile'

@app.route('/get_dot_numbers')
def all_dot_numbers():
    dot_numbers = get_all_dot_numbers(all_users)
    return 'Redirect to Home Screen'

@app.route('/delete_all')
def delete_all():
    todos.delete_many({})
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)