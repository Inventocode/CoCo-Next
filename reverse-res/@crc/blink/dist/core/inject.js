"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onKeyDown_ = exports.Inject = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("./di");
var interfaces_1 = require("./interfaces");
var svg_filter_1 = require("./svg_filter");
var svg_symbol_1 = require("./svg_symbol");
var base_1 = require("./utils/base");
var dom = (0, tslib_1.__importStar)(require("./utils/dom"));
var timer_handler_1 = require("./timer_handler");
var utils_1 = require("./utils");
var block_1 = require("./utils/block");
function Inject(container, opt_options) {
    if ((0, base_1.is_string)(container)) {
        container = document.getElementById(container) ||
            document.querySelector(container) ||
            undefined;
    }
    // Verify that the container is in document.
    // Codemao: Throw if container is undefined.
    if ((0, base_1.is_nil)(container) || !dom.contains(document, container)) {
        throw new ReferenceError('Error: container is not in current document.');
    }
    var cont = (0, di_1.get_instance)();
    var options = cont.get(di_1.BINDING.Options)(opt_options || {});
    var sub_container = dom.create_dom('div', "injectionDiv" /* INJECTION_DIV */);
    sub_container.classList.add(options.theme);
    container.appendChild(sub_container);
    var svg = create_dom.call(this, sub_container, options);
    // Create surfaces for dragging things. These are optimizations
    // so that the browser does not repaint during the drag.
    var block_drag_surface = cont.get(di_1.BINDING.BlockDragSurfaceSvg)(sub_container);
    var workspace_drag_surface = cont.get(di_1.BINDING.WorkspaceDragSurfaceSvg)(sub_container, svg);
    var workspace = create_main_workspace(svg, options, block_drag_surface, workspace_drag_surface, sub_container);
    init_.call(this, workspace);
    this.mainWorkspace = workspace;
    var utils = cont.get(di_1.BINDING.utils);
    utils.svg_resize(workspace);
    if (options.auto_resize) {
        set_auto_resize((0, base_1.debounce)(function () { return utils.svg_resize(workspace); }, options.auto_resize.delay), container);
    }
    return workspace;
}
exports.Inject = Inject;
var set_auto_resize = function (resize_svg, container) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var ResizeObserver, ro;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve().then(function () { return (0, tslib_1.__importStar)(require('resize-observer-polyfill')); })];
            case 1: return [4 /*yield*/, (_a.sent()).default];
            case 2:
                ResizeObserver = _a.sent();
                ro = new ResizeObserver(resize_svg);
                ro.observe(container);
                return [2 /*return*/];
        }
    });
}); };
/**
 * Create the SVG image.
 * @param container Containing element.
 * @param options Dictionary of options.
 * @return Newly created SVG image.
 * @private
 */
function create_dom(container, options) {
    var cont = (0, di_1.get_instance)();
    // Sadly browsers (Chrome vs Firefox) are currently inconsistent in laying
    // out content in RTL mode.  Therefore Blockly forces the use of LTR,
    // then manually positions content in RTL as needed.
    container.setAttribute('dir', 'LTR');
    // Closure can be trusted to create HTML widgets with the proper direction.
    // Load CSS.
    var css = cont.get(di_1.BINDING.css);
    css.inject(options.hasCss, options.pathToMedia);
    // Build the SVG DOM.
    /*
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:html="http://www.w3.org/1999/xhtml"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      class="blocklySvg">
      ...
    </svg>
    */
    var svg = dom.create_svg_element('svg', {
        'class': 'blocklySvg',
    }, container);
    /*
    <defs>
      ... filters go here ...
    </defs>
    */
    var defs = dom.create_svg_element('defs', {}, svg);
    // Each filter/pattern needs a unique ID for the case of multiple Blockly
    // instances on a page.  Browser behaviour becomes undefined otherwise.
    // https://neil.fraser.name/news/2015/11/01/
    var rnd = String(Math.random()).substring(2);
    // REF T14430
    // 问题本来是rnd可解决的问题，但是这里定义的额外filter有的直接在kitten中使用，而在kitten中难以获知当前workspace的pattern_id
    // 目前业务场景中没有需要两个可编辑workspace的，所以暂时阻止在只读的情况下插入这些filter
    // 如果之后需要支持多个可编辑workspace，可考虑在包裹workspace的div上插入额外属性
    if (!options.readOnly) {
        (0, svg_filter_1.inject_extra_filters)(defs);
    }
    (0, svg_filter_1.inject_comment_filters)(defs);
    (0, svg_symbol_1.inject_icon_symbols)(defs);
    // filter: blur-1px
    var blur_1px = dom.create_svg_element('filter', { 'id': 'blur-1px' }, defs);
    dom.create_svg_element('feGaussianBlur', { 'in': 'SourceGraphic', 'stdDeviation': '1' }, blur_1px);
    // filter: shine
    var hiblur = dom.create_svg_element('filter', { 'id': 'hiblur', 'color-interpolation-filters': 'sRGB' }, defs);
    dom.create_svg_element('feColorMatrix', { 'type': 'luminanceToAlpha', 'in': 'SourceGraphic', 'result': 'lumMap' }, hiblur);
    var hiblur_child = dom.create_svg_element('feComponentTransfer', { 'in': 'lumMap', 'result': 'highlightMask' }, hiblur);
    dom.create_svg_element('feFuncA', { 'type': 'discrete', 'tableValues': '0 0 0 0 0 0 0 1' }, hiblur_child);
    dom.create_svg_element('feComposite', { 'operator': 'in', 'in': 'SourceGraphic', 'in2': 'highlightMask', 'result': 'highlights' }, hiblur);
    dom.create_svg_element('feGaussianBlur', { 'in': 'highlights', 'stdDeviation': '3', 'result': 'highBlur' }, hiblur);
    dom.create_svg_element('feComposite', { 'operator': 'over', 'in': 'highBlur', 'in2': 'SourceGraphic', 'result': 'final' }, hiblur);
    // 透明背景
    var transparentPattern = dom.create_svg_element('pattern', {
        'id': "transparentPattern",
        x: 0,
        y: 0,
        width: 12,
        height: 12,
        'patternUnits': 'userSpaceOnUse',
    }, defs);
    dom.create_svg_element('rect', {
        x: 0,
        y: 0,
        width: 7,
        height: 7,
        style: 'fill:#FFFFFF',
    }, transparentPattern);
    dom.create_svg_element('rect', {
        x: 6,
        y: 0,
        width: 7,
        height: 7,
        style: 'fill:#EFEFEF',
    }, transparentPattern);
    dom.create_svg_element('rect', {
        x: 0,
        y: 6,
        width: 7,
        height: 7,
        style: 'fill:#EFEFEF',
    }, transparentPattern);
    dom.create_svg_element('rect', {
        x: 6,
        y: 6,
        width: 7,
        height: 7,
        style: 'fill:#FFFFFF',
    }, transparentPattern);
    /*
      <filter id="blocklyEmbossFilter837493">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="1" specularConstant="0.5"
                            specularExponent="10" lighting-color="white"
                            result="specOut">
          <fePointLight x="-5000" y="-10000" z="20000" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in"
                    result="specOut" />
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                    k1="0" k2="1" k3="1" k4="0" />
      </filter>
    */
    var emboss_filter = dom.create_svg_element('filter', { 'id': "blocklyEmbossFilter" + rnd }, defs);
    dom.create_svg_element('feGaussianBlur', { 'in': 'SourceAlpha', 'stdDeviation': 1, 'result': 'blur' }, emboss_filter);
    var fe_specular_lighting = dom.create_svg_element('feSpecularLighting', {
        'in': 'blur',
        'surfaceScale': 1,
        'specularConstant': 0.5,
        'specularExponent': 10,
        'lighting-color': 'white',
        'result': 'specOut',
    }, emboss_filter);
    dom.create_svg_element('fePointLight', { 'x': -5000, 'y': -10000, 'z': 20000 }, fe_specular_lighting);
    dom.create_svg_element('feComposite', {
        'in': 'specOut',
        'in2': 'SourceAlpha',
        'operator': 'in',
        'result': 'specOut',
    }, emboss_filter);
    dom.create_svg_element('feComposite', {
        'in': 'SourceGraphic',
        'in2': 'specOut',
        'operator': 'arithmetic',
        'k1': 0, 'k2': 1, 'k3': 1, 'k4': 0,
    }, emboss_filter);
    options.embossFilterId = emboss_filter.id;
    /*
      <pattern id="blocklyDisabledPattern0514547005962509" patternUnits="userSpaceOnUse"
        width="12" height="12">
        <rect width="12" height="12" fill="#787B81"></rect>
        <path d="M 2.5 2.5 L 9.5 9.5 M 9.5 2.5 L 2.5 9.5" stroke="#8D909A"
          stroke-width="1.5" stroke-linecap="round">
        </path>
      </pattern>
    */
    var disabled_pattern = dom.create_svg_element('pattern', {
        'id': "blocklyDisabledPattern" + rnd,
        'patternUnits': 'userSpaceOnUse',
        'width': 12, 'height': 12,
    }, defs);
    dom.create_svg_element('rect', { 'width': 12, 'height': 12, 'fill': this.theme.disabled_color.fill }, disabled_pattern);
    // 以前积木上的小叉
    // dom.create_svg_element(
    //   'path',
    //   { 'd': 'M 2.5 2.5 L 9.5 9.5 M 9.5 2.5 L 2.5 9.5', 'stroke': '#8D909A',
    //     'stroke-width': 1.5, 'stroke-linecap': 'round' },
    //   disabled_pattern);
    options.disabledPatternId = disabled_pattern.id;
    options.svg_defs = defs;
    options.svg_rnd = rnd;
    // options.gridPattern = GridClass.create_dom(rnd, options.gridOptions, defs);
    if (options.custom_svg_defs) {
        options.custom_svg_defs.forEach(function (def) {
            defs.appendChild((0, base_1.is_string)(def) ? dom.parse_to_SVG(def) : def);
        });
    }
    return svg;
}
/**
 * Initialize Blockly with various handlers.
 * @param main_workspace Newly created main workspace.
 */
function init_(main_workspace) {
    var cont = (0, di_1.get_instance)();
    var events = cont.get(di_1.BINDING.events);
    var utils = cont.get(di_1.BINDING.utils);
    var svg = main_workspace.get_parent_svg();
    // Suppress the browser's context menu.
    if (svg != undefined && svg.parentNode) {
        events.bind_event_with_checks(svg.parentNode, 'contextmenu', undefined, function (e) {
            if (!utils.is_target_input(e)) {
                e.preventDefault();
            }
        });
    }
    var workspace_resize_handler = events.bind_event_with_checks(window, 'resize', undefined, function () {
        utils.hide_chaff(true);
        utils.svg_resize(main_workspace);
    });
    main_workspace.set_resize_handler_wrapper(workspace_resize_handler);
    bindDocumentEvents_.call(this);
    var options = main_workspace.get_options();
    if (options.toolbox_config != undefined) {
        var toolbox = main_workspace.get_toolbox();
        var flyout = main_workspace.get_flyout();
        if (!(0, base_1.is_nil)(toolbox)) {
            toolbox.init();
        }
        else if (options.toolbox_config instanceof Element && !(0, base_1.is_nil)(flyout)) {
            // 只有element格式才能定义无category的toolbox，传入值为<xml><block></block>....</xml>格式
            // Build a fixed flyout with the root blocks.
            flyout.init(main_workspace);
            flyout.show(options.toolbox_config.children);
            flyout.scroll_to_start();
            // Translate the workspace sideways to avoid the fixed flyout.
            main_workspace.scroll_xy[0] = flyout.get_width();
            if (options.toolboxPosition == interfaces_1.TOOLBOX_POSITION.RIGHT) {
                main_workspace.scroll_xy[0] *= -1;
            }
            main_workspace.translate(main_workspace.scroll_xy[0], 0);
        }
    }
    if (options.ws_scrollable) {
        var scrollbar = cont.get(di_1.BINDING.ScrollbarPair)(main_workspace, options.ws_show_scrollbars);
        main_workspace.set_scrollbar(scrollbar);
        scrollbar.resize();
    }
    // Load the sounds.
    if (options.hasSounds) {
        loadSounds_(options.pathToMedia, main_workspace);
    }
}
/**
 * Bind document events, but only once.  Destroying and reinjecting Blockly
 * should not bind again.
 * Bind events for scrolling the workspace.
 * Most of these events should be bound to the SVG's surface.
 * However, 'mouseup' has to be on the whole document so that a block dragged
 * out of bounds and released will know that it has been released.
 * Also, 'keydown' has to be on the whole document since the browser doesn't
 * understand a concept of focus on the SVG image.
 * @private
 */
function bindDocumentEvents_() {
    var _this = this;
    if (!this.runtime_data.document_events_bound) {
        var cont = (0, di_1.get_instance)();
        var events = cont.get(di_1.BINDING.events);
        var touch_manager = cont.get(di_1.BINDING.touch_manager);
        events.bind_event_with_checks(document, 'keydown', undefined, onKeyDown_.bind(this));
        // longStop needs to run to stop the context menu from showing up.  It
        // should run regardless of what other touch event handlers have run.
        events.bind_event_with_checks(document, 'touchend', undefined, touch_manager.long_stop.bind(touch_manager));
        events.bind_event_with_checks(document, 'touchcancel', undefined, touch_manager.long_stop.bind(touch_manager));
        // Some iPad versions don't fire resize after portrait to landscape change.
        if (utils_1.is.ipad()) {
            events.bind_event_with_checks(window, 'orientationchange', document, function () {
                _this.utils.svg_resize(_this.mainWorkspace);
            });
        }
    }
    this.runtime_data.document_events_bound = true;
}
/**
 * Load sounds for the given workspace.
 * @param {string} pathToMedia The path to the media directory.
 * @param {!Blockly.Workspace} workspace The workspace to load sounds for.
 * @private
 */
function loadSounds_(pathToMedia, workspace) {
    var buildin_sounds = ['click', 'disconnect', 'delete'];
    var cont = (0, di_1.get_instance)();
    var events = cont.get(di_1.BINDING.events);
    var audio_mgr = workspace.get_audio_manager();
    if (!audio_mgr) {
        throw new ReferenceError('audioMgr is undefined');
    }
    buildin_sounds.forEach(function (sound_name) {
        audio_mgr.load([
            "" + pathToMedia + sound_name + ".mp3",
            "" + pathToMedia + sound_name + ".wav",
            "" + pathToMedia + sound_name + ".ogg",
        ], sound_name);
    });
    // Bind temporary hooks that preload the sounds.
    var sound_binds = [];
    var unbind_sounds = function () {
        var curr_sound = sound_binds.pop();
        while (curr_sound) {
            events.unbind_event(curr_sound);
            curr_sound = sound_binds.pop();
        }
        audio_mgr.preload();
    };
    // These are bound on mouse/touch events with Blockly.bind_event_with_checks, so
    // they restrict the touch identifier that will be recognized.  But this is
    // really something that happens on a click, not a drag, so that's not
    // necessary.
    // Android ignores any sound not loaded as a result of a user action.
    sound_binds.push(events.bind_event_with_checks(document, 'mousemove', undefined, unbind_sounds, true));
    sound_binds.push(events.bind_event_with_checks(document, 'touchstart', undefined, unbind_sounds, true));
}
/**
 * Codemao: this is bind(Blockly)
 * Handle a key-down on SVG drawing surface.
 * @param e Key down event.
 */
function onKeyDown_(e) {
    if (this.mainWorkspace.get_options().readOnly || this.utils.is_target_input(e)) {
        // No key actions on readonly workspaces.
        // When focused on an HTML text input widget, don't trap any keys.
        return;
    }
    if (!this.mainWorkspace.get_hotkey_enable()) {
        return;
    }
    var delete_block = false;
    if (e.keyCode == 27) {
        // Pressing esc closes the context menu.
        this.utils.hide_chaff();
    }
    else if (e.keyCode == 8 || e.keyCode == 46) {
        // Delete or backspace.
        // Stop the browser from going back to the previous page.
        // Do this first to prevent an error in the delete code from resulting in
        // data loss.
        e.preventDefault();
        // Don't delete while dragging.  Jeez.
        if (this.mainWorkspace.is_dragging()) {
            return;
        }
        if (this.runtime_data.selected && this.runtime_data.selected.is_deletable()) {
            delete_block = true;
        }
    }
    else if (e.altKey || e.ctrlKey || e.metaKey) {
        // Don't use meta keys during drags.
        if (this.mainWorkspace.is_dragging()) {
            return;
        }
        if (this.runtime_data.selected &&
            this.runtime_data.selected.is_deletable() && this.runtime_data.selected.is_movable()) {
            if (e.keyCode == 67) {
                // 'c' for copy.
                this.utils.hide_chaff();
                this.runtime_data.clipboard.copy(this.runtime_data.selected);
            }
            else if (e.keyCode == 88) {
                // 'x' for cut.
                this.runtime_data.clipboard.copy(this.runtime_data.selected);
                delete_block = true;
            }
        }
        if (e.keyCode == 86) {
            // 'v' for paste.
            var clipboard = this.runtime_data.clipboard.get_content();
            if (clipboard) {
                var current_group = this.events.get_group();
                this.events.set_group(current_group || true);
                // 允许复制积木与复制全部积木之后粘贴的交互不同
                if (!Array.isArray(clipboard)) {
                    this.mainWorkspace.paste(clipboard, undefined, true);
                }
                else {
                    this.mainWorkspace.paste_extend(clipboard, undefined, true);
                }
                this.events.set_group(current_group);
            }
        }
        else if (e.keyCode == 90) {
            // 'z' for undo 'Z' is for redo.
            this.utils.hide_chaff();
            this.mainWorkspace.undo(e.shiftKey);
        }
    }
    if (delete_block) {
        // Common code for delete and cut.
        var current_group = this.events.get_group();
        this.events.set_group(current_group || true);
        this.utils.hide_chaff();
        this.runtime_data.selected && this.runtime_data.selected.dispose(false, true);
        this.events.set_group(current_group);
    }
}
exports.onKeyDown_ = onKeyDown_;
// from blink.ts
function create_main_workspace(svg, options, blockDragSurface, workspaceDragSurface, injection_div) {
    options.parentWorkspace = undefined;
    var cont = (0, di_1.get_instance)();
    var main_workspace = cont.get(di_1.BINDING.WorkspaceSvg)(options, blockDragSurface, workspaceDragSurface, injection_div);
    if (options.zoomOptions.startScale != undefined) {
        main_workspace.set_scale(options.zoomOptions.startScale);
    }
    svg.appendChild(main_workspace.create_dom("blocklyMainBackground" /* MAIN_BACKGROUND */));
    if (!options.has_categories && options.toolbox_config) {
        // Add flyout as an <svg> that is a sibling of the workspace svg.
        var flyout = main_workspace.add_flyout('svg');
        if (flyout == undefined) {
            throw new Error('Add flyout failed.');
        }
        dom.insert_after(flyout, svg);
    }
    var blink = cont.get(di_1.BINDING.Blink);
    // A undefined translation will also apply the correct initial scale.
    main_workspace.translate(0, 0);
    blink.mainWorkspace = main_workspace;
    if (!options.readOnly && !options.ws_scrollable) {
        var workspace_changed = function (e) {
            var should_bump = e.type === interfaces_1.BlockEventType.MOVE
                || (e.type === interfaces_1.BlockEventType.CREATE && e.source !== 'flyout:drag')
                || e.type === interfaces_1.UIEventType.FLYOUT_SHOW;
            if (main_workspace.is_dragging() || !should_bump) {
                return;
            }
            // TODO 已知问题：创建积木注释的事件也被过滤，且积木注释超出可视范围不会引起bump
            var metrics = main_workspace.get_metrics();
            var edge_left = metrics.viewLeft + metrics.absoluteLeft - main_workspace.offset[0];
            var edge_top = metrics.viewTop + metrics.absoluteTop - main_workspace.offset[1];
            var out_of_top_bound = metrics.contentTop < edge_top;
            var out_of_left_bound = metrics.contentLeft < (options.RTL ? metrics.viewLeft : edge_left);
            var exceed_height_limit = metrics.contentTop + metrics.contentHeight > metrics.viewHeight + edge_top;
            var exceed_width_limit = metrics.contentLeft + metrics.contentWidth > (options.RTL ? metrics.viewWidth : metrics.viewWidth + edge_left);
            if (out_of_top_bound || out_of_left_bound || exceed_height_limit || exceed_width_limit) {
                var MARGIN = 25; // 积木的图标没有计入积木宽高，为了显示完整，在左侧和上方增加margin
                // One or more blocks may be out of bounds.  Bump them back in.
                var blocks = main_workspace.get_top_elements(false);
                for (var b = 0; b < blocks.length; b++) {
                    var block = blocks[b];
                    var block_xy = block.get_relative_to_surface_xy();
                    var block_hw = block.get_height_width();
                    // Bump any block that's above the top back inside.
                    var overflow_top = edge_top - block_xy[1];
                    if (overflow_top > 0) {
                        block.move_by(gl_matrix_1.vec2.fromValues(0, overflow_top + MARGIN));
                    }
                    // Bump any block that's below the bottom back inside.
                    var overflow_bottom = edge_top + metrics.viewHeight - block_xy[1] - block_hw.height;
                    if (overflow_bottom < 0) {
                        block.move_by(gl_matrix_1.vec2.fromValues(0, overflow_bottom));
                    }
                    // Bump any block that's off the left back inside.
                    var overflow_left = edge_left - block_xy[0] - (options.RTL ? block_hw.width : 0);
                    if (overflow_left > 0) {
                        block.move_by(gl_matrix_1.vec2.fromValues(overflow_left + MARGIN, 0));
                    }
                    // Bump any block that's off the right back inside.
                    var overflow_right = edge_left + metrics.viewWidth - block_xy[0] - (options.RTL ? 0 : block_hw.width);
                    if (overflow_right < 0) {
                        block.move_by(gl_matrix_1.vec2.fromValues(overflow_right, 0));
                    }
                }
            }
        };
        main_workspace.add_change_listener(workspace_changed);
    }
    // 如果使用简化版注释，连接关系的改变可能导致积木所在行的注释图标改变
    if (options.comment_type === 'simplified') {
        var handle_comment_icon = function (e) {
            if (e.type === interfaces_1.BlockEventType.MOVE) {
                var block = main_workspace.get_block_by_id(e.get_block_id());
                if (!block) {
                    return;
                }
                var old_loc = e.get_old_loc();
                var new_loc = e.get_new_loc();
                if (old_loc.parent_id) {
                    // 更新目前所在行
                    var new_root_block = (0, block_1.get_nested_blocks_with_comment)(block)[0];
                    if (new_root_block && new_root_block.comment && new_root_block.rendered) {
                        new_root_block.comment.init_svg(true);
                    }
                    // 更新断开连接前所在行
                    var old_parent = main_workspace.get_block_by_id(old_loc.parent_id);
                    if (!old_parent) {
                        return;
                    }
                    var outer_block = (0, block_1.get_outer_block)(old_parent);
                    var root_block = (0, block_1.get_nested_blocks_with_comment)(outer_block)[0];
                    if (root_block && root_block.comment && root_block.rendered) {
                        root_block.comment.init_svg(true);
                    }
                }
                if (new_loc.parent_id) {
                    var outer_block = (0, block_1.get_outer_block)(block);
                    var root_block = (0, block_1.get_nested_blocks_with_comment)(outer_block)[0];
                    if (root_block && root_block.comment && root_block.rendered) {
                        root_block.comment.init_svg(true);
                    }
                }
            }
        };
        main_workspace.add_change_listener(handle_comment_icon);
    }
    // The SVG is now fully assembled.
    blink.utils.svg_resize(main_workspace);
    blink.widget_div.create_dom();
    if (options.tooltip) {
        blink.tooltip.create_dom();
    }
    if (options.pinch) {
        blink.runtime_data.register_finger_events();
    }
    else {
        blink.runtime_data.cancel_gesture_when_multi_touch();
    }
    if (options.degrade_translate) {
        main_workspace.degrade_translate = options.degrade_translate;
    }
    if (options.timer) {
        blink.timer = new timer_handler_1.TimerHandler();
    }
    return main_workspace;
}
