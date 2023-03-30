function solution(a, b) {
    let min = a;
    let max = b;
    if(a > b){
        min = b;
        max = a;
    }
    let sum = 0;
    for(let i = min; i <= max; i++){
        sum = sum + i;
    }
    return sum;
}