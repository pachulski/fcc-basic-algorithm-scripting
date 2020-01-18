// Return the factorial of the provided integer. Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
  
  factorialize(5);