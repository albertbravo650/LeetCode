function removeElement(nums, val) {
    for(i=0; i<nums.length; i++) {
        if(nums[i]===val) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    console.log(nums.length);
    return nums.length;
}

// var removeElement = function(nums, val) {
//     var zeroStartIdx = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==val){
//             nums[zeroStartIdx]=nums[i];
//             zeroStartIdx++
//         }
//     }
//     console.log(nums);
//     console.log(zeroStartIdx);
//     return zeroStartIdx; 
// };

var nums1 = [3,2,2,3], val1 = 3;
var k1 = removeElement(nums1, val1);

var nums2 = [0,1,2,2,3,0,4,2], val2 = 2;
var k2 = removeElement(nums2, val2);