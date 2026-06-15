"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbox = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var asserts_1 = require("../utils/asserts");
var dom_1 = require("../utils/dom");
var base_1 = require("../utils/base");
var maths_1 = require("../utils/maths");
var base_node_1 = require("./base_node");
var tree_node_1 = require("./tree_node");
var Toolbox = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Toolbox, _super);
    function Toolbox(workspace) {
        var _this = _super.call(this) || this;
        /**
         * Finds the containing node given an event.
         * @param e The browser event.
         */
        _this.get_node_from_event_ = function (e) {
            // find the right node
            var target = e.target;
            while (target != undefined) {
                var node = _this.find_node_by_name(target.id);
                if (node != undefined) {
                    return node;
                }
                if (target == _this.children_container_) {
                    break;
                }
                target = target.parentNode;
            }
            return;
        };
        var options = workspace.options;
        _this.workspace_ = workspace;
        _this.toolbox_position = workspace.get_options().toolboxPosition;
        var workspace_options = Object.assign({}, _this.workspace_.options, {
            disabledPatternId: options.disabledPatternId,
            parentWorkspace: workspace,
            RTL: workspace.RTL,
            // NOTE: Horizontal Layout
            // horizontalLayout: workspace.horizontalLayout,
            toolboxPosition: options.toolboxPosition,
            blockly_type: options.blockly_type,
            // 防止flyout中的workspace使用了mainWorkspace的id
            id: undefined,
        });
        _this.flyout = _this.vertical_flyout_factory(workspace_options);
        return _this;
    }
    /**
     * @deprecated Use flyout instead.
     */
    Toolbox.prototype.get_flyout = function () {
        return this.flyout;
    };
    Toolbox.prototype.get_width = function () {
        return this.html_div ? this.html_div.offsetWidth : 0;
    };
    Toolbox.prototype.get_height = function () {
        return this.html_div ? this.html_div.offsetHeight : 0;
    };
    Toolbox.prototype.get_workspace_id = function () {
        if (!this.workspace_) {
            return;
        }
        return this.workspace_.id;
    };
    Toolbox.prototype.init = function () {
        var _this = this;
        if (!this.workspace_) {
            return;
        }
        var workspace = this.workspace_;
        var options = workspace.get_options();
        var workspace_drag_surface = this.workspace_.get_workspace_drag_surface();
        var svg = workspace_drag_surface && workspace_drag_surface.get_svg();
        if (svg == undefined) {
            console.warn('Ref SVG not Found.');
            return;
        }
        this.html_div = (0, dom_1.create_dom)('div', 'blocklyToolboxDiv');
        this.html_div.setAttribute('dir', workspace.RTL ? 'RTL' : 'LTR');
        // Use the theme or given class
        if (options.toolbox_background_class !== undefined) {
            this.html_div.classList.add(options.toolbox_background_class);
        }
        else {
            this.html_div.style.background = this.theme.flyout.BACKGROUND_COLOR.toString();
        }
        this.children_container_ = document.createElement('div');
        this.children_container_.className = 'blocklyTreeRoot';
        (0, asserts_1.assert)(options.toolbox_config, 'Toolbox is not defined.');
        this.populate(options.toolbox_config);
        this.html_div.appendChild(this.children_container_);
        (0, dom_1.insert_after)(this.html_div, svg);
        // Initialize flyout
        (0, dom_1.insert_before)(this.flyout.create_dom('svg'), this.html_div);
        this.flyout.init(workspace);
        this.position();
        /**
         * 坑1：原本使用hammer监听tap，但在ios13中，hammer的监听在反复多次点击后会出现卡死的情况。
         *  相关bug: [【kids工具】ios13系统，反复多次打开关闭积木盒后，积木盒无法再打开](https://www.tapd.cn/61080891/bugtrace/bugs/view?bug_id=1161080891001043612)
         *
         * 坑2：如果使用 bind_event_with_checks 方法监听 'click' 事件，受到浏览器本身影响，在移动端点击响应
         *  有300ms延迟，不符合产品需求。
         *
         * 坑3：使用 bind_event_with_checks 方法监听 'mousedown' 事件。
         *  由于之前在 bind_event_with_checks 中，避免移动端事件重复触发的方案中执行了 preventDefault，该方案会导致toolbox无法被触摸滑动。
         *   相关bug：[【3.7】积木盒无法滑动，导致无法查看到列表云变量函数等积木盒](https://www.tapd.cn/61080891/bugtrace/bugs/view?bug_id=1161080891001052450)
         *  （[旧方案及注释](https://gitlab.codemao.cn/crc/creation/platform/blink/-/commit/b9939963c5ce126ce85cdfe72b95a56aa691c99e#e9bc5373c079d2f253f155e46f723d302a6f1000)）
         *
         * 此时修改了 bind_event_with_checks，使其在避免事件重复触发的同时不需要对事件进行 preventDefault.
         *
         * 坑4：上一修改后，使用 bind_event_with_checks 方法监听 'mousedown' 事件。
         *  点击事件会在按下瞬间被触发，即使用户这次按下想要做的操作实际上是滑动。该表现在移动端不符合预期。
         *
         * 因此最终使用了三个事件的监听完成toolbox的交互：
         * 1. 在down时记录按下时间。
         * 2. 如果发生了移动端的滑动事件，则将按下时间置空。
         * 3. 在触发up时，如果有存在的down时间，且与当前的时间差不超过点击事件触发的阈值，则触发点击事件。
         */
        /**
         * 从按下到松开之间，能够触发点击事件的最大时间差。
         * 如果松开的时间晚于按下时间+该值，则不触发点击事件。
         */
        var CLICK_TIMEOUT = 200;
        this.events.bind_event(this.html_div, 'mousedown', this, function () { _this.mousedown_time = Date.now(); });
        // 如果在移动端按下后触发了移动事件，则不触发点击事件。
        this.events.bind_event(this.html_div, 'touchmove', this, function () { _this.mousedown_time = undefined; });
        var throttle_click = (0, base_1.throttle)(function (e) { return _this.handle_mousedown(e); }, 200);
        this.events.bind_event(this.html_div, 'mouseup', this, function (e) {
            if (_this.mousedown_time && Date.now() - _this.mousedown_time < CLICK_TIMEOUT) {
                throttle_click(e);
            }
            _this.mousedown_time = undefined;
        });
    };
    /**
     * Clicking on toolbox closes popups.
     * @param e
     */
    Toolbox.prototype.handle_mousedown = function (e) {
        if (this.utils.is_right_button(e)
            || e.target == this.html_div) {
            // Close flyout.
            this.utils.hide_chaff(false);
            // Don't block future drags.
            this.touch_manager.clear_touch_identifier();
            return;
        }
        // Just close popups.
        this.utils.hide_chaff(true);
        var target_tree_node = this.get_node_from_event_(e);
        if (target_tree_node && !target_tree_node.is_disabled()) {
            if (target_tree_node.is_selected()) {
                this.clear_selection();
            }
            else if (target_tree_node.is_selectable()) {
                this.set_selected_item(target_tree_node);
            }
            // 只有点击节点本身时才执行展开或收起
            target_tree_node.set_expanded(!target_tree_node.is_expanded());
            this.block_animations.toolbox_click_effect();
        }
        this.touch_manager.clear_touch_identifier(); // Don't block future drags.
    };
    Toolbox.prototype.populate = function (new_tree) {
        this.remove_children(); // Delete any existing content.
        if (!this.workspace_) {
            return;
        }
        if (Array.isArray(new_tree)) {
            this.build_by_config(new_tree);
        }
        else {
            this.sync_trees_(new_tree);
        }
        // Fire a resize event since the toolbox may have changed width and height.
        this.workspace_.resize_contents();
    };
    Toolbox.prototype.build_by_config = function (config) {
        var _this = this;
        config.forEach(function (node_config) {
            var new_node = new tree_node_1.TreeNode(node_config);
            _this.add(new_node);
        });
    };
    /**
     * 将<category> ... </category> 中的积木结构存到 TreeNode 的 blocks 列表中。
     * @param node_in category的xml结构。
     * @param node_out 要设置blocks的目标树节点。
     */
    Toolbox.prototype.sync_nodes_ = function (node_in, node_out) {
        var last_element;
        for (var i = 0, child_in = void 0; i < node_in.childNodes.length; i++) {
            child_in = node_in.childNodes[i];
            if (!(child_in instanceof Element)) {
                // Skip over text.
                continue;
            }
            switch (child_in.tagName.toUpperCase()) {
                case 'SEP':
                    if (last_element == undefined) {
                        break;
                    }
                    // Change the gap between two blocks.
                    // <sep gap="36"></sep>
                    // The default gap is 24, can be set larger or smaller.
                    // NOTE: that a deprecated method is to add a gap to a block.
                    // <block type="math_arithmetic" gap="8"></block>
                    var new_gap = child_in.getAttribute('gap');
                    if (new_gap != undefined) {
                        last_element.setAttribute('gap', new_gap);
                    }
                    break;
                case 'BLOCK':
                case 'SHADOW':
                case 'LABEL':
                case 'BUTTON':
                    node_out.push_block(child_in);
                    last_element = child_in;
                    break;
            }
        }
    };
    /**
     * Sync trees of the toolbox.
     * @param tree_in xml DOM tree of blocks.
     */
    Toolbox.prototype.sync_trees_ = function (tree_in) {
        var _a;
        var last_element;
        for (var i = 0, child_in = void 0; i < tree_in.childNodes.length; i++) {
            child_in = tree_in.childNodes[i];
            if (!(child_in instanceof Element)) {
                // Skip over text.
                continue;
            }
            switch (child_in.tagName.toUpperCase()) {
                case 'CATEGORY':
                    // Decode the category name for any potential message references
                    // (eg. `%{BKY_CATEGORY_NAME_LOGIC}`).
                    var name_1 = child_in.getAttribute('name');
                    if (name_1 == undefined) {
                        throw new ReferenceError('Child node does not have name.');
                    }
                    var text = child_in.getAttribute('text') || undefined;
                    // Decode the colour for any potential message references
                    // (eg. `%{BKY_MATH_HUE}`).
                    var color_key = child_in.getAttribute('color');
                    var color = (color_key && ((_a = this.theme.get_color(color_key)) === null || _a === void 0 ? void 0 : _a.fill.toString())) || color_key || undefined;
                    var secondary_color = child_in.getAttribute('flyout_background') || undefined;
                    // 节点容器
                    var unselected_classname = child_in.getAttribute('element_classname') || undefined;
                    var disabled_classname = child_in.getAttribute('element_disabled_classname') || undefined;
                    var selected_classname = child_in.getAttribute('element_classname_selected') || undefined;
                    var element_style = child_in.getAttribute('element_style') || undefined;
                    var element_selected_style = child_in.getAttribute('element_selected_style') || undefined;
                    // icon
                    var icon_css = child_in.getAttribute('icon') || undefined;
                    var selected_icon_css = child_in.getAttribute('selected_icon') || undefined;
                    var icon_html = child_in.getAttribute('icon_html') || undefined;
                    var icon_selected_html = child_in.getAttribute('icon_selected_html') || undefined;
                    var child_out = new tree_node_1.TreeNode({
                        text: text,
                        name: name_1,
                        color: color,
                        secondary_color: secondary_color,
                        element: {
                            unselected_classname: unselected_classname,
                            disabled_classname: disabled_classname,
                            selected_classname: selected_classname,
                            style: element_style,
                            selected_style: element_selected_style,
                        },
                        icon: {
                            style: icon_css,
                            selected_style: selected_icon_css,
                            html: icon_html,
                            selected_html: icon_selected_html,
                        },
                    });
                    var custom = child_in.getAttribute('custom');
                    if (custom && child_in.childElementCount === 0) {
                        // dynamic generate block when showing flyout.
                        child_out.set_blocks(custom);
                        child_out.get_element().dataset.custom = custom;
                    }
                    else {
                        this.sync_nodes_(child_in, child_out);
                        if (child_out.get_blocks().length === 0) {
                            child_out.set_disabled(true);
                        }
                    }
                    last_element = child_in;
                    this.add(child_out);
                    break;
                case 'SEP':
                    console.error('TreeSeparator is not implemented currently. ');
                    if (last_element == undefined) {
                        break;
                    }
                    break;
            }
        }
    };
    Toolbox.prototype.position = function () {
        if (this.html_div == undefined) {
            // Not initialized yet.
            // console.warn('Toolbox html div has not been initialized.');
            return;
        }
        if (!this.workspace_) {
            return;
        }
        var svg = this.workspace_.get_parent_svg();
        if (svg == undefined) {
            console.warn('Parent SVG not Found.');
            return;
        }
        if (this.toolbox_position == interfaces_1.TOOLBOX_POSITION.RIGHT) { // Right
            this.html_div.style.top = '0';
            this.html_div.style.right = '0';
        }
        else { // Left
            this.html_div.style.top = '0';
            this.html_div.style.left = '0';
        }
        this.flyout.position();
    };
    Toolbox.prototype.get_client_rect = function () {
        if (this.html_div == undefined) {
            return undefined;
        }
        var toolbox_rect = this.html_div.getBoundingClientRect();
        // BIG_NUM is offscreen padding so that blocks dragged beyond the toolbox
        // area are still deleted.  Must be smaller than Infinity, but larger than
        // the largest screen size.
        var margin = this.workspace_.get_options().delete_area_margin;
        var x = toolbox_rect.left;
        var y = toolbox_rect.top;
        var width = toolbox_rect.width;
        var height = toolbox_rect.height;
        // Assumes that the toolbox is on the SVG edge.
        return new maths_1.Rect(x - margin[3], y - margin[0], width + margin[1] + margin[3], height + margin[0] + margin[2]);
    };
    Toolbox.prototype.add_delete_style = function () {
        (0, dom_1.add_class)(this.html_div, 'blocklyToolboxDelete');
    };
    Toolbox.prototype.remove_delete_style = function () {
        (0, dom_1.remove_class)(this.html_div, 'blocklyToolboxDelete');
    };
    Toolbox.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.flyout.dispose();
        (0, dom_1.remove_node)(this.html_div);
        this.workspace_ = undefined;
    };
    Toolbox.prototype.get_selected = function () {
        return this.selected_node;
    };
    Toolbox.prototype.get_last_selected = function () {
        return this.last_selected_node;
    };
    Toolbox.prototype.set_selected_item = function (node) {
        var _a, _b;
        var old_node = this.selected_node;
        if (node === old_node) {
            return;
        }
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.CATEGORY_WILL_CHANGE,
                workspace_id: ((_a = this.workspace_) === null || _a === void 0 ? void 0 : _a.id) || '',
                old_value: old_node,
                new_value: node,
            }));
        }
        if (old_node) {
            old_node.unselect();
        }
        var blocks = [];
        if (node) {
            node.select();
            blocks = node.get_blocks(true);
        }
        if (node && blocks && blocks.length > 0) {
            var background_color = node.get_flyout_background_color();
            if (background_color) {
                // Change the flyout color if it's specified.
                var flyout_background = this.flyout.get_background();
                flyout_background && (flyout_background.style.fill = background_color);
            }
            this.flyout.show(blocks);
            // Scroll the flyout to the top if the category has changed.
            if (this.last_selected_node !== node) {
                this.flyout.scroll_to_start();
            }
        }
        else {
            // Hide the flyout.
            this.flyout.hide();
        }
        if (node) {
            this.last_selected_node = node;
        }
        this.selected_node = node;
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.CATEGORY,
                workspace_id: ((_b = this.workspace_) === null || _b === void 0 ? void 0 : _b.id) || '',
                old_value: old_node,
                new_value: node,
            }));
        }
    };
    Toolbox.prototype.clear_selection = function () {
        this.set_selected_item();
    };
    Toolbox.prototype.refresh_selection = function () {
        if (this.selected_node == undefined) {
            return;
        }
        var blocks = this.selected_node.get_blocks();
        if (blocks != undefined) {
            this.flyout.show(blocks);
        }
    };
    Toolbox.prototype.find_node_by_name = function (name) {
        if (!name) {
            return undefined;
        }
        for (var i = 0; i < this.children_.length; i++) {
            var node = this.children_[i];
            if (node.get_name() === name) {
                return node;
            }
            var deeper_node = node.find_node_by_name(name);
            if (deeper_node) {
                return deeper_node;
            }
        }
        return undefined;
    };
    Toolbox.prototype.new_node = function (config) {
        return new tree_node_1.TreeNode(config);
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Toolbox.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Toolbox.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.touch_manager)
    ], Toolbox.prototype, "touch_manager", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.block_animations)
    ], Toolbox.prototype, "block_animations", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], Toolbox.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.VerticalFlyout)
    ], Toolbox.prototype, "vertical_flyout_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], Toolbox.prototype, "ui_event_factory", void 0);
    Toolbox = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Toolbox);
    return Toolbox;
}(base_node_1.BaseNode));
exports.Toolbox = Toolbox;
