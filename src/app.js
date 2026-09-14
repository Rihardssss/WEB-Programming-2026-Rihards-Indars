const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

menuButton.addEventListener("click", () => {
  const opening = mainNav.classList.contains("hidden");

  mainNav.classList.toggle("hidden", !opening);
  mainNav.classList.toggle("flex", opening);

  menuButton.setAttribute("aria-expanded", String(opening));
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-status]");

const ACTIVE_CLASSES = ["bg-[#f0f2f7]", "text-app-text"];
const INACTIVE_CLASSES = ["text-app-muted"];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove(...ACTIVE_CLASSES, ...INACTIVE_CLASSES);
      item.classList.add(...INACTIVE_CLASSES);
    });
    button.classList.remove(...INACTIVE_CLASSES);
    button.classList.add(...ACTIVE_CLASSES);

    projectCards.forEach((card) => {
      const shouldShow = selectedFilter === "all" || card.dataset.status === selectedFilter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});
