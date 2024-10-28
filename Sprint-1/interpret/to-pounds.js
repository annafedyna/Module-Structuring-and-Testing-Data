const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with

/* 

1. const penceString = "399p": initialises a string variable with the value "399p"
2. lines 3-6 remove the trailing 'p' from a string representing a price in pence.
3. padStart(3, "0")-> checks the length of the string and adds leading zeros until the total length is at least 3 characters. 
If the string is already three characters or longer, it remains unchanged.

4. then same fuctions used to calculate pence 
*/
