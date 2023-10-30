/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./themes/src/assets/js/nav.js":
/*!*************************************!*\
  !*** ./themes/src/assets/js/nav.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n/////////\n// nav Hover\nvar navBar = document.getElementById('nav-bar');\nvar navHover = function navHover(e, opacity, transition) {\n  if (e.target.classList.contains('nav__link')) {\n    var link = e.target;\n    var sibling = link.closest('#nav-bar').querySelectorAll('.nav__link');\n    var logo = link.closest('#nav-bar').querySelector('.custom-logo');\n    sibling.forEach(function (el) {\n      if (el !== link) {\n        el.style.opacity = opacity;\n        el.style.transition = transition;\n      }\n    });\n    logo.style.opacity = opacity;\n    logo.style.transition = transition;\n  }\n};\nnavBar.addEventListener('mouseover', function (e) {\n  navHover(e, .6, 'opacity ease-in 150ms');\n});\nnavBar.addEventListener('mouseout', function (e) {\n  navHover(e, 1, 'opacity ease-out 150ms');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvc3JjL2Fzc2V0cy9qcy9uYXYuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ2pELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFhQyxDQUFDLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO0VBQy9DLElBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUN6QyxJQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQ0csTUFBTTtJQUNyQixJQUFNSSxPQUFPLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkUsSUFBTUMsSUFBSSxHQUFHSixJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUVuRUosT0FBTyxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ2xCLElBQUtBLEVBQUUsS0FBS1AsSUFBSSxFQUFFO1FBQ2RPLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDYixPQUFPLEdBQUdBLE9BQU87UUFDMUJZLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDWixVQUFVLEdBQUdBLFVBQVU7TUFDcEM7SUFDSixDQUFDLENBQUM7SUFDRlEsSUFBSSxDQUFDSSxLQUFLLENBQUNiLE9BQU8sR0FBR0EsT0FBTztJQUM1QlMsSUFBSSxDQUFDSSxLQUFLLENBQUNaLFVBQVUsR0FBR0EsVUFBVTtFQUN0QztBQUVKLENBQUM7QUFDRE4sTUFBTSxDQUFDbUIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVVmLENBQUMsRUFBRTtFQUM5Q0QsUUFBUSxDQUFDQyxDQUFDLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUNGSixNQUFNLENBQUNtQixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBVWYsQ0FBQyxFQUFFO0VBQzdDRCxRQUFRLENBQUNDLENBQUMsRUFBRSxDQUFDLEVBQUUsd0JBQXdCLENBQUM7QUFDNUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjAyM19taWNoYWVsYWhvZmVyLy4vdGhlbWVzL3NyYy9hc3NldHMvanMvbmF2LmpzPzNhNjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8vLy8vLy8vXHJcbi8vIG5hdiBIb3ZlclxyXG5cclxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1iYXInKTtcclxuY29uc3QgbmF2SG92ZXIgPSBmdW5jdGlvbiAoZSwgb3BhY2l0eSwgdHJhbnNpdGlvbikge1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2xpbmsnKSkge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCBzaWJsaW5nID0gbGluay5jbG9zZXN0KCcjbmF2LWJhcicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcclxuICAgICAgICBjb25zdCBsb2dvID0gbGluay5jbG9zZXN0KCcjbmF2LWJhcicpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tbG9nbycpO1xyXG5cclxuICAgICAgICBzaWJsaW5nLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGVsICE9PSBsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2dvLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgIGxvZ28uc3R5bGUudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG59XHJcbm5hdkJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbmF2SG92ZXIoZSwgLjYsICdvcGFjaXR5IGVhc2UtaW4gMTUwbXMnKVxyXG59KVxyXG5uYXZCYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbmF2SG92ZXIoZSwgMSwgJ29wYWNpdHkgZWFzZS1vdXQgMTUwbXMnKVxyXG59KSJdLCJuYW1lcyI6WyJuYXZCYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmF2SG92ZXIiLCJlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImxpbmsiLCJzaWJsaW5nIiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2dvIiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJlbCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./themes/src/assets/js/nav.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./themes/src/assets/js/nav.js"]();
/******/ 	
/******/ })()
;