'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length > 1) {
        const sum = getSum(numbers);
        return sum;
    }
    return parseInt(numbers);
}

function getSum(numbers) {
    const firstInt = parseInt(numbers[0]);
    const secondInt = parseInt(numbers[2]);
    const sum =  firstInt + secondInt;
    return sum;
}

module.exports = {
    add,
};
