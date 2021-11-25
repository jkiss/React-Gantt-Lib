"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 19:08:22 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-09 11:14:29
 */
const YAxis = _ref => {
  let {
    nodes
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    children: nodes.map((node, index) => {
      const y = 51 + 45 * index;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
        x: "24",
        y: y,
        fill: "#000",
        fillOpacity: "0.45",
        fontSize: "12",
        children: node.yAxis
      }, index);
    })
  });
};

var _default = YAxis;
exports.default = _default;