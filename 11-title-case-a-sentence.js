// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    str = str.toLowerCase().split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ');
    return str;
  }
  
  titleCase("I'm a little tea pot");