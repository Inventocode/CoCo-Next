"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockDragSurfaceSvg = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var dom_1 = require("../utils/dom");
var constants_1 = require("../constants");
var BlockDragSurfaceSvg = /** @class */ (function () {
    /**
     * Class for a drag surface for the currently dragged block.
     * This is a separate SVG that contains only the currently moving block, or nothing.
     * @param container Containing element.
     */
    function BlockDragSurfaceSvg(container) {
        /**
         * The SVG drag surface.
         * Set once by Blockly.BlockDragSurfaceSvg.create_dom.
         */
        this.SVG_ = undefined;
        /**
         * This is where blocks live while they are being dragged
         * if the drag surface is enabled.
         */
        this.drag_group_ = undefined;
        /**
         * Containing HTML element
         * parent of the workspace and the drag surface.
         */
        this.container_ = undefined;
        /**
         * Cached value for the scale of the drag surface.
         * Used to set/get the correct translation during and after a drag.
         */
        this.scale_ = 1;
        /**
         * Cached value for the translation of the drag surface.
         * This translation is in pixel units, because the scale is applied to the
         * drag group rather than the top-level SVG.
         */
        this.surface_xy_ = undefined;
        this.container_ = container;
        this.create_dom();
    }
    /**
     * Create the drag surface and inject it into the container.
     * @returns do nothing if this.SVG_ already created
     */
    BlockDragSurfaceSvg.prototype.create_dom = function () {
        if (this.SVG_) {
            return;
        }
        this.SVG_ = (0, dom_1.create_svg_element)('svg', {
            'xmlns': constants_1.SVG_NS,
            'xmlns:html': constants_1.HTML_NS,
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            'version': '1.1',
            'class': 'blocklyBlockDragSurface',
        }, this.container_);
        this.drag_group_ = (0, dom_1.create_svg_element)('g', {}, this.SVG_);
    };
    BlockDragSurfaceSvg.prototype.set_blocks_and_show = function (blocks) {
        this.clear_additions();
        if (this.drag_group_ != undefined && this.drag_group_.childNodes.length !== 0) {
            console.error('Already dragging a block.');
        }
        // appendChild removes the blocks from the previous parent
        if (this.drag_group_ && this.SVG_) {
            this.drag_group_.appendChild(blocks);
            this.SVG_.style.display = 'block';
            this.surface_xy_ = gl_matrix_1.vec2.fromValues(0, 0);
        }
    };
    BlockDragSurfaceSvg.prototype.translate_and_scale_group = function (x, y, scale) {
        this.scale_ = scale;
        // This is a work-around to prevent a the blocks from rendering
        // fuzzy while they are being dragged on the drag surface.
        var x_ = x.toFixed(0);
        var y_ = y.toFixed(0);
        if (this.drag_group_) {
            this.drag_group_.setAttribute('transform', "translate(" + x_ + ", " + y_ + ") scale(" + scale + ")");
        }
    };
    BlockDragSurfaceSvg.prototype.set_scale = function (new_scale) {
        this.scale_ = new_scale;
        if (this.drag_group_) {
            var transform = this.drag_group_.getAttribute('transform');
            var t_scale = "scale(" + new_scale + ")";
            this.drag_group_.setAttribute('transform', transform ? transform.replace(/scale\([0-9\.]+\)/, t_scale) : t_scale);
        }
    };
    /**
     * Translate the drag surface's SVG based on its internal state.
     */
    BlockDragSurfaceSvg.prototype.translate_surface_internal = function () {
        if (this.surface_xy_ == undefined) {
            throw new Error('surfaceXY_ can not be undefined');
        }
        if (this.SVG_ == undefined) {
            throw new Error('SVG_ can not be undefined');
        }
        var x = this.surface_xy_[0];
        var y = this.surface_xy_[1];
        // This is a work-around to prevent a the blocks from rendering
        // fuzzy while they are being dragged on the drag surface.
        var x_ = x.toFixed(0);
        var y_ = y.toFixed(0);
        this.SVG_.style.display = 'block';
        (0, dom_1.set_css_transform)(this.SVG_, "translate3d(" + x_ + "px, " + y_ + "px, 0px)");
    };
    BlockDragSurfaceSvg.prototype.translate_surface = function (x, y) {
        this.surface_xy_ = gl_matrix_1.vec2.fromValues(x * this.scale_, y * this.scale_);
        this.translate_surface_internal();
    };
    BlockDragSurfaceSvg.prototype.get_surface_translation = function () {
        var xy = this.utils.get_relative_xy(this.SVG_);
        return gl_matrix_1.vec2.fromValues(xy[0] / this.scale_, xy[1] / this.scale_);
    };
    /**
     * Provide a reference to the drag group
     * primarily for BlockSvg.get_relative_to_surface_xy
     * @returns Element
     */
    BlockDragSurfaceSvg.prototype.get_group = function () {
        return this.drag_group_;
    };
    BlockDragSurfaceSvg.prototype.get_current_block = function () {
        if (this.drag_group_) {
            return this.drag_group_.firstChild;
        }
        return undefined;
    };
    /**
     * Clear the group and hide the surface
     * move the blocks off onto the provided element
     * If the block is being deleted it doesn't need to go back to the original surface,
     * since it would be removed immediately during dispose.
     * @param new_surface Surface the dragging blocks should be moved to,
     * or undefined if the blocks should be removed from this surface without
     * being moved to a different surface.
     */
    BlockDragSurfaceSvg.prototype.clear_and_hide = function (new_surface) {
        var current_block = this.get_current_block();
        if (new_surface) {
            // appendChild removes the node from this.dragGroup_
            if (current_block != undefined) {
                new_surface.appendChild(current_block);
            }
        }
        else {
            if (this.drag_group_ && current_block != undefined) {
                this.drag_group_.removeChild(current_block);
            }
        }
        if (this.SVG_) {
            this.SVG_.style.display = 'none';
        }
        if (this.drag_group_) {
            this.clear_additions();
            // 如果此时积木的svg未完全移出drag surface，则报错。
            if (this.drag_group_.childNodes.length !== 0) {
                console.error('Drag group was not cleared.');
            }
        }
        this.surface_xy_ = undefined;
    };
    /**
     * 业务项目可能会在drag group上增加图标。
     * 该方法会清除掉这些额外的，非block draggable的元素。
     */
    BlockDragSurfaceSvg.prototype.clear_additions = function () {
        if (!this.drag_group_) {
            return;
        }
        for (var i = this.drag_group_.childElementCount - 1; i >= 0; i--) {
            var child = this.drag_group_.children[i];
            if (!child.classList.contains('blocklyDraggable')) {
                (0, dom_1.remove_node)(child);
            }
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], BlockDragSurfaceSvg.prototype, "utils", void 0);
    BlockDragSurfaceSvg = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], BlockDragSurfaceSvg);
    return BlockDragSurfaceSvg;
}());
exports.BlockDragSurfaceSvg = BlockDragSurfaceSvg;
