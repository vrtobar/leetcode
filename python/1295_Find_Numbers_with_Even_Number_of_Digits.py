class Solution:
  def findNumbers(self, nums: List[int]) -> int:
    count: int = 0
          
    for num in nums:
      if len(str(num)) % 2 == 0:
        count += 1
    
    return count
