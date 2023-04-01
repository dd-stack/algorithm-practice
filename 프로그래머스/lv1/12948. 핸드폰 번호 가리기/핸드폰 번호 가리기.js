function solution(phone_number) {
    let masking = phone_number.slice(0, -4);
    let noMasking = phone_number.slice(-4);
    return "*".repeat(masking.length) + noMasking;
}