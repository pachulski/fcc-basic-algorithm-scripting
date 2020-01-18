// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
    let newArr = arr.map(func);
    if (newArr.indexOf(true) === -1) {
      return undefined;
    } else {
      return arr[newArr.indexOf(true)];
    }
    // using .find() method
    // return arr.find(func);
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);