"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMultilineInput = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../../../../utils/dom");
var field_textinput_1 = require("./field_textinput");
var FieldMultilineInput = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldMultilineInput, _super);
    function FieldMultilineInput(o) {
        var _this = _super.call(this, o) || this;
        _this.padding_y = 3;
        _this.line_height = 22;
        _this.padding_x = 0;
        _this.field_type = 'FieldMultilineInput';
        _this.max_length = o.max_length;
        _this.max_width = o.max_width;
        return _this;
    }
    FieldMultilineInput.prototype.get_display_text = function () {
        if (!this.text_) {
            // Prevent the field from disappearing if empty.
            return '\u00A0';
        }
        return this.text_;
    };
    FieldMultilineInput.prototype.render_ = function () {
        var _this = this;
        var _a, _b;
        if (!this.visible_ || !this.text_element || !this.source_block) {
            this.size_.width = 0;
            return;
        }
        (0, dom_1.remove_children)(this.text_element);
        this.text_element.setAttribute('text-anchor', 'start');
        this.text_element.setAttribute('dominant-baseline', 'central');
        var text = this.get_display_text();
        this.utils.start_text_cache();
        var content_width = 0;
        var latest_tspan = (0, dom_1.create_svg_element)('tspan');
        // 需要保证tspan在被计算宽度时已经被append到了目标位置，以获取所有通过继承获得的外观属性
        this.text_element.appendChild(latest_tspan);
        var line_start_pos = 0;
        var text_arr = Array.from(text);
        for (var i = 0; i < text_arr.length; i++) {
            latest_tspan.textContent = text_arr.slice(line_start_pos, i + 1)
                .join('')
                .replace(/\n/g, '') // 在svg上不让\n占位
                .replace(/\s/g, '\u00A0');
            var line_width = this.utils.get_cached_width(latest_tspan);
            content_width = Math.max(content_width, line_width);
            var current_char = text_arr[i];
            var next_char = text_arr[i + 1];
            var greater_than_width = this.max_width !== undefined && line_width >= this.max_width && text_arr[i + 1] !== undefined;
            // 需要在下一个位置另起一行
            if (current_char === '\n' || greater_than_width) {
                latest_tspan = (0, dom_1.create_svg_element)('tspan');
                this.text_element.appendChild(latest_tspan);
                if (greater_than_width && next_char === '\n') { // 溢出换行紧接着 \n 换行，合并为一个换行
                    i++;
                }
                line_start_pos = i + 1;
            }
        }
        this.utils.stop_text_cache();
        this.padding_x = 0;
        if (!this.source_block.is_shadow()) {
            // 直接在积木上的纯输入框，需要调整自身左右间距及位置。
            // 为了让短字符居中，需要根据字符的长度进行调整padding
            this.padding_x = content_width >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD
                ? this.theme.renderer.TEXT_PADDING_IN_FIELD
                : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - content_width) / 2;
        }
        var height = this.padding_y;
        Array.from(this.text_element.children).forEach(function (tspan) {
            tspan.setAttribute('x', "" + _this.padding_x);
            // 虽然行高是固定的，但是对应的tspan高度是根据字体等决定的，所以用中心进行对齐
            tspan.setAttribute('y', "" + (height + _this.line_height / 2));
            height += _this.line_height;
        });
        height += this.padding_y;
        this.size_.height = height;
        this.size_.width = content_width + this.padding_x * 2;
        (_a = this.border_rect) === null || _a === void 0 ? void 0 : _a.setAttribute('width', String(this.size_.width));
        (_b = this.border_rect) === null || _b === void 0 ? void 0 : _b.setAttribute('height', String(this.size_.height));
    };
    FieldMultilineInput.prototype.widget_create = function () {
        if (!this.source_block) {
            throw new Error('[FieldMultilineInput] Trying to create widget before init on a block. ');
        }
        this.html_input = _super.prototype.widget_create.call(this, 'textarea', 'blocklyHtmlTextarea');
        this.html_input.style.lineHeight = this.line_height + "px";
        // 在单行的shadow积木中时，因为受到积木最小高度的约束，padding可能大于预设的值，需要动态调整
        this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW
            ? (this.source_block.height - this.line_height) / 2 + "px"
            : this.padding_y + "px";
        if (!this.source_block.is_shadow()) {
            this.html_input.style.paddingLeft = this.padding_x + "px";
            // 由于某些项目的字体以及缩放后的计算误差的问题，积木上文字的换行可能和输入框中有微妙的不一致
            // 比如，在devtool中，通过pinch放大workspace后，在多行积木的输入框中输入一个全角+一个半角文字（比如：喵~），
            //  此时在积木中的文字不会换行，但由于字体在缩放后的计算误差，在按照积木上输入框的尺寸创建的textarea中，文字会被换行
            //
            // 因此适量减小padding right，在不让右边多处文字的同时，避免文字被挤出多行
            this.html_input.style.paddingRight = this.padding_x * 0.8 + "px";
        }
        else {
            // TODO 在shadow积木上包括了双引号之后的左右边距，后续同一双引号规则的话，可能需要调整
            this.html_input.style.paddingLeft = "23px";
            this.html_input.style.paddingRight = 23 * 0.8 + "px";
        }
        return this.html_input;
    };
    FieldMultilineInput.prototype.on_html_input_keydown = function (e) {
        if (e.key !== 'Enter') {
            _super.prototype.on_html_input_keydown.call(this, e);
        }
    };
    FieldMultilineInput.prototype.on_html_input_change = function () {
        if (!this.html_input || !this.source_block)
            return;
        if (!this.is_composition_inputting &&
            this.max_length &&
            (this.html_input.value.length > this.max_length)) {
            this.html_input.value = this.html_input.value.substr(0, this.max_length);
        }
        _super.prototype.on_html_input_change.call(this);
        this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW
            ? (this.source_block.height - this.line_height) / 2 + "px"
            : this.padding_y + "px";
        if (!this.source_block.is_shadow()) {
            this.html_input.style.paddingLeft = this.padding_x + "px";
            this.html_input.style.paddingRight = this.padding_x + "px";
        }
    };
    FieldMultilineInput = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldMultilineInput);
    return FieldMultilineInput;
}(field_textinput_1.FieldTextInput));
exports.FieldMultilineInput = FieldMultilineInput;
