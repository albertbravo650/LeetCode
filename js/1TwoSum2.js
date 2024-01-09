
// var twoSum = function(nums, target) {
//     let arr = [];

//     for(i=0; i<nums.length; i++) {
//         for(j=1; j<nums.length; j++) {
//             if(nums[i]+nums[j] == target) {
//                 arr.push(i);
//                 arr.push(j);
//                 return arr;
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    let dict = {};
    for(let i=0; i<nums.length; i++){
        dict[nums[i]] = i;
        console.log(dict);
    }
    
    for(let i=0; i<nums.length; i++){
        const a = nums[i];
        const b = target;
        const x = b - a;
        const j = dict[x];
        if(j!=undefined && i!=j){
            return [i,j]
        }
    }
    
};

console.log(twoSum([5,2,8,4], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));