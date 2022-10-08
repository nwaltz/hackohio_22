def add_user(profile, user_table):
    user_table.insert_one({'Name' : profile.name, 'Gender' : profile.gender, 'Age' : profile.age})