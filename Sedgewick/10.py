arr = [4,6,8,9,12,16,19,25,45,56,59,69,78,99]

def binary_search(arr, x):
  lo = 0
  hi = len(arr) - 1
  
  while lo <= hi:
    
    mid = lo + (hi - lo) // 2
    if x < arr[mid]:
      hi = mid - 1
    if x > arr[mid]:
     lo = mid + 1
    if x == arr[mid]: 
      return mid
  
  return -1

# print(binary_search(arr, 8))

def bs_recursievly(arr, lo, hi, x):
  if hi >= lo:
    mid = (lo + hi) // 2
    if arr[mid] == x: return mid
    if arr[mid] < x: return bs_recursievly(arr, mid + 1, hi, x)
    if arr[mid] > x: return bs_recursievly(arr, lo, mid - 1, x)
  else: return -1
  
for i in arr:
  print(bs_recursievly(arr, 0, len(arr), arr[i]))
