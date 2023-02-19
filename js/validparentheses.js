function isValid(s) {
    let valid = false;
    let temp1 = "";
    let temp2 = "";
    for(i=0; i<s.length; i++) {
        // console.log(s[i]);
        if(s[i+1]) {
            // INCORRECT SOLUTION, DOES NOT SOLVE FOR NESTED PARENTHESES eg.([{}])
            temp1 = s[i];
            temp2 = s[i+1];
            console.log(temp1, temp2);
            if(temp1==="(" && temp2===")") {
                valid = true;
                i++;
            }
            else if(temp1==="[" && temp2==="]") {
                valid = true;
                i++;
            }
            else if(temp1==="{" && temp2==="}") {
                valid = true;
                i++;
            }
            else {
                valid = false;
                console.log(valid);
                return false;
            }
        }
    }
    console.log(valid);
    return valid;
}

isValid("()");
isValid("()[]{}");
isValid("(]");