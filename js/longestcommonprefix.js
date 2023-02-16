function longestCommonPrefix(strs) {
    let firstStr = strs[0];
    // loop through the first string
    for(let i=0; i<firstStr.length; i++) {
        // loop through the other strings
        for(let j=1; j<strs.length; j++) {
            if(firstStr[i]!==strs[j][i]) {
                firstStr = firstStr.slice(0, i);
            }
        }
    }
    // return the longest common prefix
    console.log(firstStr);
    return firstStr;
}

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog","racecar","car"]);
longestCommonPrefix(["dog","dogracecar","dcar"]);