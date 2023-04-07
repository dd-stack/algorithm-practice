function solution(left, right) {
    function divisor(n){
        let count = 0;
        for(let i = 1; i <= n; i++){
            if(n % i === 0) {
                count++
            }
        }
        return count;
    }
    let result = 0;
    for(let i = left; i <= right; i++){
        if(divisor(i) % 2 === 0){
            result = result + i;
        } else {
            result = result - i;
        }
    }
    return result;
}