"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceComment = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../../di");
var interfaces_1 = require("../../interfaces");
var svg_filter_1 = require("../../svg_filter");
var constants_1 = require("../../constants");
var dom_1 = require("../../utils/dom");
var maths_1 = require("../../utils/maths");
var base_1 = require("../../utils/base");
var workspace_element_1 = require("../workspace_element");
var DEFAULT_SIZE = 24;
var DEFAULT_BUBBLE_SIZE = [214, 126];
var BUBBLE_UI_HEIGHT = 36 + 12 + 4;
var MIN_BUBBLE_SIZE = [140, 68];
var ICON_WIDTH_HEIGHT = [40, 40];
/**
 * 注释功能，目前积木注释及Workspace注释均使用该类。
 * 【注释样式及功能优化】 https://www.tapd.cn/61080891/prong/stories/view/1161080891001008317
 */
var WorkspaceComment = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(WorkspaceComment, _super);
    function WorkspaceComment(workspace, parent_block, position, opt_id) {
        var _this = _super.call(this, workspace) || this;
        _this.element_type = 'comment';
        _this.SIZE = 24;
        _this.width = ICON_WIDTH_HEIGHT[0];
        _this.height = ICON_WIDTH_HEIGHT[1];
        /**
         * 注释左上角位置相对图标中心的偏移量。
         * 在关起时为 [-12, -12], 打开气泡时为 [-20, -20]。
         */
        _this.left_top_offset = [-12, -12];
        _this.color_theme = 'BLUE';
        _this.text_ = '';
        _this.bubble_width_ = DEFAULT_BUBBLE_SIZE[0];
        _this.bubble_height_ = DEFAULT_BUBBLE_SIZE[1];
        _this.parent_width_ = 0;
        _this.relative_position_ = gl_matrix_1.vec2.create();
        /**
         * 注释当前是否被展开。
         */
        _this.expanded_ = false;
        _this.prev_text_l = 0;
        _this.is_textarea_focused = false;
        /**
         * 当前是否需要在输入时自动调节高度。
         * 默认为true，经过一次手动调节后变为false。
         * 根据交互设计，暂时没有从false变回true的途径。
         */
        _this.auto_layout_ = true;
        _this.parent_block_ = parent_block;
        var currently_resizes_enabled = _this.workspace.is_resizes_enabled();
        _this.workspace.set_resizes_enabled(false);
        _this.events.disable();
        _this.id = opt_id != undefined ? opt_id : (0, maths_1.gen_uid)();
        _this.svg_group.classList.add('blocklyWorkspaceComment');
        _this.update_movable();
        if (parent_block) {
            if (parent_block.is_rendered()) {
                _this.parent_width_ = parent_block.first_row_width;
                _this.relative_position_ = gl_matrix_1.vec2.fromValues(_this.parent_width_ + 60, parent_block.first_row_height / 2);
            }
            // 积木注释不会被拖拽删除。
            _this.deletable_ = false;
        }
        var old_position = undefined;
        if (position) {
            if (_this.parent_block_) {
                old_position = (0, base_1.clone_deep)(_this.get_relative_position());
                _this.set_relative_position(gl_matrix_1.vec2.fromValues(position.x, position.y));
                var origin_1 = _this.parent_block_.get_relative_to_surface_xy();
                _this.translate(gl_matrix_1.vec2.add(origin_1, origin_1, _this.relative_position_));
            }
            else {
                _this.translate(gl_matrix_1.vec2.fromValues(position.x, position.y));
            }
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
                var event_1 = _this.change_event_factory('comment', {
                    block: _this.parent_block_,
                    old_value: undefined,
                    new_value: _this.id,
                });
                _this.events.fire(event_1);
            }
            else {
                _this.events.fire(_this.create_event_factory({ block: _this }));
            }
            // 协作相关，如果有初始position，有两种可能的情况
            // 1. 全局注释 2. 撤销删除积木注释
            // 第2种情况需要发送move事件用于产生op
            if (position && _this.parent_block_) {
                var move_event = _this.move_event_factory({ block: _this });
                move_event.set_record_undo(false);
                old_position && move_event.set_old_coord(old_position);
                move_event.record_new();
                _this.events.fire(move_event);
            }
        }
        _this.workspace.set_resizes_enabled(currently_resizes_enabled);
        return _this;
    }
    WorkspaceComment.prototype.init_svg = function () {
        var _a;
        // 创建积木注释连接线svg_line_。
        if (this.parent_block_ && !this.svg_line_) {
            this.svg_line_ = (0, dom_1.create_svg_element)('line', {
                'class': 'blocklyCommentLine',
                'x1': 0,
                'y1': 0,
            }, this.svg_group);
            this.svg_line_.style.stroke = interfaces_1.THEME_COLOR_MAP[this.color_theme].toString();
        }
        // icon需要在初始化时就创建，但bubble可以在show editor时动态创建。
        // 因为存在get_icon方法，svg_icon_可能会需要在icon状态被展示前就被使用。
        if (!this.svg_icon) {
            this.svg_icon = (0, dom_1.create_svg_element)('g', {
                'class': 'blocklyCommentGroup',
                'filter': "url(#" + svg_filter_1.FILTER.BOXSHADOW + ")",
            });
            this.draw_icon(this.svg_icon);
            this.events.bind_event_with_checks(this.svg_icon, 'mouseup', this, this.on_icon_click);
        }
        // 在类的初始化和svg的初始化过程中，注释的属性可能被有改变，
        // 比如在dom_to_comment时，初始化注释类 -> parse xml attr -> init_svg
        // 因此需要在绘制前重新定位。
        this.reposition();
        if (this.expanded_) {
            this.show_editor();
        }
        else {
            this.update_icon();
        }
        this.rendered = true;
        (_a = this.workspace.get_canvas()) === null || _a === void 0 ? void 0 : _a.appendChild(this.svg_group);
    };
    /**
     * 初始化注释图标的svg并append到workspace canvas上。
     */
    WorkspaceComment.prototype.update_icon = function () {
        if (!this.svg_icon) {
            return;
        }
        this.svg_icon.setAttribute('transform', "translate(" + this.left_top_offset[0] + ", " + this.left_top_offset[1] + ")");
        if (!this.expanded_) {
            this.svg_group.appendChild(this.svg_icon);
        }
    };
    WorkspaceComment.prototype.get_icon = function () {
        return this.svg_icon;
    };
    /**
     * 绘制或更新注释与积木间的连接虚线。
     */
    WorkspaceComment.prototype.draw_line = function () {
        if (!this.parent_block_ || !this.svg_group || !this.svg_line_) {
            return;
        }
        var target = this.compute_line_connect_position();
        if (target[0] !== Number(this.svg_line_.getAttribute('x2'))) {
            this.svg_line_.setAttribute('x2', "" + target[0]);
        }
        if (target[1] !== Number(this.svg_line_.getAttribute('y2'))) {
            this.svg_line_.setAttribute('y2', "" + target[1]);
        }
    };
    /**
     * Draw the comment icon.
     * @param group The icon group to append the circle and the 'i' symbol.
     */
    WorkspaceComment.prototype.draw_icon = function (group, size, color) {
        size = size || this.SIZE;
        color = color || "url(#CommentLinearGradient-" + this.color_theme + ")",
            (0, dom_1.create_svg_element)('circle', {
                'class': 'blocklyCommentShape',
                'r': size / 2, 'cx': size / 2, 'cy': size / 2,
                'fill': color,
            }, group);
        (0, dom_1.create_svg_element)('path', {
            'class': 'blocklyCommentSymbol',
            'transform': "scale(" + size / DEFAULT_SIZE + ") translate(4,4)",
            'd': 'M6.98347343,1.49411736 C7.33446274,1.16471383 7.86095956,1 8.38745638,1 C8.91395321,1 9.44045003,1.16471383 9.79146505,1.49411736 C10.2301953,1.82354502 10.4057028,2.23529341 10.4057028,2.72941077 C10.4057028,3.22352813 10.2301953,3.63530065 9.79146505,3.96470418 C9.35270913,4.29413184 8.91395321,4.45882154 8.38745638,4.45882154 C7.86095956,4.45882154 7.33446274,4.29413184 6.89573253,3.96470418 C6.54471751,3.63530065 6.28146909,3.22352813 6.28146909,2.72941077 C6.3692357,2.23529341 6.54471751,1.82354502 6.98347343,1.49411736 L6.98347343,1.49411736 Z M10.3500141,14.3956806 C9.75084061,14.5982168 9.33065616,14.744752 9.08946072,14.8352862 C8.6507048,15 8.21197458,15 7.68547776,15 C6.89573253,15 6.19372819,14.8352862 5.75497227,14.4235378 C5.31624206,14.0117653 5.05299365,13.5999928 5.05299365,13.0235305 C5.05299365,12.7764719 5.05299365,12.611758 5.14073455,12.3646994 C5.14073455,12.1176407 5.22847545,11.870582 5.31624206,11.6235233 L6.19372819,8.90587781 C6.28146909,8.65881913 6.3692357,8.41176045 6.3692357,8.16470177 C6.4569766,7.91764308 6.4569766,7.75295338 6.4569766,7.5058947 C6.4569766,7.17646704 6.3692357,6.92940836 6.19372819,6.76471866 C6.01822068,6.60000483 5.75497227,6.60000483 5.31624206,6.60000483 C5.05299365,6.60000483 4.87748614,6.60000483 4.61423772,6.68234968 C4.52669943,6.70973993 4.43188454,6.73712818 4.32979305,6.76451443 C4.19006969,6.80197087 4.04642345,6.71909078 4.00894402,6.57937358 C4.00300701,6.55724137 4,6.53442576 4,6.51151108 C4,6.30823881 4.12437054,6.12566505 4.31352762,6.05123915 C5.07451793,5.75187496 5.58425502,5.57793699 5.84273888,5.52942525 C6.3692357,5.36471142 6.80796592,5.28236657 7.33446274,5.28236657 C8.12420797,5.28236657 8.82621231,5.44705627 9.26496823,5.85882878 C9.70369844,6.18823231 9.96694685,6.68234968 9.96694685,7.25883602 L9.96694685,7.91764308 C9.96694685,8.24707075 9.87920595,8.49412943 9.79146505,8.74118811 L8.91395321,11.4588336 C8.82621231,11.7058923 8.73847141,11.952951 8.73847141,12.2000097 C8.6507048,12.4470683 8.6507048,12.694127 8.6507048,12.8588167 C8.6507048,13.1882444 8.73847141,13.4353031 8.91395321,13.5999928 C9.08946072,13.7647066 9.35270913,13.7647066 9.87920595,13.7647066 C10.0547135,13.7647066 10.3179619,13.7647066 10.5812103,13.6823617 C10.6420133,13.6633368 10.7063269,13.6443129 10.7741511,13.6252899 C10.8691243,13.5986609 10.967707,13.6540565 10.9943439,13.7490274 C11.0075127,13.7959791 11.0009105,13.8462737 10.97607,13.8882359 C10.8348216,14.1268423 10.6126922,14.3068868 10.3500141,14.3956806 Z',
        }, group);
    };
    WorkspaceComment.prototype.on_icon_click = function (e) {
        if (this.workspace.is_dragging()) {
            // Drag operation is concluding.  Don't open the editor.
            return;
        }
        if (!this.utils.is_right_button(e)) {
            this.set_expanded(true);
        }
    };
    /**
     * @override 处理原点偏移。
     */
    WorkspaceComment.prototype.get_bounding_rectangle = function () {
        var _a = _super.prototype.get_bounding_rectangle.call(this), topLeft = _a.topLeft, bottomRight = _a.bottomRight;
        return {
            topLeft: gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), topLeft, this.left_top_offset),
            bottomRight: gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), bottomRight, this.left_top_offset),
        };
    };
    WorkspaceComment.prototype.get_parent_block = function () {
        return this.parent_block_;
    };
    WorkspaceComment.prototype.get_top_parent = function () {
        return this.get_root_block() || this;
    };
    WorkspaceComment.prototype.get_root_block = function () {
        var top_block = this.parent_block_;
        while (top_block === null || top_block === void 0 ? void 0 : top_block.parent_block) {
            top_block = top_block.parent_block;
        }
        return top_block;
    };
    WorkspaceComment.prototype.dispose = function (healStack, show_animate) {
        var delete_event;
        if (this.events.is_enabled()) {
            // 存在父积木时，注释本身不生成delete事件，而是使用积木的change事件作为记录
            if (this.parent_block_) {
                delete_event = this.change_event_factory('comment', {
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
        _super.prototype.dispose.call(this, healStack, show_animate && !this.parent_block_);
        this.events.fire(delete_event);
    };
    WorkspaceComment.prototype.show_context_menu = function (e) {
        var _this = this;
        var options = this.workspace.get_options();
        if (options.readOnly || !this.context_menu) {
            return;
        }
        if (this.is_in_flyout) {
            return;
        }
        var generate_icon = function (theme) {
            var wrap = (0, dom_1.create_svg_element)('g', { width: 16, height: 16 });
            _this.draw_icon(wrap, 16, interfaces_1.THEME_COLOR_MAP[theme].toString());
            return wrap;
        };
        var set_color_theme_cb = function (new_theme) {
            var old_theme = _this.color_theme;
            if (old_theme === new_theme) {
                return;
            }
            _this.set_color_theme(new_theme);
            if (_this.events.is_enabled()) {
                _this.events.fire(_this.change_event_factory('comment_color', {
                    block: _this,
                    old_value: old_theme,
                    new_value: new_theme,
                }));
            }
        };
        var menu_options = [
            {
                text: this.Msg.BLUE_COMMENT,
                name: 'comment_set_color_blue',
                enabled: true,
                callback: set_color_theme_cb.bind(this, 'BLUE'),
                icon: generate_icon('BLUE'),
                selected: this.color_theme === 'BLUE',
            },
            {
                text: this.Msg.GREEN_COMMENT,
                name: 'comment_set_color_green',
                enabled: true,
                callback: set_color_theme_cb.bind(this, 'GREEN'),
                icon: generate_icon('GREEN'),
                selected: this.color_theme === 'GREEN',
            },
            {
                text: this.Msg.YELLOW_COMMENT,
                name: 'comment_set_color_yellow',
                enabled: true,
                callback: set_color_theme_cb.bind(this, 'YELLOW'),
                icon: generate_icon('YELLOW'),
                selected: this.color_theme === 'YELLOW',
            },
            {
                text: this.Msg.RED_COMMENT,
                name: 'comment_set_color_red',
                enabled: true,
                callback: set_color_theme_cb.bind(this, 'RED'),
                icon: generate_icon('RED'),
                selected: this.color_theme === 'RED',
            },
            {
                text: this.Msg.DELETE_COMMENT,
                name: 'comment_delete',
                enabled: true,
                callback: function () {
                    if (_this.parent_block_) {
                        _this.parent_block_.set_comment_text(undefined);
                        return;
                    }
                    _this.dispose(undefined, true);
                },
            },
        ];
        this.context_menu.current_block = this;
        this.context_menu.show(e, { source: 'block', options: menu_options }, this.RTL);
    };
    WorkspaceComment.prototype.get_color_theme = function () {
        return this.color_theme;
    };
    WorkspaceComment.prototype.get_colour = function () {
        return interfaces_1.THEME_COLOR_MAP[this.color_theme];
    };
    WorkspaceComment.prototype.set_color_theme = function (color_theme, opt_no_animation) {
        var _this = this;
        if (color_theme === this.color_theme) {
            return;
        }
        if (!(0, base_1.is_comment_theme)(color_theme)) {
            console.warn("Trying to set invalid color theme: " + color_theme);
            return;
        }
        var prev_color = interfaces_1.THEME_COLOR_MAP[this.color_theme];
        this.color_theme = color_theme;
        var color = interfaces_1.THEME_COLOR_MAP[this.color_theme];
        if (this.svg_line_) {
            this.svg_line_.style.stroke = color.toString();
        }
        if (this.bubble_) {
            this.bubble_.style.background = "linear-gradient(to bottom, " + color + " 4px, #fff 4px)";
            if (this.expanded_ && !opt_no_animation) {
                // 切换颜色动画
                // 目标颜色条从左向右延展 => 原颜色条从左向右变窄
                if (this.empty_border) {
                    this.empty_border.classList.add('blocklyCommentBorder');
                    this.empty_border.style.backgroundColor = prev_color.toString();
                    this.empty_border.addEventListener('animationend', function () {
                        if (_this.empty_border) {
                            _this.empty_border.classList.remove('blocklyCommentBorder');
                            _this.empty_border.style.backgroundColor = 'transparent';
                        }
                    });
                }
            }
        }
        if (this.svg_icon) {
            var circle = this.svg_icon.querySelector('circle');
            circle && circle.setAttribute('fill', "url(#CommentLinearGradient-" + this.color_theme + ")");
        }
        if (this.sub_icon) {
            var circle = this.sub_icon.querySelector('circle');
            circle && circle.setAttribute('fill', color.toString());
        }
    };
    /**
     * @override
     */
    WorkspaceComment.prototype.move_by = function (dxy) {
        var event;
        if (this.events.is_enabled()) {
            event = this.move_event_factory({ block: this });
        }
        var xy = this.get_relative_to_surface_xy();
        this.translate(gl_matrix_1.vec2.add(this.location_, xy, dxy));
        if (this.parent_block_) {
            gl_matrix_1.vec2.add(this.relative_position_, this.relative_position_, dxy);
            this.draw_line();
        }
        event && event.record_new();
        if (this.rendered) {
            this.workspace.resize_contents();
        }
        event && this.events.fire(event);
    };
    WorkspaceComment.prototype.sort = function (cursor) {
        var xy = this.get_relative_to_surface_xy();
        // 来自设计的逻辑：
        // 整理时，注释的水平位置，以展开状态下左边能跟积木左边对齐的状态为准。
        // 而关闭状态的icon圆心需要和展开状态icon的圆心对齐。
        // 因此在整理时，注释原点统一右偏移20。
        var target = gl_matrix_1.vec2.fromValues(cursor[0] + 20, cursor[1] + 20);
        this.move_by(gl_matrix_1.vec2.sub(xy, target, xy));
        gl_matrix_1.vec2.add(cursor, cursor, [0, this.get_height_width().height + this.theme.renderer.MIN_HEIGHT]);
    };
    WorkspaceComment.prototype.get_text = function () {
        return this.text_;
    };
    WorkspaceComment.prototype.set_text = function (text) {
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
        if (this.textarea_) {
            this.textarea_.value = text;
        }
        this.text_layout();
        event && this.events.fire(event);
    };
    WorkspaceComment.prototype.get_bubble_size = function () {
        return {
            width: this.bubble_width_,
            height: this.bubble_height_,
        };
    };
    WorkspaceComment.prototype.set_bubble_size = function (width, height) {
        width = Math.max(MIN_BUBBLE_SIZE[0], width);
        if (width !== this.bubble_width_) {
            this.bubble_width_ = width;
            this.bubble_ && this.bubble_.setAttribute('width', "" + width);
            this.bubble_shadow_ && this.bubble_shadow_.setAttribute('width', "" + width);
            if (this.expanded_) {
                this.width = width;
            }
        }
        height = Math.max(MIN_BUBBLE_SIZE[1], height);
        if (height !== this.bubble_height_) {
            this.bubble_height_ = height;
            this.bubble_ && this.bubble_.setAttribute('height', "" + height);
            this.bubble_shadow_ && this.bubble_shadow_.setAttribute('height', "" + height);
            if (this.expanded_) {
                this.height = height;
            }
        }
    };
    WorkspaceComment.prototype.get_relative_position = function () {
        if (this.parent_block_) {
            return this.relative_position_;
        }
        return this.location_;
    };
    WorkspaceComment.prototype.set_relative_position = function (new_relative_position) {
        this.relative_position_ = new_relative_position;
    };
    WorkspaceComment.prototype.set_expanded = function (expanded) {
        if (expanded == this.expanded_) {
            // No change.
            return;
        }
        this.expanded_ = expanded;
        if (!this.rendered) {
            return;
        }
        var event;
        if (this.events.is_enabled()) {
            event = this.change_event_factory('comment_expand', {
                block: this,
                old_value: !expanded,
                new_value: expanded,
            });
        }
        if (expanded) {
            // Create the bubble.
            this.show_editor();
        }
        else {
            // Dispose of the bubble.
            this.hide_editor();
        }
        // 在打开注释的入口需要更新注释样式
        this.update_visibility();
        this.events.fire(event);
        this.workspace.resize_contents();
    };
    WorkspaceComment.prototype.is_expanded = function () {
        return this.expanded_;
    };
    WorkspaceComment.prototype.update_visibility = function () {
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
    WorkspaceComment.prototype.reposition = function () {
        if (!this.parent_block_
            || !this.parent_block_.is_rendered()) {
            return;
        }
        var origin = this.parent_block_.get_relative_to_surface_xy();
        // 此处目的是在父积木上发生输出积木的嵌入或取出时，根据宽度变化调整注释位置。
        // 若this.parent_width_为0，则代表当前注释是在积木未被渲染时被创建。
        // 这种情况一定不是用户手动操作造成的，而是撤销重做/保存加载。
        // 此时relative_position不需要根据宽度变化进行调整。
        var is_block_width_changed = this.parent_width_ && this.parent_width_ !== this.parent_block_.first_row_width;
        if (is_block_width_changed) {
            var is_align_right = this.relative_position_[0] > this.parent_width_ / 2;
            if (is_align_right) {
                this.relative_position_[0] -= this.parent_width_;
                this.relative_position_[0] += this.parent_block_.first_row_width;
            }
        }
        this.parent_width_ = this.parent_block_.first_row_width;
        this.translate(gl_matrix_1.vec2.add(origin, origin, this.relative_position_));
        this.draw_line();
    };
    WorkspaceComment.prototype.show_editor = function () {
        var _this = this;
        this.svg_icon && (0, dom_1.remove_node)(this.svg_icon);
        this.left_top_offset = [-20, -20];
        if (!this.bubble_ || !this.bubble_shadow_) {
            this.bubble_ = (0, dom_1.create_svg_element)('foreignObject', {
                'width': this.bubble_width_,
                'height': this.bubble_height_,
                'class': 'blocklyCommentBubble',
                'transform': "translate(" + this.left_top_offset[0] + ", " + this.left_top_offset[1] + ")",
            });
            this.bubble_.style.background =
                "linear-gradient(to bottom, " + interfaces_1.THEME_COLOR_MAP[this.color_theme] + " 4px, #fff 4px)";
            this.empty_border = document.createElement('div');
            this.empty_border.classList.add('blockCommentEmptyBorder');
            this.bubble_.appendChild(this.empty_border);
            var label_group = document.createElement('div');
            label_group.classList.add('blocklyCommentBubbleLabel');
            var label_left = document.createElement('div');
            this.sub_icon = (0, dom_1.create_svg_element)('svg', {
                'width': 14,
                'height': 14,
                'class': 'blocklyCommentBubbleIcon',
            }, label_left);
            this.draw_icon(this.sub_icon, 14, interfaces_1.THEME_COLOR_MAP[this.color_theme].toString());
            var tip = document.createElement('div');
            tip.textContent = this.Msg.COMMENT,
                label_left.appendChild(tip);
            label_group.appendChild(label_left);
            var close_button = (0, dom_1.create_svg_element)('svg', {
                'width': 12,
                'height': 12,
                'class': 'blocklyCommentBubbleClose',
            }, label_group);
            (0, dom_1.create_svg_element)('path', {
                'd': 'm8,4 l3.834 3.834 c0.352,0.352 0.352,0.92 0,1.278 l-0.32,0.32 c-0.352,0.352 -0.92,0.352 -1.278,0 l-2.926,-2.926 l-2.926,2.926 c-0.352,0.352 -0.92,0.352 -1.278,0 l-0.32,-0.32 c-0.352,-0.352 -0.352,-0.92 0,-1.278 l3.834,-3.834 q 0.6892,-0.8 1.3784,0 z',
            }, close_button);
            label_group.appendChild(close_button);
            this.textarea_ = document.createElementNS(constants_1.HTML_NS, 'textarea');
            this.textarea_.classList.add('blocklyCommentTextarea');
            this.textarea_.placeholder =
                this.parent_block_ ? this.Msg.WHATS_THIS : this.Msg.SAY_SOMETHING;
            this.events.bind_event_with_checks(this.textarea_, 'mousedown', this, this.textarea_mouse_down);
            this.events.bind_event_with_checks(this.textarea_, 'blur', this, function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.textarea_ && _this.set_text(_this.textarea_.value || '');
                _this.is_textarea_focused = false;
            });
            this.events.bind_event_with_checks(this.textarea_, 'input', this, function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.text_layout();
            });
            this.events.bind_event_with_checks(close_button, 'mousedown', this, function (e) {
                e.stopPropagation();
                e.preventDefault();
                this.set_expanded(false);
            });
            /**
             * 为了兼容safari，不使用绝对定位，使用默认布局
             * comment_border (height: 4px)
             * top_container
             *    （左）main_container  （右, width: 4px）ew_resize_controller
             *            label_group
             *            textarea
             * bottom_container (height: 4px)
             *    （左）ns_resize_controller  （右，width: 4px）nwse_resize_controller
             */
            var top_container = document.createElement('div');
            top_container.classList.add('blocklyCommentTopContainer');
            var main_container = document.createElement('div');
            main_container.classList.add('blocklyCommentMainContainer');
            main_container.appendChild(label_group);
            main_container.appendChild(this.textarea_);
            this.bubble_.appendChild(top_container);
            top_container.appendChild(main_container);
            var bottom_container = document.createElement('div');
            bottom_container.classList.add('blocklyCommentBottomContainer');
            this.bubble_.appendChild(bottom_container);
            var controllers = this.create_resize_controllers();
            if (controllers) {
                top_container.appendChild(controllers.ew_resize);
                bottom_container.appendChild(controllers.ns_resize);
                bottom_container.appendChild(controllers.nwse_resize);
            }
            this.bubble_shadow_ = (0, dom_1.create_svg_element)('rect', {
                'width': this.bubble_width_,
                'height': this.bubble_height_,
                'filter': "url(#" + svg_filter_1.FILTER.BOXSHADOW + ")",
                'transform': "translate(" + this.left_top_offset[0] + ", " + this.left_top_offset[1] + ")",
            });
        }
        this.textarea_ && (this.textarea_.value = this.text_);
        this.svg_group.appendChild(this.bubble_shadow_);
        this.svg_group.appendChild(this.bubble_);
        this.height = this.bubble_height_;
        this.width = this.bubble_width_;
        this.bring_to_front();
    };
    WorkspaceComment.prototype.text_layout = function () {
        if (!this.textarea_ || !this.auto_layout_) {
            return;
        }
        // 新的输入内容比旧的更长时，只需要检查是否向下撑大。
        if (this.textarea_.value.length >= this.prev_text_l) {
            var expected_height = this.textarea_.scrollHeight + BUBBLE_UI_HEIGHT;
            this.set_bubble_size(this.bubble_width_, Math.max(expected_height, DEFAULT_BUBBLE_SIZE[1]));
            this.prev_text_l = this.textarea_.value.length;
            return;
        }
        // 新的输入内容比旧的短时，检查是否需要将框变短。
        this.set_bubble_size(this.bubble_width_, DEFAULT_BUBBLE_SIZE[1]);
        this.prev_text_l = 0;
        this.text_layout();
    };
    WorkspaceComment.prototype.hide_editor = function () {
        this.bubble_shadow_ && (0, dom_1.remove_node)(this.bubble_shadow_);
        this.bubble_ && (0, dom_1.remove_node)(this.bubble_);
        this.width = ICON_WIDTH_HEIGHT[0];
        this.height = ICON_WIDTH_HEIGHT[1];
        this.left_top_offset = [-12, -12];
        this.update_icon();
    };
    /**
     * textarea的按下事件。
     *
     * 在textarea当前未被焦点的情况下，
     * 若mousedown后在一定鼠标移动范围内触发mouseup事件，将使textarea获得焦点，
     * 若mousedown后多次触发mousemove事件导致鼠标移动数值超过一定阈值 将触发注释的拖拽移动交互，
     *  且后续的mouseup事件将不再使textarea获得焦点。
     * (只需要监听mouseup事件，以上逻辑会被gesture处理)
     *
     * 在textarea当前已经被焦点时，阻止事件冒泡，不做任何额外操作。
     * @param e mousedown事件。
     */
    WorkspaceComment.prototype.textarea_mouse_down = function (e) {
        var _this = this;
        if (!this.textarea_) {
            return;
        }
        /**
         * textarea是svg group的子元素。若事件冒泡到svg group上，会被gesture接管，
         * 而gesture会对其接管的所有事件调用preventDefault。
         * 由此会导致textarea无法被焦点、无法选中文字、无法通过鼠标点击移动光标位置等问题。
         * 因此在textarea已经被焦点时，阻止mousedown事件冒泡，以将当前操作聚焦在textarea内，
         * 具体表现为：
         * 1. 保留textarea的默认事件
         * 2. 阻止触发拖拽事件
         */
        if (this.is_textarea_focused) {
            e.stopPropagation();
            return;
        }
        this.bring_to_front();
        var textarea_mouse_up_wrapper = this.events.bind_event_with_checks(this.textarea_, 'mouseup', this, function () {
            _this.textarea_ && _this.textarea_.focus();
            _this.is_textarea_focused = true;
            _this.select();
            _this.events.unbind_event(textarea_mouse_up_wrapper);
            _this.workspace.cancel_current_gesture();
            _this.touch_manager.clear_touch_identifier();
        });
    };
    WorkspaceComment.prototype.create_resize_controllers = function () {
        if (!this.bubble_) {
            return;
        }
        var controllers = {
            ew_resize: document.createElement('div'),
            ns_resize: document.createElement('div'),
            nwse_resize: document.createElement('div'),
        };
        /**
         * 右侧竖直的resize控件，拖动时可变更注释气泡宽度。
         */
        controllers.ew_resize.classList.add('blocklyCommentEWResize');
        this.events.bind_event_with_checks(controllers.ew_resize, 'mousedown', this, this.resize_mouse_down.bind(this, 'ew'));
        /**
         * 下方水平的resize控件，拖动时可变更注释气泡高度。
         */
        controllers.ns_resize.classList.add('blocklyCommentNSResize');
        this.events.bind_event_with_checks(controllers.ns_resize, 'mousedown', this, this.resize_mouse_down.bind(this, 'ns'));
        /**
         * 右下角resize控件，拖动时可同时变更注释气泡的宽高。
         */
        controllers.nwse_resize.classList.add('blocklyCommentNWSEResize');
        this.events.bind_event_with_checks(controllers.nwse_resize, 'mousedown', this, this.resize_mouse_down.bind(this, 'nwse'));
        return controllers;
    };
    WorkspaceComment.prototype.unbind_resize_events = function () {
        if (this.on_mouseup_wrapper) {
            this.events.unbind_event(this.on_mouseup_wrapper);
            this.on_mouseup_wrapper = undefined;
        }
        if (this.on_mousemove_wrapper) {
            this.events.unbind_event(this.on_mousemove_wrapper);
            this.on_mousemove_wrapper = undefined;
        }
    };
    WorkspaceComment.prototype.resize_mouse_down = function (direction, e) {
        this.bring_to_front();
        this.select();
        e.stopPropagation();
        e.preventDefault();
        if (this.utils.is_right_button(e)) {
            // No right-click.
            return;
        }
        this.workspace.start_drag(e, gl_matrix_1.vec2.fromValues(this.bubble_width_, this.bubble_height_));
        this.select();
        this.size_before_resize = [this.bubble_width_, this.bubble_height_];
        this.on_mouseup_wrapper = this.events.bind_event_with_checks(document, 'mouseup', this, this.bubble_mouse_up);
        this.on_mousemove_wrapper = this.events.bind_event_with_checks(document, 'mousemove', this, this.resize_mouse_move.bind(this, direction));
    };
    WorkspaceComment.prototype.resize_mouse_move = function (direction, e) {
        this.auto_layout_ = false;
        var new_size = this.workspace.move_drag(e);
        if (direction.indexOf('e') > -1 && direction.indexOf('w') > -1) {
            this.set_bubble_size(new_size[0], this.bubble_height_);
        }
        if (direction.indexOf('n') > -1 && direction.indexOf('s') > -1) {
            this.set_bubble_size(this.bubble_width_, new_size[1]);
        }
    };
    WorkspaceComment.prototype.bubble_mouse_up = function () {
        this.touch_manager.clear_touch_identifier();
        this.unbind_resize_events();
        if (this.size_before_resize
            && (this.size_before_resize[0] !== this.bubble_width_ || this.size_before_resize[1] !== this.bubble_height_)
            && this.events.is_enabled()) {
            this.events.fire(this.change_event_factory('comment_resize', {
                block: this,
                old_value: this.size_before_resize,
                new_value: [this.bubble_width_, this.bubble_height_],
            }));
        }
        this.size_before_resize = undefined;
    };
    WorkspaceComment.prototype.is_auto_layout = function () {
        return this.auto_layout_;
    };
    WorkspaceComment.prototype.set_auto_layout = function (auto_layout) {
        this.auto_layout_ = auto_layout;
    };
    WorkspaceComment.prototype.focus = function () {
        var _a, _b;
        this.set_expanded(true);
        if (!this.textarea_) {
            return;
        }
        var window_size = (0, dom_1.get_viewport_size)();
        var exceed_right_edge = this.textarea_.getBoundingClientRect().left >= window_size.width;
        if (!exceed_right_edge) {
            this.textarea_.focus();
            return;
        }
        // 当前注释左边缘 相对于 workspace可视范围左边缘 的偏移，in workspace unit
        var left = this.get_relative_to_surface_xy()[0] + this.left_top_offset[0];
        // 当前注释左边缘 相对于 workspace可滚动范围左边缘 的偏移，in px
        var metrics = this.workspace.get_metrics();
        var scale = this.workspace.get_scale();
        left = left * scale - metrics.contentLeft;
        // 当注释靠workspace最右时，workspace可视范围左边缘 相对于 其可滚动范围左边缘 的距离，in px
        left -= metrics.viewWidth;
        left += this.bubble_width_ * scale;
        (_b = (_a = this.workspace.get_scrollbar()) === null || _a === void 0 ? void 0 : _a.h_scroll) === null || _b === void 0 ? void 0 : _b.set(left);
        this.textarea_.focus();
    };
    Object.defineProperty(WorkspaceComment.prototype, "use_drag_surface", {
        /**
         * @override 积木注释不需要移入拖拽层。
         */
        get: function () {
            return !!this.workspace.get_block_drag_surface()
                && !this.parent_block_;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取 积木注释与积木的连接点 相对于 注释原点的位置。
     * （ = 积木原点相对于注释原点的偏移量 + 连接点相对于积木原点的偏移量）
     * 用于绘制连接虚线。
     */
    WorkspaceComment.prototype.compute_line_connect_position = function () {
        /**
         * 积木原点相对注释原点的位置。
         */
        var origin = gl_matrix_1.vec2.scale(gl_matrix_1.vec2.create(), this.relative_position_, -1);
        if (!this.parent_block_ || !this.parent_block_.rendered) {
            return origin;
        }
        /**
         * 计算连接点相对于积木原点的偏移量。
         */
        var offset = gl_matrix_1.vec2.create();
        /**
         * 纵向偏移为积木首行高度的1/2。
         */
        offset[1] = this.parent_block_.first_row_height / 2;
        var first_row_width = this.parent_block_.first_row_width;
        /**
         * 横向偏移计算。
         * 当注释靠左时，该位置在积木左边中心；靠右时在积木右中心。
         * 同时需要对头积木的左边位置进行处理。
         */
        var should_align_right = this.relative_position_[0] > first_row_width / 2;
        if (should_align_right) {
            offset[0] += first_row_width;
        }
        if (this.parent_block_.is_starting_block() && !should_align_right) {
            offset[0] -= 22;
        }
        return gl_matrix_1.vec2.add(origin, origin, offset);
    };
    WorkspaceComment.prototype.cancel_operation = function () {
        // 正在textarea中进行输入
        if (this.is_textarea_focused) {
            this.textarea_.value = this.text_;
            this.textarea_.blur();
        }
        // 正在拖拽修改尺寸
        if (this.size_before_resize) {
            this.set_bubble_size(this.size_before_resize[0], this.size_before_resize[1]);
            this.bubble_mouse_up();
        }
        this.unselect();
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.touch_manager)
    ], WorkspaceComment.prototype, "touch_manager", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Msg)
    ], WorkspaceComment.prototype, "Msg", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], WorkspaceComment.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.json)
    ], WorkspaceComment.prototype, "json", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ChangeEvent)
    ], WorkspaceComment.prototype, "change_event_factory", void 0);
    WorkspaceComment = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], WorkspaceComment);
    return WorkspaceComment;
}(workspace_element_1.WorkspaceElement));
exports.WorkspaceComment = WorkspaceComment;
