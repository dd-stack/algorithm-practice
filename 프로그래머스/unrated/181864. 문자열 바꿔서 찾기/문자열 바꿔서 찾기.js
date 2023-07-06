function solution(myString, pat) {
    let reverseStr = "";
    for(let i = 0; i < myString.length; i++){
        if(myString[i] === "A"){
            reverseStr = reverseStr + "B";
        }
        if(myString[i] === "B"){
            reverseStr = reverseStr + "A";
        }
    }
    return reverseStr.includes(pat) ? 1 : 0;
}