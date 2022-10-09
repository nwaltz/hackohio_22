class Profile:
    def __init__(self, dot_number, password, name, gender, age, phone_number, picture="None"):
        self.dot_number = dot_number
        self.password = password
        self.name = name
        self.gender = gender
        self.age = age
        self.phone_number = phone_number
        self.picture = picture
        self.review = None
        self.number_of_walks = None

