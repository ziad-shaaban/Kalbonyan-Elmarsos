first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'

first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()

print(first_name_cap)
print(last_name_cap)

award_location = note.find('award: ')  # return the index of the character
award_text = note[7:]  # the first index not including.

print(award_location)
print(award_text)
