"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndDragEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var block_event_1 = require("./block_event");
var EndDragEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(EndDragEvent, _super);
    /**
     * Class for a block end drag event.
     */
    function EndDragEvent(options) {
        var _this = _super.call(this, options.block) || this;
        _this._record_undo = false;
        _this.type = interfaces_1.BlockEventType.END_DRAG;
        _this.block = options.block;
        _this._is_outside = options.is_outside;
        _this.mouse_position = options.mouse_position;
        _this._is_from_flyout = options.is_from_flyout;
        _this.redo_stack_before_drag = options.redo_stack_before_drag;
        return _this;
    }
    EndDragEvent.prototype.get_block_xml = function () {
        return this.xml.workspace_element_to_dom(this.block, true);
    };
    EndDragEvent.prototype.delete_current = function () {
        this.block.dispose();
    };
    EndDragEvent.prototype.cancel_move = function () {
        var workspace = this._get_event_workspace();
        workspace.undo();
        workspace.set_redo_stack(this.redo_stack_before_drag);
    };
    EndDragEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], EndDragEvent);
    return EndDragEvent;
}(block_event_1.BlockEvent));
exports.EndDragEvent = EndDragEvent;
