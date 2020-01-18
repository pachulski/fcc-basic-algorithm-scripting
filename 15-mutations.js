// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    for (let i = 0; i < arr[1].length; i++){
      let regex = new RegExp(arr[1][i], 'i');
      if (regex.test(arr[0]) === false) {
        return false;
      };
    }
    return true;
  }
  
  mutation(["hello", "hey"]);