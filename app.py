from flask import Flask, render_template, request, url_for, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from Backend.Profile import *
from Backend.Db_Caller import *
from Backend.Route import *
from Backend.mapbox_test import *

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://team_importname:hack_ohio_22@cluster0.ajbtefe.mongodb.net/test'
mongo = PyMongo(app)

all_users = mongo.db.all_users
users_searching = mongo.db.users_searching

@app.route('/')
def index():
    return 'Home Screen'

@app.route('/add_user_profile')
def add_user_profile():
    user_profile = Profile('waltz.90', 'password', 'Nate', 'Male', '20', '4193401464', '../image_path')
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

@app.route('/add_route')
def add_route():
    username = 'sean.slime'
    route = Route(username, '1917 Waldeck Ave, Columbus, OH', '50 Chittenden Ave, Columbus, OH')
    route_add(route, users_searching)
    return redirect(url_for('index'))

@app.route('/find_match')
def matcher():
    valid_matches = []
    dot_numbers, locations = get_all_routes(users_searching) # locations will be [start, end]
    print(dot_numbers)
    print(locations)
    for i in range(1,len(dot_numbers)):
        for j in range(i):
            bet_users = get_distance(locations[i][0], locations[j][0])
            distance = get_distance(locations[i][0], locations[i][1])

            if distance/2 > bet_users:
                info = get_fastest_route(locations[i][0], locations[j][0], locations[i][1], locations[j][1])
                info['person1'] = dot_numbers[i]
                info['person2'] = dot_numbers[j]
                valid_matches.append(info)
    print(valid_matches)
    return(valid_matches)

if __name__ == "__main__":
    app.run(debug=True)