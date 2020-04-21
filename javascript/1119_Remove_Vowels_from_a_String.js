/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  const charArray = [];
  
  for (const char of S) {
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
      charArray.push(char);
    }
  }
  
  return charArray.join('');
};
