function solution(x) {
    let arr = x.toString().split('')
    let num = 0;
    for(let i = 0; i < x.toString().length; i++){
        num = num + Number(arr[i]);
    }
    return x % num === 0
}