/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const shuffledCharArray = new Array(s.length);
  
  for (let i = 0; i < indices.length; i++) {
    shuffledCharArray[indices[i]] = s[i];
  }
  
  return shuffledCharArray.join('');
};
