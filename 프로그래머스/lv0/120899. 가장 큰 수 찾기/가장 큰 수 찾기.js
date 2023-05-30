function solution(array) {
    let maxNum = Math.max(...array);
    let maxNumIdx = array.indexOf(maxNum);
    return [maxNum, maxNumIdx];
}