function solution(n, m) {
    let first = 0;
    for(let i = 1; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            first = i;
        }
    }
    let second = 0;
    for(let i = Math.max(n, m); i <= 10000000; i++){
        if(i % n === 0 && i % m === 0){
            second = i;
            return [first, second];
        }
    }
}