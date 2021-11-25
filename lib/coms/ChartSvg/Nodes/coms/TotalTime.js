"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _config = require("../../../../config");

var _constant = require("../../util/constant");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 19:42:17 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-18 11:25:37
 */
// Style
let _s = _bind.default.bind(_css.default);

const TotalTime = _ref => {
  let {
    startX,
    startY,
    node,
    NODE_VALUE_END_X,
    columnWidth,
    startDate,
    data,
    msWidth
  } = _ref;

  /**
   * 计算value块的宽度
   */
  const calcRectWidth = node => {
    let nodeStartTime = (0, _dayjs.default)(node.value.startTime).valueOf();

    if ((0, _dayjs.default)(node.value.startTime).valueOf() < (0, _dayjs.default)(startDate).valueOf()) {
      nodeStartTime = (0, _dayjs.default)(startDate);
    }

    const costTime = (0, _dayjs.default)(node.value.endTime).valueOf() - nodeStartTime; // return ((costTime / 1000 / 60 / 30 * columnWidth).toFixed(2)) * 1

    return costTime * msWidth;
  };

  const renderToolTip = node => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _s('g-tooltip'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _s('status'),
        style: {
          background: true ? "#52C41A" : "#FA8C16"
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _s('name'),
        children: node.name
      })]
    });
  };

  const rectWidth = calcRectWidth(node);
  const {
    showStartPercent,
    showPercent
  } = data;
  NODE_VALUE_END_X.push(startX * 1 + rectWidth * 1);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    // transform={`translate(${ showStartPercent * CHART_WIDTH / showPercent * -1 }, 0)`} 
    "data-com": "Value",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, {
      placement: "topLeft",
      content: renderToolTip(node),
      title: "",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        x: startX * 1,
        y: startY * 1 + _constant.NODE_ATTRIBUTE.value.y,
        width: rectWidth,
        height: _constant.NODE_ATTRIBUTE.value.height // fill={getNodeNormalStatus(node) ? "#52C41A" : "#FA8C16"}
        ,
        fill: "#52C41A"
      })
    })
  });
};

var _default = TotalTime;
exports.default = _default;