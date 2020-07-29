/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const shuffledNums = new Array(2*n);
  
  let i = 0;
  let insertIndex = 0;
  
  while (i < n) {
    shuffledNums[insertIndex] = nums[i];
    shuffledNums[insertIndex+1] = nums[i+n];
    i += 1;
    insertIndex += 2;
  }
  
  return shuffledNums;
};
