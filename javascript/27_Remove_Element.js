/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0;
  let right = 1;
  
  // Find first ocurrance of val
  while (nums[left] !== val && left < nums.length) {
    left += 1;
    right += 1;
  }
  
  // Remove val
  while (left < nums.length && right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left += 1;
    }
    right += 1;
  }
  
  return left;
};
