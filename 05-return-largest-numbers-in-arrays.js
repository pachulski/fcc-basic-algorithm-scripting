// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (largest < arr[i][j]) {
          largest = arr[i][j];
        }
      }
      newArr.push(largest);
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);