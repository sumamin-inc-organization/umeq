import "./common.js"
import "./css/top.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// fixed header
let fixed_header = gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_bottom",
        start: "-=100px",
        scrub: false,
        toggleActions:'play none none reverse',
    },
});
fixed_header
    .from(".fixed_header", { opacity: 0, duration: 1 })

// kv title
let kv_title = gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "-=500px",
        scrub: false,
    },
});
kv_title
    .from(".kv_title1", { y: 30, opacity: 0, duration: 2 })
    .from(".kv_title2", { y: 30, opacity: 0, duration: 2 }, "-=1.5");

// kv news
let kv_news = gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_news",
        start: "-=600px",
        scrub: false,
    },
});
kv_news
    .from(".kv_news", { y: 30, opacity: 0, duration: 2 })

// kv bottom text
let kv_bottom_text = gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_bottom_text",
        start: "-=600px",
        scrub: false,
        // markers:true,
    },
});
kv_bottom_text
    .from(".kv_bottom_text", { y: 30, opacity: 0, duration: 2 })