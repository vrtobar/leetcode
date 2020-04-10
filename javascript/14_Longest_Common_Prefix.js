/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  
  let currPrefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    let currStr = strs[i];
    let newPrefix = '';
    let j = 0;
    while (j < currPrefix.length && j < currStr.length && currPrefix[j] === currStr[j]) {
      newPrefix += currPrefix[j];
      j += 1;
    }
    currPrefix = newPrefix;
  }
  
  return currPrefix;
};
