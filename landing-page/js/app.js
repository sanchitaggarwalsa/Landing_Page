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

const navMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navList = document.getElementsByClassName('menu__link'); 



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

// will be creating an anonymous function
const navGenerator = () => {
    let navBar = '';
    sections.forEach(section =>{
        // stores the id for each <section> tag
        let sectionId = section.id;
        let sectionDataNav = section.dataset.nav;
        navBar += `<li><a class="menu__link ${sectionId}" href="#${sectionId}">${sectionDataNav}</a></li>`;

    });
    navMenu.innerHTML = navBar;
}
navGenerator();

// Add class 'active' to section when near top of viewport

function currentSection() {
    for (const section of sections){
        const position = section.getBoundingClientRect();

        if(position.top <= 150 && position.bottom >=150){
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");
        }
        else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
            
            
        }
    }
    
}

document.addEventListener('scroll', function() {
    currentSection();
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/


