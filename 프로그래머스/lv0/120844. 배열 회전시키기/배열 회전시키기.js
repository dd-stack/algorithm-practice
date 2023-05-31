function solution(numbers, direction) {
    if(direction === "right"){
        let rightNum = numbers.pop();
        numbers.unshift(rightNum);
    }
    if(direction === "left"){
        let leftNum = numbers.shift();
        numbers.push(leftNum);
    }
    return numbers;
}