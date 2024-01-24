import "./common.js"
import "./css/top.css";

let kv_title = gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "-=500px",
        scrub: false,
    },
});
kv_title
    .from(".kv_title1", { y: 30, opacity: 0, duration: 2 })
    .from(".kv_title2", { y: 30, opacity: 0, duration: 1 }, "-=1.5");