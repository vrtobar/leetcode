/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const sumArray = [];
  let remainder = 0;
  let i = a.length-1;
  let j = b.length-1;
  
  while (i >= 0|| j >= 0) {
    let x = i <= a.length-1 ? a[i] : '0';
    let y = j <= b.length-1 ? b[j] : '0';
    let digitSum = '0';
    
    if (remainder === '1') {
      if (x === '1' && y === '1') {
        digitSum = '1';
        remainder = '1';
      } else if (x === '1' || y === '1') {
        digitSum = '0';
        remainder = '1';
      } else {
        digitSum = '1';
        remainder = '0';
      }
    } else {
      if (x === '1' && y === '1') {
        digitSum = '0';
        remainder = '1';
      } else if (x === '1' || y === '1') {
        digitSum = '1';
      } else {
        digitSum = '0';
      }
    }
    
    sumArray.push(digitSum);
    
    i -= 1;
    j -= 1;
  }
  
  if (remainder === '1') {
    sumArray.push('1');
  }
  
  return sumArray.reverse().join('');
};
