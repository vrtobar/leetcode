/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix[0];
  
  const diagonal = [];
  const totalElements = matrix.length * matrix[0].length;
  const maxRowIndex = matrix.length-1;
  const maxColIndex = matrix[0].length-1;
  let dir = true; // true => up, false => down
  let count = 0;
  let row = 0;
  let col = 0;
  
  while (count < totalElements) {
    diagonal.push(matrix[row][col]);
    
    if (dir) { // diagonal up
      if (row-1 >= 0 && col+1 <= maxColIndex) { // up right
        row -= 1;
        col += 1;
      } else if (col+1 <= maxColIndex) { // right
        col += 1;
        dir = false;
      } else { // down
        row += 1;
        dir = false;
      }
    } else { // diagonal down
      if (row+1 <= maxRowIndex && col-1 >= 0) { // down right
        row += 1;
        col -= 1;
      } else if (row+1 <= maxRowIndex) { // down
        row += 1;
        dir = true;
      } else { // right
        col += 1;
        dir = true;
      }
    }
    
    count += 1;
  }
  
  return diagonal;
};
