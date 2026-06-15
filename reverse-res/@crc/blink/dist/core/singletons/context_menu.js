"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var dom_1 = require("../utils/dom");
var style_1 = require("../utils/style");
var event_1 = require("../utils/event");
var ContextMenu = /** @class */ (function () {
    function ContextMenu() {
        /**
         * Which block is the context menu attached to?
         */
        this.current_block = undefined;
        /**
         * 右键菜单是否被禁止弹出
         * 默认为false，不禁止弹出
         */
        this.disabled = false;
    }
    ContextMenu.prototype.set_disabled = function (disabled) {
        this.disabled = disabled;
    };
    /**
     * Construct the menu based on the list of options and show the menu.
     * @param e Mouse event.
     * @param option_group Menu options group, includes menu source and array of options.
     * @param rtl True if RTL, false if LTR.
     */
    ContextMenu.prototype.show = function (e, option_group, rtl) {
        var _a, _b, _c;
        if (this.disabled) {
            return;
        }
        this.widget_div.show(this, undefined);
        (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.hide();
        /**
         * 兼容旧版本的override ……
         * 以前在业务中override BlockSvg及WorkspaceSvg中的show_context_menu,
         * 自行生成Option[]并调用该方法来展示context menu
         * 不想兼容了 标个BREAKING CHANGE然后升级的时候统一改吧？？
         */
        if (Array.isArray(option_group)) {
            option_group = {
                source: '',
                options: option_group,
            };
        }
        if (!option_group.options.length) {
            this.hide();
            return;
        }
        var menu = this.populate_(option_group);
        this.position_(menu, e, rtl);
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.CONTEXT_MENU_OPEN,
                workspace_id: ((_b = this.workspace_db.current) === null || _b === void 0 ? void 0 : _b.id) || '',
                old_value: false,
                new_value: true,
                block_id: (_c = this.current_block) === null || _c === void 0 ? void 0 : _c.id,
            }));
        }
        // 上下文菜单 focus 需要1ms延迟，因为其他一些鼠标事件仍在队列中等待并清除焦点。
        window.setTimeout(function () { menu.focus(); }, 0);
    };
    /**
     * Create the context menu object and populate it with the given options.
     * @param options Array of menu options.
     */
    ContextMenu.prototype.populate_ = function (option_group) {
        var _this = this;
        var menu = document.createElement('div');
        menu.setAttribute('tabindex', '-1'); // 允许菜单接收焦点，以使点击workspace外时能触发focusout隐藏菜单
        menu.classList.add('menu-wrapper');
        var options = option_group.options;
        var _loop_1 = function (i) {
            var option = options[i];
            var menu_item = document.createElement('div');
            menu_item.classList.add('menu-item');
            menu_item.setAttribute('name', option.name);
            !option.enabled && menu_item.classList.add('menu_item_disable');
            option.enabled && menu_item.classList.add('menu_item_enable');
            if (option.icon) {
                var image = void 0;
                if (typeof option.icon === 'string') {
                    image = new Image();
                    image.src = option.icon;
                    image.alt = option.text;
                    image.style.verticalAlign = 'middle';
                    image.draggable = false;
                }
                else {
                    image = (0, dom_1.create_svg_element)('svg', { width: 16, height: 16 });
                    var svg_icon = (0, dom_1.clone_node)(option.icon, true);
                    image.appendChild(svg_icon);
                }
                image.style.marginRight = '8px';
                menu_item.appendChild(image);
            }
            var text_span = document.createElement('span');
            text_span.innerText = option.text;
            menu_item.appendChild(text_span);
            option.selected && menu_item.classList.add('menu_item_selected');
            if (option.attr) {
                option.attr.forEach(function (attr_value_pair) {
                    var key = attr_value_pair[0], value = attr_value_pair[1];
                    if (key === 'class') {
                        menu_item.classList.add(value);
                        return;
                    }
                    menu_item.setAttribute(key, value);
                });
            }
            menu.appendChild(menu_item);
            menu_item.addEventListener('click', function () {
                var _a;
                if (option.enabled) {
                    _this.hide();
                    option.callback();
                    if (_this.events.is_enabled()) {
                        _this.events.fire(_this.contextmenu_option_event_factory({
                            workspace_id: ((_a = _this.workspace_db.current) === null || _a === void 0 ? void 0 : _a.id) || '',
                            option_name: option.name,
                            source: option_group.source,
                        }));
                    }
                }
            });
        };
        for (var i = 0; i < options.length; i++) {
            _loop_1(i);
        }
        return menu;
    };
    /**
     * Add the menu to the page and position it correctly.
     * @param e Mouse event for the right click that is making the context menu appear.
     * @param rtl True if RTL, false if LTR.
     */
    ContextMenu.prototype.position_ = function (menu, e, rtl) {
        // Record windowSize and scrollOffset before adding menu.
        var viewportBBox = (0, dom_1.get_viewport_bbox)();
        // This one is just a point, but we'll pretend that it's a rect so we can use
        // some helper functions.
        var anchorBBox = {
            top: e.clientY,
            bottom: e.clientY,
            left: e.clientX,
            right: e.clientX,
        };
        this.create_widget(menu);
        var menuSize = (0, style_1.get_size)(menu);
        // Recalculate height for the total content, not only box height.
        menuSize.height = menu.scrollHeight;
        if (rtl) {
            (0, style_1.adjust_bboxes_for_rtl)(viewportBBox, anchorBBox, menuSize);
        }
        this.widget_div.position_with_anchor(viewportBBox, anchorBBox, menuSize, rtl);
        // Calling menuDom.focus() has to wait until after the menu has been placed
        // correctly.  Otherwise it will cause a page scroll to get the misplaced menu
        // in view.  See issue #1329.
        menu.focus();
    };
    /**
     * Create and render the menu widget inside Blockly's widget div.
     * @param menu The menu to add to the widget div.
     */
    ContextMenu.prototype.create_widget = function (menu) {
        var div = this.widget_div.DIV;
        div.appendChild(menu);
        menu.classList.add('blocklyContextMenu');
        // Prevent system context menu when right-clicking a Blockly context menu.
        this.events.bind_event_with_checks(menu, 'contextmenu', undefined, event_1.no_event);
    };
    /**
     * Hide the context menu.
     */
    ContextMenu.prototype.hide = function () {
        var _a, _b;
        this.widget_div.hide_if_owner(this);
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.CONTEXT_MENU_OPEN,
                workspace_id: ((_a = this.workspace_db.current) === null || _a === void 0 ? void 0 : _a.id) || '',
                old_value: true,
                new_value: false,
                block_id: (_b = this.current_block) === null || _b === void 0 ? void 0 : _b.id,
            }));
        }
        this.current_block = undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], ContextMenu.prototype, "widget_div", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], ContextMenu.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.tooltip)
    ], ContextMenu.prototype, "tooltip", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], ContextMenu.prototype, "workspace_db", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ContextMenuOptionEvent)
    ], ContextMenu.prototype, "contextmenu_option_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], ContextMenu.prototype, "ui_event_factory", void 0);
    ContextMenu = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], ContextMenu);
    return ContextMenu;
}());
exports.ContextMenu = ContextMenu;
