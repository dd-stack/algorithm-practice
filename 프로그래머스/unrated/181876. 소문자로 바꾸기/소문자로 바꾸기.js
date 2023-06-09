function solution(myString) {
    let arr = [...myString].map(x => x.toLowerCase());
    return arr.join('');
}