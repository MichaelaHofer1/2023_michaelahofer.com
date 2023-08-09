/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./themes/src/assets/js/scripts.js":
/*!*****************************************!*\
  !*** ./themes/src/assets/js/scripts.js ***!
  \*****************************************/
/***/ (() => {

eval("function jsLoaded() {\n  var htmlTag = document.querySelector('html');\n  htmlTag.classList.remove('no-js');\n  htmlTag.classList.add('js');\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var sliderInitalizeSlideshow = function sliderInitalizeSlideshow() {\n    var splide = new Splide('#header-slider', {\n      type: 'loop',\n      easing: 'ease',\n      autoplay: true,\n      perPage: 1,\n      interval: 3000,\n      speed: 750,\n      pagination: false,\n      arrows: false\n    });\n    splide.mount();\n  };\n  if (window.acf) {\n    window.acf.addAction('render_block_preview/type=header', sliderInitalizeSlideshow);\n  }\n});\n\n// Event Listener \"DOMContentLoaded\" wird nur ausgeführt, wenn der DOM fertig aufgebaut ist\ndocument.addEventListener('DOMContentLoaded', function () {\n  jsLoaded();\n}, false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqc0xvYWRlZCIsImh0bWxUYWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVySW5pdGFsaXplU2xpZGVzaG93Iiwic3BsaWRlIiwiU3BsaWRlIiwidHlwZSIsImVhc2luZyIsImF1dG9wbGF5IiwicGVyUGFnZSIsImludGVydmFsIiwic3BlZWQiLCJwYWdpbmF0aW9uIiwiYXJyb3dzIiwibW91bnQiLCJ3aW5kb3ciLCJhY2YiLCJhZGRBY3Rpb24iXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjAyM19taWNoYWVsYWhvZmVyLy4vdGhlbWVzL3NyYy9hc3NldHMvanMvc2NyaXB0cy5qcz84NDg3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGpzTG9hZGVkKCkge1xyXG4gICAgY29uc3QgaHRtbFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG4gICAgaHRtbFRhZy5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpXHJcbiAgICBodG1sVGFnLmNsYXNzTGlzdC5hZGQoJ2pzJylcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzbGlkZXJJbml0YWxpemVTbGlkZXNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNwbGlkZSA9IG5ldyBTcGxpZGUoJyNoZWFkZXItc2xpZGVyJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnbG9vcCcsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2UnLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDMwMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiA3NTAsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3BsaWRlLm1vdW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh3aW5kb3cuYWNmKSB7XHJcbiAgICAgICAgd2luZG93LmFjZi5hZGRBY3Rpb24oJ3JlbmRlcl9ibG9ja19wcmV2aWV3L3R5cGU9aGVhZGVyJywgc2xpZGVySW5pdGFsaXplU2xpZGVzaG93KVxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXIgXCJET01Db250ZW50TG9hZGVkXCIgd2lyZCBudXIgYXVzZ2Vmw7xocnQsIHdlbm4gZGVyIERPTSBmZXJ0aWcgYXVmZ2ViYXV0IGlzdFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAganNMb2FkZWQoKVxyXG59LCBmYWxzZSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxRQUFRQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDOUNGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO0VBQ2pDSixPQUFPLENBQUNHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQztBQUMvQjtBQUdBSixRQUFRLENBQUNLLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FBQSxFQUFlO0lBQ3pDLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7TUFDdENDLElBQUksRUFBRSxNQUFNO01BQ1pDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLEtBQUssRUFBRSxHQUFHO01BQ1ZDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUM7SUFDRlQsTUFBTSxDQUFDVSxLQUFLLENBQUMsQ0FBQztFQUNsQixDQUFDO0VBRUQsSUFBSUMsTUFBTSxDQUFDQyxHQUFHLEVBQUU7SUFDWkQsTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRWQsd0JBQXdCLENBQUM7RUFDdEY7QUFFSixDQUFDLENBQUM7O0FBR0Y7QUFDQU4sUUFBUSxDQUFDSyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3REUCxRQUFRLENBQUMsQ0FBQztBQUNkLENBQUMsRUFBRSxLQUFLLENBQUMiLCJmaWxlIjoiLi90aGVtZXMvc3JjL2Fzc2V0cy9qcy9zY3JpcHRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./themes/src/assets/js/scripts.js\n");

/***/ }),

/***/ "./themes/src/assets/scss/style.scss":
/*!*******************************************!*\
  !*** ./themes/src/assets/scss/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjAyM19taWNoYWVsYWhvZmVyLy4vdGhlbWVzL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzPzA5ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./themes/src/assets/scss/style.scss\n");

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
/******/ 			"/assets/js/scripts": 0,
/******/ 			"style": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunk_2023_michaelahofer"] = self["webpackChunk_2023_michaelahofer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./themes/src/assets/js/scripts.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./themes/src/assets/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;