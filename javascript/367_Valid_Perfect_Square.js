/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let start = 0;
  let end = num;
  let mid;
  
  while (start <= end) {
    mid = Math.floor(start + (end-start) / 2);
    let squared = mid * mid;
    
    if (squared === num) {
      return mid % 1 === 0;
    } else if (squared < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  
  return false;
};
