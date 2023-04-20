const readline = require('readline');
//readline : Node.js에서 표준 입력으로부터 데이터를 읽어들이는 기능을 제공하는 모듈

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});