const inputBox = document.querySelector("#init");
const outBox = document.querySelector("#output");

inputBox.addEventListener(
  "keydown",
  (Event) => (outBox.textContent = `You pressed ${Event.key}.`)
);
