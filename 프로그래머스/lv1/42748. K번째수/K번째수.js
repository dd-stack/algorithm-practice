function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++){
        const firstIdx = commands[i][0] - 1;
        const lastIdx = commands[i][1];
        const arr = array.slice(firstIdx, lastIdx);
        const sortArr = arr.sort((x, y) => x - y);
        
        answer.push(sortArr[commands[i][2] - 1])
    }
    return answer;
}