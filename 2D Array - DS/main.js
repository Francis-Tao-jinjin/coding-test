'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getHourglass(i, j, arr) {
    let sum = 0;
    // let string = '';
    for (let _i = i; _i < i + 3; _i++) {
        for (let _j = j; _j < j + 3; _j++) {
            if (_i === i+1 && _j === j) {
                continue;
            }
            if (_i === i+1 && _j === j + 2) {
                continue;
            }
            // string = string + arr[_i][_j] + ' ';
            sum += arr[_i][_j];
        }
        // string += '\n';
    }
    return sum;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        const row = arr[i];
        for (let j = 0; j < row.length - 2; j++) {
            const sum = getHourglass(i, j, arr);
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
