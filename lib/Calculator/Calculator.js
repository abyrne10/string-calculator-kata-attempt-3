'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length > 1) {
        const result = getSumOfNumbers(numbers);
        return result;
    }
    return parseInt(numbers);
}

function getSumOfNumbers(string) {
    if (string.includes('//')) {
        const delimiter = getDelimiter(string);
        const stringToSum = string.split('\n')[1];
        const split = stringToSum.split(delimiter);
        const ints = getInts(split);
        const sum = getSum(ints);
        return sum;
    } else {
        const split = getSplit(string);
        const ints = getInts(split);
        const sum = getSum(ints);
        return sum;
    }
}

function getDelimiter(string) {
    return string[2];
}

function getSplit(string) {
    let split;
    if (string.includes('\n')) {
        split = getMixedSplit(string);
    } else {
        split = string.split(',');
    }
    return split;
}

function getMixedSplit(string) {
    const split = [];
    const splitOnComma = string.split(',');
    for (var i = 0; i < splitOnComma.length; i++) {
        if (splitOnComma[i].includes('\n')) {
            const splitOnNewline = splitOnComma[i].split('\n');
            for (var j = 0; j < splitOnNewline.length; j++) {
                split.push(splitOnNewline[j]);
            }
        } else {
            split.push(splitOnComma[i]);
        }
    }
    return split;
}

function getInts(array) {
    const ints = [];
    let negativeFound = false;
    const negatives = [];
    for (var i = 0; i < array.length; i++) {
        const int = parseInt(array[i]);
        if (int < 0) {
            negativeFound = true;
            negatives.push(int);
        }
        ints.push(int);
    }
    if (negativeFound) {
        throw new Error(`Negative numbers not allowed, ${negatives} found`);
    }
    return ints;
}

function getSum(array) {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

module.exports = {
    add,
};
