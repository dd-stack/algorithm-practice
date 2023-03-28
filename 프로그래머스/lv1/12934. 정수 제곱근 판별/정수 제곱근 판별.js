function solution(n) {
    let answer = -1;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(i*i === n){
            answer = (i + 1)*(i + 1);
        }
    }
    return answer;
}