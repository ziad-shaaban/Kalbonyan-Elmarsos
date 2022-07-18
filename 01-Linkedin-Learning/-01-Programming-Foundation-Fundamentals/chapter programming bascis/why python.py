name = input("Hi, what's your name? ")  # ask user name
# int for converting type string which return from inpyt function to put it in if statment
age = int(input("How old are you? "))


if (age < 13):
    print("You're too young to register", name)
else:
    print("Feel free to join", name)
