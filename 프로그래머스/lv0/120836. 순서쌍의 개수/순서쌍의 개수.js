function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n);
    if(sqrt === Math.trunc(sqrt)){
            answer+=1
        }
    for(let i = 1; i < sqrt; i++){
        if(n % i === 0){
            answer+=2
        }
    }
    return answer;
}