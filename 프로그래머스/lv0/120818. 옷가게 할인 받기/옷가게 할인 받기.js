function solution(price) {
    let payment = price;
    if(price >= 100_000){
        payment = price * 0.95;
    }
    if(price >= 300_000){
        payment = price * 0.9;
    }
    if(price >= 500_000){
        payment = price * 0.8;
    }
    return Math.trunc(payment);
}