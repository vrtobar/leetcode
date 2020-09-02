/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
      let buf4 = new Array(4);
      let totalNumRead = 0;
      let numToStore = 0;
      let numRead = Infinity;
      
      while (numRead > 0 && totalNumRead !== n) {
        numRead = read4(buf4);
        numToStore = n - totalNumRead > numRead ? numRead : n - totalNumRead;
        buf.push(...buf4.slice(0, numToStore));
        totalNumRead += numToStore;
      }
      
      return totalNumRead;
    };
};
