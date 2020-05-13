/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  const numTable = {};
  
  for (let i = 0; i < nums.length; i++) {
    numTable[nums[i]] = numTable[nums[i]] === undefined ? 1 : 2;
  }
  
  for (let key in numTable) {
    if (numTable[key] === 1) return key;
  }
};
