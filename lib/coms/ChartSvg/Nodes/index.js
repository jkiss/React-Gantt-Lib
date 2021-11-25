"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node = _interopRequireDefault(require("./Node"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 19:12:23 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-15 20:20:13
 */
const Nodes = _ref => {
  let {
    nodes,
    startDate,
    endDate,
    showStartPercent,
    showPercent,
    msWidth
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    children: nodes.map((node, i) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Node.default, {
        nodeIndex: i,
        node,
        startDate,
        endDate,
        showPercent,
        showStartPercent,
        msWidth
      }, i);
    })
  });
};

var _default = Nodes;
exports.default = _default;