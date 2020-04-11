/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  if (k === 0) return;
  
  let count = 0;
  let start = 0;
  
  while (count < nums.length) {
    let curr = start;
    let prev = nums[start];
    
    do {
      curr = (curr + k) % nums.length;
      
      let temp = nums[curr];
      nums[curr] = prev;
      prev = temp;
      count += 1;
    } while (start != curr)
    
    start += 1;
  }
};
