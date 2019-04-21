/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./css/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #edeef0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 12.5px;\n}\n\nheader{\n  position: sticky;\n  z-index: 2;\n  top: 0;\n  height: 42px;\n  background-color: #4a76a8;\n}\n\n/********** Стили для header *********/\n\n.header__wrapper{\n  display: flex;\n  justify-content: space-between;\n  width: 960px;\n  margin: 0 auto;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  width: 500px;\n}\n\n.header__logo{\n  margin: 11px 10px 0 0;\n}\n\n.header__search{\n  margin-left: 120px;\n  margin-top: 7px;\n}\n\n.header__search input{\n  font-family: 'Roboto', sans-serif;\n  width: 230px;\n  height: 28px;\n  background-color: #224b7a;\n  background-image: url(\"https://vk.com/images/svg_icons/ic_head_loupe.svg\");\n  background-repeat: no-repeat;\n  background-position: 10px;\n  border: transparent;\n  padding-left: 27px;\n  border-radius: 14px;\n  color: #d9e2ec;\n  -webkit-border-radius: 14px;\n  -moz-border-radius: 14px;\n  -ms-border-radius: 14px;\n  -o-border-radius: 14px;\n}\n\n.header__search input:focus{\n  background-color: #fff;\n  outline: none;\n}\n\n.header__nav{\n  display: flex;\n  padding-left: 20px;\n}\n\n.nav__item{\n  padding-top: 10px;\n  padding-left: 15px;\n  width: 35px;\n}\n\n.nav__item:hover{\n  width: 35px;\n  height: 32px;\n  cursor: pointer;\n  background-color: #3d6898;\n}\n\n.nav__play{\n  position: relative;\n  margin-top: 8px;\n  border-radius: 4px;\n  width: 25px;\n  height: 25px;\n  background-color: #224b7a;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n}\n\n.nav__play:hover{\n  cursor: pointer;\n}\n\n.nav__play::before{\n  content: \"\";\n  position: absolute;\n  left: -3px;\n  top: 7px;\n  width: 10px;\n  height: 10px;\n  background-color: #224b7a;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n\n.nav__play i{\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%,-50%);\n  color: rgb(207, 207, 207);\n  -webkit-transform: translate(-50%,-50%);\n  -moz-transform: translate(-50%,-50%);\n  -ms-transform: translate(-50%,-50%);\n  -o-transform: translate(-50%,-50%);\n}\n\n.header__profile{\n   display: flex;\n   justify-content: flex-end;\n}\n\n.header__profile:hover{\n  background-color: #3d6898;\n  cursor: pointer;\n  padding-left: 10px;\n}\n\n.profile__name{\n  color: #fff;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n\n.profile__image img{\n  margin-top: 5px;\n  width: 30px;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n}\n\n.profile__arrow{\n  color: rgb(207, 207, 207);\n  margin-top: 10px;\n}\n\n/************** клас для центровки контента*****/\n\n.img-item {\n  display: inline-block;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: transform;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -moz-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transition: 1s;\n  -webkit-transition: 1s;\n  -moz-transition: 1s;\n  -ms-transition: 1s;\n  -o-transition: 1s;\n  width: 170px;\n  height: 170px;\n}\n\n.img-item:hover {\n  cursor: pointer;\n  transform: scale(1.10);\n  z-index: 1;\n  transition: 1s;\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\n  -webkit-transition: 1s;\n  -moz-transition: 1s;\n  -ms-transition: 1s;\n  -o-transition: 1s;\n  -webkit-transform: scale(1.10);\n  -moz-transform: scale(1.10);\n  -ms-transform: scale(1.10);\n  -o-transform: scale(1.10);\n  width: 170px;\n  height: 170px;\n  border-radius: 20%;\n  -webkit-border-radius: 20%;\n  -moz-border-radius: 20%;\n  -ms-border-radius: 20%;\n  -o-border-radius: 20%;\n}\n\n.content__wrapper{\n  width: 960px;\n  margin: 0 auto;\n}\n\n.content{\n  margin-top: 15px;\n  display: flex;\n}\n\n.content_photo{\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.content-photo__item{\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 30%;\n  height: 20%;\n}\n\n/******* описываем левую часть*****/\n\n.content__left{\n  position: relative;\n  width: 149px;\n  height: 100%;\n}\n\n.content__left ul{\n  padding-left: 0px;\n}\n.content__left li{\n  font-size: 12.5px;\n  list-style: none;\n  color: #285473;\n}\n\n.content__left li:hover{\n  background-color: rgba(0, 33, 255, 0.09);\n  cursor: pointer;\n\n}\n\n.content__left i{\n  font-size: 17px;\n  line-height: 30px;\n  margin-right: 10px;\n  opacity: 0.55;\n  color: #224b7a;\n}\n\n.numb_row{\n  position: relative;\n  display: flex;\n  line-height: 35px;\n}\n\n.numb_row span{\n  position: absolute;\n  right: 2px;\n}\n\n/* описываем блок друзей */\n\n.content-photo__friends {\n  position: relative;\n  overflow: hidden;\n  margin: 6px;\n  height: 170px;\n  width: 170px;\n}\n\n.content-photo__friends:hover .content-photo__item-name {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  transform: translateX(0);\n  -webkit-transform: translateX(0);\n  -moz-transform: translateX(0);\n  -ms-transform: translateX(0);\n  -o-transform: translateX(0);\n  transition: 1s;\n  -webkit-transition: 1s;\n  -moz-transition: 1s;\n  -ms-transition: 1s;\n  -o-transition: 1s;\n}\n\n.content-photo__item-name {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  color: white;\n  font-weight: bold;\n  transform: translateX(-110%);\n  -webkit-transform: translateX(-110%);\n  -moz-transform: translateX(-110%);\n  -ms-transform: translateX(-110%);\n  -o-transform: translateX(-110%);\n  transition: 1s;\n  -webkit-transition: 1s;\n  -moz-transition: 1s;\n  -ms-transition: 1s;\n  -o-transition: 1s;\n}\n\n/****** описываем центральную часть******/\n\n.mid__list{\n  display: flex;\n  justify-content: space-between;\n}\n\n.content__mid{\n  width: 550px;\n  height: 100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  background-color: #fff;\n}\n\n.content__header{\n  display: flex;\n}\n\n.header__name{\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-left: 20px;\n  line-height: 15px;\n  color: #224b7a;\n}\n\n.header__name span{\n  text-transform: uppercase;\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.content__logo{\n  margin-top: 15px;\n  margin-left: 15px;\n}\n\n.content__logo img{\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n}\n\n.content__title{\n  margin: 5px;\n}\n\n.content__text{\n  margin: 5px;\n}\n\n.content__stats-wrapper{\n  display: flex;\n  justify-content: space-between;\n}\n\n.content__stats{\n  display: flex;\n}\n\n.stats__comment{\n  display: flex;\n}\n\n.stats__post{\n  display: flex;\n}\n\n.content__stats i{\n  line-height: 45px;\n  margin-left: 20px;\n  font-size: 20px;\n  color: grey;\n}\n\n.content__stats p{\n  margin-left: 10px;\n  font-size: 15px;\n  color: grey;\n}\n\n.stats__like{\n  display: flex;\n}\n\n.content__views{\n  display: flex;\n  margin-right: 40px;\n}\n.content__views i{\n  font-size: 20px;\n  line-height: 45px;\n  color: grey;\n}\n\n.content__views p{\n  margin-left: 10px;\n  font-size: 15px;\n  color: grey;\n}\n\n.content__video{\n  display: flex;\n}\n\n.video__left img{\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 400px;\n  width: 250px;\n}\n\n.video__right img{\n  margin-bottom: 10px;\n  width: 250px;\n  height: 190px;\n\n}\n\n/***** модификатор для первых двух столбцов******/\n.content_column{\n  display: flex;\n  flex-direction: column;\n}\n\n/******** правая часть фиксированная **************/\n\n.content__right{\n  position: fixed;\n  width: 230px;\n  height: 340px;\n  background-color: #fff;\n}\n\n.content__right ul{\n  padding-left: 0px;\n}\n\n.content__right li{\n  padding-left: 10px;\n  list-style: none;\n  height: 31px;\n  font-size: 12.5px;\n  line-height: 30px;\n  color: #285473;\n}\n\n/********* модификатор для выбранного поля*********/\n\n.content__right_checked{\n  border-left: 2px solid #4a76a8;\n  background-color: rgba(0, 33, 255, 0.09);\n  font-weight: bold;\n}\n\n.content__right_padding li{\n  padding-left: 30px;\n  color: grey;\n}\n\n.content__right_flex{\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n\n/************ класс для вставки нежней границы в список ****************/\n.border{\n  margin-top: 15px;\n  margin-right: 10px;\n  border-top: 1px solid rgb(207, 207, 207);\n}\n\n.content__right_active li:hover{\n  background-color: rgba(0, 33, 255, 0.09);\n  cursor: pointer;\n}\n\n.filter{\n  color: #224b7a;\n  opacity: 0.55;\n}\n\n.interest{\n  display: flex;\n  justify-content: space-around;\n  margin-top: 30px;\n  height: 40px;\n  background-color: #fff;\n}\n\n.interest__title{\n  padding-top: 5px;\n}\n\n.interest__title i{\n  font-size: 20px;\n  color: #d64c10;\n}\n\n.interest__check{\n  padding-top: 7px;\n}\n\n/*********** нижний блок с чатом ******************/\n\n.chat{\n  position: fixed;\n  height: 90px;\n  width: 50px;\n  bottom: 0;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: rgba(0, 33, 255, 0.09);\n}\n\n.chat__image img{\n  padding-left: 5px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.chat__profile{\n  padding-left: 7px;\n  color: #224b7a;\n  opacity: 0.55;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/service */ "./src/helper/service.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view */ "./src/view/view.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/model */ "./src/model/model.js");




	const controller = function() {
		let	service = new _helper_service__WEBPACK_IMPORTED_MODULE_0__["default"]();
		let view = new _view_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
		let model = new _model_model__WEBPACK_IMPORTED_MODULE_2__["default"]();
		let loadFriends = document.getElementById("loadFriends");
			loadFriends.addEventListener("click", function(){
		
		service.getDataServer();
		let data = model.getFriendsData();
		view.removeDataInPage();
		view.showFriendsData(data);
		view.showFriendsCount(data);

		service.getDataUserServer();
		let dataUser = model.getUserData();
		view.insertUserData(dataUser);
	});

}


/* harmony default export */ __webpack_exports__["default"] = (controller);

/***/ }),

/***/ "./src/controller/controllerPhotos.js":
/*!********************************************!*\
  !*** ./src/controller/controllerPhotos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/view */ "./src/view/view.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/model */ "./src/model/model.js");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/service */ "./src/helper/service.js");




const showUserPhotos = function() {
    let view = new _view_view__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let model = new _model_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let service = new _helper_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let loadUserPhotos = document.getElementById("loadPhotos");
    loadUserPhotos.addEventListener("click", function() {
        
    service.getPhotoUserServer();
    let dataPhoto = model.getUserPhotos();
    view.removeDataInPage();
    view.showUserPhotos(dataPhoto);

    let dataUser = model.getUserData();
    view.insertUserData(dataUser);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (showUserPhotos);

/***/ }),

/***/ "./src/helper/service.js":
/*!*******************************!*\
  !*** ./src/helper/service.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Service {

	getDataServer(){
		$.ajax({
				url: "https://api.vk.com/method/friends.get?fields=photo_200,sex,bdate,city,country,online,education,universities,schools,relation&access_token=e6c4a3a03eda8ffd19814c612dd8c67d80775e9de768fd6d75d8664b43e62aeb3bd4327839b6008912b95&v=V",
				method: "GET",
				dataType: "JSONP",
				success: function(data){
					localStorage.setItem("objectUserFriends",JSON.stringify(data));
			}
		});
	}

	getDataUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/users.get?fields=photo_50,photos,sex,bdate,city,country,online,education,universities,schools,relation&access_token=e6c4a3a03eda8ffd19814c612dd8c67d80775e9de768fd6d75d8664b43e62aeb3bd4327839b6008912b95&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUser",JSON.stringify(data));
			}
		});
	}

	getPhotoUserServer(){
		$.ajax({
			url: "https://api.vk.com/method/photos.get?album_id=profile&access_token=e6c4a3a03eda8ffd19814c612dd8c67d80775e9de768fd6d75d8664b43e62aeb3bd4327839b6008912b95&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				localStorage.setItem("objectUserPhotos",JSON.stringify(data));
			}
		});
	}
}
/* harmony default export */ __webpack_exports__["default"] = (Service);











/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/controller/controller */ "./src/controller/controller.js");
/* harmony import */ var _src_controller_controllerPhotos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/controller/controllerPhotos */ "./src/controller/controllerPhotos.js");






Object(_src_controller_controller__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_src_controller_controllerPhotos__WEBPACK_IMPORTED_MODULE_2__["default"])();







/***/ }),

/***/ "./src/model/model.js":
/*!****************************!*\
  !*** ./src/model/model.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Model {
    constructor(){}
        getFriendsData(){
            const data = JSON.parse(localStorage.getItem("objectUserFriends"));
            return data;
        }

        getUserData(){
            const data = JSON.parse(localStorage.getItem("objectUser"));
            const dataUser = data.response[0];
            return dataUser;
        }

        getUserPhotos(){
            const data = JSON.parse(localStorage.getItem("objectUserPhotos"));
            return data;
        }
}

/* harmony default export */ __webpack_exports__["default"] = (Model);   

/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class View {
    constructor(){}

    removeDataInPage(){
        let contentPage = document.getElementById("contentPage");
        contentPage.remove();
        let contentPageTwo = document.getElementById("contentPageTwo");
        contentPageTwo.remove();
        let contentTitle = document.getElementById("contentTitle");
        contentTitle.remove();
        let contentText = document.getElementById("contentText");
        contentText.remove();
        let divPhoto = document.getElementById("friendsPhoto"),
            divPhotoImg = divPhoto.getElementsByTagName("img"),
            divPhotoImgArray = [].slice.call(divPhotoImg);
        divPhotoImgArray.forEach(item => {
            item.remove();
        });
    }

    showFriendsData(data){
        try {
            let dataArray = data.response;
            dataArray.forEach(item => {
                let divPhotoInsert = document.getElementById("friendsPhoto");
                
                if (!(item.photo_200 == undefined)) {
                    let photoItem = document.createElement("div");
                        photoItem.classList.add("content-photo__friends");
                    let photoItemName = document.createElement("div");
                        photoItemName.classList.add("content-photo__item-name");
                        photoItemName.append(item.first_name + " " + item.last_name);
                    let img = document.createElement("img");
                        img.classList.add("img-item");
                        img.setAttribute("src", item.photo_200);
                    photoItem.append(img);
                    photoItem.append(photoItemName);
                    divPhotoInsert.append(photoItem);
                }
            });
        } catch (error) {
            alert("Данные не полученны");
        }
    }

    showFriendsCount(data){
        let dataArray = data.response;
        let count = dataArray.length;
        let friendsCount = document.getElementById("friendsCount");
        friendsCount.append(count);
    }

    insertUserData(dataUser){
        let userPhoto = document.getElementById("userPhoto");
        userPhoto.setAttribute("src", dataUser.photo_50);
        let user = document.getElementById("userName");
        user.remove();
        let headerName = document.getElementById("headerName");
        let userName = document.createElement("span");
        userName.append(dataUser.last_name + " " + dataUser.first_name);
        headerName.append(userName);
        let time = document.getElementById("userTime");
        time.remove();
        let nowTime = new Date();
        let userTime = document.createElement("span");
        userTime.append(" " + "сегодня в " + nowTime.getHours() + " : " + nowTime.getMinutes());
        headerName.append(userTime);
    }

    showUserPhotos(dataPhotos){
        let dataPhotosArray = dataPhotos.response;
        dataPhotosArray.forEach(item => {
            let divPhotoInsert = document.getElementById("friendsPhoto");
            let photoItem = document.createElement("div");
            photoItem.classList.add("content-photo__friends");
            let photoItemName = document.createElement("div");
            let img = document.createElement("img");
            img.classList.add("img-item");
            img.setAttribute("src", item.src_xxbig);
        photoItem.append(img);
        photoItem.append(photoItemName);
        divPhotoInsert.append(photoItem);

        });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map