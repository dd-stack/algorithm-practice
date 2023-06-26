function solution(num_list) {
    const answer = [...num_list];
    const lastIdx = num_list.length - 1;
    if(num_list[lastIdx] > num_list[lastIdx - 1]){
        answer.push(num_list[lastIdx] - num_list[lastIdx - 1]);
    } 
    if(num_list[lastIdx] <= num_list[lastIdx - 1]){
       answer.push(num_list[lastIdx] * 2);
    }
    return answer;
}