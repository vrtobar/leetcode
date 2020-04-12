/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  
  let left = 0;
  
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left += 1;
      nums[left] = nums[right];
    }
  }
  
  return left + 1;
};

