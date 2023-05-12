function solution(money) {
    let answer = [];
    answer.push(Math.trunc(money / 5500));
    answer.push(money % 5500);
    return answer;
}