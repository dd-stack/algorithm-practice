function solution(array) {
    let sortArr = array.sort((a, b) => a - b);
    let middleIdx = Math.trunc(sortArr.length/2);
    return sortArr[middleIdx];
}