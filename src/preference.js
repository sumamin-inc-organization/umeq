import "./common.js"
import "./css/preference.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// slider
$('.scroller_inner').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false, //カーソルの静止を無効にする
    draggable: false, // ドラッグ操作を無効にする
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

// 下層ページ出現アニメーション
let underpage_kv = gsap.timeline({
    scrollTrigger: {
        trigger: ".underpage_kv",
        start: "-=1000px",
        scrub: false,
        // markers:true,
    },
});
underpage_kv
.from(".underpage_title", { y: -30, opacity: 0, duration: 2, delay: 1.5 })
.from(".underpage_subtitle", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".underpage_kv_img", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_ume1", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_ume2", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".underpage_kv_text", { y: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1.5 }, "-=1")