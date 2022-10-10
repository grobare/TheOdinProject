function fizzBuzz() {
  let num = prompt("Enter you value:");
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
}
