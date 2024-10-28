const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

/* six */

// b) How many function calls are there?

/* One - line 10 */

// c) Using documentation, explain what the expression movieLength % 60 represents

/* The modulus operator returns the remainder of the division */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/*  The purpose of this expression is to determine how many complete minutes are contained within the total movie length, 
excluding any leftover seconds. */

// e) What do you think the variable result represents? Can you think of a better name for this variable?

/* The variable result represents a formatted string that displays the total duration of the movie in hours, minutes, and seconds. 
Better names : movieDuration, timeDisplay, formattedDuration */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/* The code will work for all integer values of movieLength, but the output may not always be meaningful or valid in the context of movie durations if negative or excessively large values are used. 
It would be prudent to implement validation checks to ensure that movieLength is non-negative for practical use cases. */