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

function countAnagrams(currentIndex, arr) {
    const currentStr = arr[currentIndex];
    let count = 0;
    for (let i = currentIndex + 1; i < arr.length; i++) {
        if (arr[i].length !== currentStr.length) {
            continue;
        }
        const result = isAnagrams(currentStr, arr[i]);
        if (result) {
            count += 1;
        }
    }
    return count;
}

function isAnagrams(strA, strB) {
    const hash = {};
    for (let i = 0; i < strA.length; i++) {
        if (hash[strA[i]] == undefined) {
            hash[strA[i]] = 1;
        } else {
            hash[strA[i]]++;
        }
    }

    for (let i = 0; i < strB.length; i++) {
        if (hash[strB[i]] == undefined || hash[strB[i]] == 0) {
            return false;
        } else {
            hash[strB[i]]--;
        }
    }

    return true;
}

function getAllSubstrings(str) {
    const substringsArr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substr = str.substr(i, j - i);
            substringsArr.push(substr);
        }
    }
    return substringsArr;
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    const duplicatedArr = s.split('').filter((v, i) => s.indexOf(v) !== i);
    if (duplicatedArr.length === 0) {
        return 0;
    }
    let total = 0;
    const substringsArr = getAllSubstrings(s);
    for (let i = 0; i < substringsArr.length; i++) {
        total += countAnagrams(i, substringsArr);
    }
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
