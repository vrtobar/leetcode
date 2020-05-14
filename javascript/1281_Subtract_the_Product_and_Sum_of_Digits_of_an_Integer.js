/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digitsString = n.toString();
  let product = 1;
  let sum = 0;
  
  for (const char of digitsString) {
    let num = parseInt(char);
    product *= num;
    sum += num;
  }
  
  return product - sum;
};
