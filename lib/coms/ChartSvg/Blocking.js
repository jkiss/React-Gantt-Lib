"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constant = require("./util/constant");

var _config = require("../../config");

var _jsxRuntime = require("react/jsx-runtime");

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 19:21:39 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-16 10:15:48
 */
const Blocking = _ref => {
  let {
    nodes
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    "data-com": "Blocking",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
      // x={-1 * MARGIN_LEFT}
      x: 0,
      y: 0,
      width: _config.MARGIN_LEFT,
      height: nodes.length * _constant.ROW_HEIGHT + _config.MARGIN_TOP,
      fill: "#fcfcfc"
    })
  });
};

var _default = Blocking;
exports.default = _default;