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

/***/ "./src/css/lunch.css":
/*!***************************!*\
  !*** ./src/css/lunch.css ***!
  \***************************/
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
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _css_hamburger_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/hamburger.css */ "./src/css/hamburger.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");








gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // fixed header
    let fixed_header = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
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


// 閉じるボタン画像切り替え
document.addEventListener('DOMContentLoaded', function () {
    const buttonOne = document.querySelector('.button-one');

    buttonOne.addEventListener('click', function () {
        const isActive = buttonOne.classList.contains('active');
        buttonOne.setAttribute('aria-expanded', !isActive);
        buttonOne.classList.toggle('active', !isActive);

        // 画像の切り替え
        const buttonImage = buttonOne.querySelector('img');
        isActive ? buttonImage.src = '../images/common/ume.svg' : buttonImage.src = '../images/common/hamburger_close.svg';
    });
});

// 閉じる文字表示切り替え
document.addEventListener('DOMContentLoaded', function () {
        // テキストの切り替え
        const buttonText = buttonOne.querySelector('p');
        if (isActive) {
            buttonText.textContent = 'menu';
        } else {
            buttonText.textContent = 'close';
        }
    });

/***/ }),

/***/ "./src/lunch.js":
/*!**********************!*\
  !*** ./src/lunch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_lunch_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/lunch.css */ "./src/css/lunch.css");




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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"lunch": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js","src_css_footer_css-src_css_hamburger_css-src_css_header_css-src_css_reset_css-src_css_utility_css"], () => (__webpack_require__("./src/lunch.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVuY2guOTE0ODYwODJlZDM0OThhOTA0ZTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNFO0FBQ0Q7QUFDQTtBQUNHOztBQUVEO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFakM7QUFDQTtBQUNBLHVCQUF1QixzQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLDZCQUE2QiwyQkFBMkI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNyR2U7QUFDSztBQUNBOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvZm9vdGVyLmNzcz9iZThhIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3M/YWY1NSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzNjMzQiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvbHVuY2guY3NzP2UzNGMiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvbW9kYWwuY3NzP2E5OGYiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvcmVzZXQuY3NzPzU5MzYiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvdXRpbGl0eS5jc3M/MDg5YiIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2x1bmNoLmpzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZm9vdGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGFtYnVyZ2VyLmNzc1wiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBmaXhlZCBoZWFkZXJcbiAgICBsZXQgZml4ZWRfaGVhZGVyID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiYm9keVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiKz0xMjAwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSByZXZlcnNlJyxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBmaXhlZF9oZWFkZXJcbiAgICAuZnJvbShcIi5maXhlZF9oZWFkZXJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pO1xuXG4gICAgLy8gaGFtYnVyZ2VyIG1lbnVcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vbmVcIik7XG4gICAgY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdicpO1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1jb250YWluZXInKTtcblxuICAgIGFuaW1hdGVIYW1idXJnZXJNZW51KCk7XG5cblxuICAgIC8vIOODreOCtOihqOekuuWIh+OCiuabv+OBiFxuICAgIGZ1bmN0aW9uIGFuaW1hdGVIYW1idXJnZXJNZW51KCkge1xuICAgICAgICBpZiAoIWJ1dHRvbiB8fCAhcHJpbWFyeU5hdiB8fCAhbG9nb0NvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudFN0YXRlIHx8IGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplovjgYTjgZ/mmYLjgavjg63jgrTjgpLjg5Xjgqfjg7zjg4njgqTjg7NcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nbycpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvLXcnKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplonjgZjjgZ/mmYLjgavjg63jgrTjgpLjg5Xjgqfjg7zjg4njgqLjgqbjg4hcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nbycpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvLXcnKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOODiuODk+OCsuODvOOCt+ODp+ODs+ODoeODi+ODpeODvOOCguODiOOCsOODq1xuICAgICAgICAgICAgdG9nZ2xlTmF2KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOODiuODk+OCsuODvOOCt+ODp+ODs+ODoeODi+ODpeODvOOBrumWi+mWieWIh+OCiuabv+OBiFxuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckNsYXNzKCkge1xuICAgICAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xuICAgIH1cbn0pO1xuXG5cbi8vIOmWieOBmOOCi+ODnOOCv+ODs+eUu+WDj+WIh+OCiuabv+OBiFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBidXR0b25PbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW9uZScpO1xuXG4gICAgYnV0dG9uT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGJ1dHRvbk9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgICBidXR0b25PbmUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgIWlzQWN0aXZlKTtcbiAgICAgICAgYnV0dG9uT25lLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsICFpc0FjdGl2ZSk7XG5cbiAgICAgICAgLy8g55S75YOP44Gu5YiH44KK5pu/44GIXG4gICAgICAgIGNvbnN0IGJ1dHRvbkltYWdlID0gYnV0dG9uT25lLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICBpc0FjdGl2ZSA/IGJ1dHRvbkltYWdlLnNyYyA9ICcuLi9pbWFnZXMvY29tbW9uL3VtZS5zdmcnIDogYnV0dG9uSW1hZ2Uuc3JjID0gJy4uL2ltYWdlcy9jb21tb24vaGFtYnVyZ2VyX2Nsb3NlLnN2Zyc7XG4gICAgfSk7XG59KTtcblxuLy8g6ZaJ44GY44KL5paH5a2X6KGo56S65YiH44KK5pu/44GIXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDjg4bjgq3jgrnjg4jjga7liIfjgormm7/jgYhcbiAgICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IGJ1dHRvbk9uZS5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgYnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICdtZW51JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgICAgICB9XG4gICAgfSk7IiwiaW1wb3J0IFwiLi9jb21tb24uanNcIlxuaW1wb3J0IFwiLi9jc3MvbW9kYWwuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9sdW5jaC5jc3NcIjtcblxuLy/jgrnjg6njgqTjg4Djg7zoqK3lrppcbiQoXCIjc2xpY2tMdW5jaFwiKS5zbGljayh7XG4gICAgYXV0b3BsYXk6IHRydWUsIC8vIOiHquWLleWGjeeUn1xuICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsIC8vIOWGjeeUn+mAn+W6pu+8iOODn+ODquenkuioreWumu+8iSAxMDAw44Of44Oq56eSPTHnp5JcbiAgICBpbmZpbml0ZTogdHJ1ZSwgLy8g54Sh6ZmQ44K544Op44Kk44OJXG4gICAgcGF1c2VPbkhvdmVyOiBmYWxzZSwvL+ODnuOCpuOCueODm+ODkOODvOOBp+S4gOaZguWBnOatolxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PC9idXR0b24+JyxcbiAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjwvYnV0dG9uPicsXG4gICAgY2VudGVyTW9kZTp0cnVlLFxuICAgIGNlbnRlclBhZGRpbmc6XCIyNiVcIiwgXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMjIlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCIwJVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdLFxufSk7XG5cbmxldCBmaXhlZEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmaXhlZF9oZWFkZXJcIilbMF07XG5sZXQgc3BIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3BfaGVhZGVyXCIpWzBdO1xuXG4vL+WQhOODnOOCv+ODs+OCkuaKvOOBl+OBn+OBqOOBjeOBq+WQhOODouODvOODgOODq+OCkuihqOekuuOBmeOCi1xud2luZG93LnNob3dNb2RhbFdpbmRvdyA9IChtb2RhbFR5cGUpID0+IHtcbiAgICB2YXIgbW9kYWxUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxUeXBlKTtcbiAgICBtb2RhbFR5cGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGlmIChzcEhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNwSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIH1cblxuICAgIGlmIChmaXhlZEhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpeGVkSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIH1cbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSkge1xuICAgICAgICBvdXRzaWRlQ2xvc2UoZSxtb2RhbFR5cGUpO1xuICAgIH0sZmFsc2UpO1xufVxuXG4vLyDjg6Ljg7zjg4Djg6vjgqbjgqPjg7Pjg4njgqbjgpLplonjgZjjgotcbndpbmRvdy5jbG9zZU1vZGFsID0gKG1vZGFsVHlwZSkgPT4ge1xuICAgIHZhciBtb2RhbFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbFR5cGUpO1xuICAgIG1vZGFsVHlwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWYgKHNwSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3BIZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgfVxuXG4gICAgaWYgKGZpeGVkSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZml4ZWRIZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbn1cblxuLy8g44Oi44O844OA44Or44Kz44Oz44OG44Oz44OE5Lul5aSW44GM44Kv44Oq44OD44Kv44GV44KM44Gf5pmCXG5mdW5jdGlvbiBvdXRzaWRlQ2xvc2UoZSwgbW9kYWxUeXBlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsVHlwZSkge1xuICAgICAgICBtb2RhbFR5cGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsdW5jaFwiOiAwLFxuXHRcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bWVxXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanNcIixcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbHVuY2guanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==