"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EColorFormat = exports.EColorControllerFormat = void 0;
var EColorControllerFormat;
(function (EColorControllerFormat) {
    EColorControllerFormat["RGBA"] = "RGBA";
    EColorControllerFormat["HSVA"] = "HSVA";
})(EColorControllerFormat = exports.EColorControllerFormat || (exports.EColorControllerFormat = {}));
var EColorFormat;
(function (EColorFormat) {
    EColorFormat[EColorFormat["ColorPalette"] = 1] = "ColorPalette";
    EColorFormat[EColorFormat["HSVA"] = 2] = "HSVA";
    EColorFormat[EColorFormat["RGBA"] = 3] = "RGBA";
    EColorFormat[EColorFormat["ColorString"] = 4] = "ColorString";
})(EColorFormat = exports.EColorFormat || (exports.EColorFormat = {}));
