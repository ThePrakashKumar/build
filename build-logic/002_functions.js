// EASY

// * 1

// function power(num1, num2) => {
//     return Math.pow(num1, num2)
// }

// console.log(expo(2, 3));

// * 2

function areaOfHexgon(side) {
    return 2.598 * side * side;
}

console.log(areaOfHexgon(10));

// * 3

function numberOfWords(sentance) {
    let arrOfWord = sentance.split(' ');
    return arrOfWord.length;
}

console.log(numberOfWords('We are neoGrammers'));

// * 4

function findMin(...num) {
    return Math.min(...num);
}

console.log(findMin(3, 5));
console.log(findMin(3, 5, 9, 1));

// * 5

function findMax(...num) {
    return Math.max(...num);
}

console.log(findMax(3, 5));
console.log(findMax(3, 5, 9, 1));

// * 6

function typeOfTriangle(a, b, c) {
    let angleArray = [a, b, c];

    let angleSum = angleArray.reduce((a, b) => {
        return a + b
    }, 0);

    if (angleSum !== 180) return 'It is not a Tringle.';

    let angleSet = new Set([a, b, c]);
    if (angleSet.size === 1) {
        return 'Equilateral Tringle'
    } else if (angleSet.size === 2) {
        return 'Isosceles Tringle';
    } else {
        return 'Scalen Tringle';
    }
};

console.log(typeOfTriangle(30, 60, 90))

// Medium 

// * 1

function arrayLength(arr) {
    return arr.length;
}

console.log(arrayLength([1, 5, 3, 7, 8]));

// * 2

function indexOf(arr, item) {
    return arr.indexOf(item);
}

console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

// * 3

function replace(arr, num1, num2) {
    let newArr = arr.map(item => {
        return item === num1 ? num2 : item;
    });
    return newArr;

}

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

// * 4

function mergeArray(arr1, arr2) {
    return [...arr1, ...arr2];
};

console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// * 5

function charAt(word, index) {
    return word[index];
}

console.log(charAt("neoGcamp", 4));

// * 6

function minDate(date1, date2) {
    // create array to get day/mongth/year
    const firstDateArray = date1.split('/');
    const secondDateArray = date2.split('/');

    const date1Seconds = new Date(firstDateArray[2], firstDateArray[1] - 1, firstDateArray[0]).getTime();
    const date2Seconds = new Date(secondDateArray[2], secondDateArray[1] - 1, secondDateArray[0]).getTime();

    if (Number(date1Seconds) > Number(date2Seconds)) {
        return date2;
    }
    return date1;
}

console.log(minDate('02/05/2021', '24/01/2021'));
console.log(minDate('02/05/2019', '24/01/2021'));

// Advance

// * 1

function encodeString(str, num) {
    let input = str.toLowerCase();
    let number = num;
    if (num > 25) {
        number = num % 25;

    }
    let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let newWord = '';
    for (lett of input) {
        let index = letter.indexOf(lett)
        newWord += letter[index + number];
    }

    return newWord;

}

console.log(encodeString("neogcamp", 2));


// * 2

function toSentenceCase(sentence) {
    const sentenceArray = sentence.split(' ');
    const modifiedArray = sentenceArray.map(word => {
        return (word.slice(0, 1)).toUpperCase() + (word.slice(1)).toLowerCase();
    });

    return modifiedArray.join(' ');
}

console.log(toSentenceCase('we are neoGrammers'));

// * 3

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([100, 83, 32, 9, 45, 61]));

// * 4

function reverseCharactersOfWord(sentence) {
    let wordArray = sentence.split(' ');
    let modifiedArray = wordArray.map(word => {
        let wordFinal = "";
        for (var i = word.length - 1; i >= 0; i--) {
            wordFinal += word[i];
        }
        return wordFinal;

    });
    return modifiedArray.join(' ');
}

console.log(reverseCharactersOfWord('we are neoGrammers'));