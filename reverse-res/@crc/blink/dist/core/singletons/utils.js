"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var en_1 = require("../../msg/en");
var zh_hans_1 = require("../../msg/zh-hans");
var zh_hant_1 = require("../../msg/zh-hant");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var array_1 = require("../utils/array");
var maths_1 = require("../utils/maths");
var base_1 = require("../utils/base");
var utils_1 = require("../utils");
/**
 * Static regex to pull the x,y values out of an SVG translate() directive.
 * Note that Firefox and IE (9,10) return 'translate(12)' instead of
 * 'translate(12, 0)'.
 * Note that IE (9,10) returns 'translate(16 8)' instead of 'translate(16, 8)'.
 * Note that IE has been reported to return scientific notation (0.123456e-42).
 */
var XY_REGEX = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
/**
 * Static regex to pull the x,y,z values out of a translate3d() style property.
 * Accounts for same exceptions as XY_REGEXP_.
 * iOS 15.4 returns 'translate(10px)' if y value is zero.
 */
var XY_2D_REGEX = /transform:\s*translate\(\s*([-+\d.e]+)px(([ ,]\s*([-+\d.e]+)\s*)px)*\)?/;
/**
 * Static regex to pull the x,y,z values out of a translate3d() style property.
 * Accounts for same exceptions as XY_REGEXP_.
 */
var XY_3D_REGEX = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
/**
 * Static regex to pull the scale values out of a transform style property.
 * Accounts for same exceptions as XY_REGEXP_.
 */
var SCALE_REGEXP = /scale\(\s*([-+\d.e]+)\s*\)/;
var Utils = /** @class */ (function () {
    function Utils() {
        var _this = this;
        this.is_3d_supported_cached_ = undefined;
        this.string_to_dom = function (xml_string) {
            if (window.ActiveXObject) {
                var xml_object = new window.ActiveXObject('Microsoft.XMLDOM');
                xml_object.async = 'false';
                xml_object.loadXML(xml_string);
                return xml_object;
            }
            var parser = new DOMParser();
            var dom = parser.parseFromString(xml_string, 'text/xml');
            // 使用'text/xml'生成的dom是一个body，传入的string会成为其第一个child
            if (!dom ||
                !dom.firstChild ||
                dom.firstChild !== dom.lastChild) {
                console.error('string_to_dom did not obtain a valid XML tree.');
            }
            return dom.firstChild;
        };
        /**
         * 模版shadow dom，在第一次使用时生成。
         */
        this.cached_shadow_dom = new Map();
        /**
         * 模版shadow string。
         */
        this.shadow_type_map = {
            text: "<shadow type=\"text\"><field name=\"TEXT\"></field></shadow>",
            math_number: "<shadow type=\"math_number\"><field name=\"NUM\"></field></shadow>",
            logic_empty: '<empty type="logic_empty"><field name="BOOL"></field></empty>',
            lists_get: "<shadow type=\"lists_get\"><field name=\"VAR\"></field></shadow>",
        };
        this.get_shadow_dom = function (type, value, dom_attrs, field_attrs) {
            var _a;
            var dom = (_a = _this.cached_shadow_dom.get(_this.shadow_type_map[type])) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
            if (!dom) {
                dom = _this.string_to_dom(_this.shadow_type_map[type]);
                _this.cached_shadow_dom.set(_this.shadow_type_map[type], dom);
            }
            if (dom_attrs) {
                Object.keys(dom_attrs).forEach(function (attr) {
                    dom.setAttribute(attr, dom_attrs[attr]);
                });
            }
            if (dom.firstElementChild) {
                if (value != undefined) {
                    dom.firstElementChild.textContent = value;
                }
                if (field_attrs) {
                    Object.keys(field_attrs).forEach(function (attr) {
                        dom.firstElementChild.setAttribute(attr, field_attrs[attr]);
                    });
                }
            }
            return dom;
        };
        this.try_parse_shadow = function (xml_string) {
            var _a = xml_string.match(/^<shadow[^<]+type="([^"]+)"[^>]*>[^<]*<field[^>]*>(.*)<\/field>[^<]*<\/shadow>$/) ||
                xml_string.match(/^<empty[^<]+type="([^"]+)"/) ||
                [], shadow_type = _a[1], value = _a[2];
            if (!shadow_type || !_this.shadow_type_map[shadow_type]) {
                return undefined;
            }
            return _this.get_shadow_dom(shadow_type, value, _this.parse_attrs((xml_string.match(/^<shadow ([^>]*)>/) ||
                xml_string.match(/^<empty ([^>]*)>/) ||
                [])[1]), _this.parse_attrs((xml_string.match(/<field ([^>]*)>/) || [])[1]));
        };
        this.string_to_dom_with_shadow_cache = function (xml_string) {
            var xml = _this.try_parse_shadow(xml_string);
            if (xml) {
                return xml;
            }
            xml = _this.string_to_dom(xml_string);
            if (!xml) {
                throw Error("Cannot convert string to xml. " + xml_string);
            }
            return xml;
        };
        /**
         * Number of current references to cache.
         */
        this.cache_reference = 0;
        this.cached_widths = new Map();
        this.cached_style = '';
    }
    Utils.prototype.hide_chaff = function (opt_allow_toolbox, opt_no_animate) {
        for (var _i = 0, _a = this.runtime_data.hide_chaff_effects; _i < _a.length; _i++) {
            var hide_event = _a[_i];
            hide_event();
        }
        this.widget_div.hide(opt_no_animate);
        if (!opt_allow_toolbox) {
            var workspace = this.workspace_db.current;
            var toolbox_ = workspace && workspace.get_toolbox();
            if (toolbox_ &&
                toolbox_.flyout &&
                toolbox_.flyout.is_auto_close()) {
                toolbox_.clear_selection();
            }
        }
    };
    Utils.prototype.gen_uid = function () {
        return (0, maths_1.gen_uid)();
    };
    Utils.prototype.is_3d_supported = function () {
        if (this.is_3d_supported_cached_ != undefined) {
            return this.is_3d_supported_cached_;
        }
        // CC-BY-SA Lorenzo Polidori
        // stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        if (!window.getComputedStyle) {
            return false;
        }
        var el = document.createElement('p');
        var has3d = 'none';
        var transforms = {
            'webkitTransform': '-webkit-transform',
            'OTransform': '-o-transform',
            'msTransform': '-ms-transform',
            'MozTransform': '-moz-transform',
            'transform': 'transform',
        };
        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);
        for (var t in transforms) {
            if (el.style.getPropertyValue(transforms[t]) != undefined) {
                el.style.setProperty(transforms[t], 'translate3d(1px,1px,1px)');
                var computedStyle = window.getComputedStyle(el);
                if (!computedStyle) {
                    // getComputedStyle in Firefox returns undefined when blockly is loaded
                    // inside an iframe with display: none.  Returning false and not
                    // caching is_3d_supported means we try again later.  This is most likely
                    // when users are interacting with blocks which should mean blockly is
                    // visible again.
                    // See https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                    document.body.removeChild(el);
                    return false;
                }
                has3d = computedStyle.getPropertyValue(transforms[t]);
            }
        }
        document.body.removeChild(el);
        this.is_3d_supported_cached_ = has3d !== 'none';
        return this.is_3d_supported_cached_;
    };
    Utils.prototype.run_after_page_load = function (fn) {
        if (!document) {
            throw new Error('Blockly.utils.run_after_page_load() requires browser document.');
        }
        if (document.readyState === 'complete') {
            fn(); // Page has already loaded. Call immediately.
        }
        else {
            // Poll readyState.
            var readyStateCheckInterval_1 = setInterval(function () {
                if (document.readyState === 'complete') {
                    clearInterval(readyStateCheckInterval_1);
                    fn();
                }
            }, 10);
        }
    };
    Utils.prototype.svg_resize = function (workspace) {
        var mainWorkspace = workspace;
        var next_workspace = mainWorkspace.get_options().parentWorkspace;
        while (next_workspace) {
            mainWorkspace = next_workspace;
            next_workspace = mainWorkspace.get_options().parentWorkspace;
        }
        var svg = mainWorkspace.get_parent_svg();
        var injection_div = mainWorkspace.get_injection_div();
        if (!injection_div) {
            // Workspace deleted, or something.
            return;
        }
        var toolbox = mainWorkspace.get_toolbox();
        var offset_width = (toolbox === null || toolbox === void 0 ? void 0 : toolbox.get_width()) || 0;
        var offset_height = (toolbox === null || toolbox === void 0 ? void 0 : toolbox.get_height()) || 0;
        var flyout = mainWorkspace.get_flyout();
        if (flyout && flyout.is_visible() && !flyout.is_auto_close()) {
            offset_width += flyout.get_width();
        }
        var wrapper_width = injection_div.offsetWidth;
        var wrapper_height = injection_div.offsetHeight;
        if (wrapper_width < offset_width || wrapper_height < offset_height) {
            return;
        }
        var svg_width = wrapper_width;
        if (mainWorkspace.options.toolboxPosition === interfaces_1.TOOLBOX_POSITION.LEFT) {
            svg_width -= offset_width;
            mainWorkspace.offset[0] = offset_width;
        }
        if (mainWorkspace.options.toolboxPosition === interfaces_1.TOOLBOX_POSITION.RIGHT) {
            svg_width -= offset_width;
        }
        var svg_height = wrapper_height;
        if (mainWorkspace.options.toolboxPosition === interfaces_1.TOOLBOX_POSITION.TOP) {
            svg_height -= offset_height;
            mainWorkspace.offset[1] = offset_height;
        }
        if (mainWorkspace.options.toolboxPosition === interfaces_1.TOOLBOX_POSITION.BOTTOM) {
            svg_height -= offset_height;
        }
        if (svg.cachedWidth_ != svg_width) {
            svg.setAttribute('width', svg_width + "px");
            svg.cachedWidth_ = svg_width;
        }
        if (svg.cachedHeight_ != svg_height) {
            svg.setAttribute('height', svg_height + "px");
            svg.cachedHeight_ = svg_height;
        }
        mainWorkspace.resize();
        this.set_transform_style(svg, workspace.offset[0], workspace.offset[1]);
    };
    Utils.prototype.set_language = function (lang) {
        if (lang === void 0) { lang = 'zh'; }
        switch (lang) {
            case 'en': {
                Object.assign(this.Msg, en_1.en);
                break;
            }
            case 'zh': {
                Object.assign(this.Msg, zh_hans_1.zh_hans);
                break;
            }
            case 'tw': {
                Object.assign(this.Msg, zh_hant_1.zh_hant);
                break;
            }
        }
    };
    Utils.prototype.get_scale = function (element) {
        var scale = 1;
        var transform = element.getAttribute('transform');
        if (transform != undefined) {
            var transformComponents = transform.match(SCALE_REGEXP);
            if (transformComponents && transformComponents[1]) {
                scale = parseFloat(transformComponents[1]);
            }
        }
        return scale;
    };
    Utils.prototype.get_relative_xy = function (element) {
        var xy = gl_matrix_1.vec2.create();
        // First, check for x and y attributes.
        var x = element.getAttribute('x');
        var y = element.getAttribute('y');
        if (x) {
            xy[0] = parseInt(x, 10);
        }
        if (y) {
            xy[1] = parseInt(y, 10);
        }
        // Second, check for transform="translate(...)" attribute.
        var transform = element.getAttribute('transform');
        var r = transform != undefined && transform.match(XY_REGEX);
        if (r) {
            xy[0] += parseFloat(r[1]);
            if (r[3]) {
                xy[1] += parseFloat(r[3]);
            }
        }
        // Then check for style = transform: translate(...) or translate3d(...)
        var style = element.getAttribute('style');
        if (style && style.indexOf('translate') > -1) {
            var style_components = style.match(XY_2D_REGEX);
            if (style_components) {
                xy[0] += parseFloat(style_components[1]);
                if (style_components[4]) {
                    xy[1] += parseFloat(style_components[4]);
                }
            }
            else {
                // Try transform3d if 2d transform wasn't there.
                style_components = style.match(XY_3D_REGEX);
                if (style_components) {
                    xy[0] += parseFloat(style_components[1]);
                    if (style_components[3]) {
                        xy[1] += parseFloat(style_components[3]);
                    }
                }
            }
        }
        return xy;
    };
    Utils.prototype.get_injection_div_xy = function (element) {
        var root_xy = gl_matrix_1.vec2.create();
        var el = element;
        while (el instanceof Element) {
            var rxy = this.get_relative_xy(el);
            var scale = this.get_scale(el);
            gl_matrix_1.vec2.scaleAndAdd(root_xy, rxy, root_xy, scale);
            var classes = el.getAttribute('class') || '';
            if ((" " + classes + " ").indexOf(" " + "injectionDiv" /* INJECTION_DIV */ + " ") != -1) {
                break;
            }
            el = el.parentNode;
        }
        return root_xy;
    };
    Utils.prototype.common_word_suffix = function (array) {
        if (!array.length) {
            return 0;
        }
        if (array.length == 1) {
            return array[0].length;
        }
        var word_suffix = 0;
        var len = 0;
        var max = (0, array_1.shortest_string_length)(array);
        for (; len < max; len++) {
            var letter = array[0].substr(-len - 1, 1);
            for (var i = 1; i < array.length; i++) {
                if (letter != array[i].substr(-len - 1, 1)) {
                    return word_suffix;
                }
            }
            if (letter == ' ') {
                word_suffix = len + 1;
            }
        }
        for (var i = 1; i < array.length; i++) {
            var letter = array[i].charAt(array[i].length - len - 1);
            if (letter && letter != ' ') {
                return word_suffix;
            }
        }
        return max;
    };
    Utils.prototype.common_word_prefix = function (array) {
        if (!array.length) {
            return 0;
        }
        if (array.length == 1) {
            return array[0].length;
        }
        var wordPrefix = 0;
        var len = 0;
        var max = (0, array_1.shortest_string_length)(array);
        for (; len < max; len++) {
            var letter = array[0][len];
            for (var i = 1; i < array.length; i++) {
                if (letter != array[i][len]) {
                    return wordPrefix;
                }
            }
            if (letter == ' ') {
                wordPrefix = len + 1;
            }
        }
        for (var i = 1; i < array.length; i++) {
            var letter = array[i][len];
            if (letter && letter != ' ') {
                return wordPrefix;
            }
        }
        return max;
    };
    Utils.prototype.is_target_input = function (e) {
        var target = e.target;
        return target.type == 'textarea' || target.type == 'text' ||
            target.type == 'number' || target.type == 'email' ||
            target.type == 'password' || target.type == 'search' ||
            target.type == 'tel' || target.type == 'url' ||
            target.isContentEditable;
    };
    Utils.prototype.check_message_references = function (message) {
        var isValid = true; // True until a bad reference is found.
        var regex = /%{BKY_([a-zA-Z][a-zA-Z0-9_]*)}/g;
        var match = regex.exec(message);
        while (match) {
            var msgKey = match[1];
            if (this.Msg[msgKey] == undefined) { // this.Blockly === window.Blockly，这写法很奇怪
                console.warn("WARNING: No message string for %{BKY_" + msgKey + "}.");
                isValid = false;
            }
            // Re-run on remainder of string.
            message = message.substring(match.index + msgKey.length + 1);
            match = regex.exec(message);
        }
        return isValid;
    };
    /**
     * Return the converted coordinates of the given mouse event.
     * The origin (0,0) is the top-left corner of the Blockly SVG.
     *
     * @param  e Mouse event.
     * @param svg SVG element.
     * @param matrix Inverted screen CTM to use.
     * @returns Object with .x and .y properties.
     */
    Utils.prototype.mouse_to_svg = function (e, svg, matrix) {
        var svgPoint = svg.createSVGPoint();
        svgPoint.x = e.clientX;
        svgPoint.y = e.clientY;
        if (!matrix) {
            var screen_ctm = svg.getScreenCTM();
            matrix = screen_ctm.inverse();
        }
        return svgPoint.matrixTransform(matrix);
    };
    Utils.prototype.is_right_button = function (e) {
        if (e.ctrlKey && utils_1.is.mac()) {
            // Control-clicking on Mac OS X is treated as a right-click.
            // WebKit on Mac OS X fails to change button to 2 (but Gecko does).
            return true;
        }
        return e.button == 2;
    };
    Utils.prototype.confirm = function (message, callback) {
        callback(window.confirm(message));
    };
    Utils.prototype.replace_message_references = function (message) {
        return this.tokenize_interpolation(message).reduce(function (p, c) { return (typeof c === 'number' ? p + "%" + c : "" + p + c); }, '');
    };
    Utils.prototype.tokenize_interpolation = function (message) {
        var tokens = [];
        var chars = message.split('');
        chars.push(''); // End marker.
        // Parse the message with a finite state machine.
        var state = interfaces_1.TokenizationState.BaseCase;
        var buffer = [];
        var number_ = '';
        var text = '';
        for (var i = 0; i < chars.length; i++) {
            var c = chars[i];
            switch (state) {
                case interfaces_1.TokenizationState.BaseCase:
                    if (c === '%') {
                        text = buffer.join('');
                        if (text) {
                            tokens.push(text);
                        }
                        buffer.length = 0;
                        state = interfaces_1.TokenizationState.PercentFound; // Start escape.
                        break;
                    }
                    buffer.push(c); // Regular char.
                    break;
                case interfaces_1.TokenizationState.PercentFound:
                    if (c === '%') {
                        buffer.push(c); // Escaped %: %%
                        state = interfaces_1.TokenizationState.BaseCase;
                        break;
                    }
                    if ('0' <= c && c <= '9') {
                        state = interfaces_1.TokenizationState.DigitFound;
                        number_ = c;
                        text = buffer.join('');
                        if (text) {
                            tokens.push(text);
                        }
                        buffer.length = 0;
                        break;
                    }
                    if (c == '{') {
                        state = interfaces_1.TokenizationState.MsgRefFound;
                        break;
                    }
                    buffer.push('%', c); // Not recognized. Return as literal.
                    state = interfaces_1.TokenizationState.BaseCase;
                    break;
                case interfaces_1.TokenizationState.DigitFound:
                    if ('0' <= c && c <= '9') {
                        number_ += c; // Multi-digit number.
                        break;
                    }
                    tokens.push(parseInt(number_, 10));
                    i--; // Parse this char again.
                    state = interfaces_1.TokenizationState.BaseCase;
                    break;
                case interfaces_1.TokenizationState.MsgRefFound: // String table reference
                    if (c === '') {
                        // Premature end before closing '}'
                        buffer.splice(0, 0, '%{'); // Re-insert leading delimiter
                        i--; // Parse this char again.
                        state = interfaces_1.TokenizationState.BaseCase; // and parse as string literal.
                        break;
                    }
                    if (c !== '}') {
                        buffer.push(c);
                        break;
                    }
                    // Found '%{xxx}'
                    var raw_key = buffer.join('');
                    if (/[A-Z]\w*/i.test(raw_key)) { // Strict matching
                        // Found a valid string key. Attempt case insensitive match.
                        var key_upper = raw_key.toUpperCase();
                        // BKY_ is the prefix used to namespace the strings used in Blockly
                        // core files and the predefined blocks in ../blocks/. These strings
                        // are defined in src/core/messages or src/core/singletons/theme
                        var bky_key = key_upper.startsWith('BKY_') ? key_upper.substring(4) : undefined;
                        var raw_value = (bky_key && bky_key in this.Msg) ? this.Msg[bky_key] : undefined;
                        if (raw_value !== undefined) {
                            // Found key in msg.
                            if ((0, base_1.is_string)(raw_value)) {
                                // Attempt to dereference substrings, too, appending to the end.
                                Array.prototype.push.apply(tokens, this.tokenize_interpolation(raw_value));
                            }
                            else {
                                // When parsing interpolation tokens, numbers are special
                                // placeholders (%1, %2, etc). Make sure all other values are
                                // strings.
                                tokens.push(String(raw_value));
                            }
                        }
                        else {
                            // No entry found in the string table. Pass reference as string.
                            tokens.push("%{" + raw_key + "}");
                        }
                        buffer.length = 0; // Clear the array
                        state = interfaces_1.TokenizationState.BaseCase;
                    }
                    else {
                        tokens.push("%{" + raw_key + "}");
                        buffer.length = 0;
                        state = interfaces_1.TokenizationState.BaseCase; // and parse as string literal.
                    }
                    break;
            }
        }
        text = buffer.join('');
        if (text) {
            tokens.push(text);
        }
        // Merge adjacent text tokens into a single string.
        var merged_tokens = [];
        buffer.length = 0;
        for (var j = 0; j < tokens.length; ++j) {
            if (typeof tokens[j] === 'string') {
                buffer.push(tokens[j]);
            }
            else {
                text = buffer.join('');
                if (text) {
                    merged_tokens.push(text);
                }
                buffer.length = 0;
                merged_tokens.push(tokens[j]);
            }
        }
        text = buffer.join('');
        if (text) {
            merged_tokens.push(text);
        }
        buffer.length = 0;
        return merged_tokens;
    };
    Utils.prototype.get_svg_size = function (svg) {
        return {
            width: svg.cachedWidth_,
            height: svg.cachedHeight_,
        };
    };
    Utils.prototype.set_transform_style = function (element, x, y, scale) {
        if (typeof x !== 'number' && typeof y !== 'number' && typeof scale !== 'number') {
            return;
        }
        // 在safari中，svg标签的transform属性不生效，只能通过style.transform更改位置。
        // https://stackoverflow.com/questions/48248512/svg-transform-rotate180-does-not-work-in-safari-11
        // 因此该方法统一使用style.transform。
        var DEFAULT_TRANSFORM = 'translate(0px, 0px) scale(1)';
        var origin_transform = element.style.transform || element.style.webkitTransform || DEFAULT_TRANSFORM;
        var transform = origin_transform;
        if (typeof x === 'number' || typeof y === 'number') {
            var old_position = gl_matrix_1.vec2.fromValues(0, 0);
            var r = transform != undefined && transform.match(XY_REGEX);
            if (r) {
                old_position[0] = parseFloat(r[1]);
                old_position[1] = parseFloat(r[3]);
            }
            var new_x = typeof x === 'number' ? x : old_position[0];
            var new_y = typeof y === 'number' ? y : old_position[1];
            if (new_x !== old_position[0] || new_y !== old_position[1]) {
                var new_translate = "translate(" + new_x + "px, " + new_y + "px)";
                transform = transform.replace(/translate\([^)]+\)/, new_translate);
            }
        }
        if (typeof scale === 'number') {
            transform = transform.replace(/scale\([^)]+\)/, "scale(" + scale + ")");
        }
        if (transform === origin_transform) {
            return;
        }
        element.style.transform = transform;
        element.style.webkitTransform = transform;
    };
    Utils.prototype.parse_attrs = function (attrs_str) {
        var attrs = {};
        if (!attrs_str) {
            return attrs;
        }
        try {
            var pairs = attrs_str.split(/\s/);
            pairs.forEach(function (pair) {
                // 如果遇到 '<empty type="xxx" />'格式，则最后一个pair可能为 '/'，直接忽略
                if (pair.length < 2) {
                    return;
                }
                // 都为 a="b" 格式
                var _a = pair.split('='), name = _a[0], value = _a[1];
                attrs[name] = value.slice(1, value.length - 1);
            });
        }
        catch (e) {
            console.error("Parsing shadow attribute error: " + e);
        }
        return attrs;
    };
    Utils.prototype.dom_to_string = function (dom) {
        var o_serializer = new XMLSerializer();
        return o_serializer.serializeToString(dom);
    };
    Utils.prototype.start_text_cache = function () {
        this.cache_reference++;
    };
    Utils.prototype.stop_text_cache = function () {
        this.cache_reference--;
        if (!this.cache_reference) {
            this.cached_widths.clear();
            this.cached_style = '';
        }
    };
    Utils.prototype.measure_text = function (text, font_style) {
        if (!this.canvas_context) {
            var canvas = document.createElement('canvas');
            canvas.style.display = 'none';
            document.body.appendChild(canvas);
            this.canvas_context = canvas.getContext('2d');
        }
        this.canvas_context.font = font_style;
        return this.canvas_context.measureText(text).width;
    };
    Utils.prototype.get_cached_width = function (text_element) {
        var _this = this;
        var key = text_element.textContent + "\n" + text_element.className.baseVal;
        var width = this.cached_widths.get(key) || 0;
        // Return the cached width if it exists.
        if (width) {
            return width;
        }
        // Attempt to compute fetch the width of the SVG text element.
        try {
            if (!this.cached_style) {
                var set_cached_style = function (element) {
                    var computed_style = window.getComputedStyle(element);
                    _this.cached_style = computed_style.fontWeight + " " + computed_style.fontSize + " " + computed_style.fontFamily;
                };
                if (document.body.contains(text_element)) {
                    set_cached_style(text_element);
                }
                else {
                    var target_element = text_element;
                    while (target_element.parentNode && target_element.tagName.toLowerCase() !== 'text') {
                        target_element = target_element.parentNode;
                    }
                    var cloned_node = target_element.cloneNode(true);
                    document.body.appendChild(cloned_node);
                    set_cached_style(cloned_node);
                    document.body.removeChild(cloned_node);
                }
            }
            width = this.measure_text(text_element.textContent || '', this.cached_style);
        }
        catch (e) {
            console.warn(e);
            // MSIE 11 and Edge are known to throw "Unexpected call to method or
            // property access." if the block is hidden. Instead, use an
            // approximation and do not cache the result. At some later point in time
            // when the block is inserted into the visible DOM, this method will be
            // called again and, at that point in time, will not throw an exception.
            var content = text_element.textContent;
            return content == undefined ? 0 : content.length * 8;
        }
        // Cache the computed width and return.
        this.cached_widths.set(key, width);
        return width;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Msg)
    ], Utils.prototype, "Msg", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], Utils.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], Utils.prototype, "widget_div", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], Utils.prototype, "workspace_db", void 0);
    Utils = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Utils);
    return Utils;
}());
exports.Utils = Utils;
