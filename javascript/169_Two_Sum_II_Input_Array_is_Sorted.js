/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    
    if (numbers[left] + numbers[right] === target) {
      return [left+1, right+1];
    }
    
    if (sum > target) {
      right -= 1; 
    } else {
      left += 1;
    }
  }
};
