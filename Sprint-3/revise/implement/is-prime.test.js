// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}


test("The ordinal number", function () {
  expect(isPrime(1)).toEqual(true);
  expect(isPrime(22)).toEqual(false);
  expect(isPrime(33)).toEqual(false);
  expect(isPrime(13)).toEqual(true);
});