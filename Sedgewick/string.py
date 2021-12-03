# key indexed counting

arr = ["d", "a", "c", "f", "f"]


def key_indexed_counting(arr):
  n = len(arr)
  counts = [0 for _ in range(256)]
  result = [0 for _ in range(n)]
  
  for i in arr:
    counts[ord(i)] += 1
  
  for i in range(len(counts)):
    counts[i] += counts[i-1]
  
  for i in range(n):
    result[counts[ord(arr[i])] - 1] = arr[i]
    counts[ord(arr[i])] -= 1
    
   
  print(result)

key_indexed_counting(arr)
