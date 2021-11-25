"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.number.to-fixed.js");

var _react = require("react");

var _Dragger = _interopRequireDefault(require("./coms/Dragger"));

var _config = require("../../config");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _css = _interopRequireDefault(require("./css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * @Author: Nokey 
 * @Date: 2021-11-09 13:18:05 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-18 11:38:56
 */
// Style
let _s = _bind.default.bind(_css.default);

const DefaultClickJumpPercent = 4 / 48;

let isDragging = false,
    _showPercent,
    tempShowPercent,
    _showStartPercent,
    tempShowStartPercent;

const changeDragStatus = status => {
  isDragging = status;
};

const DragSlider = _ref => {
  let {
    data,
    chart_width,
    initShowPercent,
    setShowPercent,
    initShowStartPercent,
    setShowStartPercent,
    clickJumpPercent,
    callback
  } = _ref;
  const [areaWidth, setAreaWidth] = (0, _react.useState)(chart_width * initShowPercent);
  const [positionLeft, setPositionLeft] = (0, _react.useState)(chart_width * initShowStartPercent);
  (0, _react.useEffect)(() => {
    _showPercent = initShowPercent;
    _showStartPercent = initShowStartPercent;
    tempShowPercent = initShowPercent;
    tempShowStartPercent = initShowStartPercent;
  }, []);

  const onDragSliderRect = (dragWidth, direction, cb) => {
    if (isDragging === false) return;
    tempShowStartPercent = _showStartPercent + (dragWidth / chart_width).toFixed(6) * 1;

    if (tempShowStartPercent < 0) {
      tempShowStartPercent = 0;
    }

    if (_showPercent + tempShowStartPercent > 1) {
      tempShowStartPercent = 1 - _showPercent;
    }

    setPositionLeft(chart_width * tempShowStartPercent);
    updatePercent({
      showStartPercent: tempShowStartPercent
    });

    if (cb) {
      cb({
        showStartPercent: tempShowStartPercent
      });
    }
  };

  const onDragSliderHandle = (dragWidth, direction, cb) => {
    if (isDragging === false) return;
    const diff = (dragWidth / chart_width).toFixed(6) * 1;

    if (direction === 'left') {
      tempShowStartPercent = _showStartPercent + diff;
      tempShowPercent = _showPercent - diff;

      if (tempShowStartPercent < 0) {
        tempShowStartPercent = 0;
        tempShowPercent = _showStartPercent + _showPercent;
      }

      if (tempShowStartPercent >= _showStartPercent + _showPercent) {
        tempShowStartPercent = _showStartPercent + _showPercent - 0.01;
        tempShowPercent = 0.01;
      }
    } else {
      tempShowStartPercent = _showStartPercent;
      tempShowPercent = _showPercent + diff;
      if (tempShowPercent <= 0) tempShowPercent = 0.01;

      if (tempShowPercent + tempShowStartPercent >= 1) {
        tempShowPercent = 1 - tempShowStartPercent;
      }
    }

    setAreaWidth(chart_width * tempShowPercent);
    setPositionLeft(chart_width * tempShowStartPercent);
    updatePercent({
      showPercent: tempShowPercent,
      showStartPercent: tempShowStartPercent
    });

    if (cb) {
      cb({
        showStartPercent: tempShowStartPercent,
        showPercent: tempShowPercent
      });
    }
  };
  /**
   * 点击拖拽时触发
   */


  const setDragClickJump = (diff, cb) => {// tempShowPercent = _showStartPercent + diff
    // if ((initShowPercent + tempShowPercent) > 1) {
    //     tempShowPercent = 1 - initShowPercent
    // } else if (tempShowPercent < 0) {
    //     tempShowPercent = 0
    // }
    // updatePercent({
    // })
    // if (cb) {
    //     cb({
    //         showStartPercent: newShowPercent,
    //         showPercent: initShowPercent,
    //     })
    // }
  };
  /**
   * 更新上层状态以便更新图表
   */


  const updatePercent = _ref2 => {
    let {
      showPercent,
      showStartPercent
    } = _ref2;
    showPercent !== undefined && setShowPercent(showPercent);
    showStartPercent !== undefined && setShowStartPercent(showStartPercent);
  };
  /**
   * 拖拽结束时触发
   */


  const onDragEnd = () => {
    _showPercent = tempShowPercent;
    _showStartPercent = tempShowStartPercent;
  };
  /**
   * 点击左右空白区域触发的点击拖拽
   */


  const clickDrag = direction => {
    let cjp = clickJumpPercent ? clickJumpPercent : DefaultClickJumpPercent;
    setDragClickJump(direction === 'left' ? -1 * cjp : cjp);
  };

  const renderDragger = (direction, dragCallback) => {
    // const { changeDragStatus, finalDrag } = _dragActions;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dragger.default, {
      drag: dragCallback,
      changeDragStatus: changeDragStatus,
      direction: direction,
      finalDrag: onDragEnd,
      callback: callback
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _s('chart-slider'),
    style: {
      height: "".concat(_config.DRAG_SLIDER_HEIGHT, "px")
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _s('left-area'),
      style: {
        minWidth: positionLeft
      },
      onClick: () => clickDrag('left')
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _s('drag-area'),
      style: {
        minWidth: areaWidth
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _s('left-drag'),
        children: renderDragger('left', onDragSliderHandle)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _s('right-drag'),
        children: renderDragger('right', onDragSliderHandle)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _s('center-drag'),
        children: renderDragger('box', onDragSliderRect)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _s('right-area'),
      onClick: () => clickDrag('right')
    })]
  });
};

var _default = DragSlider;
exports.default = _default;