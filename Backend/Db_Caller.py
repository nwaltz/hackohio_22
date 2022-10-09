from Backend.Profile import *

def add_user(profile, users_table):
    try:
        users_table.find({'Dot Number' : profile.dot_number})[0].values()
    except IndexError:
        users_table.insert_one({'Dot Number' : profile.dot_number,
                                'Password' : profile.password,
                                'Name' : profile.name,
                                'Gender' : profile.gender,
                                'Age' : profile.age,
                                'Phone Number' : profile.phone_number,
                                'Profile Picture' : profile.picture})

def valid_login(dot_number, users_table):
    try:
        users_table.find({'Dot Number' : dot_number})[0].values()
        return True
    except IndexError:
        return False

def get_profile(dot_number, users_table):
    profile_items = list(users_table.find({'Dot Number' : dot_number})[0].values())
    user_profile = Profile(profile_items[1],
                            profile_items[2],
                            profile_items[3],
                            profile_items[4],
                            profile_items[5],
                            profile_items[6],
                            profile_items[7])
    return user_profile

def get_all_usernames(users_table):
    dot_nums = []
    for dot_number_object in users_table.find({}, {'Dot Number' : True}):
        for i, dot_number in enumerate(dot_number_object.values()):
            if i % 2 == 1:
                dot_nums.append(str(dot_number))
    return dot_nums

def get_all_routes(routes_table):
    dot_numbers = []
    locations = []
    for route_object in routes_table.find():
        route_obj = []
        for i, route in enumerate(route_object.values()):
            if i % 4 != 0:
                route_obj.append(route)
        dot_numbers.append(route_obj[0])
        locations.append((route_obj[1], route_obj[2]))
        
    return dot_numbers, locations

def get_route_info(all_routes):
    starts = []
    ends = []
    for objs in all_routes.find({}, {'Dot Number' : True}):
        temp_obj = []
        for i, vals in enumerate(objs.values()):
            if i % 4 != 0:
                temp_obj.append(str(vals))
        starts.append(temp_obj[1])
        ends.append(temp_obj[2])
    return starts, ends

def route_add(route, users_table):
    users_table.insert_one({'route_username': route.username, 'start': route.start, 'end': route.end})