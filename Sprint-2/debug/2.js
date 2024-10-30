// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


/* The getLastDigit function as defined will always return the last digit of the num variable, which is 103, because it doesn't take any arguments. 
When you call getLastDigit(42), getLastDigit(105), or getLastDigit(806), the argument is ignored, and the function uses the hardcoded value of num. */