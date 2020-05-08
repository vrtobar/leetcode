/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length <= 2) return true;
  
  const first = coordinates[0];
  const second = coordinates[1];
  const slope = (second[1] - first[1]) / (second[0] - first[0]);
  
  for (let i = 2; i < coordinates.length; i++) {
    const secondSlope = (coordinates[i][1] - second[1]) / (coordinates[i][0] - second[0]);
    if (slope !== secondSlope) return false;
  }
  
  return true;
};
