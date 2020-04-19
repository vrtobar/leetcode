/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const complements = {};
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complements[complement] !== undefined) {
      return [i, complements[complement]];
    }
    complements[nums[i]] = i;
  }
};
