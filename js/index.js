//#region Open-sidebar

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

//#endregion open-sidebar

//#region Sub-menu

const menu = document.querySelector(".menu");
const a_Links = document.querySelectorAll(".a-link");
const link_all = document.querySelectorAll(".link");
const subMenu_links = document.querySelectorAll(".s-link");

a_Links.forEach((a) => {
  a.addEventListener("click", () => {
    const a_parent = a.parentNode;

    activeLink(a_parent, link_all, menu, true);
  });
});

subMenu_links.forEach((li) => {
  li.addEventListener("click", () => activeLink(li, subMenu_links));
});

//#endregion sub-menu

//#region Login

const logIn = document.querySelector(".logout"),
  logIn_name = logIn.querySelector(".logout_name");

logIn.addEventListener("click", () => {
  logIn.classList.toggle("login");
  logIn_name.innerHTML = "ورود به حساب";
});

//#endregion Login

//#region Nav-bottom

const navBottom = document.querySelectorAll(".nav-bottom"),
  navLink = document.querySelectorAll(".nav-bottom a");

navLink.forEach((nl) => {
  nl.addEventListener("click", () => {
    activeLink(nl, navLink, navBottom);
  });
});

//#endregion Nav-bottom

//#region Chart



//#endregion Chart


