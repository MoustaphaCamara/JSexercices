let text = document.querySelector("#contenu");
let reset = document.querySelector("#reset");
// console.log(reset);
// console.log(text);
document.addEventListener("keypress", (e) => {
  const letter = document.createElement("span");
  letter.innerHTML += e.key;
  text.appendChild(letter);
  letter.classList.add("appear");
  letter.classList.add("flex");
});

reset.addEventListener("click", () => {
  text.textContent = "";
});
