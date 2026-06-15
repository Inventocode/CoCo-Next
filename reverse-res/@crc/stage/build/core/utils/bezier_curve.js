/**
 * 利用贝塞尔公式获取quad动画类型t绝对进度下的动效完成度
 * @param t 动画在 0（动画开始）和 1（动画结束）范围内的绝对进度
 * @returns quad动画类型t绝对进度下的动效完成度
 */
export var ease_out_quad = function (t) { return (1 - (1 - t) * (1 - t)); };
/**
 * 利用贝塞尔公式获取bounce动画类型t绝对进度下的动效完成度
 * @param t 动画在 0（动画开始）和 1（动画结束）范围内的绝对进度
 * @returns bounce动画类型t绝对进度下的动效完成度
 */
export var ease_out_bounce = function (t) {
    var n1 = 7.5625;
    var d1 = 2.75;
    if (t < 1 / d1) {
        return n1 * t * t;
    }
    if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
    }
    if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
    }
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
};
//# sourceMappingURL=bezier_curve.js.map