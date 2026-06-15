"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalFlyout = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var interfaces_1 = require("../interfaces");
var dom_1 = require("../utils/dom");
var base_1 = require("../utils/base");
var maths_1 = require("../utils/maths");
var flyout_base_1 = require("./flyout_base");
var VerticalFlyout = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(VerticalFlyout, _super);
    /**
     * Class for a vertical flyout.
     * @param workspace_options Dictionary of options for the workspace.
     */
    function VerticalFlyout(workspace_options) {
        var _this = _super.call(this, workspace_options) || this;
        _this.excute_after_next_reflow = [];
        /**
         * flyout中内容的实际高度，单位svg（非px）。
         */
        _this.content_height_ = 0;
        _this.horizontalLayout_ = false;
        _this.fixed_width = workspace_options.flyout.fixed_width;
        // 防止在常驻模式下打开时，第一次触发挤压workspace动画时由于width为0产生的错误
        _this.width_ = _this.fixed_width || 0;
        _this.set_auto_close(workspace_options.flyout.auto_close);
        return _this;
    }
    VerticalFlyout.prototype.create_dom = function (tag_name) {
        var svg_group = _super.prototype.create_dom.call(this, tag_name);
        if (typeof this.fixed_width === 'number') {
            svg_group.addEventListener('mouseenter', function () {
                svg_group.style.overflow = 'visible';
            });
            svg_group.addEventListener('mouseleave', function () {
                svg_group.style.overflow = 'hidden';
            });
        }
        return svg_group;
    };
    /**
     * Return an object with all the metrics required to size scrollbars for the
     * flyout.
     * @return Contains size and position metrics of the flyout.
     */
    VerticalFlyout.prototype.get_metrics = function () {
        if (!this.is_visible()) {
            // Flyout is hidden.
            return undefined;
        }
        var canvas = this.workspace_.get_canvas();
        if (!canvas) {
            throw new Error('Flyout ws has not been inited.');
        }
        var option_box;
        try {
            option_box = canvas.getBBox();
        }
        catch (e) {
            option_box = { height: 0, y: 0, width: 0, x: 0 };
        }
        var scale = this.workspace_.get_scale();
        var metrics = {
            viewHeight: this.height_,
            viewWidth: this.width_,
            contentHeight: option_box.height * scale + this.padding_top + this.padding_bottom,
            contentWidth: option_box.width * scale,
            viewTop: -this.workspace_.scroll_xy[1],
            viewLeft: -this.workspace_.scroll_xy[0],
            contentTop: 0,
            contentLeft: option_box.x,
            // Padding for the end of the scrollbar.
            absoluteTop: 2,
            absoluteLeft: 0,
        };
        return metrics;
    };
    /**
     * Lay out the blocks in the flyout.
     * 确定了flyout中所有元素的纵向排布，但最终的横向排布要在reflow之后才决定。
     * 因为在layout之后才能确定flyout的最终宽度，
     * 而部分元素需要根据flyout的宽度来决定自己的宽度或位置。
     * @param contents The blocks and buttons to lay out.
     * @param gaps The visible gaps between blocks.
     */
    VerticalFlyout.prototype.layout_ = function (contents, gaps) {
        var _this = this;
        var _a;
        var cursor_xy = gl_matrix_1.vec2.fromValues(this.padding_left, 0);
        var render_block = function (block) {
            var all_blocks = block.get_descendants();
            for (var j = 0; j < all_blocks.length; j++) {
                // Mark blocks as being inside a flyout.
                // This is used to detect and prevent the closure of the flyout
                // if the user right-clicks on such a block.
                var child = all_blocks[j];
                child.is_in_flyout = true;
                child.render();
            }
            block.render();
            var root = block.get_svg_root();
            _this.add_block_listeners(root, block);
            return block;
        };
        for (var i = 0; i < contents.length; i++) {
            var item = contents[i];
            if (item.type == 'block' && item.block) {
                // 在不同积木外观中，积木绘制的起始点不同，并非总是从左上角开始
                // 所以绘制前，需要临时创建单独的积木cursor，将其移动到积木绘制起始点的位置
                var block_cursor = gl_matrix_1.vec2.fromValues(cursor_xy[0], cursor_xy[1]);
                gl_matrix_1.vec2.add(block_cursor, block_cursor, this.theme.renderer.BLOCK_LEFT_TOP);
                if (item.block.is_starting_block()) {
                    gl_matrix_1.vec2.add(block_cursor, block_cursor, [((_a = this.targetWorkspace_) === null || _a === void 0 ? void 0 : _a.options.flyout.blocks.head_block_offset[0]) || 0, 0]);
                }
                var block = render_block(item.block);
                block.move_by(block_cursor);
                var block_width_height = block.get_height_width();
                // 需要inline展示时，更新current_line的信息。
                if (item.inline) {
                    this.current_item_line = {
                        offset_left: cursor_xy[0] + block_width_height.width,
                        offset_right: this.padding_right,
                        height: block_width_height.height,
                    };
                    continue;
                }
                // cursor x 位置不变，按照积木高度 gap更新 cursor y 的位置。
                cursor_xy[1] += block_width_height.height + gaps[i];
                continue;
            }
            if (item.type == 'button' && item.button) {
                this.button_layout(item.button, cursor_xy, gaps[i]);
            }
        }
        this.content_height_ = cursor_xy[1];
    };
    /**
     * Button 和 Label 需要在创建dom（在init_flyout_button方法中被调用）后，
     * *才能拿到正确宽高*。
     * 因此除了line（动态定宽）以外，都需要在该函数中init，如果需要根据flyout width
     * 定位置，则注册 excute_after_next_reflow 函数
     */
    VerticalFlyout.prototype.button_layout = function (button, cursor_xy, gap) {
        var _this = this;
        var _a;
        // 记录当前位置，reflow时使用
        var current_x = cursor_xy[0];
        var current_y = cursor_xy[1];
        var is_in_normal_flow = button.position !== 'absolute' && button.position !== 'fixed';
        var is_changed_align = button.align === 'center' || button.align === 'right';
        /**
         * 根据position/align等属性计算当前button所需要放置的位置，
         * 可在layout或reflow时被调用。该方法无副作用。
         */
        var compute_absolute_xy = function (flyout_width) {
            if (is_in_normal_flow && !is_changed_align) {
                return { x: current_x, y: current_y };
            }
            if (typeof flyout_width !== 'number') {
                console.warn("Position of button " + button + " should be computed when reflow. ");
                return { x: current_x, y: current_y };
            }
            var x = 0;
            var width_in_svg = flyout_width / _this.workspace_.get_scale();
            if (button.left !== undefined) {
                x = button.left;
            }
            else if (button.right !== undefined) {
                x = width_in_svg - button.right - button.width;
            }
            else if (button.align === 'center') {
                x = (width_in_svg - button.width) / 2;
            }
            else if (button.align === 'right') {
                x = width_in_svg - _this.padding_right - button.margin_right - button.width;
            }
            if (is_in_normal_flow) {
                return { x: x, y: current_y };
            }
            var y = 0;
            if (button.top !== undefined) {
                y = button.top;
            }
            else if (button.bottom !== undefined) {
                var height_in_svg = button.position === 'fixed' ? _this.height_ / _this.workspace_.get_scale() : _this.content_height_;
                y = height_in_svg - button.bottom - button.height;
            }
            return { x: x, y: y };
        };
        // 以百分比定义宽度的按钮，完全独立于其他定位的特殊处理，
        // 在取得了最终的width后进行reflow时才创建
        if (button.width_ratio) {
            this.excute_after_next_reflow.push(function (flyout_width) {
                var _a;
                var width_in_svg = flyout_width / _this.workspace_.get_scale();
                var _b = compute_absolute_xy(flyout_width), x = _b.x, y = _b.y;
                var fixed_btn_svg = _this.init_flyout_button(button, x, y, width_in_svg * (button.width_ratio || 1));
                if (button.position === 'fixed') {
                    (_a = _this.svg_group) === null || _a === void 0 ? void 0 : _a.appendChild(fixed_btn_svg);
                }
            });
            if (is_in_normal_flow) {
                cursor_xy[1] += button.height + gap;
            }
            return;
        }
        // absolute or fixed定位，脱离cursor限制
        if (!is_in_normal_flow) {
            var btn_svg = this.init_flyout_button(button);
            this.excute_after_next_reflow.push(function (flyout_width) {
                var _a = compute_absolute_xy(flyout_width), x = _a.x, y = _a.y;
                button.move_to(x, y);
            });
            if (button.position === 'fixed') {
                (_a = this.svg_group) === null || _a === void 0 ? void 0 : _a.appendChild(btn_svg);
            }
            return;
        }
        var place_inline_button = function () {
            // 当前为第一个行内元素时，初始化一个按钮行
            if (!_this.current_item_line) {
                _this.current_item_line = {
                    offset_left: current_x,
                    offset_right: _this.padding_right,
                    height: button.height,
                };
            }
            if (button.align === 'center') {
                _this.init_flyout_button(button);
                _this.excute_after_next_reflow.push(function (flyout_width) {
                    var width_in_svg = flyout_width / _this.workspace_.get_scale();
                    button.move_to((width_in_svg - button.width) / 2, current_y);
                });
            }
            else if (button.align === 'right') {
                _this.init_flyout_button(button);
                var absolute_right_1 = _this.current_item_line.offset_right;
                var total_width_1 = button.width + button.margin_right;
                _this.excute_after_next_reflow.push(function (flyout_width) {
                    var width_in_svg = flyout_width / _this.workspace_.get_scale();
                    button.move_to(width_in_svg - absolute_right_1 - total_width_1, current_y);
                });
                _this.current_item_line.offset_right += total_width_1;
            }
            else {
                _this.init_flyout_button(button, _this.current_item_line.offset_left, current_y);
                _this.current_item_line.offset_left += button.width + button.margin_right;
            }
            // 更新行高
            _this.current_item_line.height = Math.max(_this.current_item_line.height, button.height);
            // 同一行中最后一个button，将cursor移到下一行，重置offset
            if (!button.inline) {
                cursor_xy[1] += _this.current_item_line.height + gap;
                _this.current_item_line = undefined;
            }
        };
        // inline button的处理：
        // 若同一行中需要三个button，需要前两个inline为true，最后一个无inline属性
        if (button.inline || this.current_item_line) {
            place_inline_button();
            return;
        }
        // 普通的不脱离文档流的按钮
        if (button.align === 'center' || button.align === 'right') {
            this.init_flyout_button(button);
            this.excute_after_next_reflow.push(function (flyout_width) {
                var _a = compute_absolute_xy(flyout_width), x = _a.x, y = _a.y;
                button.move_to(x, y);
            });
        }
        else {
            this.init_flyout_button(button, current_x, current_y);
        }
        cursor_xy[1] += button.height + gap;
    };
    /**
     * Compute width of flyout.  Position button under each block.
     * For RTL: Lay out the blocks right-aligned.
     * @param blocks The blocks to reflow.
     */
    VerticalFlyout.prototype.reflow_internal = function (blocks) {
        var _this = this;
        if (!this.workspace_ || !this.targetWorkspace_) {
            console.error('Workspace has not been init.');
            return;
        }
        var _a = this.targetWorkspace_.options.flyout, max_width = _a.max_width, min_width = _a.min_width;
        var flyout_width = min_width || 0;
        if (typeof this.fixed_width === 'number') {
            flyout_width = this.fixed_width;
        }
        else {
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                var width = block.width;
                if (block.is_starting_block()) {
                    // 头积木偏移后，在flyout中占用的宽度有所变化
                    width += this.targetWorkspace_.options.flyout.blocks.head_block_offset[0];
                }
                flyout_width = Math.max(flyout_width, width);
            }
            for (var i = 0; i < this.buttons_.length; i++) {
                var button = this.buttons_[i];
                if (button.position === 'fixed') {
                    break;
                }
                flyout_width = Math.max(flyout_width, button.width);
            }
            var scale = this.workspace_.get_scale();
            flyout_width += this.padding_left + this.padding_right;
            flyout_width *= scale;
            if (max_width) {
                flyout_width = Math.min(flyout_width, max_width);
            }
        }
        // Record the width for .get_metrics and .position.
        this.width_ = flyout_width;
        this.excute_after_next_reflow.forEach(function (fn) { return fn(_this.width_); });
        this.excute_after_next_reflow = [];
    };
    VerticalFlyout.prototype.is_drag_toward_workspace = function (current_drag_delta_xy) {
        var dx = current_drag_delta_xy[0];
        var dy = current_drag_delta_xy[1];
        // Direction goes from -180 to 180, with 0 toward the right and 90 on top.
        var drag_direction = Math.atan2(dy, dx) / Math.PI * 180;
        var range = this.drag_angle_range_;
        // Codemao: drag the block out of flyout from both left and right
        if (drag_direction < range && drag_direction > -range) {
            // drag from left to right.
            return true;
        }
        if (drag_direction < -180 + range || drag_direction > 180 - range) {
            // drag from right to left.
            return true;
        }
        return false;
    };
    VerticalFlyout.prototype.place_new_block = function (origin_block, mouse_xy) {
        if (!this.targetWorkspace_)
            throw new Error('Trying to place block before setting target workspace. ');
        var svg_root_old = origin_block.get_svg_root();
        if (!svg_root_old) {
            throw ReferenceError('Origin block should have root svg.');
        }
        // Figure out where the original block is on the screen, relative to the upper
        // left corner of the main workspace.
        var xy_old = this.utils.get_injection_div_xy(svg_root_old);
        // Create the new block by cloning the block in the flyout (via XML).
        var xml = this.xml.block_to_dom(origin_block);
        var block = this.xml.dom_to_block(xml, this.targetWorkspace_);
        var svg_root_new = block.get_svg_root();
        if (svg_root_new == undefined) {
            throw new ReferenceError('Block should have svg root.');
        }
        // Figure out where the new block got placed on the screen,
        // relative to the upper left corner of the workspace.
        // This may not be the same as the original block because the flyout's origin may not be the same as the main workspace's origin.
        var xy_new = this.utils.get_injection_div_xy(svg_root_new);
        // Move the new block to where the old block is.
        // Get the position before scale
        gl_matrix_1.vec2.sub(xy_new, xy_old, xy_new);
        var target_scale = this.targetWorkspace_.get_scale();
        if (this.workspace_.get_scale() !== target_scale && mouse_xy) {
            var mouse_xy_offset_of_origin_block = gl_matrix_1.vec2.sub(mouse_xy, mouse_xy, (0, dom_1.get_page_offset)(origin_block.get_svg_root()));
            // Simple math, you will know when you draw it in a piece of paper.
            gl_matrix_1.vec2.scale(mouse_xy_offset_of_origin_block, mouse_xy_offset_of_origin_block, this.workspace_.get_scale() - target_scale);
            gl_matrix_1.vec2.add(xy_new, xy_new, mouse_xy_offset_of_origin_block);
        }
        gl_matrix_1.vec2.scale(xy_new, xy_new, 1 / target_scale);
        block.move_by(xy_new);
        return block;
    };
    /**
     * Scroll the flyout.
     * @param e Mouse wheel scroll event.
     */
    VerticalFlyout.prototype.wheel_ = function (e) {
        if (!this.is_visible()) {
            return;
        }
        // Don't scroll the page.
        e.preventDefault();
        // Don't propagate mousewheel event (zooming).
        e.stopPropagation();
        var delta = e.deltaY;
        if (!delta || !this.scrollbar_) {
            return;
        }
        var metrics = this.get_metrics();
        if (!metrics) {
            console.error('Cannot get metrics for wheel.');
            return;
        }
        var pos = metrics.viewTop + delta;
        this.scrollbar_.set(pos);
    };
    /**
     * Sets the translation of the flyout to match the scrollbars.
     * @param xy_pos The exact xy position to translate to.
     */
    VerticalFlyout.prototype.set_metrics = function (xy_pos) {
        if (this.workspace_ == undefined) {
            console.error('Workspace not init.');
            return;
        }
        var metrics = this.get_metrics();
        // This is a fix to an apparent race condition.
        if (!metrics) {
            return;
        }
        if ((0, base_1.is_number)(xy_pos.y)) {
            this.workspace_.content_offset_by_view[1] = xy_pos.y;
            this.workspace_.scroll_xy[1] = -metrics.contentTop - xy_pos.y;
        }
        var x = this.workspace_.scroll_xy[0];
        var y = this.workspace_.scroll_xy[1];
        this.workspace_.translate(x, y);
    };
    VerticalFlyout.prototype.get_client_rect = function () {
        if (!this.svg_group) {
            return undefined;
        }
        var flyout_rect = this.svg_group.getBoundingClientRect();
        // BIG_NUM is offscreen padding so that blocks dragged beyond the shown flyout
        // area are still deleted.  Must be larger than the largest screen size,
        // but be smaller than half Number.MAX_SAFE_INTEGER (not available on IE).
        var margin = this.workspace_.get_options().delete_area_margin;
        var x = flyout_rect.left;
        var y = flyout_rect.top;
        var width = flyout_rect.width;
        var height = flyout_rect.height;
        return new maths_1.Rect(x - margin[3], y - margin[0], width + margin[1] + margin[3], height + margin[0] + margin[2]);
    };
    VerticalFlyout.prototype.reset_size = function () {
        this.width_ = 0;
    };
    VerticalFlyout.prototype.position = function () {
        if (this.targetWorkspace_ == undefined) {
            console.error('Trying to position flyout before setting target workspace. ');
            return;
        }
        if (!this.svg_background_ || !this.svg_group) {
            console.error('Trying to position flyout before initialization. ');
            return;
        }
        var target_workspace_metrics = this.targetWorkspace_.get_metrics();
        if (!target_workspace_metrics) {
            // Hidden components will return undefined.
            return;
        }
        // Record the height for Blockly.Flyout.get_metrics
        this.height_ = target_workspace_metrics.viewHeight;
        if (this.is_visible()) { // Show the flyuot.
            // 更新背景
            var background_path = this.compute_background_path(this.width_, this.height_);
            this.svg_background_.setAttribute('d', background_path);
        }
        else {
            this.svg_group.style.overflow = 'hidden';
        }
        // 计算Workspace的 左上角 位置
        var y = target_workspace_metrics.absoluteTop;
        var x = target_workspace_metrics.absoluteLeft;
        if (this.toolboxPosition_ === interfaces_1.TOOLBOX_POSITION.RIGHT) {
            x += target_workspace_metrics.viewWidth;
            if (this.is_auto_close() && this.is_visible()) {
                x -= this.width_;
            }
            // When toolbox position is right, the number with decimal point
            // will let flyout translateX a smaller distance, which leads to
            // a 1px gap between flyout and toolbox.
            x = Math.round(x + 1);
        }
        if (this.toolboxPosition_ === interfaces_1.TOOLBOX_POSITION.LEFT) {
            if (!this.is_auto_close() || !this.is_visible()) {
                x -= this.width_;
            }
            // 保证溢出部分被隐藏
            x = Math.round(x - 1);
        }
        this.position_at(this.width_, this.height_, x, y);
    };
    VerticalFlyout.prototype.compute_background_path = function (total_width, total_hight) {
        var atRight = this.toolboxPosition_ === interfaces_1.TOOLBOX_POSITION.RIGHT;
        var width = total_width - this.flyout_corner_radius;
        var height = total_hight - 2 * this.flyout_corner_radius;
        // Decide whether to start on the left or right.
        var path = ["M " + (atRight ? total_width : 0) + ",0"];
        // Top.
        path.push('h', atRight ? "" + -width : "" + width);
        // Rounded corner.
        path.push('a', "" + this.flyout_corner_radius, "" + this.flyout_corner_radius, '0', '0', atRight ? '0' : '1', atRight ? "" + (-this.flyout_corner_radius) : "" + this.flyout_corner_radius, "" + this.flyout_corner_radius);
        // Side closest to workspace.
        path.push('v', "" + Math.max(0, height));
        // Rounded corner.
        path.push('a', "" + this.flyout_corner_radius, "" + this.flyout_corner_radius, '0', '0', atRight ? '0' : '1', atRight ? "" + this.flyout_corner_radius : "" + (-this.flyout_corner_radius), "" + this.flyout_corner_radius);
        // Bottom.
        path.push('h', atRight ? "" + width : "" + -width);
        path.push('z');
        return path.join(' ');
    };
    VerticalFlyout = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], VerticalFlyout);
    return VerticalFlyout;
}(flyout_base_1.Flyout));
exports.VerticalFlyout = VerticalFlyout;
