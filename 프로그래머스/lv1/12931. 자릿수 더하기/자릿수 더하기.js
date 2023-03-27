function solution(n)
{
    let answer = 0;
    let arr = [...n.toString()]
    for(let i = 0; i < arr.length; i++){
        answer = answer + Number(arr[i]);
    }
    return answer;
}