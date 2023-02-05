function isPalindrome(x) {
    let str1 = String(x);
    // console.log(str1);
    // console.log(typeof(str1));
    array1 = str1.split("");
    // console.log(array1);
    let var2 = array1.length-1;
    let palindrome = false; 
    for(var i=0; i<array1.length/2; i++) {
        console.log(array1[i], array1[var2])
        if(array1[i]===array1[var2]) {
            var2--;
            palindrome = true;
        }
        else {
            palindrome = false;
            return palindrome;
        }
    }
    return palindrome;
}

var result1 = isPalindrome(-121);
console.log(result1);