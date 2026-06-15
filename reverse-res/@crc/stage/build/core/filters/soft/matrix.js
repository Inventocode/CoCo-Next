/**
 * 根据三个点的移动情况，决定一片区域的变化矩阵。
 * https://zhuanlan.zhihu.com/p/92473178 4. 确定未知的图像变换
 */
var TriangleTransformationMatrix = /** @class */ (function () {
    function TriangleTransformationMatrix(pairs) {
        // 第一行
        this.a = this.solve_a(pairs[0][0].x, pairs[0][0].y, pairs[0][1].x, pairs[1][0].x, pairs[1][0].y, pairs[1][1].x, pairs[2][0].x, pairs[2][0].y, pairs[2][1].x);
        this.b = this.solve_b(pairs[0][0].x, pairs[0][0].y, pairs[0][1].x, pairs[1][0].x, pairs[1][0].y, pairs[1][1].x, pairs[2][0].x, pairs[2][0].y, pairs[2][1].x);
        this.c = this.solve_c(pairs[0][0].x, pairs[0][0].y, pairs[0][1].x, pairs[1][0].x, pairs[1][0].y, pairs[1][1].x, this.a, this.b);
        // 第二行
        this.d = this.solve_a(pairs[0][0].x, pairs[0][0].y, pairs[0][1].y, pairs[1][0].x, pairs[1][0].y, pairs[1][1].y, pairs[2][0].x, pairs[2][0].y, pairs[2][1].y);
        this.e = this.solve_b(pairs[0][0].x, pairs[0][0].y, pairs[0][1].y, pairs[1][0].x, pairs[1][0].y, pairs[1][1].y, pairs[2][0].x, pairs[2][0].y, pairs[2][1].y);
        this.f = this.solve_c(pairs[0][0].x, pairs[0][0].y, pairs[0][1].y, pairs[1][0].x, pairs[1][0].y, pairs[1][1].y, this.d, this.e);
    }
    TriangleTransformationMatrix.prototype.solve_a = function (x0, y0, x0p, x1, y1, x1p, x2, y2, x2p) {
        return ((x0p - x1p) * (y1 - y2) - (x1p - x2p) * (y0 - y1)) / ((x0 - x1) * (y1 - y2) - (x1 - x2) * (y0 - y1));
    };
    TriangleTransformationMatrix.prototype.solve_b = function (x0, y0, x0p, x1, y1, x1p, x2, y2, x2p) {
        return ((x0p - x1p) * (x1 - x2) - (x1p - x2p) * (x0 - x1)) / ((y0 - y1) * (x1 - x2) - (y1 - y2) * (x0 - x1));
    };
    TriangleTransformationMatrix.prototype.solve_c = function (x0, y0, x0p, x1, y1, x1p, a, b) {
        return ((x0p + x1p) - a * (x0 + x1) - b * (y0 + y1)) / 2;
    };
    TriangleTransformationMatrix.prototype.transform = function (p) {
        return {
            x: Math.round(this.a * p.x + this.b * p.y + this.c),
            y: Math.round(this.d * p.x + this.e * p.y + this.f),
        };
    };
    return TriangleTransformationMatrix;
}());
export { TriangleTransformationMatrix };
//# sourceMappingURL=matrix.js.map