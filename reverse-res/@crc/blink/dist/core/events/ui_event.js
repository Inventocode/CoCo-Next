"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var base_event_1 = require("./base_event");
var UIEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(UIEvent, _super);
    function UIEvent(options) {
        var _this = _super.call(this) || this;
        _this._record_undo = false;
        _this.type = options.type;
        _this._workspace_id = options.workspace_id;
        _this._old_value = options.old_value;
        _this._new_value = options.new_value;
        _this._block_id = options.block_id;
        return _this;
    }
    UIEvent.prototype.get_new_value = function () {
        return this._new_value;
    };
    UIEvent.prototype.get_old_value = function () {
        return this._old_value;
    };
    UIEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], UIEvent);
    return UIEvent;
}(base_event_1.BaseEvent));
exports.UIEvent = UIEvent;
