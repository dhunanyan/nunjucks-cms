// MENU BURGER
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

//SCROLLBY
const menuLinks = document.querySelectorAll(".menu__link");
document.querySelectorAll("a.yakor").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove("menu__link--active");
    });
    link.classList.add("menu__link--active");

    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = header.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
  });
});

//CARDS
const cards = document.querySelectorAll(".card");
if (cards.length > 0) {
  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.target.classList.toggle("_active");
      const activeCards = document.querySelectorAll(".card._active");

      if (activeCards.length > 1) {
        activeCards.forEach((activeCard) => {
          activeCard.classList.remove("_active");
        });
        e.target.classList.toggle("_active");
      }
    });
  });
}
