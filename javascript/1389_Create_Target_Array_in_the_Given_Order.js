/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let targetArray = [];
  
  for (let i = 0; i < nums.length; i++) {
    targetArray.splice(index[i], 0, nums[i]);
  }
  
  return targetArray;
};
