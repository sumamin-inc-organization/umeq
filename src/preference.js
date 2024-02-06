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
