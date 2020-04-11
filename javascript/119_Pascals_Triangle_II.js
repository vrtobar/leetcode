/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1,1];
  
  let pascals = [1,1]; // start at row 1
  
  for (let i = 2; i <= rowIndex; i++) {
    let prev = 1;
    for (let j = 0; j < i+1; j++) {
      if (j === 0 || j === i) { // first or last element
        pascals[j] = 1;
      } else { // middle element
        let newValue = prev + pascals[j];
        prev = pascals[j];
        pascals[j] = newValue;
      }
    }
  }
  
  return pascals;
};
