function solution(s) {
    let arr = s.split(' ');
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i][0] === "string"){
        result.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase());
        } else {
            result.push(arr[i].toLowerCase())
        }
    }
    return result.join(' ');
}