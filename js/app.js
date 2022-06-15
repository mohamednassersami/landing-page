/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

const Sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

function populateNavBarMenu() {
  const fragment = document.createDocumentFragment();
  for (const section of Sections) {
    const menuList = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.innerHTML = section.id;
    menuLink.setAttribute("href", `#${section.id}`);
    menuLink.setAttribute("class", "menu__link");
    menuLink.classList.add("menu__link");
    menuList.append(menuLink);
    fragment.appendChild(menuList);
  }
  navbarList.appendChild(fragment);
}

function setNavLinkClassName(anchor, allAnchors, secID) {
  for (let i = 0; i < allAnchors.length; i++) {
    if (i === secID) {
      allAnchors[secID].classList.remove("menu__link");
      allAnchors[secID].classList.add("active");
    } else {
      allAnchors[i].classList.remove("active");
      allAnchors[i].classList.add("menu__link");
    }
  }
}

function activeSectionNavbarHighlighted() {
  const allAnchors = document.querySelectorAll("a");
  for (let i = 0; i < allAnchors.length; i++) {
    if (allAnchors[i].innerText === Sections[i].id) {
      allAnchors[i].addEventListener("click", function () {
        setNavLinkClassName(allAnchors[i], allAnchors, i);
      });
    }
  }
}

populateNavBarMenu();
activeSectionNavbarHighlighted();
