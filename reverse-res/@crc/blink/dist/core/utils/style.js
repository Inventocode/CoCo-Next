"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjust_bboxes_for_rtl = exports.get_computed_style = exports.get_style = exports.get_size = exports.get_viewport_page_offset = void 0;
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var dom_1 = require("./dom");
var is_1 = require("./is");
/**
 * Calculates the viewport coordinates relative to the
 *  page/document containing the node. The viewport may be
 * the browser viewport for non-iframe document, or the
 *  iframe container for iframe'd document.
 *
 * @export
 * @param {Document} doc The document to use as the reference point.
 * @returns The page offset of the viewport.
 */
function get_viewport_page_offset(doc) {
    var body = doc.body;
    var documentElement = doc.documentElement;
    var scrollLeft = body.scrollLeft || documentElement.scrollLeft;
    var scrollTop = body.scrollTop || documentElement.scrollTop;
    return gl_matrix_1.vec2.fromValues(scrollLeft, scrollTop);
}
exports.get_viewport_page_offset = get_viewport_page_offset;
/**
 * Gets the height and width of an element, even if its display is none.
 *
 * Specifically, this returns the height and width of the border box,
 * irrespective of the box model in effect.
 *
 * Note that this function does not take CSS transforms into account. Please see `goog.style.getTransformedSize`.
 *
 * @export
 * @param {Element} element Element to get size of.
 * @return Object with width/height properties.
 */
function get_size(element) {
    return evaluate_with_temprorary_display(get_size_with_display, element);
}
exports.get_size = get_size;
/**
 * Call `fn` on `element` such that `element`'s dimensions are
 * accurate when it's passed to `fn`.
 *
 * @param {Function} fn Function to call with `element` as an argument after temporarily changing
 * `element`'s display such that its dimensions are accurate.
 * @param {HTMLElement} element Element (which may have display none) to use as argument to `fn`.
 * @returns Value returned by calling `fn` with `element`.
 */
function evaluate_with_temprorary_display(fn, element) {
    if (get_style(element, 'display') != 'none') {
        return fn(element);
    }
    var style = element.style;
    var originalDisplay = style.display;
    var originalVisibility = style.visibility;
    var originalPosition = style.position;
    style.visibility = 'hidden';
    style.position = 'absolute';
    style.display = 'inline';
    var retVal = fn(element);
    style.display = originalDisplay;
    style.position = originalPosition;
    style.visibility = originalVisibility;
    return retVal;
}
/**
 * Gets the height and width of an element when the display is not none.
 *
 * @param {HTMLElement} element Element to get size of.
 * @returns {Size} Object with width/height properties.
 */
function get_size_with_display(element) {
    var offsetWidth = element.offsetWidth;
    var offsetHeight = element.offsetHeight;
    var webkitOffsetsZero = is_1.is.webkit() && !offsetWidth && !offsetHeight;
    if ((offsetWidth != undefined || webkitOffsetsZero) && element.getBoundingClientRect) {
        // Fall back to calling getBoundingClientRect when offsetWidth or
        // offsetHeight are not defined, or when they are zero in WebKit browsers.
        // This makes sure that we return for the correct size for SVG elements, but
        // will still return 0 on Webkit prior to 534.8, see
        // http://trac.webkit.org/changeset/67252.
        var clientRect = get_bounding_client_rect(element);
        return {
            width: clientRect.right - clientRect.left,
            height: clientRect.bottom - clientRect.top,
        };
    }
    return {
        width: offsetWidth,
        height: offsetHeight,
    };
}
function get_bounding_client_rect(el) {
    return el.getBoundingClientRect();
}
/**
 * Cross-browser pseudo get computed style. It returns the computed style where
 * available. If not available it tries the cascaded style value (IE
 * currentStyle) and in worst case the inline style value.  It shouldn't be
 * called directly, see http://wiki/Main/ComputedStyleVsCascadedStyle for
 * discussion.
 *
 * @param {HTMLElement} element Element to get style of.
 * @param {string} style Property to get (must be camelCase, not css-style.).
 * @returns Style value.
 */
function get_style(element, style) {
    return get_computed_style(element, style) ||
        get_cascaded_style(element, style) ||
        (element.style && element.style[Number(style)]);
}
exports.get_style = get_style;
/**
 * Retrieves a computed style value of a node. It returns empty string if the
 * value cannot be computed (which will be the case in Internet Explorer) or
 * "none" if the property requested is an SVG one and it has not been
 * explicitly set (firefox and webkit).
 *
 * @param {Element} element Element to get style of.
 * @param {string} property Property to get (camel-case).
 * @returns Style value.
 */
function get_computed_style(element, property) {
    var doc = (0, dom_1.get_owner_document)(element);
    if (doc.defaultView && doc.defaultView.getComputedStyle) {
        var styles = doc.defaultView.getComputedStyle(element, undefined);
        if (styles) {
            // element.style[..] is undefined for browser specific styles
            // as 'filter'.
            return styles[Number(property)] || styles.getPropertyValue(property) || '';
        }
    }
    return '';
}
exports.get_computed_style = get_computed_style;
/**
 * Gets the cascaded style value of a node, or undefined if the value cannot be
 * computed (only Internet Explorer can do this).
 *
 * @param {I.AnyObject} element Element to get style of.
 * @param {string} style Property to get (camel-case).
 * @returns Style value.
 */
function get_cascaded_style(element, style) {
    // Element.currentStyle 是一个与 window.getComputedStyle 方法功能相同的属性。这个属性实现在旧版本的 IE 浏览器中.
    return element.currentStyle ? element.currentStyle[style] : undefined;
}
/**
 * Adjust the bounding boxes used to position the widget div to deal with RTL
 * goog.ui.Menu positioning.  In RTL mode the menu renders down and to the left
 * of its start point, instead of down and to the right.  Adjusting all of the
 * bounding boxes accordingly allows us to use the same code for all widgets.
 * This function in-place modifies the provided bounding boxes.
 *
 * @param viewportBBox The bounding rectangle of the current viewport, in window coordinates.
 * @param anchorBBox The bounding rectangle of the anchor, in window coordinates.
 * @param menuSize The size of the menu that is inside the widget div, in window coordinates.
 */
function adjust_bboxes_for_rtl(viewportBBox, anchorBBox, menuSize) {
    anchorBBox.left += menuSize.width;
    anchorBBox.right += menuSize.width;
    viewportBBox.left += menuSize.width;
    viewportBBox.right += menuSize.width;
}
exports.adjust_bboxes_for_rtl = adjust_bboxes_for_rtl;
