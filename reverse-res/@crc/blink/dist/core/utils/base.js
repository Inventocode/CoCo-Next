"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge_deep = exports.debounce = exports.throttle = exports.is_workspace = exports.is_old_dropdown_option = exports.is_comment_theme = exports.is_field_mutation = exports.is_field_dropdown = exports.is_field_default_value = exports.is_field_text_input = exports.is_field_number = exports.is_workspace_comment = exports.is_block_group = exports.is_block_svg = exports.is_valid_color = exports.parse_attr_deep = exports.clone_deep = exports.obj_for_each = exports.unique_id = exports.is_array_like = exports.is_number = exports.is_nil = exports.is_array = exports.is_object = exports.is_func = exports.is_string = exports.BrowserFeature = void 0;
var tslib_1 = require("tslib");
var cloneDeep = (0, tslib_1.__importStar)(require("lodash.clonedeep"));
var interfaces_1 = require("../interfaces");
/**
 * Reference to the global context.  In most cases this will be 'window'.
 * @const
 */
exports.BrowserFeature = {
    /**
     * Whether touch is enabled in the browser.
     */
    TOUCH_ENABLED: 'ontouchstart' in window ||
        !!(document && document.documentElement &&
            'ontouchstart' in document.documentElement) ||
        // IE10 uses non-standard touch events, so it has a different check.
        !!(navigator && (navigator['maxTouchPoints'] || navigator['msMaxTouchPoints'])),
};
function is_string(val) {
    return typeof val == 'string' || val instanceof String;
}
exports.is_string = is_string;
function is_func(val) {
    return val && {}.toString.call(val) === '[object Function]';
}
exports.is_func = is_func;
/**
 * Returns true if the specified value is an object.  This includes arrays and
 * functions.
 *
 * @param val Variable to test.
 * @returns Whether variable is an object.
 */
function is_object(val) {
    var type = typeof val;
    return type == 'object' && val != undefined || type == 'function';
    // return Object(val) === val also works, but is slower, especially if val is
    // not an object.
}
exports.is_object = is_object;
/**
 * Returns true if the specified value is an array.
 *
 * @param val Variable to test.
 * @returns Whether variable is an array.
 */
function is_array(val) {
    return Array.isArray(val);
}
exports.is_array = is_array;
function is_nil(val) {
    return val === undefined || val === null;
}
exports.is_nil = is_nil;
function is_number(val) {
    return typeof val == 'number';
}
exports.is_number = is_number;
function is_array_like(val) {
    return val != null && is_length(val.length) && !is_func(val);
}
exports.is_array_like = is_array_like;
function is_length(val) {
    return typeof val == 'number' &&
        val > -1 && val % 1 == 0 && val <= Number.MAX_SAFE_INTEGER;
}
var idCounter = 0;
function unique_id(prefix) {
    var id = ++idCounter;
    return prefix.toString() + id;
}
exports.unique_id = unique_id;
function obj_for_each(obj, iteratee) {
    if (!is_object(obj)) {
        throw new Error('param is not a Object');
    }
    var key_list = Object.keys(obj);
    for (var i = 0; i < key_list.length; i++) {
        var key = key_list[i];
        var val = obj[key];
        iteratee(val, key);
    }
}
exports.obj_for_each = obj_for_each;
function clone_deep(obj) {
    if (cloneDeep.default) {
        return cloneDeep.default(obj);
    }
    return cloneDeep(obj);
}
exports.clone_deep = clone_deep;
function parse_attr_deep(default_attr, target_attr) {
    if (!target_attr) {
        return default_attr;
    }
    var result = clone_deep(default_attr);
    for (var key in result) {
        var target = target_attr[key];
        if (target == undefined) {
            continue;
        }
        var item = default_attr[key];
        if (is_object(item) && !is_array(item) && !is_func(item)) {
            result[key] = parse_attr_deep(item, target);
            continue;
        }
        result[key] = target;
    }
    return result;
}
exports.parse_attr_deep = parse_attr_deep;
function is_valid_color(color) {
    var span = document.createElement('span');
    span.style.color = color;
    return span.style.color !== '';
}
exports.is_valid_color = is_valid_color;
/**
 * @return whether the input element is a [BlockSvg **or BlockGroup**] or not.
 */
function is_block_svg(element) {
    return !!element && typeof element.type && (element.element_type === 'block' || element.element_type == 'block_group' || element.element_type === 'param' || element.element_type === 'param_color');
}
exports.is_block_svg = is_block_svg;
function is_block_group(element) {
    return !!element && typeof element.type && (element.element_type == 'block_group');
}
exports.is_block_group = is_block_group;
function is_workspace_comment(element) {
    return !!element && element.element_type === 'comment';
}
exports.is_workspace_comment = is_workspace_comment;
function is_field_number(field) {
    return (field === null || field === void 0 ? void 0 : field.field_type) === 'FieldNumber';
}
exports.is_field_number = is_field_number;
function is_field_text_input(field) {
    return field.field_type === 'FieldTextInput';
}
exports.is_field_text_input = is_field_text_input;
function is_field_default_value(field) {
    return field.field_type === 'FieldDefaultValue';
}
exports.is_field_default_value = is_field_default_value;
function is_field_dropdown(field) {
    return (field === null || field === void 0 ? void 0 : field.field_type) === 'FieldDropdown';
}
exports.is_field_dropdown = is_field_dropdown;
function is_field_mutation(field) {
    return (field === null || field === void 0 ? void 0 : field.field_type) === 'FieldMutation';
}
exports.is_field_mutation = is_field_mutation;
function is_comment_theme(color) {
    return color && Object.keys(interfaces_1.THEME_COLOR_MAP).includes(color);
}
exports.is_comment_theme = is_comment_theme;
function is_old_dropdown_option(option) {
    return !!option && !option.type;
}
exports.is_old_dropdown_option = is_old_dropdown_option;
function is_workspace(flyout_or_workspace) {
    return !!flyout_or_workspace.add_flyout;
}
exports.is_workspace = is_workspace;
function throttle(fn, delay) {
    var prev = Date.now();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (now - prev >= delay) {
            fn.apply(undefined, args);
            prev = now;
        }
    };
}
exports.throttle = throttle;
function debounce(fn, wait) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = window.setTimeout(function () {
            fn.apply(undefined, args);
        }, wait);
    };
}
exports.debounce = debounce;
/**
 * Perform a deep merge of objects. Return a new object without changing the target object.
 * @param target Target object that needs to be merged with the supplied source.
 * @param source Source object that will be used to update the target.
 */
function merge_deep(target, source) {
    var result = clone_deep(target);
    for (var key in source) {
        if (source[key] != null && is_object(source[key])) {
            result[key] = merge_deep(result[key] || Object.create(null), source[key]);
        }
        else {
            result[key] = source[key];
        }
    }
    return result;
}
exports.merge_deep = merge_deep;
