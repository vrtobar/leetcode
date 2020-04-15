/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let charArray = [];
  
  for (let char of address) {
    if (char === '.') {
      charArray.push(`[${char}]`);
    } else {
      charArray.push(char);
    }
  }
  
  
  return charArray.join('');
};
