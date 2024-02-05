import "./css/reset.css";
import "./css/utility.css";
import "./css/header.css";
import "./css/hamburger.css";
import "./css/footer.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // fixed header
    let fixed_header = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "+=1200px",
            scrub: false,
            toggleActions: 'play none none reverse',
        },
    });
    fixed_header
    .from(".fixed_header", { opacity: 0, duration: 0.5 });

    // hamburger menu
    const button = document.querySelector(".button-one");
    const primaryNav = document.querySelector('.primary-nav');
    const logoContainer = document.querySelector('.logo-container');

    animateHamburgerMenu();


    // ロゴ表示切り替え
    function animateHamburgerMenu() {
        if (!button || !primaryNav || !logoContainer) {
            return false;
        }

        button.addEventListener("click", () => {
            const currentState = button.getAttribute("data-state");
            if (!currentState || currentState === "closed") {
                button.setAttribute("data-state", "opened");
                button.setAttribute("aria-expanded", "true");
                // メニューが開いた時にロゴをフェードイン
                logoContainer.querySelector('.hamburger_logo').style.opacity = 0;
                logoContainer.querySelector('.hamburger_logo-w').style.opacity = 1;
            } else {
                button.setAttribute("data-state", "closed");
                button.setAttribute("aria-expanded", "false");
                // メニューが閉じた時にロゴをフェードアウト
                logoContainer.querySelector('.hamburger_logo').style.opacity = 1;
                logoContainer.querySelector('.hamburger_logo-w').style.opacity = 0;
            }
            // ナビゲーションメニューもトグル
            toggleNav();
        });
    }

    // ナビゲーションメニューの開閉切り替え
    function toggleNav() {
        const currentState = button.getAttribute("data-state");
        if (currentState === "closed") {
            addClass();
        } else {
            clearClass();
        }
    }

    function clearClass() {
        primaryNav.classList.remove('primary-nav_closed');
    }
    function addClass() {
        primaryNav.classList.add('primary-nav_closed');
    }
});


// 閉じる･開くボタン切り替え
document.addEventListener('DOMContentLoaded', function () {
    const buttonOne = document.querySelector('.button-one');
    const menuText = document.getElementById("menuText");

    buttonOne.addEventListener('click', function () {
        const isActive = buttonOne.classList.contains('active');
        buttonOne.setAttribute('aria-expanded', !isActive);
        buttonOne.classList.toggle('active', !isActive);

        const buttonImage = buttonOne.querySelector('img');
        
        // 画像とテキスト切り替え
        if (isActive) {
            buttonImage.src = '../images/common/hamburger_open.svg';
            menuText.innerText = "menu";
        } else {
            buttonImage.src = '../images/common/hamburger_close.svg';
            menuText.innerText = "close";
        }
    });
});