function pow(x, y) {
  let sum = x;
  for (let index = 1; index < y; index++) {
    sum *= x;
  }
  return sum;
}

let x = prompt("Please type x:");
let y = prompt("Please type y:");

if (y < 1) {
  alert(`${y} is illegal and you know it!!!`);
} else {
  alert(pow(x, y));
}
