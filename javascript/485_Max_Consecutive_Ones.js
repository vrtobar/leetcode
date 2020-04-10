/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxConsecutive = 0;
  let tempMax = 0;
  let i = 0;
  let j = 0;
  
  for (let num of nums) {
    if (num === 1) {
      tempMax += 1;
    } else {
      maxConsecutive = tempMax > maxConsecutive ? tempMax : maxConsecutive;
      tempMax = 0;
    }
  }

  maxConsecutive = tempMax > maxConsecutive ? tempMax : maxConsecutive;  
  
  return maxConsecutive;
};
