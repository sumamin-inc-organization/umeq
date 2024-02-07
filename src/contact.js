import "./common.js"
import "./css/contact.css";
import "./css/form.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


let mm = gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // contact top
    let contact_top = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact_top",
            start: "-=100px",
            scrub: false,
        },
    });

    contact_top
    .from(".underpage_title h2", { y: 30, opacity: 0, duration: 1, delay: 2})
    .from(".underpage_title p", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_icon", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".title_line", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 })
    .from(".form_flex", { y: 30, opacity: 0, duration: 1}, "-=0.5")
    .from(".kv_deco_kumo3", { x: -30, opacity: 0, duration: 1 })
    .from(".kv_deco_kumo4", { x: -30, opacity: 0, duration: 1 })

    // contact top
    let top_btn = gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=560px",
            scrub: false,
        },
    });

    top_btn
    .from(".top_btn", { y: 30, opacity: 0, duration: 1})
});

/* pc */
mm.add("(min-width: 768px)", () => {
// contact top
let contact_top = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact_top",
        start: "-=200px",
        scrub: false,
    },
});

contact_top
.from(".underpage_title h2", { y: 30, opacity: 0, duration: 1, delay: 2})
.from(".underpage_title p", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
.from(".title_icon", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
.from(".title_line", { y: 30, opacity: 0, duration: 1, delay: 2}, "-=3")
.from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 })
.from(".form_flex", { y: 30, opacity: 0, duration: 2}, "-=0.5")
.from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1 }, "-=0.5")

// contact top
let top_btn = gsap.timeline({
    scrollTrigger: {
        trigger: ".top_btn",
        start: "-=560px",
        scrub: false,
    },
});

top_btn
.from(".top_btn", { y: 30, opacity: 0, duration: 1})

});

/*お問い合わせ区分選択時、文字色を黒色に変更する*/ 
let selectFrom = document.querySelector('[name="classification"]');

selectFrom.onchange = event => { 
    selectFrom.style.color = '#000000';
    console.log(selectFrom.selectedIndex);
}
