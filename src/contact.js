import "./common.js"
import "./css/contact.css";
import "./css/form.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// fixed header
let fixed_header = gsap.timeline({
    scrollTrigger: {
        trigger: ".underpage_title",
        start: "-=100px",
        scrub: false,
        toggleActions:'play none none reverse',
    },
});
fixed_header
    .from(".fixed_header", { opacity: 0, duration: 0.3 })
