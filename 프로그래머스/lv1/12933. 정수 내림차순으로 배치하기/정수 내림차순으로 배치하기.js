function solution(n) {
    //숫자를 문자열로 바꿔 배열에 넣은 다음, 각 배열의 인자를 다시 숫자로 바꿈
    let arr = [...n.toString()].map(i => Number(i)); 
    arr.sort((a, b) => (b-a)); //내림차순 정렬
    return Number(arr.join("")); //배열을 문자열로 합친 다음 숫자 형태로 변환
}