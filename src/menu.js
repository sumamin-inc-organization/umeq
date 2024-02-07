import "./common.js"
import "./css/modal.css";
import "./css/menu.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
        start: "-=900px",
        scrub: false,
    },
});
underpage_kv
.from(".underpage_title", { y: 30, opacity: 0, duration: 2, delay: 1.5 })
.from(".underpage_kv_text", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".menu_btn", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1.5 }, "-=1");

// kamameshi_normal
let kamameshi = gsap.timeline({
    scrollTrigger: {
        trigger: ".kamameshi_normal",
        start: "-=600px",
        scrub: false,
    },
});
kamameshi
.from(".kamameshi_normal", { y: 30, opacity: 0, duration: 1.5});

// kamameshi_tokusei
let kamameshi_tokusei = gsap.timeline({
    scrollTrigger: {
        trigger: ".kamameshi_tokusei",
        start: "-=600px",
        scrub: false,
    },
});
kamameshi_tokusei
.from(".kamameshi_tokusei", { y: 30, opacity: 0, duration: 1.5});

// yakitori
let yakitori = gsap.timeline({
    scrollTrigger: {
        trigger: ".yakitori",
        start: "-=900px",
        scrub: false,
    },
});
yakitori
.from(".yakitori", { y: 30, opacity: 0, duration: 1.5});

// yakitori_noimg
let yakitori_noimg = gsap.timeline({
    scrollTrigger: {
        trigger: ".yakitori_noimg",
        start: "-=900px",
        scrub: false,
    },
});
yakitori_noimg
.from(".yakitori_noimg", { y: 30, opacity: 0, duration: 1.5});

// unagi
let unagi = gsap.timeline({
    scrollTrigger: {
        trigger: ".unagi",
        start: "-=900px",
        scrub: false,
    },
});
unagi
.from(".unagi", { y: 30, opacity: 0, duration: 1.5});

// unagi_noimg
let unagi_noimg = gsap.timeline({
    scrollTrigger: {
        trigger: ".unagi_noimg",
        start: "-=900px",
        scrub: false,
    },
});
unagi_noimg
.from(".unagi_noimg", { y: 30, opacity: 0, duration: 1.5});

// zousui
let zousui = gsap.timeline({
    scrollTrigger: {
        trigger: "#zousui .text_menu",
        start: "-=900px",
        scrub: false,
    },
});
zousui
.from("#zousui .text_menu", { y: 30, opacity: 0, duration: 1.5});

//  set_menu_inner1
let set_menu_inner1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".set_menu_inner1",
        start: "-=900px",
        scrub: false,
    },
});
set_menu_inner1
.from(".set_menu_inner1", { y: 30, opacity: 0, duration: 1.5});

//  set_menu_inner2
let set_menu_inner2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".set_menu_inner2",
        start: "-=900px",
        scrub: false,
    },
});
set_menu_inner2
.from(".set_menu_inner2", { y: 30, opacity: 0, duration: 1.5});

//  set_menu_inner3
let set_menu_inner3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".set_menu_inner3",
        start: "-=900px",
        scrub: false,
    },
});
set_menu_inner3
.from(".set_menu_inner3", { y: 30, opacity: 0, duration: 1.5});

// otumami
let otumami = gsap.timeline({
    scrollTrigger: {
        trigger: "#otumami .text_menu",
        start: "-=900px",
        scrub: false,
    },
});
otumami
.from("#otumami .text_menu", { y: 30, opacity: 0, duration: 1.5});

// beer
let beer = gsap.timeline({
    scrollTrigger: {
        trigger: ".beer",
        start: "-=900px",
        scrub: false,
    },
});
beer
.from(".beer", { y: 30, opacity: 0, duration: 1.5});

// sour
let sour = gsap.timeline({
    scrollTrigger: {
        trigger: ".sour",
        start: "-=900px",
        scrub: false,
    },
});
sour
.from(".sour", { y: 30, opacity: 0, duration: 1.5});

// shochu
let shochu = gsap.timeline({
    scrollTrigger: {
        trigger: ".shochu",
        start: "-=900px",
        scrub: false,
    },
});
shochu
.from(".shochu", { y: 30, opacity: 0, duration: 1.5});

// nihonsyu
let nihonsyu = gsap.timeline({
    scrollTrigger: {
        trigger: ".nihonsyu",
        start: "-=900px",
        scrub: false,
    },
});
nihonsyu
.from(".nihonsyu", { y: 30, opacity: 0, duration: 1.5});

// whisky
let whisky = gsap.timeline({
    scrollTrigger: {
        trigger: ".whisky",
        start: "-=900px",
        scrub: false,
    },
});
whisky
.from(".whisky", { y: 30, opacity: 0, duration: 1.5});

// soft_drink
let soft_drink = gsap.timeline({
    scrollTrigger: {
        trigger: ".soft_drink",
        start: "-=900px",
        scrub: false,
    },
});
soft_drink
.from(".soft_drink", { y: 30, opacity: 0, duration: 1.5});

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