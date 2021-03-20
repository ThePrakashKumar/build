// Beginner to Intermediate

// * 1

function upperCaseString(str) {
    return str.toUpperCase();
};

console.log(upperCaseString('smile'));

// * 2

function joinString(str1, str2) {
    return str1 + str2;
}

console.log(joinString('Please', 'smile'));

// * 3

function lenghtOfString(str) {
    return str.lenght;
}

console.log(lenghtOfString('smile'));

// * 4

function numToString(num) {
    return String(num);
}

console.log(numToString(123));

// * 5

function removeVowel(str) {
    const letterArray = [...str];
    const letterWithoutVowel = letterArray.filter(letter => !(/[aeiou]/.test(letter)));
    return letterWithoutVowel.join('');
}

console.log(removeVowel('happy'));

// * 6

function alphanumericString(str) {
    return /[0-9]/.test(str);
}

console.log(alphanumericString('batman@45'));

// * 7 
// ! CONSIDER THE SAME LENGTH INPUT

function longestAndSortestString(str1, str2, str3) {
    const strings = [str1, str2, str3];
    const stringLengthArray = strings.map(str => str.length);
    let maxLengthIndex = 0;
    let minLengthIndex = 0;

    for (let i = 0; i < stringLengthArray.length; i++) {
        if (stringLengthArray[i] > stringLengthArray[maxLengthIndex]) {
            maxLengthIndex = i;
        }
    }

    for (let i = 0; i < stringLengthArray.length; i++) {
        if (stringLengthArray[i] < stringLengthArray[maxLengthIndex]) {
            minLengthIndex = i;
        }
    }

    return `String With Maximum Lenght ${strings[maxLengthIndex]}, String With Minimun Lenght ${strings[minLengthIndex]}`;
}

console.log(longestAndSortestString('first', 'second', 'third'));

// * 8 

function vowelsAndConsonantCount(str) {
    let vowels = 0;
    let consonant = 0;
    for (let letter of str) {
        if (/[aeyiuo]/.test(letter)) {
            vowels++;
        }
        if (/[b-df-hj-np-tv-z]/.test(letter)) {
            consonant++;
        }
    }
    return `Vowel(s): ${vowels} Consonant(s); ${consonant}`;
}

vowelsAndConsonantCount("kinsdfge");

// * 9

function stringLenght(str) {
    let strArray = [...str];
    if (strArray.length > 7) return true;
    return false;
}

console.log(stringLenght('abcdefghi'));
console.log(stringLenght('abc'));

// * 10

function copySmallString(str1, str2) {
    if (str1.length > str2.length) {
        return str1 + str2;
    }
    return str2 + str1;
}

console.log(copySmallString('first', 'second'));
console.log(copySmallString('second', 'first'));

// * 11

function palindrome(str) {
    // convert string into an array
    let stringArray = [...str];
    console.log(stringArray);
    // reverse the above created array
    let reversedArray = stringArray.reverse();
    console.log(reversedArray);

    const rlength = reversedArray.length - 1;
    // loop over the array to check if both the arrays have same items
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== reversedArray[reversedArrayLength - i]) return false;
    }

    return true;
}

console.log(palindrome("abba"));

// * 12

// * 13

function extractDateFromString(str) {
    return str.slice(0, -5);
}

console.log(extractDateFromString('Wed April 15, 7pm'));

// * 14

function maskString(str) {
    return str.slice(0, -4) + "####";
}

console.log(maskString('5565534276455423'));

// * 15 
// ! NOT WORKING


function capitalizeFirstSixLetter(str) {
    let loopUpto = 6;
    let capitalLetter = ""
    for (let i = 0; i < loopUpto; i++) {
        if (str[i] !== " ") {
            capitalLetter += str[i].toUpperCase();
        }
        loopUpto += 1
        capitalLetter += " ";

    }
    return capitalLetter + str.slice(loopUpto);
}

console.log(capitalizeFirstSixLetter('tic tac toe is a fun game'));

// "Advance"

// * 1

function replace(s, c1, c2) {
    let finalString = ""
    for (let letter of s) {
        if (letter === c1) {
            finalString += c2;
            console.log('first', finalString);
        } else {
            finalString += letter;
            console.log("scond", finalString);
        }
    }
    return finalString;
}

console.log(replace("what'sUp?", 't', 'ss'));

// * 2 

function removeSpaces(s) {
    const arrWithoutSpace = s.split(" ");
    return arrWithoutSpace.join("");
}

console.log(removeSpaces("This is the     string"));

// * 3 

function removeSpaces(sen) {
    const arrReversed = sen.split(" ").reverse();
    return arrReversed.join(" ");
}

console.log(removeSpaces(" Welcome to NeoG Camp"));

// * 4

// ! Refactor 

function mostOccuredWord(s) {
    let obj = {};
    // loop over each letter and add their occurance 
    for (let letter of s) {
        obj[letter] = ++obj[letter] || 1;
    }
    // convert the above obj into array of key value pair
    let arrWithOccurance = Object.entries(obj);
    // sor the array
    let arrWithOccuranceSorted = arrWithOccurance.sort((a, b) => b[1] - a[1]);
    return arrWithOccuranceSorted[0][0];
}
console.log(mostOccuredWord("neogcaamp"));

// * 5 

function toggleCase(s) {
    let newString = "";

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 1) {
            newString += s[i].toUpperCase();
        } else {
            newString += s[i];
        }

    }
    return newString;
}
console.log(toggleCase('neogcamp'));

// * 6

function removeWord(sen, word) {
    const arrWord = sen.split(" ");
    const withoutWord = arrWord.filter(ele => ele !== word);
    return withoutWord.join(" ");
}

console.log(removeWord("programming camp are amazing", "programming"));