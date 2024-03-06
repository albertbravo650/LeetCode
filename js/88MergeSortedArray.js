var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    
    for(let i =0; i<nums2.length; i++) {
        nums1.push(nums2[i]);
    }

    nums1.sort(function(a, b){return a-b});

    // for(let j=0; j<nums1.length; j++) {
    //     if(nums1[j]>nums1[j+1] && nums1[j+1]) {
    //         let x = nums1[j+1];
    //         let temp = nums1[j];
    //         nums1[j] = x;
    //         nums1[j+1] = temp;
    //     }
    // }

    return nums1;
};

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3));