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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { PixelPoint } from '../pixi';
export function collect_texture_internal_points(data, width, height, precision, range) {
    if (precision === void 0) { precision = 12; }
    if (range === void 0) { range = 0; }
    var _x;
    var _y;
    var path = [];
    // 检查当前点是否为不透明
    var is_opaque = function (x, y) { return ((x >= 0 && y >= 0 && x < width && y < height) ? (data[y * width + x] >>> 24) > 0 : false); };
    // 检查当前点是否是内部点
    var check_current_pos_inner = function (x, y) { return is_opaque(x - 1, y - 1) &&
        is_opaque(x, y - 1) &&
        is_opaque(x - 1, y) &&
        is_opaque(x, y); };
    for (_x = 0, _y = 0; _y < height; _x = _x + precision) {
        if (_x > width) {
            _x = 0;
            _y = _y + precision;
        }
        if (_y > height)
            continue;
        var __x = range ? (Math.random() - 0.5) * range + _x : _x;
        var __y = range ? (Math.random() - 0.5) * range + _y : _y;
        if (check_current_pos_inner(__x, __y)) {
            path.push(new PixelPoint(__x, __y));
        }
    }
    return path;
}
/**
 * 轮廓点的追踪趋势
 */
var TRACING_TRENDS;
(function (TRACING_TRENDS) {
    TRACING_TRENDS[TRACING_TRENDS["MOVE_UP"] = 0] = "MOVE_UP";
    TRACING_TRENDS[TRACING_TRENDS["MOVE_DOWN"] = 1] = "MOVE_DOWN";
    TRACING_TRENDS[TRACING_TRENDS["MOVE_LEFT"] = 2] = "MOVE_LEFT";
    TRACING_TRENDS[TRACING_TRENDS["MOVE_RIGHT"] = 3] = "MOVE_RIGHT";
    TRACING_TRENDS[TRACING_TRENDS["SKIP"] = 4] = "SKIP";
})(TRACING_TRENDS || (TRACING_TRENDS = {}));
;
;
/**
 * case_num代表着当前点与它周围三个点（左，左上，上）的透明度对应的一种情况，一共有16种情况，编号为0-15
 * 具体每个case_num对应的情况参考：https://codemao.yuque.com/milktea/share/fgbv0c。
 * 根据case_num，我们可以判断出下一步的追踪趋势：
 * 向上追踪: 1, 5, 13 「此点为轮廓点，并且左上角必有点」
 * 向下追踪: 8, 10, 11 「此点为轮廓点，并且右下角必有点」
 * 向左追踪: 4, 12, 14 「此点为轮廓点，并且左下角必有点」
 * 向右追踪: 2, 3, 7 「此点为轮廓点，并且右上角必有点」
 * 不记录: 0, 6, 9, 15 「0代表此点和周围三个点都为空像素，15代表此点和周围三个点都不为空像素，都不是轮廓点，不计入。
 *                  6和9代表对角线上有两个像素点，有两种绘制的可能性，需要根据上一个点的位置转换为上面四种追踪趋势中的一种」
 */
function get_tracing_trend(case_num) {
    if (case_num === 1 || case_num === 5 || case_num === 13) {
        return TRACING_TRENDS.MOVE_UP;
    }
    if (case_num === 8 || case_num === 10 || case_num === 11) {
        return TRACING_TRENDS.MOVE_DOWN;
    }
    if (case_num === 4 || case_num === 12 || case_num === 14) {
        return TRACING_TRENDS.MOVE_LEFT;
    }
    if (case_num === 2 || case_num === 3 || case_num === 7) {
        return TRACING_TRENDS.MOVE_RIGHT;
    }
    return TRACING_TRENDS.SKIP;
}
/**
 * 追踪像素点并获取一个图中的轮廓点
 * 暂时无法追踪彻底切割的图片轮廓点
 * @param data 图片像素值，格式为[abgr, abgr, abgr, ...]
 * @param width 图片宽
 * @param height 图片高
 * @param opts 追踪算法的相关配置，如果不传，默认使用 'vertex' 模式。
 *  如下
 *  1. 当前的物理模型轮廓算法更关注轮廓的顶点位置，使用的是 'vertex' 模式，tolerance为5，不配置step。
 *  2. 颜色碰撞更关注取点的平均值，使用 'step' 模式，step值为5，不配置tolerance。
 * @returns 获取轮廓点
 */
export function trace_and_get_bounds(data, width, height, opts) {
    opts = opts || { mode: 'vertex' };
    // 透明度的值，获取轮廓点需要检查其透明度是否大于0
    var alpha = 0;
    // 记录的轮廓点
    var path = [];
    // 当前x值
    var _x;
    // 当前y值
    var _y;
    // 开始点的x值
    var start_x;
    // 开始点的y值
    var start_y;
    // 当前步骤
    var step;
    // 开始的位置
    var start = -1;
    // 上一步骤，初始的上一步骤为不记录轮廓点
    var prev_step = TRACING_TRENDS.SKIP;
    var iteration = 0;
    var l = data.length;
    // start position
    for (var i = 3; i < l; i++) {
        // & 255 取到的是 r
        // >>> 8 & 255 取到的是 g
        // >>> 16 & 255 取到的是 b
        // >>> 24 取到的是a
        // 这里要取a值，比较alpha
        if ((data[i] >>> 24) > alpha) {
            start = i;
            break;
        }
    }
    // 从起点开始计算point位置，一直计算到回到起点
    if (start >= 0) {
        // calculate start position
        _x = start_x = (start % width) | 0;
        _y = start_y = (start / width) | 0;
        do {
            step = get_next_step(_x, _y);
            if (step === TRACING_TRENDS.MOVE_UP) {
                _y--;
            }
            else if (step === TRACING_TRENDS.MOVE_DOWN) {
                _y++;
            }
            else if (step === TRACING_TRENDS.MOVE_LEFT) {
                _x--;
            }
            else if (step === TRACING_TRENDS.MOVE_RIGHT) {
                _x++;
            }
            switch (opts.mode) {
                case 'vertex':
                    if (step !== prev_step) {
                        path.push(new PixelPoint(_x, _y));
                    }
                    break;
                case 'step':
                    if (iteration % opts.step === 0) {
                        path.push(new PixelPoint(_x, _y));
                    }
                    break;
                case 'mixed':
                    if (step !== prev_step) {
                        // 发生了转折，标记转折点，重置轮次计数
                        path.push(new PixelPoint(_x, _y));
                        iteration = 0;
                    }
                    else if (iteration % opts.step === 0) {
                        // 未发生转折，但超过了规定步长，标记该点
                        path.push(new PixelPoint(_x, _y));
                    }
                    break;
            }
            prev_step = step;
            iteration++;
        } while (_x !== start_x || _y !== start_y);
        // point reduction
        if (opts.tolerance) {
            path = reduce(path, opts.tolerance, opts.step);
        }
    }
    // 检测此点是否透明度大于alpha(也就是0)
    // 不透明返回true
    function get_state(x, y) {
        return (x >= 0 && y >= 0 && x < width && y < height) ? (data[y * width + x] >>> 24) > alpha : false;
    }
    // Parse 2x2 pixels to determine next step direction.
    // See https://en.wikipedia.org/wiki/Marching_squares for details.
    // Note: does not do clockwise cycle as in the original specs, but line by line.
    function get_next_step(x, y) {
        var v = 0;
        // 当前点的左上角点
        if (get_state(x - 1, y - 1)) {
            // 按位逻辑或
            v |= 1;
        }
        // 当前点上面的点
        if (get_state(x, y - 1)) {
            v |= 2;
        }
        // 当前点左边的点
        if (get_state(x - 1, y)) {
            v |= 4;
        }
        // 当前点
        if (get_state(x, y)) {
            v |= 8;
        }
        // 当前v = 6证明当前像素点在左下角和右上角，有两种绘制的趋势
        // 如果前一个步骤左上角有点(即前一步骤为向上追踪)就取左下角(向左追踪)，否则取右上角(向右追踪)
        if (v === 6) {
            return prev_step === TRACING_TRENDS.MOVE_UP ? TRACING_TRENDS.MOVE_LEFT : TRACING_TRENDS.MOVE_RIGHT;
        }
        // 当前v = 9证明当前像素点在左上角和右下角，有两种绘制的趋势
        // 如果前一个步骤右上角有点(即前一步骤为向右追踪)就取右下角(向上追踪)，否则取右上角(向下追踪)
        if (v === 9) {
            return prev_step === TRACING_TRENDS.MOVE_RIGHT ? TRACING_TRENDS.MOVE_UP : TRACING_TRENDS.MOVE_DOWN;
        }
        return get_tracing_trend(v);
    }
    return path;
}
/**
 * 相关科普 https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm
 * @param points 曲线分布点集合
 * @param epsilon 保留点的距离阈值。如果不规定最小距离，则与线段总趋势偏移超过该值的点才会被留取。
 * @param min_step 集合中相邻的点之间的最小距离。
 * @returns 优化后的曲线。
 */
function reduce(points, epsilon, min_step) {
    var len1 = points.length - 1;
    // 如果只有俩点，代表只存在一条直线，不需要节省取点直接返回他自己
    if (len1 < 2) {
        return points;
    }
    // [真的很重要的流程图解](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm#/media/File:Douglas-Peucker_animated.gif)
    // 简化曲线时，会需要使用首尾点的连线作为参照，因此记录了曲线的首尾点。
    var f_point = points[0];
    var l_point = points[len1];
    // 规定最大距离的平方值。由于点与点之间的距离是通过勾股定理进行计算，直接保存平方值可以减少开方操作的消耗。
    var epsilon2 = epsilon * epsilon;
    /**
     * points中，距离首尾点决定的直线最远的点的index.
     * (对应动图中每一次递归时被标绿的点)
     */
    var furthest_index = -1;
    /**
     * points[index] 到 首尾点决定的直线 的距离。
     */
    var furthest_dist2 = 0;
    for (var i = 1; i < len1; i++) {
        // 计算当前处理的点到曲线首尾点决定的线段的距离的平方。
        var curr_dist2 = dist2_point_to_line(points[i], f_point, l_point);
        // 选择最远的点。
        if (curr_dist2 > furthest_dist2) {
            furthest_dist2 = curr_dist2;
            furthest_index = i;
        }
    }
    // 原算法：如果当前points中所有点的偏移量都小于传入的下限，则舍弃所有的中间点，只保留首尾。
    // 修改：加入最小步长限制，平衡填充该线段。
    if (furthest_dist2 <= epsilon2) {
        if (!min_step) {
            return [f_point, l_point];
        }
        // 填充后，该线段被分割成的线段条数。需要插入点数量比线段数少1。
        var divided_num = Math.floor(Math.sqrt(dist2(f_point, l_point)) / min_step);
        var fill_points = [];
        for (var i = 1; i < divided_num; i++) {
            fill_points.push(new PixelPoint(f_point.x + (l_point.x - f_point.x) * i / divided_num, f_point.y + (l_point.y - f_point.y) * i / divided_num));
        }
        return __spread([f_point], fill_points, [l_point]);
    }
    var left = points.slice(0, furthest_index + 1);
    var right = points.slice(furthest_index);
    var left_points = reduce(left, epsilon, min_step);
    var right_points = reduce(right, epsilon, min_step);
    return left_points.slice(0, left_points.length - 1).concat(right_points);
}
/**
 * 计算 点p 到 **线段** [l1, l2] 的距离。
 * 根据p到 **直线** l1l2 的垂点的位置决定返回值：
 *  1. 垂点在线段 [l2, l1] 的延长线上，则返回 p 与 l1 距离的平方；
 *  2. 垂点在线段 [l1, l2] 的延长线上，则返回 p 与 l2 距离的平方；
 *  3. 垂点在线段 [l1, l2] 上，则返回 p 与 [l1, l2] 的距离的平方。
 * @param p 需要计算到线段距离的点。
 * @param l1 直线上的一个点。
 * @param l2 直线上的另一个点。
 */
function dist2_point_to_line(p, l1, l2) {
    var l_len = dist2(l1, l2);
    // l1 l2重合，直线不存在，返回0。
    // 实际上这里可以抛错。
    if (!l_len)
        return 0;
    var t = ((p.x - l1.x) * (l2.x - l1.x) + (p.y - l1.y) * (l2.y - l1.y)) / l_len;
    if (t < 0) {
        return dist2(p, l1);
    }
    if (t > 1) {
        return dist2(p, l2);
    }
    return dist2(p, new PixelPoint(l1.x + t * (l2.x - l1.x), l1.y + t * (l2.y - l1.y)));
}
// 两个点的距离的平方
function dist2(p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return dx * dx + dy * dy;
}
//# sourceMappingURL=bounds.js.map