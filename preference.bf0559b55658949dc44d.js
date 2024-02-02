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

/***/ "./src/css/preference.css":
/*!********************************!*\
  !*** ./src/css/preference.css ***!
  \********************************/
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

// fixed header
let fixed_header = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "+=1200px",
        scrub: false,
        toggleActions:'play none none reverse',
    },
});
fixed_header
.from(".fixed_header", { opacity: 0, duration: 0.5 })

// hamburger menu
const button = document.querySelector(".button-one");
toggleNav();

function animateHamburgerMenu(){
    if (!button){return false;}
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");
        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
}
animateHamburgerMenu();


// hamburger menu open
const primaryNav = document.querySelector('.primary-nav');

function clearClass(){
    primaryNav.classList.remove('primary-nav_closed');
}
function addClass(){
    primaryNav.classList.add('primary-nav_closed');
}
function toggleNav(){
    if (!button){return false;}
    button.addEventListener('click',(e)=>{
        const currentState = button.getAttribute("data-state");
console.log(currentState)
        if (currentState === "closed") {
            // clearClass()
            addClass();
        } else {
            // addClass();
            clearClass()
        }
    })
}

/***/ }),

/***/ "./src/preference.js":
/*!***************************!*\
  !*** ./src/preference.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");
/* harmony import */ var _css_preference_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/preference.css */ "./src/css/preference.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");





gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);

// slider
function horizontalLoop(items, config) {
    items = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.snap(config.snap || 1), 
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(items, {
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap(
                (parseFloat(gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
        },
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(items, { x: 0 });
    totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
        distanceToStart + widths[i] * gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.getProperty(item, "scaleX");
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
        .fromTo(
            item,
            {
                xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                ),
            },
            {
                xPercent: xPercents[i],
                duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); 
        let newIndex = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.wrap(0, length, index),
        time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); 
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

const listItem = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray(".list__item");

function flowText(scrollerClass,itemClass){
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray(scrollerClass).forEach((line, i) => {
        const links = line.querySelectorAll(itemClass),
        tl = horizontalLoop(links, {
            repeat: -1, 
            speed: 1 + i * 0.5,
            reversed: i ? true : false,
            paddingRight: parseFloat(gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.getProperty(links[0], "marginRight", "px")) 
        });
    });
}

flowText('.scroller-inner',".list__item");

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
/******/ 			"preference": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js","src_css_footer_css-src_css_hamburger_css-src_css_header_css-src_css_reset_css-src_css_utility_css"], () => (__webpack_require__("./src/preference.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS5iZjA1NTliNTU2NTg5NDlkYzQ0ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDRTtBQUNEO0FBQ0E7QUFDRzs7QUFFRDtBQUN1QjtBQUNuRCxzQ0FBSSxnQkFBZ0IsNkRBQWE7O0FBRWpDO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLDJCQUEyQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDaEVvQjtBQUNVOztBQUVGO0FBQ3VCO0FBQ25ELHNDQUFJLGdCQUFnQiw2REFBYTs7QUFFakM7QUFDQTtBQUNBLFlBQVksc0NBQUk7QUFDaEI7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQ0FBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNDQUFJO0FBQ1I7QUFDQSw0Q0FBNEMsc0NBQUk7QUFDaEQ7QUFDQSw0QkFBNEIsc0NBQUk7QUFDaEMsZ0JBQWdCLHNDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksc0NBQUksY0FBYyxNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNDQUFJO0FBQ1I7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQUk7QUFDM0I7QUFDQTtBQUNBLCtCQUErQixNQUFNLHNDQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0NBQUk7O0FBRXJCO0FBQ0EsSUFBSSxzQ0FBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0NBQUk7QUFDekMsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTs7Ozs7O1VDMUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9mb290ZXIuY3NzP2JlOGEiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvaGFtYnVyZ2VyLmNzcz9hZjU1Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2hlYWRlci5jc3M/M2MzNCIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9wcmVmZXJlbmNlLmNzcz80ZjUzIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3Jlc2V0LmNzcz81OTM2Iiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL3V0aWxpdHkuY3NzPzA4OWIiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9wcmVmZXJlbmNlLmpzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy91dGlsaXR5LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZm9vdGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvaGFtYnVyZ2VyLmNzc1wiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG4vLyBmaXhlZCBoZWFkZXJcbmxldCBmaXhlZF9oZWFkZXIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiYm9keVwiLFxuICAgICAgICBzdGFydDogXCIrPTEyMDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6J3BsYXkgbm9uZSBub25lIHJldmVyc2UnLFxuICAgIH0sXG59KTtcbmZpeGVkX2hlYWRlclxuLmZyb20oXCIuZml4ZWRfaGVhZGVyXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuXG4vLyBoYW1idXJnZXIgbWVudVxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xudG9nZ2xlTmF2KCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVIYW1idXJnZXJNZW51KCl7XG4gICAgaWYgKCFidXR0b24pe3JldHVybiBmYWxzZTt9XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTdGF0ZSB8fCBjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJjbG9zZWRcIik7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5hbmltYXRlSGFtYnVyZ2VyTWVudSgpO1xuXG5cbi8vIGhhbWJ1cmdlciBtZW51IG9wZW5cbmNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXYnKTtcblxuZnVuY3Rpb24gY2xlYXJDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LnJlbW92ZSgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5mdW5jdGlvbiBhZGRDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5mdW5jdGlvbiB0b2dnbGVOYXYoKXtcbiAgICBpZiAoIWJ1dHRvbil7cmV0dXJuIGZhbHNlO31cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbmNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgLy8gY2xlYXJDbGFzcygpXG4gICAgICAgICAgICBhZGRDbGFzcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkQ2xhc3MoKTtcbiAgICAgICAgICAgIGNsZWFyQ2xhc3MoKVxuICAgICAgICB9XG4gICAgfSlcbn0iLCJpbXBvcnQgXCIuL2NvbW1vbi5qc1wiXG5pbXBvcnQgXCIuL2Nzcy9wcmVmZXJlbmNlLmNzc1wiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG4vLyBzbGlkZXJcbmZ1bmN0aW9uIGhvcml6b250YWxMb29wKGl0ZW1zLCBjb25maWcpIHtcbiAgICBpdGVtcyA9IGdzYXAudXRpbHMudG9BcnJheShpdGVtcyk7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICByZXBlYXQ6IGNvbmZpZy5yZXBlYXQsXG4gICAgICAgIHBhdXNlZDogY29uZmlnLnBhdXNlZCxcbiAgICAgICAgZGVmYXVsdHM6IHsgZWFzZTogXCJub25lXCIgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6ICgpID0+IHRsLnRvdGFsVGltZSh0bC5yYXdUaW1lKCkgKyB0bC5kdXJhdGlvbigpICogMTAwKSxcbiAgICB9KSxcbiAgICBsZW5ndGggPSBpdGVtcy5sZW5ndGgsXG4gICAgc3RhcnRYID0gaXRlbXNbMF0ub2Zmc2V0TGVmdCxcbiAgICB0aW1lcyA9IFtdLFxuICAgIHdpZHRocyA9IFtdLFxuICAgIHhQZXJjZW50cyA9IFtdLFxuICAgIGN1ckluZGV4ID0gMCxcbiAgICBwaXhlbHNQZXJTZWNvbmQgPSAoY29uZmlnLnNwZWVkIHx8IDEpICogMTAwLFxuICAgIHNuYXAgPSBjb25maWcuc25hcCA9PT0gZmFsc2UgPyAodikgPT4gdiA6IGdzYXAudXRpbHMuc25hcChjb25maWcuc25hcCB8fCAxKSwgXG4gICAgdG90YWxXaWR0aCxcbiAgICBjdXJYLFxuICAgIGRpc3RhbmNlVG9TdGFydCxcbiAgICBkaXN0YW5jZVRvTG9vcCxcbiAgICBpdGVtLFxuICAgIGk7XG4gICAgZ3NhcC5zZXQoaXRlbXMsIHtcbiAgICAgICAgeFBlcmNlbnQ6IChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHcgPSAod2lkdGhzW2ldID0gcGFyc2VGbG9hdChnc2FwLmdldFByb3BlcnR5KGVsLCBcIndpZHRoXCIsIFwicHhcIikpKTtcbiAgICAgICAgICAgIHhQZXJjZW50c1tpXSA9IHNuYXAoXG4gICAgICAgICAgICAgICAgKHBhcnNlRmxvYXQoZ3NhcC5nZXRQcm9wZXJ0eShlbCwgXCJ4XCIsIFwicHhcIikpIC8gdykgKiAxMDAgK1xuICAgICAgICAgICAgICAgIGdzYXAuZ2V0UHJvcGVydHkoZWwsIFwieFBlcmNlbnRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4geFBlcmNlbnRzW2ldO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGdzYXAuc2V0KGl0ZW1zLCB7IHg6IDAgfSk7XG4gICAgdG90YWxXaWR0aCA9XG4gICAgaXRlbXNbbGVuZ3RoIC0gMV0ub2Zmc2V0TGVmdCArXG4gICAgKHhQZXJjZW50c1tsZW5ndGggLSAxXSAvIDEwMCkgKiB3aWR0aHNbbGVuZ3RoIC0gMV0gLVxuICAgIHN0YXJ0WCArXG4gICAgaXRlbXNbbGVuZ3RoIC0gMV0ub2Zmc2V0V2lkdGggKlxuICAgIGdzYXAuZ2V0UHJvcGVydHkoaXRlbXNbbGVuZ3RoIC0gMV0sIFwic2NhbGVYXCIpICtcbiAgICAocGFyc2VGbG9hdChjb25maWcucGFkZGluZ1JpZ2h0KSB8fCAwKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICBjdXJYID0gKHhQZXJjZW50c1tpXSAvIDEwMCkgKiB3aWR0aHNbaV07XG4gICAgICAgIGRpc3RhbmNlVG9TdGFydCA9IGl0ZW0ub2Zmc2V0TGVmdCArIGN1clggLSBzdGFydFg7XG4gICAgICAgIGRpc3RhbmNlVG9Mb29wID1cbiAgICAgICAgZGlzdGFuY2VUb1N0YXJ0ICsgd2lkdGhzW2ldICogZ3NhcC5nZXRQcm9wZXJ0eShpdGVtLCBcInNjYWxlWFwiKTtcbiAgICAgICAgdGwudG8oXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHhQZXJjZW50OiBzbmFwKCgoY3VyWCAtIGRpc3RhbmNlVG9Mb29wKSAvIHdpZHRoc1tpXSkgKiAxMDApLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkaXN0YW5jZVRvTG9vcCAvIHBpeGVsc1BlclNlY29uZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgICAgLmZyb21UbyhcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeFBlcmNlbnQ6IHNuYXAoXG4gICAgICAgICAgICAgICAgKChjdXJYIC0gZGlzdGFuY2VUb0xvb3AgKyB0b3RhbFdpZHRoKSAvIHdpZHRoc1tpXSkgKiAxMDBcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4UGVyY2VudDogeFBlcmNlbnRzW2ldLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOlxuICAgICAgICAgICAgICAgIChjdXJYIC0gZGlzdGFuY2VUb0xvb3AgKyB0b3RhbFdpZHRoIC0gY3VyWCkgLyBwaXhlbHNQZXJTZWNvbmQsXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXN0YW5jZVRvTG9vcCAvIHBpeGVsc1BlclNlY29uZFxuICAgICAgICApXG4gICAgICAgIC5hZGQoXCJsYWJlbFwiICsgaSwgZGlzdGFuY2VUb1N0YXJ0IC8gcGl4ZWxzUGVyU2Vjb25kKTtcbiAgICAgICAgdGltZXNbaV0gPSBkaXN0YW5jZVRvU3RhcnQgLyBwaXhlbHNQZXJTZWNvbmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvSW5kZXgoaW5kZXgsIHZhcnMpIHtcbiAgICAgICAgdmFycyA9IHZhcnMgfHwge307XG4gICAgICAgIE1hdGguYWJzKGluZGV4IC0gY3VySW5kZXgpID4gbGVuZ3RoIC8gMiAmJlxuICAgICAgICAoaW5kZXggKz0gaW5kZXggPiBjdXJJbmRleCA/IC1sZW5ndGggOiBsZW5ndGgpOyBcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gZ3NhcC51dGlscy53cmFwKDAsIGxlbmd0aCwgaW5kZXgpLFxuICAgICAgICB0aW1lID0gdGltZXNbbmV3SW5kZXhdO1xuICAgICAgICBpZiAodGltZSA+IHRsLnRpbWUoKSAhPT0gaW5kZXggPiBjdXJJbmRleCkge1xuICAgICAgICAgICAgdmFycy5tb2RpZmllcnMgPSB7IHRpbWU6IGdzYXAudXRpbHMud3JhcCgwLCB0bC5kdXJhdGlvbigpKSB9O1xuICAgICAgICAgICAgdGltZSArPSB0bC5kdXJhdGlvbigpICogKGluZGV4ID4gY3VySW5kZXggPyAxIDogLTEpO1xuICAgICAgICB9XG4gICAgICAgIGN1ckluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgIHZhcnMub3ZlcndyaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRsLnR3ZWVuVG8odGltZSwgdmFycyk7XG4gICAgfVxuICAgIHRsLm5leHQgPSAodmFycykgPT4gdG9JbmRleChjdXJJbmRleCArIDEsIHZhcnMpO1xuICAgIHRsLnByZXZpb3VzID0gKHZhcnMpID0+IHRvSW5kZXgoY3VySW5kZXggLSAxLCB2YXJzKTtcbiAgICB0bC5jdXJyZW50ID0gKCkgPT4gY3VySW5kZXg7XG4gICAgdGwudG9JbmRleCA9IChpbmRleCwgdmFycykgPT4gdG9JbmRleChpbmRleCwgdmFycyk7XG4gICAgdGwudGltZXMgPSB0aW1lcztcbiAgICB0bC5wcm9ncmVzcygxLCB0cnVlKS5wcm9ncmVzcygwLCB0cnVlKTsgXG4gICAgaWYgKGNvbmZpZy5yZXZlcnNlZCkge1xuICAgICAgICB0bC52YXJzLm9uUmV2ZXJzZUNvbXBsZXRlKCk7XG4gICAgICAgIHRsLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRsO1xufVxuXG5jb25zdCBsaXN0SXRlbSA9IGdzYXAudXRpbHMudG9BcnJheShcIi5saXN0X19pdGVtXCIpO1xuXG5mdW5jdGlvbiBmbG93VGV4dChzY3JvbGxlckNsYXNzLGl0ZW1DbGFzcyl7XG4gICAgZ3NhcC51dGlscy50b0FycmF5KHNjcm9sbGVyQ2xhc3MpLmZvckVhY2goKGxpbmUsIGkpID0+IHtcbiAgICAgICAgY29uc3QgbGlua3MgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbUNsYXNzKSxcbiAgICAgICAgdGwgPSBob3Jpem9udGFsTG9vcChsaW5rcywge1xuICAgICAgICAgICAgcmVwZWF0OiAtMSwgXG4gICAgICAgICAgICBzcGVlZDogMSArIGkgKiAwLjUsXG4gICAgICAgICAgICByZXZlcnNlZDogaSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFyc2VGbG9hdChnc2FwLmdldFByb3BlcnR5KGxpbmtzWzBdLCBcIm1hcmdpblJpZ2h0XCIsIFwicHhcIikpIFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZmxvd1RleHQoJy5zY3JvbGxlci1pbm5lcicsXCIubGlzdF9faXRlbVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcmVmZXJlbmNlXCI6IDAsXG5cdFwic3JjX2Nzc19mb290ZXJfY3NzLXNyY19jc3NfaGFtYnVyZ2VyX2Nzcy1zcmNfY3NzX2hlYWRlcl9jc3Mtc3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc191dGlsaXR5X2Nzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bWVxXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3VtZXFcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2dzYXBfU2Nyb2xsVHJpZ2dlcl9qcy1ub2RlX21vZHVsZXNfZ3NhcF9pbmRleF9qc1wiLFwic3JjX2Nzc19mb290ZXJfY3NzLXNyY19jc3NfaGFtYnVyZ2VyX2Nzcy1zcmNfY3NzX2hlYWRlcl9jc3Mtc3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc191dGlsaXR5X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wcmVmZXJlbmNlLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=