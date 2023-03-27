function solution(num) {
    let answer = '';
    if(num < 0){
        num = -1 * num
    }
    if(num % 2 === 1){
        answer = 'Odd'
    } else {answer = 'Even'}
    return answer;
}