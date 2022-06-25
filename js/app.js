/**
 * Global variables
 */
const Sections = document.querySelectorAll("section");
const mainNavbarList = document.getElementById("navbar__list");
const mainHeader = document.getElementById("mainHeader");

/* Helper Functions */

/**
 * @description Activate the anchor and the section
 * @param {Node} allAnchors - The anchor of header that i need to activate
 * @param {Node} Sections - The section that i need to activate
 */
function activateClasses(allAnchors, Sections) {
  allAnchors.classList.remove("menu__link");
  allAnchors.classList.add("active");
  Sections.classList.add("your-active-class");
}

/**
 * @description Deactivate the anchors and the sections
 * @param {Node} allAnchors - The anchors of header that i need to deactivate
 * @param {Node} Sections - The sections that i need to deactivate
 */
function deactivateClasses(allAnchors, Sections) {
  allAnchors.classList.remove("active");
  allAnchors.classList.add("menu__link");
  Sections.classList.remove("your-active-class");
}

/**
 * @description Activate or deactivate the anchor and the section
 * @param {Node} allAnchors - The anchors of header that i need to activate or deactivate
 * @param {Number} index - The index of anchor and section that i need to activate
 */
function setClassesName(allAnchors, index) {
  for (let i = 0; i < allAnchors.length; i++) {
    if (i === index) {
      activateClasses(allAnchors[i], Sections[i]);
    } else {
      deactivateClasses(allAnchors[i], Sections[i]);
    }
  }
}

/**
 * @description Determine whether the section is visible on the viewport or not (responsive)
 * @param {Node} section
 * @returns boolean value (true or false)
 */
function sectionInViewport(section) {
  return (
    window.pageYOffset >= section.offsetTop - 200 &&
    window.pageYOffset < section.offsetTop + section.clientHeight - 200
  );
  // const rect = section.getBoundingClientRect();
  // return rect.top >= 0 && rect.bottom <= window.outerHeight + 300;
}

/* Main Functions */

/**
 * @description populate navbar links based on the content
 */
function populateNavBarMenu() {
  const fragment = document.createDocumentFragment();
  for (const section of Sections) {
    const navbarList = document.createElement("li");
    const navbarAnchor = document.createElement("a");
    navbarAnchor.innerHTML = section.id;
    navbarAnchor.style.cursor = "pointer";
    navbarAnchor.classList.add("menu__link");
    navbarList.appendChild(navbarAnchor);
    fragment.appendChild(navbarList);
  }
  mainNavbarList.append(fragment);
}

/**
 * @description Highlighted anchor when click on it and view his section
 */
function activeNavbarHighlighted() {
  const allAnchors = document.querySelectorAll("a");
  activateClasses(allAnchors[0], Sections[0]);
  for (let i = 0; i < allAnchors.length; i++) {
    allAnchors[i].addEventListener("click", function (event) {
      event.preventDefault();
      setClassesName(allAnchors, i);
      Sections[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  }
}

/**
 * @description Active the anchor when his section in the viewport
 */
function activeHisAnchor() {
  const anchors = document.querySelectorAll("a");
  window.addEventListener("scroll", function () {
    for (let i = 0; i < anchors.length; i++) {
      if (sectionInViewport(Sections[i])) {
        setClassesName(anchors, i);
      }
    }
  });
}

/**
 * @description show button (up) when scrolling and scroll to top when click on it
 */
function scrollToTop() {
  const upButton = document.getElementById("upButton");
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
  });
  upButton.addEventListener("click", function () {
    window.scrollTo(top);
  });
}

/**
 * @description hide the navBar when no scroll event
 */
function hideNavigationBar() {
  let timer = null;
  setTimeout(function () {
    mainHeader.classList.add("hide");
  }, 2000);
  window.addEventListener("scroll", function () {
    mainHeader.classList.remove("hide");
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      mainHeader.classList.add("hide");
    }, 2000);
  });
}

/**
 * @description Make sections collapsible when pressing (...more) they open and when pressing (...lower) they close
 */
function collapsing() {
  const collapse = document.getElementsByClassName("collapsible");
  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
      collapse[i].classList.add("activeCollapsible");
      const content = collapse[i].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        collapse[i].classList.remove("activeCollapsible");
        collapse[i].classList.add("collapsible");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

populateNavBarMenu();
activeNavbarHighlighted();
scrollToTop();
hideNavigationBar();
activeHisAnchor();
collapsing();
