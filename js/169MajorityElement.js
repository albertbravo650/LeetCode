/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let element = nums[0];
  let temp = 0;
  let comp = 0;
  nums.sort(function(a, b){return a - b});
  console.log(nums);
  for(let i=0; i<nums.length; i++) {
    if(nums[i]===nums[i-1]) {
      temp++;
      if(temp>=comp) {
        comp = temp;
        element = nums[i-1];
      }
      // notes
    }
    else {
      temp = 0;
    }
  }
  return element;
};

const nums1 = [3, 2, 3,2,2,1,5,5,2,2,2,2,2,5,4,7,9,8,6,6,8,8,7,7,7];
console.log(majorityElement(nums1));