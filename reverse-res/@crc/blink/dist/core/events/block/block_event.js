"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockEvent = void 0;
var tslib_1 = require("tslib");
var base_event_1 = require("../base_event");
var BlockEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BlockEvent, _super);
    /**
     * Abstract class for an event.
     * @param block the related block.
     */
    function BlockEvent(block) {
        var _this = _super.call(this) || this;
        var workspace = block.get_workspace();
        _this._block_id = block.id;
        if (workspace == undefined) {
            console.error('Event block workspace not found.');
            return _this;
        }
        _this._workspace_id = workspace.id;
        return _this;
    }
    BlockEvent.prototype.get_block_id = function () {
        return this._block_id;
    };
    return BlockEvent;
}(base_event_1.BaseEvent));
exports.BlockEvent = BlockEvent;
