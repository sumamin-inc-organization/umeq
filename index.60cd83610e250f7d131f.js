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
    },
});
kv_title
.from(".kv_title1", { y: -30, opacity: 0, duration: 2, delay: 2 })
.from(".kv_title2", { y: -30, opacity: 0, duration: 2 }, "-=1.5")
.from(".kv_img", { y: 30, opacity: 0, duration: 2 }, "-=1.8")
.from(".kv_news", { y: 30, opacity: 0, duration: 2 }, "-=1.5");
kv_title
.from(".kv_deco_kumo_l", { x: 30, opacity: 0, duration: 1 }, "-=1.5")
.from(".kv_deco_kumo_r", { x: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_ume_l", { scale:0, opacity: 0, duration: 1.8 }, "-=1.5")
.from(".kv_deco_ume_r", { scale:0, opacity: 0, duration: 1.8 }, "-=1.5")
.from(".kv_deco_ume_l_small", { scale:0, opacity: 0, duration: 1.8 },"-=1.5")
.from(".kv_deco_ume_r_small", { scale:0, opacity: 0, duration: 1.8 },"-=1.5");

// kv bottom text
let kv_bottom_text = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: ".kv_bottom_text",
        start: "-=800px",
        scrub: false,
        // markers:true,
    },
});
kv_bottom_text
.from(".kv_bottom_text", { y: 30, opacity: 0, duration: 2 });

// concept
let concept = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#concept",
        start: "-=600px",
        scrub: false,
    },
});
concept
.from("#concept .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#concept .title_deco_top", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#concept .title_deco_bottom", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".concept_flex div h3", { y: 30, opacity: 0, duration: 1.5 },"-=1")
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
        markers:true,
    },
});
recommend
.from("#recommend .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#recommend .title_deco_top", { x: -30, opacity: 0, duration: 1 },"-=1")
.from("#recommend .title_deco_bottom", { x: 30, opacity: 0, duration: 1 },"-=1")
.from(".recommend_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_kamameshi", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_yakitori", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".recommend_menu_unagi", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// certification
let certification = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#certification",
        start: "-=800px",
        scrub: false,
        markers:true,
    },
});
certification
.from("#certification", { y: 30, opacity: 0, duration: 2.5 })
.from(".certification_title", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex1 img", { y: 30, opacity: 0, duration: 1.5 })
.from(".certification_flex1 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=1")
.from(".certification_flex2 .certification_text", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".certification_flex2 img", { y: 30, opacity: 0, duration: 1.5 },"-=1");

// news
let news = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#news",
        start: "-=700px",
        scrub: false,
        markers:true,
    },
});
news
.from("#news .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#news .title_deco_top", { x: 30, opacity: 0, duration: 1 },"-=1")
.from("#news .title_deco_bottom", { x: -30, opacity: 0, duration: 1 },"-=1")
.from(".news_content", { y: 30, opacity: 0, duration: 1.5 },"-=0.5")
.from(".news_btn", { y: 30, opacity: 0, duration: 1.5 },"-=0.5");

// instagram
let instagram = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    scrollTrigger: {
        trigger: "#instagram",
        start: "-=800px",
        scrub: false,
        markers:true,
    },
});
instagram
.from("#instagram .top_title", { y: 30, opacity: 0, duration: 1.5 })
.from("#instagram .title_deco_top", { x: -30, opacity: 0, duration: 1 },"-=1")
.from("#instagram .title_deco_bottom", { x: 30, opacity: 0, duration: 1 },"-=1")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvZm9vdGVyLmNzcz9iZThhIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3M/YWY1NSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzNjMzQiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvcmVzZXQuY3NzPzU5MzYiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvdG9wLmNzcz9lZTg4Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3V0aWxpdHkuY3NzPzA4OWIiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGFtYnVyZ2VyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZm9vdGVyLmNzc1wiO1xuXG5cbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gZml4ZWQgaGVhZGVy44Gu44Ki44OL44Oh44O844K344On44OzXG4gICAgbGV0IGZpeGVkX2hlYWRlciA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcImJvZHlcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIis9MTIwMHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSBub25lIG5vbmUgcmV2ZXJzZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgZml4ZWRfaGVhZGVyXG4gICAgLmZyb20oXCIuZml4ZWRfaGVhZGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KTtcblxuICAgIC8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcbiAgICBjb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1hcnktbmF2Jyk7XG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51VGV4dFwiKTtcblxuICAgIGFuaW1hdGVIYW1idXJnZXJNZW51KCk7XG5cbiAgICAvLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7PplqLmlbBcbiAgICBmdW5jdGlvbiBhbmltYXRlSGFtYnVyZ2VyTWVudSgpIHtcbiAgICAgICAgaWYgKCFidXR0b24gfHwgIXByaW1hcnlOYXYgfHwgIWxvZ29Db250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5zjgr/jg7Pjga7liIfjgormm7/jgYhcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uSW1hZ2UgPSBidXR0b24ucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTcmMgPSBpc0FjdGl2ZSA/ICcuLi9pbWFnZXMvY29tbW9uL2hhbWJ1cmdlcl9jbG9zZS5zdmcnIDogJy4uL2ltYWdlcy9jb21tb24vaGFtYnVyZ2VyX29wZW4uc3ZnJztcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFRleHQgPSBpc0FjdGl2ZSA/IFwibWVudVwiIDogXCJjbG9zZVwiO1xuICAgICAgICAgICAgLy8g44Oc44K/44Oz44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbiwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgLy8g44Oc44K/44Oz55S75YOP44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbkltYWdlLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkltYWdlLnNyYyA9IHRhcmdldFNyYztcbiAgICAgICAgICAgICAgICBnc2FwLnRvKGJ1dHRvbkltYWdlLCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjIgfSk7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAvLyDjg5zjgr/jg7Pjg4bjgq3jgrnjg4jjga7jg5Xjgqfjg7zjg4lcbiAgICAgICAgICAgIGdzYXAudG8obWVudVRleHQsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbWVudVRleHQuaW5uZXJUZXh0ID0gdGFyZ2V0VGV4dDtcbiAgICAgICAgICAgICAgICBnc2FwLnRvKG1lbnVUZXh0LCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjIgfSk7XG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICAgIC8vIOODreOCtOOBruODleOCp+ODvOODieWIh+OCiuabv+OBiFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRTdGF0ZSB8fCBjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcIm9wZW5lZFwiKTtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgLy8g44Oh44OL44Ol44O844GM6ZaL44GE44Gf5pmCXG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28nKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nby13Jykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgLy8g44Oh44OL44Ol44O844GM6ZaJ44GY44Gf5pmCXG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nby13Jykuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVOYXYoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44OK44OT44Ky44O844K344On44Oz44Oh44OL44Ol44O844Gu6ZaL6ZaJ5YiH44KK5pu/44GIXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgYWRkQ2xhc3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckNsYXNzKCkge1xuICAgICAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbiAgICB9XG59KTtcblxuLy8g44K544Og44O844K544K544Kv44Ot44O844OrXG5jb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5vZmZzZXRIZWlnaHQ7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChhbmNob3IgPT4ge1xuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5yZXBsYWNlKCcjJywgJycpKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vL2xvYWTjgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbmNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIH0sIDIwMDApO1xufSk7XG5cbnZhciBzdGFydCA9IDA7XG52YXIgZ29hbCA9IDEwMDtcbnZhciBzcGVlZCA9IDE1O1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuXHRpZihzdGFydCA8PSBnb2FsKXtcblx0XHQkKCcubG9hZF9jb3VudCcpLmh0bWwoc3RhcnQgKyAnJScpO1xuXHRcdHN0YXJ0Kys7XG5cdH1cblxuICAgIGlmIChzdGFydCA+PSAxMDApIHtcbiAgICAgICAgJCgnLmxvYWRfaW1hZ2VzX2h1dGEnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgIH1cbn0sc3BlZWQpO1xuIiwiaW1wb3J0IFwiLi9jb21tb24uanNcIlxuaW1wb3J0IFwiLi9jc3MvdG9wLmNzc1wiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5cbi8vIGt2IHRpdGxlXG5sZXQga3ZfdGl0bGUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI2t2XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmt2X3RpdGxlXG4uZnJvbShcIi5rdl90aXRsZTFcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyLCBkZWxheTogMiB9KVxuLmZyb20oXCIua3ZfdGl0bGUyXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9pbWdcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuOFwiKVxuLmZyb20oXCIua3ZfbmV3c1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpO1xua3ZfdGl0bGVcbi5mcm9tKFwiLmt2X2RlY29fa3Vtb19sXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiLT0xLjVcIilcbi5mcm9tKFwiLmt2X2RlY29fa3Vtb19yXCIsIHsgeDogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIi09MVwiKVxuLmZyb20oXCIua3ZfZGVjb191bWVfbFwiLCB7IHNjYWxlOjAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjggfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfZGVjb191bWVfclwiLCB7IHNjYWxlOjAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjggfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfZGVjb191bWVfbF9zbWFsbFwiLCB7IHNjYWxlOjAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjggfSxcIi09MS41XCIpXG4uZnJvbShcIi5rdl9kZWNvX3VtZV9yX3NtYWxsXCIsIHsgc2NhbGU6MCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuOCB9LFwiLT0xLjVcIik7XG5cbi8vIGt2IGJvdHRvbSB0ZXh0XG5sZXQga3ZfYm90dG9tX3RleHQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmt2X2JvdHRvbV90ZXh0XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09ODAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAvLyBtYXJrZXJzOnRydWUsXG4gICAgfSxcbn0pO1xua3ZfYm90dG9tX3RleHRcbi5mcm9tKFwiLmt2X2JvdHRvbV90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyIH0pO1xuXG4vLyBjb25jZXB0XG5sZXQgY29uY2VwdCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjY29uY2VwdFwiLFxuICAgICAgICBzdGFydDogXCItPTYwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5jb25jZXB0XG4uZnJvbShcIiNjb25jZXB0IC50b3BfdGl0bGVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9KVxuLmZyb20oXCIjY29uY2VwdCAudGl0bGVfZGVjb190b3BcIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjY29uY2VwdCAudGl0bGVfZGVjb19ib3R0b21cIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfZmxleCBkaXYgaDNcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpXG4uZnJvbShcIi5jb25jZXB0X2xpbmVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xLjVcIilcbi5mcm9tKFwiLmNvbmNlcHRfdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfYnRuXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKTtcblxuLy8gY29uY2VwdF9pbWdcbmxldCBjb25jZXB0X2ltZyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuY29uY2VwdF9pbWdcIixcbiAgICAgICAgc3RhcnQ6IFwiLT04MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xuY29uY2VwdF9pbWdcbi5mcm9tKFwiLmNvbmNlcHRfaW1nM1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pXG4uZnJvbShcIi5jb25jZXB0X2ltZzJcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpXG4uZnJvbShcIi5jb25jZXB0X2ltZzFcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyByZWNvbW1lbmRcbmxldCByZWNvbW1lbmQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI3JlY29tbWVuZFwiLFxuICAgICAgICBzdGFydDogXCItPTYwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgbWFya2Vyczp0cnVlLFxuICAgIH0sXG59KTtcbnJlY29tbWVuZFxuLmZyb20oXCIjcmVjb21tZW5kIC50b3BfdGl0bGVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9KVxuLmZyb20oXCIjcmVjb21tZW5kIC50aXRsZV9kZWNvX3RvcFwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjcmVjb21tZW5kIC50aXRsZV9kZWNvX2JvdHRvbVwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIi5yZWNvbW1lbmRfdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLnJlY29tbWVuZF9tZW51X2thbWFtZXNoaVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLnJlY29tbWVuZF9tZW51X3lha2l0b3JpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIucmVjb21tZW5kX21lbnVfdW5hZ2lcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBjZXJ0aWZpY2F0aW9uXG5sZXQgY2VydGlmaWNhdGlvbiA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjY2VydGlmaWNhdGlvblwiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgbWFya2Vyczp0cnVlLFxuICAgIH0sXG59KTtcbmNlcnRpZmljYXRpb25cbi5mcm9tKFwiI2NlcnRpZmljYXRpb25cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIuNSB9KVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl90aXRsZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDEgaW1nXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDEgLmNlcnRpZmljYXRpb25fdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNlcnRpZmljYXRpb25fZmxleDIgLmNlcnRpZmljYXRpb25fdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl9mbGV4MiBpbWdcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBuZXdzXG5sZXQgbmV3cyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjbmV3c1wiLFxuICAgICAgICBzdGFydDogXCItPTcwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgbWFya2Vyczp0cnVlLFxuICAgIH0sXG59KTtcbm5ld3Ncbi5mcm9tKFwiI25ld3MgLnRvcF90aXRsZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pXG4uZnJvbShcIiNuZXdzIC50aXRsZV9kZWNvX3RvcFwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIiNuZXdzIC50aXRsZV9kZWNvX2JvdHRvbVwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIubmV3c19jb250ZW50XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MC41XCIpXG4uZnJvbShcIi5uZXdzX2J0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKTtcblxuLy8gaW5zdGFncmFtXG5sZXQgaW5zdGFncmFtID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNpbnN0YWdyYW1cIixcbiAgICAgICAgc3RhcnQ6IFwiLT04MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIG1hcmtlcnM6dHJ1ZSxcbiAgICB9LFxufSk7XG5pbnN0YWdyYW1cbi5mcm9tKFwiI2luc3RhZ3JhbSAudG9wX3RpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiI2luc3RhZ3JhbSAudGl0bGVfZGVjb190b3BcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI2luc3RhZ3JhbSAudGl0bGVfZGVjb19ib3R0b21cIiwgeyB4OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIuaW5zdGFfY29udGVudFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTAuNVwiKVxuLmZyb20oXCIuaW5zdGFncmFtX2J0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzcmNfY3NzX2Zvb3Rlcl9jc3Mtc3JjX2Nzc19oYW1idXJnZXJfY3NzLXNyY19jc3NfaGVhZGVyX2Nzcy1zcmNfY3NzX3Jlc2V0X2Nzcy1zcmNfY3NzX3V0aWxpdHlfY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3VtZXFcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwic3JjX2Nzc19mb290ZXJfY3NzLXNyY19jc3NfaGFtYnVyZ2VyX2Nzcy1zcmNfY3NzX2hlYWRlcl9jc3Mtc3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc191dGlsaXR5X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9