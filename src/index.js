import "./css/reset.css";
import "./css/utility.css";
import "./css/typography.css";
import "./css/header.css";
import "./css/top.css";

import "./css/footer.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let recommendedtl = gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "-=500px",
        scrub: false,
    },
});
recommendedtl
    .from(".kv_title1", { y: 30, opacity: 0, duration: 2 })
    .from(".kv_title2", { y: 30, opacity: 0, duration: 1 }, "-=1.5");