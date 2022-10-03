const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener(
  "keydown",
  (Event) => (output.textContent = `You pressed "${Event.key}"`)
);
