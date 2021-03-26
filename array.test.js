const { sum } = require('lodash');
const { mapFn, filterFn, findFn, reduceFn, everyFn } = require('./array-functions.js');
// it('', () => {
// expect().toEqual();
// });

describe('map function', () => {
it('should create a new array with the returned value of each callback', () => {

    const arr = [1, 2, 3, 4]
    const newArr = mapFn(arr, (n) => n * 2)
    
    expect(newArr).toEqual([2, 4, 6, 8]);
    });

it('should creates a new Array with all items whose callback returned true or a truthy value', () => {

    const arr = [2, 3, 4, 5, 6]
    const evenArr = filterFn(arr, (n) => n % 2 === 0)

expect(evenArr).toEqual([2, 4, 6]);
});

it('takes an Array and callback and returns the index of the first item whose callback returns true or a truthy value..', () => {

    const arr = [1, 2, 3, 4, 5, 6]
    const firstEven = findFn(arr, (n) => n % 2 === 0)

    expect(firstEven).toEqual(1);
});

it('should takes an Array and callback and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call. If the second initialValue parameter is not supplied, the first function call should be the first item as the accumulator, and the second array item as the item.', () => {

    const arr = [1, 2, 3, 4, 5];
    // const sumArr = (a, b);
    const finalArr = reduceFn(arr, (a, b) => (a + b));

    expect(finalArr).toEqual(15);
});

it('returns false if any items in the array return a falsy value', () => {
    const arr = [2, 3, 4, 6]
    const finalArr = everyFn(arr, (n) => n % 2 === 0);

    expect(finalArr).toBeFalsy();
})
});

it('returns true if every item in the Array has returned true', () => {
    const arr = [2, 4, 6, 8]

    const finalArr = everyFn(arr, (n) => n % 2 === 0)

    expect(finalArr).toBeTruthy();
})