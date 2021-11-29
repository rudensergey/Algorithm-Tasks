cars = ['toyota', 'ford', 'audi']

for i in cars:
  print(i)




"""
this is multiline comment
"""

# this is variables
x = 2
y = 3

if x > y:
  print('x is bigger than y') # this is one line comment
else:
  print('x is smaller than y') # this is also one line comment

# this is string
name = "Sergey"
# this is specified string
last_name = str("Rudenko") 
# this is number
age = 24
# this is specified number
next_age = int(25)
# this is float age
certain_age = float(24.9)

my_data = [name, last_name, age, next_age, certain_age]

print(my_data)

for i in my_data:
  print(type(i))

# multy variables assignment

one = two = tree = 'one'
one, two, tree, four, five = my_data # shoud always have the same numbers of variables

print("my_data:" + one + " " + two)
print(next_age - certain_age)

# how to make a global variable inside the function

awesome = 'not awesome' # we can change this variable just accessing it through global keyword

def awesome_inside():
  global awesome
  awesome = "awesome"
  print(awesome)

awesome_inside()
print('Python is ' + awesome)


class Node:
  def __init__(self, data, next = None):
    self.data = data
    self.next = next



def create_linked_list():
  head = None
  for i in range(1, 11):
    head = Node(i, head)
  return head

def print_linked_list(head):
  while head:
    print(head.data)
    head = head.next

ll = create_linked_list()


def reverse_half(head, half_length):
  a = head
  for _ in range(half_length - 1): a = a.next
  b = a.next

  x_p = a
  x = b
  for _ in range(half_length):
    x_n = x.next
    x.next = x_p
    x_p = x
    x = x_n

  c = x_p
  a.next = c
  b.next = None  

def reverse_linked_list(head):
  if head.next == None: return head
  
  a = head
  length = 0

  while a != None:
    length = length + 1
    a = a.next

  a = head
  b = a.next
  
  x_p = a
  x = b

  for _ in range(length - 1):
    x_n = x.next
    x.next = x_p
    x_p = x
    x = x_n

  a.next = None
  b.next = a
  head = x_p

# print_linked_list(ll)
# reverse_linked_list(ll)
# print_linked_list(ll)

def max_prefix(arr, i):
  if i > 0:
    j = max_prefix(arr, i - 1)
    if arr[j] > arr[i]: return j
    return i
  else:
    return i

def selection_sort(arr, i):
  if i > 0: 
    max = max_prefix(arr, i - 1)
    if arr[max] > arr[i]:
      arr[i], arr[max] = arr[max], arr[i]
    selection_sort(arr, i - 1)
  return

arr = [5,3,7,4,2,9]
selection_sort(arr, 5)
print(arr)