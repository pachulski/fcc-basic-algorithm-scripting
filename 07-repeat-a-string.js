// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let arr = [];
    if (num > 0) {
      for (let i = 1; i <= num; i++) {
      arr.push(str);
      }
    } else {
      return '';
    } 
    str = arr.join('');
    return str;
  }
  
  repeatStringNumTimes("abc", 3);