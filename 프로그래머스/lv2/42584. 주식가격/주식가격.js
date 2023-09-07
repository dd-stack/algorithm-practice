function solution(prices) {
    // 이중 for문 -> 시간복잡도 O(n^2)
    
    // const answer = [];
    // for(let i = 0; i < prices.length; i++) {
    //     let count = 0;
    //     for(let j = i + 1; prices.length; j++) {
    //         if(prices[i] > prices[j]) {
    //             count++;
    //             break;
    //         } else {
    //             count++;
    //         }
    //     }
    //     answer.push(count);
    // }
    // return answer;
    
    
    
    // 스택으로 풀어보기 -> 시간복잡도 O(n)
    
    // prices와 동일한 길이 & 0으로 채워진 배열을 생성
    const answer = new Array(prices.length).fill(0);
    // 스택으로 사용할 배열을 생성 (인덱스를 저장할 예정)
    const stack = [];
    
    // 모든 prices를 돌면서,
    for (let i = 0; i < prices.length; i++) {
        // 스택이 비어있지 않고, 가격이 떨어졌을 경우
        // prices[stack[stack.length - 1]] -> 이전 시점에서 스택에 저장된 가격
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 스택에서 이전 시점의 가격(인덱스)을 꺼내서 (스택에서는 제거됨)
            const top = stack.pop();
            // 가격이 떨어지지 않은 시간을 계산해 answer에 넣는다.
            answer[top] = i - top;
        }
        // 스택에 인덱스를 넣는다. 
        stack.push(i);
    }
    
    // 스택에 남아 있는 인덱스들을 처리한다.
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }
    
    return answer;
    
    
    
    // 큐로도 풀어보기
    
    // const answer = new Array(prices.length).fill(0);
    // const queue = [];
    // 
    // for(let i = 0; i < prices.length; i++){
    //     while(queue.length > 0 && prices[i] < prices[queue[0]]) {
    //         const bottom = queue.shift();
    //         answer[bottom] = i - bottom;
    //     }
    //     queue.unshift(i);
    // }
    // 
    // while(queue.length > 0) {
    //     const bottom = queue.shift();
    //     answer[bottom] = prices.length - 1 - bottom;
    // }
    // 
    // return answer;
}