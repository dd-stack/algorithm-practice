function solution(num, k) {
    let numArr = [...String(num)];
    if(numArr.indexOf(String(k)) !== -1){
        return numArr.indexOf(String(k)) + 1;
    }
    return -1;
}