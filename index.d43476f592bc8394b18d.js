/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/hamburger.css":
/*!*******************************!*\
  !*** ./src/css/hamburger.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/top.css":
/*!*************************!*\
  !*** ./src/css/top.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/utility.css":
/*!*****************************!*\
  !*** ./src/css/utility.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_utility_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/utility.css */ "./src/css/utility.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _css_hamburger_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/hamburger.css */ "./src/css/hamburger.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/footer.css */ "./src/css/footer.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");










gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);


document.addEventListener("DOMContentLoaded", function() {
    // fixed headerのアニメーション
    let fixed_header = gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "+=1200px",
            scrub: false,
            toggleActions: 'play none none reverse',
        },
    });
    fixed_header
    .from(".fixed_header", { opacity: 0, duration: 0.5 });

    // ハンバーガーメニューのアニメーション
    const button = document.querySelector(".button-one");
    const primaryNav = document.querySelector('.primary-nav');
    const logoContainer = document.querySelector('.logo-container');
    const menuText = document.getElementById("menuText");

    animateHamburgerMenu();

    // ハンバーガーメニューのアニメーション関数
    function animateHamburgerMenu() {
        if (!button || !primaryNav || !logoContainer) {
            return false;
        }
        // ボタンの切り替え
        button.addEventListener("click", () => {
            const isActive = button.classList.contains('active');
            button.classList.toggle('active');
            const buttonImage = button.querySelector('img');
            const targetSrc = isActive ? '../images/common/hamburger_close.svg' : '../images/common/hamburger_open.svg';
            const targetText = isActive ? "menu" : "close";
            // ボタンのフェード
            gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(button, { opacity: 0, duration: 0.2, onComplete: function() {
                gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(button, { opacity: 1, duration: 0.2 });
            }});
            // ボタン画像のフェード
            gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(buttonImage, { opacity: 0, duration: 0.2, onComplete: function() {
                buttonImage.src = targetSrc;
                gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(buttonImage, { opacity: 1, duration: 0.2 });
            }});
            // ボタンテキストのフェード
            gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(menuText, { opacity: 0, duration: 0.2, onComplete: function() {
                menuText.innerText = targetText;
                gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(menuText, { opacity: 1, duration: 0.2 });
            }});

            // ロゴのフェード切り替え
            const currentState = button.getAttribute("data-state");
            if (!currentState || currentState === "closed") {
                button.setAttribute("data-state", "opened");
                button.setAttribute("aria-expanded", "true");
                // メニューが開いた時
                logoContainer.querySelector('.hamburger_logo').style.opacity = 0;
                logoContainer.querySelector('.hamburger_logo-w').style.opacity = 1;
            } else {
                button.setAttribute("data-state", "closed");
                button.setAttribute("aria-expanded", "false");
                // メニューが閉じた時
                logoContainer.querySelector('.hamburger_logo').style.opacity = 1;
                logoContainer.querySelector('.hamburger_logo-w').style.opacity = 0;
            }
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

// スムーススクロール
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = document.getElementById(href.replace('#', ''));
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

//loadアニメーション
const loading = document.querySelector('.loader');
window.addEventListener('load', () => {
    setTimeout(function() {
        loading.classList.add('loaded');
    }, 2000);
});

var start = 0;
var goal = 100;
var speed = 15;

setInterval(function(){
	if(start <= goal){
		jquery__WEBPACK_IMPORTED_MODULE_5__('.load_count').html(start + '%');
		start++;
	}

    if (start >= 100) {
        jquery__WEBPACK_IMPORTED_MODULE_5__('.load_images_huta').addClass('open');
    }
},speed);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");
/* harmony import */ var _css_top_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/top.css */ "./src/css/top.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");





gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);

// kv slide_show
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slide_show img');
    let index = 0;
    function showImage() {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        index = (index + 1) % images.length;
    }
    setTimeout(function() {
        document.querySelector('.slide_show').style.display = "block";
        showImage();
        setInterval(showImage, 3000);
    }, 2000);
});

//出現アニメーション
// kv title
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "-=100px",
        scrub: false,
    },
});
kv_title
.from(".kv_title1", { y: -30, opacity: 0, duration: 2, delay: 2 })
.from(".kv_title2", { y: -30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 20, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_news", { y: 30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_deco_kumo_l_pc", { x: 30, opacity: 0, duration: 1 }, "-=1.5")
.from(".kv_deco_kumo_r_pc", { x: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_ume_l", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_r", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_l_small", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_r_small", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_kumo_l_sp", { x: 30, opacity: 0, duration: 1 })
.from(".kv_deco_kumo_r_sp", { x: -30, opacity: 0, duration: 1 }, "-=0.5");

// kv bottom text
let kv_bottom_text = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_bottom_text",
        start: "-=900px",
        scrub: false,
    },
});
kv_bottom_text
.from(".kv_bottom_text", { y: 30, opacity: 0, duration: 1.5 })
.from(".kv_bottom1", { opacity: 0, duration: 1.5 }, "-=1")
.from(".kv_bottom2 img", { opacity: 0, duration: 1.5 }, "-=1");

// concept
let concept = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#concept",
        start: "-=500px",
        scrub: false,
    },
});
concept
.from("#concept .top_title1", { opacity: 0, duration: 0.25 })
.from("#concept .top_title2", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#concept .top_title3", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#concept .top_title4", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#concept .top_title5", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#concept .top_title6", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#concept .top_title7", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#concept .top_subtitle", { opacity: 0, duration: 1 },"-=0.3")
.from("#concept .top_title_line", { opacity: 0, duration: 1 },"-=1")
.from("#concept .title_deco_top", { x: 30, opacity: 0, duration: 1 },"-=0.5")
.from("#concept .title_deco_bottom", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".concept_flex div h3", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".concept_line", { y: 30, opacity: 0, duration: 1.5 },"-=1.5")
.from(".concept_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".concept_btn", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// concept_img
let concept_img = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: ".concept_img",
        start: "-=800px",
        scrub: false,
    },
});
concept_img
.from(".concept_img3", { y: 30, opacity: 0, duration: 1.5 })
.from(".concept_img2", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".concept_img1", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// recommend
let recommend = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#recommend",
        start: "-=600px",
        scrub: false,
    },
});
recommend
.from("#recommend .top_title1", { opacity: 0, duration: 0.25 })
.from("#recommend .top_title2", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#recommend .top_title3", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#recommend .top_title4", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#recommend .top_title5", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#recommend .top_title6", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#recommend .top_title7", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#recommend .top_subtitle", { opacity: 0, duration: 1 },"-=0.3")
.from("#recommend .top_title_line", { opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_top_pc", { x: -30, opacity: 0, duration: 1 },"-=0.5")
.from("#recommend .title_deco_top_sp", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_bottom_pc", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_bottom_sp", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".recommend_text", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".recommend_menu_kamameshi", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_yakitori", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_unagi", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// certification
let certification = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#certification",
        start: "-=800px",
        scrub: false,
    },
});
certification
.from("#certification", { y: 30, opacity: 0, duration: 2 })
.from(".certification_title", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex1 img", { y: 30, opacity: 0, duration: 1.5 }, "-=0.5")
.from(".certification_flex1 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex2_img_sp", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex2 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex2_img_pc", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// news
let news = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#news",
        start: "-=700px",
        scrub: false,
    },
});
news
.from("#news .top_title1", { opacity: 0, duration: 0.25 })
.from("#news .top_title2", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#news .top_title3", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#news .top_title4", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#news .top_subtitle", { opacity: 0, duration: 1 },"-=0.3")
.from("#news .top_title_line", { opacity: 0, duration: 1 },"-=1")
.from("#news .title_deco_top", { x: 30, opacity: 0, duration: 1 },"-=0.5")
.from("#news .title_deco_bottom", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".news_content", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".news_btn", { y: 30, opacity: 0, duration: 1.5 },"-=0.5");

// instagram
let instagram = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#instagram",
        start: "-=800px",
        scrub: false,
    },
});
instagram
.from("#instagram .top_title1", { opacity: 0, duration: 0.25 })
.from("#instagram .top_title2", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title3", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title4", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title5", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title6", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title7", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title8", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_title9", { opacity: 0, duration: 0.25 },"-=0.2")
.from("#instagram .top_subtitle", { opacity: 0, duration: 1 },"-=0.3")
.from("#instagram .top_title_line", { opacity: 0, duration: 1 },"-=1")
.from("#instagram .title_deco_top_pc", { x: -30, opacity: 0, duration: 1 },"-=0.5")
.from("#instagram .title_deco_top_sp", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#instagram .title_deco_bottom_pc", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#instagram .title_deco_bottom_sp", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".insta_content", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".instagram_btn", { y: 30, opacity: 0, duration: 1.5 });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"src_css_footer_css-src_css_hamburger_css-src_css_header_css-src_css_reset_css-src_css_utility_css": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkumeq"] = self["webpackChunkumeq"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_css_footer_css-src_css_hamburger_css-src_css_header_css-src_css_reset_css-src_css_utility_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YmU4YSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oYW1idXJnZXIuY3NzP2FmNTUiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvaGVhZGVyLmNzcz8zYzM0Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3Jlc2V0LmNzcz81OTM2Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3RvcC5jc3M/ZWU4OCIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy91dGlsaXR5LmNzcz8wODliIiwid2VicGFjazovL3VtZXEvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3VtZXEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hhbWJ1cmdlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2Zvb3Rlci5jc3NcIjtcblxuXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vIGZpeGVkIGhlYWRlcuOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuICAgIGxldCBmaXhlZF9oZWFkZXIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCJib2R5XCIsXG4gICAgICAgICAgICBzdGFydDogXCIrPTEyMDBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIHJldmVyc2UnLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGZpeGVkX2hlYWRlclxuICAgIC5mcm9tKFwiLmZpeGVkX2hlYWRlclwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSk7XG5cbiAgICAvLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vbmVcIik7XG4gICAgY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdicpO1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1jb250YWluZXInKTtcbiAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVRleHRcIik7XG5cbiAgICBhbmltYXRlSGFtYnVyZ2VyTWVudSgpO1xuXG4gICAgLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Ki44OL44Oh44O844K344On44Oz6Zai5pWwXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKSB7XG4gICAgICAgIGlmICghYnV0dG9uIHx8ICFwcmltYXJ5TmF2IHx8ICFsb2dvQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44Oc44K/44Oz44Gu5YiH44KK5pu/44GIXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkltYWdlID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3JjID0gaXNBY3RpdmUgPyAnLi4vaW1hZ2VzL2NvbW1vbi9oYW1idXJnZXJfY2xvc2Uuc3ZnJyA6ICcuLi9pbWFnZXMvY29tbW9uL2hhbWJ1cmdlcl9vcGVuLnN2Zyc7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUZXh0ID0gaXNBY3RpdmUgPyBcIm1lbnVcIiA6IFwiY2xvc2VcIjtcbiAgICAgICAgICAgIC8vIOODnOOCv+ODs+OBruODleOCp+ODvOODiVxuICAgICAgICAgICAgZ3NhcC50byhidXR0b24sIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ3NhcC50byhidXR0b24sIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIC8vIOODnOOCv+ODs+eUu+WDj+OBruODleOCp+ODvOODiVxuICAgICAgICAgICAgZ3NhcC50byhidXR0b25JbWFnZSwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBidXR0b25JbWFnZS5zcmMgPSB0YXJnZXRTcmM7XG4gICAgICAgICAgICAgICAgZ3NhcC50byhidXR0b25JbWFnZSwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgLy8g44Oc44K/44Oz44OG44Kt44K544OI44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICBnc2FwLnRvKG1lbnVUZXh0LCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1lbnVUZXh0LmlubmVyVGV4dCA9IHRhcmdldFRleHQ7XG4gICAgICAgICAgICAgICAgZ3NhcC50byhtZW51VGV4dCwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgICAgICAvLyDjg63jgrTjga7jg5Xjgqfjg7zjg4nliIfjgormm7/jgYhcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50U3RhdGUgfHwgY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJvcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIC8vIOODoeODi+ODpeODvOOBjOmWi+OBhOOBn+aZglxuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvJykuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28tdycpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgIC8vIOODoeODi+ODpeODvOOBjOmWieOBmOOBn+aZglxuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvJykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28tdycpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlTmF2KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOODiuODk+OCsuODvOOCt+ODp+ODs+ODoeODi+ODpeODvOOBrumWi+mWieWIh+OCiuabv+OBiFxuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJDbGFzcygpIHtcbiAgICAgICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG4gICAgfVxufSk7XG5cbi8vIOOCueODoOODvOOCueOCueOCr+ODreODvOODq1xuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykub2Zmc2V0SGVpZ2h0O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYucmVwbGFjZSgnIycsICcnKSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGhlYWRlckhlaWdodDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuLy9sb2Fk44Ki44OL44Oh44O844K344On44OzXG5jb25zdCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICB9LCAyMDAwKTtcbn0pO1xuXG52YXIgc3RhcnQgPSAwO1xudmFyIGdvYWwgPSAxMDA7XG52YXIgc3BlZWQgPSAxNTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcblx0aWYoc3RhcnQgPD0gZ29hbCl7XG5cdFx0JCgnLmxvYWRfY291bnQnKS5odG1sKHN0YXJ0ICsgJyUnKTtcblx0XHRzdGFydCsrO1xuXHR9XG5cbiAgICBpZiAoc3RhcnQgPj0gMTAwKSB7XG4gICAgICAgICQoJy5sb2FkX2ltYWdlc19odXRhJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9XG59LHNwZWVkKTsiLCJpbXBvcnQgXCIuL2NvbW1vbi5qc1wiXG5pbXBvcnQgXCIuL2Nzcy90b3AuY3NzXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbi8vIGt2IHNsaWRlX3Nob3dcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZV9zaG93IGltZycpO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZnVuY3Rpb24gc2hvd0ltYWdlKCkge1xuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWcgPT4gaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgaW1hZ2VzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaW5kZXggPSAoaW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9zaG93Jykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2hvd0ltYWdlKCk7XG4gICAgICAgIHNldEludGVydmFsKHNob3dJbWFnZSwgMzAwMCk7XG4gICAgfSwgMjAwMCk7XG59KTtcblxuLy/lh7rnj77jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi8vIGt2IHRpdGxlXG5sZXQga3ZfdGl0bGUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI2t2XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmt2X3RpdGxlXG4uZnJvbShcIi5rdl90aXRsZTFcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyLCBkZWxheTogMiB9KVxuLmZyb20oXCIua3ZfdGl0bGUyXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9pbWdcIiwgeyB5OiAyMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfbmV3c1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9kZWNvX2t1bW9fbF9wY1wiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9kZWNvX2t1bW9fcl9wY1wiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCItPTFcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX2xcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX3JcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX2xfc21hbGxcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX3Jfc21hbGxcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fa3Vtb19sX3NwXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pXG4uZnJvbShcIi5rdl9kZWNvX2t1bW9fcl9zcFwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCItPTAuNVwiKTtcblxuLy8ga3YgYm90dG9tIHRleHRcbmxldCBrdl9ib3R0b21fdGV4dCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIua3ZfYm90dG9tX3RleHRcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xua3ZfYm90dG9tX3RleHRcbi5mcm9tKFwiLmt2X2JvdHRvbV90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiLmt2X2JvdHRvbTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0xXCIpXG4uZnJvbShcIi5rdl9ib3R0b20yIGltZ1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTFcIik7XG5cbi8vIGNvbmNlcHRcbmxldCBjb25jZXB0ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNjb25jZXB0XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmNvbmNlcHRcbi5mcm9tKFwiI2NvbmNlcHQgLnRvcF90aXRsZTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9KVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3N1YnRpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC4zXCIpXG4uZnJvbShcIiNjb25jZXB0IC50b3BfdGl0bGVfbGluZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI2NvbmNlcHQgLnRpdGxlX2RlY29fdG9wXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTAuNVwiKVxuLmZyb20oXCIjY29uY2VwdCAudGl0bGVfZGVjb19ib3R0b21cIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfZmxleCBkaXYgaDNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0wLjVcIilcbi5mcm9tKFwiLmNvbmNlcHRfbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTEuNVwiKVxuLmZyb20oXCIuY29uY2VwdF90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIuY29uY2VwdF9idG5cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBjb25jZXB0X2ltZ1xubGV0IGNvbmNlcHRfaW1nID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5jb25jZXB0X2ltZ1wiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5jb25jZXB0X2ltZ1xuLmZyb20oXCIuY29uY2VwdF9pbWczXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiLmNvbmNlcHRfaW1nMlwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfaW1nMVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIik7XG5cbi8vIHJlY29tbWVuZFxubGV0IHJlY29tbWVuZCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjcmVjb21tZW5kXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnJlY29tbWVuZFxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSlcbi5mcm9tKFwiI3JlY29tbWVuZCAudG9wX3RpdGxlMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRvcF90aXRsZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudG9wX3RpdGxlNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRvcF90aXRsZTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudG9wX3N1YnRpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC4zXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRvcF90aXRsZV9saW5lXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50aXRsZV9kZWNvX3RvcF9wY1wiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC41XCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRpdGxlX2RlY29fdG9wX3NwXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudGl0bGVfZGVjb19ib3R0b21fcGNcIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50aXRsZV9kZWNvX2JvdHRvbV9zcFwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIucmVjb21tZW5kX3RleHRcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0wLjVcIilcbi5mcm9tKFwiLnJlY29tbWVuZF9tZW51X2thbWFtZXNoaVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLnJlY29tbWVuZF9tZW51X3lha2l0b3JpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIucmVjb21tZW5kX21lbnVfdW5hZ2lcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBjZXJ0aWZpY2F0aW9uXG5sZXQgY2VydGlmaWNhdGlvbiA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjY2VydGlmaWNhdGlvblwiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5jZXJ0aWZpY2F0aW9uXG4uZnJvbShcIiNjZXJ0aWZpY2F0aW9uXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0pXG4uZnJvbShcIi5jZXJ0aWZpY2F0aW9uX3RpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl9mbGV4MSBpbWdcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIi09MC41XCIpXG4uZnJvbShcIi5jZXJ0aWZpY2F0aW9uX2ZsZXgxIC5jZXJ0aWZpY2F0aW9uX3RleHRcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpXG4uZnJvbShcIi5jZXJ0aWZpY2F0aW9uX2ZsZXgyX2ltZ19zcFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDIgLmNlcnRpZmljYXRpb25fdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDJfaW1nX3BjXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKTtcblxuLy8gbmV3c1xubGV0IG5ld3MgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI25ld3NcIixcbiAgICAgICAgc3RhcnQ6IFwiLT03MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xubmV3c1xuLmZyb20oXCIjbmV3cyAudG9wX3RpdGxlMVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0pXG4uZnJvbShcIiNuZXdzIC50b3BfdGl0bGUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNuZXdzIC50b3BfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNuZXdzIC50b3BfdGl0bGU0XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNuZXdzIC50b3Bfc3VidGl0bGVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0wLjNcIilcbi5mcm9tKFwiI25ld3MgLnRvcF90aXRsZV9saW5lXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjbmV3cyAudGl0bGVfZGVjb190b3BcIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC41XCIpXG4uZnJvbShcIiNuZXdzIC50aXRsZV9kZWNvX2JvdHRvbVwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIubmV3c19jb250ZW50XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MC41XCIpXG4uZnJvbShcIi5uZXdzX2J0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKTtcblxuLy8gaW5zdGFncmFtXG5sZXQgaW5zdGFncmFtID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNpbnN0YWdyYW1cIixcbiAgICAgICAgc3RhcnQ6IFwiLT04MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xuaW5zdGFncmFtXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZTFcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9KVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3RpdGxlNFwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGU1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZTZcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3RpdGxlN1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjI1IH0sXCItPTAuMlwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGU4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMjUgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZTlcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yNSB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3N1YnRpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC4zXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZV9saW5lXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50aXRsZV9kZWNvX3RvcF9wY1wiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC41XCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRpdGxlX2RlY29fdG9wX3NwXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudGl0bGVfZGVjb19ib3R0b21fcGNcIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50aXRsZV9kZWNvX2JvdHRvbV9zcFwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIuaW5zdGFfY29udGVudFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKVxuLmZyb20oXCIuaW5zdGFncmFtX2J0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzcmNfY3NzX2Zvb3Rlcl9jc3Mtc3JjX2Nzc19oYW1idXJnZXJfY3NzLXNyY19jc3NfaGVhZGVyX2Nzcy1zcmNfY3NzX3Jlc2V0X2Nzcy1zcmNfY3NzX3V0aWxpdHlfY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3VtZXFcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwic3JjX2Nzc19mb290ZXJfY3NzLXNyY19jc3NfaGFtYnVyZ2VyX2Nzcy1zcmNfY3NzX2hlYWRlcl9jc3Mtc3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc191dGlsaXR5X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9