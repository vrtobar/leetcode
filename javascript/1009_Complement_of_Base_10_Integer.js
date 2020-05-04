/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  if (num === 0) return 1;
  
  const charArray = [];
  const complement = num.toString(2);
  
  for (const char of complement) {
    if (char === '1') charArray.push('0');
    else charArray.push('1');
  }
  
  return parseInt(charArray.join(''), 2);
};
