/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1],[1,1]];
  
  const pascals = [[1], [1,1]];
  
  for (let i = 2; i < numRows; i++) {
    let row = [];
    
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(pascals[i-1][j-1] + pascals[i-1][j]);
      }
    }
    
    pascals.push(row);
  }
  
  return pascals;
};
