"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var U = (0, tslib_1.__importStar)(require("../../utils/index"));
var di_1 = require("../../di");
var block_event_1 = require("./block_event");
var CreateEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(CreateEvent, _super);
    function CreateEvent(options) {
        var _this = _super.call(this, options.block) || this;
        _this.type = interfaces_1.BlockEventType.CREATE;
        _this.ids = [];
        _this.is_shadow = false;
        _this.source = options.source || 'other';
        var block = options.block;
        var ws = block.get_workspace();
        if (ws != undefined && ws.rendered) {
            _this._xml = _this.xml.workspace_element_to_dom_with_xy(block);
        }
        else {
            _this._xml = _this.xml.workspace_element_to_dom(block);
        }
        if (U.base.is_block_svg(block)) {
            _this.ids = block.get_descendant_ids();
            _this.is_shadow = block.is_shadow();
            _this._element_json = _this.json.block_to_json(block);
        }
        else if (U.base.is_workspace_comment(block)) {
            _this.ids = [block.id];
            _this._element_json = {
                blocks: {},
                comments: {},
                connections: {},
            };
            _this._element_json.comments[block.id] = _this.json.comment_to_json(block);
        }
        else {
            throw new Error('Trying to fire create event for unsupported workspace element.');
        }
        return _this;
    }
    CreateEvent.prototype.run = function (is_forward) {
        var workspace = this._get_event_workspace();
        if (is_forward) {
            var xml = U.dom.create_dom('xml');
            xml.appendChild(this._xml);
            this.xml.dom_to_workspace(xml, workspace);
            return;
        }
        for (var i = 0; i < this.ids.length; i++) {
            var id = this.ids[i];
            var block = workspace.get_element_from_db(id);
            if (block) {
                block.dispose(false, false);
            }
            else if (id == this._block_id && !this.is_shadow) {
                // Only complain about root-level block.
                // console.warn("Can't uncreate non-existent block: " + id);
                // TODO:
                // 1. 之前并没有统一的阻止shadow积木产生事件的方法。
                //  shadow无法被用户直接修改和创建，**其创建和修改都会被其他操作完成** 。
                //  因此从根本上说，shadow积木是不需要自己的block事件的。
                // 2. 其他积木增删shadow的时机也 **没有统一规则**，可能在该撤销事件执行前也可能在之后。
                //  如果在该事件之前发生，则此时相关shadow已经不存在，无法进入上面的 if 语句。
                // 3. 理论上，此处增加判断条件后，不应该对shadow积木报警。
                //  但是目前在积木的创建过程中，create事件是在constructor里生成的。
                //  而标记积木为shadow的方法，则是在创建完成之后，通过 set_shadow 方法完成的。
                //  因此，实际上 this.is_shadow 的值，不可能为true。
                //  需要修改该顺序后再放出该报警信息。
                // 相关积木：'text_join' / 'controls_if'
                // （其他的没检查，因为根本问题不是这里是否要报警，而是shadow不需要事件）
                // 在点击 + 时通过updateShape_方法生成新的shadow，updateShape_方法中没有避免shadow create事件的生成
                // 之后撤销，就会报警。
            }
        }
    };
    CreateEvent.prototype.get_element_json = function () {
        return this._element_json;
    };
    CreateEvent.prototype.serialize = function () {
        if (!this._element_json)
            return;
        var data = {
            group: this._group,
            blocks: this._element_json.blocks,
            comments: this._element_json.comments,
            connections: this._element_json.connections,
        };
        return data;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], CreateEvent.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], CreateEvent.prototype, "xml", void 0);
    CreateEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], CreateEvent);
    return CreateEvent;
}(block_event_1.BlockEvent));
exports.CreateEvent = CreateEvent;
