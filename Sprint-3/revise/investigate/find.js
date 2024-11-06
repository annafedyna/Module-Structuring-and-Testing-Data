function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
/* The index variable increase by 1 in each iteration of the loop until the target character is found or the end of the string */
// b) What is the if statement used to check
/* Checks whether the character at the current position indexis equal to the target character char */
// c) Why is index++ being used?
/* Increment the index variable */
// d) What is the condition index < str.length used for?
/* To ensure that the loop continues iterating through the string */
