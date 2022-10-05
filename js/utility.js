//#region Active Link

const activeLink = (element, collection, parent = null, selfClose = false) => {
  if (selfClose && element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    collection.forEach((li) => {
      li.classList.remove("active");

      /*// ---if have parent---
      if (!parent == null) {
        parent.addEventListener("click", (e) => {
          if (!li.contains(e.target)) {
            li.classList.remove("active");
          }
        });
      }*/
    });

    element.classList.add("active");
  }
};


//#endregion Active Link