// beginner - intermediate

// * 1

function sumOfArray(arr) {
    const sum = arr.reduce((currentVal, item) => {
        return currentVal + item;
    }, 0);
    return sum;
}

console.log(sumOfArray([10, 4, 5, 2, 5, 6, 9]));

// * 2

function avgOfArray(arr) {
    const sum = arr.reduce((currentVal, item) => {
        return currentVal + item;
    }, 0);
    return sum / arr.length;
}

console.log(avgOfArray([10, 4, 5, 2, 5, 6, 9]));

// * 3

function maxAndMin() {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return `Maximum is ${max}, Minimum is ${min}`;
}

console.log(maxAndMin([10, 4, 5, 2, 5, 6, 9]));

// * 4

// Median 

function median(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let sortedArrLenght = sortedArr.length;
    if (sortedArrLenght % 2 === 1) {
        const indexOfMedian = ((sortedArrLenght + 1) / 2) - 1;
        return sortedArr[indexOfMedian];
    }

    let mid = (sortedArrLenght / 2) - 1;
    return (sortedArr[mid] + sortedArr[mid + 1]) / 2
}

console.log(median([10, 4, 5, 2, 5, 6, 9]));
console.log(median([10, 4, 5, 2, 5, 6, 9, 15]));

// Mode

function mode(arr) {
    let freqencyObj = {};
    for (let num of arr) {
        freqencyObj[num] = ++freqencyObj[num] || 1;
    }
    let frequencyArr = Object.entries(freqencyObj);

    let frequencyArrSorted = frequencyArr.sort((a, b) => b[1] - a[1]);
    return frequencyArrSorted[0][0];


}

console.log(mode([10, 4, 5, 2, 5, 6, 9]));

// * 5

function sumOfTwoArr(arr1, arr2){
    return [...arr1, ...arr2].reduce((curVal, num) => {
        return curVal + num;
    }, 0);
}

console.log(sumOfTwoArr([3,5,2,9,4], [6,2,8,1,3]));

// * 6

// Done Similar in String Section 

// * 7

// Done Similar in String Section
