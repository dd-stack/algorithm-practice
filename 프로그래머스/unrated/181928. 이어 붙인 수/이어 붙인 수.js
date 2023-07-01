function solution(num_list) {
    let odd = "";
    let even = "";
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 !== 0){
            odd = odd + String(num_list[i]);
        }
        if(num_list[i] % 2 === 0){
            even = even + String(num_list[i]);
        }
    }
    return Number(odd) + Number(even);
}