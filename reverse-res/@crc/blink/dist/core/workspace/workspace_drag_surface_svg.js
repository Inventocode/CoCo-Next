"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceDragSurfaceSvg = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var dom_1 = require("../utils/dom");
var constants_1 = require("../constants");
var WorkspaceDragSurfaceSvg = /** @class */ (function () {
    /**
     * Creates an instance of WorkspaceDragSurfaceSvg.
     * Blocks are moved into this SVG during a drag, improving performance.
     * The entire SVG is translated using css transforms instead of SVG so the
     * blocks are never repainted during drag improving performance.
     *
     * @param container Containing element.
     * @param ref_node The node to insert dom after.
     */
    function WorkspaceDragSurfaceSvg(container, ref_node) {
        this.previous_sibling_ = undefined;
        this.container_ = container;
        /**
        * Dom structure when the workspace is being dragged. If there is no drag in
        * progress, the SVG is empty and display: none.
        * <svg class="blocklyWsDragSurface" style=transform:translate3d(...)>
        *   <g class="blocklyBlockCanvas"></g>
        *   <g class="blocklyBubbleCanvas">/g>
        * </svg>
        */
        this.SVG_ = (0, dom_1.create_svg_element)('svg', {
            'xmlns': constants_1.SVG_NS,
            'xmlns:html': constants_1.HTML_NS,
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            'version': '1.1',
            'class': 'blocklyWsDragSurface',
        });
        if (ref_node) {
            (0, dom_1.insert_after)(this.SVG_, ref_node);
        }
        else {
            this.container_.appendChild(this.SVG_);
        }
    }
    /**
     * @return the svg element with classname 'blocklyWsDragSurface'.
     */
    WorkspaceDragSurfaceSvg.prototype.get_svg = function () {
        return this.SVG_;
    };
    WorkspaceDragSurfaceSvg.prototype.translate_surface = function (x, y) {
        // This is a work-around to prevent a the blocks from rendering
        // fuzzy while they are being moved on the drag surface.
        x = Number(x.toFixed(0));
        y = Number(y.toFixed(0));
        this.SVG_.style.display = 'block';
        (0, dom_1.set_css_transform)(this.SVG_, "translate3d(" + x + "px, " + y + "px, 0px)");
    };
    WorkspaceDragSurfaceSvg.prototype.set_contents_and_show = function (block_canvas, bubble_canvas, previous_sibling, scale) {
        if (!this.SVG_) {
            throw new Error('No Svg Element');
        }
        if (!(this.SVG_.childNodes.length === 0)) {
            console.error('Already dragging a block.');
        }
        this.previous_sibling_ = previous_sibling;
        // Make sure the blocks and bubble canvas are scaled appropriately.
        this.SVG_.style.display = 'none';
        var frag = document.createDocumentFragment();
        frag.appendChild(block_canvas);
        bubble_canvas && frag.appendChild(bubble_canvas);
        frag.firstElementChild &&
            frag.firstElementChild.setAttribute('transform', "translate(0, 0) scale(" + scale + ")");
        frag.lastElementChild &&
            frag.lastElementChild.setAttribute('transform', "translate(0, 0) scale(" + scale + ")");
        this.SVG_.appendChild(frag);
        this.SVG_.style.display = 'block';
    };
    WorkspaceDragSurfaceSvg.prototype.get_surface_translation = function () {
        return this.utils.get_relative_xy(this.SVG_);
    };
    WorkspaceDragSurfaceSvg.prototype.clear_and_hide = function (new_surface) {
        if (!this.SVG_) {
            throw new Error('No Svg_');
        }
        var blockCanvas = this.SVG_.childNodes[0];
        var bubbleCanvas = this.SVG_.childNodes[1];
        if (!blockCanvas ||
            !bubbleCanvas ||
            !(0, dom_1.has_class)(blockCanvas, 'blocklyBlockCanvas') ||
            !(0, dom_1.has_class)(bubbleCanvas, 'blocklyBubbleCanvas')) {
            throw new Error('Couldn\'t clear and hide the drag surface.  A node was missing.');
        }
        // If there is a previous sibling, put the blockCanvas back right afterwards,
        // otherwise insert it as the first child node in newSurface.
        if (this.previous_sibling_ != undefined) {
            (0, dom_1.insert_after)(blockCanvas, this.previous_sibling_);
        }
        else {
            new_surface.insertBefore(blockCanvas, new_surface.firstChild);
        }
        // Reattach the bubble canvas after the blockCanvas.
        (0, dom_1.insert_after)(bubbleCanvas, blockCanvas);
        // Hide the drag surface.
        this.SVG_.style.display = 'none';
        if (!(this.SVG_.childNodes.length == 0)) {
            console.error('Drag surface was not cleared.');
        }
        (0, dom_1.set_css_transform)(this.SVG_, '');
        this.previous_sibling_ = undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], WorkspaceDragSurfaceSvg.prototype, "utils", void 0);
    WorkspaceDragSurfaceSvg = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], WorkspaceDragSurfaceSvg);
    return WorkspaceDragSurfaceSvg;
}());
exports.WorkspaceDragSurfaceSvg = WorkspaceDragSurfaceSvg;
