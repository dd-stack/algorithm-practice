function solution(n, computers) {
    const visited = {}; // 노드 방문 정보 초기화 visited = {0: flase, 1: false, 2: false}
    for(let i = 0; i <= n - 1; i++){
        visited[i] = false;
    }
    
    // dfs 함수
    function dfs(startNode) {
        const stack = [startNode]; // 시작 노드를 스택(지나온 경로)에 넣는다. stack = [0]
        // 스택이 빌 때까지 반복
        while(stack.length){
            // 더 이상 나아갈 곳이 없으면 되돌아간다. 
            const currentNode = stack.pop(); // currentNode = 0, stack = []
            // 전체 노드를 확인 (각 컴퓨터는 0부터 n-1인 정수로 표현)
            // 0 -> [[1, 1, 0],
            //       [1, 1, 0],
            //       [0, 0, 1]]
            for (let i = 0; i <= n - 1; i++) {
                // 만약 간선 정보가 있고, 아직 방문되지 않았다면
                if (computers[currentNode][i] === 1 && !visited[i]) {
                    visited[i] = true; // visited = {0: true, 1: false, 2: false}
                                       // visited = {0: true, 1: true, 2: false}
                    stack.push(i); // stack = [0]
                                   // stack = [0, 1]
                }
            }
        }
    }
    
    let count = 0;
    // 전체 노드를 확인 (각 컴퓨터는 0부터 n-1인 정수로 표현)
    for (let i = 0; i <= n - 1; i++) {
        // 노드가 아직 방문되지 않았다면 dfs 실행
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    // dfs가 몇번 실행되었는지 -> 네트워크의 개수 
    return count;               
}

    