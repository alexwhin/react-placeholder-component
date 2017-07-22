module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagePlaceholder = function (_Component) {
  _inherits(ImagePlaceholder, _Component);

  function ImagePlaceholder() {
    _classCallCheck(this, ImagePlaceholder);

    return _possibleConstructorReturn(this, (ImagePlaceholder.__proto__ || Object.getPrototypeOf(ImagePlaceholder)).apply(this, arguments));
  }

  _createClass(ImagePlaceholder, [{
    key: 'render',
    value: function render() {
      var Sources = {
        'unsplashIt': 'https://unsplash.it/widthxheight',
        'placeHolder': 'http://via.placeholder.com/widthxheight',
        'placeImg': 'https://placeimg.com/width/height/any',
        'placeImgAnimals': 'https://placeimg.com/width/height/animals',
        'placeImgArch': 'https://placeimg.com/width/height/arch',
        'placeImgNature': 'https://placeimg.com/width/height/nature',
        'placeImgPeople': 'https://placeimg.com/width/height/people',
        'placeImgTech': 'https://placeimg.com/width/height/tech',
        'fillMurray': 'http://fillmurray.com/width/height',
        'fillMurrayGrey': 'http://fillmurray.com/g/width/height',
        'fakeImgPlease': 'http://fakeimg.pl/widthxheight',
        'placeCageCalm': 'http://placecage.com/width/height',
        'placeCageGray': 'http://placecage.com/g/width/height',
        'placeCageCrazy': 'http://placecage.com/c/width/height',
        'placeBear': 'https://placebear.com/width/height',
        'placeBearGrey': 'https://placebear.com/g/width/height',
        'baconMockup': 'http://baconmockup.com/width/height',
        'placeBeard': 'http://placebeard.it/width/height/notag',
        'stevenseGallery': 'http://stevensegallery.com/width/height'
      };

      var _props = this.props,
          _props$source = _props.source,
          source = _props$source === undefined ? 'unsplashIt' : _props$source,
          _props$height = _props.height,
          height = _props$height === undefined ? 320 : _props$height,
          _props$width = _props.width,
          width = _props$width === undefined ? 320 : _props$width;


      var sourceURL = Sources[source].toString();
      if (!sourceURL) {

        throw new Error('Unrecognized source');
      } else {

        sourceURL = sourceURL.replace('width', width).replace('height', height);
        return _react2.default.createElement('img', { src: sourceURL, width: width, height: height, alt: source });
      }
    }
  }]);

  return ImagePlaceholder;
}(_react.Component);

exports.default = ImagePlaceholder;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);