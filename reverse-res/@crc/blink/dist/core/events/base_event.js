"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEvent = void 0;
var tslib_1 = require("tslib");
var di_1 = require("../di");
/**
 * Abstract class for an event.
 */
var BaseEvent = /** @class */ (function () {
    function BaseEvent() {
        /**
         * The workspace identifier for this event.
         */
        this._workspace_id = '';
        this._group = this.events.get_group();
        /**
         * Sets whether events should be added to the undo stack.
         * Used when undo/redo, or some other situation in which event listeners should be
         *  informed but no event should be pushed into stack(e.g. copy & paste)
         */
        this._record_undo = this.events.is_record_undo();
    }
    /**
     * Does this event record any change of state?
     * @returns True if something changed.
     */
    BaseEvent.prototype.is_null = function () {
        return false;
    };
    /**
     * Get workspace the event belongs to.
     *
     * @returns The workspace the event belongs to.
     */
    BaseEvent.prototype._get_event_workspace = function () {
        var workspace = this.workspace_db.get(this._workspace_id);
        if (workspace == undefined) {
            throw Error('Workspace is undefined. Event must have been generated from real Blockly events.');
        }
        return workspace;
    };
    BaseEvent.prototype.is_record_undo = function () {
        return this._record_undo;
    };
    BaseEvent.prototype.set_record_undo = function (val) {
        this._record_undo = val;
    };
    BaseEvent.prototype.get_workspace_id = function () {
        return this._workspace_id;
    };
    BaseEvent.prototype.set_workspace_id = function (val) {
        this._workspace_id = val;
    };
    BaseEvent.prototype.get_block_id = function () {
        // Block ID would be undefined if not block event.
        return this._block_id;
    };
    BaseEvent.prototype.serialize = function () {
        return undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], BaseEvent.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], BaseEvent.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.json)
    ], BaseEvent.prototype, "json", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], BaseEvent.prototype, "workspace_db", void 0);
    return BaseEvent;
}());
exports.BaseEvent = BaseEvent;
