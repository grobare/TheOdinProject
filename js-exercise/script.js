const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];

const para = document.createElement("p");

// Add your code here
function ranit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseName(names) {
  return names[ranit(0, names.length - 1)];
}

para.textContent = chooseName(names);
document.body.appendChild(para);
