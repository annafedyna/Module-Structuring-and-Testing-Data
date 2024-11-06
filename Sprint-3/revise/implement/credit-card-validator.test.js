/* Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.*/

function creditcardValidator(str) {
  if (typeof str !== "string" || str.length !== 16) {
    return false;
  }
  let sum = 0;
  let obj = {};
  for (let i = 0; i < 16; i++) {
    if (typeof +str[i] !== "number" || isNaN(+str[i])) {
      return false;
    } else {
      sum = sum + +str[i];
      obj[+str[i]] = 1;
    }
  }
  return (
    sum > 16 && str[str.length - 1] % 2 == 0 && Object.keys(obj).length > 2
  );
}

test("Check if card number valid", function () {
  expect(creditcardValidator("1234567812345678")).toEqual(true);
  expect(creditcardValidator("123456781234567g")).toEqual(false);
  expect(creditcardValidator("1000000000000000")).toEqual(false);
});
