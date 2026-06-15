var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Graphics, Sprite, Text, Texture, Rectangle, Container } from '../../core/pixi';
import { ErrorMsg } from '../../core/result';
import { PrinterManager } from '../../core/tool/printer/model';
import { is_internal_actor } from '../../core/utils';
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(app, bg_img) {
        var _this = _super.call(this) || this;
        _this.is_landscape = false;
        /**
         * 对话框的高度，并不固定，可以修改
         * 比如选择对话框，高度随着选项数量变化；横版每行2个，竖版每行一个
         * 比如逐字打印对话框，高度随着行数变化；横版每页3行，竖版每页4行
         */
        _this.DIALOG_HEIGHT = 308;
        /**
         * 横竖版边距不一样
         */
        _this.DIALOG_MARGIN = 27;
        _this.DIALOG_LANDSCAPE_MARGIN_LEFT = 9;
        _this.DIALOG_LANDSCAPE_MARGIN_BOTTOM = 4;
        _this.PREVIEW_SIZE = 66;
        _this.PREVIEW_MARGIN = 80;
        _this.TARGET_NAME_LEFT_MARGIN = 12;
        _this.PIXI_CONTENT_TOP_MARGIN = 7;
        _this.TARGET_NAME_STYLE = {
            fontSize: '21px',
            fontFamily: 'PingFangSC-Medium',
            fill: '#A19C97',
            fontWeight: '500',
        };
        _this.CONTENT_STYLE = {
            fontSize: '21px',
            lineHeight: 36,
            letterSpacing: 1.3,
            fontFamily: 'PingFangSC-Medium',
            fill: '#45372D',
            fontWeight: '500',
        };
        _this.app = app;
        _this.name = 'stage_dialog';
        _this.draw_bg_mask();
        _this.interactive = true;
        _this.visible = false;
        _this.setParent(_this.app.get_app().stage);
        _this.dialog_background = new Sprite();
        bg_img && (_this.dialog_background.texture = Texture.from(bg_img));
        _this.preview = new Sprite();
        _this.preview.anchor.set(0.5);
        _this.target_name = new Text('', _this.TARGET_NAME_STYLE);
        _this.pixi_content = new Text('', _this.CONTENT_STYLE);
        _this.set_components_size_and_position();
        _this.addChild(_this.dialog_background);
        _this.addChild(_this.preview);
        _this.addChild(_this.target_name);
        _this.addChild(_this.pixi_content);
        return _this;
    }
    /**
     * 只更新preview的图片的时候可单独调用此接口来更新preview的宽高
     * 其他组件布局不会受其影响不需要更新
     */
    Dialog.prototype.update_preview_height_width = function () {
        var ratio = this.preview.texture.width / this.preview.texture.height;
        // FIXME 目前mask方案在webgl中存在问题，待重新调整，背景和角色都先统一使用短边适配。
        var should_width_equal_preview_size = ratio > 1;
        var width = should_width_equal_preview_size ? this.PREVIEW_SIZE : this.PREVIEW_SIZE * ratio;
        var height = should_width_equal_preview_size ? this.PREVIEW_SIZE / ratio : this.PREVIEW_SIZE;
        this.preview.width = width;
        this.preview.height = height;
    };
    Dialog.prototype.set_components_size_and_position = function (type) {
        if (type === void 0) { type = 'actor'; }
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        var dialog_margin = this.is_landscape ? this.DIALOG_LANDSCAPE_MARGIN_LEFT : this.DIALOG_MARGIN;
        var dialog_margin_bottom = this.is_landscape ? this.DIALOG_LANDSCAPE_MARGIN_BOTTOM : this.DIALOG_MARGIN;
        this.dialog_background.width = width - dialog_margin * 2;
        this.dialog_background.height = this.DIALOG_HEIGHT;
        this.dialog_background.position.y = height / 2 - this.dialog_background.height - dialog_margin_bottom;
        this.dialog_background.position.x = -width / 2 + dialog_margin;
        this.update_preview_height_width();
        this.preview.position.x = this.dialog_background.position.x + this.PREVIEW_MARGIN;
        this.preview.position.y = this.dialog_background.position.y + this.PREVIEW_MARGIN;
        this.target_name.position.x = this.preview.position.x + this.PREVIEW_SIZE / 2 + this.TARGET_NAME_LEFT_MARGIN;
        this.target_name.position.y = this.preview.position.y - this.PREVIEW_SIZE / 2;
        this.pixi_content.position.x = this.target_name.position.x;
        this.pixi_content.position.y = this.target_name.position.y + this.target_name.height + this.PIXI_CONTENT_TOP_MARGIN;
    };
    Dialog.prototype.draw_bg_mask = function () {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        this.clear();
        this.beginFill(0x000000, 0.54);
        this.drawRect(-width / 2, -height / 2, width, height);
        this.endFill();
        this.hitArea = new Rectangle(-width / 2, -height / 2, width, height);
        this.is_landscape = width > height;
    };
    return Dialog;
}(Graphics));
var PrintDialog = /** @class */ (function (_super) {
    __extends(PrintDialog, _super);
    function PrintDialog(opt, app, data, events) {
        var _this = _super.call(this, app, opt.bg_img) || this;
        _this.MIN_DIALOG_HEIGHT = 200;
        _this.ROW_HEIGHT = 36;
        _this.NEXT_ICON_SIZE = 66;
        _this.NEXT_ICON_MARGIN_RIGHT = 47;
        _this.NEXT_ICON_MARGIN_BOTTOM = 13;
        _this.CONTENT_MARGIN = 180;
        /**
         * 横版背景图有2px的阴影，竖版没有
         */
        _this.NEXT_ICON_MARGIN_GAP = 2;
        _this.on_stage_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.draw_bg_mask();
            _this.set_components_size_and_position();
            // 更新对话框背景图片
            _this.dialog_background.texture = _this.is_landscape ? _this.bg_landscape_texture : _this.bg_portrait_texture;
            var _a = e.data, width = _a.width, height = _a.height;
            var dialog_margin = _this.is_landscape ? _this.DIALOG_LANDSCAPE_MARGIN_LEFT : _this.DIALOG_MARGIN;
            var dialog_margin_bottom = _this.is_landscape ? _this.DIALOG_LANDSCAPE_MARGIN_BOTTOM : _this.DIALOG_MARGIN;
            var icon_margin_gap = _this.is_landscape ? _this.NEXT_ICON_MARGIN_GAP : 0;
            // 更新 点击继续 图标位置
            _this.next_icon.position.x = width / 2 - _this.NEXT_ICON_SIZE - dialog_margin - _this.NEXT_ICON_MARGIN_RIGHT - icon_margin_gap;
            _this.next_icon.position.y = height / 2 - _this.NEXT_ICON_SIZE - dialog_margin_bottom - _this.NEXT_ICON_MARGIN_BOTTOM - icon_margin_gap;
        };
        _this.data = data;
        _this.events = events;
        _this.bg_portrait_texture = Texture.from(opt.bg_img);
        _this.bg_landscape_texture = Texture.from(opt.bg_landscape_img);
        _this.next_icon_texture = Texture.from(opt.next_icon_img);
        _this.next_icon_active_texture = Texture.from(opt.next_icon_active_img);
        _this.next_icon = new Sprite(_this.next_icon_texture);
        _this.next_icon.width = _this.NEXT_ICON_SIZE;
        _this.next_icon.height = _this.NEXT_ICON_SIZE;
        var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
        _this.next_icon.position.x = width / 2 - _this.NEXT_ICON_SIZE - _this.DIALOG_MARGIN - _this.NEXT_ICON_MARGIN_RIGHT;
        _this.next_icon.position.y = height / 2 - _this.NEXT_ICON_SIZE - _this.DIALOG_MARGIN - _this.NEXT_ICON_MARGIN_BOTTOM;
        _this.addChild(_this.next_icon);
        _this.print = new PrinterManager(_this.app);
        _this.events.add_listener('stage:resize', _this.on_stage_resize);
        return _this;
    }
    PrintDialog.prototype.on_mouse_down = function () {
        var _this = this;
        return function () {
            _this.next_icon.texture = _this.next_icon_active_texture;
        };
    };
    PrintDialog.prototype.on_mouse_up = function (on_complete_cb) {
        var _this = this;
        return function () {
            _this.next_icon.texture = _this.next_icon_texture;
            // 翻页前把text清空
            _this.pixi_content.text = '';
            _this.print.release();
            on_complete_cb && on_complete_cb();
        };
    };
    PrintDialog.prototype.show = function (target_id, name, content, max_rows, on_complete_cb) {
        var _this = this;
        if (max_rows === void 0) { max_rows = 1; }
        var target = this.data.get_target(target_id);
        if (!target) {
            return new ErrorMsg("Cannot find target " + target_id);
        }
        var base_texture = is_internal_actor(target) ? target.texture.baseTexture : target.background.texture.baseTexture;
        this.visible = true;
        var preview_texture = new Texture(base_texture);
        this.preview.texture = preview_texture;
        this.DIALOG_HEIGHT = this.MIN_DIALOG_HEIGHT + (max_rows - 1) * this.ROW_HEIGHT;
        this.set_components_size_and_position();
        this.target_name.text = name;
        this.pixi_content.text = '';
        this.print.add_task({
            id: target.id,
            content: content,
            printer: this.pixi_content,
            on_start: function () {
                _this.removeAllListeners();
            },
            on_complete: function () {
                _this.addListener('mousedown', _this.on_mouse_down());
                _this.addListener('mouseup', _this.on_mouse_up(on_complete_cb));
                _this.addListener('touchstart', _this.on_mouse_down());
                _this.addListener('touchend', _this.on_mouse_up(on_complete_cb));
            },
        });
        return;
    };
    PrintDialog.prototype.get_max_content_width = function () {
        return this.dialog_background.width - this.CONTENT_MARGIN;
    };
    PrintDialog.prototype.hide = function () {
        this.pixi_content.text = '';
        this.target_name.text = '';
        this.visible = false;
        this.print.clear();
    };
    PrintDialog.prototype.destroy = function () {
        _super.prototype.destroy.call(this, { children: true, texture: true });
        this.events.remove_listener('stage:resize', this.on_stage_resize);
    };
    return PrintDialog;
}(Dialog));
export { PrintDialog };
var SelectDialog = /** @class */ (function (_super) {
    __extends(SelectDialog, _super);
    function SelectDialog(opt, app, data, events) {
        var _this = _super.call(this, app) || this;
        _this.MIN_DIALOG_HEIGHT = 260;
        _this.HORIZONTAL_PADDING = 54;
        _this.SELECTIONS_MARGIN_TOP = 20;
        _this.SELECTION_HEIGHT = 60;
        _this.SELECTION_RADIUS = 36;
        _this.SELECTION_MARGIN = 18;
        _this.NORMAL_SELECTION_TEXT_COLOR = '#45372D';
        _this.SELECTED_SELECTION_TEXT_COLOR = '#FFFFFF';
        _this.SELECTION_STYLE = {
            fontSize: 21,
            fontFamily: 'PingFangSC-Medium',
            fontWeight: '500',
        };
        _this.CONTENT_MARGIN = 180;
        _this.on_stage_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.draw_bg_mask();
            _this.set_components_size_and_position();
        };
        _this.data = data;
        _this.events = events;
        _this.selection_container = new Container();
        _this.selection_container.interactive = true;
        _this.set_selection_container_position();
        _this.bg_textures = [];
        opt.bg_img.forEach(function (source) {
            _this.bg_textures.push(Texture.from(source));
        });
        _this.bg_landscape_textures = [];
        opt.bg_landscape_img.forEach(function (source) {
            _this.bg_landscape_textures.push(Texture.from(source));
        });
        _this.addChild(_this.selection_container);
        _this.selection_container.addListener('mousedown', _this.drag_start());
        _this.addListener('mouseup', _this.drag_end());
        _this.addListener('mouseupoutside', _this.drag_end());
        _this.selection_container.addListener('touchstart', _this.drag_start());
        _this.addListener('touchend', _this.drag_end());
        _this.addListener('touchendoutside', _this.drag_end());
        _this.events.add_listener('stage:resize', _this.on_stage_resize);
        return _this;
    }
    SelectDialog.prototype.hide_callback = function (selected_index) { };
    SelectDialog.prototype.drag_start = function () {
        var _this = this;
        return function (e) {
            _this.selected_index = _this.selection_container.getChildIndex(e.target);
            if (_this.selected_index !== undefined && e.target instanceof Graphics) {
                var target_x = e.target.x;
                _this.draw_selection_bg(e.target, _this.selected_index, true);
                e.target.x = target_x;
            }
        };
    };
    SelectDialog.prototype.drag_end = function () {
        var _this = this;
        return function () {
            if (_this.selected_index !== undefined) {
                _this.hide_callback(_this.selected_index);
                _this.hide();
            }
        };
    };
    ;
    SelectDialog.prototype.show = function (actor_id, name, question, selections, on_hide) {
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return new ErrorMsg("Cannot find actor " + actor_id);
        }
        this.visible = true;
        var preview_texture = new Texture(actor.texture.baseTexture);
        this.preview.texture = preview_texture;
        this.target_name.text = name;
        this.pixi_content.text = question;
        var cur_bg_textures = this.is_landscape ? this.bg_landscape_textures : this.bg_textures;
        this.dialog_background.texture = cur_bg_textures[selections.length - 1];
        // 横版模式下，一行有两个选项；竖版一行一个
        var offset_index = this.is_landscape ? Math.floor((selections.length - 1) / 2) : selections.length - 1;
        this.DIALOG_HEIGHT = this.MIN_DIALOG_HEIGHT + (this.SELECTIONS_MARGIN_TOP + this.SELECTION_HEIGHT) * offset_index;
        this.set_components_size_and_position();
        this.set_selection_container_position();
        this.draw_selections(selections);
        on_hide && (this.hide_callback = on_hide);
        return;
    };
    SelectDialog.prototype.hide = function () {
        this.visible = false;
        this.selected_index = undefined;
    };
    SelectDialog.prototype.destroy = function () {
        _super.prototype.destroy.call(this, { children: true, texture: true });
        this.events.remove_listener('stage:resize', this.on_stage_resize);
    };
    SelectDialog.prototype.set_selection_container_position = function () {
        this.selection_container.x = this.dialog_background.x + this.HORIZONTAL_PADDING;
        this.selection_container.y = this.pixi_content.y + this.pixi_content.height + this.SELECTIONS_MARGIN_TOP;
    };
    SelectDialog.prototype.draw_selections = function (selections) {
        var _this = this;
        this.selection_container.removeChildren();
        selections.forEach(function (name, index) {
            var new_bg = new Graphics();
            new_bg.interactive = true;
            var new_text = new Text(name, _this.SELECTION_STYLE);
            new_text.anchor.set(0.5);
            var selection_full_width = _this.dialog_background.width - 2 * _this.HORIZONTAL_PADDING;
            // 横版模式下，一行有两个选项；竖版一行一个
            var selection_width = _this.is_landscape
                ? (selection_full_width - _this.HORIZONTAL_PADDING) / 2
                : selection_full_width;
            new_text.position.x = selection_width / 2;
            new_text.position.y = _this.SELECTION_HEIGHT / 2;
            new_bg.addChild(new_text);
            _this.selection_container.addChild(new_bg);
            _this.draw_selection_bg(new_bg, index);
            // 横版模式下，只有一个选项时，选项居中
            if (selections.length === 1) {
                new_bg.x = (selection_full_width - selection_width) / 2;
            }
        });
    };
    SelectDialog.prototype.draw_selection_bg = function (bg, index, down) {
        var shadow_offset = down ? -5 : 5;
        var shadow_color = down ? 0x7E3CC7 : 0xFDC330;
        var color = down ? 0x983EF7 : 0xFFDA3F;
        var selection_width = this.is_landscape
            ? (this.dialog_background.width - 3 * this.HORIZONTAL_PADDING) / 2
            : this.dialog_background.width - 2 * this.HORIZONTAL_PADDING;
        bg.clear();
        bg.beginFill(shadow_color);
        bg.drawRoundedRect(0, shadow_offset, selection_width, this.SELECTION_HEIGHT, this.SELECTION_RADIUS);
        bg.endFill();
        bg.beginFill(color);
        bg.drawRoundedRect(0, 0, selection_width, this.SELECTION_HEIGHT, this.SELECTION_RADIUS);
        bg.endFill();
        if (this.is_landscape) {
            bg.x = (selection_width + this.HORIZONTAL_PADDING) * (index % 2);
            bg.y = (this.SELECTION_HEIGHT + this.SELECTION_MARGIN) * Math.floor(index / 2);
        }
        else {
            bg.y = (this.SELECTION_HEIGHT + this.SELECTION_MARGIN) * index;
        }
        var text = bg.children[0];
        if (text instanceof Text) {
            text.style.fill = down ? this.SELECTED_SELECTION_TEXT_COLOR : this.NORMAL_SELECTION_TEXT_COLOR;
        }
    };
    SelectDialog.prototype.get_max_question_width = function () {
        return this.dialog_background.width - this.CONTENT_MARGIN;
    };
    SelectDialog.prototype.set_question_font_size = function (size) {
        this.pixi_content.style.fontSize = size;
    };
    return SelectDialog;
}(Dialog));
export { SelectDialog };
//# sourceMappingURL=stage_dialog.js.map