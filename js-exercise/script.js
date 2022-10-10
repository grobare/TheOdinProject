function add7(num) {
  return num + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(string) {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    index === 0
      ? (newString += string[index].toUpperCase())
      : (newString += string[index].toLowerCase());
    //     if (index === 0) {
    //       newString += string[index].toUpperCase();
    //     } else {
    //       newString += string[index].toLowerCase();
    //     }
  }
  return newString;
}

function lastLetter(string) {
  return string[string.length - 1];
}
