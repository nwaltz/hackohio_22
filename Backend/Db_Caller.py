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

def get_all_dot_numbers(users_table):
    dot_nums = []
    for dot_number_object in users_table.find({}, {"Dot Number" : True}):
        for i, dot_number in enumerate(dot_number_object.values()):
            if i % 2 == 1:
                dot_nums.append(str(dot_number))
    return dot_nums