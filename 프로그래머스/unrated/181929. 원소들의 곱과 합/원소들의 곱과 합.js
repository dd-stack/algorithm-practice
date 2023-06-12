function solution(num_list) {
    const plus = num_list.reduce((acc, cur) => acc + cur);
    const multiply = num_list.reduce((acc, cur) => acc * cur);
    return plus * plus > multiply ? 1 : 0;
}