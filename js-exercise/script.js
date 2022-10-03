const input = document.querySelector("input");
const butt = document.querySelector("button");
const list = document.querySelector("ul");
const deleteButt = document.createElement("button");
deleteButt.textContent = "Delete";

butt.addEventListener("click", () => {
  const li = document.createElement("li");

  if (input.value != "") {
    li.textContent = input.value;
    list.appendChild(li);
    li.appendChild(deleteButt);

    deleteButt.addEventListener("click", () => {
      list.removeChild(li);
    });
  }
  input.value = "";
});
