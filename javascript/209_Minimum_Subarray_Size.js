/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0;
  
  let right = 0;
  let minLen = Infinity;
  let sum = 0;
  let currLen = 0;
  
  for (let left = 0; left < nums.length; left++) {
    while (right < nums.length && sum < s) {
      sum += nums[right];
      currLen += 1;
      right += 1;
    }
    
    if (sum >= s) {
      minLen = Math.min(currLen, minLen);
    }
    
    sum -= nums[left];
    currLen -= 1;
  }
  
  return minLen === Infinity ? 0 : minLen;
};
