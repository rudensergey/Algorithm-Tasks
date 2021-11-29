
houses = [34, 57, 70, 19, 48, 2]

def wolf_brick_blowing_pig_analysis(arr):
  s_house = None

  

  for i in range(len(arr) - 1):
    if arr[i] > arr[i + 1]:
      s_house = i + 1
      break

  if s_house == None: return 1
  i, j, b_diff = 0, s_house, 1

  while (j < len(arr) - 1):
    if arr[i] > arr[j]: j = j + 1
    else: i = i + 1
    
    print(j, i)
    if b_diff < j - i: b_diff = j - i

  return b_diff

print(wolf_brick_blowing_pig_analysis(houses))