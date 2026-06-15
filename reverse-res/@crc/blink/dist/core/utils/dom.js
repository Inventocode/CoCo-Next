"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_num_g = exports.reset_all_block_id = exports.insert_before = exports.insert_after = exports.clone_node = exports.get_size_attr = exports.get_translate = exports.update_visibility_class = exports.add_class_if_necessary = exports.remove_class_if_necessary = exports.is_in_same_shadow = exports.is_inside_shadow = exports.is_parent = exports.xmlstr_to_dom = exports.contains = exports.has_class = exports.get_owner_document = exports.get_viewport_bbox = exports.get_viewport_size = exports.get_document_scroll = exports.remove_children = exports.create_dom = exports.get_page_offset = exports.parse_to_SVG = exports.parse_to_DOM = exports.remove_class = exports.add_class = exports.create_font_icon = exports.create_div_element = exports.create_svg_element = exports.set_css_transform = exports.remove_attribute = exports.remove_node = exports.XLINK_NS = exports.SVG_NS = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var interfaces_1 = require("../interfaces");
var constants_1 = require("../constants");
var style = (0, tslib_1.__importStar)(require("./style"));
var math = (0, tslib_1.__importStar)(require("./maths"));
var base = (0, tslib_1.__importStar)(require("./base"));
var is_1 = require("./is");
// SVG
exports.SVG_NS = 'http://www.w3.org/2000/svg';
// https://www.w3.org/Graphics/SVG/WG/wiki/Href
exports.XLINK_NS = 'http://www.w3.org/1999/xlink';
var XLINK_PREFIX = 'xlink:';
/**
  * Removes a node from its parent.
  *
  * @param {Node} node The node to remove.
  * @returns The node removed if removed; else, undefined.
  */
function remove_node(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
exports.remove_node = remove_node;
/**
 * Remove an attribute from a element even if it's in IE 10.
 * Similar to Element.removeAttribute() but it works on SVG elements in IE 10.
 * Sets the attribute to undefined in IE 10, which treats removeAttribute as a no-op
 * if it's called on an SVG element.
 *
 * @param {Element} element DOM element to remove attribute from.
 * @param {string} attribute_name Name of attribute to remove.
 */
function remove_attribute(element, attribute_name) {
    if (is_1.is.ie('>=10')) {
        element.setAttribute(attribute_name, undefined);
    }
    else {
        element.removeAttribute(attribute_name);
    }
}
exports.remove_attribute = remove_attribute;
/**
 * Set the element transform.
 *
 * @export
 * @param {SVGGraphicsElement} element
 * @param {string} [transform]
 */
function set_css_transform(element, transform) {
    element.style.transform = transform;
    element.style.webkitTransform = transform;
}
exports.set_css_transform = set_css_transform;
/**
 * Helper method for creating SVG elements.
 *
 * @param {string} name Element's tag name.
 * @param {*} attrs Dictionary of attribute names and values.
 * @param {Element} [parent] Optional parent on which to append the element.
 * @returns Newly created SVG element.
 */
function create_svg_element(name, attrs, parent) {
    if (attrs === void 0) { attrs = {}; }
    var el = document.createElementNS(exports.SVG_NS, name);
    for (var key in attrs) {
        if (key.indexOf(XLINK_PREFIX) === 0) {
            var attr = key.slice(XLINK_PREFIX.length);
            el.setAttributeNS(exports.XLINK_NS, attr, attrs[key]);
        }
        else {
            el.setAttribute(key, attrs[key]);
        }
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}
exports.create_svg_element = create_svg_element;
function create_div_element(parent) {
    var ele = document.createElement('div');
    if (parent) {
        parent.appendChild(ele);
    }
    return ele;
}
exports.create_div_element = create_div_element;
function create_font_icon(id, parent) {
    var icon_svg = create_svg_element('svg', { 'fill': 'currentColor' }, parent);
    create_svg_element('use', { 'xlink:href': "#" + id }, icon_svg);
    return icon_svg;
}
exports.create_font_icon = create_font_icon;
/**
 * Add a CSS class to a element.
 * Similar to Closure's goog.dom.classes.add, except it handles SVG elements.
 *
 * @param {Element} element DOM element to add class to.
 * @param {string} class_name Name of class to add.
 * @return {boolean} True if class was added, false if already present.
 */
function add_class(element, class_name) {
    var classes = element.getAttribute('class') || '';
    if ((" " + classes + " ").indexOf(" " + class_name + " ") != -1) {
        return false;
    }
    if (classes) {
        classes += ' ';
    }
    element.setAttribute('class', classes + class_name);
    return true;
}
exports.add_class = add_class;
/**
 * Remove a CSS class from a element.
 * Similar to Closure's goog.dom.classes.remove, except it handles SVG elements.
 *
 * @param {Element} element DOM element to remove class from.
 * @param {string} class_name Name of class to remove.
 * @returns True if class was removed, false if never present.
 */
function remove_class(element, class_name) {
    if (!element || !class_name) {
        return false;
    }
    var classes = element.getAttribute('class');
    if (classes == undefined
        || (" " + classes + " ").indexOf(" " + class_name + " ") == -1) {
        return false;
    }
    var classList = classes.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        if (!classList[i] || classList[i] == class_name) {
            classList.splice(i, 1);
            i--;
        }
    }
    if (classList.length) {
        element.setAttribute('class', classList.join(' '));
    }
    else {
        element.removeAttribute('class');
    }
    return true;
}
exports.remove_class = remove_class;
/**
 * Parse string to DOM.
 *
 * @export
 * @param {string} str
 * @returns DOM element
 */
function parse_to_DOM(str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.firstElementChild;
}
exports.parse_to_DOM = parse_to_DOM;
/**
 * Parse string to SVG
 *
 * @export
 * @param {string} str
 * @returns SVG element
 */
function parse_to_SVG(str) {
    // https://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element
    var div = document.createElementNS(exports.SVG_NS, 'div');
    div.innerHTML = "<svg xmlns=" + exports.SVG_NS + ">" + str + "</svg>";
    var frag = document.createDocumentFragment();
    while (div.firstChild && div.firstChild.firstChild) {
        frag.appendChild(div.firstChild.firstChild);
    }
    return frag;
}
exports.parse_to_SVG = parse_to_SVG;
/**
 * Get position relative to the viewport of el.
 *
 * @export
 * @param {(HTMLElement|BkySVGElement)} el
 * @returns position relative to the viewport of el
 */
function get_page_offset(el) {
    var box = el.getBoundingClientRect();
    var pos = gl_matrix_1.vec2.fromValues(box.left, box.top);
    return pos;
}
exports.get_page_offset = get_page_offset;
/**
 * Returns a dom node with a set of attributes.
 * This function accepts varargs for subsequent nodes to be added.
 * Subsequent nodes will be added to the first node as childNodes.
 *
 * So:
 * <code>create_dom(goog.dom.TagName.DIV, undefined, create_dom(goog.dom.TagName.P),
 * create_dom(goog.dom.TagName.P));</code> would return a div with two child
 * paragraphs
 *
 * @export
 * @param {string} tag_name Tag to create.
 * @param {*} [opt_attributes] If object, then a map of name-value
 * pairs for attributes. If a string, then this is the className
 * of the new element. If an array, the elements will be joined
 * together as the className of the new element.
 * @param {*} [var_arg] Further DOM nodes or strings for text nodes.
 * If one of the var_args is an array or NodeList, its elements
 * will be added as childNodes instead.
 * @returns Reference to a DOM node.
 */
function create_dom(tag_name, opt_attributes, var_arg) {
    // return create_dom_on(document, arguments);
    tag_name = String(tag_name);
    var attributes = opt_attributes;
    var element = document.createElement(tag_name);
    if (attributes) {
        if (base.is_string(attributes)) {
            element.className = attributes;
        }
        else if (base.is_array(attributes)) {
            element.className = attributes.join(' ');
        }
        else {
            set_properties(element, attributes);
        }
    }
    if (var_arg) {
        append(document, element, [tag_name, opt_attributes, var_arg], 2);
    }
    return element;
}
exports.create_dom = create_dom;
/**
 * Helper for `create_dom`.
 *
 * @export
 * @param {Document} doc The document to create the DOM in.
 * @param {IArguments} args Argument object passed from the
 * callers. Refer to `goog.dom.create_dom` for details.
 * @returns Reference to a DOM node.
 */
// export function create_dom_on(doc:Document, args:IArguments) {
//   const tag_name = String(args[0]);
//   const attributes = args[1];
//   const element = doc.createElement(tag_name);
//   if (attributes) {
//     if (base.is_string(attributes)) {
//       element.className = attributes;
//     } else if (base.is_array(attributes)) {
//       element.className = attributes.join(' ');
//     } else {
//       set_properties(element, attributes);
//     }
//   }
//   if (args.length > 2) {
//     append(doc, element, args, 2);
//   }
//   return element;
// }
/**
 * Sets multiple properties, and sometimes attributes, on an
 * element. Note that properties are simply object properties on
 * the element instance, while attributes are visible in the DOM.
 * Many properties map to attributes with the same names,
 * some with different names, and there are also unmappable cases.
 *
 * This method sets properties by default (which means that
 * custom attributes are not supported).
 * These are the exeptions (some of which is legacy):
 * - "style": Even though this is an attribute name, it is
 * translated to a property, "style.cssText".
 * Note that this property sanitizes and formats its value,
 * unlike the attribute.
 * - "class": This is an attribute name, it is translated to the
 * "className" property.
 *
 * @param {HTMLElement} element DOM node to set properties on.
 * @param {*} properties Hash of property:value pairs.
 */
function set_properties(element, properties) {
    base.obj_for_each(properties, function (val, key) {
        if (val && val.implementsGoogStringTypedString) {
            val = val.getTypedStringValue();
        }
        if (key == 'style') {
            element.style.cssText = val;
        }
        else if (key == 'class') {
            element.className = val;
        }
        else {
            element.setAttribute(key, val);
        }
    });
}
/**
 * Appends a node with text or other nodes.
 *
 * @param {Document} doc The document to create new nodes in.
 * @param {Node} parent The node to append nodes to.
 * @param {IArguments} args The values to add.
 * @param {number} start_index The index of the array to start from.
 */
function append(doc, parent, args, start_index) {
    for (var i = start_index; i < args.length; i++) {
        var arg = args[i];
        if (base.is_array_like(arg) && !is_node_like(arg)) {
            // If the argument is a node list, not a real array, use a clone,
            // because forEach can't be used to mutate a NodeList.
            var arr = is_node_list(arg) ? Array.from(arg) : arg;
            for (var j = 0; j < arr.length; ++j) {
                child_handler(arr[j], doc, parent);
            }
        }
        else {
            child_handler(arg, doc, parent);
        }
    }
}
/**
 * Handler a child for parent node.
 *
 * @param {*} child
 * @param {Document} doc
 * @param {Node} parent
 */
function child_handler(child, doc, parent) {
    if (child) {
        parent.appendChild(base.is_string(child) ? doc.createTextNode(child) : child);
    }
}
/**
 * Returns true if the object is a `NodeList`.  To qualify as a NodeList,
 * the object must have a numeric length property and an item function (which
 * has type 'string' on IE for some reason).
 *
 * @param {*} val Object to test.
 * @returns Whether the object is a NodeList.
 */
function is_node_list(val) {
    // A NodeList must have a length property of type 'number' on all platforms.
    if (val && typeof val.length == 'number') {
        // A NodeList is an object everywhere except Safari, where it's a function.
        if (base.is_object(val)) {
            // A NodeList must have an item function (on non-IE platforms) or an item
            // property of type 'string' (on IE).
            return typeof val.item == 'function' || typeof val.item == 'string';
        }
        else if (base.is_func(val)) {
            // On Safari, a NodeList is a function with an item property that is also
            // a function.
            return typeof (val.item) == 'function';
        }
    }
    // Not a NodeList.
    return false;
}
/**
 * Whether the object looks like a DOM node.
 *
 * @param {*} obj The object being tested for node likeness.
 * @returns Whether the object looks like a DOM node.
 */
function is_node_like(obj) {
    return base.is_object(obj) && obj.nodeType > 0;
}
/**
 * Removes all the child nodes on a DOM node.
 *
 * @param {Node} node Node to remove children from.
 */
function remove_children(node) {
    // NOTE: Iterations over live collections can be slow,
    // this is the fastest we could find.
    // The double parenthesis are used to prevent JsCompiler
    // and strict warnings.
    var child = node.firstChild;
    while (child != undefined) {
        node.removeChild(child);
        child = node.firstChild;
    }
}
exports.remove_children = remove_children;
/**
 * Gets the document scroll distance as a coordinate object.
 *
 * @return {vec2} An vec2 object
 */
function get_document_scroll() {
    var el = get_document_scroll_element(document);
    var win = get_window(document);
    return gl_matrix_1.vec2.fromValues(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop);
}
exports.get_document_scroll = get_document_scroll;
/**
 * Helper for `getDocumentScrollElement`.
 *
 * @param {Document} doc The document to get the scroll element for.
 * @returns Scrolling element.
 */
function get_document_scroll_element(doc) {
    if (doc.scrollingElement) {
        return doc.scrollingElement;
    }
    return doc.body || doc.documentElement;
}
/**
 * Helper for `getWindow`.
 *
 * @param {Document} doc  Document object to get window for.
 * @returns The window associated with the given document.
 */
function get_window(doc) {
    return doc.defaultView;
}
/**
 * Gets the dimensions of the viewport.
 *
 * @returns A Size Object with values 'width' and 'height'.
 */
function get_viewport_size() {
    var doc = window.document;
    var el = doc.body;
    return new math.Size(el.clientWidth, el.clientHeight);
}
exports.get_viewport_size = get_viewport_size;
/**
 * Get the position of the current viewport in window coordinates.  This takes
 * scroll into account.
 *
 * @returns an object containing window width, height, and scroll
 *     position in window coordinates.
 */
function get_viewport_bbox() {
    // Pixels.
    var windowSize = get_viewport_size();
    // Pixels, in window coordinates.
    var scrollOffset = style.get_viewport_page_offset(document);
    return {
        right: windowSize.width + scrollOffset[0],
        bottom: windowSize.height + scrollOffset[1],
        top: scrollOffset[1],
        left: scrollOffset[0],
    };
}
exports.get_viewport_bbox = get_viewport_bbox;
/**
 *  Returns the owner document for a node.
 *
 * @export
 * @param {(Node|Window)} node node The node to get the document for.
 * @returns {Document} The document owning the node.
 */
function get_owner_document(node) {
    if (!node) {
        throw new Error('Node cannot be undefined or undefined.');
    }
    if (node instanceof Node) {
        return node.nodeType == interfaces_1.NodeType.DOCUMENT ? document : node.ownerDocument;
    }
    else if (node instanceof Window) {
        return node.document;
    }
    else {
        return document;
    }
}
exports.get_owner_document = get_owner_document;
/**
 * Checks if an element has the specified CSS class.
 * Similar to Closure's goog.dom.classes.has, except it handles SVG elements.
 *
 * @export
 * @param {Element} element DOM element to check.
 * @param {string} className Name of class to check.
 * @returns True if class exists, false otherwise.
 */
function has_class(element, className) {
    var classes = element.getAttribute('class');
    return (" " + classes + " ").indexOf(" " + className + " ") != -1;
}
exports.has_class = has_class;
/**
 * Whether a node contains another node.
 *
 * @export
 * @param {Node} parent The node that should contain the other node.
 * @param {Node} descendant The node to test presence of.
 * @returns Whether the parent node contains the descendent node.
 */
function contains(parent, descendant) {
    if (!parent || !descendant) {
        return false;
    }
    // We use browser specific methods for this if available since it is faster
    // that way.
    // IE DOM
    if (parent.contains && descendant.nodeType == interfaces_1.NodeType.ELEMENT) {
        return parent == descendant || parent.contains(descendant);
    }
    // W3C DOM Level 3
    if (typeof parent.compareDocumentPosition != 'undefined') {
        return parent == descendant ||
            Boolean(parent.compareDocumentPosition(descendant) & 16);
    }
    // W3C DOM Level 1
    while (descendant && parent != descendant) {
        descendant = descendant.parentNode;
    }
    return descendant == parent;
}
exports.contains = contains;
/**
 * @deprecated 此处应该有缓存，可使用utils.string_to_dom_with_cache替代。
 */
function xmlstr_to_dom(xml) {
    var parser = new DOMParser();
    var dom = parser.parseFromString(xml, 'text/xml');
    return dom.firstChild;
}
exports.xmlstr_to_dom = xmlstr_to_dom;
function is_parent(parent, sub_element) {
    var curr = sub_element;
    while (curr) {
        if (parent === curr) {
            return true;
        }
        curr = curr.parentElement;
    }
    return false;
}
exports.is_parent = is_parent;
function is_inside_shadow(ele) {
    var shadow = ele === null || ele === void 0 ? void 0 : ele.parentElement;
    while (shadow) {
        if (shadow.classList.contains('blocklyShadow')) {
            return true;
        }
        shadow = shadow.parentElement;
    }
    return false;
}
exports.is_inside_shadow = is_inside_shadow;
function is_in_same_shadow(path, text) {
    var shadow = path.parentElement;
    while (shadow) {
        if (!shadow) {
            return false;
        }
        if (shadow.classList.contains('blocklyShadow')) {
            break;
        }
        shadow = shadow.parentElement;
    }
    return is_parent(shadow, text);
}
exports.is_in_same_shadow = is_in_same_shadow;
function remove_class_if_necessary(element, classname) {
    if (element.classList.contains(classname)) {
        element.classList.remove(classname);
    }
}
exports.remove_class_if_necessary = remove_class_if_necessary;
function add_class_if_necessary(element, classname) {
    if (!element.classList.contains(classname)) {
        element.classList.add(classname);
    }
}
exports.add_class_if_necessary = add_class_if_necessary;
function update_visibility_class(element, visibility) {
    switch (visibility) {
        case interfaces_1.BlockVisibility.VISIBLE:
            remove_class_if_necessary(element, constants_1.VISIBILITY_CLASSNAME.HIDDEN);
            remove_class_if_necessary(element, constants_1.VISIBILITY_CLASSNAME.TRANSLUCENT);
            break;
        case interfaces_1.BlockVisibility.TRANSLUCENT:
            remove_class_if_necessary(element, constants_1.VISIBILITY_CLASSNAME.HIDDEN);
            add_class_if_necessary(element, constants_1.VISIBILITY_CLASSNAME.TRANSLUCENT);
            break;
        case interfaces_1.BlockVisibility.HIDDEN:
            remove_class_if_necessary(element, constants_1.VISIBILITY_CLASSNAME.TRANSLUCENT);
            add_class_if_necessary(element, constants_1.VISIBILITY_CLASSNAME.HIDDEN);
            break;
    }
}
exports.update_visibility_class = update_visibility_class;
function get_translate(element) {
    var transform = element.style.transform || element.style.webkitTransform || element.getAttribute('transform');
    if (!transform) {
        return { x: 0, y: 0 };
    }
    var matcher = transform.match(/translate\(([+-]?\d+)[^,]*,[\s]*([+-]?\d+)[^,]*\)/);
    if (!matcher) {
        return { x: 0, y: 0 };
    }
    var x_tmp = matcher[1], y_tmp = matcher[2];
    var x = Number(x_tmp);
    var y = Number(y_tmp);
    return {
        x: x || 0,
        y: y || 0,
    };
}
exports.get_translate = get_translate;
function get_size_attr(element) {
    return {
        width: parseFloat(element.getAttribute('width') || '0') || 0,
        height: parseFloat(element.getAttribute('height') || '0') || 0,
    };
}
exports.get_size_attr = get_size_attr;
function clone_node(node, deep) {
    return node.cloneNode(deep);
}
exports.clone_node = clone_node;
// https://caniuse.com/#search=insertAdjacentElement
// Blink needs support ios9, so avoid using insertAdjacentElement,
// implements insert_before & insert_after instead
/**
 * Insert a node after a reference node.
 * Contrast with insert_before function.
 *
 * @param new_node New element to insert.
 * @param ref_node Existing element to precede new node.
 *
 * @throws when ref node has no parent.
 */
function insert_after(new_node, ref_node) {
    var sibling_node = ref_node.nextSibling;
    var parent_node = ref_node.parentNode;
    if (!parent_node) {
        throw new ReferenceError('Reference node has no parent.');
    }
    if (sibling_node) {
        parent_node.insertBefore(new_node, sibling_node);
    }
    else {
        parent_node.appendChild(new_node);
    }
}
exports.insert_after = insert_after;
/**
 * Insert a node before a reference node.
 *
 * @param new_node New element to insert.
 * @param ref_node Existing element to succeed new node.
 *
 * @throws when ref node has no parent.
 */
function insert_before(new_element, ref) {
    var parent_node = ref.parentNode;
    if (parent_node == undefined) {
        throw new ReferenceError('Reference node has no parent.');
    }
    parent_node.insertBefore(new_element, ref);
}
exports.insert_before = insert_before;
/**
 * 更换 block xml 中的所有 id
 * @param block_xml 需要更换 id 的 block_xml
 */
function reset_all_block_id(block_xml) {
    var ids = {};
    var id_to_random_id = {};
    if (Array.isArray(block_xml)) {
        block_xml.forEach(get_id);
        block_xml.forEach(set_random_id);
    }
    else {
        get_id(block_xml);
        set_random_id(block_xml);
    }
    return block_xml;
    function get_id(dom) {
        if (!dom.attributes) {
            return;
        }
        var id = dom.getAttribute('id');
        if (id) {
            ids[id] = true;
            id_to_random_id[id] = math.gen_uid();
        }
        for (var i in dom.childNodes) {
            if (typeof (dom.childNodes[i]) === 'object') {
                get_id(dom.childNodes[i]);
            }
        }
    }
    function set_random_id(dom) {
        if (!dom.attributes) {
            return;
        }
        var id = dom.getAttribute('id');
        if (id) {
            dom.id = id_to_random_id[id];
            dom.setAttribute('id', id_to_random_id[id]);
        }
        var def_id = dom.getAttribute('def_id');
        if (def_id && id_to_random_id[def_id]) {
            dom.setAttribute('def_id', id_to_random_id[def_id]);
        }
        for (var i in dom.childNodes) {
            if (typeof (dom.childNodes[i]) === 'object') {
                set_random_id(dom.childNodes[i]);
            }
        }
    }
}
exports.reset_all_block_id = reset_all_block_id;
function get_num_g(num) {
    var g = create_svg_element('g', {
        'data-item-index': num,
        'height': 18,
        'width': 4 + (num.toString().length) * 8 + 4,
    });
    g.classList.add('svg_num');
    var text = create_svg_element('text', {
        'font-weight': '900',
        'font-size': '12pt',
        'font-family': 'NotoSansCJKsc-Black,NotoSansCJKsc',
        'dominant-baseline': 'central',
        'transform': 'translate(2, 9)',
    }, g);
    text.textContent = num + ".";
    return g;
}
exports.get_num_g = get_num_g;
