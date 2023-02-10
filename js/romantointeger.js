function romanToInt(str) {
    let int1 = 0;
    // split string into an array
    array1 = str.split("");
    console.log(array1);
    // loop through string array
    for(var i=0; i<array1.length; i++) {
        // conditions for each symbol
        if(array1[i]==="I"){
            if(array1[i+1]==="V") {
                int1+=4;
                i+=1;
            } else if(array1[i+1]==="X") {
                int1+=9;
                i+=1;
            } else {
                int1++;
            }
        } else if(array1[i]==="V"){
            int1+=5;
        } else if(array1[i]==="X"){
            int1+=10;
        } else if(array1[i]==="L"){
            int1+=50;
        } else if(array1[i]==="C"){
            int1+=100;
        } else if(array1[i]==="D"){
            int1+=500;
        } else{
            int1+=1000;
        }

    }
    return int1;
}

var test1 = romanToInt("III");
console.log(test1);
var test2 = romanToInt("LVIII");
console.log(test2);
var test3 = romanToInt("MCMXCIV");
console.log(test3);