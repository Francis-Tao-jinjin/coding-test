function cal_fibonacci_arr(len, result) {
    result.push(0, 1);
    for (let i = 2; i <= len; i++) {
        const fn = result[i - 1] + result[i - 2];
        result.push(fn);
    }
}

const memo = {}
function fibonacci(num) {

    if (memo[num]) return memo[num];
    if (num == 1) return 1;
    if (num == 0) return 0;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

function processData(input) {
    //Enter your code here
    const lines = input.split('\n');
    const inputArray = [];
    let max = 0;
    for (let i=0; i < lines.length; i++) {
        if (lines[i].trim() !== '') {
            const n = Number(lines[i].trim());
            inputArray.push(n);
            if (n > max) {
                max = n;
            }
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        console.log(fibonacci(inputArray[i]));
    }
    // const result = [];
    // cal_fibonacci_arr(max, result);
    // for (let i = 0; i < inputArray.length; i++) {
    //     console.log(result[inputArray[i]]);
    // }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
let line = 0;
process.stdin.on("data", function (input) {
    _input += input;
    line++;
});

process.on('SIGINT', function(){
    processData(_input);
    // console.log('input ended');
    process.stdout.write('\ninput ended\n');
    process.exit();
});
