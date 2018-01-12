'use strict';

function add(numbers) {
    let result;
    if (numbers === '') {
        result = 0;
    } else {
        result = getResultForNonEmptyString(numbers);
    }
    return result;
}

function getResultForNonEmptyString(string) {
    let result;
    if (string.length > 1) {
        result = getSumOfNumbersInString(string);
    } else {
        result = parseInt(string);
    }
    return result;
}

function getSumOfNumbersInString(string) {
    const split = getSplit(string);
    const ints = getInts(split);
    const sum = getSum(ints);
    return sum;
}

function getSplit(string) {
    let split;
    if (string.includes('//')) {
        split = getCustomSplit(string);
    } else {
        split = getStandardSplit(string);
    }
    return split;
}

function getCustomSplit(string) {
    const delimiter = string[2];
    const stringToSum = string.split('\n')[1];
    const split = stringToSum.split(delimiter);
    return split;
}

function getStandardSplit(string) {
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
