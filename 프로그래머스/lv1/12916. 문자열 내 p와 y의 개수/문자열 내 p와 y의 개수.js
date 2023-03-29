function solution(s){
    let upStrArr = [...s.toUpperCase()];
    let pNum = 0;
    let yNum = 0;
    for(let i = 0; i < upStrArr.length; i++){
        if(upStrArr[i] === 'P'){
            pNum = pNum + 1;
        }
        if(upStrArr[i] === 'Y'){
            yNum = yNum + 1;
        }   
    }
    return pNum === yNum;
}