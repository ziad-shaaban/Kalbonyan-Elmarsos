# -----------------stack code----------------------------------:

# create a new empty stack
from collections import deque
stack = []

# push items onto the stack
stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)

# print the stack contents
print(stack)

# pop an item off the stack
x = stack.pop()
print(x)
print(stack)


# -----------------queue code----------------------------------:

# try out the Python queue functions

# create a new empty deque object that will function as a queue
queue = deque()

# add some items to the queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

# print the queue contents
print(queue)

# pop an item off the front of the queue
x = queue.popleft()
print(x)
print(queue)
