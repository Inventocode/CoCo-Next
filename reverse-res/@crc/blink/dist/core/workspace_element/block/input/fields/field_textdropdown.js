"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldTextDropdown = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../../../../utils/dom");
var field_textinput_1 = require("./field_textinput");
var utils_1 = require("./utils");
var FieldTextDropdown = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldTextDropdown, _super);
    function FieldTextDropdown(get_options) {
        var _a;
        var _this = _super.call(this, { text: ((_a = get_options()[0]) === null || _a === void 0 ? void 0 : _a.value) || '' }) || this;
        _this.get_options = get_options;
        _this.field_type = 'FieldTextDropdown';
        _this.menu_items = [];
        _this.padding_x = 10;
        /**
         * 如果内容宽度小于最小宽度，需要在文字的左右两边增加水平margin使其占位宽度达到最小宽度
         */
        _this.text_margin = 0;
        return _this;
    }
    FieldTextDropdown.prototype.render_ = function () {
        var _a, _b;
        this.size_.width = 0;
        if (!this.visible_ || !this.field_group || !this.source_block) {
            return;
        }
        this.size_.width = this.padding_x;
        // width在绘制过程中更新
        this.update_height();
        this.render_text_element();
        this.render_arrow();
        (_a = this.border_rect) === null || _a === void 0 ? void 0 : _a.setAttribute('width', String(this.size_.width));
        (_b = this.border_rect) === null || _b === void 0 ? void 0 : _b.setAttribute('height', String(this.size_.height));
    };
    FieldTextDropdown.prototype.render_text_element = function () {
        if (!this.text_element || !this.field_group)
            return;
        (0, dom_1.remove_children)(this.text_element);
        this.text_element.appendChild(document.createTextNode(this.get_display_text()));
        var text_element_width = this.utils.get_cached_width(this.text_element);
        this.text_margin = text_element_width < this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD
            ? (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD - text_element_width) / 2
            : 0;
        this.size_.width += this.text_margin;
        this.text_element.setAttribute('y', String(this.size_.height / 2));
        this.text_element.setAttribute('x', String(this.size_.width));
        this.size_.width += text_element_width + this.text_margin;
    };
    FieldTextDropdown.prototype.render_arrow = function () {
        var _this = this;
        if (!this.field_group || !this.source_block)
            return;
        if (!this.arrow) {
            this.arrow = (0, utils_1.draw_arrow)(this.source_block.workspace.options.dropdown.arrow_type);
            this.field_group.appendChild(this.arrow);
        }
        this.size_.width += this.source_block.workspace.options.dropdown.padding;
        this.arrow.setAttribute('transform', "translate(" + this.size_.width + ", " + (this.size_.height / 2 - 7) + ")");
        this.size_.width += 12 + this.source_block.workspace.options.dropdown.padding;
        if (!this.source_block.is_shadow()) {
            this.arrow.style.fill = this.source_block.get_colour().toString();
            return;
        }
        var set_arrow_color = function () {
            var _a;
            var parent_block = (_a = _this.source_block) === null || _a === void 0 ? void 0 : _a.get_parent();
            if (parent_block) {
                _this.arrow && (_this.arrow.style.fill = parent_block.get_colour().toString());
            }
        };
        if (this.events.is_record_undo()) {
            set_arrow_color();
        }
        else {
            window.setTimeout(set_arrow_color);
        }
    };
    FieldTextDropdown.prototype.widget_dispose = function () {
        var _this = this;
        return function () {
            _super.prototype.widget_dispose.call(_this)();
            _this.menu && (0, dom_1.remove_node)(_this.menu);
            _this.menu_items = [];
            _this.menu = undefined;
        };
    };
    /**
     * 所有 field 必须定义这个方法，由 gesture 把控最后的手势
     */
    FieldTextDropdown.prototype.show_editor = function () {
        var input = _super.prototype.show_editor.call(this);
        if (!this.source_block)
            return input;
        var scale = this.source_block.workspace.get_scale();
        input.style.paddingLeft = (this.padding_x + this.text_margin) * scale + "px";
        input.style.textAlign = 'start';
        this.menu = this.create_dropdown_element();
        return input;
    };
    FieldTextDropdown.prototype.create_dropdown_element = function () {
        var _this = this;
        this.menu_items = [];
        var menu = document.createElement('div');
        menu.classList.add('menu-wrapper');
        var options = this.get_options();
        var _loop_1 = function (i) {
            var option = options[i];
            var menu_item = document.createElement('div');
            menu_item.classList.add('menu-item');
            menu_item.dataset.value = option.value;
            menu_item.innerText = option.value;
            // 用于接收焦点
            menu_item.setAttribute('tabindex', '-1');
            menu_item.style.outline = 'none';
            if (option.value === this_1.get_value()) {
                menu_item.classList.add('menu_item_selected');
            }
            menu.appendChild(menu_item);
            // 最小宽度规定
            var MIN_MENU_WIDTH = 172;
            menu_item.style.minWidth = MIN_MENU_WIDTH + "px";
            menu_item.addEventListener('click', function () {
                _this.set_html_input_value(option.value);
                _this.widget_div.hide();
            });
            this_1.menu_items.push(menu_item);
        };
        var this_1 = this;
        for (var i = 0; i < options.length; i++) {
            _loop_1(i);
        }
        menu.classList.add('blocklyDropdownMenu');
        var dropdown_container = (0, dom_1.create_dom)('div', {
            style: 'position: fixed',
            class: 'blocklyWidgetDiv',
        });
        dropdown_container.appendChild(menu);
        document.body.appendChild(dropdown_container);
        dropdown_container.style.display = 'block';
        var xy = (0, utils_1.position_dropdown)(menu, this);
        dropdown_container.style.left = xy[0] + "px";
        dropdown_container.style.top = xy[1] + "px";
        return dropdown_container;
    };
    FieldTextDropdown.prototype.highlight_matched = function () {
        var _this = this;
        if (!this.menu)
            return;
        var _loop_2 = function (i, len) {
            var menu_item = this_2.menu_items[i];
            if (this_2.get_value() === menu_item.dataset.value) {
                menu_item.classList.add('menu-item-hover');
                var item_rect = menu_item.getBoundingClientRect();
                var menu_rect = this_2.menu.getBoundingClientRect();
                var is_top_overflow_1 = item_rect.top < menu_rect.top;
                var is_bottom_overflow = item_rect.bottom > menu_rect.bottom;
                if (is_top_overflow_1 || is_bottom_overflow) {
                    // 输入时同步调用scrollIntoView会失效，因此在下一帧执行
                    requestAnimationFrame(function () {
                        if (!_this.menu)
                            return;
                        menu_item.scrollIntoView(is_top_overflow_1);
                        // 对于滚动的表现，刚打开时使用默认参数（auto），之后输入过程中使用smooth
                        if (!_this.menu.classList.contains('scroll-smooth')) {
                            _this.menu.classList.add('scroll-smooth');
                        }
                    });
                }
            }
            else {
                menu_item.classList.remove('menu-item-hover');
            }
        };
        var this_2 = this;
        for (var i = 0, len = this.menu_items.length; i < len; i++) {
            _loop_2(i, len);
        }
    };
    FieldTextDropdown.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.menu && (0, dom_1.remove_node)(this.menu);
        this.widget_div.hide_if_owner(this);
    };
    FieldTextDropdown.prototype.on_html_input_change = function () {
        _super.prototype.on_html_input_change.call(this);
        this.html_input.style.paddingLeft =
            (this.padding_x + this.text_margin) * this.workspace_.get_scale() + "px";
        this.highlight_matched();
    };
    FieldTextDropdown = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldTextDropdown);
    return FieldTextDropdown;
}(field_textinput_1.FieldTextInput));
exports.FieldTextDropdown = FieldTextDropdown;
