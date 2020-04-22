/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const decompressedList = [];
  
  for (let i = 0; i < nums.length; i +=2) {
    const freq = nums[i];
    const val = nums[i+1];
    
    for (let j = 0; j < freq; j++) {
      decompressedList.push(val);
    }
  }
  
  return decompressedList;
};
