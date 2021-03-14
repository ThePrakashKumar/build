// * 1

function add(num1, num2) {
    console.log(num1 + num2);
}

add(20, 60);

// * 2

function simpleIntrest(p, t, r) {
    return (p * t * r) / 100;
}

console.log(simpleIntrest(100, 6, 2));

// * 3 

function kineticEnergy(m, v) {
    return (0.5 * m * v * v);
}

console.log(kineticEnergy(5, 5));

// * 4

function farhToCel(temp) {
    return (temp - 32) * 5 / 9;
}

console.log(farhToCel(56));

// * 5

function palyWithSquare(side) {
    return {
        'Area of Square': side * side,
        'Perimeter of Square': 4 * side,
        'Surface Area of Cube': 6 * side * side,
        'Volumn of cube': side * side * side
    }
}

console.log(palyWithSquare(5));


// * 6

function profitOrLoss(cp, sp) {
    const pOrL = sp - cp;
    if (pOrL < 0) {
        return `${String(pOrL).slice(1)} Loss`;
    }
    return `${pOrL} Profit`;
}

console.log(profitOrLoss(1500, 2000));
console.log(profitOrLoss(3125, 1125));

// * 7

function sum(num) {
    return (num * (num + 1)) / 2;
}

console.log(sum(100));

// * 8

function printOdd(num) {
    let oddNumers = [];
    for (let i = 1; i < num * 2; i += 2) {
        oddNumers.push(i);
    }

    return oddNumers.sort((a, b) => b - a);
}

console.log(printOdd(4));

// * 9

function sumDigit(num) {
    // convert number to string
    const numToString = String(num);
    // convert that string into an array
    const stringArray = [...numToString];
    // get an array of number using the above array
    const numArray = stringArray.map(str => Number(str));
    // finally get the sum of above array
    return numArray.reduce((number, currentVal) => {
        return number + currentVal
    }, 0);
}

console.log(sumDigit(1234));

// * 10

function reverse(num) {

    const numToString = String(num);
    const stringArray = [...numToString];
    const reversedSringArray = stringArray.reverse();
    return Number(reversedSringArray.join(''));
}

console.log(reverse(1234));

// * 11



// * 12