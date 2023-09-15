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

/***/ "./js/animations/todoDone.js":
/*!***********************************!*\
  !*** ./js/animations/todoDone.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filter__todoes: () => (/* binding */ filter__todoes),\n/* harmony export */   putTasks: () => (/* binding */ putTasks),\n/* harmony export */   todoDone: () => (/* binding */ todoDone)\n/* harmony export */ });\nvar container = document.querySelector(\".card__container\");\nvar tasks = {};\nfunction todoDone() {\n  container.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"complete__button\")) {\n      var button = e.target;\n      continueFunction(button);\n    } else if (e.target.closest(\".complete__button\")) {\n      var _button = e.target.closest(\".complete__button\");\n      continueFunction(_button);\n    } else {\n      return;\n    }\n  });\n}\nfunction continueFunction(btn) {\n  var span = btn.children[0];\n  var card = btn.closest(\".card\");\n  span.classList.toggle(\"completed\");\n  span.classList.toggle(\"active\");\n  var text = card.querySelector(\".card_todo\");\n  text.classList.toggle(\"completed\");\n  text.classList.toggle(\"active\");\n  card.classList.toggle(\"completed\");\n  card.classList.toggle(\"active\");\n  if (card.classList.contains(\"completed\")) {\n    tasks[card.getAttribute(\"id\")].status = \"completed\";\n  } else {\n    tasks[card.getAttribute(\"id\")].status = \"active\";\n  }\n}\nvar filter__todoes = function filter__todoes(btn) {\n  container.textContent = \"\";\n  var id = btn.getAttribute(\"id\");\n  if (id === \"all\") {\n    Object.values(tasks).forEach(function (task) {\n      insertIntoHTMLHandler(task);\n    });\n  } else if (id === \"active\" || id === \"completed\") {\n    Object.values(tasks).forEach(function (task) {\n      if (task.status == id) {\n        insertIntoHTMLHandler(task);\n      } else {\n        return;\n      }\n    });\n  } else {\n    return;\n  }\n};\nvar generateId = function generateId() {\n  return Object.keys(tasks).length + 1;\n};\nvar putTasks = function putTasks(taskTodo, taskWriter) {\n  var id = generateId();\n  var obj = {\n    Id: id,\n    todo: taskTodo,\n    writer: taskWriter,\n    status: \"active\"\n  };\n  tasks[obj.Id] = obj;\n  var card = putTaskTemplate(obj);\n  container.insertAdjacentHTML(\"afterbegin\", card);\n  console.log(tasks);\n};\nvar insertIntoHTMLHandler = function insertIntoHTMLHandler(el) {\n  var card = putTaskTemplate(el);\n  container.insertAdjacentHTML(\"afterbegin\", card);\n};\nvar putTaskTemplate = function putTaskTemplate(task) {\n  return \"\\n  <div class=\\\"card \".concat(task.status, \"\\\" id=\\\"\").concat(task.Id, \"\\\">\\n    <button class=\\\"complete__button button\\\">\\n      <span class=\\\"\").concat(task.status, \"\\\"></span>\\n    </button>\\n    <div class=\\\"informations\\\">\\n      <div class=\\\"card_writer\\\">\").concat(task.writer, \":</div>\\n        <div class=\\\"card_todo \").concat(task.status, \"\\\">\").concat(task.todo, \"</div>\\n    </div>\\n  </div>\\n  \");\n};\n\n//# sourceURL=webpack:///./js/animations/todoDone.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _animations_todoDone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/todoDone */ \"./js/animations/todoDone.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ \"./js/form.js\");\n\n\n\nvar filter_container = document.querySelector(\".todo__list__filter\");\nfunction initProg() {\n  (0,_animations_todoDone__WEBPACK_IMPORTED_MODULE_1__.todoDone)();\n  (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.submitForm)();\n  filter_container.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"filter__btn\")) {\n      (0,_animations_todoDone__WEBPACK_IMPORTED_MODULE_1__.filter__todoes)(e.target);\n      filter_container.childNodes.forEach(function (el) {\n        if (el.nodeType == 3) {\n          return;\n        } else {\n          if (el.classList.contains(\"active\")) {\n            el.classList.remove(\"active\");\n          }\n        }\n      });\n      e.target.classList.add(\"active\");\n    } else {\n      return;\n    }\n  });\n}\ninitProg();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitForm: () => (/* binding */ submitForm)\n/* harmony export */ });\n/* harmony import */ var _animations_todoDone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/todoDone */ \"./js/animations/todoDone.js\");\n\nfunction submitForm() {\n  var form = document.forms[\"todoForm\"];\n  var todoInput = form[0];\n  var writerInput = form[1];\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var todoInputValue = todoInput.value;\n    var writeInputValue = writerInput.value;\n    if (!todoInputValue || !writeInputValue) {\n      showAlert(todoInputValue, writeInputValue);\n      return;\n    }\n    (0,_animations_todoDone__WEBPACK_IMPORTED_MODULE_0__.putTasks)(todoInputValue, writeInputValue);\n    form.reset();\n  });\n}\nvar showAlert = function showAlert(todo, writer) {\n  var msg = \"\";\n  if (!todo && writer) {\n    msg = \"please write a todo\";\n  } else if (!writer && todo) {\n    msg = \"please write a name\";\n  } else {\n    msg = \"please write a todo and a name\";\n  }\n  document.body.insertAdjacentHTML(\"afterbegin\", showAlertTEmplate(msg));\n  setTimeout(function () {\n    document.body.removeChild(document.body.children[0]);\n  }, 3000);\n};\nvar showAlertTEmplate = function showAlertTEmplate(msg) {\n  return \"\\n          <div class=\\\"alert\\\">\\n            <p class=\\\"alert__msg\\\">\".concat(msg, \"</p>\\n          </div>\\n        \");\n};\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;