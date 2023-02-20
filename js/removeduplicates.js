// nums is sorted in a non-decreasing order
function removeDuplicates(nums) {
    let k = 0;
    // console.log(k);
    // let j = nums[0];
    if(nums.length>1) {
        for(i=0; i<nums.length; i++) {
            if(nums[i]===nums[i+1]) {
                // nums[i-1] = nums[i];
                // nums[i] = undefined;
                nums.splice(i, 1);
                i--;
            }
            // else if()
        }
        for(i=0; i<nums.length; i++) {
            if(nums[i]===undefined) {
                nums.pop();
            }
        }
        console.log(nums);
        return nums.length;
    }
    else {
        console.log(nums);
        return nums;
    }
}

var nums = [1,1,2];
var k = removeDuplicates(nums);
console.log(k);

var nums2 = [0,0,1,1,1,2,2,3,3,4];
var k2 = removeDuplicates(nums2);
console.log(k2);