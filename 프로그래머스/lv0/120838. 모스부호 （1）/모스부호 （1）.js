function solution(letter) {
    let arr = letter.split(' ');
    let answer = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length === 1){
            if(arr[i] === '.'){
                answer = answer + 'e';
            }
            if(arr[i] === '-'){
                answer = answer + 't';
            }
        }
        if(arr[i].length === 2){
            if(arr[i] === '..'){
                answer = answer + 'i';
            }
            if(arr[i] === '.-'){
                answer = answer + 'a';
            }
            if(arr[i] === '-.'){
                answer = answer + 'n';
            }
            if(arr[i] === '--'){
                answer = answer + 'm';
            }
        }
        if(arr[i].length === 3){
            if(arr[i] === '...'){
                answer = answer + 's';
            }
            if(arr[i] === '..-'){
                answer = answer + 'u';
            }
            if(arr[i] === '.-.'){
                answer = answer + 'r';
            }
            if(arr[i] === '-..'){
                answer = answer + 'd';
            }
            if(arr[i] === '.--'){
                answer = answer + 'w';
            }
            if(arr[i] === '-.-'){
                answer = answer + 'k';
            }
            if(arr[i] === '--.'){
                answer = answer + 'g';
            }
            if(arr[i] === '---'){
                answer = answer + 'o';
            }
        }
        if(arr[i].length === 4){
            if(arr[i] === '-...'){
                answer = answer + 'b';
            }
            if(arr[i] === '-.-.'){
                answer = answer + 'c';
            }
            if(arr[i] === '..-.'){
                answer = answer + 'f';
            }
            if(arr[i] === '....'){
                answer = answer + 'h';
            }
            if(arr[i] === '.---'){
                answer = answer + 'j';
            }
            if(arr[i] === '.-..'){
                answer = answer + 'l';
            }
            if(arr[i] === '.--.'){
                answer = answer + 'p';
            }
            if(arr[i] === '--.-'){
                answer = answer + 'q';
            }
            if(arr[i] === '...-'){
                answer = answer + 'v';
            }
            if(arr[i] === '-..-'){
                answer = answer + 'x';
            }
            if(arr[i] === '-.--'){
                answer = answer + 'y';
            }
            if(arr[i] === '--..'){
                answer = answer + 'z';
            }
        }
    }
    return answer;
}