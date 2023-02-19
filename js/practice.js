// let strs = [];
// let str = "A string. Hello";
// for(var i=0; i<str.length; i++) {
//     console.log(str[i]);
// }
// console.log(str.charAt(0))


// STACK Example LIFO!!!!!!
var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        console.log(c);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    console.log(c);
                    console.log(c === stack.pop());
                    return false;
                }
            // console.log(stack);
        }
    }
    console.log(stack);
    console.log(stack.length === 0);
    return stack.length === 0;
};

// isValid("()");
isValid("()[]{}");
isValid("(]");