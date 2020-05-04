/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const charTable = {};
  
  for (const char of magazine) {
    charTable[char] = charTable[char] ? charTable[char] + 1 : 1;
  }
  
  for (const char of ransomNote) {
    if (!charTable[char] || charTable[char] <= 0) return false;
    
    charTable[char] = charTable[char] - 1;
  }
  
  return true;
};
