function solution(my_string) {
    let answer = [];
    const arr = [...my_string];
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i])){
            answer.push(Number(arr[i]));
        }
    }
    return answer.reduce((acc, cur) => acc + cur);
}