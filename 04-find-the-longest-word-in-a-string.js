// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
    str = str.split(' ');
    let length = str[0].length;
    for (let i = 1; i < str.length; i++) {
      if (length < str[i].length) {
        length = str[i].length;
      }
    }
    return length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");