// Implement a function repeat

function repeat(str, count) {
    if (count < 0 || typeof count !== 'number') {
        return 'Error'
    } else if (count === 0 ) {
        return ''
    } else {
        let res = ''
        for (let i = 0; i < count; i++){
            res += str
        }
        return res
    }
}

test("Repeat the str count times", function () {
  expect(repeat('hello', 0)).toEqual('');
  expect(repeat('hello', 2)).toEqual('hellohello');
  expect(repeat('hello', -5)).toEqual('Error');
});
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
