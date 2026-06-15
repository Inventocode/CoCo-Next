"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../utils/dom");
var is_1 = require("../utils/is");
/**
 * https://lanhuapp.com/web/#/item/project/detailDetach?type=share_mark&pid=0d495e58-9238-4b64-ab2f-8dc9f8d27a6f&imgId=2eb93d40-15c2-4a8a-829e-5a45c7b2e7b0&project_id=0d495e58-9238-4b64-ab2f-8dc9f8d27a6f&image_id=2eb93d40-15c2-4a8a-829e-5a45c7b2e7b0&teamId=9868f6d9-bdd8-42cd-a1d4-7f10da23fe39&userId=4c3c410b-11ef-4332-89ec-b60abf0e21a5&param=e65d32cf-0508-4d57-9a47-a9c828785e0b
 */
var Grid = /** @class */ (function () {
    function Grid(ws_options) {
        /**
         * The scale of the grid, used to set stroke width on grid lines.
         * This should always be the same as the workspace scale.
         */
        this.scale = 1;
        var svg_defs = ws_options.svg_defs, svg_rnd = ws_options.svg_rnd, grid_options = ws_options.gridOptions;
        this.spacing = grid_options.spacing;
        this.step = grid_options.step;
        this.snap_to_grid = grid_options.snap;
        /*
        <pattern id="blocklyGridPattern837493" patternUnits="userSpaceOnUse">
          ...
        </pattern>
        */
        this.grid_pattern = (0, dom_1.create_svg_element)('pattern', {
            'id': "blocklyGridPattern" + svg_rnd,
            'patternUnits': 'userSpaceOnUse',
            'fill': 'transparent',
        }, svg_defs);
        this.bg_rect = (0, dom_1.create_svg_element)('rect', {
            'class': 'blinkGridPatternBg',
            'fill': 'transparent',
        }, this.grid_pattern);
        this.outer_rect = (0, dom_1.create_svg_element)('path', {
            'class': 'blinkGridPatternOuter',
            'stroke': 'rgb(136, 136, 136)',
        }, this.grid_pattern);
        this.inner_lines = (0, dom_1.create_svg_element)('path', {
            'class': 'blinkGridPatternInner',
            'stroke': 'rgb(136, 136, 136)',
        }, this.grid_pattern);
        this.update();
    }
    Grid.prototype.should_snap = function () {
        return this.snap_to_grid;
    };
    Grid.prototype.move_to = function (x, y) {
        this.grid_pattern.setAttribute('x', String(x));
        this.grid_pattern.setAttribute('y', String(y));
        if (is_1.is.ie() || is_1.is.edge()) {
            // IE/Edge doesn't notice that the x/y offsets have changed.
            // Force an update.
            this.set_scale(this.scale);
        }
    };
    Grid.prototype.get_spacing = function () {
        return this.spacing;
    };
    Grid.prototype.get_pattern_id = function () {
        return this.grid_pattern.id;
    };
    Grid.prototype.dispose = function () {
        (0, dom_1.remove_node)(this.grid_pattern);
    };
    Grid.prototype.update = function () {
        // MSIE freaks if it sees a 0x0 pattern, so set empty patterns to 10x10.
        var safe_spacing = (this.spacing * this.scale) || 10;
        var outer_rect_size = safe_spacing * this.step;
        this.grid_pattern.setAttribute('width', outer_rect_size.toString());
        this.grid_pattern.setAttribute('height', outer_rect_size.toString());
        this.bg_rect.setAttribute('width', outer_rect_size.toString());
        this.bg_rect.setAttribute('height', outer_rect_size.toString());
        this.outer_rect.setAttribute('d', "M " + outer_rect_size + " 0 L 0 0 0 " + outer_rect_size);
        var h_lines = [];
        var v_lines = [];
        for (var i = 1; i < this.step; i++) {
            h_lines.push("M 0 " + i * safe_spacing + " L " + outer_rect_size + " " + i * safe_spacing);
            v_lines.push("M " + i * safe_spacing + " 0 L " + i * safe_spacing + " " + outer_rect_size);
        }
        this.inner_lines.setAttribute('d', h_lines.join(' ') + v_lines.join(' '));
    };
    Grid.prototype.set_scale = function (scale) {
        this.scale = scale;
        this.update();
    };
    Grid.prototype.set_color = function (bg_color, line_color) {
        this.bg_rect.setAttribute('fill', bg_color);
        this.outer_rect.setAttribute('stroke', line_color);
        this.inner_lines.setAttribute('stroke', line_color);
    };
    Grid = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
