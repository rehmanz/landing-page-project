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
 * Define Global Variables
 * 
*/
const MENU_LINK_CLASS = 'menu__link';
const NAV_BAR_LIST_ID = 'navbar__list';


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
* @description Gets all section IDs from page
* @returns {list} List of section IDs
*/
function getSections() {
  // TODO: 'section' should be a variable
  const sections = document.querySelectorAll('section');
  const sectionsList = [];

  for (let i = 0; i < sections.length; i++) {
    const sectionMap = new Map();
    sectionMap['id'] = sections[i].id;
    sectionMap['value'] = sections[i].querySelector('h2').innerText
    sectionsList.push(sectionMap);
  }

  return sectionsList;
}

/**
* @description Add navigation element
* @param {string} Section map containing section id & value
* @returns {object} New list element node
*/
function addSectionToNavBar(sectionMap) {
  const newListElement = document.createElement('li');
  const newAnchorElement = document.createElement('a');

  // creates "<a class="menu__link" href="#sectionN">Section N</a>"
  newAnchorElement.href = '#' + sectionMap['id'];
  newAnchorElement.innerText = sectionMap['value'];
  newAnchorElement.className = MENU_LINK_CLASS;
  
  newListElement.appendChild(newAnchorElement);

  return newListElement;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Build the nav
window.addEventListener('DOMContentLoaded', (event) => {
  const sections = getSections();
  const navBarFragment = document.createDocumentFragment('div');

  // create nav bar structure
  for (let i = 0; i < sections.length; i++) {
    navBarFragment.appendChild(addSectionToNavBar(sections[i]));
  }
  const navBarElement = document.querySelector('#' + NAV_BAR_LIST_ID);
  
  // reflow and paint once for optimization
  navBarElement.appendChild(navBarFragment); 
});

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


