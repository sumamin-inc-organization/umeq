import "./common.js"
import "./css/news.css";
import "./css/news_details.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


let mm = gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // news title
    let news_title = gsap.timeline({
        scrollTrigger: {
            trigger: "#news_top",
            start: "-=100px",
            scrub: false,
        },
    });

    news_title
    .from(".underpage_title h2", { y: 30, opacity: 0, duration: 1, delay: 2})
    .from(".underpage_title p", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_icon", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_line", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".news_content", { y: 30, opacity: 0, duration: 2}, "-=1.5")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 }, "-=0.5")
    .from(".kv_deco_kumo3", { x: -30, opacity: 0, duration: 1 }, "+=0.5")
    .from(".kv_deco_kumo4", { x: -30, opacity: 0, duration: 1 }, "+=0.5")

    // top_btn
    let top_btn = gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=680px",
            scrub: false,
        },
    });

    top_btn
    .from(".news_pagination", { y: 30, opacity: 0, duration: 1})
    .from(".top_btn", { y: 30, opacity: 0, duration: 1})
});

/* pc */
mm.add("(min-width: 768px)", () => {
    // news title
    let news_title = gsap.timeline({
        scrollTrigger: {
            trigger: "#news_top",
            start: "-=200px",
            scrub: false,
        },
    });

    news_title
    .from(".underpage_title h2", { y: 30, opacity: 0, duration: 1, delay: 2})
    .from(".underpage_title p", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_icon", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_line", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".news_content", { y: 30, opacity: 0, duration: 2}, "-=1")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 }, "-=0.5")
    .from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1 })

    // top_btn
    let top_btn = gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=740px",
            scrub: false,
        },
    });

    top_btn
    .from(".news_pagination", { y: 30, opacity: 0, duration: 1})
    .from(".top_btn", { y: 30, opacity: 0, duration: 1})
});

