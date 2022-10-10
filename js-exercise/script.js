function downUp(string) {
  for (let index = 0; index < string.length; index++) {
    if (index === string.length - 1) {
      for (let index = string.length - 1; index >= 0; index--) {
        console.log(string.substr(0, string.length - index));
      }
    } else {
      console.log(string.substr(0, string.length - index));
    }
  }
}
