"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _constant = require("../../util/constant");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 20:04:21 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-18 11:27:34
 */
const AverageTime = _ref => {
  let {
    startX,
    startY,
    node,
    columnWidth,
    startDate,
    data,
    msWidth
  } = _ref;

  /**
   * 计算average块的宽度
   */
  const calcRectWidth = node => {
    const costMills = (0, _dayjs.default)(node.averageTime).valueOf();
    let showCoustMills = costMills;

    if ((0, _dayjs.default)(node.value.startTime).valueOf() < (0, _dayjs.default)(startDate).valueOf()) {
      showCoustMills = (0, _dayjs.default)(node.value.startTime).valueOf() + costMills - (0, _dayjs.default)(startDate).valueOf();
    }

    if (showCoustMills < 0) {
      showCoustMills = 0;
    }

    return showCoustMills * msWidth;
  };

  const getNodeNormalStatus = node => {
    return (0, _dayjs.default)(node.value.endTime).valueOf() - (0, _dayjs.default)(node.value.startTime).valueOf() >= node.averageTime;
  };

  const rectWidth = calcRectWidth(node);
  const {
    showStartPercent,
    showPercent
  } = data;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    "data-com": "Average" // transform={`translate(${ showStartPercent * CHART_WIDTH / showPercent * -1 }, 0)`}
    ,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
      x: startX * 1,
      y: startY * 1 + _constant.NODE_ATTRIBUTE.averaqe.y,
      width: rectWidth,
      height: _constant.NODE_ATTRIBUTE.averaqe.height,
      fill: getNodeNormalStatus(node) ? "#D9F7BE" : "#FFE7BA"
    })
  });
};

var _default = AverageTime;
exports.default = _default;