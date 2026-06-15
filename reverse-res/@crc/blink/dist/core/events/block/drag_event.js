"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragAreaChangeEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var block_event_1 = require("./block_event");
var DragAreaChangeEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(DragAreaChangeEvent, _super);
    /**
     * Class for a block drag event.
     * Fired when block dragged into or out of some specific area.
     */
    function DragAreaChangeEvent(options) {
        var _this = _super.call(this, options.block) || this;
        _this.type = interfaces_1.BlockEventType.DRAG_AREA_CHANGE;
        _this._record_undo = false;
        _this.block = options.block;
        _this.area = options.area;
        _this.is_in = options.is_in;
        return _this;
    }
    DragAreaChangeEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], DragAreaChangeEvent);
    return DragAreaChangeEvent;
}(block_event_1.BlockEvent));
exports.DragAreaChangeEvent = DragAreaChangeEvent;
