import "./common.js"
import "./css/news.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// fixed header
let fixed_header = gsap.timeline({
    scrollTrigger: {
        trigger: ".underpage_kv",
        start: "600px",
        scrub: false,
        toggleActions:'play none none reverse',
    },
});
fixed_header
    .from(".fixed_header", { opacity: 0, duration: 1 })


let btn =  document.getElementsByClassName(large_btn);
