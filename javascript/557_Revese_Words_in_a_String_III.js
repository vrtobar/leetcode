/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // Convert to char[] for a solution in C
  let charArray = [];
  for (let char of s) charArray.push(char);
  
  let start = 0;
  let end = 0;
  
  while (end <= charArray.length) {
    if (charArray[end] !== ' ' && end !== charArray.length) { // find end of a word
      end += 1;
    } else { // reverse word
      let i = start;
      let j = end-1;
      
      while (i < j) {
        let temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        i += 1;
        j -= 1;
      }
      
      start = end + 1;
      end = end + 1;
    }
  }
  
  return charArray.join('');
};
