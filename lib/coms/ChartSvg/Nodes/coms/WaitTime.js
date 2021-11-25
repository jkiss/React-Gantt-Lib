"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _constant = require("../../util/constant");

var _config = require("../../../../config");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 20:28:34 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-24 23:25:59
 */
// Style
let _s = _bind.default.bind(_css.default);

const getTime = t => {
  const runTime = t / 1000;
  const seconds = runTime % 60;
  const minutes = (runTime - runTime % 60) / 60;
  const hours = (minutes - minutes % 60) / 60;
  if (hours) return "".concat(hours, " \u65F6 ").concat(minutes % 60, " \u5206 ").concat(seconds, " \u79D2");
  if (minutes) return "".concat(minutes, " \u5206 ").concat(seconds, " \u79D2");
  return "".concat(seconds, "s");
};

const WaitTime = _ref => {
  let {
    startX,
    startY,
    NODE_VALUE_END_X,
    node,
    data
  } = _ref;
  const lastNodeEndX = NODE_VALUE_END_X[NODE_VALUE_END_X.length - 1];
  const newNodeStartX = startX * 1;
  const drawStartY = startY * 1 + _constant.NODE_ATTRIBUTE.value.y;
  const {
    showPercent,
    showStartPercent
  } = data;
  if (lastNodeEndX >= newNodeStartX || !lastNodeEndX) return null;
  /**
   * 渲染等待时间的文案
   */

  const renderWaitingText = data => {
    const {
      lastNodeEndX,
      newNodeStartX,
      startY
    } = data;
    if (newNodeStartX - lastNodeEndX <= 55) return null;
    const textX = (newNodeStartX - lastNodeEndX) / 2 + lastNodeEndX - 18;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
        x: textX - 4,
        y: startY * 1 + _constant.NODE_ATTRIBUTE.value.y - 3,
        width: "45",
        height: "17",
        fill: "#fff"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
        x: textX,
        y: startY * 1 + _constant.NODE_ATTRIBUTE.value.y + 10,
        fontSize: "12",
        fill: "#FFA940",
        children: "\u7B49\u5F85\u4E2D"
      })]
    });
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _s('item'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _s('key'),
          children: "\u7B49\u5F85\u65F6\u95F4"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _s('value'),
          children: getTime(node.averageTime)
        })]
      })]
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    // transform={`translate(${ showStartPercent * CHART_WIDTH / showPercent * -1 }, 0)`} 
    "data-com": "WaitTime",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, {
      placement: "topLeft",
      content: renderToolTip(node),
      title: "",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
          x1: lastNodeEndX + 1,
          y1: drawStartY + 6,
          x2: newNodeStartX - 1,
          y2: drawStartY + 6,
          strokeDasharray: "3, 3",
          strokeWidth: "1",
          stroke: "#FFA940"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
          x1: lastNodeEndX + 1,
          y1: drawStartY,
          x2: lastNodeEndX + 1,
          y2: drawStartY + 12,
          strokeWidth: "1",
          stroke: "#FFA940"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
          x1: newNodeStartX - 1,
          y1: drawStartY,
          x2: newNodeStartX - 1,
          y2: drawStartY + 12,
          strokeWidth: "1",
          stroke: "#FFA940"
        }), renderWaitingText({
          lastNodeEndX,
          newNodeStartX,
          startY
        })]
      })
    })
  });
};

var _default = WaitTime;
exports.default = _default;