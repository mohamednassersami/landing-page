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
const mainNavbarList = document.getElementById("navbar__list");
const mainHeader = document.getElementById("mainHeader");

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

function activateClasses(allAnchors, Sections) {
  allAnchors.classList.remove("menu__link");
  allAnchors.classList.add("active");
  Sections.classList.add("your-active-class");
}

function deactivateClasses(allAnchors, Sections) {
  allAnchors.classList.remove("active");
  allAnchors.classList.add("menu__link");
  Sections.classList.remove("your-active-class");
}

function setClassesName(allAnchors, index) {
  for (let i = 0; i < allAnchors.length; i++) {
    if (i === index) {
      activateClasses(allAnchors[i], Sections[i]);
    } else {
      deactivateClasses(allAnchors[i], Sections[i]);
    }
  }
}

function activeNavbarHighlighted() {
  const allAnchors = document.querySelectorAll("a");
  activateClasses(allAnchors[0], Sections[0]);
  for (let i = 0; i < allAnchors.length; i++) {
    if (allAnchors[i].innerText === Sections[i].id) {
      allAnchors[i].addEventListener("click", function (event) {
        event.preventDefault();
        setClassesName(allAnchors, i);
        Sections[i].scrollIntoView();
        //allAnchors[i].href = `#${Sections[i].id}`;
      });
    }
  }
}

function scrollToTop() {
  var upButton = document.getElementById("upButton");
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

function hideNavigationBar() {
  let timer = null;
  setTimeout(function () {
    mainHeader.style.top = "-50px";
  }, 2000);
  window.addEventListener("scroll", function () {
    mainHeader.style.top = "0";
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      mainHeader.style.top = "-50px";
    }, 2000);
  });
}

function sectionInViewport(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

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

function collapsing() {
  const collapse = document.getElementsByClassName("collapsible");
  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
      collapse[i].classList.add("activeCollapsible");
      var content = collapse[i].nextElementSibling;
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
