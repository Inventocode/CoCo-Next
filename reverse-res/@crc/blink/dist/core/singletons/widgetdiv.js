"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetDiv = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../utils/dom");
var style_1 = require("../utils/style");
var WidgetDiv = /** @class */ (function () {
    function WidgetDiv() {
        /**
         * Optional cleanup function set by whichever object uses the widget.
         */
        this.dispose_ = undefined;
    }
    /**
     * Create the widget div and inject it onto the page.
     */
    WidgetDiv.prototype.create_dom = function () {
        if (this.DIV != undefined) {
            return; // Already created.
        }
        // Create an HTML container for popup overlays (e.g. editor widgets).
        this.DIV = (0, dom_1.create_dom)('div', "blocklyWidgetDiv" /* WIDGET_DIV */);
        document.body.appendChild(this.DIV);
    };
    WidgetDiv.prototype.show = function (new_owner, dispose) {
        this.hide();
        this.owner_ = new_owner;
        this.dispose_ = dispose;
        // Temporarily move the widget to the top of the screen so that it does not
        // cause a scrollbar jump in Firefox when displayed.
        if (this.DIV == undefined) {
            // console.warn('Trying to show an undefined widget div.');
            return;
        }
        var xy = (0, style_1.get_viewport_page_offset)(document);
        this.DIV.style.top = xy[1] + "px";
        this.DIV.style.direction = 'ltr';
        this.DIV.style.display = 'block';
    };
    WidgetDiv.prototype.hide = function () {
        if (!this.is_visible()) {
            return;
        }
        this.owner_ = undefined;
        this.dispose_ && this.dispose_();
        this.dispose_ = undefined;
        this.hide_and_clear_dom();
    };
    /**
     * Hide all DOM for the WidgetDiv, and clear its children.
     */
    WidgetDiv.prototype.hide_and_clear_dom = function () {
        if (this.DIV == undefined) {
            // console.warn('Trying to hide an undefined widget div.');
            return;
        }
        this.DIV.setAttribute('style', 'display: none;');
        (0, dom_1.remove_children)(this.DIV);
    };
    WidgetDiv.prototype.is_visible = function () {
        return !!this.owner_;
    };
    WidgetDiv.prototype.hide_if_owner = function (old_owner) {
        if (this.owner_ == old_owner) {
            this.hide();
        }
    };
    WidgetDiv.prototype.position = function (anchor_X, anchor_y, window_size, scroll_offset, rtl) {
        scroll_offset = scroll_offset || (0, style_1.get_viewport_page_offset)(document);
        // Don't let the widget go above the top edge of the window.
        if (anchor_y < scroll_offset[1]) {
            anchor_y = scroll_offset[1];
        }
        if (rtl) {
            window_size = window_size || (0, dom_1.get_viewport_size)();
            // Don't let the widget go right of the right edge of the window.
            if (anchor_X > window_size.width + scroll_offset[0]) {
                anchor_X = window_size.width + scroll_offset[0];
            }
        }
        else {
            // Don't let the widget go left of the left edge of the window.
            if (anchor_X < scroll_offset[0]) {
                anchor_X = scroll_offset[0];
            }
        }
        if (this.DIV != undefined) {
            this.DIV.style.left = anchor_X + "px";
            this.DIV.style.top = anchor_y + "px";
            this.DIV.style.height = '0px';
            // Kitten 这边监听了 'focusout' 事件实现下拉菜单失去焦点后隐藏
            // 同理如果想调试下拉菜单的样式，只需要把 'focusout' 事件禁用掉即可
            this.DIV.setAttribute('tabindex', '-1');
            this.DIV.style.outline = 'none';
            this.DIV.focus();
        }
    };
    WidgetDiv.prototype.position_with_anchor = function (viewport_bbox, anchor_bbox, widget_size, rtl) {
        var y = this.calculate_y(viewport_bbox, anchor_bbox, widget_size);
        var x = this.calculate_x(viewport_bbox, anchor_bbox, widget_size, rtl);
        this.position_internal(x, y, widget_size.height);
    };
    /**
     * Calculate a y position (in window coordinates) such that the widget will not
     * be offscreen on the top or bottom.
     *
     * @param viewport_bbox The bounding rectangle of the current viewport,
     * in window coordinates.
     * @param anchor_bbox The bounding rectangle of the anchor, in window
     * coordinates.
     * @param widget_size The dimensions of the widget inside the
     * widget div.
     * @returns A valid y-coordinate for the top left corner of the widget
     * div, in window coordinates.
     */
    WidgetDiv.prototype.calculate_y = function (viewport_bbox, anchor_bbox, widget_size) {
        // Flip the widget vertically if off the bottom.
        if (anchor_bbox.bottom + widget_size.height >= viewport_bbox.bottom) {
            // The bottom of the widget is at the top of the field.
            return anchor_bbox.top - widget_size.height;
            // The widget could go off the top of the window, but it would also go off
            // the bottom.  The window is just too small.
        }
        else {
            // The top of the widget is at the bottom of the field.
            return anchor_bbox.bottom;
        }
    };
    /**
     * Calculate an x position (in window coordinates) such that the widget will not
     * be offscreen on the right or left.
     *
     * @param viewport_bbox The bounding rectangle of the current viewport,
     * in window coordinates.
     * @param anchor_bbox The bounding rectangle of the anchor, in window
     * coordinates.
     * @param widget_size The dimensions of the widget inside the
     * widget div.
     * @param rtl Whether the Blockly workspace is in RTL mode.
     * @returns A valid x-coordinate for the top left corner of the widget
     * div, in window coordinates.
     */
    WidgetDiv.prototype.calculate_x = function (viewport_bbox, anchor_bbox, widget_size, rtl) {
        if (rtl) {
            // Try to align the right side of the field and the right side of the widget.
            var widgetLeft = anchor_bbox.right - widget_size.width;
            // Don't go offscreen left.
            var x = Math.max(widgetLeft, viewport_bbox.left);
            // But really don't go offscreen right:
            return Math.min(x, viewport_bbox.right - widget_size.width);
        }
        else {
            // Try to align the left side of the field and the left side of the widget.
            // Don't go offscreen right.
            var x = Math.min(anchor_bbox.left, viewport_bbox.right - widget_size.width);
            // But left is more important, because that's where the text is.
            return Math.max(x, viewport_bbox.left);
        }
    };
    /**
     * Set the widget div's position and height.  This function does nothing clever:
     * it will not ensure that your widget div ends up in the visible window.
     *
     * @private
     * @param x Horizontal location (window coordinates, not body).
     * @param y Horizontal location (window coordinates, not body).
     * @param height The height of the widget div (pixels).
     */
    WidgetDiv.prototype.position_internal = function (x, y, height) {
        if (this.DIV != undefined) {
            this.DIV.style.left = x + "px";
            this.DIV.style.top = y + "px";
            this.DIV.style.height = height + "px";
        }
    };
    WidgetDiv = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], WidgetDiv);
    return WidgetDiv;
}());
exports.WidgetDiv = WidgetDiv;
