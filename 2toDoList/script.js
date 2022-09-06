submitNote.addEventListener("click", (e) => {
  e.preventDefault();
  let newItem = document.createElement("p");
  newItem.innerHTML = `<i class="fa-solid fa-star-half-stroke"></i> ${toDoList.value}`;
  list.appendChild(newItem);
  toDoList.value = "";
  newItem.addEventListener("click", () => {
    if (newItem.classList.contains("checked")) {
      newItem.remove();
    } else {
      newItem.classList.add("checked");
    }
  });
});
