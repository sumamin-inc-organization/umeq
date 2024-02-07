import "./common.js"
import "./css/modal.css";
import "./css/lunch.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//スライダー設定
$("#slickLunch").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 2000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    pauseOnHover: false,//マウスホバーで一時停止
    dots: false,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerMode:true,
    centerPadding:"26%", 
    responsive: [
        {
        breakpoint: 1200,
            settings: {
                centerPadding: "22%",
            },
        },
        {
        breakpoint: 767,
            settings: {
                centerPadding: "0%",
            },
        },
    ],
});

let fixedHeader = document.getElementsByClassName("fixed_header")[0];
let spHeader = document.getElementsByClassName("sp_header")[0];

//各ボタンを押したときに各モーダルを表示する
window.showModalWindow = (modalType) => {
    var modalType = document.getElementById(modalType);
    modalType.style.display = "flex";
    if (spHeader !== undefined) {
        spHeader.style.position = "relative";
    }

    if (fixedHeader !== undefined) {
        fixedHeader.style.position = "relative";
    }
    
    document.body.style.overflow = 'hidden';

    addEventListener('click',function(e) {
        outsideClose(e,modalType);
    },false);
}

// モーダルウィンドウを閉じる
window.closeModal = (modalType) => {
    var modalType = document.getElementById(modalType);
    modalType.style.display = "none";
    if (spHeader !== undefined) {
        spHeader.style.position = "fixed";
    }

    if (fixedHeader !== undefined) {
        fixedHeader.style.position = "fixed";
    }

    document.body.style.overflow = 'auto';
}

// モーダルコンテンツ以外がクリックされた時
function outsideClose(e, modalType) {
    if (e.target == modalType) {
        modalType.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

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
.from(".kv_deco_ume1", { y: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_ume2", { y: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1.5 }, "-=1")
.from(".underpage_kv_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".tax_included", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".lunch_btn", { y: 30, opacity: 0, duration: 1.5 }, "-=1");

// lunch_set_menu
let lunch_set_menu = gsap.timeline({
    scrollTrigger: {
        trigger: "#lunch_set_menu",
        start: "-=500px",
        scrub: false,
    },
});
lunch_set_menu
.from(".set_menu_title", { y: 30, opacity: 0, duration: 1.5 })
.from(".set_menu_img", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo3", { x: -30, opacity: 0, duration: 1.5 }, "-=1.5")
.from(".set_menu_content", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo4", { x: 30, opacity: 0, duration: 1.5 }, "-=1");

// lunch_daily_menu
let lunch_daily_menu = gsap.timeline({
    scrollTrigger: {
        trigger: "#lunch_daily_menu",
        start: "-=500px",
        scrub: false,
    },
});
lunch_daily_menu
.from(".daily_menu_title", { y: 30, opacity: 0, duration: 1.5 })
.from(".daily_menu_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".swiper", { y: 30, opacity: 0, duration: 1.5 }, "-=1")

//top_btn
let top_btn = gsap.timeline({
    scrollTrigger: {
        trigger: ".top_btn",
        start: "-=800px",
        scrub: false,
    },
});
top_btn
.from(".top_btn a", { y: 30, opacity: 0, duration: 1.5 });