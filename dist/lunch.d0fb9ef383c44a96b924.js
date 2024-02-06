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
/* harmony import */ var _css_hamburger_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/hamburger.css */ "./src/css/hamburger.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/footer.css */ "./src/css/footer.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");








gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);


document.addEventListener("DOMContentLoaded", function() {
    // fixed headerのアニメーション
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
            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(button, { opacity: 0, duration: 0.2, onComplete: function() {
                gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(button, { opacity: 1, duration: 0.2 });
            }});
            // ボタン画像のフェード
            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(buttonImage, { opacity: 0, duration: 0.2, onComplete: function() {
                buttonImage.src = targetSrc;
                gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(buttonImage, { opacity: 1, duration: 0.2 });
            }});
            // ボタンテキストのフェード
            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(menuText, { opacity: 0, duration: 0.2, onComplete: function() {
                menuText.innerText = targetText;
                gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(menuText, { opacity: 1, duration: 0.2 });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YmU4YSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oYW1idXJnZXIuY3NzP2FmNTUiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvaGVhZGVyLmNzcz8zYzM0Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2x1bmNoLmNzcz9lMzRjIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL21vZGFsLmNzcz9hOThmIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3Jlc2V0LmNzcz81OTM2Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3V0aWxpdHkuY3NzPzA4OWIiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9sdW5jaC5qcyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hhbWJ1cmdlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2Zvb3Rlci5jc3NcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBmaXhlZCBoZWFkZXLjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7NcbiAgICBsZXQgZml4ZWRfaGVhZGVyID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiYm9keVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiKz0xMjAwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSByZXZlcnNlJyxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBmaXhlZF9oZWFkZXJcbiAgICAuZnJvbShcIi5maXhlZF9oZWFkZXJcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pO1xuXG4gICAgLy8g44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O844Gu44Ki44OL44Oh44O844K344On44OzXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuICAgIGNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXYnKTtcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28tY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVUZXh0XCIpO1xuXG4gICAgYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKTtcblxuICAgIC8vIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs+mWouaVsFxuICAgIGZ1bmN0aW9uIGFuaW1hdGVIYW1idXJnZXJNZW51KCkge1xuICAgICAgICBpZiAoIWJ1dHRvbiB8fCAhcHJpbWFyeU5hdiB8fCAhbG9nb0NvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOODnOOCv+ODs+OBruWIh+OCiuabv+OBiFxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBidXR0b25JbWFnZSA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNyYyA9IGlzQWN0aXZlID8gJy4uL2ltYWdlcy9jb21tb24vaGFtYnVyZ2VyX2Nsb3NlLnN2ZycgOiAnLi4vaW1hZ2VzL2NvbW1vbi9oYW1idXJnZXJfb3Blbi5zdmcnO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGV4dCA9IGlzQWN0aXZlID8gXCJtZW51XCIgOiBcImNsb3NlXCI7XG4gICAgICAgICAgICAvLyDjg5zjgr/jg7Pjga7jg5Xjgqfjg7zjg4lcbiAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uLCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjIgfSk7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAvLyDjg5zjgr/jg7PnlLvlg4/jga7jg5Xjgqfjg7zjg4lcbiAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uSW1hZ2UsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uSW1hZ2Uuc3JjID0gdGFyZ2V0U3JjO1xuICAgICAgICAgICAgICAgIGdzYXAudG8oYnV0dG9uSW1hZ2UsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIC8vIOODnOOCv+ODs+ODhuOCreOCueODiOOBruODleOCp+ODvOODiVxuICAgICAgICAgICAgZ3NhcC50byhtZW51VGV4dCwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBtZW51VGV4dC5pbm5lclRleHQgPSB0YXJnZXRUZXh0O1xuICAgICAgICAgICAgICAgIGdzYXAudG8obWVudVRleHQsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgLy8g44Ot44K044Gu44OV44Kn44O844OJ5YiH44KK5pu/44GIXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudFN0YXRlIHx8IGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplovjgYTjgZ/mmYJcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nbycpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvLXcnKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplonjgZjjgZ/mmYJcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJfbG9nbycpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcl9sb2dvLXcnKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZ2dsZU5hdigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg4rjg5PjgrLjg7zjgrfjg6fjg7Pjg6Hjg4vjg6Xjg7zjga7plovplonliIfjgormm7/jgYhcbiAgICBmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICBhZGRDbGFzcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyQ2xhc3MoKSB7XG4gICAgICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LnJlbW92ZSgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xuICAgIH1cbn0pO1xuXG4vLyDjgrnjg6Djg7zjgrnjgrnjgq/jg63jg7zjg6tcbmNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLm9mZnNldEhlaWdodDtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnJlcGxhY2UoJyMnLCAnJykpO1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBoZWFkZXJIZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiaW1wb3J0IFwiLi9jb21tb24uanNcIlxuaW1wb3J0IFwiLi9jc3MvbW9kYWwuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9sdW5jaC5jc3NcIjtcblxuLy/jgrnjg6njgqTjg4Djg7zoqK3lrppcbiQoXCIjc2xpY2tMdW5jaFwiKS5zbGljayh7XG4gICAgYXV0b3BsYXk6IHRydWUsIC8vIOiHquWLleWGjeeUn1xuICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsIC8vIOWGjeeUn+mAn+W6pu+8iOODn+ODquenkuioreWumu+8iSAxMDAw44Of44Oq56eSPTHnp5JcbiAgICBpbmZpbml0ZTogdHJ1ZSwgLy8g54Sh6ZmQ44K544Op44Kk44OJXG4gICAgcGF1c2VPbkhvdmVyOiBmYWxzZSwvL+ODnuOCpuOCueODm+ODkOODvOOBp+S4gOaZguWBnOatolxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PC9idXR0b24+JyxcbiAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjwvYnV0dG9uPicsXG4gICAgY2VudGVyTW9kZTp0cnVlLFxuICAgIGNlbnRlclBhZGRpbmc6XCIyNiVcIiwgXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMjIlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCIwJVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdLFxufSk7XG5cbmxldCBmaXhlZEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmaXhlZF9oZWFkZXJcIilbMF07XG5sZXQgc3BIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3BfaGVhZGVyXCIpWzBdO1xuXG4vL+WQhOODnOOCv+ODs+OCkuaKvOOBl+OBn+OBqOOBjeOBq+WQhOODouODvOODgOODq+OCkuihqOekuuOBmeOCi1xud2luZG93LnNob3dNb2RhbFdpbmRvdyA9IChtb2RhbFR5cGUpID0+IHtcbiAgICB2YXIgbW9kYWxUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxUeXBlKTtcbiAgICBtb2RhbFR5cGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGlmIChzcEhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNwSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIH1cblxuICAgIGlmIChmaXhlZEhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpeGVkSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIH1cbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSkge1xuICAgICAgICBvdXRzaWRlQ2xvc2UoZSxtb2RhbFR5cGUpO1xuICAgIH0sZmFsc2UpO1xufVxuXG4vLyDjg6Ljg7zjg4Djg6vjgqbjgqPjg7Pjg4njgqbjgpLplonjgZjjgotcbndpbmRvdy5jbG9zZU1vZGFsID0gKG1vZGFsVHlwZSkgPT4ge1xuICAgIHZhciBtb2RhbFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbFR5cGUpO1xuICAgIG1vZGFsVHlwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWYgKHNwSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3BIZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgfVxuXG4gICAgaWYgKGZpeGVkSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZml4ZWRIZWFkZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbn1cblxuLy8g44Oi44O844OA44Or44Kz44Oz44OG44Oz44OE5Lul5aSW44GM44Kv44Oq44OD44Kv44GV44KM44Gf5pmCXG5mdW5jdGlvbiBvdXRzaWRlQ2xvc2UoZSwgbW9kYWxUeXBlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsVHlwZSkge1xuICAgICAgICBtb2RhbFR5cGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsdW5jaFwiOiAwLFxuXHRcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bWVxXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanNcIixcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbHVuY2guanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==