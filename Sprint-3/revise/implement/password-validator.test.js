/* 
Password Validation

Write a program that should check if a password is valid and returns a boolean
To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
function passwordValidator(str, passwords) {
  if (
    typeof str != "string" ||
    str.length < 5 ||
    passwords.indexOf(str) != -1
  ) {
    return false;
  }
  let upperCaseLetter = false;
  let lowerCaseLetter = false;
  let oneNumber = false;
    let nonAlphanumericSymbol = false;
    const symbols = ['!', '#', '$', '%', '.', '*', '&'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= "A" && char <= "Z") {
      upperCaseLetter = true;
    } else if (char >= "a" && char <= "z") {
      lowerCaseLetter = true;
    } else if (char >= "0" && char <= "9") {
      oneNumber = true;
    } else if (symbols.includes(char)) {
        nonAlphanumericSymbol = true;
    }
  }
  return upperCaseLetter && lowerCaseLetter && oneNumber && nonAlphanumericSymbol
  
}

test('Check for valid password', function () {
    expect(passwordValidator('Asd123#',[])),toEqual(true);
    expect(passwordValidator("Asd123#", ["Asd123#"])), toEqual(false);
})