"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.EColorFormat = exports.EColorControllerFormat = void 0;
(function (e) {
  e.RGBA = "RGBA";
  e.HSVA = "HSVA";
})(exports.EColorControllerFormat || (exports.EColorControllerFormat = {}));
(function (e) {
  e[e.ColorPalette = 1] = "ColorPalette";
  e[e.HSVA = 2] = "HSVA";
  e[e.RGBA = 3] = "RGBA";
  e[e.ColorString = 4] = "ColorString";
})(exports.EColorFormat || (exports.EColorFormat = {}));