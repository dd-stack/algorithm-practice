function solution(s) {
    let arr = s.split(' ');
    let max = Number(arr[0]);
    let min = Number(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(max < Number(arr[i])){
            max = Number(arr[i])
        }
        if(min > Number(arr[i])){
            min = Number(arr[i])
        }
    }
    return `${min} ${max}`;
}