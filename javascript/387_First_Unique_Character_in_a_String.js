/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const charTable = {};
  
  for (const char of s) {
    charTable[char] = charTable[char] ? charTable[char] + 1 : 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (charTable[s[i]] === 1) return i;
  }

  return -1;
};
