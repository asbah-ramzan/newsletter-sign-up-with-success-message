const form = document.querySelector("form");
const container = document.querySelector(".container");
const card = document.querySelector(".card");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.classList.add("hide");
  card.classList.remove("hide");
});