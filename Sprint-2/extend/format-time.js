// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 am";
console.assert(currentOutput3 === targetOutput3, `current output: ${currentOutput2}, target output: ${targetOutput2}`);



const currentOutput7 = formatAs12HourClock("13:00");
const targetOutput7 = "01:00 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);


const currentOutput8 = formatAs12HourClock("21:00");
const targetOutput8 = "9:00 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);


const currentOutput9 = formatAs12HourClock("25:15");
const targetOutput9 = "undefined";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);
