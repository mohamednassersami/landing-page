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
/*document.addEventListener('click',function(){
    const mainHeader = document.getElementById('navbar__list');
    mainHeader.querySelector('a').style.background = 'red';

    /*const myDiv = document.getElementById('start-now');
    myDiv.style.color = 'purple';});*/

/*document.body.addEventListener('keypress',function(){
    console.log('removing first child');
    document.querySelector('#contain-all').firstElementChild.remove();
    
});*/

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
//const navMenu = document.getElementsByClassName;

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

//document.querySelector("your-active-class").scrollTo();
const Sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

function populateNavBarMenu(){
    for(const section of Sections){
        const menuList = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.textContent = section.id;
        menuLink.setAttribute('href',`#${section.id}`);
        menuLink.setAttribute('class',"menu__link");
        menuList.append(menuLink);
        //menuList.appendChild(menuLink);
        navbarList.appendChild(menuList);
    }
}
populateNavBarMenu();

