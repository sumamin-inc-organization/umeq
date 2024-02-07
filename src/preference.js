import "./common.js"
import "./css/preference.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// slider
$('.scroller_inner').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                speed: 2000,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                speed: 2000,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 435,
            settings: {
                speed: 2000,
                slidesToShow: 2.2,
            }
        },
    ],
});

// 下層ページ共通 出現アニメーション
let underpage_kv = gsap.timeline({
    scrollTrigger: {
        trigger: ".underpage_kv",
        start: "-=1000px",
        scrub: false,
    },
});
underpage_kv
.from(".underpage_title", { y: 30, opacity: 0, duration: 2, delay: 1.5 })
.from(".underpage_subtitle", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".underpage_kv_img", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_ume1", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_ume2", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".underpage_kv_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1.5 }, "-=1");

//slider
let slider = gsap.timeline({
    scrollTrigger: {
        trigger: ".slider",
        start: "-=700px",
        scrub: false,
    },
});
slider
.from(".slider", { opacity: 0, duratio4n: 2})

//preference_flex1
let preference_flex1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".preference_flex1",
        start: "-=600px",
        scrub: false,
    },
});
preference_flex1
.from(".preference_flex1 .preference_img", { y: 30, opacity: 0, duration: 1.5 })
.from(".preference_flex1 .preference_column_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex1 .preference_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex1_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1.5")
.from(".preference_flex1 .column_text_deco1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex1 .column_text_deco2", { x: -30, opacity: 0, duration: 1.5 }, "-=1.5");

//preference_flex2
let preference_flex2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".preference_flex2",
        start: "-=600px",
        scrub: false,
    },
});
preference_flex2
.from(".preference_flex2 .preference_img", { y: 30, opacity: 0, duration: 1.5 })
.from(".preference_flex2 .preference_column_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex2 .preference_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex2_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1.5")
.from(".preference_flex2 .column_text_deco1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex2 .column_text_deco2", { x: -30, opacity: 0, duration: 1.5 }, "-=1.5");

//preference_flex3
let preference_flex3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".preference_flex3",
        start: "-=600px",
        scrub: false,
    },
});
preference_flex3
.from(".preference_flex3 .preference_img", { y: 30, opacity: 0, duration: 1.5 })
.from(".preference_flex3 .preference_column_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex3 .preference_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex3_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1.5")
.from(".preference_flex3 .column_text_deco1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex3 .column_text_deco2", { x: -30, opacity: 0, duration: 1.5 }, "-=1.5");

//preference_flex4
let preference_flex4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".preference_flex4",
        start: "-=600px",
        scrub: false,
    },
});
preference_flex4
.from(".preference_flex4 .preference_img", { y: 30, opacity: 0, duration: 1.5 })
.from(".preference_flex4 .preference_column_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex4 .preference_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex4_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1.5")
.from(".preference_flex4 .column_text_deco1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".preference_flex4 .column_text_deco2", { x: -30, opacity: 0, duration: 1.5 }, "-=1.5");

//top_btn
let top_btn = gsap.timeline({
    scrollTrigger: {
        trigger: ".top_btn",
        start: "-=600px",
        scrub: false,
    },
});
top_btn
.from(".top_btn", { y: 30, opacity: 0, duration: 1.5 });