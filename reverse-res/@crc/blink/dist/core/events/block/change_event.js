"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var base_1 = require("../../utils/base");
var block_event_1 = require("./block_event");
var ChangeEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ChangeEvent, _super);
    function ChangeEvent(element, options) {
        var _this = _super.call(this, options.block) || this;
        _this.type = interfaces_1.BlockEventType.CHANGE;
        _this.element = element;
        _this._data = {
            block: options.block,
            name: options.name,
            old_value: options.old_value,
            new_value: options.new_value,
        };
        if ((0, base_1.is_block_svg)(options.block)) {
            if (_this.is('mutation', _this._data) || _this.is('change_procedure_param', _this._data)) {
                _this._new_json = _this.json.block_to_json(options.block);
                return _this;
            }
            if (_this.is('comment', _this._data)) {
                // 在事件中记录新建的注释json，用于协同
                if (typeof _this._data.new_value === 'string') {
                    var new_comment = _this._get_event_workspace().workspace_comment_db.get(_this._data.new_value);
                    new_comment && (_this._comment_json = _this.json.comment_to_json(new_comment));
                }
            }
        }
        return _this;
    }
    ChangeEvent.prototype.is = function (event, data) {
        return this.element === event && !!data;
    };
    ChangeEvent.prototype.is_null = function () {
        return this._data.old_value == this._data.new_value;
    };
    ChangeEvent.prototype.run = function (is_forward) {
        var _a, _b, _c, _d, _e;
        var workspace = this._get_event_workspace();
        var block = workspace.get_element_from_db(this._block_id);
        if (!block) {
            // console.warn(
            //     'Can\'t change non-existant block: ' + this._block_id);
            return;
        }
        var field;
        if ((0, base_1.is_workspace_comment)(block)) {
            if (this.is('comment_text', this._data)) {
                block.set_text(is_forward ? this._data.new_value : this._data.old_value);
            }
            else if (this.is('comment_color', this._data)) {
                block.set_color_theme(is_forward ? this._data.new_value : this._data.old_value);
            }
            else if (this.is('comment_expand', this._data)) {
                block.set_expanded(is_forward ? this._data.new_value : this._data.old_value);
            }
            else if (this.is('comment_resize', this._data)) {
                var value = is_forward ? this._data.new_value : this._data.old_value;
                block.set_bubble_size(value[0], value[1]);
            }
            else {
                console.warn("Unknown change type: " + this.element);
            }
            return;
        }
        if (!(0, base_1.is_block_svg)(block)) {
            return;
        }
        if (this.is('field', this._data)) {
            var _f = this._data, name_1 = _f.name, new_value = _f.new_value, old_value = _f.old_value;
            var value = is_forward ? new_value : old_value;
            if (name_1 != undefined) {
                field = block.get_field(String(name_1));
                if (field) {
                    // Run the validator for any side-effects it may have.
                    // The validator's opinion on validity is ignored.
                    field.call_validator(value);
                    field.set_value(value, true);
                }
            }
        }
        else if (this.is('field_default_value', this._data)) {
            var _g = this._data, name_2 = _g.name, new_value = _g.new_value, old_value = _g.old_value;
            var value = is_forward ? new_value : old_value;
            if (name_2 != undefined) {
                field = block.get_field(String(name_2));
                if (field && (0, base_1.is_field_default_value)(field)) {
                    field.set_has_been_edited(value);
                }
            }
        }
        else if (this.is('comment', this._data)) {
            var _h = this._data, new_value = _h.new_value, old_value = _h.old_value;
            var value = is_forward ? new_value : old_value;
            switch (typeof value) {
                case 'string':
                    block.set_comment_text('', value);
                    if (block.comment) {
                        block.comment.set_expanded(true);
                        block.comment.init_svg();
                    }
                    break;
                case 'undefined':
                    block.set_comment_text(undefined);
                    break;
                default:
                    var xy = void 0;
                    var left = parseFloat(value.getAttribute('relativeleft_') || '');
                    var top_1 = parseFloat(value.getAttribute('relativetop_') || '');
                    if (!isNaN(left) && !isNaN(top_1)) {
                        xy = {
                            x: left,
                            y: top_1,
                        };
                    }
                    block.set_comment_text('', value.getAttribute('id') || undefined, xy);
                    this.xml.parse_comment_attributes(value, block.comment);
                    block.comment && block.comment.init_svg();
                    break;
            }
        }
        else if (this.is('collapsed', this._data)) {
            block.set_collapsed(is_forward ? this._data.new_value : this._data.old_value, true);
        }
        else if (this.is('disabled', this._data)) {
            block.set_disabled(is_forward ? this._data.new_value : this._data.old_value);
        }
        else if (this.is('inline', this._data)) {
            block.set_inputs_inline(is_forward ? this._data.new_value : this._data.old_value);
        }
        else if (this.is('mutation', this._data)) {
            var old_value = is_forward ? this._data.old_value : this._data.new_value;
            var new_value = is_forward ? this._data.new_value : this._data.old_value;
            if (typeof new_value !== 'undefined') {
                (_a = block.addMutation) === null || _a === void 0 ? void 0 : _a.call(block, new_value, (_b = this._data.name) === null || _b === void 0 ? void 0 : _b.toString());
            }
            else if (typeof old_value !== 'undefined') {
                (_c = block.removeMutation) === null || _c === void 0 ? void 0 : _c.call(block, old_value, (_d = this._data.name) === null || _d === void 0 ? void 0 : _d.toString());
            }
        }
        else if (this.is('visibility', this._data)) {
            block.set_chunk_visibility(is_forward ? this._data.new_value : this._data.old_value);
            block.update_chunk_visibility();
        }
        else if (this.is('group_block', this._data)) {
            var _j = this._data, new_value = _j.new_value, old_value = _j.old_value;
            var value = is_forward ? new_value : old_value;
            if (value) {
                var id = value[0], group_name = value[1], group_stop_at = value[2];
                block.hide_into_group(group_name, { id: id, group_stop_at: group_stop_at });
            }
            else {
                (_e = block.parent_group) === null || _e === void 0 ? void 0 : _e.release();
            }
        }
        else {
            var custom_callback = workspace.get_change_event(this.element);
            if (custom_callback) {
                custom_callback.call(this, is_forward);
            }
            else {
                console.warn("Unknown change type: " + this.element);
            }
        }
    };
    ChangeEvent.prototype.get_name = function () {
        return this._data.name;
    };
    ChangeEvent.prototype.get_new_value = function () {
        return this._data.new_value;
    };
    ChangeEvent.prototype.get_old_value = function () {
        return this._data.old_value;
    };
    ChangeEvent.prototype.update_new_value = function (value) {
        this._data.new_value = value;
    };
    // TODO 所有的事件的serialize接口都可以删掉了
    // 使用序列化的cooperation也一并删掉
    // 将在v0.28.0删除
    ChangeEvent.prototype.serialize = function () {
        return {
            id: this._block_id,
            group: this._group,
            element: this.element,
            old_value: this._data.old_value,
            new_value: this._data.new_value,
            name: this._data.name,
        };
    };
    ChangeEvent.prototype.get_new_comment = function () {
        return this._comment_json;
    };
    ChangeEvent.prototype.get_new_json = function () {
        return this._new_json;
    };
    ChangeEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], ChangeEvent);
    return ChangeEvent;
}(block_event_1.BlockEvent));
exports.ChangeEvent = ChangeEvent;
