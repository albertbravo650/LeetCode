/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sumNums = [];
    for (i=0; i < nums.length; i++) {
        for (x=0; x < nums.length; x++) {
            if ((nums[i]+nums[x]) == target && i!=x) {
            sumNums.push(i)
            }
        }
    }
    
    return sumNums;
};