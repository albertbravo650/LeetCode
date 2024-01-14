var expect = function(val) {
    function toBe(val2) {
        if(val === val2) {
            return true;
        }
        else {
            throw new Error("Not Equal");
        }
    }

    function notToBe(val2) {
        if(val !== val2) {
            return true;
        }
        else {
            throw new Error("Equal");
        }
    }
    return {
        toBe, notToBe
    }
};


console.log(expect(5).toBe(5));
console.log(expect(5).toBe(7));
