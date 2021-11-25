"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

/* 
 * @Author: Nokey 
 * @Date: 2021-11-09 15:45:53 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-11-18 11:39:34
 */
const Dragger = _ref => {
  let {
    changeDragStatus,
    finalDrag,
    drag,
    direction,
    callback
  } = _ref;
  // const [beginning, setBeginning] = useState(false)
  // const [dragStartClientX, setDragStartClientX] = useState(null)
  const ref = (0, _react.useRef)({
    beginning: false,
    dragStartClientX: null
  }); // console.log('Dragger render', direction, ref.current.beginning);

  const onMouseDown = e => {
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
    ref.current.beginning = true;
    ref.current.dragStartClientX = e.clientX;
    changeDragStatus(true);
  };

  const onMouseMove = e => {
    if (!ref.current.beginning) return;
    const dragWidth = e.clientX - ref.current.dragStartClientX;
    drag(dragWidth, direction, callback);
  };

  const onMouseUp = () => {
    if (!ref.current.beginning) return;
    document.body.style.cursor = 'auto';
    document.body.style.userSelect = 'initial';
    ref.current.beginning = false;
    ref.current.dragStartClientX = null;
    changeDragStatus(false);
    finalDrag();
  };

  (0, _react.useEffect)(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    onMouseDown: onMouseDown,
    style: {
      height: '100%',
      width: '100%'
    }
  });
};

var _default = Dragger;
exports.default = _default;