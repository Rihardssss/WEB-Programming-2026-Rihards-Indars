const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

menuButton.addEventListener("click", () => {
  const opening = mainNav.classList.contains("hidden");

  mainNav.classList.toggle("hidden", !opening);
  mainNav.classList.toggle("flex", opening);

  menuButton.setAttribute("aria-expanded", String(opening));
});
