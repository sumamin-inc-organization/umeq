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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS41YzU5NTZkZjM0NzM4ODM5OTMwZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDRTtBQUNEO0FBQ0E7QUFDRzs7QUFFRDtBQUN1QjtBQUNuRCxzQ0FBSSxnQkFBZ0IsNkRBQWE7O0FBRWpDO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLDJCQUEyQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQzlEb0I7QUFDVTs7QUFFRjtBQUN1QjtBQUNuRCxzQ0FBSSxnQkFBZ0IsNkRBQWE7O0FBRWpDO0FBQ0E7QUFDQSxZQUFZLHNDQUFJO0FBQ2hCO0FBQ0EsYUFBYSxzQ0FBSTtBQUNqQjtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0NBQUk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQ0FBSTtBQUNSO0FBQ0EsNENBQTRDLHNDQUFJO0FBQ2hEO0FBQ0EsNEJBQTRCLHNDQUFJO0FBQ2hDLGdCQUFnQixzQ0FBSTtBQUNwQjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxJQUFJLHNDQUFJLGNBQWMsTUFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQ0FBSTtBQUNSO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0NBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNDQUFJO0FBQzNCO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTSxzQ0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNDQUFJOztBQUVyQjtBQUNBLElBQUksc0NBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNDQUFJO0FBQ3pDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7Ozs7OztVQzFIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvZm9vdGVyLmNzcz9iZThhIiwid2VicGFjazovL3VtZXEvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3M/YWY1NSIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzNjMzQiLCJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvcHJlZmVyZW5jZS5jc3M/NGY1MyIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy9yZXNldC5jc3M/NTkzNiIsIndlYnBhY2s6Ly91bWVxLy4vc3JjL2Nzcy91dGlsaXR5LmNzcz8wODliIiwid2VicGFjazovL3VtZXEvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3VtZXEvLi9zcmMvcHJlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3VtZXEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vY3NzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hhbWJ1cmdlci5jc3NcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuLy8gZml4ZWQgaGVhZGVyXG5sZXQgZml4ZWRfaGVhZGVyID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcImJvZHlcIixcbiAgICAgICAgc3RhcnQ6IFwiKz0xMjAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOidwbGF5IG5vbmUgbm9uZSByZXZlcnNlJyxcbiAgICB9LFxufSk7XG5maXhlZF9oZWFkZXJcbi5mcm9tKFwiLmZpeGVkX2hlYWRlclwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcblxuLy8gaGFtYnVyZ2VyIG1lbnVcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcbnRvZ2dsZU5hdigpO1xuXG5mdW5jdGlvbiBhbmltYXRlSGFtYnVyZ2VyTWVudSgpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U3RhdGUgfHwgY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcIm9wZW5lZFwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKTtcblxuXG4vLyBoYW1idXJnZXIgbWVudSBvcGVuXG5jb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1hcnktbmF2Jyk7XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3MoKXtcbiAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xufVxuZnVuY3Rpb24gYWRkQ2xhc3MoKXtcbiAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xufVxuZnVuY3Rpb24gdG9nZ2xlTmF2KCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG5jb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgICAgYWRkQ2xhc3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZENsYXNzKCk7XG4gICAgICAgICAgICBjbGVhckNsYXNzKClcbiAgICAgICAgfVxuICAgIH0pXG59IiwiaW1wb3J0IFwiLi9jb21tb24uanNcIlxuaW1wb3J0IFwiLi9jc3MvcHJlZmVyZW5jZS5jc3NcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuLy8gc2xpZGVyXG5mdW5jdGlvbiBob3Jpem9udGFsTG9vcChpdGVtcywgY29uZmlnKSB7XG4gICAgaXRlbXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoaXRlbXMpO1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcmVwZWF0OiBjb25maWcucmVwZWF0LFxuICAgICAgICBwYXVzZWQ6IGNvbmZpZy5wYXVzZWQsXG4gICAgICAgIGRlZmF1bHRzOiB7IGVhc2U6IFwibm9uZVwiIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiAoKSA9PiB0bC50b3RhbFRpbWUodGwucmF3VGltZSgpICsgdGwuZHVyYXRpb24oKSAqIDEwMCksXG4gICAgfSksXG4gICAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoLFxuICAgIHN0YXJ0WCA9IGl0ZW1zWzBdLm9mZnNldExlZnQsXG4gICAgdGltZXMgPSBbXSxcbiAgICB3aWR0aHMgPSBbXSxcbiAgICB4UGVyY2VudHMgPSBbXSxcbiAgICBjdXJJbmRleCA9IDAsXG4gICAgcGl4ZWxzUGVyU2Vjb25kID0gKGNvbmZpZy5zcGVlZCB8fCAxKSAqIDEwMCxcbiAgICBzbmFwID0gY29uZmlnLnNuYXAgPT09IGZhbHNlID8gKHYpID0+IHYgOiBnc2FwLnV0aWxzLnNuYXAoY29uZmlnLnNuYXAgfHwgMSksIFxuICAgIHRvdGFsV2lkdGgsXG4gICAgY3VyWCxcbiAgICBkaXN0YW5jZVRvU3RhcnQsXG4gICAgZGlzdGFuY2VUb0xvb3AsXG4gICAgaXRlbSxcbiAgICBpO1xuICAgIGdzYXAuc2V0KGl0ZW1zLCB7XG4gICAgICAgIHhQZXJjZW50OiAoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGxldCB3ID0gKHdpZHRoc1tpXSA9IHBhcnNlRmxvYXQoZ3NhcC5nZXRQcm9wZXJ0eShlbCwgXCJ3aWR0aFwiLCBcInB4XCIpKSk7XG4gICAgICAgICAgICB4UGVyY2VudHNbaV0gPSBzbmFwKFxuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KGdzYXAuZ2V0UHJvcGVydHkoZWwsIFwieFwiLCBcInB4XCIpKSAvIHcpICogMTAwICtcbiAgICAgICAgICAgICAgICBnc2FwLmdldFByb3BlcnR5KGVsLCBcInhQZXJjZW50XCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHhQZXJjZW50c1tpXTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBnc2FwLnNldChpdGVtcywgeyB4OiAwIH0pO1xuICAgIHRvdGFsV2lkdGggPVxuICAgIGl0ZW1zW2xlbmd0aCAtIDFdLm9mZnNldExlZnQgK1xuICAgICh4UGVyY2VudHNbbGVuZ3RoIC0gMV0gLyAxMDApICogd2lkdGhzW2xlbmd0aCAtIDFdIC1cbiAgICBzdGFydFggK1xuICAgIGl0ZW1zW2xlbmd0aCAtIDFdLm9mZnNldFdpZHRoICpcbiAgICBnc2FwLmdldFByb3BlcnR5KGl0ZW1zW2xlbmd0aCAtIDFdLCBcInNjYWxlWFwiKSArXG4gICAgKHBhcnNlRmxvYXQoY29uZmlnLnBhZGRpbmdSaWdodCkgfHwgMCk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgY3VyWCA9ICh4UGVyY2VudHNbaV0gLyAxMDApICogd2lkdGhzW2ldO1xuICAgICAgICBkaXN0YW5jZVRvU3RhcnQgPSBpdGVtLm9mZnNldExlZnQgKyBjdXJYIC0gc3RhcnRYO1xuICAgICAgICBkaXN0YW5jZVRvTG9vcCA9XG4gICAgICAgIGRpc3RhbmNlVG9TdGFydCArIHdpZHRoc1tpXSAqIGdzYXAuZ2V0UHJvcGVydHkoaXRlbSwgXCJzY2FsZVhcIik7XG4gICAgICAgIHRsLnRvKFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4UGVyY2VudDogc25hcCgoKGN1clggLSBkaXN0YW5jZVRvTG9vcCkgLyB3aWR0aHNbaV0pICogMTAwKSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZGlzdGFuY2VUb0xvb3AgLyBwaXhlbHNQZXJTZWNvbmQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMFxuICAgICAgICApXG4gICAgICAgIC5mcm9tVG8oXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHhQZXJjZW50OiBzbmFwKFxuICAgICAgICAgICAgICAgICgoY3VyWCAtIGRpc3RhbmNlVG9Mb29wICsgdG90YWxXaWR0aCkgLyB3aWR0aHNbaV0pICogMTAwXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeFBlcmNlbnQ6IHhQZXJjZW50c1tpXSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjpcbiAgICAgICAgICAgICAgICAoY3VyWCAtIGRpc3RhbmNlVG9Mb29wICsgdG90YWxXaWR0aCAtIGN1clgpIC8gcGl4ZWxzUGVyU2Vjb25kLFxuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzdGFuY2VUb0xvb3AgLyBwaXhlbHNQZXJTZWNvbmRcbiAgICAgICAgKVxuICAgICAgICAuYWRkKFwibGFiZWxcIiArIGksIGRpc3RhbmNlVG9TdGFydCAvIHBpeGVsc1BlclNlY29uZCk7XG4gICAgICAgIHRpbWVzW2ldID0gZGlzdGFuY2VUb1N0YXJ0IC8gcGl4ZWxzUGVyU2Vjb25kO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0luZGV4KGluZGV4LCB2YXJzKSB7XG4gICAgICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuICAgICAgICBNYXRoLmFicyhpbmRleCAtIGN1ckluZGV4KSA+IGxlbmd0aCAvIDIgJiZcbiAgICAgICAgKGluZGV4ICs9IGluZGV4ID4gY3VySW5kZXggPyAtbGVuZ3RoIDogbGVuZ3RoKTsgXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGdzYXAudXRpbHMud3JhcCgwLCBsZW5ndGgsIGluZGV4KSxcbiAgICAgICAgdGltZSA9IHRpbWVzW25ld0luZGV4XTtcbiAgICAgICAgaWYgKHRpbWUgPiB0bC50aW1lKCkgIT09IGluZGV4ID4gY3VySW5kZXgpIHtcbiAgICAgICAgICAgIHZhcnMubW9kaWZpZXJzID0geyB0aW1lOiBnc2FwLnV0aWxzLndyYXAoMCwgdGwuZHVyYXRpb24oKSkgfTtcbiAgICAgICAgICAgIHRpbWUgKz0gdGwuZHVyYXRpb24oKSAqIChpbmRleCA+IGN1ckluZGV4ID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJJbmRleCA9IG5ld0luZGV4O1xuICAgICAgICB2YXJzLm92ZXJ3cml0ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0bC50d2VlblRvKHRpbWUsIHZhcnMpO1xuICAgIH1cbiAgICB0bC5uZXh0ID0gKHZhcnMpID0+IHRvSW5kZXgoY3VySW5kZXggKyAxLCB2YXJzKTtcbiAgICB0bC5wcmV2aW91cyA9ICh2YXJzKSA9PiB0b0luZGV4KGN1ckluZGV4IC0gMSwgdmFycyk7XG4gICAgdGwuY3VycmVudCA9ICgpID0+IGN1ckluZGV4O1xuICAgIHRsLnRvSW5kZXggPSAoaW5kZXgsIHZhcnMpID0+IHRvSW5kZXgoaW5kZXgsIHZhcnMpO1xuICAgIHRsLnRpbWVzID0gdGltZXM7XG4gICAgdGwucHJvZ3Jlc3MoMSwgdHJ1ZSkucHJvZ3Jlc3MoMCwgdHJ1ZSk7IFxuICAgIGlmIChjb25maWcucmV2ZXJzZWQpIHtcbiAgICAgICAgdGwudmFycy5vblJldmVyc2VDb21wbGV0ZSgpO1xuICAgICAgICB0bC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiB0bDtcbn1cblxuY29uc3QgbGlzdEl0ZW0gPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIubGlzdF9faXRlbVwiKTtcblxuZnVuY3Rpb24gZmxvd1RleHQoc2Nyb2xsZXJDbGFzcyxpdGVtQ2xhc3Mpe1xuICAgIGdzYXAudXRpbHMudG9BcnJheShzY3JvbGxlckNsYXNzKS5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1DbGFzcyksXG4gICAgICAgIHRsID0gaG9yaXpvbnRhbExvb3AobGlua3MsIHtcbiAgICAgICAgICAgIHJlcGVhdDogLTEsIFxuICAgICAgICAgICAgc3BlZWQ6IDEgKyBpICogMC41LFxuICAgICAgICAgICAgcmV2ZXJzZWQ6IGkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhcnNlRmxvYXQoZ3NhcC5nZXRQcm9wZXJ0eShsaW5rc1swXSwgXCJtYXJnaW5SaWdodFwiLCBcInB4XCIpKSBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZsb3dUZXh0KCcuc2Nyb2xsZXItaW5uZXInLFwiLmxpc3RfX2l0ZW1cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicHJlZmVyZW5jZVwiOiAwLFxuXHRcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bWVxXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanNcIixcInNyY19jc3NfZm9vdGVyX2Nzcy1zcmNfY3NzX2hhbWJ1cmdlcl9jc3Mtc3JjX2Nzc19oZWFkZXJfY3NzLXNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdXRpbGl0eV9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcHJlZmVyZW5jZS5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9