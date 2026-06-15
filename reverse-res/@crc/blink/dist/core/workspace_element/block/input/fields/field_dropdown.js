"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldDropdown = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../../../di");
var interfaces_1 = require("../../../../interfaces");
var dom_1 = require("../../../../utils/dom");
var is_1 = require("../../../../utils/is");
var base_1 = require("../../../../utils/base");
var asserts_1 = require("../../../../utils/asserts");
var style_1 = require("../../../../utils/style");
var maths_1 = require("../../../../utils/maths");
var field_1 = require("./field");
var utils_1 = require("./utils");
var FieldDropdown = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldDropdown, _super);
    function FieldDropdown(o) {
        var _this = _super.call(this, undefined, o.opt_validator) || this;
        _this.field_type = 'FieldDropdown';
        /**
        * Language-neutral currently selected string or image object.
        */
        _this.value_ = '?';
        _this.prefix_field = undefined;
        _this.suffix_field = undefined;
        _this.generate_customized_dropdown = undefined;
        _this.menu_generator = o.menu_generator;
        _this.menu_generator_advanced = o.menu_generator_advanced;
        var options = _this.get_advanced_options() ? _this.get_expanded_advanced_options() : _this.get_basic_options();
        var selected_index = (0, base_1.is_func)(o.selected_index) ? o.selected_index() : (o.selected_index || 0);
        while (options[selected_index] &&
            (!_this.get_option_value(options[selected_index]) || _this.get_option_callback(options[selected_index]))) {
            selected_index++;
        }
        var default_selection = options[selected_index] && _this.get_option_value(options[selected_index]) || '?';
        _this.trim_options();
        _this.set_value(default_selection);
        _this.onchange = o.opt_onchange;
        return _this;
    }
    /**
     * Install this dropdown on a block.
     */
    FieldDropdown.prototype.init = function () {
        if (!this.source_block)
            return;
        this.arrow_ = (0, utils_1.draw_arrow)(this.source_block.workspace.options.dropdown.arrow_type);
        _super.prototype.init.call(this);
        if (this.source_block.is_shadow()) {
            this.source_block.get_svg_root().classList.add('blocklyShadowDropdown');
        }
        this.field_group && this.field_group.classList.add('blocklyFieldDropdown');
    };
    FieldDropdown.prototype.bind_field_click_event = function () {
        if (!this.source_block)
            return;
        if (!this.source_block.is_shadow()) {
            _super.prototype.bind_field_click_event.call(this);
        }
        else {
            var click_node = this.source_block.get_svg_root();
            this.mouse_down_wrapper = this.events.bind_event_with_checks(click_node, 'mouseup', this, this.on_mouse_down);
        }
    };
    /**
     * Draws the border with the correct width.
     */
    FieldDropdown.prototype.render_ = function () {
        var _a, _b;
        if (!this.visible_ || !this.source_block) {
            this.size_.width = 0;
            return;
        }
        if (!this.field_group || !this.arrow_) {
            // insertion_marker no need render
            return;
        }
        (0, dom_1.remove_children)(this.field_group);
        this.size_.width = this.source_block.workspace.options.dropdown.padding;
        this.update_height();
        this.render_border();
        this.render_image_element();
        this.render_text_element();
        this.field_group.appendChild(this.arrow_);
        this.size_.width += this.source_block.workspace.options.dropdown.padding;
        this.arrow_.setAttribute('transform', "translate(" + this.size_.width + ", " + (this.size_.height / 2 - 7) + ")");
        this.size_.width += 12 + this.source_block.workspace.options.dropdown.padding;
        this.change_editor_style(false);
        // shadow block下的dropdown为可嵌入可下拉样式（如列表下拉框）。
        // 与普通dropdown样式有差别，且show editor时的操作也有差别。
        if (!this.source_block.is_shadow()) {
            this.render_not_shadow_style();
        }
        else {
            this.render_shadow_style();
        }
        (_a = this.border_rect) === null || _a === void 0 ? void 0 : _a.setAttribute('height', String(this.size_.height));
        (_b = this.border_rect) === null || _b === void 0 ? void 0 : _b.setAttribute('width', String(this.size_.width));
    };
    FieldDropdown.prototype.render_border = function () {
        this.field_group && this.border_rect && this.field_group.appendChild(this.border_rect);
    };
    /**
     * Render the arrow directly when this field is appended to a non-shadow block.
     */
    FieldDropdown.prototype.render_not_shadow_style = function () {
        if (!this.source_block || !this.arrow_)
            return;
        this.arrow_.style.fill = this.source_block.get_colour().toString();
    };
    /**
     * Some inputs accept both choice from dropdown or an inserted block.
     * In this case, the dropdown is not appended to the parent block directly,
     * but appended to a shadow block and then connected to the parent instead.
     * Color of the arrow is decided by the parent block of the source block.
     */
    FieldDropdown.prototype.render_shadow_style = function () {
        var _this = this;
        var set_arrow_color = function () {
            var parent_block = _this.source_block && _this.source_block.get_parent();
            if (parent_block && _this.arrow_) {
                _this.arrow_.style.fill = parent_block.get_colour().toString();
            }
        };
        /**
         * In normal block creation flow, all BlockSvg and Field class are constructed without rendering,
         *  then data is set, and then render happens from top to bottom.
         *
         * But consider such a situation: move a number block to replace a shadow block with dropdown.
         * In this case, several events are recorded:
         * - movement of number block
         * - disconnection of shadow block
         * - dispose of shadow block
         * - connection of number block
         * When undo this connect operation, even if these events are in the same group, they are run one by one.
         * The dropdown is re-created when the shadow block is re-created, and then the shadow block is re-connected to the parent.
         * Since the two steps are separated, the source block has no parent when this dropdown is re-render.
         * So the set_arrow_color should be delayed while undoing.
         */
        if (this.events.is_record_undo()) {
            set_arrow_color();
        }
        else {
            window.setTimeout(set_arrow_color);
        }
    };
    FieldDropdown.prototype.render_text_element = function () {
        var text = this.get_display_text();
        // 如果text为空或只有空格，则不创建text element。
        // 这种dropdown可能是只有图标，需要避免空白文本占位。
        if (!text.trim()) {
            return;
        }
        var text_element_width;
        if (is_1.is.safari() || is_1.is.mobile()) {
            this.text_element = (0, dom_1.create_svg_element)('text', { 'class': 'blocklyText', 'dy': '.4em', 'font-size': this.theme.font.SIZE }, this.field_group);
        }
        else {
            this.text_element = (0, dom_1.create_svg_element)('text', { 'class': 'blocklyText', 'dominant-baseline': 'central', 'font-size': this.theme.font.SIZE }, this.field_group);
        }
        var text_node = document.createTextNode(text);
        this.text_element.appendChild(text_node);
        this.text_element.setAttribute('text-anchor', 'start');
        this.text_element.setAttribute('y', String(this.size_.height / 2));
        this.text_element.setAttribute('x', String(this.size_.width));
        text_element_width = this.utils.get_cached_width(this.text_element);
        text_element_width = this.update_min_width(text_element_width);
        this.size_.width += text_element_width;
        return text_element_width;
    };
    FieldDropdown.prototype.update_min_width = function (current_width) {
        var MIN_WIDTH = 20;
        if (!this.text_element) {
            return MIN_WIDTH;
        }
        // Do nothing
        if (current_width >= MIN_WIDTH) {
            return current_width;
        }
        // Get the origin attr x
        var origin_x = this.text_element.getAttribute('x');
        var offset = (MIN_WIDTH - current_width) / 2;
        // Set the text to the right position
        this.text_element.setAttribute('x', String(Number(origin_x) + offset));
        return MIN_WIDTH;
    };
    FieldDropdown.prototype.render_image_element = function () {
        var _a;
        (0, asserts_1.assert)(this.field_group);
        if (!this.image_json || ((_a = this.image_json) === null || _a === void 0 ? void 0 : _a.is_hide)) {
            return;
        }
        this.image_element = this.create_image(this.image_json);
        this.field_group.appendChild(this.image_element);
        this.image_element.setAttribute('x', "" + this.size_.width);
        this.image_element.setAttribute('y', "" + (this.size_.height - Number(this.image_element.getAttribute('height'))) / 2);
        var margin_right = typeof this.image_json.margin_right === 'number' ? this.image_json.margin_right : 2;
        this.size_.width += Number(this.image_element.getAttribute('width')) + margin_right;
    };
    /**
     * Get the language-neutral value from this dropdown menu.
     * @return Current text.
     */
    FieldDropdown.prototype.get_value = function () {
        return this.value_;
    };
    /**
     * Create a dropdown menu under the text.
     */
    FieldDropdown.prototype.show_editor = function () {
        var _this = this;
        if (!this.source_block) {
            return;
        }
        // 检查是否 extension 重写了这个方法，例如部分音乐积木
        if (this.source_block.show_editor) {
            var set_value = function (value) { _this.set_value(value); };
            this.source_block.show_editor(set_value, this.value_);
            return;
        }
        // 如硬件积木，外部对特定积木做了判断
        if (this.show_editor_extend(this)) {
            return;
        }
        this.change_editor_style(true);
        var menu;
        if (this.generate_customized_dropdown) {
            menu = this.generate_customized_dropdown();
        }
        else {
            menu = this.create_dropdown_element(this.get_advanced_options() || this.get_basic_options(), this.name);
            this.update_widget_div_position(menu);
        }
    };
    FieldDropdown.prototype.create_image = function (icon) {
        var icon_item = typeof icon.src === 'string'
            ? (0, dom_1.create_svg_element)('image', { 'xlink:href': icon.src, 'width': '100%', 'height': '100%' })
            : typeof icon.src === 'number' ? (0, dom_1.get_num_g)(icon.src) : (0, dom_1.clone_node)(icon.src, true);
        var image_width = icon.width || icon_item.getAttribute('width') || 16;
        var image_height = icon.height || Number(icon_item.getAttribute('height')) || 16;
        var image = (0, dom_1.create_svg_element)('svg', { width: image_width, height: image_height });
        image.appendChild(icon_item);
        return image;
    };
    FieldDropdown.prototype.create_menu_item_div = function (text, value, icon, callback, parent_group, enabled, tooltip) {
        var _this = this;
        if (enabled === void 0) { enabled = true; }
        var menu_item = (0, dom_1.create_div_element)();
        if (icon) {
            var image = this.create_image(icon);
            var margin_right = typeof icon.margin_right === 'number' ? icon.margin_right : 2;
            image.style.marginRight = margin_right + "px";
            menu_item.appendChild(image);
        }
        var text_span = document.createElement('span');
        text_span.innerText = text;
        menu_item.appendChild(text_span);
        menu_item.classList.add('menu-item');
        if (!enabled) {
            menu_item.classList.add('menu_item_disable');
        }
        if (callback) {
            menu_item.classList.add('menu_button');
        }
        menu_item.dataset.value = value;
        if (value === this.value_) {
            menu_item.classList.add('menu_item_selected');
            parent_group === null || parent_group === void 0 ? void 0 : parent_group.classList.add('menu_item_selected');
        }
        if (tooltip) {
            menu_item.tooltip = tooltip;
            this.tooltip.bind_mouse_event(menu_item);
        }
        menu_item.addEventListener('click', function (e) {
            if (!enabled) {
                return;
            }
            e.stopImmediatePropagation();
            e.preventDefault();
            if (callback) {
                callback.call(_this.set_value.bind(_this));
            }
            else if (value !== undefined) {
                _this.set_value(value);
            }
            _this.widget_div.hide_if_owner(_this);
            _this.tooltip.hide();
            _this.events.set_group(false);
        });
        // 实测在移动端如果去掉这个方法直接用&:active的话，背景色的改变有略微延迟
        // 猜测的一个原因：移动端点击的判定延迟 https://thx.github.io/mobile/300ms-click-delay
        // 点击事件的触发可以通过meta修改，但active效果的触发依然有延迟
        // 目前看来绑定touchstart和touchend方法是唯一的解决方案
        if (callback || value !== undefined && enabled) {
            menu_item.addEventListener('touchstart', function () {
                menu_item.classList.add('menu_touch_effect');
            });
            menu_item.addEventListener('touchend', function () {
                menu_item.classList.remove('menu_touch_effect');
            });
        }
        return menu_item;
    };
    FieldDropdown.prototype.create_menu_item = function (option, parent_group) {
        var _this = this;
        if (!(0, base_1.is_old_dropdown_option)(option) && option.type === 'basic') {
            var menu_button = this.create_menu_item_div(option.text, option.value, option.icon, option.callback, parent_group, option.enabled, option.tooltip);
            return menu_button;
        }
        if (!(0, base_1.is_old_dropdown_option)(option) && option.type === 'group') {
            var menu_group_1 = this.create_menu_item_div(option.name, undefined, undefined, undefined, parent_group);
            menu_group_1.classList.add('menu_group');
            menu_group_1.dataset.group_key = option.value || (0, maths_1.gen_uid)();
            var children_div_1 = this.create_dropdown_element(option.options, undefined, menu_group_1);
            children_div_1.classList.add('menu_group_children');
            children_div_1.dataset.group_key = menu_group_1.dataset.group_key;
            menu_group_1.addEventListener('mouseover', function (e) {
                e.stopPropagation();
                _this.update_group_children_div_position(children_div_1, menu_group_1);
                menu_group_1.classList.add('menu_group_expanded');
            });
            var hide_cb = function (e) {
                e.stopPropagation();
                if (!e.relatedTarget ||
                    (!(0, dom_1.is_parent)(children_div_1, e.relatedTarget) && !(0, dom_1.is_parent)(menu_group_1, e.relatedTarget))) {
                    (0, dom_1.remove_node)(children_div_1);
                    menu_group_1.classList.remove('menu_group_expanded');
                }
            };
            menu_group_1.addEventListener('mouseout', hide_cb);
            children_div_1.addEventListener('mouseout', hide_cb);
            return menu_group_1;
        }
        if (!(0, base_1.is_old_dropdown_option)(option) && option.type === 'image_plus') {
            var index_icon = option.index === undefined
                ? undefined
                : typeof option.index === 'number' ? { src: option.index } : option.index;
            var menu_image_plus = this.create_menu_item_div(option.text || '', option.value, index_icon, option.callback, parent_group, option.enabled, option.tooltip);
            menu_image_plus.classList.add('menu_item_image_plus');
            var img = this.create_image(option.image_plus);
            var img_plus_wrapper = document.createElement('div');
            img_plus_wrapper.classList.add('image_plus');
            img_plus_wrapper.appendChild(img);
            menu_image_plus.lastElementChild && (0, dom_1.insert_before)(img_plus_wrapper, menu_image_plus.lastElementChild);
            return menu_image_plus;
        }
        if (!(0, base_1.is_old_dropdown_option)(option) && option.type === 'line') {
            var divider = document.createElement('div');
            divider.classList.add('dropdown_divider');
            return divider;
        }
        // undefined or invalid type
        var menu_item = this.create_menu_item_div(option[interfaces_1.OptionTypes.TEXT], option[interfaces_1.OptionTypes.VALUE], option[interfaces_1.OptionTypes.ICON], option[interfaces_1.OptionTypes.TRIGGER_EVENT], parent_group);
        return menu_item;
    };
    FieldDropdown.prototype.create_dropdown_element = function (options, data_name, parent_group) {
        var menu = document.createElement('div');
        menu.classList.add('blocklyDropdownMenu');
        menu.classList.add('menu-wrapper');
        this.source_block && menu.classList.add(this.source_block.type);
        data_name && menu.classList.add(data_name);
        for (var i = 0; i < options.length; i++) {
            menu.appendChild(this.create_menu_item(options[i], parent_group));
        }
        return menu;
    };
    FieldDropdown.prototype.update_group_children_div_position = function (children, parent) {
        document.body.appendChild(children);
        var children_rect = (0, style_1.get_size)(children);
        var parent_rect = (0, style_1.get_size)(parent);
        var _a = parent.getBoundingClientRect(), left = _a.left, top = _a.top;
        var children_padding_top = parseFloat((0, style_1.get_computed_style)(children, 'padding-top')) || 0;
        var children_padding_bottom = parseFloat((0, style_1.get_computed_style)(children, 'padding-bottom')) || 0;
        // 确定纵向位置
        if (top + children_rect.height - children_padding_top >= window.innerHeight) { // 超出屏幕下边缘，需要靠上对齐
            var children_item_height = children.lastElementChild && (0, style_1.get_size)(children.lastElementChild).height || 0;
            top -= children_rect.height;
            top += children_padding_bottom;
            top += children_item_height;
        }
        else {
            top -= children_padding_top;
        }
        // 确定横向位置
        if (left + parent_rect.width + children_rect.width >= window.innerWidth) { // 超出屏幕右边缘，需要靠左对齐
            left -= children_rect.width;
        }
        else {
            left += parent_rect.width;
        }
        children.style.left = left + "px";
        children.style.top = top + "px";
    };
    FieldDropdown.prototype.update_widget_div_position = function (menu) {
        var _this = this;
        this.widget_div.show(this, function () {
            _this.focus(false);
            _this.change_editor_style(false);
            Array.from(document.querySelectorAll('.menu_group_children')).forEach(function (ele) { return (0, dom_1.remove_node)(ele); });
        });
        var div = this.widget_div.DIV;
        div === null || div === void 0 ? void 0 : div.appendChild(menu);
        var xy = (0, utils_1.position_dropdown)(menu, this);
        this.widget_div.position(xy[0], xy[1]);
    };
    // 外部项目重写，如果改写了这个方法
    // 例如弹出钢琴，则不会走原来 field_dropdown 的逻辑
    FieldDropdown.prototype.show_editor_extend = function (field_dropdown) {
        field_dropdown;
        return false;
    };
    /**
     * Change the field style on block by setting data-showing attribute.
     * If it is called when showing a menu, it should also be called when hiding to ensure the field style is correct.
     * (Since it is called by render_, so it should only be called manually when the value is not change.)
     * @param is_show true if showing menu.
     */
    FieldDropdown.prototype.change_editor_style = function (is_show) {
        if (!this.source_block)
            return;
        if (is_show) {
            // 非 shadow 的时候更改自身的 border_rect 颜色
            if (!this.source_block.is_shadow() &&
                this.field_group) {
                // specify the showing status
                this.field_group.setAttribute('data-showing', 'true');
            }
            // shadow 的时候更改 source block 的颜色
            if (this.source_block.is_shadow()) {
                // specify the showing status
                this.source_block.svg_group.setAttribute('data-showing', 'true');
            }
            return;
        }
        if (this.field_group) {
            this.field_group.removeAttribute('data-showing');
        }
        if (this.source_block.is_shadow()) {
            this.source_block.svg_group.removeAttribute('data-showing');
        }
    };
    /**
     * Set the language-neutral value for this dropdown menu.
     * @param new_value New value to set.
     */
    FieldDropdown.prototype.set_value = function (new_value) {
        if (!this.get_advanced_options() && !this.get_basic_options()) {
            return;
        } // first call by Field
        if (new_value == undefined) {
            this.change_editor_style(false);
            return; // No change if undefined.
        }
        // Look up and display the human-readable text.
        var new_option = this.get_option(new_value);
        var new_text = new_option && this.get_option_text(new_option) || '';
        // value和text都没有变化时，才判定为无变化
        if (new_value === this.value_ && new_text === this.text_) {
            this.change_editor_style(false);
            return;
        }
        var event;
        var current_group = this.events.get_group();
        if (this.source_block) {
            // if (this.onchange) {
            //   // onchange 方法一般会改变积木的形状，造成 field 或 shadow block 的增减。
            //   // 因此需要在改变之前记录下整块积木的xml用于撤销。
            //   const old_xml = this.xml.block_to_dom_with_xy(this.source_block);
            //   event = new this.ChangeEvent(this.source_block, 'field_dropdown', old_xml, new_value, this.name);
            //   this.events.disable();
            //   this.onchange(new_value);
            //   this.events.enable();
            // } else {
            //   // 无 onchange 方法的field_dropdown，只需要记录前后数值
            //   event = new this.ChangeEvent(this.source_block, 'field', this.value_, new_value, this.name);
            // }
            if (this.events.is_enabled()) {
                !current_group && this.events.set_group(true);
                event = this.change_event_factory('field', {
                    block: this.source_block,
                    old_value: this.value_,
                    new_value: new_value,
                    name: this.name,
                });
            }
            this.onchange && this.onchange(new_value);
        }
        this.value_ = new_value;
        if (new_option) {
            var new_icon = this.get_option_icon(new_option);
            if (new_icon !== this.image_json || new_text !== this.text_) {
                this.image_json = new_icon;
                this.text_ = new_text;
                this.force_rerender();
            }
            if (this.events.is_enabled() && event) {
                this.events.fire(event);
                this.events.set_group(current_group);
            }
            return;
        }
        // For value cannot find in options, reset to '?'
        // Todo except for tell block (local variable && styles)
        this.value_ = '?';
        this.image_json = undefined;
        this.set_text('?');
        if (this.events.is_enabled() && event) {
            this.events.fire(event);
            this.events.set_group(current_group);
        }
    };
    /**
     * @override enable icon to be set. Field alue and text may not macth
     *  after manually call this method.
     */
    FieldDropdown.prototype.set_text = function (new_text, new_icon) {
        if (new_text === this.text_ && (!new_icon || new_icon === this.image_json)) {
            return;
        }
        this.text_ = new_text;
        new_icon && (this.image_json = new_icon);
        this.force_rerender();
    };
    /**
     * Factor out common words in statically defined options.
     * Create prefix and/or suffix labels.
     * @private
     * @deprecated 旧版options将不再支持
     */
    FieldDropdown.prototype.trim_options = function () {
        this.prefix_field = undefined;
        this.suffix_field = undefined;
        if (this.is_dynamic()) {
            return;
        }
        var options = this.get_options();
        var hasImages = false;
        // Localize label text and image alt text.
        for (var i = 0; i < options.length; i++) {
            var label = options[i][0];
            if (typeof label == 'string') {
                options[i][0] = this.utils.replace_message_references(label);
            }
            else {
                if (label && label.alt != undefined) {
                    label.alt = this.utils.replace_message_references(label.alt);
                }
                hasImages = true;
            }
        }
        if (hasImages || options.length < 2) {
            return; // Do nothing if too few items or at least one label is an image.
        }
        var strings = [];
        for (var i = 0; i < options.length; i++) {
            strings.push(options[i][0]);
        }
        var prefixLength = this.utils.common_word_prefix(strings);
        var suffixLength = this.utils.common_word_suffix(strings);
        if (!prefixLength && !suffixLength) {
            return;
        }
        if (prefixLength) {
            this.prefix_field = strings[0].substring(0, prefixLength - 1);
        }
        if (suffixLength) {
            this.suffix_field = strings[0].substr(1 - suffixLength);
        }
        // Remove the prefix and suffix from the options.
        var newOptions = [];
        for (var i = 0; i < options.length; i++) {
            var text = options[i][0];
            var value = options[i][1];
            text = text.substring(prefixLength, text.length - suffixLength);
            newOptions[i] = [
                text,
                value,
                undefined,
                undefined,
                undefined,
            ];
        }
        this.menu_generator = newOptions;
    };
    FieldDropdown.prototype.get_basic_options = function () {
        if ((0, base_1.is_func)(this.menu_generator)) {
            return this.menu_generator.call(this);
        }
        return this.menu_generator;
    };
    FieldDropdown.prototype.get_advanced_options = function () {
        if (!this.menu_generator_advanced) {
            return;
        }
        if ((0, base_1.is_func)(this.menu_generator_advanced)) {
            return this.menu_generator_advanced.call(this);
        }
        return this.menu_generator_advanced;
    };
    /**
     * Return a list of the options for this dropdown.
     * If advanced options found, FieldDropdownItems will be filtered and
     *  FieldDropdownGroups will be expanded.
     * @return Array of option tuples.
     * @deprecated 旧版options将不再支持
     */
    FieldDropdown.prototype.get_options = function () {
        var advanced_options = this.get_advanced_options();
        if (!advanced_options) {
            return this.get_basic_options();
        }
        var expanded_options = [];
        var extract_options = function (item) {
            if ((0, base_1.is_old_dropdown_option)(item)) {
                expanded_options.push(item);
                return;
            }
            if (item.type === 'group') {
                item.options.forEach(extract_options);
            }
        };
        advanced_options.forEach(extract_options);
        return expanded_options;
    };
    FieldDropdown.prototype.get_expanded_advanced_options = function () {
        var advanced_options = this.get_advanced_options();
        if (!advanced_options)
            return [];
        var expanded_options = [];
        var extract_options = function (item) {
            if (!(0, base_1.is_old_dropdown_option)(item) && item.type === 'group') {
                item.options.forEach(extract_options);
            }
            else {
                expanded_options.push(item);
            }
        };
        advanced_options.forEach(extract_options);
        return expanded_options;
    };
    FieldDropdown.prototype.get_option = function (value) {
        var _this = this;
        var find_option = function (candidates) {
            for (var i = 0; i < candidates.length; i++) {
                var option = candidates[i];
                if (!(0, base_1.is_old_dropdown_option)(option) && option.type === 'group') {
                    var g_res = find_option(option.options);
                    if (g_res)
                        return g_res;
                    continue;
                }
                if (_this.get_option_value(option) === value) {
                    return option;
                }
            }
            return undefined;
        };
        return find_option(this.get_advanced_options() || this.get_basic_options());
    };
    FieldDropdown.prototype.get_option_value = function (option) {
        if ((0, base_1.is_old_dropdown_option)(option)) {
            return option[interfaces_1.OptionTypes.VALUE];
        }
        switch (option.type) {
            case 'image_plus': return option.value;
            case 'basic': return option.value;
            default: return undefined;
        }
    };
    FieldDropdown.prototype.get_option_text = function (option) {
        if ((0, base_1.is_old_dropdown_option)(option)) {
            return option[interfaces_1.OptionTypes.TEXT];
        }
        switch (option.type) {
            case 'group': return option.name;
            case 'image_plus': return option.text;
            case 'basic': return option.text;
            default: return;
        }
    };
    FieldDropdown.prototype.get_option_icon = function (option) {
        if ((0, base_1.is_old_dropdown_option)(option)) {
            return option[interfaces_1.OptionTypes.ICON];
        }
        switch (option.type) {
            case 'image_plus': return option.index === undefined
                ? undefined
                : typeof option.index === 'number' ? { src: option.index } : option.index;
            case 'basic':
                return option.icon;
            default:
                return undefined;
        }
    };
    FieldDropdown.prototype.get_option_callback = function (option) {
        if ((0, base_1.is_old_dropdown_option)(option)) {
            return option[interfaces_1.OptionTypes.TRIGGER_EVENT];
        }
        switch (option.type) {
            case 'basic': return option.callback;
            case 'image_plus': return option.callback;
            default: return undefined;
        }
    };
    /**
     * kids中点选下拉框时改变下拉按钮的功能
     * 为kids的功能提供接口
     */
    FieldDropdown.prototype.update_btn_style = function () { };
    FieldDropdown.prototype.register_dropdown = function (cb) {
        this.generate_customized_dropdown = cb;
    };
    FieldDropdown.prototype.is_dynamic = function () {
        if (this.menu_generator_advanced) {
            return (0, base_1.is_func)(this.menu_generator_advanced);
        }
        return (0, base_1.is_func)(this.menu_generator);
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], FieldDropdown.prototype, "widget_div", void 0);
    FieldDropdown = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldDropdown);
    return FieldDropdown;
}(field_1.Field));
exports.FieldDropdown = FieldDropdown;
