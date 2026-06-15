"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeData = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var Hammer = (0, tslib_1.__importStar)(require("hammerjs"));
var di_1 = require("../di");
var dom_1 = require("../utils/dom");
var RuntimeData = /** @class */ (function () {
    function RuntimeData() {
        var _this = this;
        this.selected = undefined;
        this.editing = undefined;
        this.pasting_count = 0;
        this.dragging_connections = [];
        this.hide_chaff_effects = [];
        this.document_events_bound = false;
        this.before_scale = 1;
        this.pinch_listener = function (ev) {
            var ws = _this.workspace_db.current;
            if (ws.current_gesture_) {
                ws.current_gesture_.cancel();
            }
            var current_scale = ev.scale;
            if (current_scale - _this.before_scale > 0.08) {
                ws.mark_focused();
                ws.zoom_center(0.5);
                _this.before_scale = current_scale;
            }
            else if (current_scale - _this.before_scale < -0.08) {
                ws.mark_focused();
                ws.zoom_center(-0.5);
                _this.before_scale = current_scale;
            }
        };
        this.pinchend_listener = function () {
            _this.before_scale = 1;
        };
        this.clipboard = new Clipboard();
    }
    RuntimeData.prototype.set_pasting = function (is_pasting) {
        is_pasting ? this.pasting_count++ : this.pasting_count--;
    };
    RuntimeData.prototype.is_pasting = function () {
        return this.pasting_count;
    };
    RuntimeData.prototype.register_finger_events = function () {
        if (!this.hammer_manager) {
            var el = document.querySelector('.blocklySvg');
            this.hammer_manager = new Hammer.Manager(el);
        }
        if (!this.pinch_recognizer) {
            this.pinch_recognizer = new Hammer.Pinch();
        }
        this.hammer_manager.add(this.pinch_recognizer);
        this.hammer_manager.on('pinch', this.pinch_listener);
        this.hammer_manager.on('pinchend', this.pinchend_listener);
    };
    RuntimeData.prototype.unregister_finger_events = function () {
        var _a, _b, _c;
        if (this.pinch_recognizer) {
            (_a = this.hammer_manager) === null || _a === void 0 ? void 0 : _a.remove(this.pinch_recognizer);
        }
        (_b = this.hammer_manager) === null || _b === void 0 ? void 0 : _b.off('pinch', this.pinch_listener);
        (_c = this.hammer_manager) === null || _c === void 0 ? void 0 : _c.off('pinchend', this.pinchend_listener);
    };
    /**
     * TODO: 多指触控会导致 gesture 出错，先暂时这样处理。 @yanghanfei
     */
    RuntimeData.prototype.cancel_gesture_when_multi_touch = function () {
        var _this = this;
        var _a;
        // 在 workspace 的多指触控将取消掉当前的 gesture
        (_a = this.workspace_db.current) === null || _a === void 0 ? void 0 : _a.get_parent_svg().addEventListener('touchmove', function (e) {
            var ws = _this.workspace_db.current;
            if (e.touches.length > 1 &&
                ws.current_gesture_) {
                ws.current_gesture_.cancel();
            }
        });
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], RuntimeData.prototype, "workspace_db", void 0);
    RuntimeData = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], RuntimeData);
    return RuntimeData;
}());
exports.RuntimeData = RuntimeData;
// blink的剪切板
var Clipboard = /** @class */ (function () {
    function Clipboard() {
    }
    Clipboard.prototype.get_content = function () {
        if (!this.content) {
            return undefined;
        }
        if (Array.isArray(this.content)) {
            return this.content.map(function (b) { return (0, dom_1.clone_node)(b, true); });
        }
        return (0, dom_1.clone_node)(this.content, true);
    };
    /**
     * Store a block into clipboard content.
     * @param block the block to be copied.
     * @return the copied xml.
     */
    Clipboard.prototype.copy = function (block) {
        var xml_block = this.xml.workspace_element_to_dom_with_xy(block);
        this.content = xml_block;
        return xml_block;
    };
    /**
     * Store an array of blocks into clipboard content.
     * @param blocks the blocks to be copied.
     * @return the copied xml.
     */
    Clipboard.prototype.copy_all = function (blocks) {
        var _this = this;
        var xml = blocks.map(function (b) { return _this.xml.workspace_element_to_dom_with_xy(b); });
        this.content = xml;
        return xml;
    };
    /**
     * Store a block into clipboard content, and paste it onto
     * the source workspace immediately.
     * @param block the block to be copy and paste.
     * @return the copied xml.
     */
    Clipboard.prototype.duplicate = function (block) {
        // Encode start position in XML.
        var xml_block = this.copy(block);
        block.get_workspace().paste((0, dom_1.clone_node)(xml_block, true));
        return xml_block;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], Clipboard.prototype, "xml", void 0);
    return Clipboard;
}());
