function solution(numer1, denom1, numer2, denom2) {
    let LCM = 0; //최소공배수
    for(let i = Math.max(denom1, denom2); i <= denom1 * denom2; i++){
        if(i % denom1 === 0 && i % denom2 === 0){
            LCM = i;
            break;
        }
    }
    let numer = numer1 * LCM / denom1 + numer2 * LCM / denom2;
    let GCD = 0; //최대공약수
    for(let i = Math.min(numer, LCM); i >= 1; i--){
        if(numer % i === 0 && LCM % i === 0){
            GCD = i;
            break;
        }
    }
    return [numer / GCD, LCM / GCD];
}