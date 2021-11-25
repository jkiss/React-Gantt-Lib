"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _config = require("../../../../config");

var _constant = require("../../util/constant");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 20:23:49 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-16 11:05:01
 */
const NodeName = _ref => {
  let {
    startDate,
    endDate,
    data,
    startX,
    startY,
    node,
    msWidth
  } = _ref;

  const calcTotalTimeWidth = node => {
    let nodeStartTime = (0, _dayjs.default)(node.value.startTime).valueOf();

    if ((0, _dayjs.default)(node.value.startTime).valueOf() < (0, _dayjs.default)(startDate).valueOf()) {
      nodeStartTime = (0, _dayjs.default)(startDate).valueOf();
    }

    const costTime = (0, _dayjs.default)(node.value.endTime).valueOf() - nodeStartTime;
    return costTime * msWidth;
  }; // const calcAverageTimeWidth = node => {
  //     const costMills = dayjs(node.averageTime).valueOf();
  //     let showCostMills = costMills;
  //     if (dayjs(node.value.startTime).valueOf() < dayjs(startDate).valueOf()) {
  //         showCostMills = dayjs(node.value.startTime).valueOf() + costMills - dayjs(startDate).valueOf();
  //     }
  //     if (showCostMills < 0) {
  //         showCostMills = 0;
  //     }
  //     return showCostMills * msWidth
  // }


  const {
    showStartPercent
  } = data;

  const transformX = showStartPercent * ((0, _dayjs.default)(endDate).valueOf() - (0, _dayjs.default)(startDate).valueOf()) * msWidth + _config.MARGIN_LEFT;

  const valueEndX = startX * 1 + calcTotalTimeWidth(node); // const averageEndX = startX * 1 + calcAverageTimeWidth(node)

  let resTransformX = 0; // if (startX * 1 < transformX && (valueEndX > transformX || averageEndX > transformX )) {

  if (startX * 1 < transformX && valueEndX > transformX) {
    resTransformX = transformX - startX;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
    "data-com": "NodeName",
    x: startX * 1,
    y: startY * 1 + _constant.NODE_ATTRIBUTE.name.y,
    fontSize: "12",
    transform: "translate(".concat(resTransformX, ", 0)"),
    fill: "#666666",
    children: node.name
  });
};

var _default = NodeName;
exports.default = _default;