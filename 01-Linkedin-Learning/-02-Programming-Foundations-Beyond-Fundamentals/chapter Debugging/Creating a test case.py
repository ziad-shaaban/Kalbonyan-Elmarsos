# funtion to test it
def check_temp(temp):
    if temp < 15:
        print('Bring a jacket')
    elif temp > 25 and temp <= 35:
        print('Pack a jacket')
    elif temp > 35:
        print('Leave the jacket at home')


# cases scenario
check_temp(10)
check_temp(30)
check_temp(37)
