function solution(citations) {
    // const sortedArr = citations.sort((a, b) => b - a);
    // for(let i = 0; i < sortedArr.length; i++){
    //     if(sortedArr.filter((x) => x >= sortedArr[i]).length >= sortedArr[i]){
    //         return sortedArr[i];
    //     }
    // }
    
    // [9,9,9,9,1] -> 4
    
    if(Math.max(...citations) === 0){
        return 0;
    }
    
    const MaxCount = Math.min(Math.max(...citations), citations.length)
    for(let i = MaxCount; i >= 1; i--){
        if(citations.filter((x) => x >= i).length >= i){
            return i;
        }
    }
}