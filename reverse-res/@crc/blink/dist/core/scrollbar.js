"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollbarPair = exports.Scrollbar = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("./di");
var interfaces_1 = require("./interfaces");
var dom_1 = require("./utils/dom");
var Scrollbar = /** @class */ (function () {
    /**
     * Creates an instance of Scrollbar.
     * Class for a pure SVG scrollbar.
     * This technique offers a scrollbar that is guaranteed to work, but may not
     * look or behave like the system's scrollbars.
     *
     * @param workspace to bind the scrollbar to.
     * @param horizontal True if horizontal, false if vertical.
     * @param opt_pair True if scrollbar is part of a horiz/vert pair.
     * @param opt_class A class to be applied to this scrollbar.
     */
    function Scrollbar(workspace, horizontal, opt_pair, opt_class, visible) {
        if (opt_pair === void 0) { opt_pair = false; }
        if (opt_class === void 0) { opt_class = ''; }
        if (visible === void 0) { visible = true; }
        this.origin_ = gl_matrix_1.vec2.create();
        /**
         * Ratio of view size / content size
         */
        this.size_ratio_ = 0;
        this.start_drag_handle = 0;
        /**
         * The offset of the start of the handle from the start of the scrollbar range.
         * Coordinate system: pixel coordinates.
         */
        this.handle_position_ = 0;
        this.start_drag_mouse = 0;
        /**
         * The length of the scrollbar handle.
         * Coordinate system: pixel coordinates.
         */
        this.handle_length_ = 0;
        /**
         * The size of the area within which the scrollbar handle can move.
         * Coordinate system: pixel coordinates.
         */
        this.scroll_view_size_ = 0;
        /**
         * 移动scrollbar handle后可展示的内容区域大小。
         * Coordinate system: pixel coordinates.
         */
        this.scroll_content_size_ = 0;
        /**
         * Whether the workspace containing this scrollbar is visible.
         * 在flyout中时，即flyout自身是否可见
         */
        this.container_visible_ = true;
        /**
         * Whether the scrollbar handle is visible.
         * 响应式设定scrollbar是否可见，用于在页面尺寸改变到一定值时显示
         */
        this.is_visible_ = true;
        this.workspace_ = workspace;
        this.pair_ = opt_pair || false;
        this.horizontal_ = horizontal;
        this.old_host_metrics_ = undefined;
        /* Create the following DOM:
        <svg class="blocklyScrollbarHorizontal optionalClass">
          <g>
            <rect class="blocklyScrollbarBackground" />
            <rect class="blocklyScrollbarHandle" rx="8" ry="8" />
          </g>
        </svg>
        */
        var className = "blocklyScrollbar" + (this.horizontal_ ? 'Horizontal' : 'Vertical');
        if (opt_class) {
            className += " " + opt_class;
        }
        this.outer_svg_ = (0, dom_1.create_svg_element)('svg', { 'class': className });
        this.svg_group = (0, dom_1.create_svg_element)('g', {}, this.outer_svg_);
        this.svg_background_ = (0, dom_1.create_svg_element)('rect', { 'class': 'blocklyScrollbarBackground' }, this.svg_group);
        var radius = Math.floor((Scrollbar_1.scrollbar_thickness - 5) / 2);
        this.svg_handle_ = (0, dom_1.create_svg_element)('rect', { 'class': 'blocklyScrollbarHandle', 'rx': radius, 'ry': radius }, this.svg_group);
        if (horizontal) {
            this.svg_background_.setAttribute('height', Scrollbar_1.scrollbar_thickness.toString());
            this.outer_svg_.setAttribute('height', Scrollbar_1.scrollbar_thickness.toString());
            this.svg_handle_.setAttribute('height', 
            // Codemao: UI
            (Scrollbar_1.scrollbar_thickness - 9).toString());
            this.svg_handle_.setAttribute('y', '5');
            this.length_attribute_ = 'width';
            this.position_attribute_ = 'x';
        }
        else {
            this.svg_background_.setAttribute('width', Scrollbar_1.scrollbar_thickness.toString());
            this.outer_svg_.setAttribute('width', Scrollbar_1.scrollbar_thickness.toString());
            this.svg_handle_.setAttribute('width', (Scrollbar_1.scrollbar_thickness - 9).toString());
            this.svg_handle_.setAttribute('x', '5');
            this.length_attribute_ = 'height';
            this.position_attribute_ = 'y';
        }
        (0, dom_1.insert_after)(this.outer_svg_, this.workspace_.get_parent_svg());
        this.on_mouse_down_bar_wrapper_ = this.events.bind_event_with_checks(this.svg_background_, 'mousedown', this, this.on_mouse_down_bar);
        this.on_mouse_down_handle_wrapper_ = this.events.bind_event_with_checks(this.svg_handle_, 'mousedown', this, this.on_mousedown_handle);
        this.position_ = gl_matrix_1.vec2.fromValues(0, 0);
        this.opt_visible = visible;
        if (!visible) {
            this.update_display();
        }
    }
    Scrollbar_1 = Scrollbar;
    /**
     * Recalculate a scrollbar's location on the screen and path length.
     * This should be called when the layout or size of the window has changed.
     *
     * @param host_metrics A data structure describing all the required dimensions,
     * possibly fetched from the host object.
     */
    Scrollbar.prototype.resize_view = function (host_metrics) {
        var view_size = this.horizontal_ ?
            host_metrics.viewWidth - 1 :
            host_metrics.viewHeight - 1;
        if (this.pair_) {
            // Shorten the scrollbar to make room for the corner square.
            view_size -= Scrollbar_1.scrollbar_thickness;
        }
        this.set_scroll_view_size(Math.max(0, view_size));
        var x_coordinate = host_metrics.absoluteLeft + 0.5;
        var y_coordinate = host_metrics.absoluteTop + 0.5;
        if (!this.horizontal_) {
            x_coordinate += host_metrics.viewWidth - Scrollbar_1.scrollbar_thickness - 1;
        }
        else {
            y_coordinate += host_metrics.viewHeight - Scrollbar_1.scrollbar_thickness - 1;
        }
        this.set_position(x_coordinate, y_coordinate);
        // If the view has been resized, a content resize will also be necessary.
        // The reverse is not true.
        this.resize_content(host_metrics);
    };
    /**
     * Recalculate handle's length and location within its path.
     * This should be called when the contents of the workspace have changed.
     *
     * @param host_metrics A data structure describing all the
     * required dimensions, possibly fetched from the host object.
     */
    Scrollbar.prototype.resize_content = function (host_metrics) {
        var _a;
        this.scroll_content_size_ =
            this.horizontal_ ? host_metrics.contentWidth : host_metrics.contentHeight;
        if (!this.pair_) {
            // Only show the scrollbar if needed.
            // Ideally this would also apply to scrollbar pairs, but that's a bigger
            // headache (due to interactions with the corner square).
            this.set_visible(this.scroll_view_size_ < this.scroll_content_size_);
        }
        this.size_ratio_ = this.scroll_view_size_ / this.scroll_content_size_;
        if (this.size_ratio_ == -Infinity || this.size_ratio_ == Infinity ||
            isNaN(this.size_ratio_)) {
            this.size_ratio_ = 0;
        }
        var handle_length = this.scroll_view_size_ * this.size_ratio_;
        this.set_handle_length(Math.max(0, handle_length));
        var xy_pos = {};
        if (this.horizontal_) {
            xy_pos.x = this.constrain_target_pos(host_metrics.viewLeft - host_metrics.contentLeft);
            this.set_handle_position(xy_pos.x * this.size_ratio_);
        }
        else {
            xy_pos.y = this.constrain_target_pos(host_metrics.viewTop - host_metrics.contentTop);
            this.set_handle_position(xy_pos.y * this.size_ratio_);
        }
        (_a = this.workspace_) === null || _a === void 0 ? void 0 : _a.set_metrics(xy_pos);
    };
    /**
     * Set the length of the scrollbar's handle and change the SVG attribute
     * accordingly.
     *
     * @protected
     * @param new_length The new scrollbar handle length.
     */
    Scrollbar.prototype.set_handle_length = function (new_length) {
        var _a;
        this.handle_length_ = new_length;
        (_a = this.svg_handle_) === null || _a === void 0 ? void 0 : _a.setAttribute(this.length_attribute_, String(this.handle_length_));
    };
    /**
     * Set whether the scrollbar is visible.
     * Only applies to non-paired scrollbars.
     *
     * @param visible True if visible.
     */
    Scrollbar.prototype.set_visible = function (visible) {
        var visibilityChanged = (visible != this.is_visible());
        // Ideally this would also apply to scrollbar pairs, but that's a bigger
        // headache (due to interactions with the corner square).
        if (this.pair_) {
            throw new Error('Unable to toggle visibility of paired scrollbars.');
        }
        this.is_visible_ = visible;
        if (visibilityChanged) {
            this.update_display();
        }
    };
    /**
     * Set the position of the scrollbar's svg group.
     *
     * @param x The new x coordinate.
     * @param y The new y coordinate.
     */
    Scrollbar.prototype.set_position = function (x, y) {
        if (!this.outer_svg_) {
            return;
        }
        this.position_[0] = x;
        this.position_[1] = y;
        var tempX = this.position_[0] + this.origin_[0];
        var tempY = this.position_[1] + this.origin_[1];
        var transform = "translate(" + tempX + "px, " + tempY + "px)";
        (0, dom_1.set_css_transform)(this.outer_svg_, transform);
    };
    /**
     * Set the size of the scrollbar's background and change the SVG attribute
     * accordingly.
     *
     * @param new_size The new scrollbar background length.
     */
    Scrollbar.prototype.set_scroll_view_size = function (new_size) {
        var _a, _b;
        this.scroll_view_size_ = new_size;
        (_a = this.outer_svg_) === null || _a === void 0 ? void 0 : _a.setAttribute(this.length_attribute_, String(this.scroll_view_size_));
        (_b = this.svg_background_) === null || _b === void 0 ? void 0 : _b.setAttribute(this.length_attribute_, String(this.scroll_view_size_));
    };
    /**
     * Dispose of this scrollbar.
     * Unlink from all DOM elements to prevent memory leaks.
     */
    Scrollbar.prototype.dispose = function () {
        this.clean_up();
        if (this.on_mouse_down_bar_wrapper_) {
            this.events.unbind_event(this.on_mouse_down_bar_wrapper_);
            this.on_mouse_down_bar_wrapper_ = undefined;
        }
        if (this.on_mouse_down_handle_wrapper_) {
            this.events.unbind_event(this.on_mouse_down_handle_wrapper_);
            this.on_mouse_down_handle_wrapper_ = undefined;
        }
        this.outer_svg_ && (0, dom_1.remove_node)(this.outer_svg_);
        delete this.outer_svg_;
        delete this.svg_group;
        delete this.svg_background_;
        delete this.svg_handle_;
        delete this.workspace_;
    };
    /**
     * Check whether the two sets of metrics are equivalent.
     *
     * @private
     * @param first An object containing computed measurements of a workspace.
     * @param second Another object containing computed measurements of a
     *    workspace.
     * @returns Whether the two sets of metrics are equivalent.
     */
    Scrollbar.prototype.metrics_are_equivalent = function (first, second) {
        if (!(first && second)) {
            return false;
        }
        if (first.viewWidth != second.viewWidth ||
            first.viewHeight != second.viewHeight ||
            first.viewLeft != second.viewLeft ||
            first.viewTop != second.viewTop ||
            first.absoluteTop != second.absoluteTop ||
            first.absoluteLeft != second.absoluteLeft ||
            first.contentWidth != second.contentWidth ||
            first.contentHeight != second.contentHeight ||
            first.contentLeft != second.contentLeft ||
            first.contentTop != second.contentTop) {
            return false;
        }
        return true;
    };
    /**
     * Set the origin of the upper left of the scrollbar. This is for times
     * when the scrollbar is used in an object whose origin isn't the same
     * as the main workspace (e.g. in a flyout.)
     *
     * @param x The x coordinate of the scrollbar's origin.
     * @param y The y coordinate of the scrollbar's origin.
     */
    Scrollbar.prototype.set_origin = function (dxy) {
        this.origin_ = dxy;
    };
    /**
     * Is the scrollbar visible.  Non-paired scrollbars disappear when they aren't
     * needed.
     *
     * @returns True if visible.
     */
    Scrollbar.prototype.is_visible = function () {
        return this.is_visible_;
    };
    /**
     * Set whether the scrollbar's container is visible and update
     * display accordingly if visibility has changed.
     *
     * @param visible Whether the container is visible
     */
    Scrollbar.prototype.set_container_visible = function (visible) {
        var visibilityChanged = (visible != this.container_visible_);
        this.container_visible_ = visible;
        if (visibilityChanged) {
            this.update_display();
        }
    };
    /**
     * Update visibility of scrollbar based on whether it thinks it should
     * be visible and whether its containing workspace is visible.
     * We cannot rely on the containing workspace being hidden to hide us
     * because it is not necessarily our parent in the dom.
     */
    Scrollbar.prototype.update_display = function () {
        if (this.outer_svg_ == undefined) {
            throw new Error('outerSvg_ is undefined');
        }
        if (this.opt_visible && this.is_visible() && this.container_visible_) {
            this.outer_svg_.setAttribute('display', 'block');
        }
        else {
            this.outer_svg_.setAttribute('display', 'none');
        }
    };
    /**
     * Drag the scrollbar's handle.
     *
     * @param e Mouse up event.
     */
    Scrollbar.prototype.on_mouse_move_handle = function (e) {
        var currentMouse = this.horizontal_ ? e.clientX : e.clientY;
        var mouseDelta = currentMouse - this.start_drag_mouse;
        var handlePosition = this.start_drag_handle + mouseDelta;
        // Position the bar.
        var new_pos = handlePosition / this.size_ratio_;
        this.set(new_pos);
    };
    /**
     * Release the scrollbar handle and reset state accordingly.
     */
    Scrollbar.prototype.on_mouse_up_handle = function () {
        var _a;
        // Tell the workspace to clean up now that the workspace is done moving.
        (_a = this.workspace_) === null || _a === void 0 ? void 0 : _a.reset_drag_surface();
        this.touch_manager.clear_touch_identifier();
        this.clean_up();
    };
    /**
     * Start a dragging operation.
     * Called when scrollbar handle is clicked.
     *
     * @param e Mouse down event.
     */
    Scrollbar.prototype.on_mousedown_handle = function (e) {
        var _a, _b;
        (_a = this.workspace_) === null || _a === void 0 ? void 0 : _a.mark_focused();
        this.clean_up();
        if (this.utils.is_right_button(e)) {
            // Right-click.
            // Scrollbars have no context menu.
            e.stopPropagation();
            return;
        }
        // Look up the current translation and record it.
        this.start_drag_handle = this.handle_position_;
        // Tell the workspace to setup its drag surface since it is about to move.
        // onMouseMoveHandle will call onScroll which actually tells the workspace
        // to move.
        (_b = this.workspace_) === null || _b === void 0 ? void 0 : _b.setup_drag_surface();
        // Record the current mouse position.
        this.start_drag_mouse = this.horizontal_ ? e.clientX : e.clientY;
        Scrollbar_1.on_mouse_up_wrapper_ = this.events.bind_event_with_checks(document, 'mouseup', this, this.on_mouse_up_handle);
        Scrollbar_1.on_mouse_move_wrapper_ = this.events.bind_event_with_checks(document, 'mousemove', this, this.on_mouse_move_handle);
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * Hide chaff and stop binding to mouseup and mousemove events.  Call this to
     * wrap up lose ends associated with the scrollbar.
     */
    Scrollbar.prototype.clean_up = function () {
        this.utils.hide_chaff(true);
        if (Scrollbar_1.on_mouse_up_wrapper_) {
            this.events.unbind_event(Scrollbar_1.on_mouse_up_wrapper_);
            Scrollbar_1.on_mouse_up_wrapper_ = undefined;
        }
        if (Scrollbar_1.on_mouse_move_wrapper_) {
            this.events.unbind_event(Scrollbar_1.on_mouse_move_wrapper_);
            Scrollbar_1.on_mouse_move_wrapper_ = undefined;
        }
    };
    /**
     * Scroll by one pageful.
     * Called when scrollbar background is clicked.
     *
     * @param e Mouse down event.
     */
    Scrollbar.prototype.on_mouse_down_bar = function (e) {
        if (!this.workspace_ || !this.svg_handle_) {
            throw new Error('this.workspace_ is undefined');
        }
        this.workspace_.mark_focused();
        this.touch_manager.clear_touch_identifier(); // This is really a click.
        this.clean_up();
        if (this.utils.is_right_button(e)) {
            // Right-click.
            // Scrollbars have no context menu.
            e.stopPropagation();
            return;
        }
        var mouseXY = this.utils.mouse_to_svg(e, this.workspace_.get_parent_svg(), this.workspace_.get_inverse_screen_ctm());
        var mouseLocation = this.horizontal_ ? mouseXY.x : mouseXY.y;
        var handleXY = this.utils.get_injection_div_xy(this.svg_handle_);
        var handleStart = this.horizontal_ ? handleXY[0] : handleXY[1];
        var handlePosition = this.handle_position_;
        var pageLength = this.handle_length_ * 0.95;
        if (mouseLocation <= handleStart) {
            // Decrease the scrollbar's value by a page.
            handlePosition -= pageLength;
        }
        else if (mouseLocation >= handleStart + this.handle_length_) {
            // Increase the scrollbar's value by a page.
            handlePosition += pageLength;
        }
        // Position the bar.
        var new_pos = handlePosition / this.size_ratio_;
        this.set(new_pos);
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * Set the offset of the scrollbar's handle and change the SVG attribute
     * accordingly.
     *
     * @param new_position The new scrollbar handle offset.
     */
    Scrollbar.prototype.set_handle_position = function (new_position) {
        if (!this.svg_handle_)
            return;
        this.handle_position_ = new_position;
        if (this.position_attribute_ == 'y') {
            (0, dom_1.set_css_transform)(this.svg_handle_, "translate3d(0px, " + this.handle_position_ + "px, 0px)");
        }
        else if (this.position_attribute_ == 'x') {
            (0, dom_1.set_css_transform)(this.svg_handle_, "translate3d(" + this.handle_position_ + "px, 0px, 0px)");
        }
    };
    /**
     * Constrain the handle's position within the minimum (0) and maximum
     * (length of scrollbar) values allowed for the scrollbar.
     *
     * @param new_pos Value that is potentially out of bounds.
     * @return Constrained value.
     */
    Scrollbar.prototype.constrain_target_pos = function (new_pos) {
        return Math.max(0, Math.min(new_pos, this.scroll_content_size_ - this.scroll_view_size_));
    };
    /**
     * 设置可滚动区域相对于可视区域的距离。
     * 改变滚动条的位置，并且移动workspace。
     *
     * @param value The distance from the top/left edge of the content to the view, in CSS pixels.
     * It may be larger than the maximum allowable position of the scrollbar handle.
     */
    Scrollbar.prototype.set = function (value) {
        if (!this.workspace_)
            return;
        /*
         * 用handle位置计算ratio再反向作用到ws的位置上会造成问题：
         * set之后，ws的scroll_xy会与被设置值有偏差
         * 因此，更改成先计算ws位置再设置handle的方式
         */
        var old_value = this.workspace_.content_offset_by_view[this.horizontal_ ? 0 : 1];
        // Constrain target position
        value = this.constrain_target_pos(value);
        if (value === old_value) {
            return;
        }
        this.set_handle_position(value * this.size_ratio_);
        var xy_pos = {};
        if (this.horizontal_) {
            xy_pos.x = value;
        }
        else {
            xy_pos.y = value;
        }
        this.workspace_.set_metrics(xy_pos);
        var event_key = this.horizontal_ ?
            interfaces_1.UIEventType.H_SCROLLBAR_SET : interfaces_1.UIEventType.V_SCROLLBAR_SET;
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: event_key,
                workspace_id: this.workspace_.id,
                old_value: old_value,
                new_value: value,
            }));
        }
    };
    /**
     * 设置积木区域相对于可视区域的偏移量。
     * 和set方法不同，本方法直接设置积木区域的显示位置，不考虑积木区域周围的边距。
     *
     * @param value 积木区域上/左边缘 相对于 可视区域上/左边缘的偏移量。
     */
    Scrollbar.prototype.set_block_offset_by_view = function (value) {
        if (!this.workspace_)
            return;
        var old_value = this.workspace_.content_offset_by_view[this.horizontal_ ? 0 : 1];
        var new_position = {};
        var metrics = this.workspace_.get_metrics();
        if (this.horizontal_) {
            value = this.constrain_target_pos(-metrics.contentLeft - value);
            new_position.x = value;
        }
        else {
            value = this.constrain_target_pos(-metrics.contentTop - value);
            new_position.y = value;
        }
        if (value === old_value) {
            return;
        }
        this.workspace_.set_metrics(new_position);
        // handle的位置依赖于content_offset_by_view
        // 先set scroll_xy，再set handle_position
        var content_offset_by_view = this.workspace_.content_offset_by_view;
        if (this.horizontal_) {
            this.set_handle_position(content_offset_by_view[0] * this.size_ratio_);
        }
        else {
            this.set_handle_position(content_offset_by_view[1] * this.size_ratio_);
        }
        var event_key = this.horizontal_ ?
            interfaces_1.UIEventType.H_SCROLLBAR_SET : interfaces_1.UIEventType.V_SCROLLBAR_SET;
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: event_key,
                workspace_id: this.workspace_.id,
                old_value: old_value,
                new_value: value,
            }));
        }
    };
    /**
     * Recalculate the scrollbar's location and its length.
     *
     * @param opt_metrics A data structure of from the describing all the
     * required dimensions.  If not provided, it will be fetched from the host
     * object.
     */
    Scrollbar.prototype.resize = function (opt_metrics) {
        if (!this.workspace_)
            return;
        // Determine the location, height and width of the host element.
        var host_metrics = opt_metrics || this.workspace_.get_metrics();
        if (!host_metrics || !host_metrics.viewWidth || !host_metrics.viewHeight) {
            // Host element is likely not visible.
            return;
        }
        if (this.old_host_metrics_ && this.metrics_are_equivalent(host_metrics, this.old_host_metrics_)) {
            return;
        }
        this.old_host_metrics_ = host_metrics;
        this.resize_view(host_metrics);
    };
    var Scrollbar_1;
    Scrollbar.scrollbar_thickness = 15;
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Scrollbar.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Scrollbar.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.touch_manager)
    ], Scrollbar.prototype, "touch_manager", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], Scrollbar.prototype, "ui_event_factory", void 0);
    Scrollbar = Scrollbar_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Scrollbar);
    return Scrollbar;
}());
exports.Scrollbar = Scrollbar;
var ScrollbarPair = /** @class */ (function () {
    /**
     * Creates an instance of ScrollbarPair.
     * Class for a pair of scrollbars.  Horizontal and vertical.
     *
     * @param workspace Workspace to bind the scrollbars to.
     */
    function ScrollbarPair(workspace, visible) {
        if (visible === void 0) { visible = true; }
        /**
         * Previously recorded metrics from the workspace.
         */
        this.old_host_metrics_ = undefined;
        this.workspace_ = workspace;
        this.h_scroll = new Scrollbar(workspace, true, true, 'blocklyMainWorkspaceScrollbar', visible);
        this.v_scroll = new Scrollbar(workspace, false, true, 'blocklyMainWorkspaceScrollbar', visible);
    }
    /**
     * Set whether this scrollbar's container is visible.
     *
     * @param visible Whether the container is visible.
     */
    ScrollbarPair.prototype.set_container_visible = function (visible) {
        var _a, _b;
        (_a = this.h_scroll) === null || _a === void 0 ? void 0 : _a.set_container_visible(visible);
        (_b = this.v_scroll) === null || _b === void 0 ? void 0 : _b.set_container_visible(visible);
    };
    /**
     * Dispose of this pair of scrollbars.
     * Unlink from all DOM elements to prevent memory leaks.
     */
    ScrollbarPair.prototype.dispose = function () {
        var _a, _b;
        delete this.workspace_;
        this.old_host_metrics_ = undefined;
        (_a = this.h_scroll) === null || _a === void 0 ? void 0 : _a.dispose();
        delete this.h_scroll;
        (_b = this.v_scroll) === null || _b === void 0 ? void 0 : _b.dispose();
        delete this.v_scroll;
    };
    /**
     * Recalculate both of the scrollbars' locations and lengths.
     * Also reposition the corner rectangle.
     */
    ScrollbarPair.prototype.resize = function () {
        var _a, _b;
        if (!this.workspace_)
            return;
        // Look up the host metrics once, and use for both scrollbars.
        var host_metrics = this.workspace_.get_metrics();
        if (!host_metrics) {
            // Host element is likely not visible.
            return;
        }
        // Only change the scrollbars if there has been a change in metrics.
        var resizeH = false;
        var resizeV = false;
        if (!this.old_host_metrics_ ||
            this.old_host_metrics_.viewWidth != host_metrics.viewWidth ||
            this.old_host_metrics_.viewHeight != host_metrics.viewHeight ||
            this.old_host_metrics_.absoluteTop != host_metrics.absoluteTop ||
            this.old_host_metrics_.absoluteLeft != host_metrics.absoluteLeft) {
            // The window has been resized or repositioned.
            resizeH = true;
            resizeV = true;
        }
        else {
            // Has the content been resized or moved?
            if (!this.old_host_metrics_ ||
                this.old_host_metrics_.contentWidth != host_metrics.contentWidth ||
                this.old_host_metrics_.viewLeft != host_metrics.viewLeft ||
                this.old_host_metrics_.contentLeft != host_metrics.contentLeft) {
                resizeH = true;
            }
            if (!this.old_host_metrics_ ||
                this.old_host_metrics_.contentHeight != host_metrics.contentHeight ||
                this.old_host_metrics_.viewTop != host_metrics.viewTop ||
                this.old_host_metrics_.contentTop != host_metrics.contentTop) {
                resizeV = true;
            }
        }
        if (resizeH) {
            (_a = this.h_scroll) === null || _a === void 0 ? void 0 : _a.resize(host_metrics);
        }
        if (resizeV) {
            (_b = this.v_scroll) === null || _b === void 0 ? void 0 : _b.resize(host_metrics);
        }
        // Cache the current metrics to potentially short-cut the next resize event.
        this.old_host_metrics_ = host_metrics;
    };
    /**
     * 改变滚动条的位置，并且移动workspace。
     * 该方法的输入值为滚动后，可视区域左上角 相对于 可滚动区域左上角 的距离。
     */
    ScrollbarPair.prototype.set = function (x, y) {
        if (!this.h_scroll || !this.v_scroll) {
            return;
        }
        if (!this.workspace_) {
            return;
        }
        var old_position = this.workspace_.content_offset_by_view;
        // This function is equivalent to:
        //   this.hScroll.set(x);
        //   this.vScroll.set(y);
        // However, that calls setMetrics twice which causes a chain of
        // getAttribute->setAttribute->getAttribute resulting in an extra layout pass.
        // Combining them speeds up rendering.
        var xy_pos = {
            x: this.h_scroll.constrain_target_pos(x),
            y: this.v_scroll.constrain_target_pos(y),
        };
        if (xy_pos.x === old_position[0] && xy_pos.y === old_position[1]) {
            return;
        }
        this.workspace_.set_metrics(xy_pos);
        this.h_scroll.set_handle_position(xy_pos.x * this.h_scroll.size_ratio_);
        this.v_scroll.set_handle_position(xy_pos.y * this.v_scroll.size_ratio_);
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.H_SCROLLBAR_SET,
                workspace_id: this.workspace_.id,
                old_value: old_position[0],
                new_value: xy_pos.x,
            }));
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.V_SCROLLBAR_SET,
                workspace_id: this.workspace_.id,
                old_value: old_position[1],
                new_value: xy_pos.y,
            }));
        }
    };
    /**
     * 设置 积木区域 相对于 可视区域 的偏移量。
     * 和set方法不同，本方法直接设置积木区域的显示位置，不考虑积木区域周围的边距。
     * 本方法可以用于把积木定位在视口的左上角、中央等位置。
     *
     * @param x 积木区域最左侧 相对于 可视区域最左侧 的偏移量。
     * @param y 积木区域最上侧 相对于 可视区域最上侧 的偏移量。
     */
    ScrollbarPair.prototype.set_block_offset_by_view = function (x, y) {
        if (!this.h_scroll || !this.v_scroll) {
            return;
        }
        if (!this.workspace_) {
            return;
        }
        var old_position = this.workspace_.content_offset_by_view;
        var metrics = this.workspace_.get_metrics();
        var new_position = {
            x: this.h_scroll.constrain_target_pos(-metrics.contentLeft - x),
            y: this.v_scroll.constrain_target_pos(-metrics.contentTop - y),
        };
        if (new_position.x === old_position[0] && new_position.y === old_position[1]) {
            return;
        }
        this.workspace_.set_metrics(new_position);
        this.h_scroll.set_handle_position(new_position.x * this.h_scroll.size_ratio_);
        this.v_scroll.set_handle_position(new_position.y * this.v_scroll.size_ratio_);
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.H_SCROLLBAR_SET,
                workspace_id: this.workspace_.id,
                old_value: old_position[0],
                new_value: new_position.x,
            }));
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.V_SCROLLBAR_SET,
                workspace_id: this.workspace_.id,
                old_value: old_position[1],
                new_value: new_position.y,
            }));
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], ScrollbarPair.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], ScrollbarPair.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], ScrollbarPair.prototype, "ui_event_factory", void 0);
    ScrollbarPair = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], ScrollbarPair);
    return ScrollbarPair;
}());
exports.ScrollbarPair = ScrollbarPair;
