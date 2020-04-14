/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // if (nums.length === 1) return [-1, -1];
  let start = 0;
  let end = nums.length-1;
  let left = null;
  let right = null;
  
  // Find left
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    
    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  
  left = start;
  start = left;
  end = nums.length - 1;
  
  // Find right
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    
    if (nums[mid] === target) {
      start = mid +1;
    } else {
      end = mid - 1;
    }
  }
  
  right = nums[start] === target ? start : start-1;
  
  return (nums[left] === target && nums[right] === target) ? [left, right] : [-1, -1];
};
