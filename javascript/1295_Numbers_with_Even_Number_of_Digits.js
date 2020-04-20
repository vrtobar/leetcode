/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0;
  
  for (const num of nums) {
    const numberString = num.toString();
    if (numberString.length % 2 === 0) {
      count += 1;
    }
  }
  
  return count;
};
