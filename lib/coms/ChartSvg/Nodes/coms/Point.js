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
 * @Date: 2021-11-08 20:14:30 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-15 20:13:00
 */
const Point = _ref => {
  let {
    startDate,
    columnWidth,
    node,
    startY,
    data,
    msWidth
  } = _ref;
  const {
    showStartPercent,
    showPercent
  } = data;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
    "data-com": "Point" // transform={`translate(${ showStartPercent * CHART_WIDTH / showPercent * -1 }, 0)`}
    ,
    children: node.highlightPoints.map((point, i) => {
      const diffMsFromStartDate = (0, _dayjs.default)(point.time).valueOf() - (0, _dayjs.default)(startDate).valueOf(); // const startHourPercent =  diffMsFromStartDate / 1000 / 60 / 60 / 24
      // const startX = (startHourPercent * columnWidth * COLUMN_NUM).toFixed(2)

      const startX = diffMsFromStartDate * msWidth + _config.MARGIN_LEFT;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: startX,
        cy: startY * 1 + _constant.NODE_ATTRIBUTE.value.y + 6,
        r: "4",
        stroke: "#F5222D",
        strokeWidth: "1",
        fill: "#fff"
      }, i);
    })
  });
};

var _default = Point;
exports.default = _default;