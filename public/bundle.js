/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _viewSectionDatas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewSectionDatas */ \"./src/viewSectionDatas.js\");\n/* harmony import */ var _utils_utilityFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utilityFuncs */ \"./src/utils/utilityFuncs.js\");\n\r\n\r\n\r\n/* creates and return page section tags */\r\n\r\n/* scroll between sections handlers */\r\n\r\nconst container = document.getElementById(\"container\");\r\n\r\nconst slider = {\r\n  sections: document.getElementsByClassName(\"view-section\"),\r\n  handle: null,\r\n  idle: true,\r\n  activeIndex: 0,\r\n  total: _viewSectionDatas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length / 2,\r\n};\r\n\r\nconst stopAutoPlay = function () {\r\n  setTimeout(() => {\r\n    slider.idle = true;\r\n  }, 1000);\r\n};\r\n\r\nconst checkSections = function () {\r\n  for (let i = 0; i < _viewSectionDatas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i++) {\r\n    const childElement = container.children;\r\n\r\n    if (i === slider.activeIndex) {\r\n      childElement[i].style.transform = \"\";\r\n    } else if (i > slider.activeIndex) {\r\n      childElement[i].style.transform = \"translate3d(0,100%,0)\";\r\n    } else if (i < slider.activeIndex) {\r\n      childElement[i].style.transform = \"translate3d(0,-100%,0)\";\r\n    }\r\n  }\r\n};\r\n\r\nconst changeSection = (direction) => {\r\n  slider.idle = false;\r\n  slider.sections[slider.activeIndex].classList.remove(\"active\");\r\n  if (direction === \"down\") {\r\n    slider.activeIndex =\r\n      slider.activeIndex + 1 > _viewSectionDatas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1\r\n        ? slider.activeIndex\r\n        : slider.activeIndex + 1;\r\n  } else {\r\n    slider.activeIndex =\r\n      slider.activeIndex - 1 < 0 ? slider.activeIndex : slider.activeIndex - 1;\r\n  }\r\n  slider.sections[slider.activeIndex].classList.add(\"active\");\r\n  checkSections();\r\n  console.log(slider.activeIndex);\r\n};\r\n\r\nconst wheelControl = () => {\r\n  container.addEventListener(\"wheel\", (e) => {\r\n    if (slider.idle) {\r\n      const direction = e.deltaY > 0 ? \"down\" : \"up\";\r\n      stopAutoPlay();\r\n      changeSection(direction);\r\n    }\r\n  });\r\n};\r\n\r\nconst touchControl = function () {\r\n  const touchStart = (e) => {\r\n    slider.ts = parseInt(e.changedTouches[0].clientY);\r\n  };\r\n\r\n  const touchMove = (e) => {\r\n    slider.tm = parseInt(e.changedTouches[0].clientY);\r\n    const delta = slider.tm - slider.ts;\r\n\r\n    if (slider.idle) {\r\n      const direction = delta < 0 ? \"down\" : \"up\";\r\n      stopAutoPlay();\r\n      changeSection(direction);\r\n    }\r\n  };\r\n\r\n  container.addEventListener(\"touchstart\", touchStart);\r\n  container.addEventListener(\"touchmove\", touchMove);\r\n};\r\n\r\nconst start = function () {\r\n  wheelControl();\r\n  window.innerWidth <= 1024 && touchControl();\r\n\r\n  checkSections();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://personal-portofolio-page/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _viewSectionDatas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewSectionDatas */ \"./src/viewSectionDatas.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\n\r\n/* adding all the section tags into the container tag or element */\r\n\r\nfunction createSectionTags() {\r\n  return _viewSectionDatas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(({ id, background }) => {\r\n    const sectionTag = document.createElement(\"section\");\r\n\r\n    sectionTag.className = `view-section view-${id} ${background}${\r\n      id === 1 ? \" active\" : \"\"\r\n    }`;\r\n\r\n    return sectionTag;\r\n  });\r\n}\r\n\r\nconst container = document.getElementById(\"container\");\r\n\r\ncreateSectionTags().forEach((element) => container.append(element));\r\n\r\n(0,_app__WEBPACK_IMPORTED_MODULE_1__.start)();\r\n\n\n//# sourceURL=webpack://personal-portofolio-page/./src/index.js?");

/***/ }),

/***/ "./src/utils/utilityFuncs.js":
/*!***********************************!*\
  !*** ./src/utils/utilityFuncs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ utils)\n/* harmony export */ });\n/* utility functions */\r\n\r\nfunction utils() {\r\n  /**\r\n   * @param {NodeList}\r\n   */\r\n\r\n  const calcMaxHeight = function (items) {\r\n    let maxHeight = 0;\r\n\r\n    items.forEach((item) => {\r\n      const h = item.clientHeight;\r\n      maxHeight = h > maxHeight ? h : maxHeight;\r\n    });\r\n    return maxHeight;\r\n  };\r\n\r\n  /**\r\n   * @param {function}\r\n   * @param {int}\r\n   */\r\n\r\n  const requestInterval = function (fn, delay) {\r\n    const requestAnimFrame = (function () {\r\n      return (\r\n        window.requestAnimationFrame ||\r\n        function (callback, element) {\r\n          window.setTimeout(callback, 1000 / 60);\r\n        }\r\n      );\r\n    })();\r\n\r\n    let start = new Date().getTime(),\r\n      handle = {};\r\n\r\n    function loop() {\r\n      const current = new Date().getTime(),\r\n        delta = current - start;\r\n\r\n      if (delta >= delay) {\r\n        fn.call();\r\n        start = new Date().getTime();\r\n      }\r\n\r\n      handle.value = requestAnimFrame(loop);\r\n    }\r\n\r\n    handle.value = requestAnimFrame(loop);\r\n\r\n    return handle;\r\n  };\r\n\r\n  /**\r\n   * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance\r\n   * @param {int|object} handle The callback function\r\n   */\r\n  const clearRequestInterval = function (handle) {\r\n    window.cancelAnimationFrame\r\n      ? window.cancelAnimationFrame(handle.value)\r\n      : clearInterval(handle);\r\n  };\r\n\r\n  return {\r\n    calcMaxHeight,\r\n    requestInterval,\r\n    clearRequestInterval,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://personal-portofolio-page/./src/utils/utilityFuncs.js?");

/***/ }),

/***/ "./src/viewSectionDatas.js":
/*!*********************************!*\
  !*** ./src/viewSectionDatas.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst viewSectionDatas = [\r\n  { id: 1, background: \"main-black\" },\r\n  { id: 2, background: \"main-white\" },\r\n  { id: 3, background: \"main-gradient\" },\r\n  { id: 4, background: \"main-white\" },\r\n  { id: 5, background: \"main-black\" },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewSectionDatas);\r\n\n\n//# sourceURL=webpack://personal-portofolio-page/./src/viewSectionDatas.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;