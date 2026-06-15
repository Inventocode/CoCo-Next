"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplifiedWorkspaceComment = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../../di");
var interfaces_1 = require("../../interfaces");
var dom_1 = require("../../utils/dom");
var base_1 = require("../../utils/base");
var maths_1 = require("../../utils/maths");
var block_1 = require("../../utils/block");
var svg_filter_1 = require("../../svg_filter");
var workspace_element_1 = require("../workspace_element");
/**
 * 简化版注释。
 * 无颜色主题，无展开状态，（暂时）无全局注释。
 * 但实现时考虑了多版本注释间的数据互通，因此会正常实现上述接口，但不在外观上表现出来。
 *
 * 使用时需要通过msg传入三个图标：ICON_COMMENT_EDIT, ICON_COMMENT_REMOVE, ICON_COMMENT_MORE。
 *
 * 总体比较定制，有一些css和attribute混用的地方，是因为safari对于svg的兼容性问题【哭。
 *
 * 设计稿：https://lanhuapp.com/web/#/item/project/board/detail?pid=a359c7e0-3a5f-43ce-b705-36c98c22539d&project_id=a359c7e0-3a5f-43ce-b705-36c98c22539d&image_id=81828b20-c00b-4528-87c9-09d72c69fc04
 *
 * 新增设计稿：输出积木注释 & 注释图标叠加
 * https://lanhuapp.com/web/#/item/project/detailDetach?type=share_mark&pid=a359c7e0-3a5f-43ce-b705-36c98c22539d&imgId=9366dcd1-e8c3-438a-99fb-3755d2f6d8b5&project_id=a359c7e0-3a5f-43ce-b705-36c98c22539d&image_id=9366dcd1-e8c3-438a-99fb-3755d2f6d8b5&teamId=9868f6d9-bdd8-42cd-a1d4-7f10da23fe39&userId=35ade1c9-f556-4606-98ea-927f49fefe01&param=43b4e280-7040-4731-b62d-2a70862600d8
 */
var SimplifiedWorkspaceComment = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(SimplifiedWorkspaceComment, _super);
    function SimplifiedWorkspaceComment(workspace, parent_block, position, opt_id) {
        var _this = _super.call(this, workspace) || this;
        _this.element_type = 'comment';
        /**
         * 注释图标尺寸，数据直接来自设计稿。
         */
        _this.icon_size = 32;
        /**
         * 注释图标右边缘相对于积木左边缘的偏移量，数据直接来自设计稿。
         */
        _this.h_distance = -6;
        /**
         * 注释图标重叠时，图标之间的偏移量。
         */
        _this.icon_offset = 4;
        /**
         * 注释图标叠加的最大数量。
         */
        _this.icon_limit = 3;
        _this.text_ = '';
        _this.width = _this.icon_size;
        _this.height = _this.icon_size;
        /**
         * 注释左上角位置相对图标中心的偏移量。
         */
        _this.left_top_offset = [-_this.icon_size / 2, -_this.icon_size / 2];
        // bubble宽高在移动端固定，此处维持接口一致。
        // 所有相关数值设置为普通版注释的默认值，数据互通时互不影响。
        _this.bubble_width_ = 214;
        _this.bubble_height_ = 126;
        _this.auto_layout_ = true;
        _this.relative_position_ = gl_matrix_1.vec2.create();
        // 简化版中的展开状态是一个临时状态，同一时间只能展开一个积木注释。此处维持接口一致。
        _this.expanded_ = false;
        // 简化版中无颜色分类。此处维持接口一致。
        _this.color_theme = 'BLUE';
        _this.is_textarea_focused = false;
        _this.parent_block_ = parent_block;
        _this.base_block = parent_block;
        var currently_resizes_enabled = _this.workspace.is_resizes_enabled();
        _this.workspace.set_resizes_enabled(false);
        _this.events.disable();
        _this.id = opt_id != undefined ? opt_id : (0, maths_1.gen_uid)();
        _this.svg_group.classList.add('blocklyWorkspaceComment');
        _this.update_movable();
        if (parent_block) {
            // 积木注释不会被拖拽删除。
            _this.deletable_ = false;
        }
        if (position) {
            _this.translate(gl_matrix_1.vec2.fromValues(position.x, position.y));
        }
        workspace.workspace_comment_db.set(_this.id, _this);
        if (!parent_block) {
            workspace.add_top_comment(_this);
        }
        _this.init_events();
        _this.events.enable();
        if (_this.events.is_enabled()) {
            // 存在父积木时，注释本身不生成create事件，而是使用积木的change事件作为记录
            if (_this.parent_block_) {
                _this.events.fire(_this.change_event_factory('comment', {
                    block: _this.parent_block_,
                    old_value: undefined,
                    new_value: _this.id,
                }));
            }
            else {
                _this.events.fire(_this.create_event_factory({ block: _this }));
            }
        }
        _this.workspace.set_resizes_enabled(currently_resizes_enabled);
        return _this;
    }
    SimplifiedWorkspaceComment.prototype.get_icon = function () {
        return this.svg_icon;
    };
    SimplifiedWorkspaceComment.prototype.get_text = function () { return this.text_; };
    SimplifiedWorkspaceComment.prototype.set_text = function (text) {
        var event;
        if (this.text_ != text) {
            if (this.events.is_enabled()) {
                event = this.change_event_factory('comment_text', {
                    block: this,
                    old_value: this.text_,
                    new_value: text,
                });
            }
            this.text_ = text;
        }
        event && this.events.fire(event);
        this.comment_bubble.update_bubble('edit', this);
    };
    SimplifiedWorkspaceComment.prototype.init_svg = function (opt_no_animation) {
        var _this = this;
        var _a, _b;
        // 目前简化版不需要全局注释，但是如果在简化版中打开含有全局注释的作品（数据互通），
        // 保存后，再返回到有全局注释的版本中打开，需要保留该全局注释。
        // 因此对于全局注释，在简化版中打开时会构造出数据结构，但不展示样式。
        // 如果哪天产品/设计突发奇想又要全局注释了，就把这行删掉。
        if (!this.parent_block_) {
            return;
        }
        // 只有最外层且带有注释的积木（root_block）的注释图标需要被渲染
        // 当内层积木新增注释时，更新root block的注释图标
        var outer_block = (0, block_1.get_outer_block)(this.parent_block_);
        this.base_block = outer_block;
        var nested_blocks_with_comment = (0, block_1.get_nested_blocks_with_comment)(outer_block);
        var root_block = nested_blocks_with_comment[0];
        if (root_block !== this.parent_block_) {
            (_a = root_block === null || root_block === void 0 ? void 0 : root_block.comment) === null || _a === void 0 ? void 0 : _a.init_svg(true);
            // 没有被渲染的注释也需要有图标的位置信息，不影响数据互通
            if (!this.svg_icon) {
                this.svg_icon = (0, dom_1.create_svg_element)('g', {}, this.svg_group);
                this.reposition();
            }
            return;
        }
        // 隐藏内嵌的子积木的注释
        nested_blocks_with_comment.forEach(function (b) {
            var _a;
            if (b === _this.parent_block_) {
                return;
            }
            if (b.comment && b.comment.rendered) {
                b.comment.rendered = false;
                (_a = _this.workspace.get_canvas()) === null || _a === void 0 ? void 0 : _a.removeChild(b.comment.svg_group);
            }
        });
        if (this.svg_icon) {
            this.svg_group.removeChild(this.svg_icon);
        }
        this.svg_icon = (0, dom_1.create_svg_element)('g', {}, this.svg_group);
        // 只显示最外层三块积木的注释
        var start_index = nested_blocks_with_comment.length > this.icon_limit
            ? this.icon_limit - 1
            : nested_blocks_with_comment.length - 1;
        // 依次绘制子积木的icon
        for (var i = start_index; i >= 0; i--) {
            var block = nested_blocks_with_comment[i];
            var icon = (0, dom_1.create_svg_element)('g', {
                'class': 'blocklySimplifiedCommentIcon',
            }, this.svg_icon);
            this.draw_icon(icon, block.get_colour().toString());
            var offset = this.icon_offset * (start_index - i);
            icon.setAttribute('transform', "translate(" + (this.left_top_offset[0] - offset) + ", " + this.left_top_offset[1] + ")");
        }
        this.events.bind_event_with_checks(this.svg_icon, 'mouseup', this, this.on_icon_click);
        this.reposition();
        this.rendered = true;
        (_b = this.workspace.get_canvas()) === null || _b === void 0 ? void 0 : _b.appendChild(this.svg_group);
        // 跟随积木可见性变化
        this.update_visibility();
        // 撤销重做或加载过程中，不展示动画。
        if (!this.events.is_record_undo() || !this.events.is_enabled() || opt_no_animation) {
            return;
        }
        // 只有一行积木从0个注释变为1个注释时，才显示创建动画
        if (this.svg_icon.childElementCount === 1) {
            var icon_1 = this.svg_icon.firstElementChild;
            icon_1.style.opacity = '0';
            setTimeout(this.comment_bubble.animate_once.bind(this, icon_1, 'createCommentAnimation', function () {
                icon_1.style.opacity = '';
            }));
        }
    };
    /**
     * Draw the comment icon.
     * @param group The icon group to append the circle and the 'i' symbol.
     */
    SimplifiedWorkspaceComment.prototype.draw_icon = function (group, color) {
        color = color || '#608FEE',
            // 撑开图标尺寸
            (0, dom_1.create_svg_element)('rect', {
                'width': this.icon_size,
                'height': this.icon_size,
                'fill': 'none',
                'stroke': 'none',
            }, group);
        (0, dom_1.create_svg_element)('path', {
            'd': 'M10,4 L20,4 C24.418278,4 28,7.581722 28,12 L28,21 L28,21 L30.2365586,27.7096759 C30.4112064,28.2336192 30.1280464,28.7999392 29.6041031,28.974587 C29.3524967,29.0584558 29.0778786,29.0389393 28.8406617,28.9203309 L19,24 L19,24 L10,24 C5.581722,24 2,20.418278 2,16 L2,12 C2,7.581722 5.581722,4 10,4 Z',
            'fill': color,
        }, group);
        (0, dom_1.create_svg_element)('circle', {
            'fill': '#fff',
            'cx': 8,
            'cy': 14,
            'r': 2,
        }, group);
        (0, dom_1.create_svg_element)('circle', {
            'fill': '#fff',
            'cx': 15,
            'cy': 14,
            'r': 2,
        }, group);
        (0, dom_1.create_svg_element)('circle', {
            'fill': '#fff',
            'cx': 22,
            'cy': 14,
            'r': 2,
        }, group);
        group.setAttribute('filter', "url(#" + svg_filter_1.FILTER.SURROUND_SHADOW_DARK + ")");
        // 从右下角进行缩放和旋转
        group.setAttribute('transform-origin', this.icon_size + " " + this.icon_size);
    };
    SimplifiedWorkspaceComment.prototype.reposition = function () {
        var base_block = this.base_block || this.parent_block_;
        if (!base_block || !base_block.rendered) {
            return;
        }
        var horizontal_offset = this.h_distance - this.icon_size / 2;
        if (base_block.is_starting_block()) {
            horizontal_offset -= 22;
        }
        this.relative_position_ = gl_matrix_1.vec2.fromValues(horizontal_offset, base_block.first_row_height / 2);
        var origin = base_block.get_relative_to_surface_xy();
        this.translate(gl_matrix_1.vec2.add(origin, origin, this.relative_position_));
    };
    /**
     * 打开输入框，请求输入，并在输入完成后更新当前展示的气泡内容（编辑时）或执行注释图标创建动画（新建时）。
     */
    SimplifiedWorkspaceComment.prototype.show_editor = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var new_value;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspace.show_external_comment_editor(this.text_)];
                    case 1:
                        new_value = _a.sent();
                        // 点击了取消，不做修改。
                        if (new_value == undefined) {
                            return [2 /*return*/];
                        }
                        this.set_text(new_value);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @override 在创建简化版注释时，调用外部注册接口弹出输入框，但不弹出注释框（bubble）。
     */
    SimplifiedWorkspaceComment.prototype.focus = function () {
        this.show_editor();
    };
    SimplifiedWorkspaceComment.prototype.on_icon_click = function (e) {
        if (this.workspace.is_dragging()) {
            // Drag operation is concluding.  Don't open the editor.
            return;
        }
        if (!this.utils.is_right_button(e)) {
            this.comment_bubble.popup(this);
        }
    };
    /**
     * @override 处理原点偏移。
     */
    SimplifiedWorkspaceComment.prototype.get_bounding_rectangle = function () {
        var _a = _super.prototype.get_bounding_rectangle.call(this), topLeft = _a.topLeft, bottomRight = _a.bottomRight;
        return {
            topLeft: gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), topLeft, this.left_top_offset),
            bottomRight: gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), bottomRight, this.left_top_offset),
        };
    };
    SimplifiedWorkspaceComment.prototype.get_parent_block = function () {
        return this.parent_block_;
    };
    SimplifiedWorkspaceComment.prototype.get_top_parent = function () {
        return this.get_root_block() || this;
    };
    SimplifiedWorkspaceComment.prototype.get_root_block = function () {
        var top_block = this.parent_block_;
        while (top_block === null || top_block === void 0 ? void 0 : top_block.parent_block) {
            top_block = top_block.parent_block;
        }
        return top_block;
    };
    SimplifiedWorkspaceComment.prototype.dispose = function () {
        var _this = this;
        this.comment_bubble.update_bubble('remove', this);
        var delete_event;
        if (this.events.is_enabled()) {
            // 存在父积木时，注释本身不生成delete事件，而是使用积木的change事件作为记录
            if (this.parent_block_) {
                delete_event =
                    this.change_event_factory('comment', {
                        block: this.parent_block_,
                        old_value: this.xml.comment_to_dom_with_xy(this),
                        new_value: undefined,
                    });
            }
            else {
                delete_event = this.delete_event_factory({ block: this });
            }
        }
        this.workspace.workspace_comment_db.delete(this.id);
        if (!this.parent_block_) {
            this.workspace.remove_top_comment(this);
        }
        _super.prototype.dispose.call(this);
        this.events.fire(delete_event);
        // dispose结束之后更新root block的注释
        setTimeout(function () {
            if (!_this.parent_block_) {
                return;
            }
            var outer_block = (0, block_1.get_outer_block)(_this.parent_block_);
            var root_block = (0, block_1.get_nested_blocks_with_comment)(outer_block)[0];
            if (root_block && root_block.comment && root_block.rendered) {
                root_block.comment.init_svg(true);
            }
        });
    };
    /**
     * @override 简化版注释无右键菜单。
     */
    SimplifiedWorkspaceComment.prototype.show_context_menu = function (e) {
        e;
    };
    /**
     * @override 简化版的积木注释不可拖拽。
     */
    SimplifiedWorkspaceComment.prototype.on_mouse_down = function (e) {
        if (!this.parent_block_) {
            _super.prototype.on_mouse_down.call(this, e);
        }
    };
    // 以下为暂时不会用到，但需要与普通版维持一致的接口
    SimplifiedWorkspaceComment.prototype.sort = function (cursor) {
        if (!this.rendered) {
            return;
        }
        var xy = this.get_relative_to_surface_xy();
        // 来自设计的逻辑：
        // 整理时，注释的水平位置，以展开状态下左边能跟积木左边对齐的状态为准。
        var target = gl_matrix_1.vec2.fromValues(cursor[0] + this.icon_size / 2, cursor[1] + this.icon_size / 2);
        this.move_by(gl_matrix_1.vec2.sub(xy, target, xy));
        gl_matrix_1.vec2.add(cursor, cursor, [0, this.get_height_width().height + this.theme.renderer.MIN_HEIGHT]);
    };
    SimplifiedWorkspaceComment.prototype.get_bubble_size = function () {
        return {
            width: this.bubble_width_,
            height: this.bubble_height_,
        };
    };
    SimplifiedWorkspaceComment.prototype.set_bubble_size = function (width, height) {
        this.bubble_width_ = width;
        this.bubble_height_ = height;
    };
    SimplifiedWorkspaceComment.prototype.is_auto_layout = function () {
        return this.auto_layout_;
    };
    SimplifiedWorkspaceComment.prototype.set_auto_layout = function (auto_layout) {
        this.auto_layout_ = auto_layout;
    };
    SimplifiedWorkspaceComment.prototype.get_relative_position = function () {
        if (this.parent_block_) {
            return this.relative_position_;
        }
        return this.location_;
    };
    SimplifiedWorkspaceComment.prototype.set_relative_position = function (new_relative_position) {
        this.relative_position_ = new_relative_position;
    };
    SimplifiedWorkspaceComment.prototype.set_expanded = function (expanded) {
        this.expanded_ = expanded;
    };
    SimplifiedWorkspaceComment.prototype.is_expanded = function () {
        return this.expanded_;
    };
    SimplifiedWorkspaceComment.prototype.update_visibility = function () {
        if (!this.parent_block_) {
            return;
        }
        var visibility_base = this.parent_block_;
        if ((0, base_1.is_block_svg)(visibility_base)) {
            visibility_base = visibility_base.get_root_block();
        }
        // 根据顶部积木的状态更新注释样式
        var block_visibility = visibility_base.get_visibility();
        (0, dom_1.update_visibility_class)(this.svg_group, block_visibility);
    };
    SimplifiedWorkspaceComment.prototype.get_color_theme = function () {
        return this.color_theme;
    };
    SimplifiedWorkspaceComment.prototype.set_color_theme = function (color_theme) {
        if (color_theme === this.color_theme) {
            return;
        }
        this.color_theme = color_theme;
    };
    SimplifiedWorkspaceComment.prototype.get_colour = function () {
        return interfaces_1.THEME_COLOR_MAP[this.color_theme];
    };
    // 简化版中无连接线。此处维持接口一致。
    SimplifiedWorkspaceComment.prototype.draw_line = function () { };
    // 简化版暂时未支持op。此处维持接口一致。
    SimplifiedWorkspaceComment.prototype.cancel_operation = function () { };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], SimplifiedWorkspaceComment.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ChangeEvent)
    ], SimplifiedWorkspaceComment.prototype, "change_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.SimplifiedCommentBubble)
    ], SimplifiedWorkspaceComment.prototype, "comment_bubble", void 0);
    SimplifiedWorkspaceComment = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], SimplifiedWorkspaceComment);
    return SimplifiedWorkspaceComment;
}(workspace_element_1.WorkspaceElement));
exports.SimplifiedWorkspaceComment = SimplifiedWorkspaceComment;
