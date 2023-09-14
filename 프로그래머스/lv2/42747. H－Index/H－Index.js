function solution(citations) {
    if(Math.max(...citations) === 0){
        return 0;
    }
    
    const MaxCount = Math.min(Math.max(...citations), citations.length);
    for(let i = MaxCount; i >= 1; i--){
        if(citations.filter((x) => x >= i).length >= i){
            return i;
        }
    }
}