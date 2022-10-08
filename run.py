from flask import Flask, render_template, request, url_for, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os
from Backend.Profile import *
from Backend.Db_Caller import *

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://team_importname:hack_ohio_22@cluster0.ajbtefe.mongodb.net/test'
mongo = PyMongo(app)

users_table = mongo.db.users

@app.route('/')
def index():
    Db_Caller.add()

@app.route('/add')
def add():
    profile = Person('Nate','Male','20')
    add_user(profile, users_table)
    # return redirect(Home Screen)
    return 'Home Screen'

@app.route('/delete_all')
def delete_all():
    todos.delete_many({})
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)