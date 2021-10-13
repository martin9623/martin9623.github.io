const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu__item-link");

function menuToggle(x) {
  x.addEventListener("click", () => {
    menu.classList.toggle("menu-desactivado");
  });
}

menuToggle(navBtn);
menuToggle(linksMenu[0]);
menuToggle(linksMenu[1]);
menuToggle(linksMenu[2]);
menuToggle(linksMenu[3]);
menuToggle(linksMenu[4]);
