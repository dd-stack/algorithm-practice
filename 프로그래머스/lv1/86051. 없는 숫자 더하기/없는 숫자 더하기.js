function solution(numbers) {
    let answer = 45;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(arr[i] === numbers[j]){
                answer = answer - arr[i];
            }
        }
    }
    return answer;
}