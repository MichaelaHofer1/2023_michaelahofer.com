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

eval("\n\nvar navBar = document.getElementById('nav-bar');\nvar navHover = function navHover(e, opacity, transition) {\n  if (e.target.classList.contains('nav__link')) {\n    var link = e.target;\n    var sibling = link.closest('#nav-bar').querySelectorAll('.nav__link');\n    var logo = link.closest('#nav-bar').querySelector('.custom-logo');\n    sibling.forEach(function (el) {\n      if (el !== link) {\n        el.style.opacity = opacity;\n        el.style.transition = transition;\n      }\n    });\n    logo.style.opacity = opacity;\n    logo.style.transition = transition;\n  }\n};\nnavBar.addEventListener('mouseover', function (e) {\n  navHover(e, .6, 'opacity ease-in 150ms');\n});\nnavBar.addEventListener('mouseout', function (e) {\n  navHover(e, 1, 'opacity ease-out 150ms');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvc3JjL2Fzc2V0cy9qcy9uYXYuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDakQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQWFDLENBQUMsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7RUFDL0MsSUFBSUYsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0lBQzFDLElBQU1DLElBQUksR0FBR04sQ0FBQyxDQUFDRyxNQUFNO0lBQ3JCLElBQU1JLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN2RSxJQUFNQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBRW5FSixPQUFPLENBQUNLLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDbEIsSUFBSUEsRUFBRSxLQUFLUCxJQUFJLEVBQUU7UUFDYk8sRUFBRSxDQUFDQyxLQUFLLENBQUNiLE9BQU8sR0FBR0EsT0FBTztRQUMxQlksRUFBRSxDQUFDQyxLQUFLLENBQUNaLFVBQVUsR0FBR0EsVUFBVTtNQUNwQztJQUNKLENBQUMsQ0FBQztJQUNGUSxJQUFJLENBQUNJLEtBQUssQ0FBQ2IsT0FBTyxHQUFHQSxPQUFPO0lBQzVCUyxJQUFJLENBQUNJLEtBQUssQ0FBQ1osVUFBVSxHQUFHQSxVQUFVO0VBQ3RDO0FBRUosQ0FBQztBQUNETixNQUFNLENBQUNtQixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBVWYsQ0FBQyxFQUFFO0VBQzlDRCxRQUFRLENBQUNDLENBQUMsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBQ0ZKLE1BQU0sQ0FBQ21CLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFVZixDQUFDLEVBQUU7RUFDN0NELFFBQVEsQ0FBQ0MsQ0FBQyxFQUFFLENBQUMsRUFBRSx3QkFBd0IsQ0FBQztBQUM1QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yMDIzX21pY2hhZWxhaG9mZXIvLi90aGVtZXMvc3JjL2Fzc2V0cy9qcy9uYXYuanM/M2E2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJhcicpO1xyXG5jb25zdCBuYXZIb3ZlciA9IGZ1bmN0aW9uIChlLCBvcGFjaXR5LCB0cmFuc2l0aW9uKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2xpbmsnKSkge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCBzaWJsaW5nID0gbGluay5jbG9zZXN0KCcjbmF2LWJhcicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcclxuICAgICAgICBjb25zdCBsb2dvID0gbGluay5jbG9zZXN0KCcjbmF2LWJhcicpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tbG9nbycpO1xyXG5cclxuICAgICAgICBzaWJsaW5nLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwgIT09IGxpbmspIHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvZ28uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgbG9nby5zdHlsZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbn1cclxubmF2QmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBuYXZIb3ZlcihlLCAuNiwgJ29wYWNpdHkgZWFzZS1pbiAxNTBtcycpXHJcbn0pXHJcbm5hdkJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBuYXZIb3ZlcihlLCAxLCAnb3BhY2l0eSBlYXNlLW91dCAxNTBtcycpXHJcbn0pIl0sIm5hbWVzIjpbIm5hdkJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZIb3ZlciIsImUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibGluayIsInNpYmxpbmciLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImxvZ28iLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImVsIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./themes/src/assets/js/nav.js\n");

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