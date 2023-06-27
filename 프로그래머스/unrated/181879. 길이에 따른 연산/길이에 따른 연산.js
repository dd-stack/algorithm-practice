function solution(num_list) {
    let answer = 0;
    if(num_list.length >= 11){
        answer = num_list.reduce((acc, cur) => acc + cur);
    }
    if(num_list.length <= 10){
        answer = num_list.reduce((acc, cur) => acc * cur);
    }
    return answer;
}