/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length>0) {
        let x = 0;
        for(i=0; i<nums.length; i++) {
            if(nums[i]===nums[i-1]) {
                x++;
            }
            else x = 0;
            // console.log(x);
            if(x===2 || nums[i]===nums[i-2]) {
                nums.splice(i-1, 1);
                //console.log(nums);
                i--;
                x=0;
            }
        }
        // console.log(nums);
        // for(i=0; i<nums.length; i++) {
        //     if(nums[i]===undefined) {
        //         nums.pop();
        //     }
        // }
    }
    return nums.length;
};

let nums1 = [1,1,1,2,2,3];
console.log(removeDuplicates(nums1));
// let nums2 = [0,0,1,1,1,1,2,3,3];
// console.log(removeDuplicates(nums2));
// let nums3 = [-3,-3,-2,-1,-1,0,0];
// console.log(removeDuplicates(nums3));


