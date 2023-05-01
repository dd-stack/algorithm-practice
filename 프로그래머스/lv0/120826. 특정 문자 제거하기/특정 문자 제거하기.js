function solution(my_string, letter) {
    let arr = [...my_string];
    let answer = arr.filter(x => x !== letter);
    return answer.join('');
}