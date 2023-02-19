function isValid(s) {
    s = s.split("");
    var stack = [];
    let valid = false;
    for(x in s) {
        // console.log(s[x]);
        if(s[x]==="(" || s[x]==="{" || s[x]==="[") {
            stack.push(s[x]);
        }
        else {
            var top = stack[stack.length-1];
            if(s[x]===")"&&top==="(" || s[x]==="}"&&top==="{" ||s[x]==="]"&&top==="[") {
                stack.pop();
            }
            else {
                stack.push(s[x]);
                console.log(stack);
                console.log(valid);
                return valid;
            }
        }
    }
    console.log(stack);
    if(stack.length===0) {
        valid = true;
    }
    console.log(valid);
    return valid;
}

isValid("()");
isValid("()[]{}");
isValid("(]");