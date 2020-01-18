// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    const compare = (a, b) => a - b;
    let index = arr.sort(compare).indexOf(arr.find(elem => elem >= num));
    return index >= 0 ? index : arr.length;
  }
  
  getIndexToIns([40, 60], 50);