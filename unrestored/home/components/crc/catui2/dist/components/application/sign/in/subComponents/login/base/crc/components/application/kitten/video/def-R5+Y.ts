/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：R5+Y
 */

"use strict";

/* unused harmony export ScreenCase */
/* unused harmony export VIDEO_DEFAULT_HEIGHT_IN_CASE */
/* unused harmony export getScreenCase */
/* harmony export (binding) */
/* unused harmony export videoDefaultPositionOffsetX */
/* harmony export (binding) */
export { videoExtraHeight };
/* harmony export (binding) */
export { videoDefaultRatio };
/* harmony export (binding) */
export { videoDefaultHeight };
/* harmony export (binding) */
export { videoDefaultWidth };
/* harmony export (binding) */
export { videoDefaultPositionLeft };
/* harmony export (binding) */
export { videoDefaultPositionTop };
/* harmony export (binding) */
export { videoMinHeight };
/* unused harmony export videoMaxHeight */
/* harmony import */
export { videoMinWidth };
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty";
var _VIDEO_DEFAULT_HEIGHT;
var ScreenCase;
(function (ScreenCase) {
  ScreenCase[ScreenCase["SMALL"] = 1] = "SMALL";
  ScreenCase[ScreenCase["MID_SMALL"] = 2] = "MID_SMALL";
  ScreenCase[ScreenCase["MID"] = 3] = "MID";
  ScreenCase[ScreenCase["LARGE"] = 4] = "LARGE";
})(ScreenCase || (ScreenCase = {}));
_VIDEO_DEFAULT_HEIGHT = {};
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__.default(_VIDEO_DEFAULT_HEIGHT, ScreenCase.SMALL, 270);
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__.default(_VIDEO_DEFAULT_HEIGHT, ScreenCase.MID_SMALL, 324);
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__.default(_VIDEO_DEFAULT_HEIGHT, ScreenCase.MID, 385);
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__.default(_VIDEO_DEFAULT_HEIGHT, ScreenCase.LARGE, 450);
var VIDEO_DEFAULT_HEIGHT_IN_CASE = _VIDEO_DEFAULT_HEIGHT;
function getScreenCase() {
  var avaliableWidth = window.innerWidth;
  if (avaliableWidth <= 1024) {
    return ScreenCase.SMALL;
  }
  if (avaliableWidth <= 1440) {
    return ScreenCase.MID_SMALL;
  }
  if (avaliableWidth <= 1660) {
    return ScreenCase.MID;
  }
  return ScreenCase.LARGE;
} // 视频播放器多出来的高度(顶栏 + 进度条)
var videoExtraHeight = 40; // 视频播放器默认padding
var videoDefaultPositionOffsetX = -12; // 视频播放器默认比例
var videoDefaultRatio = 16 / 9; // 视频播放器默认高度
var videoDefaultHeight = function videoDefaultHeight() {
  return VIDEO_DEFAULT_HEIGHT_IN_CASE[getScreenCase()] + videoExtraHeight;
}; // 视频播放器默认宽度
var videoDefaultWidth = function videoDefaultWidth() {
  return (videoDefaultHeight() - videoExtraHeight) * videoDefaultRatio;
}; // 视频播放器默认定位(left)
var videoDefaultPositionLeft = function videoDefaultPositionLeft() {
  return window.innerWidth - videoDefaultWidth();
}; // 视频播放器默认定位(top)
var videoDefaultPositionTop = function videoDefaultPositionTop() {
  return 52;
}; // 视频播放器最小高度
var videoMinHeight = function videoMinHeight() {
  return Math.max(window.innerHeight * 0.3, 314);
}; // 视频播放器最小宽度
var videoMinWidth = function videoMinWidth() {
  return (videoMinHeight() - videoExtraHeight) * videoDefaultRatio;
}; // 视频播放器最大高度
var videoMaxHeight = function videoMaxHeight() {
  return window.innerHeight;
};

/***/