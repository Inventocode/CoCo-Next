"use strict";
/**
 * @fileoverview Object that controls settings for the workspace.
 * This file is not going to merge Google's Blockly anymore.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var base_1 = require("./utils/base");
var is_1 = require("./utils/is");
var container_1 = require("./di/container");
var di_symbols_1 = require("./di/di_symbols");
var interfaces_1 = require("./interfaces");
var Options = /** @class */ (function () {
    function Options(options) {
        this.disabledPatternId = ''; // 会在创建workspace时被设置
        this.embossFilterId = ''; // 会在创建workspace时被设置
        this.pinch = undefined;
        this.notch = undefined;
        this.degrade_translate = undefined;
        this.tooltip = undefined;
        this.timer = undefined;
        this.toolbox_background_class = undefined;
        this.in_flyout = false;
        var readOnly = !!options.readOnly;
        var has_categories = false;
        var has_collapse;
        var has_comments;
        var has_disable;
        var hasSounds;
        var toolbox_config;
        if (readOnly) {
            has_categories = false;
            has_collapse = false;
            has_comments = false;
            has_disable = false;
            hasSounds = false;
        }
        else {
            if (options.toolbox) {
                if (typeof options.toolbox == 'string') {
                    var xml = (0, container_1.get_instance)().get(di_symbols_1.BINDING.xml);
                    toolbox_config = xml.text_to_dom(options.toolbox);
                }
                else {
                    toolbox_config = options.toolbox;
                }
                if (toolbox_config instanceof Element) {
                    has_categories = !!(toolbox_config && toolbox_config.getElementsByTagName('category').length);
                }
                else {
                    has_categories = toolbox_config.length > 0;
                }
            }
            has_collapse = options.collapse;
            if (has_collapse == undefined) {
                has_collapse = has_categories;
            }
            has_comments = options.comments;
            if (has_comments == undefined) {
                has_comments = has_categories;
            }
            has_disable = options.disable;
            if (has_disable == undefined) {
                has_disable = has_categories;
            }
            hasSounds = options.sounds == undefined ? true : options.sounds;
        }
        var rtl = !!options.rtl;
        var horizontalLayout = options.horizontalLayout;
        if (horizontalLayout == undefined) {
            horizontalLayout = false;
        }
        var toolboxPosition;
        if (typeof options.toolboxPosition === 'number') {
            toolboxPosition = options.toolboxPosition;
        }
        else {
            var toolboxAtStart = options.toolboxPosition !== 'end';
            if (horizontalLayout) {
                toolboxPosition = toolboxAtStart ?
                    interfaces_1.TOOLBOX_POSITION.TOP : interfaces_1.TOOLBOX_POSITION.BOTTOM;
            }
            else {
                toolboxPosition = (toolboxAtStart === rtl) ?
                    interfaces_1.TOOLBOX_POSITION.RIGHT : interfaces_1.TOOLBOX_POSITION.LEFT;
            }
        }
        var ws_scrollable;
        var flyout_scrollable;
        var ws_show_scrollbars;
        var flyout_show_scrollbars;
        // 新版允许了scrollbars的分开配置
        // 当旧设定项scrollbars存在时，使用该项
        // 否则，检查新配置项是否存在并进行配置
        // 增加新选项后，两种配置都不传（即默认值）的表现维持不变
        if (options.scrollbars !== undefined) {
            ws_scrollable = options.scrollbars;
            flyout_scrollable = options.scrollbars;
            ws_show_scrollbars = options.scrollbars;
            flyout_show_scrollbars = options.scrollbars;
        }
        else {
            ws_scrollable = options.scrollable ? options.scrollable.workspace : undefined;
            if (ws_scrollable == undefined) {
                ws_scrollable = has_categories;
            }
            flyout_scrollable = options.scrollable ? options.scrollable.flyout : undefined;
            if (flyout_scrollable == undefined) {
                flyout_scrollable = has_categories;
            }
            ws_show_scrollbars = options.show_scrollbars ? options.show_scrollbars.workspace : undefined;
            if (ws_show_scrollbars == undefined) {
                ws_show_scrollbars = has_categories;
            }
            flyout_show_scrollbars = options.show_scrollbars ? options.show_scrollbars.flyout : undefined;
            if (flyout_show_scrollbars == undefined) {
                flyout_show_scrollbars = has_categories;
            }
        }
        var hasCss = options.css;
        if (hasCss == undefined) {
            hasCss = true;
        }
        var pathToMedia = 'https://static.codemao.cn/blockly/media/';
        if (options.media) {
            pathToMedia = options.media;
        }
        var oneBasedIndex;
        if (options.oneBasedIndex == undefined) {
            oneBasedIndex = true;
        }
        else {
            oneBasedIndex = !!options.oneBasedIndex;
        }
        var blockly_type;
        if (options.blockly_type != undefined) {
            blockly_type = options.blockly_type;
        }
        else {
            blockly_type = 'default';
        }
        this.RTL = rtl;
        this.oneBasedIndex = oneBasedIndex;
        this.collapse = has_collapse;
        this.comments = has_comments;
        this.comment_type = options.comment_type || 'normal';
        this.disable = has_disable;
        this.readOnly = readOnly;
        this.maxBlocks = options.maxBlocks || Infinity;
        this.pathToMedia = pathToMedia;
        this.has_categories = has_categories;
        this.ws_scrollable = ws_scrollable;
        this.ws_show_scrollbars = ws_show_scrollbars;
        this.flyout_scrollable = flyout_scrollable;
        this.flyout_show_scrollbars = flyout_show_scrollbars;
        this.hasSounds = hasSounds;
        this.hasCss = hasCss;
        this.horizontalLayout = horizontalLayout;
        this.toolbox_config = toolbox_config;
        this.gridOptions = this.parse_grid_options(options);
        this.zoomOptions = this.parse_zoom_options(options);
        this.toolboxPosition = toolboxPosition;
        this.blockly_type = blockly_type;
        this.connection_effect = this.parse_connection_effect_options(options);
        this.field_max_length = options.field_max_length;
        this.pinch = options.pinch;
        this.notch = options.notch;
        this.degrade_translate = options.degrade_translate;
        this.tooltip = options.tooltip;
        this.timer = options.timer;
        this.toolbox_background_class = options.toolbox_background_class;
        this.id = options.id;
        this.flyout = this.parse_flyout_options(options.flyout);
        this.custom_svg_defs = options.custom_svg_defs;
        this.delete_area_margin = this.parse_delete_area_margin(options, toolboxPosition);
        this.workspace = {
            content_margin: options.workspace && options.workspace.content_margin || '50%',
        };
        this.theme = typeof options.theme === 'string' ? options.theme : 'light';
        this.dropdown = this.parse_dropdown_options(options);
        this.delete_area = options.delete_area || 'default';
        this.block_group = this.parse_block_group_options(options);
        this.auto_resize = this.parse_auto_resize_options(options);
        this.context_menu = this.parse_context_menu_options(options);
    }
    /**
     * Parse the user-specified zoom options, using reasonable defaults where
     * behaviour is unspecified.  See zoom documentation:
     *   https://developers.google.com/blockly/guides/configure/web/zoom
     * @param options Dictionary of options.
     * @return A dictionary of normalized options.
     * @private
     */
    Options.prototype.parse_zoom_options = function (options) {
        var zoom = options.zoom || {};
        var zoomOptions = {
            controls: (zoom.controls == undefined) ? false : zoom.controls,
            wheel: (zoom.wheel == undefined) ? false : zoom.wheel,
            startScale: (zoom.startScale == undefined) ? 1 : zoom.startScale,
            maxScale: (zoom.maxScale == undefined) ? 3 : zoom.maxScale,
            minScale: (zoom.minScale == undefined) ? 0.3 : zoom.minScale,
            scaleSpeed: (zoom.scaleSpeed == undefined) ? 1.2 : zoom.scaleSpeed,
        };
        return zoomOptions;
    };
    /**
     * Parse the user-specified grid options, using reasonable defaults where
     * behaviour is unspecified.
     * @param options Dictionary of options.
     * @return A dictionary of normalized options.
     */
    Options.prototype.parse_grid_options = function (options) {
        var grid = options.grid || {};
        return {
            spacing: grid.spacing || 35,
            step: grid.step === undefined ? 4 : grid.step,
            snap: !!grid.spacing && !!grid.snap,
        };
    };
    Options.prototype.parse_connection_effect_options = function (options) {
        if (!options.connection_effect) {
            return;
        }
        var connection_effect_options = options.connection_effect || {};
        var connectionEffectOptions = {
            type: connection_effect_options.type,
            color: connection_effect_options.color,
        };
        return connectionEffectOptions;
    };
    Options.prototype.parse_dropdown_options = function (options) {
        var menu = options.dropdown && options.dropdown.menu || {};
        var dropdown = options.dropdown || {};
        return {
            padding: typeof dropdown.padding === 'number' ? dropdown.padding : 6,
            arrow_type: dropdown.arrow_type || 'line',
            menu: {
                align: menu.align || (is_1.is.mobile() || is_1.is.ipad() ? 'center' : 'first'),
                scalable: typeof menu.scalable == 'boolean' ? menu.scalable : true,
            },
        };
    };
    Options.prototype.parse_delete_area_margin = function (options, toolbox_position) {
        var delete_area_margin = options.delete_area_margin;
        if (Array.isArray(delete_area_margin)) {
            return delete_area_margin;
        }
        if (typeof delete_area_margin === 'undefined') {
            delete_area_margin = 10000000;
        }
        if (toolbox_position === interfaces_1.TOOLBOX_POSITION.LEFT) {
            return [delete_area_margin, 0, delete_area_margin, delete_area_margin];
        }
        if (toolbox_position === interfaces_1.TOOLBOX_POSITION.TOP) {
            return [delete_area_margin, delete_area_margin, 0, delete_area_margin];
        }
        if (toolbox_position === interfaces_1.TOOLBOX_POSITION.RIGHT) {
            return [delete_area_margin, delete_area_margin, delete_area_margin, 0];
        }
        return [0, delete_area_margin, delete_area_margin, delete_area_margin];
    };
    Options.prototype.parse_flyout_options = function (option_flyout) {
        var default_flyout_option = {
            auto_close: true,
            fixed_width: undefined,
            min_width: undefined,
            max_width: undefined,
            corner_radius: 0,
            padding: {
                top: 15,
                bottom: 20,
                left: 30,
                right: 30,
            },
            blocks: {
                default_gap: 16,
                head_block_offset: [0, 0],
            },
        };
        return (0, base_1.parse_attr_deep)(default_flyout_option, option_flyout);
    };
    Options.prototype.parse_block_group_options = function (options) {
        if (!options.block_group)
            return undefined;
        if (options.block_group === true)
            return {};
        return options.block_group;
    };
    Options.prototype.parse_auto_resize_options = function (options) {
        if (!options.auto_resize)
            return undefined;
        if (options.auto_resize === true)
            return {
                delay: 0,
            };
        return options.auto_resize;
    };
    Options.prototype.parse_context_menu_options = function (options) {
        var _a, _b;
        var default_workspace_option = [
            interfaces_1.WorkspaceOptionType.PASTE,
            interfaces_1.WorkspaceOptionType.CLEAN_UP,
            interfaces_1.WorkspaceOptionType.DELETE_ALL,
            interfaces_1.WorkspaceOptionType.COPY_ALL,
            interfaces_1.WorkspaceOptionType.GLOBAL_COMMENT,
        ];
        var default_block_option = [
            interfaces_1.BlockOptionType.COPY_AND_PASTE,
            interfaces_1.BlockOptionType.COPY,
            interfaces_1.BlockOptionType.ADD_COMMENT,
            interfaces_1.BlockOptionType.COLLAPSE,
            interfaces_1.BlockOptionType.DELETE,
            interfaces_1.BlockOptionType.SET_GROUP,
        ];
        return {
            workspace: ((_a = options.context_menu) === null || _a === void 0 ? void 0 : _a.workspace) || default_workspace_option,
            block: ((_b = options.context_menu) === null || _b === void 0 ? void 0 : _b.block) || default_block_option,
        };
    };
    Options = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Options);
    return Options;
}());
exports.Options = Options;
