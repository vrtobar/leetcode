class Solution:
  def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
    max: int = 0
    currMax: int = 0
    
    for num in nums:
      if num == 1:
        currMax += 1
      else:
        max = currMax if currMax > max else max
        currMax = 0
    
    max = currMax if currMax > max else max
    
    return max