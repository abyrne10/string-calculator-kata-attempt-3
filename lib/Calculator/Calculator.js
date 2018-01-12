'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length > 1) {
        const split = numbers.split(',');
        const ints = getInts(split);
        const sum = getSum(ints);
        return sum;
    }
    return parseInt(numbers);
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
