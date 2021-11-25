"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _config = require("../../config");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-10 18:32:10 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-15 20:16:35
 */
// Style
let _s = _bind.default.bind(_css.default);

function calcTicksTxt(startDate, endDate) {
  const day_span = 24 * 60 * 60 * 1000;
  let f_start_date = (0, _dayjs.default)(startDate),
      f_end_date = (0, _dayjs.default)(endDate),
      f_start_date_hour = f_start_date.startOf('hour'),
      f_end_date_hour = f_end_date.startOf('hour'),
      temp_date,
      begin_of_2021 = (0, _dayjs.default)('2021-01-01').valueOf(),
      // for calc, avoid timezone offset
  txt_arr = [];
  let t1 = f_start_date_hour.add(.5, 'hour');
  temp_date = t1.isAfter(f_start_date) ? t1 : f_start_date_hour.add(1, 'hour'); // add start tick

  txt_arr.push({
    offset_ms: 0,
    str: f_start_date.format('MM/DD'),
    type: 'date'
  });

  while (temp_date.valueOf() < f_end_date.valueOf()) {
    if ((temp_date.valueOf() - begin_of_2021) % day_span === 0) {
      txt_arr.push({
        offset_ms: temp_date.valueOf() - f_start_date.valueOf(),
        str: temp_date.format('MM/DD'),
        type: 'date'
      });
    } else {
      txt_arr.push({
        offset_ms: temp_date.valueOf() - f_start_date.valueOf(),
        str: temp_date.format('HH:mm'),
        type: 'time'
      });
    }

    temp_date = temp_date.add(.5, 'hour');
  } // add end tick


  txt_arr.push({
    offset_ms: f_end_date.valueOf() - f_start_date.valueOf(),
    str: f_end_date.format('MM/DD'),
    type: 'date'
  }); // console.log('getTickTxt');

  return txt_arr;
}

const XAxisSvg = _ref => {
  let {
    svgWith,
    showPercent,
    showStartPercent,
    data,
    msWidth
  } = _ref;
  const {
    startDate,
    endDate
  } = data;
  const tick_span = 1800000; // half hour, millisecond

  const f_start_date = (0, _dayjs.default)(startDate);
  const f_end_date = (0, _dayjs.default)(endDate);
  const duration = f_end_date.valueOf() - f_start_date.valueOf();
  const offset_length = duration * msWidth * showStartPercent;
  const TICKS = (0, _react.useMemo)(() => calcTicksTxt(startDate, endDate), [startDate, endDate]);
  const TICKS_LEN = TICKS.length;
  const show_ticks_num = parseInt(showPercent * TICKS_LEN);
  const step_offset = parseInt(show_ticks_num / _config.TICKS_MAX_SHOW) + 1;
  /**
   * 渲染辅助线
   */

  const drawTickLine = () => {
    return TICKS.map((obj, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
      x1: _config.MARGIN_LEFT + msWidth * obj.offset_ms - offset_length,
      y1: 0,
      x2: _config.MARGIN_LEFT + msWidth * obj.offset_ms - offset_length,
      y2: 5,
      strokeWidth: "1",
      strokeOpacity: "0.4",
      stroke: "black"
    }, i));
  };
  /**
   * draw tick txt every half hour, maybe configurable in the furture
   */


  const drawTickTxt = () => {
    return TICKS.map((obj, i) => {
      if (i % step_offset === 0) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
          x: _config.MARGIN_LEFT + msWidth * obj.offset_ms - offset_length,
          y: "20",
          fill: "#000",
          fillOpacity: "0.45",
          fontSize: "12",
          textAnchor: "middle",
          children: obj.str
        }, "txt-".concat(i));
      } else {
        return null;
      }
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _s('axis-wrap'),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      width: svgWith,
      height: "63",
      children: [drawTickLine(), drawTickTxt()]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _s('block-left'),
      style: {
        width: "".concat(_config.MARGIN_LEFT, "px")
      }
    })]
  });
};

var _default = XAxisSvg;
exports.default = _default;