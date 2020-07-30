/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function(N) {
  const digitString = N.toString();
  const power = digitString.length;
  let sum = 0;
  
  for (const digit of digitString) {
    sum += Math.pow(digit, parseInt(power));;
  }
  
  return sum === N;
};
