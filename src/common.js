import "./css/reset.css";
import "./css/utility.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/hamburger.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// fixed header
let fixed_header = gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "+=1200px",
        scrub: false,
        toggleActions:'play none none reverse',
    },
});
fixed_header
.from(".fixed_header", { opacity: 0, duration: 0.5 })

// hamburger menu
const button = document.querySelector(".button-one");
toggleNav();

function animateHamburgerMenu(){
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");
        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
}
animateHamburgerMenu();


// hamburger menu open
const primaryNav = document.querySelector('.primary-nav');

function clearClass(){
    primaryNav.classList.remove('primary-nav_closed');
}
function addClass(){
    primaryNav.classList.add('primary-nav_closed');
}
function toggleNav(){
    button.addEventListener('click',(e)=>{
        const currentState = button.getAttribute("data-state");
console.log(currentState)
        if (currentState === "closed") {
            // clearClass()
            addClass();
        } else {
            // addClass();
            clearClass()
        }
    })
}