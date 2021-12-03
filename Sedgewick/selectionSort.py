arr = [66, 43, 33, 22, 98, 45, 27, 1, 4, 7]

def selection_sort(arr):
  n = len(arr)
  for i in range(n):
    max = i
    for j in range(n):
      if arr[max] < arr[j]: max = j
      arr[i], arr[max] = arr[max], arr[i]

def insertion_sort(arr):
  n = len(arr)
  for i in range(n):
    for j in reversed(range(n)):
      if arr[i] > arr[j]: arr[i], arr[j] = arr[j], arr[i]
      else: break
print(arr)
# selection_sort(arr)
insertion_sort(arr)
print(arr)