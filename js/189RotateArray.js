/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for(let i=0; i<k; i++) {
    for(let j=0; j<nums.length; j++) {
      if(!nums[j+1]) {
        nums[0] = nums[nums.length-1]
      }
      else {
        let temp = nums[j+1];
        nums[j+1] = nums[j];
        nums[j] = temp;
      }
      // console.log(nums);
    }
  }
  console.log(nums);
  return nums;
};

const nums = [1,2,3,4,5,6,7];
const k = 3;
console.log(rotate(nums, k));