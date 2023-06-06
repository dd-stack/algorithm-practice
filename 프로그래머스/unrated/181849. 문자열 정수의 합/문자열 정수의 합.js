function solution(num_str) {
    let numArr = [...num_str].map(x => Number(x));
    return numArr.reduce((acc, cur) => acc + cur);
}