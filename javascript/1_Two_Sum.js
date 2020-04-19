/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const complements = {};
  
  for (let i = 0; i < nums.length; i++) {
    complements[nums[i]] = i;
  }
  
  for (let i = 0; i < nums.length; i++) {
    const [complement, index] = [target-nums[i], complements[target-nums[i]]];
    if (complement !== undefined && index !== i) return [i, index];
  }
};
