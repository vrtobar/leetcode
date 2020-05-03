/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const results = [];
  let maxCandies = -Infinity;
  
  for (let i = 0; i < candies.length; i++) {
    maxCandies = Math.max(maxCandies, candies[i]);
  }
  
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  
  return results;
};
