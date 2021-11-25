"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constant = require("./util/constant");

var _config = require("../../config");

var _YAxis = _interopRequireDefault(require("./YAxis"));

var _SplitLine = _interopRequireDefault(require("./SplitLine"));

var _Nodes = _interopRequireDefault(require("./Nodes"));

var _Blocking = _interopRequireDefault(require("./Blocking"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 17:34:33 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-15 20:20:56
 */
// Style
let _s = _bind.default.bind(_css.default);

const ChartSvg = _ref => {
  let {
    data,
    svgWith,
    columnWidth,
    showPercent,
    showStartPercent,
    msWidth
  } = _ref;
  const {
    nodes,
    startDate,
    endDate
  } = data;
  const needHeight = _constant.ROW_HEIGHT * nodes.length + _config.MARGIN_TOP;
  const offset = columnWidth * _config.GRID_COLUMN_NUM * showStartPercent;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _s('g-chart-container'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      width: svgWith,
      height: needHeight,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
        transform: "translate(".concat(-offset, ", ").concat(_config.MARGIN_TOP, ")"),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SplitLine.default, {
          nodes,
          showPercent,
          showStartPercent,
          columnWidth
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Nodes.default, {
          nodes,
          showPercent,
          showStartPercent,
          startDate,
          endDate,
          msWidth
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Blocking.default, {
        nodes: nodes
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_YAxis.default, {
        nodes: nodes
      })]
    })
  });
};

var _default = ChartSvg;
exports.default = _default;