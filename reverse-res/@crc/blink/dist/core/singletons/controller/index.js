"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../di");
var dom_1 = require("../../utils/dom");
var Controller = /** @class */ (function () {
    function Controller() {
        this.container = (0, dom_1.create_dom)('div', {
            style: 'position: fixed',
            class: 'blocklyWidgetDiv',
        });
        this.container.style.display = 'none';
    }
    // should be implemented by subclasses
    Controller.prototype.show = function (owner, controller) {
        owner;
        controller;
    };
    Controller.prototype.hide = function () {
        this.container.style.display = 'none';
    };
    // should be implemented by subclasses
    Controller.prototype.update_value = function (value) {
        value;
    };
    Controller.prototype.position = function () {
        if (!this.owner || !this.container) {
            return;
        }
        var source_block = this.owner.source_block;
        if (!source_block) {
            return;
        }
        var scale = source_block.get_workspace().get_scale() || 1;
        this.container.style.transformOrigin = 'top left';
        this.container.style.transform = "scale(" + scale + ")";
        // 1px边框的误差
        var padding_y = (this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * scale;
        // 已通过transform进行缩放，不需要再乘以scale
        var slider_width = this.container.getBoundingClientRect().width;
        if (!source_block.is_shadow()) {
            var xy_1 = this.owner.get_absolute_xy();
            var field_size = this.owner.get_size();
            var field_width = field_size.width * scale;
            var field_height = field_size.height * scale;
            var offset_left_1 = xy_1[0] + field_width / 2 - slider_width / 2;
            var offset_top_1 = xy_1[1] + field_height + padding_y;
            this.container.style.left = offset_left_1 + "px";
            this.container.style.top = offset_top_1 + "px";
            return;
        }
        var element = source_block.svg_group;
        var xy = (0, dom_1.get_page_offset)(element);
        var block_width = source_block.width * scale;
        var block_height = source_block.height * scale;
        var offset_left = xy[0] + block_width / 2 - slider_width / 2;
        var offset_top = xy[1] + block_height + padding_y;
        this.container.style.left = offset_left + "px";
        this.container.style.top = offset_top + "px";
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], Controller.prototype, "theme", void 0);
    Controller = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Controller);
    return Controller;
}());
exports.Controller = Controller;
