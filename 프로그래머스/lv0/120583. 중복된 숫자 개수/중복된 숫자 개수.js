function solution(array, n) {
    let filterArr = array.filter(x => x === n);
    return filterArr.length;
}