"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../../config");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-18 09:53:45 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-18 09:59:46
 */
// Style
let _s = _bind.default.bind(_css.default);

const Title = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _s('g-title'),
    style: {
      height: "".concat(_config.TITLE_HEIGHT, "px"),
      lineHeight: "".concat(_config.TITLE_HEIGHT, "px")
    },
    children: title
  });
};

var _default = Title;
exports.default = _default;