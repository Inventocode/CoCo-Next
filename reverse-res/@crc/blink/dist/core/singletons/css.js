"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Css = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
/**
 * Codemao: override to a Class
 * use in Singleton Scope
 */
var Css = /** @class */ (function () {
    function Css() {
        /**
         * Large stylesheet added by Blockly.Css.inject.
         * @type {Element}
         * @private
         */
        this.style_sheet = undefined;
        /**
         * Current cursor (cached value).
         * @type {string}
         * @private
         */
        this.current_cursor = '';
        /**
         * Path to media directory, with any trailing slash removed.
         * @type {string}
         * @private
         */
        this.media_path = '';
        /**
         * List of cursors.
         * @enum {string}
         */
        this.Cursor = {
            OPEN: 'handopen',
            CLOSED: 'handclosed',
            DELETE: 'handdelete',
        };
    }
    /**
     * Inject the CSS into the DOM.  This is preferable over using a regular CSS
     * file since:
     * a) It loads synchronously and doesn't force a redraw later.
     * b) It speeds up loading by not blocking on a separate HTTP transfer.
     * c) The CSS content may be made dynamic depending on init options.
     * @param {boolean} hasCss If false, don't inject CSS
     *     (providing CSS becomes the document's responsibility).
     * @param {string} pathToMedia Path from page to the Blockly media directory.
     */
    Css.prototype.inject = function (hasCss, pathToMedia) {
        // Only inject the CSS once.
        if (this.style_sheet) {
            return;
        }
        // Placeholder for cursor rule.  Must be first rule (index 0).
        var text = '.blocklyDraggable {}\n';
        if (hasCss) {
            text += this.CONTENT;
        }
        // Strip off any trailing slash (either Unix or Windows).
        this.media_path = pathToMedia.replace(/[\\\/]$/, '');
        text = text.replace(/<<<PATH>>>/g, this.media_path);
        // Inject CSS tag at start of head.
        var cssNode = document.createElement('style');
        if (document.head) {
            document.head.insertBefore(cssNode, document.head.firstChild);
        }
        else {
            var head = document.createElement('head');
            head.insertBefore(cssNode, head.firstChild);
            document.appendChild(head);
        }
        var cssTextNode = document.createTextNode(text);
        cssNode.appendChild(cssTextNode);
        this.style_sheet = cssNode.sheet;
    };
    /**
     * Set the cursor to be displayed when over something draggable.
     * @param {Blockly.Css.Cursor} cursor Enum.
     */
    Css.prototype.set_cursor = function (cursor) {
        if (this.current_cursor == cursor) {
            return;
        }
        this.current_cursor = cursor;
        var url = "url('" + this.media_path + "/" + cursor + ".cur), auto";
        // There is probably only one toolbox, so just change its style property.
        var toolboxen = document.getElementsByClassName('blocklyToolboxDiv');
        for (var i = 0; i < toolboxen.length; i++) {
            var toolbox = toolboxen[i];
            if (cursor == this.Cursor.DELETE) {
                toolbox.style.cursor = url;
            }
            else {
                toolbox.style.cursor = '';
            }
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.css_content)
    ], Css.prototype, "CONTENT", void 0);
    Css = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Css);
    return Css;
}());
exports.Css = Css;
