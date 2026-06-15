"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var dom_1 = require("../utils/dom");
var base_1 = require("../utils/base");
var string_1 = require("../utils/string");
var Tooltip = /** @class */ (function () {
    function Tooltip() {
        /**
         * Whether a tooltip is currently showing.
         */
        this.visible = false;
        /**
         * Whether someone else is blocking the tooltip from being shown.
         */
        this.blocked_ = false;
        /**
         * Maximum width (in characters) of a tooltip.
         */
        this.LIMIT = 50;
        /**
         * PID of suspended thread to clear tooltip on mouse out.
         */
        this.mouse_out_pid_ = 0;
        /**
         * PID of suspended thread to show the tooltip.
         */
        this.show_pid_ = 0;
        /**
         * Last observed X location of the mouse pointer (freezes when tooltip appears).
         */
        this.last_x_ = 0;
        /**
         * Last observed Y location of the mouse pointer (freezes when tooltip appears).
         */
        this.last_y_ = 0;
        /**
         * Once a tooltip has opened for an element, that element is 'poisoned' and
         * cannot respawn a tooltip until the pointer moves over a different element.
         */
        this.poisoned_element_ = undefined;
        /**
         * Horizontal offset between mouse cursor and tooltip.
         */
        this.OFFSET_X = 0;
        /**
         * Vertical offset between mouse cursor and tooltip.
         */
        this.OFFSET_Y = 10;
        /**
         * Radius mouse can move before killing tooltip.
         */
        this.RADIUS_OK = 20;
        /**
         * Delay before tooltip appears.
         */
        this.HOVER_MS = 750;
        /**
         * Horizontal padding between tooltip and screen edge.
         */
        this.MARGINS = 5;
        /**
         * The HTML container.  Set once by this.create_dom.
         */
        this.DIV = undefined;
    }
    /**
     * Create the tooltip div and inject it onto the page.
     */
    Tooltip.prototype.create_dom = function () {
        if (this.DIV) {
            return this.DIV; // Already created.
        }
        // Create an HTML container for popup overlays (e.g. editor widgets).
        this.DIV = (0, dom_1.create_dom)('div', "blocklyTooltipDiv" /* TOOLTIP_DIV */);
        document.body.appendChild(this.DIV);
        return this.DIV;
    };
    /**
     * Binds the required mouse events onto an SVG element.
     *
     * @param element SVG element onto which tooltip is to be bound.
     */
    Tooltip.prototype.bind_mouse_event = function (element) {
        this.events.bind_event(element, 'mouseover', undefined, this.on_mouse_over.bind(this));
        this.events.bind_event(element, 'mouseout', undefined, this.on_mouse_out.bind(this));
        // Don't use bind_event for mousemove since that would create a
        // corresponding touch handler, even though this only makes sense in the
        // context of a mouseover/mouseout.
        element.addEventListener('mousemove', this.on_mouse_move.bind(this), // MouseEvent
        false);
    };
    /**
     * Hide the tooltip if the mouse is over a different object.
     * Initialize the tooltip to potentially appear for this object.
     *
     * @param e Mouse event.
     */
    Tooltip.prototype.on_mouse_over = function (e) {
        if (this.blocked_) {
            // Someone doesn't want us to show tooltips.
            return;
        }
        var element = e.target;
        if (!element || !element.tooltip) {
            return;
        }
        if (this.element_ !== e.target) {
            this.hide();
            this.poisoned_element_ = undefined;
            this.element_ = element;
        }
        // Forget about any immediately preceding mouseOut event.
        clearTimeout(this.mouse_out_pid_);
    };
    /**
     * Hide the tooltip if the mouse leaves the object and enters the workspace.
     *
     * @param e Mouse event.
     */
    Tooltip.prototype.on_mouse_out = function (e) {
        var _this = this;
        if (this.blocked_) {
            // Someone doesn't want us to show tooltips.
            return;
        }
        if ((0, dom_1.is_in_same_shadow)(e.target, e.relatedTarget)) {
            // Do not hide when mouse move inside a shadow.
            return;
        }
        // Moving from one element to another (overlapping or with no gap) generates
        // a mouseOut followed instantly by a mouseOver.  Fork off the mouseOut
        // event and kill it if a mouseOver is received immediately.
        // This way the task only fully executes if mousing into the void.
        this.mouse_out_pid_ = window.setTimeout(function () {
            _this.element_ = undefined;
            _this.poisoned_element_ = undefined;
            _this.hide();
        }, 1);
        clearTimeout(this.show_pid_);
    };
    /**
     * When hovering over an element, schedule a tooltip to be shown.  If a tooltip
     * is already visible, hide it if the mouse strays out of a certain radius.
     *
     * @param e Mouse event.
     */
    Tooltip.prototype.on_mouse_move = function (e) {
        if (!this.element_) {
            // No tooltip here to show.
            return;
        }
        else if (this.blocked_) {
            // Someone doesn't want us to show tooltips.  We are probably handling a
            // user gesture, such as a click or drag.
            return;
        }
        if (this.visible) {
            // Compute the distance between the mouse position when the tooltip was
            // shown and the current mouse position.  Pythagorean theorem.
            var dx = this.last_x_ - e.pageX;
            var dy = this.last_y_ - e.pageY;
            if (Math.sqrt(dx * dx + dy * dy) > this.RADIUS_OK) {
                this.hide();
            }
        }
        else if (this.poisoned_element_ != this.element_) {
            // The mouse moved, clear any previously scheduled tooltip.
            clearTimeout(this.show_pid_);
            // Maybe this time the mouse will stay put.  Schedule showing of tooltip.
            this.last_x_ = e.pageX;
            this.last_y_ = e.pageY;
            this.show_pid_ =
                window.setTimeout(this.show_.bind(this), this.HOVER_MS);
        }
    };
    /**
     * Hide the tooltip.
     */
    Tooltip.prototype.hide = function () {
        if (this.visible) {
            this.visible = false;
            if (this.DIV) {
                this.DIV.style.display = 'none';
            }
        }
        if (this.show_pid_) {
            clearTimeout(this.show_pid_);
        }
    };
    /**
     * Hide any in-progress tooltips and block showing new tooltips until the next
     * call to unblock().
     */
    Tooltip.prototype.block = function () {
        this.hide();
        this.blocked_ = true;
    };
    /**
     * Unblock tooltips: allow them to be scheduled and shown according to their own
     * logic.
     */
    Tooltip.prototype.unblock = function () {
        this.blocked_ = false;
    };
    /**
     * Create the tooltip and show it.
     */
    Tooltip.prototype.show_ = function () {
        var _a;
        if (this.blocked_) {
            // Someone doesn't want us to show tooltips.
            return;
        }
        this.poisoned_element_ = this.element_;
        var tooltip_div = this.DIV || this.create_dom();
        // Erase all existing text.
        (0, dom_1.remove_children)(tooltip_div);
        // Get the new text.
        var tip = (_a = this.element_) === null || _a === void 0 ? void 0 : _a.tooltip;
        while ((0, base_1.is_func)(tip)) {
            tip = tip();
        }
        if (!tip) {
            return;
        }
        tip = (0, string_1.wrap)(tip, this.LIMIT);
        // Create new text, line by line.
        var lines = (tip).split('\n');
        for (var i = 0; i < lines.length; i++) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(lines[i]));
            tooltip_div.appendChild(div);
        }
        var window_size = (0, dom_1.get_viewport_size)();
        // Display the tooltip.
        tooltip_div.style.display = 'block';
        this.visible = true;
        // Move the tooltip to just below the cursor.
        var anchor_x = this.last_x_;
        anchor_x += this.OFFSET_X;
        var anchor_y = this.last_y_ + this.OFFSET_Y;
        if (anchor_y + tooltip_div.offsetHeight >
            window_size.height + window.scrollY) {
            // Falling off the bottom of the screen; shift the tooltip up.
            anchor_y -= tooltip_div.offsetHeight + 2 * this.OFFSET_Y;
        }
        if (anchor_x + tooltip_div.offsetWidth >
            window_size.width + window.scrollX - 2 * this.MARGINS) {
            // Falling off the right edge of the screen;
            // clamp the tooltip on the edge.
            anchor_x = window_size.width - tooltip_div.offsetWidth -
                2 * this.MARGINS;
        }
        tooltip_div.style.top = anchor_y + "px";
        tooltip_div.style.left = anchor_x + "px";
    };
    Tooltip.prototype.get_element = function () {
        return this.element_;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Tooltip.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], Tooltip.prototype, "widget_div", void 0);
    Tooltip = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Tooltip);
    return Tooltip;
}());
exports.Tooltip = Tooltip;
