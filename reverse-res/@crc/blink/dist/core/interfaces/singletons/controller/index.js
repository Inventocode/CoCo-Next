"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerType = void 0;
var tslib_1 = require("tslib");
var ControllerType;
(function (ControllerType) {
    ControllerType["SLIDER"] = "SLIDER";
    ControllerType["ANGLE_SCALE"] = "ANGLE_SCALE";
    ControllerType["COLOR_PICKER"] = "COLOR_PICKER";
})(ControllerType = exports.ControllerType || (exports.ControllerType = {}));
(0, tslib_1.__exportStar)(require("./angle_controller"), exports);
(0, tslib_1.__exportStar)(require("./slider_controller"), exports);
(0, tslib_1.__exportStar)(require("./color_controller"), exports);
