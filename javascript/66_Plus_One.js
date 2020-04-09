/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let remainder = 1;
  let newDigits = [];
  
  for (let i = digits.length-1; i >= 0; i--) {
    let digitSum = digits[i] + remainder;
    
    if (digitSum >= 10) {
      remainder = 1;
      digitSum = digitSum - 10; 
    } else {
      remainder = 0;
    }
    
    newDigits.push(digitSum);
  }
  
  if (remainder) {
    newDigits.push(1);
  }
  
  return newDigits.reverse();
};
