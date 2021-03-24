const { mapFn, filterFn, findFn } = require('./array-functions.js');
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

});