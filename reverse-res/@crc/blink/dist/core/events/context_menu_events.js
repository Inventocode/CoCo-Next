"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuOptionEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../interfaces");
var base_event_1 = require("./base_event");
var ContextMenuOptionEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ContextMenuOptionEvent, _super);
    function ContextMenuOptionEvent(options) {
        var _this = _super.call(this) || this;
        _this.type = interfaces_1.BlockEventType.CONTEXT_MENU_OPTION;
        _this._record_undo = false;
        _this._workspace_id = options.workspace_id;
        _this._option_name = options.option_name;
        _this._source = options.source;
        return _this;
    }
    ContextMenuOptionEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], ContextMenuOptionEvent);
    return ContextMenuOptionEvent;
}(base_event_1.BaseEvent));
exports.ContextMenuOptionEvent = ContextMenuOptionEvent;
