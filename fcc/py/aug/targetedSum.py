def find_target(arr, target):
  l = len(arr)
  for i in range(l):
    for c in range(l):
      if(c != i):
        if(arr[c]+arr[i] == target):
          answer = [c,i]
          answer.sort()
          return answer
  return "Target not found"