/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length === 0) return -1;
  let sum = 0;
  
  for (let num of nums) sum += num;
  
  let i = 0;
  let currSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (currSum === sum - nums[i] - currSum) return i;
    
    currSum += nums[i];
  }
  
  return -1;
};
