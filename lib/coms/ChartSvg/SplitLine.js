"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../../config");

var _jsxRuntime = require("react/jsx-runtime");

/* 
 * @Author: Nokey 
 * @Date: 2021-11-08 17:48:05 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-15 19:53:24
 */
const getVerticalLineXY = data => {
  const {
    columnWidth,
    nodes
  } = data;
  const topNodes = [];
  const bottomNodes = [];

  for (let i = 0; i < _config.GRID_COLUMN_NUM + 1; i++) {
    let x = _config.MARGIN_LEFT + i * columnWidth;
    topNodes.push([x, 0]);
    bottomNodes.push([x, nodes.length * _config.GRID_ROW_HEIGHT]);
  }

  const res = [];

  for (let i = 0; i < _config.GRID_COLUMN_NUM + 1; i++) {
    res.push([topNodes[i], bottomNodes[i]]);
  }

  return res;
};

const getHorizontalLineXY = data => {
  const {
    columnWidth,
    nodes
  } = data;
  const leftNodes = [];
  const rightNodes = [];

  for (let i = 0; i < nodes.length + 1; i++) {
    leftNodes.push([_config.MARGIN_LEFT, i * _config.GRID_ROW_HEIGHT]);
    rightNodes.push([_config.GRID_COLUMN_NUM * columnWidth + _config.MARGIN_LEFT, i * _config.GRID_ROW_HEIGHT]);
  }

  const res = [];

  for (let i = 0; i < nodes.length + 1; i++) {
    res.push([leftNodes[i], rightNodes[i]]);
  }

  return res;
};

const SplitLine = _ref => {
  let {
    nodes,
    columnWidth,
    showStartPercent,
    showPercent
  } = _ref;
  const showIndex = showStartPercent * _config.GRID_COLUMN_NUM;
  const verticalLineXY = getVerticalLineXY({
    columnWidth,
    nodes,
    showStartPercent,
    showPercent
  });
  const horizontalLineXY = getHorizontalLineXY({
    columnWidth,
    nodes,
    showStartPercent,
    showPercent
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
    "data-com": "grid-lines",
    children: [verticalLineXY.map((line, i) => {
      if (i < showIndex) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
        x1: line[0][0],
        y1: line[0][1],
        x2: line[1][0],
        y2: line[1][1],
        strokeDasharray: "5, 2",
        strokeWidth: "1",
        strokeOpacity: "0.09",
        stroke: "black"
      }, i);
    }), horizontalLineXY.map((line, i) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
        x1: line[0][0],
        y1: line[0][1],
        x2: line[1][0],
        y2: line[1][1],
        strokeDasharray: "5, 2",
        strokeWidth: "1",
        strokeOpacity: "0.09",
        stroke: "black"
      }, i);
    })]
  });
};

var _default = SplitLine;
exports.default = _default;