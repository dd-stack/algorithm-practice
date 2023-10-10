function solution(a, b) {
    const ab = a * Math.pow(10, String(b).length) + b;
    const ba = b * Math.pow(10, String(a).length) + a;
    return Math.max(ab, ba);
}