/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/top.css":
/*!*************************!*\
  !*** ./src/css/top.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_top_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/top.css */ "./src/css/top.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
// import "./common.js"




gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

// kv title
let kv_title = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
.from(".kv_deco_kumo_l", { x: 30, opacity: 0, duration: 1 }, "-=1.5")
.from(".kv_deco_kumo_r", { x: -30, opacity: 0, duration: 1 }, "-=1")
.from(".kv_deco_ume_l", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_r", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_l_small", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")
.from(".kv_deco_ume_r_small", { scale: 0, opacity: 0, duration: 1, ease: "Power4.easeOut"}, "-=0.8")

// kv bottom text
let kv_bottom_text = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
let concept = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
let concept_img = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
let recommend = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
let certification = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
let news = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
let instagram = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1lcS8uL3NyYy9jc3MvdG9wLmNzcz9lZTg4Iiwid2VicGFjazovL3VtZXEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW1lcS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VtZXEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3VtZXEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly91bWVxL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBpbXBvcnQgXCIuL2NvbW1vbi5qc1wiXG5pbXBvcnQgXCIuL2Nzcy90b3AuY3NzXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbi8vIGt2IHRpdGxlXG5sZXQga3ZfdGl0bGUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI2t2XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmt2X3RpdGxlXG4uZnJvbShcIi5rdl90aXRsZTFcIiwgeyB5OiAtMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAyLCBkZWxheTogMiB9KVxuLmZyb20oXCIua3ZfdGl0bGUyXCIsIHsgeTogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9pbWdcIiwgeyB5OiAyMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSwgXCItPTEuNVwiKVxuLmZyb20oXCIua3ZfbmV3c1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMiB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9kZWNvX2t1bW9fbFwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LCBcIi09MS41XCIpXG4uZnJvbShcIi5rdl9kZWNvX2t1bW9fclwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSwgXCItPTFcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX2xcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX3JcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX2xfc21hbGxcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcbi5mcm9tKFwiLmt2X2RlY29fdW1lX3Jfc21hbGxcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiLT0wLjhcIilcblxuLy8ga3YgYm90dG9tIHRleHRcbmxldCBrdl9ib3R0b21fdGV4dCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIua3ZfYm90dG9tX3RleHRcIixcbiAgICAgICAgc3RhcnQ6IFwiLT04MDBweFwiLFxuICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIC8vIG1hcmtlcnM6dHJ1ZSxcbiAgICB9LFxufSk7XG5rdl9ib3R0b21fdGV4dFxuLmZyb20oXCIua3ZfYm90dG9tX3RleHRcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDIgfSk7XG5cbi8vIGNvbmNlcHRcbmxldCBjb25jZXB0ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNjb25jZXB0XCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgIH0sXG59KTtcbmNvbmNlcHRcbi5mcm9tKFwiI2NvbmNlcHQgLnRvcF90aXRsZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pXG4uZnJvbShcIiNjb25jZXB0IC50aXRsZV9kZWNvX3RvcFwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIiNjb25jZXB0IC50aXRsZV9kZWNvX2JvdHRvbVwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIuY29uY2VwdF9mbGV4IGRpdiBoM1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfbGluZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTEuNVwiKVxuLmZyb20oXCIuY29uY2VwdF90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIuY29uY2VwdF9idG5cIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpO1xuXG4vLyBjb25jZXB0X2ltZ1xubGV0IGNvbmNlcHRfaW1nID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5jb25jZXB0X2ltZ1wiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICB9LFxufSk7XG5jb25jZXB0X2ltZ1xuLmZyb20oXCIuY29uY2VwdF9pbWczXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiLmNvbmNlcHRfaW1nMlwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIilcbi5mcm9tKFwiLmNvbmNlcHRfaW1nMVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIik7XG5cbi8vIHJlY29tbWVuZFxubGV0IHJlY29tbWVuZCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogXCIjcmVjb21tZW5kXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NjAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICBtYXJrZXJzOnRydWUsXG4gICAgfSxcbn0pO1xucmVjb21tZW5kXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRvcF90aXRsZVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0pXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRpdGxlX2RlY29fdG9wXCIsIHsgeDogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIiNyZWNvbW1lbmQgLnRpdGxlX2RlY29fYm90dG9tXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiLnJlY29tbWVuZF90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIucmVjb21tZW5kX21lbnVfa2FtYW1lc2hpXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIucmVjb21tZW5kX21lbnVfeWFraXRvcmlcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0xXCIpXG4uZnJvbShcIi5yZWNvbW1lbmRfbWVudV91bmFnaVwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIik7XG5cbi8vIGNlcnRpZmljYXRpb25cbmxldCBjZXJ0aWZpY2F0aW9uID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNjZXJ0aWZpY2F0aW9uXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09ODAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICBtYXJrZXJzOnRydWUsXG4gICAgfSxcbn0pO1xuY2VydGlmaWNhdGlvblxuLmZyb20oXCIjY2VydGlmaWNhdGlvblwiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMi41IH0pXG4uZnJvbShcIi5jZXJ0aWZpY2F0aW9uX3RpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl9mbGV4MSBpbWdcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9KVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl9mbGV4MSAuY2VydGlmaWNhdGlvbl90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MVwiKVxuLmZyb20oXCIuY2VydGlmaWNhdGlvbl9mbGV4MiAuY2VydGlmaWNhdGlvbl90ZXh0XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MC41XCIpXG4uZnJvbShcIi5jZXJ0aWZpY2F0aW9uX2ZsZXgyIGltZ1wiLCB7IHk6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMS41IH0sXCItPTFcIik7XG5cbi8vIG5ld3NcbmxldCBuZXdzID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIiNuZXdzXCIsXG4gICAgICAgIHN0YXJ0OiBcIi09NzAwcHhcIixcbiAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICBtYXJrZXJzOnRydWUsXG4gICAgfSxcbn0pO1xubmV3c1xuLmZyb20oXCIjbmV3cyAudG9wX3RpdGxlXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSlcbi5mcm9tKFwiI25ld3MgLnRpdGxlX2RlY29fdG9wXCIsIHsgeDogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxIH0sXCItPTFcIilcbi5mcm9tKFwiI25ld3MgLnRpdGxlX2RlY29fYm90dG9tXCIsIHsgeDogLTMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIi5uZXdzX2NvbnRlbnRcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9LFwiLT0wLjVcIilcbi5mcm9tKFwiLm5ld3NfYnRuXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MC41XCIpO1xuXG4vLyBpbnN0YWdyYW1cbmxldCBpbnN0YWdyYW0gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFwiI2luc3RhZ3JhbVwiLFxuICAgICAgICBzdGFydDogXCItPTgwMHB4XCIsXG4gICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgbWFya2Vyczp0cnVlLFxuICAgIH0sXG59KTtcbmluc3RhZ3JhbVxuLmZyb20oXCIjaW5zdGFncmFtIC50b3BfdGl0bGVcIiwgeyB5OiAzMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEuNSB9KVxuLmZyb20oXCIjaW5zdGFncmFtIC50aXRsZV9kZWNvX3RvcFwiLCB7IHg6IC0zMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDEgfSxcIi09MVwiKVxuLmZyb20oXCIjaW5zdGFncmFtIC50aXRsZV9kZWNvX2JvdHRvbVwiLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSB9LFwiLT0xXCIpXG4uZnJvbShcIi5pbnN0YV9jb250ZW50XCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSxcIi09MC41XCIpXG4uZnJvbShcIi5pbnN0YWdyYW1fYnRuXCIsIHsgeTogMzAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLjUgfSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdW1lcVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bWVxXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzYXBfaW5kZXhfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==