import json
from flask import Flask, render_template, request, url_for, redirect, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from Backend.Profile import *
from Backend.Db_Caller import *
from Backend.Route import *
from Backend.mapbox_test import *
import time

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://team_importname:hack_ohio_22@cluster0.ajbtefe.mongodb.net/test'
mongo = PyMongo(app)

all_users = mongo.db.all_users
users_searching = mongo.db.users_searching
all_routes = mongo.db.all_routes

@app.route('/')
def index():
    return 'Home Screen'

@app.route('/add_user_profile', methods = ['POST'])
def add_user_profile():
    upro = request.get_json()
    #user_profile = Profile('waltz.90', 'password', 'Nate', 'Male', '20', '4193401464', '../image_path')
    user_profile = Profile(upro['dot_number'], upro['password'], upro['name'], upro['age'], upro['gender'], upro['phone'])
    res = add_user(user_profile, all_users)

    return res
    # return redirect(Home Screen)
    return 'Redirect to Home Screen'

@app.route('/check_user_login', methods = ['POST'])
def check_user_login():
    username = request.get_json()
    if valid_login(username['username'], username['password'], all_users):
        print("True")
        return "200"
    else:
        print("False")
        return 400
    # return redirect(Home Screen)
    return 'Redirect to Home Screen'

@app.route('/find_user_profile', methods = ['POST'])
def find_user_profile():
    username = request.get_json()
    user_profile = get_profile(username['username'], all_users)
    try:
        user_profile['password']
        return jsonify(user_profile)
        #u = user_profile
        #return "" + u.age + "," + u.dot_number + "," + u.gender + "," + u.name + "," + u.password + "," + u.phone_number
    except:
        return 400

@app.route('/get_dot_numbers', methods = ['GET'])
def all_dot_numbers():
    dot_numbers = get_all_usernames(all_users)
    return jsonify(dot_numbers)

@app.route('/add_route', methods = ['POST'])
def add_route():
    username = request.get_json()
    route = Route(username['username'],username['start'], username['end'])
    try:
        route_add(route, users_searching)
        return 200
    except:
        return 400

@app.route('/find_match', methods = ['GET'])
def matcher():
    valid_matches = []
    dot_numbers, locations = get_all_routes(users_searching) # locations will be [start, end]
    print(dot_numbers)
    print(locations)
    for i in range(1,len(dot_numbers)):
        for j in range(i):
            bet_users = get_distance(locations[i][0], locations[j][0])
            distance1 = get_distance(locations[i][0], locations[i][1])
            distance2 = get_distance(locations[j][0], locations[j][1])

            if distance1/2 > bet_users and distance2/2 > bet_users:
                info = get_fastest_route(locations[i][0], locations[j][0], locations[i][1], locations[j][1])
                info['person1'] = dot_numbers[i]
                info['person2'] = dot_numbers[j]
                valid_matches.append(info)
    print(valid_matches)
    return(jsonify(valid_matches))

@app.route('/add_match', methods = ['POST'])
def add_match():
    try:
        amatch = request.get_json()
        start = amatch['start']
        end = amatch['end']

        current_time = [time.struct_time()[3], time.struct_time()[4]]
        s, e = get_coords(start, end)
        insertion = {'time': current_time, 'start': s, 'end': e}
        all_routes.insert_one(insertion)
        return 200
    except:
        return 400

@app.route('/show_info', methods = ['GET'])
def show_info():
    starts, ends = get_route_info(all_routes)
    return 'display info'

if __name__ == "__main__":
    app.run(host="localhost",port=5000,debug=True,threaded=True)