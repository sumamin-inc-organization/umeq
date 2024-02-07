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

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/menu.css */ "./src/css/menu.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/index.mjs");






gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);




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
let underpage_kv = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
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
let kamameshi = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".kamameshi_normal",
        start: "-=600px",
        scrub: false,
    },
});
kamameshi
.from(".kamameshi_normal", { y: 30, opacity: 0, duration: 1.5});

// kamameshi_tokusei
let kamameshi_tokusei = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".kamameshi_tokusei",
        start: "-=600px",
        scrub: false,
    },
});
kamameshi_tokusei
.from(".kamameshi_tokusei", { y: 30, opacity: 0, duration: 1.5});

// yakitori
let yakitori = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".yakitori",
        start: "-=900px",
        scrub: false,
    },
});
yakitori
.from(".yakitori", { y: 30, opacity: 0, duration: 1.5});

// yakitori_noimg
let yakitori_noimg = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".yakitori_noimg",
        start: "-=900px",
        scrub: false,
    },
});
yakitori_noimg
.from(".yakitori_noimg", { y: 30, opacity: 0, duration: 1.5});

// unagi
let unagi = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".unagi",
        start: "-=900px",
        scrub: false,
    },
});
unagi
.from(".unagi", { y: 30, opacity: 0, duration: 1.5});

// unagi_noimg
let unagi_noimg = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".unagi_noimg",
        start: "-=900px",
        scrub: false,
    },
});
unagi_noimg
.from(".unagi_noimg", { y: 30, opacity: 0, duration: 1.5});

// zousui
let zousui = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: "#zousui .text_menu",
        start: "-=900px",
        scrub: false,
    },
});
zousui
.from("#zousui .text_menu", { y: 30, opacity: 0, duration: 1.5});

//  set_menu_inner1
let set_menu_inner1 = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".set_menu_inner1",
        start: "-=900px",
        scrub: false,
    },
});
set_menu_inner1
.from(".set_menu_inner1", { y: 30, opacity: 0, duration: 1.5});

//  set_menu_inner2
let set_menu_inner2 = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".set_menu_inner2",
        start: "-=900px",
        scrub: false,
    },
});
set_menu_inner2
.from(".set_menu_inner2", { y: 30, opacity: 0, duration: 1.5});

//  set_menu_inner3
let set_menu_inner3 = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".set_menu_inner3",
        start: "-=900px",
        scrub: false,
    },
});
set_menu_inner3
.from(".set_menu_inner3", { y: 30, opacity: 0, duration: 1.5});

// otumami
let otumami = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: "#otumami .text_menu",
        start: "-=900px",
        scrub: false,
    },
});
otumami
.from("#otumami .text_menu", { y: 30, opacity: 0, duration: 1.5});

// beer
let beer = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".beer",
        start: "-=900px",
        scrub: false,
    },
});
beer
.from(".beer", { y: 30, opacity: 0, duration: 1.5});

// sour
let sour = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".sour",
        start: "-=900px",
        scrub: false,
    },
});
sour
.from(".sour", { y: 30, opacity: 0, duration: 1.5});

// shochu
let shochu = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".shochu",
        start: "-=900px",
        scrub: false,
    },
});
shochu
.from(".shochu", { y: 30, opacity: 0, duration: 1.5});

// nihonsyu
let nihonsyu = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".nihonsyu",
        start: "-=900px",
        scrub: false,
    },
});
nihonsyu
.from(".nihonsyu", { y: 30, opacity: 0, duration: 1.5});

// whisky
let whisky = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".whisky",
        start: "-=900px",
        scrub: false,
    },
});
whisky
.from(".whisky", { y: 30, opacity: 0, duration: 1.5});

// soft_drink
let soft_drink = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".soft_drink",
        start: "-=900px",
        scrub: false,
    },
});
soft_drink
.from(".soft_drink", { y: 30, opacity: 0, duration: 1.5});

//top_btn
let top_btn = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
    scrollTrigger: {
        trigger: ".top_btn",
        start: "-=800px",
        scrub: false,
    },
});
top_btn
.from(".top_btn a", { y: 30, opacity: 0, duration: 1.5 });

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
/******/ 			"menu": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_jquery_dis-0c1656","vendors-node_modules_simplebar_dist_index_mjs","src_css_footer_css-src_css_hamburger_css-src_css_header_css-src_css_reset_css-src_css_utility_css"], () => (__webpack_require__("./src/menu.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YmU4YSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oYW1idXJnZXIuY3NzP2FmNTUiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvaGVhZGVyLmNzcz8zYzM0Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL21lbnUuY3NzPzE2MjEiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvbW9kYWwuY3NzP2E5OGYiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvcmVzZXQuY3NzPzU5MzYiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvdXRpbGl0eS5jc3M/MDg5YiIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hhbWJ1cmdlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2Zvb3Rlci5jc3NcIjtcblxuXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vIGZpeGVkIGhlYWRlcuOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuICAgIGxldCBmaXhlZF9oZWFkZXIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCJib2R5XCIsXG4gICAgICAgICAgICBzdGFydDogXCIrPTEyMDBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIHJldmVyc2UnLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGZpeGVkX2hlYWRlclxuICAgIC5mcm9tKFwiLmZpeGVkX2hlYWRlclwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSk7XG5cbiAgICAvLyDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vbmVcIik7XG4gICAgY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdicpO1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1jb250YWluZXInKTtcbiAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVRleHRcIik7XG5cbiAgICBhbmltYXRlSGFtYnVyZ2VyTWVudSgpO1xuXG4gICAgLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Ki44OL44Oh44O844K344On44Oz6Zai5pWwXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKSB7XG4gICAgICAgIGlmICghYnV0dG9uIHx8ICFwcmltYXJ5TmF2IHx8ICFsb2dvQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44Oc44K/44Oz44Gu5YiH44KK5pu/44GIXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkltYWdlID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3JjID0gaXNBY3RpdmUgPyAnLi4vaW1hZ2VzL2NvbW1vbi9oYW1idXJnZXJfY2xvc2Uuc3ZnJyA6ICcuLi9pbWFnZXMvY29tbW9uL2hhbWJ1cmdlcl9vcGVuLnN2Zyc7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUZXh0ID0gaXNBY3RpdmUgPyBcIm1lbnVcIiA6IFwiY2xvc2VcIjtcbiAgICAgICAgICAgIC8vIOODnOOCv+ODs+OBruODleOCp+ODvOODiVxuICAgICAgICAgICAgZ3NhcC50byhidXR0b24sIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ3NhcC50byhidXR0b24sIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIC8vIOODnOOCv+ODs+eUu+WDj+OBruODleOCp+ODvOODiVxuICAgICAgICAgICAgZ3NhcC50byhidXR0b25JbWFnZSwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBidXR0b25JbWFnZS5zcmMgPSB0YXJnZXRTcmM7XG4gICAgICAgICAgICAgICAgZ3NhcC50byhidXR0b25JbWFnZSwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgLy8g44Oc44K/44Oz44OG44Kt44K544OI44Gu44OV44Kn44O844OJXG4gICAgICAgICAgICBnc2FwLnRvKG1lbnVUZXh0LCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1lbnVUZXh0LmlubmVyVGV4dCA9IHRhcmdldFRleHQ7XG4gICAgICAgICAgICAgICAgZ3NhcC50byhtZW51VGV4dCwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgICAgICAvLyDjg63jgrTjga7jg5Xjgqfjg7zjg4nliIfjgormm7/jgYhcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50U3RhdGUgfHwgY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJvcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIC8vIOODoeODi+ODpeODvOOBjOmWi+OBhOOBn+aZglxuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvJykuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28tdycpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgIC8vIOODoeODi+ODpeODvOOBjOmWieOBmOOBn+aZglxuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvJykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX2xvZ28tdycpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlTmF2KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOODiuODk+OCsuODvOOCt+ODp+ODs+ODoeODi+ODpeODvOOBrumWi+mWieWIh+OCiuabv+OBiFxuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJDbGFzcygpIHtcbiAgICAgICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG4gICAgfVxufSk7XG5cbi8vIOOCueODoOODvOOCueOCueOCr+ODreODvOODq1xuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykub2Zmc2V0SGVpZ2h0O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYucmVwbGFjZSgnIycsICcnKSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGhlYWRlckhlaWdodDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuLy9sb2Fk44Ki44OL44Oh44O844K344On44OzXG5jb25zdCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICB9LCAyMDAwKTtcbn0pO1xuXG52YXIgc3RhcnQgPSAwO1xudmFyIGdvYWwgPSAxMDA7XG52YXIgc3BlZWQgPSAxNTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcblx0aWYoc3RhcnQgPD0gZ29hbCl7XG5cdFx0JCgnLmxvYWRfY291bnQnKS5odG1sKHN0YXJ0ICsgJyUnKTtcblx0XHRzdGFydCsrO1xuXHR9XG5cbiAgICBpZiAoc3RhcnQgPj0gMTAwKSB7XG4gICAgICAgICQoJy5sb2FkX2ltYWdlc19odXRhJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9XG59LHNwZWVkKTsiLCJpbXBvcnQgXCIuL2NvbW1vbi5qc1wiXG5pbXBvcnQgXCIuL2Nzcy9tb2RhbC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL21lbnUuY3NzXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTaW1wbGVCYXIgZnJvbSBcInNpbXBsZWJhclwiO1xuXG5sZXQgZml4ZWRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZml4ZWRfaGVhZGVyXCIpWzBdO1xubGV0IHNwSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNwX2hlYWRlclwiKVswXTtcblxuLy/lkITjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgajjgY3jgavlkITjg6Ljg7zjg4Djg6vjgpLooajnpLrjgZnjgotcbndpbmRvdy5zaG93TW9kYWxXaW5kb3cgPSAobW9kYWxUeXBlKSA9PiB7XG4gICAgdmFyIG1vZGFsVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsVHlwZSk7XG4gICAgbW9kYWxUeXBlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBpZiAoc3BIZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzcEhlYWRlci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB9XG4gICAgaWYgKGZpeGVkSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZml4ZWRIZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgfVxuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSkge1xuICAgICAgICBvdXRzaWRlQ2xvc2UoZSxtb2RhbFR5cGUpO1xuICAgIH0sZmFsc2UpO1xufVxuXG4vLyDjg6Ljg7zjg4Djg6vjgqbjgqPjg7Pjg4njgqbjgpLplonjgZjjgotcbndpbmRvdy5jbG9zZU1vZGFsID0gKG1vZGFsVHlwZSkgPT4ge1xuICAgIHZhciBtb2RhbFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbFR5cGUpO1xuICAgIG1vZGFsVHlwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWYgKHNwSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3BIZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgfVxuICAgIGlmIChmaXhlZEhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpeGVkSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xufVxuXG4vLyDjg6Ljg7zjg4Djg6vjgrPjg7Pjg4bjg7Pjg4Tku6XlpJbjgYzjgq/jg6rjg4Pjgq/jgZXjgozjgZ/mmYJcbmZ1bmN0aW9uIG91dHNpZGVDbG9zZShlLCBtb2RhbFR5cGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWxUeXBlKSB7XG4gICAgICAgIG1vZGFsVHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIH1cbn1cblxuLy8g5LiL5bGk44Oa44O844K45YWx6YCaIOWHuuePvuOCouODi+ODoeODvOOCt+ODp+ODs1xubGV0IHVuZGVycGFnZV9rdiA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIudW5kZXJwYWdlX2t2XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09OTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnVuZGVycGFnZV9rdlxuLmZyb20oXCIudW5kZXJwYWdlX3RpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyLCBkZWxheTogMS41IH0pXG4uZnJvbShcIi51bmRlcnBhZ2Vfa3ZfdGV4dFwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0xXCIpXG4uZnJvbShcIi5tZW51X2J0blwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sIFwiLT0xXCIpXG4uZnJvbShcIi5rdl9kZWNvX2t1bW8xXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTFcIilcbi5mcm9tKFwiLmt2X2RlY29fa3VtbzJcIiwgeyB4OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSwgXCItPTFcIik7XG5cbi8vIGthbWFtZXNoaV9ub3JtYWxcbmxldCBrYW1hbWVzaGkgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLmthbWFtZXNoaV9ub3JtYWxcIixcbiAgICAgICAgc3RhcnQ6IFwiLT02MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xua2FtYW1lc2hpXG4uZnJvbShcIi5rYW1hbWVzaGlfbm9ybWFsXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8ga2FtYW1lc2hpX3Rva3VzZWlcbmxldCBrYW1hbWVzaGlfdG9rdXNlaSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIua2FtYW1lc2hpX3Rva3VzZWlcIixcbiAgICAgICAgc3RhcnQ6IFwiLT02MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xua2FtYW1lc2hpX3Rva3VzZWlcbi5mcm9tKFwiLmthbWFtZXNoaV90b2t1c2VpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8geWFraXRvcmlcbmxldCB5YWtpdG9yaSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIueWFraXRvcmlcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xueWFraXRvcmlcbi5mcm9tKFwiLnlha2l0b3JpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8geWFraXRvcmlfbm9pbWdcbmxldCB5YWtpdG9yaV9ub2ltZyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIueWFraXRvcmlfbm9pbWdcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xueWFraXRvcmlfbm9pbWdcbi5mcm9tKFwiLnlha2l0b3JpX25vaW1nXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gdW5hZ2lcbmxldCB1bmFnaSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIudW5hZ2lcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xudW5hZ2lcbi5mcm9tKFwiLnVuYWdpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gdW5hZ2lfbm9pbWdcbmxldCB1bmFnaV9ub2ltZyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIudW5hZ2lfbm9pbWdcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xudW5hZ2lfbm9pbWdcbi5mcm9tKFwiLnVuYWdpX25vaW1nXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gem91c3VpXG5sZXQgem91c3VpID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiN6b3VzdWkgLnRleHRfbWVudVwiLFxuICAgICAgICBzdGFydDogXCItPTkwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG56b3VzdWlcbi5mcm9tKFwiI3pvdXN1aSAudGV4dF9tZW51XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gIHNldF9tZW51X2lubmVyMVxubGV0IHNldF9tZW51X2lubmVyMSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuc2V0X21lbnVfaW5uZXIxXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09OTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnNldF9tZW51X2lubmVyMVxuLmZyb20oXCIuc2V0X21lbnVfaW5uZXIxXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gIHNldF9tZW51X2lubmVyMlxubGV0IHNldF9tZW51X2lubmVyMiA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuc2V0X21lbnVfaW5uZXIyXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09OTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnNldF9tZW51X2lubmVyMlxuLmZyb20oXCIuc2V0X21lbnVfaW5uZXIyXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gIHNldF9tZW51X2lubmVyM1xubGV0IHNldF9tZW51X2lubmVyMyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuc2V0X21lbnVfaW5uZXIzXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09OTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnNldF9tZW51X2lubmVyM1xuLmZyb20oXCIuc2V0X21lbnVfaW5uZXIzXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gb3R1bWFtaVxubGV0IG90dW1hbWkgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI290dW1hbWkgLnRleHRfbWVudVwiLFxuICAgICAgICBzdGFydDogXCItPTkwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5vdHVtYW1pXG4uZnJvbShcIiNvdHVtYW1pIC50ZXh0X21lbnVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNX0pO1xuXG4vLyBiZWVyXG5sZXQgYmVlciA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuYmVlclwiLFxuICAgICAgICBzdGFydDogXCItPTkwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5iZWVyXG4uZnJvbShcIi5iZWVyXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gc291clxubGV0IHNvdXIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiLnNvdXJcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xuc291clxuLmZyb20oXCIuc291clwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41fSk7XG5cbi8vIHNob2NodVxubGV0IHNob2NodSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuc2hvY2h1XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09OTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbnNob2NodVxuLmZyb20oXCIuc2hvY2h1XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gbmlob25zeXVcbmxldCBuaWhvbnN5dSA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIubmlob25zeXVcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xubmlob25zeXVcbi5mcm9tKFwiLm5paG9uc3l1XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy8gd2hpc2t5XG5sZXQgd2hpc2t5ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi53aGlza3lcIixcbiAgICAgICAgc3RhcnQ6IFwiLT05MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgfSxcbn0pO1xud2hpc2t5XG4uZnJvbShcIi53aGlza3lcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNX0pO1xuXG4vLyBzb2Z0X2RyaW5rXG5sZXQgc29mdF9kcmluayA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIuc29mdF9kcmlua1wiLFxuICAgICAgICBzdGFydDogXCItPTkwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5zb2Z0X2RyaW5rXG4uZnJvbShcIi5zb2Z0X2RyaW5rXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjV9KTtcblxuLy90b3BfYnRuXG5sZXQgdG9wX2J0biA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIudG9wX2J0blwiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG50b3BfYnRuXG4uZnJvbShcIi50b3BfYnRuIGFcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1lbnVcIjogMCxcblx0XCJzcmNfY3NzX2Zvb3Rlcl9jc3Mtc3JjX2Nzc19oYW1idXJnZXJfY3NzLXNyY19jc3NfaGVhZGVyX2Nzcy1zcmNfY3NzX3Jlc2V0X2Nzcy1zcmNfY3NzX3V0aWxpdHlfY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3VtZXFcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19nc2FwX2luZGV4X2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzLTBjMTY1NlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfc2ltcGxlYmFyX2Rpc3RfaW5kZXhfbWpzXCIsXCJzcmNfY3NzX2Zvb3Rlcl9jc3Mtc3JjX2Nzc19oYW1idXJnZXJfY3NzLXNyY19jc3NfaGVhZGVyX2Nzcy1zcmNfY3NzX3Jlc2V0X2Nzcy1zcmNfY3NzX3V0aWxpdHlfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21lbnUuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==