function solution(num_list, n) {
    let found = num_list.find(element => element === n);
    if(found === undefined){
        return 0;
    }
    return 1;
}