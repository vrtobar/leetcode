/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const elementTable = {};
  
  for (const num of nums) {
    elementTable[num] = elementTable[num] ? elementTable[num] + 1 : 1;
  }
  
  for (const num of nums) {
    if (elementTable[num] > nums.length / 2) return num;
  }
};
