function longestCommonPrefix(strs) {
    let lgc = "";
    let firstStr = strs[0];
    console.log(firstStr);
    // loop through the arrray of strings
    for(i=1; i<strs.length; i++) {
        console.log(strs[i]);
        for(j=0; j<strs[i].length; j++) {
            // console.log(strs[i][j]);
            if(strs[i][j]===firstStr[j]) {
                lgc += strs[i][j];
            }

        }
    }
    // return the longest common prefix
    console.log(lgc);
    return lgc;
}

longestCommonPrefix(["flower", "flow", "flight"]);