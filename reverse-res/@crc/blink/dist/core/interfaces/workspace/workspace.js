"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOOLBOX_POSITION = exports.DeleteArea = void 0;
var DeleteArea;
(function (DeleteArea) {
    /**
     * ENUM representing that an event is not in any delete areas.
     * Here we use 0, but some place would use undefined for backwards compatibility reasons.
     */
    DeleteArea[DeleteArea["DELETE_AREA_NONE"] = 0] = "DELETE_AREA_NONE";
    /**
     * ENUM representing that an event is in the delete area of the toolbox or
     * flyout.
     */
    DeleteArea[DeleteArea["DELETE_AREA_TOOLBOX"] = 2] = "DELETE_AREA_TOOLBOX";
})(DeleteArea = exports.DeleteArea || (exports.DeleteArea = {}));
/**
 * Position for toolbox.
 */
var TOOLBOX_POSITION;
(function (TOOLBOX_POSITION) {
    TOOLBOX_POSITION[TOOLBOX_POSITION["TOP"] = 0] = "TOP";
    TOOLBOX_POSITION[TOOLBOX_POSITION["BOTTOM"] = 1] = "BOTTOM";
    TOOLBOX_POSITION[TOOLBOX_POSITION["LEFT"] = 2] = "LEFT";
    TOOLBOX_POSITION[TOOLBOX_POSITION["RIGHT"] = 3] = "RIGHT";
})(TOOLBOX_POSITION = exports.TOOLBOX_POSITION || (exports.TOOLBOX_POSITION = {}));
