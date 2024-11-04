// Implement a function getAngleType

function getAngleType(angle) {
  if (typeof angle !== "number" || isNaN(angle)) {
    return "Enter a valid number";
  }
  if (angle === 90) {
    return "Right angle";
  } else if (angle < 90) {
    return "Acute angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
      return "Angle out of range";
  }
}

test("check for Right angle", function () {
  expect(getAngleType()).toEqual("Enter a valid input");
  expect(getAngleType("")).toEqual("Enter a valid input");
  expect(getAngleType(900)).toEqual("Angle out of range");
  expect(getAngleType(90)).toEqual("Right angle");
  expect(getAngleType(9)).toEqual("Acute angle");
  expect(getAngleType(119)).toEqual("Obtuse angle");
  expect(getAngleType(180)).toEqual("Straight angle");
});



// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
