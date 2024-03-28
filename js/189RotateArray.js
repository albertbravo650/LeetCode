/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  // console.log(20 % 7);
  reverseArray(nums, 0, nums.length - 1); // reverse entire array
  reverseArray(nums, 0, k - 1); // reverse first k times elements
  reverseArray(nums, k, nums.length - 1); // reverse remaining elements
  return nums;
};

let reverseArray = function(nums, start, end) {
  // console.log(nums);
  while(start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

const nums = [1,2,3,4,5,6,7];
const k = 3;
// console.log(nums);
console.log(rotate(nums, k));