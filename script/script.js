const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu__item-link");

function menuToggle(btn) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("menu-desactivado");
  });
}

menuToggle(navBtn);

linksMenu.forEach((link) => menuToggle(link));
