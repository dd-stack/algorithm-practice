function solution(numbers, target) {
    // 참고: 타겟 넘버와 일치하는 경우를 카운트하면 더 효율적임
    const result = [];
    
    function dfs(nodeIdx, sum){
        // 마지막 노드까지 진행한 후
        if(nodeIdx === numbers.length){
            result.push(sum);
            return;
        }
        dfs(nodeIdx + 1, sum + numbers[nodeIdx]);
        dfs(nodeIdx + 1, sum - numbers[nodeIdx]);
    }
    
    dfs(0, 0);
    
    // 재귀 함수 진행 순서 예시 : [1, 2, 3]
    
    // dfs(0, 0)
    // dfs(1, 1)                                    * dfs(1, -1)
    // dfs(2, 3)            * dfs(2, -1)              dfs(2, 1)             ** dfs(2, -3)
    // dfs(3, 6) dfs(3, 0)    dfs(3, 2) dfs(3, -4)    dfs(3, 4) dfs(3, -2)     dfs(3, 0) dfs(3, -6)
    
    // dfs(3, 6) -> [6]
    // dfs(3, 0) -> [6, 0]
    // dfs(3, 2) -> [6, 0, 2]
    // dfs(3, -4) -> [6, 0, 2, -4]
    // dfs(3, 4) -> [6, 0, 2, -4, 4]
    // dfs(3, -2) -> [6, 0, 2, -4, 4, -2]
    // dfs(3, 0) -> [6, 0, 2, -4, 4, -2, 0]
    // dfs(3, -6) -> [6, 0, 2, -4, 4, -2, 0, -6]
    
    return result.filter(x => x === target).length;
}