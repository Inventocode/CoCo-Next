"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var di_1 = require("../../di");
var U = (0, tslib_1.__importStar)(require("../../utils/index"));
var block_event_1 = require("./block_event");
var DeleteEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(DeleteEvent, _super);
    function DeleteEvent(options) {
        var _this = _super.call(this, options.block) || this;
        _this.type = interfaces_1.BlockEventType.DELETE;
        _this.ids = [];
        _this.is_shadow = false;
        var block = options.block;
        if (U.base.is_block_svg(block) && block.get_parent()) {
            console.error('Connected blocks cannot be deleted.');
            return _this;
        }
        var workspace = block.get_workspace();
        if (workspace != undefined && workspace.rendered) {
            _this.old_xml = _this.xml.workspace_element_to_dom_with_xy(block);
        }
        else {
            _this.old_xml = _this.xml.workspace_element_to_dom(block);
        }
        _this.ids = [block.id];
        if (U.base.is_block_svg(block)) {
            _this.ids = block.get_descendant_ids();
            _this.is_shadow = block.is_shadow();
        }
        return _this;
    }
    /**
     * Run a deletion event.
     * @param is_forward True if run forward, false if run backward (undo).
     */
    DeleteEvent.prototype.run = function (is_forward) {
        var workspace = this._get_event_workspace();
        if (is_forward) {
            for (var i = 0; i < this.ids.length; i++) {
                var id_1 = this.ids[i];
                var block = workspace.get_element_from_db(id_1);
                if (block) {
                    block.dispose(false, false);
                }
                else if (id_1 === this._block_id && !this.is_shadow) {
                    // Only complain about root-level block.
                    console.warn("Can't delete non-existent block: " + id_1);
                }
            }
            return;
        }
        var id = this.old_xml.getAttribute('id');
        if (id) {
            var block = workspace.get_element_from_db(id);
            // dispose 掉，确保在接下来的 dom_to_workspace 拿到的是最新的
            // 应该是处理了kitten里某块积木的问题（但这里肯定不是根本原因，删除事件撤销的时候相关积木应该是不存在ws里的。）
            // 来源：https://phab.srv.codemao.cn/rIDE9271da5ba8789e70b97b1a391f574c38d150b7b5
            // TODO：查清问题
            if (block != undefined) {
                block.dispose(false, false);
            }
            var xml = U.dom.create_dom('xml');
            xml.appendChild(this.old_xml);
            this.xml.dom_to_workspace(xml, workspace);
        }
    };
    DeleteEvent.prototype.serialize = function () {
        return {
            id: this._block_id,
            all_ids: this.ids,
            group: this._group,
        };
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], DeleteEvent.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], DeleteEvent.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], DeleteEvent.prototype, "Blink", void 0);
    DeleteEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], DeleteEvent);
    return DeleteEvent;
}(block_event_1.BlockEvent));
exports.DeleteEvent = DeleteEvent;
