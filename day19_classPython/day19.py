"""
Ann Johnnidis
Aug 31: Python classes
"""
print('\n ------ class MyClass ------')
print('\n--------------------------- \n')
# create a class - first letter of the class name is always capitalized
class MyClass:
    num = 5

# create an object for class MyClass
p1 = MyClass()
# printing p1 only shows you the location of the object
print(p1)
# this how to see whats going on in the object?
print(f'\nObject num = {p1.num}')
print('\n ------ class Person ------')
print('\n--------------------------- \n')
#  The __init__() function is called automatically every time the class is being user to create a new object
class Person:
    # self is the identifier, you can name is anything. The self parameter is a reference to the current instance of the class and is used to access variables that belongs to the class
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # object method
    def printObject (self):
        print(f'Hello! my name is {self.name}')

# create an object and initialize values:
person1 = Person("John", 30)
print(f'Object name = {person1.name}')
print(f'Object age = {person1.age}')

# printing an object method
print(f'\n{person1.printObject()}')

# delete properties using del keyword
del person1.name

# pass statement is used to pass an empty class. You can't have an empty class without pass
class House:
    pass

print(f"print {House}")

print('\n ------ class Chair ------')
print('--------------------------- \n')

class Chair:
    # adding accessible properties
    chair_color = 'brown'
    def __init__(self, height, width, length):
        self.height = height
        self.__width = width # double underscore __ makes a very private property. It basically hides the value and you can't access it
        self.length = length*2

    # define a method to print result
    def print_result(self):
        print(f'The length of the chair is: {self.length}')

    # pass the height
    def get_height(self):
        return self.height

    # this function will pass the accessible property
    def get_color(self):
        return self.chair_color
    
    # update class values
    def set_price(self, price):
        self._price = price # _ makes a property private

# initialize an object for class Chair
chair1 = Chair(12, 30, 10)
chair1.print_result()
print(f"The chair height {chair1.get_height()}")
print(f'\nThe chair color is {chair1.get_color()}')
# calling the accessible property
print(f'\nThe chair color is {chair1.chair_color}')
# update the price data
chair1.set_price(25)
print(f'Chair price {chair1._price}')
# print(f'\nVery private width = {chair1.__width}')
