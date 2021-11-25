"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _config = require("../../../config");

var _TotalTime = _interopRequireDefault(require("./coms/TotalTime"));

var _AverageTime = _interopRequireDefault(require("./coms/AverageTime"));

var _Point = _interopRequireDefault(require("./coms/Point"));

var _WaitTime = _interopRequireDefault(require("./coms/WaitTime"));

var _NodeName = _interopRequireDefault(require("./coms/NodeName"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const NODE_VALUE_END_X = [];

const Node = _ref => {
  let {
    node,
    nodeIndex,
    startDate,
    endDate,
    showStartPercent,
    showPercent,
    msWidth
  } = _ref;
  let startX = 0;

  if ((0, _dayjs.default)(node.value.startTime).valueOf() > (0, _dayjs.default)(startDate).valueOf()) {
    const diffMsFromStartDate = (0, _dayjs.default)(node.value.startTime).valueOf() - (0, _dayjs.default)(startDate).valueOf(); // const startHourPercent = diffMsFromStartDate / 1000 / 60 / 60 / 24
    // startX = (startHourPercent * columnWidth * COLUMN_NUM).toFixed(2)

    startX = msWidth * diffMsFromStartDate + _config.MARGIN_LEFT;
  }

  const startY = nodeIndex * _config.GRID_ROW_HEIGHT;
  const nextProps = {
    startX,
    startY,
    node,
    data: {
      showPercent,
      showStartPercent
    },
    startDate,
    endDate,
    NODE_VALUE_END_X,
    msWidth
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WaitTime.default, _objectSpread({}, nextProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TotalTime.default, _objectSpread({}, nextProps)), node.averageTime && /*#__PURE__*/(0, _jsxRuntime.jsx)(_AverageTime.default, _objectSpread({}, nextProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Point.default, _objectSpread({}, nextProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NodeName.default, _objectSpread({}, nextProps))]
  });
};

var _default = Node;
exports.default = _default;