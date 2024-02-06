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
.from(".kv_title1", { y: -30, opacity: 0, duration: 2, delay: 2 })
.from(".kv_title2", { y: -30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 20, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_news", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_deco_kumo_l_pc", { x: 30, opacity: 0, duration: 1 }, "-=1.5")
.from(".kv_deco_kumo_r_pc", { x: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_ume_l", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_r", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_l_small", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_r_small", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_kumo_l_sp", { x: 30, opacity: 0, duration: 1 }, "+=1")
.from(".kv_deco_kumo_r_sp", { x: -30, opacity: 0, duration: 1 }, "-=0.5");

// kv bottom text
let kv_bottom_text = gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_bottom_text",
        start: "-=800px",
        scrub: false,
    },
});
kv_bottom_text
.from(".kv_bottom_text", { y: 30, opacity: 0, duration: 2 });

// concept
let concept = gsap.timeline({
    scrollTrigger: {
        trigger: "#concept",
        start: "-=600px",
        scrub: false,
    },
});
concept
.from("#concept .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#concept .title_deco_top", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#concept .title_deco_bottom", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".concept_flex div h3", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".concept_line", { y: 30, opacity: 0, duration: 1.5 },"-=1.5")
.from(".concept_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".concept_btn", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// concept_img
let concept_img = gsap.timeline({
    scrollTrigger: {
        trigger: ".concept_img",
        start: "-=800px",
        scrub: false,
    },
});
concept_img
.from(".concept_img3", { y: 30, opacity: 0, duration: 1.5 })
.from(".concept_img2", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".concept_img1", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// recommend
let recommend = gsap.timeline({
    scrollTrigger: {
        trigger: "#recommend",
        start: "-=600px",
        scrub: false,
    },
});
recommend
.from("#recommend .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#recommend .title_deco_top_pc", { x: -30, opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_top_sp", { x: -30, opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_bottom_pc", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_bottom_sp", { x: 30, opacity: 0, duration: 1 },"-=1")
.from(".recommend_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_kamameshi", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_yakitori", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_unagi", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// certification
let certification = gsap.timeline({
    scrollTrigger: {
        trigger: "#certification",
        start: "-=800px",
        scrub: false,
    },
});
certification
.from("#certification", { y: 30, opacity: 0, duration: 2 })
.from(".certification_title", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex1 img", { y: 30, opacity: 0, duration: 1.5 }, "-=0.5")
.from(".certification_flex1 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex2 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".certification_flex2 img", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// news
let news = gsap.timeline({
    scrollTrigger: {
        trigger: "#news",
        start: "-=700px",
        scrub: false,
    },
});
news
.from("#news .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#news .title_deco_top", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#news .title_deco_bottom", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".news_content", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".news_btn", { y: 30, opacity: 0, duration: 1.5 },"-=0.5");

// instagram
let instagram = gsap.timeline({
    scrollTrigger: {
        trigger: "#instagram",
        start: "-=800px",
        scrub: false,
        markers:true,
    },
});
instagram
.from("#instagram .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#instagram .title_deco_top", { x: -30, opacity: 0, duration: 1 },"-=1")
.from("#instagram .title_deco_bottom", { x: 30, opacity: 0, duration: 1 },"-=1")
.from(".insta_content", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".instagram_btn", { y: 30, opacity: 0, duration: 1.5 });