/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewelSet = new Set();
  let jewelCount = 0;
  
  for (const jewel of J) {
    jewelSet.add(jewel);
  }
  
  for (const stone of S) {
    if (jewelSet.has(stone)) {
      jewelCount += 1;
    }
  }
  
  return jewelCount;
};
