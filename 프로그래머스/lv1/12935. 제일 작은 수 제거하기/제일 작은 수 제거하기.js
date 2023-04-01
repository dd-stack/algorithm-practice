function solution(arr) {
    let minIdx = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[minIdx] > arr[i]){
            minIdx = i;
        }
    }
    arr.splice(minIdx, 1);
    if(arr.length === 0){
        return [-1];
    } return arr;
}