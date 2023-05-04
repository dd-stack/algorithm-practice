function solution(sides) {
    let total = sides.reduce((acc, cur) => acc + cur);
    let max = Math.max(...sides);
    return max < total - max ? 1 : 2; 
}