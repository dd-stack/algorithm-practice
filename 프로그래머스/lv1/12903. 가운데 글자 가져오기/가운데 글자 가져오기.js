function solution(s) {
    let idx = 0;
    if(s.length % 2 === 0){
        idx = s.length / 2;
        return s[idx - 1] + s[idx]
    } else {
        idx = Math.floor(s.length / 2);
        return s[idx];
    }
}