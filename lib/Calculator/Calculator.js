'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length > 1) {
        const split = getSplit(numbers);
        const ints = getInts(split);
        const sum = getSum(ints);
        return sum;
    }
    return parseInt(numbers);
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
    for (var i = 0; i < array.length; i++) {
        ints.push(parseInt(array[i]));
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
