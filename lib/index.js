"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _config = require("./config");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _ChartSvg = _interopRequireDefault(require("./coms/ChartSvg"));

var _SummarySvg = _interopRequireDefault(require("./coms/SummarySvg"));

var _DragSlider = _interopRequireDefault(require("./coms/DragSlider"));

var _XAxisSvg = _interopRequireDefault(require("./coms/XAxisSvg"));

var _Title = _interopRequireDefault(require("./coms/Title"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

require("antd/es/popover/style/index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 16:52:15 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-24 23:42:50
 */
// coms
// Style
let _s = _bind.default.bind(_css.default);

const GanttReact = _ref => {
  let {
    config
  } = _ref;
  const [showPercent, setShowPercent] = (0, _react.useState)(config.showPercent);
  const [showStartPercent, setShowStartPercent] = (0, _react.useState)(config.showStartPercent);
  const {
    title,
    startDate,
    endDate,
    nodes,
    width,
    height
  } = config;
  const columnWidth = (width - _config.MARGIN_LEFT) / (_config.GRID_COLUMN_NUM * showPercent);
  const msWidth = (width - _config.MARGIN_LEFT) / (((0, _dayjs.default)(endDate).valueOf() - (0, _dayjs.default)(startDate).valueOf()) * showPercent); // const svgWith = columnWidth * GRID_COLUMN_NUM

  const svgWith = width / showPercent; // console.log('msWidth', msWidth, dayjs(endDate).valueOf() - dayjs(startDate).valueOf(), endDate, startDate);

  const onDragging = data => {};

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _s('gantt'),
    style: {
      width: "".concat(width, "px")
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _s('gantt-chart'),
      style: {
        height: "".concat(height - _config.DRAG_SLIDER_HEIGHT, "px")
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Title.default, {
        title: config.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChartSvg.default, {
        showPercent,
        showStartPercent,
        data: config,
        columnWidth: columnWidth,
        msWidth: msWidth,
        svgWith: svgWith
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_XAxisSvg.default, {
        showPercent,
        showStartPercent,
        svgWith: svgWith,
        msWidth: msWidth,
        data: config
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _s('g-drag-container'),
      style: {
        marginLeft: "".concat(_config.MARGIN_LEFT, "px"),
        height: "".concat(_config.DRAG_SLIDER_HEIGHT, "px")
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SummarySvg.default, {
        chart_width: width - _config.MARGIN_LEFT,
        data: config
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DragSlider.default, {
        initShowPercent: config.showPercent,
        setShowPercent,
        initShowStartPercent: config.showStartPercent,
        setShowStartPercent,
        chart_width: width - _config.MARGIN_LEFT,
        clickJumpPercent: _config.CLICK_JUMP_PERCENT,
        callback: onDragging
      })]
    })]
  });
};

var _default = GanttReact;
exports.default = _default;