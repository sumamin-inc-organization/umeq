import "./common.js"
import "./css/top.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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


let kv_news = gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_news",
        start: "-=600px",
        scrub: false,
    },
});
kv_news
    .from(".kv_news", { y: 30, opacity: 0, duration: 2 })


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