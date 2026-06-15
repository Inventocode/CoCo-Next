var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { Filter } from '../../pixi';
import vertex from '../vertex.glsl';
import fragment from './fragment.glsl';
import { TriangleTransformationMatrix } from './matrix';
/**
 * This filter applies a soft effect making display objects appear softed in the given direction.
 */
var SoftFilter = /** @class */ (function (_super) {
    __extends(SoftFilter, _super);
    function SoftFilter(opts) {
        var _this = _super.call(this, String(vertex), String(fragment).replace(/number_triangles_to_be_replaced/g, opts.triangles.length.toFixed(0))) || this;
        _this.max_num_anchors = opts.max_num_anchors;
        _this.triangle_top_points = opts.triangles;
        // 每个三角形对应的变换矩阵
        _this.uniforms.transform_matrixes = [];
        _this.uniforms.triangles = [];
        opts.anchors && _this.set_anchors(opts.anchors);
        return _this;
    }
    /**
     * 计算当前变形后图形的bounding box，超出屏幕部分将被忽略。
     *
     * 即 left / right 的范围为 [0, screen_width]，
     *   top / bottom 的范围为 [0, screen_height]
     */
    SoftFilter.prototype.compute_target_rect = function (anchors, screen_width, screen_height) {
        var left = Infinity;
        var right = -Infinity;
        var bottom = -Infinity;
        var top = Infinity;
        for (var i = 0; i < this.max_num_anchors; i++) {
            var pos = anchors[i][1];
            left = Math.min(left, pos.x);
            right = Math.max(right, pos.x);
            top = Math.min(top, pos.y);
            bottom = Math.max(bottom, pos.y);
        }
        left = Math.max(0, left);
        right = Math.min(screen_width, right);
        top = Math.max(0, top);
        bottom = Math.min(screen_height, bottom);
        return { top: top, right: right, bottom: bottom, left: left };
    };
    SoftFilter.prototype.set_anchors = function (anchors, width, height) {
        var _a, _b, _c;
        var anchors_count = anchors.length;
        if (anchors_count > this.max_num_anchors) {
            console.error("Length of anchors (" + anchors_count + ") exceeds the maximum anchors length (" + this.max_num_anchors + ") which decided when the filter was constructed. ");
            anchors.slice(0, this.max_num_anchors);
        }
        // Dynamically modify padding
        var rect = (_c = (_b = (_a = this.uniforms.filterGlobals) === null || _a === void 0 ? void 0 : _a.uniforms) === null || _b === void 0 ? void 0 : _b.outputFrame) === null || _c === void 0 ? void 0 : _c.clone();
        if (rect && width && height) {
            rect.pad(-this.padding); // exact rect
            if (rect.width > 0 && rect.height > 0) {
                var bounds = this.compute_target_rect(anchors, width, height);
                this.padding = Math.max(0, rect.left - bounds.left, rect.top - bounds.top, bounds.right - (rect.left + rect.width), bounds.bottom - (rect.top + rect.height)) + 5;
            }
        }
        this.uniforms.triangles.length = 0;
        this.uniforms.transform_matrixes.length = 0;
        for (var i = 0; i < this.triangle_top_points.length; i++) {
            var _d = __read(this.triangle_top_points[i], 3), p1 = _d[0], p2 = _d[1], p3 = _d[2]; // 三角形三个顶点的序号
            // 记录形变后的三角形，[x0, y0, x1, y1, x2, y2] 顺序
            this.uniforms.triangles[6 * i] = Math.floor(anchors[p1][1].x);
            this.uniforms.triangles[6 * i + 1] = Math.floor(anchors[p1][1].y);
            this.uniforms.triangles[6 * i + 2] = Math.floor(anchors[p2][1].x);
            this.uniforms.triangles[6 * i + 3] = Math.floor(anchors[p2][1].y);
            this.uniforms.triangles[6 * i + 4] = Math.floor(anchors[p3][1].x);
            this.uniforms.triangles[6 * i + 5] = Math.floor(anchors[p3][1].y);
            // 记录形变矩阵
            // [a, b, c,
            // d, e, f]
            // 需要做反向映射 因为取样是反向的
            var matrix = new TriangleTransformationMatrix([
                [anchors[p1][1], anchors[p1][0]],
                [anchors[p2][1], anchors[p2][0]],
                [anchors[p3][1], anchors[p3][0]],
            ]);
            this.uniforms.transform_matrixes[6 * i] = matrix.a;
            this.uniforms.transform_matrixes[6 * i + 1] = matrix.b;
            this.uniforms.transform_matrixes[6 * i + 2] = matrix.c;
            this.uniforms.transform_matrixes[6 * i + 3] = matrix.d;
            this.uniforms.transform_matrixes[6 * i + 4] = matrix.e;
            this.uniforms.transform_matrixes[6 * i + 5] = matrix.f;
        }
    };
    return SoftFilter;
}(Filter));
export { SoftFilter };
//# sourceMappingURL=index.js.map