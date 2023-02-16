function longestCommonPrefix(strs) {
    let lgc = "";
    let firstStr = strs[0];
    // loop through the arrray of strings
    for(i=1; i<strs.length; i++) {
        // console.log(strs[i]);
        if(!strs[i].startsWith(firstStr)) {
            firstStr = firstStr.slice(0, -1);
        } else {
            i++;
        }
    }
    // return the longest common prefix
    console.log(firstStr);
    return lgc;
}

longestCommonPrefix(["flower", "flow", "flight"]);