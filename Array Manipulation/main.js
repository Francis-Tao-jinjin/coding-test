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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    const result = Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = 0;
    }
    let max = 0;
    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0];
        const b = queries[i][1];
        const k = queries[i][2];
        result[a-1] += k;
        if (b < n) {
            result[b] -= k;
        }
    }
    let x = result[0];
    max = x;
    for (let i = 1; i < n; i++) {
        result[i] = x + result[i];
        x = result[i];
        if (result[i] > max) {
            max = result[i];
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
