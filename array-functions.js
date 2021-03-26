const mapFn = (arr, callback) => {
  //Creating a clone of the arr
  const cloneArr = [...arr];

  //Loop through the arr and iterate on each item
  for (let i = 0; i < arr.length; i++) {
    //Use the callback to change each index
    cloneArr[i] = callback(cloneArr[i]);
  }
  //Return the mutated array
  return cloneArr;
};

const filterFn = (arr, callback) => {
  let cloneArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      cloneArr = [...cloneArr, arr[i]];
    }
  }
  return cloneArr;
};

const findFn = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) return i;
  }

  return -1;
};

const reduceFn = (arr, callback, initialValue) => {
  let accumulator = initialValue;

  if (initialValue === undefined) {
    accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
  } else {
    accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
  }

  return accumulator;
};

const everyFn = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) return false;
  }
  return true;
};

module.exports = {
  mapFn,
  filterFn,
  findFn,
  reduceFn,
  everyFn,
};
