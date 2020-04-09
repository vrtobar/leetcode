/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return matrix;
  if (matrix.length === 1) return matrix[0];
  
  const spiral = [];
  const dirs = { 'RIGHT': 0, 'DOWN': 1, 'LEFT': 2, 'UP': 3 };
  let lowRowLimit = 0;
  let highRowLimit= matrix.length-1;
  let lowColLimit = 0;
  let highColLimit = matrix[0].length-1;
  let count = 0;
  let dir = dirs.RIGHT;
  let row = 0;
  let col = 0;
  
  while (count !== matrix.length * matrix[0].length) {
    spiral.push(matrix[row][col]);
    
    if (dir === dirs.RIGHT) {
      if (col+1 <= highColLimit) {
        col += 1;
      } else { // go down
        dir = dirs.DOWN;
        lowRowLimit += 1;
        row += 1;
      }
    } else if (dir === dirs.DOWN) {
      if (row+1 <= highRowLimit) {
        row += 1;
      } else { // go left
        dir = dirs.LEFT;
        highColLimit -= 1;
        col -= 1;
      }
    } else if (dir === dirs.LEFT) {
      if (col-1 >= lowColLimit) {
        col -= 1;
      } else { // go up
        dir= dirs.UP;
        highRowLimit -= 1;
        row -= 1;
      }
    } else {
      if (row-1 >= lowRowLimit) {
        row -= 1;
      } else { // go right
        dir = dirs.RIGHT;
        lowColLimit += 1;
        col += 1;
      }
    }
    
    count +=1;
  }
  
  return spiral;
};
