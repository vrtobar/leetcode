/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const charTable = {};
  
  for (let i = 0; i < 26; i++) {
    charTable[upper[i]] = lower[i];
  }
  
  const charArray = [];
  
  for (const char of str) {
    charArray.push(charTable[char] ? charTable[char] : char);  
  }
  
  return charArray.join('');
};
