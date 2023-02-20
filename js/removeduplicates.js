// nums is sorted in a non-decreasing order
function removeDuplicates(nums) {
    // let k = nums.length;
    // console.log(k);
    // let j = nums[0];
    if(nums!==[]) {
        for(i=0; i<nums.length; i++) {
            if(nums[i]===nums[i+1]) {
                nums[i+1] = nums[i];
                nums[i] = null;
            }
        }
        console.log(nums);
        return nums.length;
    }
    else {
        console.log(nums);
        return null;
    }
}

var nums = [1,1,2];
var k = removeDuplicates(nums);