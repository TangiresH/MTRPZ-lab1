const readlineSync = require('readline-sync');
const fs = require('fs');


function nonInteractiveMode(args) {
    const filename = args[0];

    try {
        const dataInput = fs.readFileSync(filename, 'utf8').trim().split(" ");

        if(dataInput.length !== 3) {
            throw new Error(`Invalid input in file: Expected 3 numbers, got ${data.length} numbers`);
        }
        const a = parseFloat(dataInput[0]);
        const b = parseFloat(dataInput[1]);
        const c = parseFloat(dataInput[2]);

        if(a === 0.0) {
            console.log('Error: "a" coefficient cannot be 0');
            process.exit(1);
        } else if(isNaN(a) || isNaN(b) || isNaN(c)) {
            console.log('Error. Enter a valid number')
            process.exit(1);
        }

        solveQuadEquation(a, b, c);
        } catch (error) {
        console.log(`File: ${filename} doesn't exist`);
        process.exit(1);
    }
}

function checkInput(message) {
    while (true) {
        const input = readlineSync.question(message);
        const parsedInput = parseFloat(input);

        if(!isNaN(parsedInput)) {
            return parsedInput;
        }

        console.log(`Error. Expected a valid real number, got ${input} invalid instead`);
    }
}

function interactiveMode() {
    let a;

    do {
        a = checkInput('a = ');
        if (a === 0.0) {
            console.log('Error: "a" coefficient cannot be zero');
        }
    } while (a === 0.0)
    const b = checkInput('b = ');
    const c = checkInput('c = ');

    solveQuadEquation(a, b, c);
}

function solveQuadEquation (a, b, c) {
    const discr = b * b - 4.0 * a * c;
    const sqrtDiscr = Math.sqrt(Math.abs(discr));
    const x1 = (-b + sqrtDiscr) / (2.0 * a);
    const x2 = (-b - sqrtDiscr) / (2.0 * a);

    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

    if(discr < 0) {
        console.log('No real roots');
    } else if(discr > 0) {
        console.log(`x1: ${x1}`);
        console.log(`x2: ${x2}`);
    } else {
        console.log(`x1: ${x1}`);
    }
}
