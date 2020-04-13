/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  let start = 2;
  let end = Math.floor(x/2);
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
    if (mid * mid > x) end = mid -1;
    else if (mid * mid < x) start = mid + 1;
    else return mid;
  }
  
  return end;
};
