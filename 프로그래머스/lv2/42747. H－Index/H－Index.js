function solution(citations) {
    // const sortedArr = citations.sort((a, b) => b - a);
    // for(let i = 0; i < sortedArr.length; i++){
    //     if(sortedArr.filter((x) => x >= sortedArr[i]).length >= sortedArr[i]){
    //         return sortedArr[i];
    //     }
    // }
    
    if(Math.max(...citations) === 0){
        return 0;
    }

    for(let i = Math.max(...citations); i >= 1; i--){
        if(citations.filter((x) => x >= i).length >= i){
            return i;
        }
    }
}