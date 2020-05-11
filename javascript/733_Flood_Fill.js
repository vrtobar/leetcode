/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] !== newColor) dfs(image, sr, sc, image[sr][sc], newColor);
  
  return image;
};

var dfs = function(image, row, col, currColor, newColor) {
  if (image[row][col] === currColor) {
    image[row][col] = newColor;
    if (row >= 1) dfs(image, row-1, col, currColor, newColor);
    if (col >= 1) dfs(image, row, col-1, currColor, newColor);
    if (row+1 < image.length) dfs(image, row+1, col, currColor, newColor);
    if (col+1 < image[0].length) dfs(image, row, col+1, currColor, newColor);
  }
};
