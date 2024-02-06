import "./common.js"
import "./css/top.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// kv title
let kv_title = gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "-=100px",
        scrub: false,
    },
});
kv_title
.from(".kv_title1", { y: -30, opacity: 0, duration: 2 })
.from(".kv_title2", { y: -30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 30, opacity: 0, duration: 2 }, "-=1.8")
.from(".kv_news", { y: 30, opacity: 0, duration: 2 }, "-=1.5");
kv_title
.from(".kv_deco_kumo_l", { x: 30, opacity: 0, duration: 1 }, "-=1.5")
.from(".kv_deco_kumo_r", { x: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_ume_l", { scale:0, opacity: 0, duration: 1.8 }, "-=1.5")
.from(".kv_deco_ume_r", { scale:0, opacity: 0, duration: 1.8 }, "-=1.5")
.from(".kv_deco_ume_l_small", { scale:0, opacity: 0, duration: 1.8 },"-=1.5")
.from(".kv_deco_ume_r_small", { scale:0, opacity: 0, duration: 1.8 },"-=1.5");

// kv bottom text
let kv_bottom_text = gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_bottom_text",
        start: "-=800px",
        scrub: false,
        // markers:true,
    },
});
kv_bottom_text
.from(".kv_bottom_text", { y: 30, opacity: 0, duration: 2 })

// concept
let concept = gsap.timeline({
    scrollTrigger: {
        trigger: "#concept",
        start: "-=800px",
        scrub: false,
        // markers:true,
    },
});
concept

.from(".top_title", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".title_deco_top", { x: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".title_deco_bottom", { x: -30, opacity: 0, duration: 2 }, "-=1.5")
.from(".concept_flex h3", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".concept_flex img", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".concept_flex p", { y: 30, opacity: 0, duration: 2 }, "-=1.5")