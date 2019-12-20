'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var i =0;
    var alice =0;
    var bob =0;
    a.forEach(() => (function(a1,b1){
        if (a1[i] > b1[i]){ 
            alice +=1;
        }else if (a1[i] < b1[i]){
            bob +=1;
        }
    i++;
    }(a,b)));
    return alice.toString(10) +" " + bob.toString(10) ;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    //ws.write(result.join(' ') + '\n');
ws.write(result + '\n');
    ws.end();
}

