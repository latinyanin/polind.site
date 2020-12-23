/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script.js */ "./js/script.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_5__);
/* jshint ignore:start */





 // jshint ignore:line


/* jshint ignore:end */

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

"use strict";
// Импортируем jQuery
//= ../../node_modules/jquery/dist/jquery.js
// Импортируем Popper
// = ../../node_modules/popper.js/dist/umd/popper.js
// Импортируем необходимые js-файлы Bootstrap 4
//= ../../node_modules/bootstrap/js/dist/util.js
// = ../../node_modules/bootstrap/js/dist/alert.js
// = ../../node_modules/bootstrap/js/dist/button.js
// = ../../node_modules/bootstrap/js/dist/carousel.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
// = ../../node_modules/bootstrap/js/dist/dropdown.js
// = ../../node_modules/bootstrap/js/dist/modal.js
// = ../../node_modules/bootstrap/js/dist/tooltip.js
// = ../../node_modules/bootstrap/js/dist/popover.js
// = ../../node_modules/bootstrap/js/dist/scrollspy.js
// = ../../node_modules/bootstrap/js/dist/tab.js
// = ../../node_modules/bootstrap/js/dist/toast.js
// Импортируем другие js-файлы


var hello = "World!";
console.log(hello);

/***/ }),

/***/ "./img/logo/logo_poland.svg":
/*!**********************************!*\
  !*** ./img/logo/logo_poland.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/logo_poland.svg");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/logo/logo_poland.svg */ "./img/logo/logo_poland.svg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <link rel=\"icon\" type=\"image/png\" sizes=\"64x64\" href=\"./favicon.png\">\n    <title>Poland</title>\n  </head>\n\n  <body>\n    <!-- h1 visualy hiden! -->\n    <h1 class=\"sr-only\">Travel to Poland</h1>\n\n    <!-- Navigation START-->\n    <nav class=\"container-fluid wrap-nav\">\n      <div class=\"container\">\n        <div class=\"navbar navbar-expand-md\">\n          <div class=\"navbar-brand clearfix\">\n            <a href=\"#\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" width=\"40\" height=\"60\" alt=\"\">\n              <span>Polind</span>\n            </a>\n          </div>\n          <!-- Navbar expand button -->\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <!-- Navbar expand button END-->\n\n          <!-- Navbar links -->\n          <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapsibleNavbar\">\n            <ul class=\"navbar-nav navigation-inner\">\n              <li class=\"nav-item ml-lg-4 ml-md-2\">\n                <a class=\"nav-link active\" href=\"#\">Home</a>\n              </li>\n\n              <li class=\"nav-item ml-lg-4 ml-md-2\">\n                <a class=\"nav-link\" href=\"#\">Guide</a>\n              </li>\n\n              <li class=\"nav-item ml-lg-4 ml-md-2\">\n                <a class=\"nav-link\" href=\"#\">Journey</a>\n              </li>\n\n              <li class=\"nav-item ml-lg-4 ml-md-2\">\n                <a class=\"nav-link\" href=\"#\">Hotels</a>\n              </li>\n\n              <li class=\"nav-item ml-lg-4 ml-md-2\">\n                <a class=\"nav-link\" href=\"#\">Trevelers</a>\n              </li>\n              <li class=\"nav-item ml-lg-4 ml-md-2\">\n                <a class=\"nav-link navbar-search\" href=\"#\"></a>\n              </li>\n            </ul>\n          </div>\n          <!-- Navbar links END -->\n\n        </div>\n      </div>\n    </nav>\n    <!-- Navigation END-->\n\n    <!-- Header START-->\n    <header class=\"container-fluid header\">\n      <div class=\"wrap-tagline\">\n        <p class=\"tagline-head\">\n          <strong>Fall in love<br><span>with Poland</span></strong>\n        </p>\n        <p class=\"tagline-desc\">Best way to find your perfect place in Poland</p>\n\n        <!-- Search your place -->\n        <div id=\"head-search\" class=\"head-search\">\n          <button class=\"head-search-btn\" type=\"button\">Searh your place</button>\n        </div>\n      </div>\n    </header>\n    <!-- Header END-->\n\n    <!-- Main START-->\n    <main>\n      <section class=\"pop-place\"></section>\n\n      <!-- h2 visualy hiden! -->\n      <h2 class=\"sr-only\">Popular places</h2>\n      <div class=\"container-md pop_place-galarey \">\n        <div class=\"row galarey-wrap\">\n          <div class=\"col-lg\">\n            <h3></h3>\n            <img src=\"#\" alt=\"\"><a href=\"#\"></a>\n          </div>\n\n          <div class=\"col-lg\">\n            <h3></h3>\n            <img src=\"#\" alt=\"\"><a href=\"#\"></a>\n          </div>\n\n          <div class=\"col-lg\">\n            <h3></h3>\n            <img src=\"#\" alt=\"\"><a href=\"#\"></a>\n          </div>\n\n          <div class=\"col-lg\">\n            <h3></h3>\n            <img src=\"#\" alt=\"\"><a href=\"#\"></a>\n          </div>\n\n          <div class=\"col-lg\">\n            <h3></h3>\n            <img src=\"#\" alt=\"\"><a href=\"#\"></a>\n          </div>\n        </div>\n      </div>\n\n    </main>\n    <!-- Main END-->\n\n    <footer></footer>\n  </body>\n\n</html>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/app.js","vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_focus-visible_dist_focus-vis-2b4ffa"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map