/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./themes/src/assets/js/nav.js":
/*!*************************************!*\
  !*** ./themes/src/assets/js/nav.js ***!
  \*************************************/
/***/ (function() {

eval("\n\n/////////\n// nav Hover\nvar navBar = document.getElementById('nav-bar');\nvar navHover = function navHover(e, opacity, transition) {\n  if (e.target.classList.contains('nav__link')) {\n    var link = e.target;\n    var sibling = link.closest('#nav-bar').querySelectorAll('.nav__link');\n    var logo = link.closest('#nav-bar').querySelector('.custom-logo');\n    sibling.forEach(function (el) {\n      if (el !== link) {\n        el.style.opacity = opacity;\n        el.style.transition = transition;\n      }\n    });\n    logo.style.opacity = opacity;\n    logo.style.transition = transition;\n  }\n};\nnavBar.addEventListener('mouseover', function (e) {\n  navHover(e, .6, 'opacity ease-in 150ms');\n});\nnavBar.addEventListener('mouseout', function (e) {\n  navHover(e, 1, 'opacity ease-out 150ms');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvc3JjL2Fzc2V0cy9qcy9uYXYuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ2pELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFhQyxDQUFDLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO0VBQy9DLElBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUN6QyxJQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQ0csTUFBTTtJQUNyQixJQUFNSSxPQUFPLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkUsSUFBTUMsSUFBSSxHQUFHSixJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUVuRUosT0FBTyxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ2xCLElBQUtBLEVBQUUsS0FBS1AsSUFBSSxFQUFFO1FBQ2RPLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDYixPQUFPLEdBQUdBLE9BQU87UUFDMUJZLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDWixVQUFVLEdBQUdBLFVBQVU7TUFDcEM7SUFDSixDQUFDLENBQUM7SUFDRlEsSUFBSSxDQUFDSSxLQUFLLENBQUNiLE9BQU8sR0FBR0EsT0FBTztJQUM1QlMsSUFBSSxDQUFDSSxLQUFLLENBQUNaLFVBQVUsR0FBR0EsVUFBVTtFQUN0QztBQUVKLENBQUM7QUFDRE4sTUFBTSxDQUFDbUIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVVmLENBQUMsRUFBRTtFQUM5Q0QsUUFBUSxDQUFDQyxDQUFDLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUNGSixNQUFNLENBQUNtQixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBVWYsQ0FBQyxFQUFFO0VBQzdDRCxRQUFRLENBQUNDLENBQUMsRUFBRSxDQUFDLEVBQUUsd0JBQXdCLENBQUM7QUFDNUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjAyM19taWNoYWVsYWhvZmVyX3dlYnNpdGUtdWViZXJhcmJlaXR1bmcvLi90aGVtZXMvc3JjL2Fzc2V0cy9qcy9uYXYuanM/M2E2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLy8vLy8vLy9cclxuLy8gbmF2IEhvdmVyXHJcblxyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJhcicpO1xyXG5jb25zdCBuYXZIb3ZlciA9IGZ1bmN0aW9uIChlLCBvcGFjaXR5LCB0cmFuc2l0aW9uKSB7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fbGluaycpKSB7XHJcbiAgICAgICAgY29uc3QgbGluayA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBsaW5rLmNsb3Nlc3QoJyNuYXYtYmFyJykucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xyXG4gICAgICAgIGNvbnN0IGxvZ28gPSBsaW5rLmNsb3Nlc3QoJyNuYXYtYmFyJykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1sb2dvJyk7XHJcblxyXG4gICAgICAgIHNpYmxpbmcuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmICggZWwgIT09IGxpbmspIHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvZ28uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgbG9nby5zdHlsZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbn1cclxubmF2QmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBuYXZIb3ZlcihlLCAuNiwgJ29wYWNpdHkgZWFzZS1pbiAxNTBtcycpXHJcbn0pXHJcbm5hdkJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBuYXZIb3ZlcihlLCAxLCAnb3BhY2l0eSBlYXNlLW91dCAxNTBtcycpXHJcbn0pIl0sIm5hbWVzIjpbIm5hdkJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZIb3ZlciIsImUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibGluayIsInNpYmxpbmciLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImxvZ28iLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImVsIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./themes/src/assets/js/nav.js\n");

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