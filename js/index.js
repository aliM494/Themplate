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

const link_all = document.querySelectorAll(".link");
const subMenu_links = document.querySelectorAll(".s-link");

function activeLink(element, elemnts) {
  elemnts.forEach((li) => {
    li.classList.remove("active");
  });
  element.classList.add("active");
}

link_all.forEach((li) => {
  li.addEventListener("click", () => activeLink(li, link_all));
});

subMenu_links.forEach((li) => {
  li.addEventListener("click", () => activeLink(li, subMenu_links));
});

// -------------------Login-------------------

const logIn = document.querySelector(".logout");

logIn.addEventListener("click", () => {
  logIn.classList.toggle("login");
});
