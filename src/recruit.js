import "./common.js"
import "./css/recruit.css";
import "./css/form.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


let mm = gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // recruit_top
    let recruit_top = gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_top",
            start: "-=100px",
            scrub: false,
        },
    });

    recruit_top
    .from(".underpage_title h2", { y: 30, opacity: 0, duration: 1, delay: 2})
    .from(".underpage_title p", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_icon", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_line", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 }, "-=0.5")
    .from(".top_catchcopy", { y: 30, opacity: 0, duration: 2}, "-=1.5")
    .from(".recruit_ume", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
    .from(".top_sentence p", { y: 30, opacity: 0, duration: 2}, "-=1.5")
    .from(".top_grid", { y: 30, opacity: 0, duration: 2, delay: 1}, "-=1")
    .from(".kv_deco_kumo3", { x: 30, opacity: 0, duration: 1 }, "-=2")


    // recruit_info
    let recruit_info  = gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_info",
            start: "+=120px",
            scrub: false,
        },
    });

    recruit_info
    .from(".reccuit_info_grid", { y: 30, opacity: 0, duration: 1})


    // recruit_form
    let recruit_form  = gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_form",
            start: "-=400px",
            scrub: false,
        },
    });

    recruit_form
    .from(".title_decoration", { y: 30, opacity: 0, duration: 1})
    .from(".title_text", { y: 30, opacity: 0, duration: 1}, "-=1")
    .from(".form_flex", { y: 30, opacity: 0, duration: 1})


    // top_btn
    let top_btn = gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=680px",
            scrub: false,
        },
    });

    top_btn
    .from(".top_btn", { y: 30, opacity: 0, duration: 1})

});

/* pc */
mm.add("(min-width: 768px)", () => {
    // recruit_top
    let recruit_top = gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_top",
            start: "-=200px",
            scrub: false,
        },
    });

    recruit_top
    .from(".underpage_title h2", { y: 30, opacity: 0, duration: 1, delay: 2})
    .from(".underpage_title p", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_icon", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_line", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 }, "-=0.5")
    .from(".top_catchcopy", { y: 30, opacity: 0, duration: 2}, "-=1.5")
    .from(".recruit_ume", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=1")
    .from(".top_sentence p", { y: 30, opacity: 0, duration: 2}, "-=1.5")
    .from(".top_grid", { y: 30, opacity: 0, duration: 2}, "-=1")
    .from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1 }, "-=1")
    .from(".recruit_deco_kumo1", { x: -30, opacity: 0, duration: 1 })


    // recruit_info
    let recruit_info  = gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_info",
            start: "-=200px",
            scrub: false,
        },
    });

    recruit_info
    .from(".reccuit_info_grid", { y: 30, opacity: 0, duration: 1})


    // recruit_form
    let recruit_form  = gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_form",
            start: "-=400px",
            scrub: false,
        },
    });

    recruit_form
    .from(".title_decoration", { y: 30, opacity: 0, duration: 1})
    .from(".title_text", { y: 30, opacity: 0, duration: 1}, "-=1")
    .from(".form_flex", { y: 30, opacity: 0, duration: 1})


    // top_btn
    let top_btn = gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=680px",
            scrub: false,
        },
    });

    top_btn
    .from(".top_btn", { y: 30, opacity: 0, duration: 1})

});

/*お問い合わせ区分選択時、文字色を黒色に変更する*/ 
let selectFrom = document.querySelector('[name="classification"]');
if (selectFrom != undefined) {
    selectFrom.onchange = event => { 
        selectFrom.style.color = '#000000';
        console.log(selectFrom.selectedIndex);
    }
}