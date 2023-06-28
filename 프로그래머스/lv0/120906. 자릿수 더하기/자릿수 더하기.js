function solution(n) {
    const str = n.toString();
    let answer = 0;
    for(let i = 0; i < str.length; i++){
        answer = answer + Number(str[i]);
    }
    return answer;
}