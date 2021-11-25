"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.number.to-fixed.js");

var _config = require("../../config");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-09 11:09:32 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-15 11:29:59
 */
// Style
let _s = _bind.default.bind(_css.default);

const SummarySvg = _ref => {
  let {
    data,
    chart_width
  } = _ref;
  const {
    startDate,
    endDate,
    nodes
  } = data;
  /**
   * 将不需要显示的时间截掉，省掉了拿空白处遮挡
   */

  const dealPropsNodes = (nodes, startDate) => {
    const newNodes = [];
    nodes.forEach(node => {
      if ((0, _dayjs.default)(startDate).valueOf() < (0, _dayjs.default)(node.value.endTime).valueOf() || (0, _dayjs.default)(startDate).add(1, 'day').valueOf() > (0, _dayjs.default)(node.value.startTime).valueOf()) {
        newNodes.push(Object.assign({}, node, {
          value: Object.assign({}, node.value, {
            startTime: (0, _dayjs.default)(startDate).valueOf() > (0, _dayjs.default)(node.value.startTime).valueOf() ? startDate : node.value.startTime,
            endTime: (0, _dayjs.default)(startDate).add(1, 'day').valueOf() < (0, _dayjs.default)(node.value.endTime).valueOf() ? (0, _dayjs.default)(startDate).add(1, 'day').format('YYYY-MM-DD') : node.value.endTime
          })
        }));
      }
    });
    return newNodes;
  }; // const getNodeNormalStatus = node => {
  //     return (dayjs(node.value.endTime).valueOf() - dayjs(node.value.startTime).valueOf()) >= node.averageTime
  // }
  // 计算所有点的所有坐标


  const calcNodeXY = showNodes => {
    const intervalY = (30 / showNodes.length).toFixed(6) * 1;
    const totalTime = (0, _dayjs.default)(endDate).valueOf() - (0, _dayjs.default)(startDate).valueOf();
    const res = [];
    showNodes.forEach((node, index) => {
      const startPercent = ((0, _dayjs.default)(node.value.startTime).valueOf() - (0, _dayjs.default)(startDate).valueOf()) / totalTime;
      const percent = ((0, _dayjs.default)(node.value.endTime).valueOf() - (0, _dayjs.default)(node.value.startTime).valueOf()) / totalTime;
      const width = (percent * chart_width).toFixed(6) * 1;
      const startWidth = (startPercent * chart_width).toFixed(6) * 1;
      res.push({
        1: [startWidth, intervalY * index],
        2: [startWidth + width, intervalY * index],
        node
      });
    });
    return res;
  }; // const showNodes = dealPropsNodes(nodes, startDate)


  const showNodesXYArr = calcNodeXY(nodes);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    className: _s('svg'),
    width: chart_width,
    height: 30,
    children: showNodesXYArr.map((node, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
      x1: node[1][0],
      y1: node[1][1],
      x2: node[2][0],
      y2: node[2][1],
      stroke: true ? "#52C41A" : "#FA8C16",
      strokeWidth: "1"
    }, i))
  });
};

var _default = SummarySvg;
exports.default = _default;