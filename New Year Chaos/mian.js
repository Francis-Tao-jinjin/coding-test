'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribeCount = 0;
    for (let i = 0; i < q.length; i++)  {
        const idx = i + 1;
        const value = q[i];
        if (value - idx > 2) {
            console.log('Too chaotic');
            return;
        }
        /**
         * because no one can bribe more than 2 persion, 
         * so we only need to check from 2 position 
         * in front of q[i]'s original position to the
         * current position of q[i], that why 
         * j = Math.max(0, value-2)
         */
        for (let j = Math.max(0, value-2); j < i; j++) {
            if (q[j] > value) {
                bribeCount += 1;
            }
        }
    }
    console.log(bribeCount);
    return;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
