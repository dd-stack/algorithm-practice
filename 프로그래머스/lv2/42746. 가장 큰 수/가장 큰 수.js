function solution(numbers) {
    // // 탈출 조건
    // if(numbers.length === 0){
    //     return "";
    // }
    // // 첫번째 자리수만 들어간 배열 -> [6, 1, 2]
    // const arr = numbers.map(x => Number(x.toString()[0]));
    // // 최대값 -> 6
    // const maxNum = Math.max(...arr);
    // // 최대값이 한개라면,
    // if(arr.filter(x => x === maxNum).length === 1){
    //     // 해당값의 인덱스를 찾아 문자열로 변환
    //     // splice는 원본 배열의 내용을 변경한다.
    //     const result = numbers.splice(arr.indexOf(maxNum), arr.indexOf(maxNum) + 1).toString();
    //     return result + solution(numbers); // -> result === 6, numbers === [ 10, 2 ]
    // }
    // // 최대값이 한개가 아니라면,
    // if(arr.filter(x => x === maxNum).length !== 1){
    //     // 그 값들의 다음 자리 수들끼리 비교
    // }
    
    // numbers를 문자열로 변환한 후 (내림차순) 정렬.
    const sortedNumbers = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    
    // 정렬된 숫자를 이어 붙인다. 
    const answer = sortedNumbers.join("");

    // 결과가 "0"으로 시작하는 경우 "0"을 반환.
    if (answer.charAt(0) === "0") {
        return "0";
    } else {
        return answer;
    }
}