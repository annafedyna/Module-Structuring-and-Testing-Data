// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num) {
    if (typeof num !== 'number' && isNaN(num)) {
        return 'Enter valid input'
    }
    if (num === 1) {
        return '1st'
    } else if (num === 2) {
        return '2nd'
    } else if (num === 3) {
        return '3rd'
    } else {
        return `${num}th`
    }
}

test("The ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(2)).toEqual('2nd');
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(13)).toEqual("13th");
});