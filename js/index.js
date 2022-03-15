import { activeLink } from "./utility";

// -------------------open-sidebar-------------------
const btnMenu = document.querySelector(".div-hamburger");
const sidebar = document.querySelector(".sidebar");
const divSidebar = document.querySelector(".div-sidebar");

const openSidebar = () => {
  divSidebar.classList.toggle("open");
  sidebar.classList.toggle("open");
  btnMenu.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !btnMenu.contains(e.target)) {
    divSidebar.classList.remove("open");
    sidebar.classList.remove("open");
    btnMenu.classList.remove("active");
  }
});

// -------------------sub-menu-------------------

const menu = document.querySelector(".menu");
const link_all = document.querySelectorAll(".link");
const subMenu_links = document.querySelectorAll(".s-link");

link_all.forEach((li) => {
  li.addEventListener("click", () => activeLink(li, link_all, menu, true));
});

subMenu_links.forEach((li) => {
  li.addEventListener("click", () => activeLink(li, subMenu_links));
});

// -------------------Login-------------------

const logIn = document.querySelector(".logout"),
  logIn_name = logIn.querySelector(".logout_name");

logIn.addEventListener("click", () => {
  logIn.classList.toggle("login");
  logIn_name.innerHTML = "ورود به حساب";
});

// -------------------Nav-bottom-------------------

const navBottom = document.querySelectorAll(".nav-bottom"),
  navLink = document.querySelectorAll(".nav-bottom a");

navLink.forEach((nl) => {
  nl.addEventListener("click", () => {
    activeLink(nl, navLink, navBottom);
  });
});
