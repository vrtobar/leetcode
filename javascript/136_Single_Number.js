/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numMap = new Map();
  
  for (const num of nums) {
    numMap.set(num, numMap.has(num) ? 2 : 1);
  }
  
  for (const [num, count] of numMap) {
    if (count === 1) return num;
  }
};
