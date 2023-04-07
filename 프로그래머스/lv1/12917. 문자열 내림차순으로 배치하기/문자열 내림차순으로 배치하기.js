function solution(s) {
    let sortArr = [...s].sort().reverse();
    return sortArr.join("");
}