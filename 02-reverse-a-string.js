function reverseString(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    return str;
    // Chaining the three methods together
    // return str.split('').reverse().join(''); 
  }

  reverseString("hello");