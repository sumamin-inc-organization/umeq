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

// kv title
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "-=100px",
        scrub: false,
        // markers:true,
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
.from("#concept .top_title1", { opacity: 0, duration: 0.3 })
.from("#concept .top_title2", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#concept .top_title3", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#concept .top_title4", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#concept .top_title5", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#concept .top_title6", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#concept .top_title7", { opacity: 0, duration: 0.3 },"-=0.2")
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
.from("#recommend .top_title1", { opacity: 0, duration: 0.3 })
.from("#recommend .top_title2", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#recommend .top_title3", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#recommend .top_title4", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#recommend .top_title5", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#recommend .top_title6", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#recommend .top_title7", { opacity: 0, duration: 0.3 },"-=0.2")
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
.from(".certification_flex2 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".certification_flex2 img", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// news
let news = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#news",
        start: "-=700px",
        scrub: false,
    },
});
news
.from("#news .top_title1", { opacity: 0, duration: 0.3 })
.from("#news .top_title2", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#news .top_title3", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#news .top_title4", { opacity: 0, duration: 0.3 },"-=0.2")
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
.from("#instagram .top_title1", { opacity: 0, duration: 0.3 })
.from("#instagram .top_title2", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title3", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title4", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title5", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title6", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title7", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title8", { opacity: 0, duration: 0.3 },"-=0.2")
.from("#instagram .top_title9", { opacity: 0, duration: 0.3 },"-=0.2")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvZm9vdGVyLmNzcz9iZThhIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3M/YWY1NSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzNjMzQiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvcmVzZXQuY3NzPzU5MzYiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvdG9wLmNzcz9lZTg4Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3V0aWxpdHkuY3NzPzA4OWIiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGFtYnVyZ2VyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZm9vdGVyLmNzc1wiO1xuXG5cbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gZml4ZWQgaGVhZGVy44Gu44Ki44OL44Oh44O844K344On44OzXG4gICAgbGV0IGZpeGVkX2hlYWRlciA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcImJvZHlcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIis9MTIwMHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSBub25lIG5vbmUgcmV2ZXJzZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgZml4ZWRfaGVhZGVyXG4gICAgLmZyb20oXCIuZml4ZWRfaGVhZGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KTtcblxuICAgIC8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcbiAgICBjb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1hcnktbmF2Jyk7XG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51VGV4dFwiKTtcblxuICAgIGFuaW1hdGVIYW1idXJnZXJNZW51KCk7XG5cbiAgICAvLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7PplqLmlbBcbiAgICBmdW5jdGlvbiBhbmltYXRlSGFtYnVyZ2VyTWVudSgpIHtcbiAgICAgICAgaWYgKCFidXR0b24gfHwgIXByaW1hcnlOYXYgfHwgIWxvZ29Db250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5zjgr/jg7Pjga7liIfjgormm7/jgYhcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uSW1hZ2UgPSBidXR0b24ucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTcmMgPSBpc0FjdGl2ZSA/ICcuLi9pbWFnZXMvY29tbW9uL2hhbWJ1cmdlcl9jbG9zZS5zdmcnIDogJy4uL2ltYWdlcy9jb21tb24vaGFtYnVyZ2VyX29wZW4uc3ZnJztcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFRleHQgPSBpc0FjdGl2ZSA/IFwibWVudVwiIDogXCJjbG9zZVwiO1xuICAgICAgICAgICAgLy8g44Oc44K/44Oz44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbiwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgLy8g44Oc44K/44Oz55S75YOP44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbkltYWdlLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkltYWdlLnNyYyA9IHRhcmdldFNyYztcbiAgICAgICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbkltYWdlLCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjIgfSk7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAvLyDjg5zjgr/jg7Pjg4bjgq3jgrnjg4jjga7jg5Xjgqfjg7zjg4lcbiAgICAgICAgICAgIGdzYXAudG8obWVudVRleHQsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbWVudVRleHQuaW5uZXJUZXh0ID0gdGFyZ2V0VGV4dDtcbiAgICAgICAgICAgICAgICBnc2FwLnRvKG1lbnVUZXh0LCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjIgfSk7XG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICAgIC8vIOODreOCtOOBruODleOCp+ODvOODieWIh+OCiuabv+OBiFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRTdGF0ZSB8fCBjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcIm9wZW5lZFwiKTtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgLy8g44Oh44OL44Ol44O844GM6ZaL44GE44Gf5pmCXG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28nKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nby13Jykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgLy8g44Oh44OL44Ol44O844GM6ZaJ44GY44Gf5pmCXG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nby13Jykuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVOYXYoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44OK44OT44Ky44O844K344On44Oz44Oh44OL44Ol44O844Gu6ZaL6ZaJ5YiH44KK5pu/44GIXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgYWRkQ2xhc3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckNsYXNzKCkge1xuICAgICAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbiAgICB9XG59KTtcblxuLy8g44K544Og44O844K544K544Kv44Ot44O844OrXG5jb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5vZmZzZXRIZWlnaHQ7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChhbmNob3IgPT4ge1xuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5yZXBsYWNlKCcjJywgJycpKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vL2xvYWTjgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbmNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIH0sIDIwMDApO1xufSk7XG5cbnZhciBzdGFydCA9IDA7XG52YXIgZ29hbCA9IDEwMDtcbnZhciBzcGVlZCA9IDE1O1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuXHRpZihzdGFydCA8PSBnb2FsKXtcblx0XHQkKCcubG9hZF9jb3VudCcpLmh0bWwoc3RhcnQgKyAnJScpO1xuXHRcdHN0YXJ0Kys7XG5cdH1cblxuICAgIGlmIChzdGFydCA+PSAxMDApIHtcbiAgICAgICAgJCgnLmxvYWRfaW1hZ2VzX2h1dGEnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgIH1cbn0sc3BlZWQpOyIsImltcG9ydCBcIi4vY29tbW9uLmpzXCJcbmltcG9ydCBcIi4vY3NzL3RvcC5jc3NcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuLy8ga3YgdGl0bGVcbmxldCBrdl90aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIja3ZcIixcbiAgICAgICAgc3RhcnQ6IFwiLT0xMDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIC8vIG1hcmtlcnM6dHJ1ZSxcbiAgICB9LFxufSk7XG5rdl90aXRsZVxuLmZyb20oXCIua3ZfdGl0bGUxXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiwgZGVsYXk6IDIgfSlcbi5mcm9tKFwiLmt2X3RpdGxlMlwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfaW1nXCIsIHsgeTogMjAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0sIFwiLT0xLjVcIilcbi5mcm9tKFwiLmt2X25ld3NcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfZGVjb19rdW1vX2xfcGNcIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfZGVjb19rdW1vX3JfcGNcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiLT0xXCIpXG4uZnJvbShcIi5rdl9kZWNvX3VtZV9sXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIi09MC44XCIpXG4uZnJvbShcIi5rdl9kZWNvX3VtZV9yXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIi09MC44XCIpXG4uZnJvbShcIi5rdl9kZWNvX3VtZV9sX3NtYWxsXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIi09MC44XCIpXG4uZnJvbShcIi5rdl9kZWNvX3VtZV9yX3NtYWxsXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIi09MC44XCIpXG4uZnJvbShcIi5rdl9kZWNvX2t1bW9fbF9zcFwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9KVxuLmZyb20oXCIua3ZfZGVjb19rdW1vX3Jfc3BcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiLT0wLjVcIik7XG5cbi8vIGt2IGJvdHRvbSB0ZXh0XG5sZXQga3ZfYm90dG9tX3RleHQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmt2X2JvdHRvbV90ZXh0XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09OTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmt2X2JvdHRvbV90ZXh0XG4uZnJvbShcIi5rdl9ib3R0b21fdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pXG4uZnJvbShcIi5rdl9ib3R0b20xXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LCBcIi09MVwiKVxuLmZyb20oXCIua3ZfYm90dG9tMiBpbWdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0xXCIpO1xuXG4vLyBjb25jZXB0XG5sZXQgY29uY2VwdCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjY29uY2VwdFwiLFxuICAgICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5jb25jZXB0XG4uZnJvbShcIiNjb25jZXB0IC50b3BfdGl0bGUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9KVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNjb25jZXB0IC50b3BfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2NvbmNlcHQgLnRvcF90aXRsZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3RpdGxlNVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNjb25jZXB0IC50b3BfdGl0bGU2XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2NvbmNlcHQgLnRvcF90aXRsZTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjY29uY2VwdCAudG9wX3N1YnRpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC4zXCIpXG4uZnJvbShcIiNjb25jZXB0IC50b3BfdGl0bGVfbGluZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI2NvbmNlcHQgLnRpdGxlX2RlY29fdG9wXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTAuNVwiKVxuLmZyb20oXCIjY29uY2VwdCAudGl0bGVfZGVjb19ib3R0b21cIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfZmxleCBkaXYgaDNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0wLjVcIilcbi5mcm9tKFwiLmNvbmNlcHRfbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTEuNVwiKVxuLmZyb20oXCIuY29uY2VwdF90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIuY29uY2VwdF9idG5cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBjb25jZXB0X2ltZ1xubGV0IGNvbmNlcHRfaW1nID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5jb25jZXB0X2ltZ1wiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5jb25jZXB0X2ltZ1xuLmZyb20oXCIuY29uY2VwdF9pbWczXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiLmNvbmNlcHRfaW1nMlwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfaW1nMVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIik7XG5cbi8vIHJlY29tbWVuZFxubGV0IHJlY29tbWVuZCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjcmVjb21tZW5kXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnJlY29tbWVuZFxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9KVxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudG9wX3RpdGxlM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRvcF90aXRsZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGU1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudG9wX3RpdGxlNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRvcF90aXRsZTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50b3Bfc3VidGl0bGVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0wLjNcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudG9wX3RpdGxlX2xpbmVcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRpdGxlX2RlY29fdG9wX3BjXCIsIHsgeDogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0wLjVcIilcbi5mcm9tKFwiI3JlY29tbWVuZCAudGl0bGVfZGVjb190b3Bfc3BcIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50aXRsZV9kZWNvX2JvdHRvbV9wY1wiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRpdGxlX2RlY29fYm90dG9tX3NwXCIsIHsgeDogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIi5yZWNvbW1lbmRfdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKVxuLmZyb20oXCIucmVjb21tZW5kX21lbnVfa2FtYW1lc2hpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIucmVjb21tZW5kX21lbnVfeWFraXRvcmlcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpXG4uZnJvbShcIi5yZWNvbW1lbmRfbWVudV91bmFnaVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIik7XG5cbi8vIGNlcnRpZmljYXRpb25cbmxldCBjZXJ0aWZpY2F0aW9uID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNjZXJ0aWZpY2F0aW9uXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09ODAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmNlcnRpZmljYXRpb25cbi5mcm9tKFwiI2NlcnRpZmljYXRpb25cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSlcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fdGl0bGVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpXG4uZnJvbShcIi5jZXJ0aWZpY2F0aW9uX2ZsZXgxIGltZ1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0wLjVcIilcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDEgLmNlcnRpZmljYXRpb25fdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDIgLmNlcnRpZmljYXRpb25fdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl9mbGV4MiBpbWdcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBuZXdzXG5sZXQgbmV3cyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjbmV3c1wiLFxuICAgICAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5uZXdzXG4uZnJvbShcIiNuZXdzIC50b3BfdGl0bGUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9KVxuLmZyb20oXCIjbmV3cyAudG9wX3RpdGxlMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNuZXdzIC50b3BfdGl0bGUzXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI25ld3MgLnRvcF90aXRsZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjbmV3cyAudG9wX3N1YnRpdGxlXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MC4zXCIpXG4uZnJvbShcIiNuZXdzIC50b3BfdGl0bGVfbGluZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI25ld3MgLnRpdGxlX2RlY29fdG9wXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTAuNVwiKVxuLmZyb20oXCIjbmV3cyAudGl0bGVfZGVjb19ib3R0b21cIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiLm5ld3NfY29udGVudFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKVxuLmZyb20oXCIubmV3c19idG5cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0wLjVcIik7XG5cbi8vIGluc3RhZ3JhbVxubGV0IGluc3RhZ3JhbSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjaW5zdGFncmFtXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09ODAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmluc3RhZ3JhbVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGUxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9KVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGUyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3RpdGxlM1wiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGU1XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3RpdGxlNlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF90aXRsZTdcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4zIH0sXCItPTAuMlwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGU4XCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMyB9LFwiLT0wLjJcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3RpdGxlOVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjMgfSxcIi09MC4yXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRvcF9zdWJ0aXRsZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTAuM1wiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGVfbGluZVwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudGl0bGVfZGVjb190b3BfcGNcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTAuNVwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50aXRsZV9kZWNvX3RvcF9zcFwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIiNpbnN0YWdyYW0gLnRpdGxlX2RlY29fYm90dG9tX3BjXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudGl0bGVfZGVjb19ib3R0b21fc3BcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiLmluc3RhX2NvbnRlbnRcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0wLjVcIilcbi5mcm9tKFwiLmluc3RhZ3JhbV9idG5cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Nzc19mb290ZXJfY3NzLXNyY19jc3NfaGFtYnVyZ2VyX2Nzcy1zcmNfY3NzX2hlYWRlcl9jc3Mtc3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc191dGlsaXR5X2Nzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bWVxXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3VtZXFcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2dzYXBfU2Nyb2xsVHJpZ2dlcl9qcy1ub2RlX21vZHVsZXNfZ3NhcF9pbmRleF9qcy1ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpcy0wYzE2NTZcIixcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==