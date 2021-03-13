// EASY

// *1

function addFiveNum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(addFiveNum(5, 13, 7, 21, 48));

// *2

let input = prompt('Please enter the number?');

function oddOrEven(input) {
    return input % 2 === 0 ? "It's Even!" : "It's Odd!";
}

console.log(oddOrEven(input));

// *3

function maxMin(num1, num2) {
    console.log('Max is:', Math.max(num1, num2));
    console.log('Min is:', Math.min(num1, num2));
}

maxMin(5.2, 60);

// *4

function maxOfThree(num1, num2, num3) {
    console.log('Max is:', Math.max(num1, num2, num3));
}

maxMin(5.2, 60, 1);

// *5

function minOfThree(num1, num2, num3) {
    console.log('Min is:', Math.min(num1, num2, num3));
}

maxMin(5.2, 60, 1);

// *6 

function dayOfMonth(month) {
    let input = month.toLowerCase();
    const days31 = ["january", "march", "may", "july", "august", "october", "december"];
    const days28r29 = ["february"];
    const days30 = ["april", "may", "june", "november"];

    if (days31.includes(input)) {
        return "It has 31 Days.";
    } else if (days30.includes(input)) {
        return "It has 30 Days"
    } else if (days28r29.includes(input)) {
        return "It has 28/29 Days."
    }
    return "Check Your Input!"
}
console.log(dayOfMonth("march"));
console.log(dayOfMonth("May"));
console.log(dayOfMonth("february"));
console.log(dayOfMonth("Monday"))

// Intermediate

// *1

function fizzBuzz() {
    let newArr = [];
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            newArr.push("Fizz");
        } else if (i % 5 === 0) {
            newArr.push("Buzz");
        } else {
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(fizzBuzz())

// *2

for (let i = 1; i < 6; i++) {
    let output = "*";
    for (let j = 1; j < i; j++) {
        output += "*";
    }
    console.log(output)
}

// *3

function multiple() {
    let input = Number(prompt("Please enter a number?"));
    let output = []
    for (let i = 1; i < 13; i++) {
        output.push(input * i);
    }
    console.table(output);
}
multiple();

// *4

function fibonacci(num) {
    let arr = [0];
    if (num === 1) {
        return arr;
    } else if (num === 1) {
        arr[1] = 1;
        return arr;
    } else {
        arr[1] = 1;
        for (let i = 2; i < num; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
        }
    }
    return arr;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(19));

// *5

function factorial() {
    let input = Number(prompt('Please enter a number?'));

    for (let i = input - 1; i > 1; i--) {
        input *= i
    }
    console.log(input);

}

factorial();

// *6

function primeOrNot() {
    const num = Number(prompt('Please enter a positvie number?'));
    let ret = 'Prime'
    if (num === 1) return '1 is not a Prime';
    for (let i = 2; i < parseInt(num / 2); i++) {
        if (num % i === 0) {
            ret = 'Non-Prime';
            break;
        }
    }
    return ret;
}

primeOrNot();

// *7

function weekend(day) {
    const input = day.toLowerCase();
    const weekends = ['saturday', 'sunday'];
    const weekdays = ['monday', 'tuesday', 'wednesday', 'friday'];
    if (weekends.includes(input)) {
        return `${(input.slice(0, 1)).toUpperCase()}${(input.slice(1))} is weekend.`
    } else if (weekdays.includes(input)) {
        return `${(input.slice(0, 1)).toUpperCase()}${(input.slice(1))} is weekday.`
    } else return "Don't know what are you talking about :/";
}

console.log(weekend('monday'));
console.log(weekend('sunday'));
console.log(weekend('January'));