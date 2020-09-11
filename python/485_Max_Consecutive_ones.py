class Solution:
  def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
    maxConsecutive: int = 0
    currMax: int = 0
    
    for num in nums:
      if num == 1:
        currMax += 1
      else:
        maxConsecutive = max(maxConsecutive, currMax)
        currMax = 0
    
    return max(maxConsecutive, currMax)
    