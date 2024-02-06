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

/***/ "./src/css/form.css":
/*!**************************!*\
  !*** ./src/css/form.css ***!
  \**************************/
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

/***/ "./src/css/recruit.css":
/*!*****************************!*\
  !*** ./src/css/recruit.css ***!
  \*****************************/
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

/***/ "./src/recruit.js":
/*!************************!*\
  !*** ./src/recruit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");
/* harmony import */ var _css_recruit_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/recruit.css */ "./src/css/recruit.css");
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/form.css */ "./src/css/form.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");






gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);


let mm = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.matchMedia();
/* sp */
mm.add("(max-width: 767px)", () => {
    // recruit_top
    let recruit_top = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_top",
            start: "-=70px",
            scrub: false,
        },
    });

    recruit_top
    .from(".underpage_title h2", { y: -30, opacity: 0, duration: 1})
    .from(".underpage_title p", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".title_icon", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".title_line", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 }, "-=1")
    .from(".top_catchcopy", { y: -30, opacity: 0, duration: 2}, "-=1.5")
    .from(".recruit_ume", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
    .from(".top_sentence p", { y: -30, opacity: 0, duration: 2}, "-=1.5")
    .from(".top_grid", { y: -30, opacity: 0, duration: 2}, "-=1")
    .from(".kv_deco_kumo3", { x: -30, opacity: 0, duration: 1 }, "-=2")


    // recruit_info
    let recruit_info  = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_info",
            start: "-=200px",
            scrub: false,
        },
    });

    recruit_info
    .from(".reccuit_info_grid", { y: -30, opacity: 0, duration: 1})


    // recruit_form
    let recruit_form  = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_form",
            start: "-=400px",
            scrub: false,
        },
    });

    recruit_form
    .from(".title_decoration", { y: -30, opacity: 0, duration: 1})
    .from(".title_text", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".form_flex", { y: -30, opacity: 0, duration: 1})


    // top_btn
    let top_btn = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=680px",
            scrub: false,
        },
    });

    top_btn
    .from(".top_btn", { y: -30, opacity: 0, duration: 1})

});

/* pc */
mm.add("(min-width: 768px)", () => {
    // recruit_top
    let recruit_top = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_top",
            start: "-=160px",
            scrub: false,
        },
    });

    recruit_top
    .from(".underpage_title h2", { y: -30, opacity: 0, duration: 1})
    .from(".underpage_title p", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".title_icon", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".title_line", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".kv_deco_kumo1", { x: 30, opacity: 0, duration: 1 }, "-=1")
    .from(".top_catchcopy", { y: -30, opacity: 0, duration: 2}, "-=1.5")
    .from(".recruit_ume", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
    .from(".top_sentence p", { y: -30, opacity: 0, duration: 2}, "-=1.5")
    .from(".top_grid", { y: -30, opacity: 0, duration: 2}, "-=1")
    .from(".kv_deco_kumo2", { x: -30, opacity: 0, duration: 1 }, "-=1")
    .from(".recruit_deco_kumo1", { x: -30, opacity: 0, duration: 1 })


    // recruit_info
    let recruit_info  = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_info",
            start: "-=200px",
            scrub: false,
        },
    });

    recruit_info
    .from(".reccuit_info_grid", { y: -30, opacity: 0, duration: 1})


    // recruit_form
    let recruit_form  = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: "#recruit_form",
            start: "-=400px",
            scrub: false,
        },
    });

    recruit_form
    .from(".title_decoration", { y: -30, opacity: 0, duration: 1})
    .from(".title_text", { y: -30, opacity: 0, duration: 1}, "-=1")
    .from(".form_flex", { y: -30, opacity: 0, duration: 1})


    // top_btn
    let top_btn = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
        scrollTrigger: {
            trigger: ".top_btn",
            start: "-=680px",
            scrub: false,
        },
    });

    top_btn
    .from(".top_btn", { y: -30, opacity: 0, duration: 1})

});

/*お問い合わせ区分選択時、文字色を黒色に変更する*/ 
let selectFrom = document.querySelector('[name="classification"]');
if (selectFrom != undefined) {
    selectFrom.onchange = event => { 
        selectFrom.style.color = '#000000';
        console.log(selectFrom.selectedIndex);
    }
}

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
/******/ 			"recruit": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","src_css_footer_css-src_css_hamburger_css-src_css_header_css-src_css_reset_css-src_css_utility_css"], () => (__webpack_require__("./src/recruit.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjcnVpdC45NjJjYWU0ZjE5YWI1Mzk2YzNjYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDRTtBQUNEO0FBQ0c7QUFDSDs7O0FBR0U7QUFDQTtBQUN1QjtBQUNuRCxzQ0FBSSxnQkFBZ0IsNkRBQWE7OztBQUdqQztBQUNBO0FBQ0EsdUJBQXVCLHNDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsNkJBQTZCLDJCQUEyQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0NBQUksY0FBYztBQUM5QixnQkFBZ0Isc0NBQUksY0FBYywyQkFBMkI7QUFDN0QsY0FBYztBQUNkO0FBQ0EsWUFBWSxzQ0FBSSxtQkFBbUI7QUFDbkM7QUFDQSxnQkFBZ0Isc0NBQUksbUJBQW1CLDJCQUEyQjtBQUNsRSxjQUFjO0FBQ2Q7QUFDQSxZQUFZLHNDQUFJLGdCQUFnQjtBQUNoQztBQUNBLGdCQUFnQixzQ0FBSSxnQkFBZ0IsMkJBQTJCO0FBQy9ELGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FB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dkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvZm9vdGVyLmNzcz9iZThhIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2Zvcm0uY3NzPzFhNzUiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvaGFtYnVyZ2VyLmNzcz9hZjU1Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2hlYWRlci5jc3M/M2MzNCIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9yZWNydWl0LmNzcz8yY2UwIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3Jlc2V0LmNzcz81OTM2Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3V0aWxpdHkuY3NzPzA4OWIiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9yZWNydWl0LmpzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3VtZXEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3V0aWxpdHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9oYW1idXJnZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9mb290ZXIuY3NzXCI7XG5cblxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBmaXhlZCBoZWFkZXLjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbiAgICBsZXQgZml4ZWRfaGVhZGVyID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiYm9keVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiKz0xMjAwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSByZXZlcnNlJyxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBmaXhlZF9oZWFkZXJcbiAgICAuZnJvbShcIi5maXhlZF9oZWFkZXJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pO1xuXG4gICAgLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Ki44OL44Oh44O844K344On44OzXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuICAgIGNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXYnKTtcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28tY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVUZXh0XCIpO1xuXG4gICAgYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKTtcblxuICAgIC8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs+mWouaVsFxuICAgIGZ1bmN0aW9uIGFuaW1hdGVIYW1idXJnZXJNZW51KCkge1xuICAgICAgICBpZiAoIWJ1dHRvbiB8fCAhcHJpbWFyeU5hdiB8fCAhbG9nb0NvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOODnOOCv+ODs+OBruWIh+OCiuabv+OBiFxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBidXR0b25JbWFnZSA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNyYyA9IGlzQWN0aXZlID8gJy4uL2ltYWdlcy9jb21tb24vaGFtYnVyZ2VyX2Nsb3NlLnN2ZycgOiAnLi4vaW1hZ2VzL2NvbW1vbi9oYW1idXJnZXJfb3Blbi5zdmcnO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGV4dCA9IGlzQWN0aXZlID8gXCJtZW51XCIgOiBcImNsb3NlXCI7XG4gICAgICAgICAgICAvLyDjg5zjgr/jg7Pjga7jg5Xjgqfjg7zjg4lcbiAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uLCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjIgfSk7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAvLyDjg5zjgr/jg7PnlLvlg4/jga7jg5Xjgqfjg7zjg4lcbiAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uSW1hZ2UsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uSW1hZ2Uuc3JjID0gdGFyZ2V0U3JjO1xuICAgICAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uSW1hZ2UsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIC8vIOODnOOCv+ODs+ODhuOCreOCueODiOOBruODleOCp+ODvOODiVxuICAgICAgICAgICAgZ3NhcC50byhtZW51VGV4dCwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBtZW51VGV4dC5pbm5lclRleHQgPSB0YXJnZXRUZXh0O1xuICAgICAgICAgICAgICAgIGdzYXAudG8obWVudVRleHQsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgLy8g44Ot44K044Gu44OV44Kn44O844OJ5YiH44KK5pu/44GIXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudFN0YXRlIHx8IGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplovjgYTjgZ/mmYJcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nbycpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvLXcnKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplonjgZjjgZ/mmYJcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nbycpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvLXcnKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZ2dsZU5hdigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg4rjg5PjgrLjg7zjgrfjg6fjg7Pjg6Hjg4vjg6Xjg7zjga7plovplonliIfjgormm7/jgYhcbiAgICBmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICBhZGRDbGFzcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyQ2xhc3MoKSB7XG4gICAgICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LnJlbW92ZSgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xuICAgIH1cbn0pO1xuXG4vLyDjgrnjg6Djg7zjgrnjgrnjgq/jg63jg7zjg6tcbmNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLm9mZnNldEhlaWdodDtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnJlcGxhY2UoJyMnLCAnJykpO1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBoZWFkZXJIZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vbG9hZOOCouODi+ODoeODvOOCt+ODp+ODs1xuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgfSwgMjAwMCk7XG59KTtcblxudmFyIHN0YXJ0ID0gMDtcbnZhciBnb2FsID0gMTAwO1xudmFyIHNwZWVkID0gMTU7XG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdGlmKHN0YXJ0IDw9IGdvYWwpe1xuXHRcdCQoJy5sb2FkX2NvdW50JykuaHRtbChzdGFydCArICclJyk7XG5cdFx0c3RhcnQrKztcblx0fVxuXG4gICAgaWYgKHN0YXJ0ID49IDEwMCkge1xuICAgICAgICAkKCcubG9hZF9pbWFnZXNfaHV0YScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfVxufSxzcGVlZCk7IiwiaW1wb3J0IFwiLi9jb21tb24uanNcIlxuaW1wb3J0IFwiLi9jc3MvcmVjcnVpdC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2Zvcm0uY3NzXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cblxubGV0IG1tID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4vKiBzcCAqL1xubW0uYWRkKFwiKG1heC13aWR0aDogNzY3cHgpXCIsICgpID0+IHtcbiAgICAvLyByZWNydWl0X3RvcFxuICAgIGxldCByZWNydWl0X3RvcCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNyZWNydWl0X3RvcFwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT03MHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZWNydWl0X3RvcFxuICAgIC5mcm9tKFwiLnVuZGVycGFnZV90aXRsZSBoMlwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9KVxuICAgIC5mcm9tKFwiLnVuZGVycGFnZV90aXRsZSBwXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0sIFwiLT0xXCIpXG4gICAgLmZyb20oXCIudGl0bGVfaWNvblwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9LCBcIi09MVwiKVxuICAgIC5mcm9tKFwiLnRpdGxlX2xpbmVcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSwgXCItPTFcIilcbiAgICAuZnJvbShcIi5rdl9kZWNvX2t1bW8xXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sIFwiLT0xXCIpXG4gICAgLmZyb20oXCIudG9wX2NhdGNoY29weVwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDJ9LCBcIi09MS41XCIpXG4gICAgLmZyb20oXCIucmVjcnVpdF91bWVcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbiAgICAuZnJvbShcIi50b3Bfc2VudGVuY2UgcFwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDJ9LCBcIi09MS41XCIpXG4gICAgLmZyb20oXCIudG9wX2dyaWRcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyfSwgXCItPTFcIilcbiAgICAuZnJvbShcIi5rdl9kZWNvX2t1bW8zXCIsIHsgeDogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIi09MlwiKVxuXG5cbiAgICAvLyByZWNydWl0X2luZm9cbiAgICBsZXQgcmVjcnVpdF9pbmZvICA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNyZWNydWl0X2luZm9cIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09MjAwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJlY3J1aXRfaW5mb1xuICAgIC5mcm9tKFwiLnJlY2N1aXRfaW5mb19ncmlkXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0pXG5cblxuICAgIC8vIHJlY3J1aXRfZm9ybVxuICAgIGxldCByZWNydWl0X2Zvcm0gID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI3JlY3J1aXRfZm9ybVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT00MDBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmVjcnVpdF9mb3JtXG4gICAgLmZyb20oXCIudGl0bGVfZGVjb3JhdGlvblwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9KVxuICAgIC5mcm9tKFwiLnRpdGxlX3RleHRcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSwgXCItPTFcIilcbiAgICAuZnJvbShcIi5mb3JtX2ZsZXhcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSlcblxuXG4gICAgLy8gdG9wX2J0blxuICAgIGxldCB0b3BfYnRuID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiLnRvcF9idG5cIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09NjgwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRvcF9idG5cbiAgICAuZnJvbShcIi50b3BfYnRuXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0pXG5cbn0pO1xuXG4vKiBwYyAqL1xubW0uYWRkKFwiKG1pbi13aWR0aDogNzY4cHgpXCIsICgpID0+IHtcbiAgICAvLyByZWNydWl0X3RvcFxuICAgIGxldCByZWNydWl0X3RvcCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIiNyZWNydWl0X3RvcFwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT0xNjBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmVjcnVpdF90b3BcbiAgICAuZnJvbShcIi51bmRlcnBhZ2VfdGl0bGUgaDJcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSlcbiAgICAuZnJvbShcIi51bmRlcnBhZ2VfdGl0bGUgcFwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9LCBcIi09MVwiKVxuICAgIC5mcm9tKFwiLnRpdGxlX2ljb25cIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSwgXCItPTFcIilcbiAgICAuZnJvbShcIi50aXRsZV9saW5lXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0sIFwiLT0xXCIpXG4gICAgLmZyb20oXCIua3ZfZGVjb19rdW1vMVwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIi09MVwiKVxuICAgIC5mcm9tKFwiLnRvcF9jYXRjaGNvcHlcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyfSwgXCItPTEuNVwiKVxuICAgIC5mcm9tKFwiLnJlY3J1aXRfdW1lXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIi09MC44XCIpXG4gICAgLmZyb20oXCIudG9wX3NlbnRlbmNlIHBcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyfSwgXCItPTEuNVwiKVxuICAgIC5mcm9tKFwiLnRvcF9ncmlkXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMn0sIFwiLT0xXCIpXG4gICAgLmZyb20oXCIua3ZfZGVjb19rdW1vMlwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCItPTFcIilcbiAgICAuZnJvbShcIi5yZWNydWl0X2RlY29fa3VtbzFcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0pXG5cblxuICAgIC8vIHJlY3J1aXRfaW5mb1xuICAgIGxldCByZWNydWl0X2luZm8gID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiI3JlY3J1aXRfaW5mb1wiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT0yMDBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmVjcnVpdF9pbmZvXG4gICAgLmZyb20oXCIucmVjY3VpdF9pbmZvX2dyaWRcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSlcblxuXG4gICAgLy8gcmVjcnVpdF9mb3JtXG4gICAgbGV0IHJlY3J1aXRfZm9ybSAgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIjcmVjcnVpdF9mb3JtXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZWNydWl0X2Zvcm1cbiAgICAuZnJvbShcIi50aXRsZV9kZWNvcmF0aW9uXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0pXG4gICAgLmZyb20oXCIudGl0bGVfdGV4dFwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9LCBcIi09MVwiKVxuICAgIC5mcm9tKFwiLmZvcm1fZmxleFwiLCB7IHk6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDF9KVxuXG5cbiAgICAvLyB0b3BfYnRuXG4gICAgbGV0IHRvcF9idG4gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIudG9wX2J0blwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT02ODBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdG9wX2J0blxuICAgIC5mcm9tKFwiLnRvcF9idG5cIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxfSlcblxufSk7XG5cbi8q44GK5ZWP44GE5ZCI44KP44Gb5Yy65YiG6YG45oqe5pmC44CB5paH5a2X6Imy44KS6buS6Imy44Gr5aSJ5pu044GZ44KLKi8gXG5sZXQgc2VsZWN0RnJvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2xhc3NpZmljYXRpb25cIl0nKTtcbmlmIChzZWxlY3RGcm9tICE9IHVuZGVmaW5lZCkge1xuICAgIHNlbGVjdEZyb20ub25jaGFuZ2UgPSBldmVudCA9PiB7IFxuICAgICAgICBzZWxlY3RGcm9tLnN0eWxlLmNvbG9yID0gJyMwMDAwMDAnO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RGcm9tLnNlbGVjdGVkSW5kZXgpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInJlY3J1aXRcIjogMCxcblx0XCJzcmNfY3NzX2Zvb3Rlcl9jc3Mtc3JjX2Nzc19oYW1idXJnZXJfY3NzLXNyY19jc3NfaGVhZGVyX2Nzcy1zcmNfY3NzX3Jlc2V0X2Nzcy1zcmNfY3NzX3V0aWxpdHlfY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3VtZXFcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwic3JjX2Nzc19mb290ZXJfY3NzLXNyY19jc3NfaGFtYnVyZ2VyX2Nzcy1zcmNfY3NzX2hlYWRlcl9jc3Mtc3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc191dGlsaXR5X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZWNydWl0LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=