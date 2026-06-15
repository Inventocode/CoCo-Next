import clone from 'ramda/es/clone';
import { Point } from '../pixi';
/**
 * 解析轮廓点，将一个凹多边形转换为多个凸多边形
 * 算法来自 https://github.com/pury/SPTools/tree/master/Polygon2Triangle
 * 需要找到相对应的paper再来详细解读
 * @param vertices 轮廓点集合
 * @param output 输出的凸多边形集合。一个数组元素对应一个凸多边形的轮廓点集合
 */
export function concave_to_convex(vertices, output) {
    var points = filter_out_useless_vertex(vertices);
    if (!points.length)
        return;
    var total = points.length;
    var is_clockwise = is_clockwise_sequence(points);
    var concave_point = undefined;
    var concave_index = -1;
    for (var i = 0; i < total; i++) {
        var v1 = points[i];
        var v2 = get_valid_index(i + 1, total);
        var p = get_valid_index(i + 2, total);
        var cur_side = get_point_on_vector_side(v1, points[v2], points[p]);
        if (is_clockwise && cur_side === ON_LEFT_SIDE) {
            concave_point = points[v2];
            concave_index = v2;
            break;
        }
        if (!is_clockwise && cur_side === ON_RIGHT_SIDE) {
            concave_point = points[v2];
            concave_index = v2;
            break;
        }
    }
    if (concave_point) {
        var index = concave_index;
        var p2 = get_valid_index(index + 1, total);
        var p1 = get_valid_index(index - 1, total);
        var angle = get_angle(points[p1], points[index], points[p2]);
        var half_angle = (Math.PI * 2 - angle) / 2;
        var min_angle = 100;
        var divide_index = 0;
        for (var i = 0; i < total; i++) {
            if (i === index || i === p1 || i === p2) {
                continue;
            }
            var side = get_point_on_vector_side(points[p1], points[index], points[i]);
            if ((is_clockwise && side === ON_RIGHT_SIDE) ||
                (!is_clockwise && side === ON_LEFT_SIDE) ||
                side === ON_LINE_OUT) {
                if (!is_cross_with_edges(points, p1, index, p2, i)) {
                    var curAngle = get_angle(points[p1], points[index], points[i]);
                    var delta = Math.abs(curAngle - half_angle);
                    if (delta < min_angle) {
                        min_angle = delta;
                        divide_index = i;
                    }
                }
            }
        }
        var arr = split_array(points, index, divide_index);
        concave_to_convex(arr[0], output);
        concave_to_convex(arr[1], output);
    }
    else {
        output.push(points);
    }
}
// 过滤非顶点的集合
function filter_out_useless_vertex(vertices) {
    var ret = [];
    var k = 0;
    var first_k = 0;
    var last_k = 0;
    for (var i = 0; i < vertices.length; i++) {
        if (i === 0) {
            var last = vertices[vertices.length - 1];
            if (last.x === vertices[0].x) {
                k = Infinity;
            }
            else {
                k = (last.y - vertices[0].y) / (last.x - vertices[0].x);
            }
            first_k = k;
            ret.push(last);
        }
        else {
            var cur_k = void 0;
            if (vertices[i - 1].x === vertices[i].x) {
                cur_k = Infinity;
            }
            else {
                cur_k = (vertices[i - 1].y - vertices[i].y) / (vertices[i - 1].x - vertices[i].x);
            }
            if (k === cur_k || Math.abs(k - cur_k) < 0.001) {
                continue;
            }
            else {
                k = cur_k;
            }
            if (i === vertices.length - 1) {
                last_k = cur_k;
            }
            ret.push(vertices[i - 1]);
        }
    }
    if (first_k === last_k || Math.abs(first_k - last_k) < 0.001) {
        ret.shift();
    }
    return ret;
}
function split_array(vertices, index1, index2) {
    var small = Math.min(index1, index2);
    var big = Math.max(index1, index2);
    var v1 = vertices[small];
    var v2 = vertices[big];
    var start = small + 1;
    var numbers_between = Math.abs(index1 - index2) - 1;
    var new_series = [];
    var delta = start + numbers_between - vertices.length;
    if (delta > 0) {
        for (var i = 0; i < delta; i++) {
            var item = vertices.shift();
            vertices.push(item);
            start--;
        }
    }
    new_series = vertices.splice(start, numbers_between);
    new_series.push(v2, v1);
    return [new_series, vertices];
}
function is_cross_with_edges(vertices, p1, index, p2, checking_index) {
    var q1 = get_valid_index(checking_index - 1, vertices.length);
    var q2 = get_valid_index(checking_index + 1, vertices.length);
    var need_skip1 = [p1, index, p2];
    var need_skip2 = [q1, checking_index, q2];
    for (var i = 0; i < vertices.length; i++) {
        var edge_index = (i + 1) % vertices.length;
        if (need_skip1.indexOf(i) >= 0 && need_skip1.indexOf(edge_index) >= 0) {
            continue;
        }
        if (need_skip2.indexOf(i) >= 0 && need_skip2.indexOf(edge_index) >= 0) {
            continue;
        }
        if (line_segment_cross(vertices[i], vertices[edge_index], vertices[index], vertices[checking_index])) {
            return true;
        }
    }
    return false;
}
function get_valid_index(index, total) {
    if (index >= total) {
        return index % total;
    }
    if (index < 0) {
        return total + index % total;
    }
    return index;
}
// 是否是顺时针序列
function is_clockwise_sequence(vertices) {
    var left_count = 0;
    var right_count = 0;
    for (var i = 0; i < vertices.length; i++) {
        var v2_index = get_valid_index(i + 1, vertices.length);
        var p_index = get_valid_index(i + 2, vertices.length);
        var cur_side = get_point_on_vector_side(vertices[i], vertices[v2_index], vertices[p_index]);
        if (cur_side === ON_LEFT_SIDE) {
            left_count++;
        }
        else {
            right_count++;
        }
    }
    if (right_count === left_count) {
        var arr = clone(vertices);
        arr.pop();
        return is_clockwise_sequence(arr);
    }
    return right_count > left_count;
}
function get_distance(v1, v2) {
    return Math.hypot(v2.x - v1.x, v2.y - v1.y);
}
function get_angle_with_x_axis(v1, v2) {
    var distance = get_distance(v1, v2);
    var dx = v2.x - v1.x;
    var cos_a = dx / distance;
    if (v2.y >= v1.y) {
        return Math.acos(cos_a);
    }
    return 2 * Math.PI - Math.acos(cos_a);
}
function get_angle(a, b, c) {
    var a1 = get_angle_with_x_axis(b, a);
    var a2 = get_angle_with_x_axis(b, c);
    var ret = Math.abs(a1 - a2);
    return ret > Math.PI ? Math.PI * 2 - ret : ret;
}
var ON_LEFT_SIDE = 1;
var ON_RIGHT_SIDE = 2;
var ON_LINE_IN = 3;
var ON_LINE_OUT = 4;
// return point p's position regards vector v1 to v2
function get_point_on_vector_side(v1, v2, p) {
    var a1 = get_angle_with_x_axis(v1, v2);
    var a2 = get_angle_with_x_axis(v1, p);
    if (Math.abs(a1 - a2) < 0.001 || Math.abs(a1 - a2 - Math.PI) < 0.001) {
        return is_between(p.x, v1.x, v2.x) && is_between(p.y, v1.y, v2.y) ? ON_LINE_IN : ON_LINE_OUT;
    }
    if (a1 <= Math.PI) {
        return a2 < a1 || a2 - a1 > Math.PI ? ON_LEFT_SIDE : ON_RIGHT_SIDE;
    }
    return a2 > a1 || a1 - a2 > Math.PI ? ON_RIGHT_SIDE : ON_LEFT_SIDE;
}
// return true if number m is between a and b
function is_between(m, a, b) {
    if (m >= a && m <= b) {
        return true;
    }
    if (m >= b && m <= a) {
        return true;
    }
    return false;
}
function get_cross_point2(start1, end1, start2, end2) {
    var a1 = end1.y - start1.y;
    var b1 = start1.x - end1.x;
    var c1 = end1.x * start1.y - start1.x * end1.y;
    var a2 = end2.y - start2.y;
    var b2 = start2.x - end2.x;
    var c2 = end2.x * start2.y - start2.x * end2.y;
    var denominator = (a2 * b1 - a1 * b2);
    if (denominator === 0) {
        return undefined;
    }
    var x = (b2 * c1 - b1 * c2) / denominator;
    var y = (a1 * c2 - a2 * c1) / denominator;
    return new Point(x, y);
}
function line_segment_cross(p1, p2, q1, q2) {
    if (equals(p1, q1) || equals(p1, q2) || equals(p2, q1) || equals(p2, q2)) {
        return true;
    }
    var cross = get_cross_point2(p1, p2, q1, q2);
    if (!cross) {
        // the two line is parallel
        return get_point_on_vector_side(p1, p2, q1) === ON_LINE_IN || get_point_on_vector_side(p1, p2, q2) === ON_LINE_IN;
    }
    return is_between(cross.x, p1.x, p2.x) && is_between(cross.x, q1.x, q2.x) &&
        is_between(cross.y, p1.y, p2.y) && is_between(cross.y, q1.y, q2.y);
}
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
//# sourceMappingURL=convace_to_convex.js.map