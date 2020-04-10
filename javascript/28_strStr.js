/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  
  for (let i = 0; i <= haystack.length-needle.length; i++) {
    if (haystack[i] === needle[0]) {
      let match = true;
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] !== haystack[i+j]) {
          match = false;
        }
      }
      if (match) return i;
    }
  }
  
  return -1;
};
