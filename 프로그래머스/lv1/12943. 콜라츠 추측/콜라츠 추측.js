let result = 0;

function solution(num) {
    if(num === 1){
        return result;
    }
    if(result >= 500){
            return -1
    }
    let n = 0;
    if(num % 2 === 0){
        n = num / 2;
        result += 1 
        return solution(n);
    }
    if(num % 2 === 1){
        n = num * 3 + 1;
        result += 1 
        return solution(n);
    }
}