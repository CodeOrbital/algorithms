def squares_with_three(n):
  count = 0
  for nth in range(1,n+1):
    s=str(nth**2)
    for i in s:
      if(i=="3"):
        count+=1
        break
  return count