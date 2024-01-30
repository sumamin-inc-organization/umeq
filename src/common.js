import "./css/reset.css";
import "./css/utility.css";
import "./css/header.css";
import "./css/footer.css";

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