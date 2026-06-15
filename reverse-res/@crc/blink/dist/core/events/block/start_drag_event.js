"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartDragEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var block_event_1 = require("./block_event");
var StartDragEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(StartDragEvent, _super);
    function StartDragEvent(options) {
        var _this = _super.call(this, options.block) || this;
        _this.type = interfaces_1.BlockEventType.START_DRAG;
        _this._record_undo = false;
        _this.block = options.block;
        _this._is_from_flyout = options.is_from_flyout;
        return _this;
    }
    StartDragEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], StartDragEvent);
    return StartDragEvent;
}(block_event_1.BlockEvent));
exports.StartDragEvent = StartDragEvent;
