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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/edit.png */ \"./src/images/edit.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.png */ \"./src/images/delete.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/add.png */ \"./src/images/add.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/confirm.png */ \"./src/images/confirm.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cancel.png */ \"./src/images/cancel.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  border: 0;\\n  padding: 0;\\n  font-family: 'Source Sans 3', sans-serif;\\n  font-size: 1rem;\\n  color: rgb(141, 141, 141);\\n\\n  /* border: solid 1px rgba(0, 0, 0, 0.2); */\\n}\\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: grey;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.content {\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgb(51, 51, 51);\\n\\n  display: grid;\\n  grid-template-rows: 45px 1fr;\\n}\\n\\n/* NAVBAR */\\n\\n.navbar {\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.4);\\n\\n  display: grid;\\n  grid-template-columns: auto 1fr auto;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 15px;\\n  padding: 7.5px 22.5px;\\n}\\n\\n.navbar > div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 5px;\\n}\\n\\n.app-name {\\n  padding-top: 3px;\\n  font-size: 1.5rem;\\n  color: rgba(255, 255, 255, 0.8);\\n  font-weight: 900;\\n}\\n\\n.app-icon {\\n  background-image: url(https://cdn-icons-png.flaticon.com/512/1159/1159633.png);\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n\\n  filter: invert(1);\\n  width: 20px;\\n  height: 20px;\\n  margin-right: 8px;\\n}\\n\\n.user-name {\\n  color: transparent;\\n}\\n\\n/* MAIN BODY */\\n\\n.main-body {\\n  padding: 25px;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, 275px);\\n  grid-template-rows: repeat(5, 1fr);\\n  gap: 15px;\\n\\n  overflow: scroll;\\n}\\n\\n.project-container,\\n.add-project-container,\\n.confirm-container {\\n  height: fit-content;\\n  background-color: rgba(230, 230, 230, 0.9);\\n\\n  padding: 10px;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n\\n  border-radius: 5px;\\n}\\n\\n.add-project-container {\\n  min-height: 97.5px;\\n}\\n\\n.add-project-container > .add-container > .add-button {\\n  min-height: 82.5px;\\n  background-color: rgba(255, 255, 255, 0.541);\\n  border-radius: 5px;\\n}\\n\\n.top-project {\\n  display: grid;\\n  grid-template-columns: 1fr auto;\\n  column-gap: 10px;\\n  min-height: 30px;\\n}\\n\\n.top-project > .button-container {\\n  margin-top: 5px;\\n}\\n\\n.project-name {\\n  width: 100%;\\n  font-weight: 700;\\n  font-size: 1.5rem;\\n  padding: 0 2.5px;\\n  color: rgba(0, 0, 0, 0.55);\\n  letter-spacing: -0.3px;\\n  /* line-height: 1.65rem; */\\n}\\n\\n.list-container,\\n.add-input-container,\\n.edit-input-container,\\n.confirm-container {\\n  width: 255px;\\n  height: auto;\\n  background-color: rgba(255, 255, 255, 0.8);\\n  padding: 10px;\\n\\n  border-radius: 5px;\\n}\\n\\n.list-container > .edit-input-container,\\n.list-container > .confirm-container {\\n  transform: translateX(-13.5px);\\n  background-color: transparent;\\n}\\n\\n.edit-button,\\n.delete-button {\\n  cursor: pointer;\\n  width: 20px;\\n  height: 20px;\\n\\n  background-position: center;\\n  background-repeat: no-repeat;\\n\\n  opacity: 0.6;\\n  background-color: transparent;\\n}\\n\\n.edit-button:hover,\\n.delete-button:hover {\\n  opacity: 1;\\n}\\n\\n.edit-button {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 15px;\\n}\\n\\n.delete-button {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 14.5px;\\n}\\n\\n.add-container {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n\\n.submit-cancel-container,\\n.confirm-cancel-container {\\n  display: flex;\\n}\\n\\n.confirm-text,\\n.name-input {\\n  text-align: center;\\n  font-weight: 700;\\n  background-color: rgb(231, 231, 231);\\n  height: fit-content;\\n  padding: 5px;\\n}\\n\\n.add-button,\\n.submit-button,\\n.confirm-button,\\n.cancel-button {\\n  width: 100%;\\n  height: 25px;\\n\\n  background-position: center;\\n  background-repeat: no-repeat;\\n\\n  background-color: transparent;\\n  opacity: 0.6;\\n}\\n\\n.add-button:hover,\\n.submit-button:hover,\\n.confirm-button:hover,\\n.cancel-button:hover {\\n  opacity: 1;\\n}\\n\\n.add-button {\\n  height: 40px;\\n  background-size: 11.5px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.submit-button,\\n.confirm-button {\\n  background-size: 13.5px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  margin-top: 10px;\\n}\\n\\n.cancel-button {\\n  background-size: 11.5px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  margin-top: 10px;\\n}\\n\\ninput,\\n.priority-container,\\n.due-container {\\n  width: 100%;\\n  height: 1.9rem;\\n  padding: 2px 5px;\\n  margin-bottom: 2.5px;\\n  border: 0;\\n  border-radius: 3px;\\n  background-color: rgb(231, 231, 231);\\n}\\n\\n.text-input {\\n  overflow: visible;\\n}\\n\\n.mid-project {\\n  display: grid;\\n  gap: 5px;\\n  margin: 5px 0;\\n}\\n\\n.button-container,\\n.top-list {\\n  display: flex;\\n  justify-content: end;\\n  transform: translateY(-2px);\\n}\\n\\n.mid-list {\\n  display: grid;\\n  grid-template-columns: 17.5px 1fr 55px;\\n  grid-template-rows: auto auto;\\n}\\n\\n.mid-list > .list-title {\\n  grid-row: 1/2;\\n}\\n\\n.mid-list > .button-container {\\n  grid-row: 1/2;\\n  transform: translate(5px, -2px);\\n}\\n\\n.mid-list > .list-text {\\n  grid-column: 2/4;\\n}\\n\\n.checkbox-container {\\n  padding-top: 5px;\\n  grid-row: 1/3;\\n  height: 12px;\\n  width: 12px;\\n  border: solid 1px rgba(138, 138, 138, 0.3);\\n  border-radius: 4px;\\n  transform: translate(-2px, 4px);\\n}\\n\\n.checkbox-container:hover::after {\\n  content: '✓';\\n  position: relative;\\n  font-size: 2rem;\\n  color: rgb(92, 92, 92);\\n  top: -50px;\\n  left: -2px;\\n}\\n\\n.checkbox-container > input {\\n  visibility: hidden;\\n}\\n\\n.list-title {\\n  color: rgba(0, 0, 0, 0.6);\\n  font-weight: 700;\\n  font-size: 1.2rem;\\n  line-height: 1.5rem;\\n  min-height: 22.5px;\\n}\\n\\n.list-text {\\n  grid-column: 2/3;\\n  grid-row: 2/3;\\n  color: rgba(0, 0, 0, 0.4);\\n  font-weight: 500;\\n  line-height: 1.5rem;\\n}\\n\\n.bottom-list {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: end;\\n  justify-content: end;\\n  height: auto;\\n}\\n\\n.list-date,\\n.list-due,\\n.list-priority,\\n.list-status {\\n  color: rgba(0, 0, 0, 0.2);\\n  font-weight: 500;\\n  font-size: 0.9rem;\\n}\\n\\n.list-date {\\n  border-top: solid 1px rgba(128, 128, 128, 0.1);\\n  margin-top: 15px;\\n}\\n\\n.list-container {\\n  height: fit-content;\\n}\\n\\n.list-container > .button-container {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n.invisible {\\n  visibility: hidden;\\n}\\n\\n/* COLOR SCHEME PRIORITY */\\n.priority-high {\\n  border-left: solid 0.5px rgba(255, 0, 0, 0.5);\\n  border-right: solid 7px rgba(255, 0, 0, 0.5);\\n}\\n.priority-medium {\\n  border-left: solid 0.5px rgba(255, 166, 0, 0.5);\\n  border-right: solid 7px rgba(255, 166, 0, 0.5);\\n}\\n.priority-low {\\n  border-left: solid 0.5px rgba(0, 128, 0, 0.5);\\n  border-right: solid 7px rgba(0, 128, 0, 0.5);\\n}\\n.priority-zero {\\n  border-left: solid 0.5px rgba(97, 97, 97, 0.5);\\n  border-right: solid 7px rgba(97, 97, 97, 0.5);\\n}\\n.priority-zero > .mid-list > .list-title,\\n.priority-zero > .mid-list > .list-text {\\n  color: rgba(114, 114, 114, 0.4);\\n}\\n\\n.priority-zero > .mid-list > .button-container > .edit-button {\\n  display: none;\\n}\\n/* .priority-zero > .mid-list > .checkbox-container {\\n  pointer-events: none;\\n} */\\n\\n.priority-zero > .mid-list > .checkbox-container::after {\\n  content: '✓';\\n  position: relative;\\n  font-size: 2rem;\\n  color: rgba(92, 92, 92, 0.3);\\n  top: -50px;\\n  left: -2px;\\n}\\n\\n.priority-zero > .mid-list > .list-title::after {\\n  content: 'DONE';\\n  position: relative;\\n  display: inline;\\n\\n  top: -2px;\\n  margin-left: 5px;\\n  padding: 2px 4px 1px;\\n  font-size: 0.7rem;\\n  border-radius: 5px;\\n  background-color: rgba(128, 128, 128, 0.3);\\n  color: white;\\n}\\n\\n/* PRIORITY INPUT */\\n.priority-container {\\n  display: grid;\\n  grid-template-columns: 1fr repeat(3, 1fr 0);\\n  justify-content: start;\\n  align-items: center;\\n  color: grey;\\n}\\n\\n.priority {\\n  transform: translateY(-2px);\\n}\\n\\n.priority-input {\\n  background-color: rgb(255, 255, 255);\\n  height: 1.6rem;\\n  background-color: transparent;\\n  appearance: none;\\n  text-align: center;\\n  transform: translateY(-0.3px);\\n}\\n.priority-input:hover {\\n  background-color: rgba(201, 201, 201, 0.2);\\n}\\n\\n.priority-input-low:checked {\\n  background-color: rgba(0, 128, 0, 0.5);\\n  color: white;\\n}\\n.priority-input-medium:checked {\\n  background-color: rgba(255, 166, 0, 0.75);\\n  color: white;\\n}\\n.priority-input-high:checked {\\n  background-color: rgba(255, 0, 0, 0.5);\\n  color: white;\\n}\\n\\n/* DUE INPUT */\\n.due-container {\\n  display: grid;\\n  grid-template-columns: auto repeat(2, 40px 40px);\\n  gap: 2.5px;\\n}\\n\\n.due-container > input {\\n  height: 1.6rem;\\n  background-color: transparent;\\n  border: solid 1px rgba(128, 128, 128, 0.3);\\n}\\n\\n@media only screen and (max-width: 700px) {\\n  .navbar {\\n    grid-template-columns: 1fr 0 0;\\n    padding-left: 45px;\\n  }\\n  .main-body {\\n    justify-content: center;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/allFunctions.js":
/*!*****************************!*\
  !*** ./src/allFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   functions: () => (/* binding */ functions)\n/* harmony export */ });\nconst functions = (() => {\n  //  TESTER\n  const greet = () => 'Hello from functions city';\n  // UPPERCASE FIRST LETTER\n  const upperFirst = (string) => {\n    if (string === '') {\n      return string;\n    }\n    return string[0].toUpperCase() + string.slice(1);\n  };\n  // TIME CREATED\n  const timeCreation = () => {\n    let result = [];\n    result.push(\n      new Date().getHours(),\n      new Date().getMinutes(),\n      new Date().getDate(),\n      new Date().getMonth() + 1,\n      new Date().getFullYear()\n    );\n    return result;\n  };\n  // DISPLAY TIME\n  const displayTime = (timeArray, string) => {\n    if (string === 'time') {\n      return timeArray.slice(0, 2).join(':');\n    } else if (string === 'date') {\n      return timeArray.slice(2).join('/');\n    } else {\n      return `⏰ ${timeArray.slice(0, 2).join(':')} 📇 ${timeArray\n        .slice(2)\n        .join('/')}`;\n    }\n  };\n  // ELEMENT MAKER\n  const elMaker = (type, parent, text = '', ...classNames) => {\n    const element = document.createElement(type);\n    if (classNames) {\n      for (const className of classNames) {\n        element.classList.add(className);\n      }\n      element.innerText = text;\n      parent.appendChild(element);\n      return element;\n    }\n  };\n  // CHILD REMOVER\n  const childRemover = (parent) => {\n    while (parent.hasChildNodes()) {\n      parent.removeChild(parent.children[0]);\n    }\n  };\n  //NAVBAR\n  const makeNavbar = (parent) => {\n    const navbar = elMaker('div', parent, '', 'navbar');\n    const navStart = elMaker('div', navbar, '', 'nav-start');\n    const webIcon = elMaker('div', navStart, '', 'app-icon');\n    const webName = elMaker('div', navStart, 'TODO', 'app-name');\n    const navCenter = elMaker('div', navbar, '', 'nav-center');\n    const navEnd = elMaker('div', navbar, '', 'nav-end');\n    const usericon = elMaker('div', navEnd, '', 'user-icon');\n    const userName = elMaker('div', navEnd, 'nzxf', 'user-name');\n  };\n  // RECONSTRUCT ARRAY BASED ON PRIORITY LEVEL\n  const reList = (originalLists, scaleBasedOn) => {\n    let updatedList = [];\n    for (let i = 0; i < scaleBasedOn.length; i++) {\n      let scale = originalLists.filter((c) => c.priority === scaleBasedOn[i]);\n      for (let j = 0; j < scale.length; j++) {\n        updatedList.push(scale[j]);\n      }\n    }\n    return updatedList;\n  };\n  const reProject = (originalProjects) => { // dependancy = reList\n    let updatedProjects = [];\n    for (let i = 0; i < originalProjects.length; i++) {\n      updatedProjects.push({\n        name: originalProjects[i].name,\n        content: reList(originalProjects[i].content, [\n          'high',\n          'medium',\n          'low',\n          'zero',\n        ]),\n      });\n    }\n    return updatedProjects;\n  };\n  // SAVED DATA\n  const checkLocalData = (dataInput) => {\n    let data = '';\n    if (localStorage.getItem('user')) {\n      data = JSON.parse(localStorage.getItem('user'));\n    } else {\n      data = dataInput;\n    }\n    return data;\n  };\n\n  // CLOSURE\n  return {\n    greet,\n    upperFirst,\n    timeCreation,\n    displayTime,\n    childRemover,\n    elMaker,\n    makeNavbar,\n    reProject,\n    checkLocalData,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo/./src/allFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _seeds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seeds */ \"./src/seeds.js\");\n/* harmony import */ var _allFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allFunctions */ \"./src/allFunctions.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\nconst elMaker = _allFunctions__WEBPACK_IMPORTED_MODULE_2__.functions.elMaker;\nconst makeNavbar = _allFunctions__WEBPACK_IMPORTED_MODULE_2__.functions.makeNavbar;\nconst reProject = _allFunctions__WEBPACK_IMPORTED_MODULE_2__.functions.reProject;\nconst checkLocalData = _allFunctions__WEBPACK_IMPORTED_MODULE_2__.functions.checkLocalData;\n\n\n\nconst loadPage = (data) => {\n  const content = document.querySelector('.content');\n  // NAVBAR\n  makeNavbar(content);\n  const mainBody = elMaker('div', content, '', 'main-body');\n  // CONTENT\n  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fillData)(reProject(checkLocalData(data)), mainBody);\n};\n\nloadPage(_seeds__WEBPACK_IMPORTED_MODULE_1__.allProjects);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/seeds.js":
/*!**********************!*\
  !*** ./src/seeds.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProjects: () => (/* binding */ allProjects)\n/* harmony export */ });\n/* harmony import */ var _allFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allFunctions */ \"./src/allFunctions.js\");\n\nconst timeCreation = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.timeCreation;\n\n// Project Factory\nconst Project = (name, content) => {\n  undefined.name = name.toLowerCase()\n  return { name, content };\n};\n\nlet allProjects = [];\n\nconst addTask = (name, title, text, priority, status = 'in progress', due = [0,0,0,0,0], created = timeCreation()) => {\n  if (allProjects.find((project) => project.name == name.toLowerCase())) {\n    // console.log('Add it to the existed project');\n    let projectIndex = allProjects.findIndex((project) => project.name === name.toLowerCase());\n    allProjects[projectIndex].content.push({\n      title: title,\n      text: text,\n      priority: priority,\n      status: status,\n      due: due,\n      created: created,\n    });\n  } else {\n    // console.log('Uuuuh, this is a new project');\n    allProjects.push({\n      name: name.toLowerCase(),\n      content: [\n        {\n          title: title,\n          text: text,\n          priority: priority,\n          status: status,\n          due: due,\n          created: created,\n        },\n      ],\n    });\n  }\n};\n\n// USER MANUAL\naddTask('Your project', 'most important', 'task is sorted based on its priority', 'high');\naddTask('Your project', 'semi important', 'yellow task always goes after red', 'medium');\naddTask('Your project', 'not really important', 'green color for low priority task', 'low');\naddTask('Your project', 'completed one', 'put a checkmark to set task as done', 'zero', 'completed');\n\n// INPUT TESTER \n// full data (all mixed: upper+lowercase)\naddTask('personal', 'bookstore', 'Buy programming book', 'medium', 'in progress', [2, 23, 11, 5, 2023], [4, 23, 11, 5, 2023]);\n// no due date\naddTask('Personal', 'grocery', 'Bread, chips, and orange juice', 'low', 'in progress',[3, 54, 20, 9, 2023]);\naddTask('personal', 'Park', 'walk Shiro for 30 minutes', 'high','in progress', [2, 23, 11, 5, 2023]);\n// no created date & due date\naddTask('personal', 'house cleaning', 'Do laundry and dishes', 'zero', 'complete');\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/seeds.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillData: () => (/* binding */ fillData)\n/* harmony export */ });\n/* harmony import */ var _allFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allFunctions */ \"./src/allFunctions.js\");\n\nconst upperFirst = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.upperFirst;\nconst timeCreation = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.timeCreation;\nconst elMaker = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.elMaker;\nconst childRemover = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.childRemover;\nconst displayTime = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.displayTime;\nconst reProject = _allFunctions__WEBPACK_IMPORTED_MODULE_0__.functions.reProject;\n\n// CANCEL\nconst cancelButton = (data, parent) => {\n  const cancel = elMaker('div', parent, '', 'cancel-button');\n  cancel.addEventListener('mouseup', function () {\n    fillData(reProject(data), document.querySelector('.main-body'));\n  });\n};\n// DELETE\nconst deleteButton = (data, parent, indexProject, indexList) => {\n  const deleteBtn = elMaker('button', parent, '', 'delete-button');\n  // CONFIRM PROJECT DELETION\n  deleteBtn.addEventListener('mouseup', function () {\n    // AVOID MULTIPLE DELETE CONFIRMATION\n    fillData(data, document.querySelector('.main-body'));\n    // DELETING PROJECT\n    if (indexList === undefined) {\n      // CLEAR PARENT\n      const topProjectX = document.querySelector(\n        `.top-project-${indexProject}`\n      );\n      childRemover(topProjectX);\n      // CONFIRM DELETION PROMPT\n      const confirmContainer = elMaker(\n        'div',\n        topProjectX,\n        '',\n        'confirm-container'\n      );\n      elMaker(\n        'div',\n        confirmContainer,\n        `Delete '${upperFirst(data[indexProject].name)}' project and all the tasks inside it?`,\n        'confirm-text'\n      );\n      // CONFIRM DELETION BUTTONS\n      const buttonContainer = elMaker(\n        'div',\n        confirmContainer,\n        '',\n        'confirm-cancel-container'\n      );\n      cancelButton(data, buttonContainer);\n      const confirmButton = elMaker(\n        'div',\n        buttonContainer,\n        '',\n        'confirm-button'\n      );\n      confirmButton.addEventListener('mouseup', () =>\n        deleteData(data, indexProject, indexList)\n      );\n    } else {\n      // CLEAR PARENT\n      const listContainerX = document.querySelector(\n        `.list-container-${indexProject}-${indexList}`\n      );\n      childRemover(listContainerX);\n      // CONFIRM DELETION PROMPT\n      const confirmContainer = elMaker(\n        'div',\n        listContainerX,\n        '',\n        'confirm-container'\n      );\n      elMaker(\n        'div',\n        confirmContainer,\n        `Delete '${upperFirst(\n          data[indexProject].content[indexList].title\n        )}' task?`,\n        'confirm-text'\n      );\n      // CONFIRM DELETION BUTTONS\n      const buttonContainer = elMaker(\n        'div',\n        confirmContainer,\n        '',\n        'confirm-cancel-container'\n      );\n      cancelButton(data, buttonContainer);\n      const confirmButton = elMaker(\n        'div',\n        buttonContainer,\n        '',\n        'confirm-button'\n      );\n      confirmButton.addEventListener('mouseup', () =>\n        deleteData(data, indexProject, indexList)\n      );\n    }\n  });\n};\nconst deleteData = (data, indexProject, indexList) => {\n  if (indexList === undefined) {\n    // DELETE PROJECT DATA\n    data.splice(indexProject, 1);\n  } else {\n    // DELETE TASK DATA\n    data[indexProject].content.splice(indexList, 1);\n  }\n  // SAVED USER DATA\n  localStorage.setItem('user', JSON.stringify(data));\n  // UPDATE DATA DISPLAY\n  fillData(reProject(data), document.querySelector('.main-body')); // FILL MAINBODY NEW DATA\n};\n// INPUT: PRIORITY\nconst priorityMaker = (parent, scaleArray, defaultScale) => {\n  const priorityContainer = elMaker('div', parent, '', 'priority-container');\n  const priority = elMaker('div', priorityContainer, 'Priority:', 'priority');\n  for (let i = 0; i < scaleArray.length; i++) {\n    const radioInput = elMaker(\n      'input',\n      priorityContainer,\n      scaleArray[i],\n      'priority',\n      'priority-input',\n      `priority-input-${scaleArray[i]}`\n    );\n    radioInput.setAttribute('name', 'priority');\n    radioInput.setAttribute('type', 'radio');\n    radioInput.setAttribute('value', scaleArray[i]);\n    radioInput.id = `priority-${scaleArray[i]}`;\n\n    const label = elMaker(\n      'label',\n      priorityContainer,\n      '',\n      'priority-label',\n      `priority-label-${scaleArray[i]}`\n    );\n    label.setAttribute('for', `priority-${scaleArray[i]}`);\n    // DEFAULT\n    if (scaleArray[i] === defaultScale) {\n      radioInput.setAttribute('checked', '');\n    }\n  }\n};\n// INPUT: DUE\nconst dueMaker = (parent) => {\n  const dueContainer = elMaker('div', parent, '', 'due-container');\n  const dueIn = elMaker('div', dueContainer, 'Due in:');\n  const timeInput = elMaker('input', dueContainer, '00', 'time-input');\n  timeInput.setAttribute('type', 'number');\n  timeInput.setAttribute('value', '0');\n  timeInput.setAttribute('min', '0');\n  timeInput.setAttribute('max', '24');\n  const timeLabel = elMaker('label', dueContainer, 'hour(s)', 'time-label');\n  const dayInput = elMaker('input', dueContainer, '00', 'day-input');\n  dayInput.setAttribute('type', 'number');\n  dayInput.setAttribute('value', '0');\n  dayInput.setAttribute('min', '0');\n  dayInput.setAttribute('max', '30');\n  const dayLabel = elMaker('label', dueContainer, 'day(s)', 'day-label');\n};\n//PROCESS RAW TIME & DATE\nconst dueTranslator = (hourInput, dayInput) => {\n  if (hourInput == 0 && dayInput == 0) {\n    return [0, 0, 0, 0, 0];\n  } else {\n    // ADD MISSING PARTS\n    let hour = new Date().getHours() + parseInt(hourInput);\n    let minute = new Date().getMinutes();\n    let day = new Date().getDate() + parseInt(dayInput);\n    let month = new Date().getMonth();\n    let year = new Date().getFullYear();\n    // COMBINING INTO ONE FORMAT\n    const event = new Date(year, month, day, hour, minute, 0);\n    const optionD = { year: 'numeric', month: 'numeric', day: 'numeric' };\n    const optionT = { hour12: false };\n    const datePart = event.toLocaleDateString('en-GB', optionD);\n    const timePart = event.toLocaleTimeString(undefined, optionT);\n    // PARSE & PUT INTO ARRAY\n    const newDate = datePart.split('/').map((num) => parseInt(num));\n    const newTime = timePart.split(':', 2).map((num) => parseInt(num));\n    return newTime.concat(newDate);\n  }\n};\n// INPUT: STATUS\nconst checkboxMaker = (data, parent, indextProject, indexList) => {\n  const checkboxContainer = elMaker('label', parent, '', 'checkbox-container');\n  const checkbox = elMaker('input', checkboxContainer, '', 'checkbox');\n  checkbox.setAttribute('data-project', indextProject);\n  checkbox.setAttribute('data-list', indexList);\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.addEventListener('change', () => {\n    let currentStatus = data[indextProject].content[indexList].status;\n    if (currentStatus === 'in progress') {\n      data[indextProject].content[indexList].status = 'complete';\n      data[indextProject].content[indexList].priority = 'zero';\n    } else {\n      data[indextProject].content[indexList].status = 'in progress';\n      data[indextProject].content[indexList].priority = 'low';\n    }\n    // SAVED USER DATA\n    localStorage.setItem('user', JSON.stringify(data));\n    // UPDATE DATA DISPLAY\n    return fillData(reProject(data), document.querySelector('.main-body'));\n  });\n};\n// ADD SEQUENCE\nconst addButton = (data, parent, classNameArray, indexProject) => {\n  const addContainer = elMaker(\n    'div',\n    parent,\n    '',\n    'add-container',\n    `add-container-${indexProject}`\n  );\n  const addBtn = elMaker('button', addContainer, '', 'add-button');\n  addBtn.addEventListener('mouseup', function () {\n    fillData(data, document.querySelector('.main-body'));\n    const addContainerX = document.querySelector(\n      `.add-container-${indexProject}`\n    );\n    childRemover(addContainerX);\n    addInput(reProject(data), addContainerX, classNameArray, indexProject);\n  });\n};\nconst addInput = (data, parent, classNameArray, indexProject) => {\n  const addInputContainer = elMaker('form', parent, '', 'add-input-container');\n  if (classNameArray.includes('name')) {\n    const input = elMaker(\n      'input',\n      addInputContainer,\n      '',\n      `${classNameArray[0]}-input`,\n      'input'\n    );\n    input.placeholder = `project ${classNameArray[0]}`;\n  } else {\n    for (let i = 0; i < classNameArray.length; i++) {\n      const input = elMaker(\n        'input',\n        addInputContainer,\n        '',\n        `${classNameArray[i]}-input`,\n        'input'\n      );\n      input.placeholder = classNameArray[i];\n    }\n    priorityMaker(addInputContainer, ['low', 'medium', 'high'], 'low');\n    dueMaker(addInputContainer);\n  }\n\n  // CANCEL AND CONFIRM\n  const buttonContainer = elMaker(\n    'div',\n    addInputContainer,\n    '',\n    'submit-cancel-container'\n  );\n  cancelButton(data, buttonContainer);\n  submitAddButton(data, buttonContainer, indexProject);\n};\nconst submitAddButton = (data, parent, indexProject) => {\n  const submit = elMaker('button', parent, '', 'submit-button');\n  submit.addEventListener('mouseup', function (event) {\n    event.preventDefault();\n    // ADD PROJECT\n    if (!data[indexProject]) {\n      const nameInput = document.querySelector('.name-input').value;\n      // Avoid empty input\n      if (nameInput === '') {\n        data.push({ name: 'new project', content: [] });\n      } else {\n        // Normal Input\n        data.push({\n          name: nameInput,\n          content: [],\n        });\n      }\n    }\n    // ADD LIST\n    else if (data[indexProject].content) {\n      const titleInput = document.querySelector('.title-input').value;\n      const textInput = document.querySelector('.text-input').value;\n      const priorityInput = document.querySelector('.priority:checked').value;\n      const dueTimeInput = document.querySelector('.time-input').value;\n      const dueDayInput = document.querySelector('.day-input').value;\n\n      // Avoid empty input\n      if (titleInput === '' && textInput === '') {\n        data[indexProject].content.push({\n          title: 'new task',\n          text: '',\n          priority: priorityInput,\n          status: 'in progress',\n          created: timeCreation(),\n          due: dueTranslator(dueTimeInput, dueDayInput),\n        });\n      } else {\n        // normal input\n        data[indexProject].content.push({\n          title: titleInput,\n          text: textInput,\n          priority: priorityInput,\n          status: 'in progress',\n          created: timeCreation(),\n          due: dueTranslator(dueTimeInput, dueDayInput),\n        });\n      }\n    }\n    // SAVED USER DATA\n    localStorage.setItem('user', JSON.stringify(data));\n    // UPDATE DATA DISPLAY\n    return fillData(reProject(data), document.querySelector('.main-body'));\n  });\n};\n// EDIT SEQUENCE\nconst editButton = (data, parent, indexProject, indexList) => {\n  const editBtn = elMaker('button', parent, '', 'edit-button');\n  editBtn.addEventListener('mouseup', function () {\n    fillData(data, document.querySelector('.main-body'));\n    // PROJECT\n    if (indexList == undefined) {\n      const topProjectX = document.querySelector(\n        `.top-project-${indexProject}`\n      );\n      childRemover(topProjectX);\n      editInput(data, topProjectX, ['name'], indexProject, indexList);\n    } else {\n      // LIST\n      const listContainerX = document.querySelector(\n        `.list-container-${indexProject}-${indexList}`\n      );\n      childRemover(listContainerX);\n      editInput(\n        data,\n        listContainerX,\n        ['title', 'text'],\n        indexProject,\n        indexList\n      );\n    }\n  });\n};\nconst editInput = (data, parent, classNameArray, indexProject, indexList) => {\n  const editInputContainer = elMaker('div', parent, '', 'edit-input-container');\n  if (classNameArray.includes('name')) {\n    const input = elMaker(\n      'input',\n      editInputContainer,\n      '',\n      `${classNameArray[0]}-input`,\n      'input'\n    );\n    input.value = data[indexProject][classNameArray[0]];\n    input.placeholder = 'project name';\n  } else {\n    for (let i = 0; i < classNameArray.length; i++) {\n      const input = elMaker(\n        'input',\n        editInputContainer,\n        '',\n        `${classNameArray[i]}-input`,\n        'input'\n      );\n      input.value = data[indexProject].content[indexList][classNameArray[i]];\n      input.placeholder = classNameArray[i];\n    }\n    priorityMaker(\n      editInputContainer,\n      ['low', 'medium', 'high'],\n      data[indexProject].content[indexList]['priority']\n    );\n    dueMaker(editInputContainer);\n  }\n\n  const buttonContainer = elMaker(\n    'div',\n    editInputContainer,\n    '',\n    'submit-cancel-container'\n  );\n  cancelButton(data, buttonContainer);\n  submitEditButton(reProject(data), buttonContainer, indexProject, indexList);\n};\nconst submitEditButton = (data, parent, indexProject, indexList) => {\n  const submit = elMaker('button', parent, '', 'submit-button');\n  submit.addEventListener('mouseup', function (event) {\n    event.preventDefault();\n    // EDIT PROJECT\n    if (indexList == undefined) {\n      data.splice(indexProject, 1, {\n        name: document.querySelector('.name-input').value,\n        content: data[indexProject].content,\n      });\n    }\n    // EDIT LIST\n    else {\n      const dueTimeInput = document.querySelector('.time-input').value;\n      const dueDayInput = document.querySelector('.day-input').value;\n\n      data[indexProject].content.splice(indexList, 1, {\n        title: document.querySelector('.title-input').value,\n        text: document.querySelector('.text-input').value,\n        priority: document.querySelector('.priority:checked').value,\n        status: 'in progress',\n        created: timeCreation(),\n        due: dueTranslator(dueTimeInput, dueDayInput),\n      });\n    }\n    // SAVED USER DATA\n    localStorage.setItem('user', JSON.stringify(data));\n    // UPDATE DATA DISPLAY\n    return fillData(reProject(data), document.querySelector('.main-body'));\n  });\n};\n// DISPLAY DATA\nconst fillData = (data, parent) => {\n  childRemover(parent);\n  // FILL MAIN BODY\n  for (let i = 0; i < data.length; i++) {\n    const projectContainer = elMaker('div', parent, '', 'project-container');\n    // TOP PROJECT\n    const topProject = elMaker(\n      'div',\n      projectContainer,\n      '',\n      'top-project',\n      `top-project-${i}`\n    );\n    const projectName = elMaker(\n      'div',\n      topProject,\n      data[i].name.toUpperCase(),\n      'project-name'\n    );\n    const buttonContainer = elMaker(\n      'div',\n      topProject,\n      '',\n      'button-container',\n      'invisible'\n    );\n    editButton(data, buttonContainer, i);\n    deleteButton(data, buttonContainer, i);\n    // SHOW BUTTONS\n    topProject.addEventListener('mouseover', () => {\n      buttonContainer.classList.remove('invisible');\n    });\n    // HIDE BUTTONS\n    topProject.addEventListener('mouseleave', () => {\n      buttonContainer.classList.add('invisible');\n    });\n\n    // MID PROJECT: SHOW ALL TASKS\n    const midProject = elMaker('div', projectContainer, '', 'mid-project');\n    midProject.addEventListener('mouseover', (e) => e.stopPropagation());\n    if (data[i].content) {\n      for (let j = 0; j < data[i].content.length; j++) {\n        const listContainer = elMaker(\n          'div',\n          midProject,\n          '',\n          'list-container',\n          `list-container-${i}-${j}`,\n          `priority-${data[i].content[j].priority}`\n        );\n        // TOP LIST\n        // MID LIST\n        const midList = elMaker('div', listContainer, '', 'mid-list');\n        checkboxMaker(data, midList, i, j);\n        elMaker(\n          'div',\n          midList,\n          upperFirst(data[i].content[j].title),\n          'list-title'\n        );\n        const buttonContainer = elMaker(\n          'div',\n          midList,\n          '',\n          'button-container',\n          'invisible'\n        );\n        editButton(data, buttonContainer, i, j);\n        deleteButton(data, buttonContainer, i, j);\n        elMaker(\n          'div',\n          midList,\n          upperFirst(data[i].content[j].text),\n          'list-text'\n        );\n        // BOTTOM LIST\n        const bottomList = elMaker(\n          'div',\n          listContainer,\n          '',\n          'bottom-list',\n          'hidden'\n        );\n        elMaker(\n          'div',\n          bottomList,\n          `created ${displayTime(data[i].content[j].created)}`,\n          'list-date'\n        );\n        elMaker(\n          'div',\n          bottomList,\n          `due ${displayTime(data[i].content[j].due)}`,\n          'list-due'\n        );\n        elMaker(\n          'div',\n          bottomList,\n          `status: ${data[i].content[j].status}`,\n          'list-status'\n        );\n        elMaker(\n          'div',\n          bottomList,\n          `${data[i].content[j].priority} priority`,\n          'list-priority'\n        );\n        // SHOW BUTTONS\n        listContainer.addEventListener('mouseover', () => {\n          buttonContainer.classList.remove('invisible');\n        });\n        // HIDE BUTTONS\n        listContainer.addEventListener('mouseleave', () => {\n          buttonContainer.classList.add('invisible');\n        });\n        // CLICK FOR TASK DETAILS\n        listContainer.addEventListener('click', () => {\n          // const bottomLists = document.querySelectorAll('.list-container .hidden');\n          // bottomLists.forEach((el) => el.classList.add('hidden'));\n          bottomList.classList.toggle('hidden');\n        });\n      }\n    }\n    // BOTTOM PROJECT: ADD NEW TASK\n    const bottomProject = elMaker(\n      'div',\n      projectContainer,\n      '',\n      'bottom-project'\n    );\n    addButton(data, bottomProject, ['title', 'text'], i);\n    bottomProject.addEventListener('mouseup', function (e) {\n      e.stopPropagation();\n    });\n  }\n  // ADD NEW PROJECT\n  const addProjectContainer = elMaker(\n    'div',\n    parent,\n    '',\n    'add-project-container'\n  );\n  addButton(data, addProjectContainer, ['name']);\n  addProjectContainer.addEventListener('mouseover', function (e) {\n    e.stopPropagation();\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/utils.js?");

/***/ }),

/***/ "./src/images/add.png":
/*!****************************!*\
  !*** ./src/images/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a01ef2401a99c336a5cd.png\";\n\n//# sourceURL=webpack://todo/./src/images/add.png?");

/***/ }),

/***/ "./src/images/cancel.png":
/*!*******************************!*\
  !*** ./src/images/cancel.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9755d8d4161967bd46ce.png\";\n\n//# sourceURL=webpack://todo/./src/images/cancel.png?");

/***/ }),

/***/ "./src/images/confirm.png":
/*!********************************!*\
  !*** ./src/images/confirm.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61806922deece6e0224c.png\";\n\n//# sourceURL=webpack://todo/./src/images/confirm.png?");

/***/ }),

/***/ "./src/images/delete.png":
/*!*******************************!*\
  !*** ./src/images/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4dd28fae73d740dd01c2.png\";\n\n//# sourceURL=webpack://todo/./src/images/delete.png?");

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8a04509ce04d1bbe5fc.png\";\n\n//# sourceURL=webpack://todo/./src/images/edit.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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