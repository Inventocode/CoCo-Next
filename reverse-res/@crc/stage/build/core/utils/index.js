import { Matrix, Point, Text } from '../pixi';
import { ObjectType, InternalObjectType } from '../di/interfaces/const';
/**
 * 该缩放系数用于碰撞侦测的优化：
 * 在存储一个素材的像素点颜色信息时，先将该素材缩小至原大小的0.7倍再读取像素点，以此减少像素点的数量。
 * 注意事项：
 * 1. 舞台上实际展示的角色素材宽高并不受该缩放系数影响。
 * 2. Stage内部涉及到像素点颜色信息的计算都需要将该缩放系数的作用考虑在内，
 *    如轮廓点和内部点的计算，像素点击等。换句话说，Stage缓存的轮廓点和
 *    内部点坐标也是基于缩放后的素材去计算的。
 */
export var COLLISION_OPTIMIZATION_SCALE_FACTOR = 0.7;
/**
 * 获取原宽高在经过 COLLISION_OPTIMIZATION_SCALE_FACTOR 作用后的数值
 * @param size 原宽高
 * @returns 原宽高在经过 COLLISION_OPTIMIZATION_SCALE_FACTOR 作用后的数值
 */
export function get_collision_optimization_scaled_size(size) {
    return {
        width: Math.floor(size.width * COLLISION_OPTIMIZATION_SCALE_FACTOR),
        height: Math.floor(size.height * COLLISION_OPTIMIZATION_SCALE_FACTOR),
    };
}
/**
 * 将原坐标点的x、y按 COLLISION_OPTIMIZATION_SCALE_FACTOR 进行缩小，返回缩小后的坐标点
 * @param point 原坐标点
 * @returns 缩小后的坐标点
 */
export function origin_to_collision_opti_scaled_point(point) {
    return new Point(Math.floor(point.x * COLLISION_OPTIMIZATION_SCALE_FACTOR), Math.floor(point.y * COLLISION_OPTIMIZATION_SCALE_FACTOR));
}
/**
 * 将一个已经按 COLLISION_OPTIMIZATION_SCALE_FACTOR 缩小后的坐标点还原，返回缩小前的坐标点
 * @param point 缩小后的坐标点
 * @returns 缩小前的坐标点
 */
export function collision_opti_scaled_to_origin_point(point) {
    return new Point(Math.floor(point.x / COLLISION_OPTIMIZATION_SCALE_FACTOR), Math.floor(point.y / COLLISION_OPTIMIZATION_SCALE_FACTOR));
}
/**
 * 根据角色的最小外接矩形，获取颜色碰撞中截图区域的变换矩阵。
 * tx代表元素的横向移动距离，ty代表元素的纵向移动距离，两者默认值都为0。
 * a代表元素宽度的缩放规模，d代表元素高度的缩放规模，两者默认值都为1。
 * b代表元素的x轴倾斜程度，c代表元素的y轴倾斜程度，两者默认值都为0。
 * 渲染到renderTexture上的元素使用的是像素坐标系，以元素的的左上角为（0，0）点，x轴正方向为水平向右，y轴正方向为竖直向下。
 * 设元素上任意一个点的坐标为（x，y），那么经过矩阵变换后的坐标(x'，y')可以通过如下公式获得：
 * x' = a * x + c * y + tx
 * y' = b * x + d * y + ty
 * @param actor_bounds 角色的最小外接矩形（左上顶点的坐标 + 宽高）
 * @param stage_size 舞台的宽高
 */
export function get_screenshot_area_transform_matrix(actor_bounds, stage_size) {
    var transform = new Matrix();
    transform.tx = -Math.floor((actor_bounds.x + stage_size.width / 2) * COLLISION_OPTIMIZATION_SCALE_FACTOR);
    transform.ty = -Math.floor((actor_bounds.y + stage_size.height / 2) * COLLISION_OPTIMIZATION_SCALE_FACTOR);
    transform.a = transform.d = COLLISION_OPTIMIZATION_SCALE_FACTOR;
    return transform;
}
/**
 * 得到角色质心
 * 即角色的texture的中心点的位置，非角色改变中心点后的位置
 * @param actor 角色
 * @param position 角色位置，即角色中心点的位置
 * @returns 角色质心
 */
export function get_actor_center(actor, position) {
    var origin_center = new Point(position.x - actor.pivot.x * actor.scale.x, position.y - actor.pivot.y * actor.scale.y);
    // 取得质心在角色旋转后的位置
    var center = make_rotate(origin_center, position, actor.rotation);
    return center;
}
/**
 * 全局某个点（point）随着旋转中心位置（center）旋转某个弧度（rotation）后变到了什么位置（returns）
 * point, center, returns三个点为：同一坐标系的不同三个点
 * @param point 全局某个点
 * @param center 旋转中心点
 * @param rotation 角色旋转弧度
 * @returns 旋转后的点
 */
export function make_rotate(point, center, rotation) {
    var off_x = point.x - center.x;
    var off_y = point.y - center.y;
    var cos = Math.cos(rotation);
    var sin = Math.sin(rotation);
    // 由余弦定理和正弦定理推导出的公式
    var x = cos * off_x - off_y * sin + center.x;
    var y = cos * off_y + off_x * sin + center.y;
    return new Point(x, y);
}
/**
 * 将全局坐标系中的某个点（point），投影到某个角色的坐标系中【以角色左上角为（0，0）点的坐标系】，
 * 并获取该点在该角色坐标系中的像素位置（returns），像素位置为正整数。
 * point和returns为：同一个点在不同坐标系上的不同数值体现
 * 该方法用于像素检测
 * @param point 以全局为坐标的某个点
 * @param actor 换算的角色
 * @returns 换算后的点
 */
export function map_local_point_to_actor_px(point, actor) {
    var center = get_actor_center(actor, actor.position);
    // 取得center在角色旋转前的位置
    var origin_center = make_rotate(center, actor.position, -actor.rotation);
    // 取得point在角色旋转前的位置
    var origin_point = make_rotate(point, actor.position, -actor.rotation);
    // scale小于0的话角色有翻转
    var x = actor.scale.x > 0 ? origin_point.x - origin_center.x + actor.width / 2 : origin_point.x - origin_center.x - actor.width / 2;
    var y = actor.scale.y > 0 ? origin_point.y - origin_center.y + actor.height / 2 : origin_point.y - origin_center.y - actor.height / 2;
    // 坐标点转换为原大小的像素点
    return new Point(Math.round(x / actor.scale.x), Math.round(y / actor.scale.y));
}
/**
 * 将角色坐标系中【以角色左上角为（0，0）点的坐标系】的某个点，投影到全局坐标系中，
 * 并获取该点在全局坐标系的像素位置，像素位置不一定为正整数。
 * point和returns为：同一个点在不同坐标系上的不同数值体现
 * 该方法使用场景：
 * 用于 颜色碰撞 和 边缘碰撞 中，角色像素点在全局坐标系上像素点的换算；
 * @param point 以角色为坐标系的某个点
 * @param actor 换算的角色
 * @returns 换算后的点
 */
export function map_actor_px_to_local_point(point, actor) {
    // 取得center在角色旋转前的位置
    var origin_center = new Point(actor.position.x - actor.pivot.x * actor.scale.x, actor.position.y - actor.pivot.y * actor.scale.y);
    var x = point.x * actor.scale.x;
    var y = point.y * actor.scale.y;
    // 计算旋转前对应全局坐标系中的坐标位置，scale小于0的话角色有翻转
    var origin_x = actor.scale.x > 0
        ? x + origin_center.x - actor.width / 2
        : x + origin_center.x + actor.width / 2;
    var origin_y = actor.scale.y > 0
        ? y + origin_center.y - actor.height / 2
        : y + origin_center.y + actor.height / 2;
    // 以角色（0，0）点为中心，并且在全局坐标系上的点
    var local = new Point(origin_x, origin_y);
    // 将该点随角色旋转后的位置
    var add_rotation = make_rotate(local, actor.position, actor.rotation);
    return new Point(add_rotation.x, add_rotation.y);
}
/**
 * 某坐标点与原点的连线和x轴正轴方向间的夹角，单位为弧度
 * @param x x轴值
 * @param y y轴值
 * @returns 弧度
 */
export function position_to_rotation(x, y) {
    if (x === 0 && y === 0) {
        return 0;
    }
    // 旋转半径
    var r = Math.pow(x * x + y * y, 0.5);
    // y轴上的弧度
    var ry = Math.asin(y / r);
    // -PI 到 PI 的结果换算为 0 到 2PI的结果
    if (x < 0) {
        ry = ry > 0 ? Math.PI - ry : -Math.PI - ry;
    }
    return (ry < 0 ? ry + Math.PI * 2 : ry);
}
/**
 * 弧度转换为角度公式
 * @param radian 弧度
 * @returns 角度
 */
export function radian_to_angle(radian) {
    return radian * 180 / Math.PI;
}
/**
 * 角度转换为弧度公式
 * @param angle 角度
 * @returns 弧度
 */
export function angle_to_radian(angle) {
    return angle * Math.PI / 180;
}
/**
 * hsl(色相，饱和度，亮度)转rgb(红，绿，蓝)
 * 转换公式来自维基百科
 * @param h 色相[0, 360)
 * @param s 饱和度[0, 1]
 * @param l 亮度[0, 1]
 * @returns [r, g, b]。每个数字范围为[0, 255]
 */
export function hsl_to_rgb(h, s, l) {
    var r;
    var g;
    var b;
    h /= 360;
    if (s === 0) {
        r = g = b = l;
    }
    else {
        var hue_to_rgb = function (_p, _q, _t) {
            if (_t < 0) {
                _t += 1;
            }
            if (_t > 1) {
                _t -= 1;
            }
            if (_t < 1 / 6) {
                return _p + (_q - _p) * 6 * _t;
            }
            if (_t < 1 / 2) {
                return _q;
            }
            if (_t < 2 / 3) {
                return _p + (_q - _p) * (2 / 3 - _t) * 6;
            }
            return _p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        var tr = h + 1 / 3;
        var tg = h;
        var tb = h - 1 / 3;
        r = hue_to_rgb(p, q, tr);
        g = hue_to_rgb(p, q, tg);
        b = hue_to_rgb(p, q, tb);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
/**
 * rgb(红，绿，蓝)转hsl(色相，饱和度，亮度)
 * 转换公式来自维基百科
 * @param r 红[0, 255]
 * @param g 绿[0, 255]
 * @param b 蓝[0, 255]
 * @returns [h, s, l]。h:[0, 360), s:[0, 1], l:[0, 1]
 */
export function rgb_to_hsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h;
    var s;
    var l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default: h = 0;
        }
        h /= 6;
    }
    h *= 360;
    return [h, s, l];
}
/**
 * hex颜色字符串转rgb
 * @param color hex颜色字符串
 * @returns [r, g, b]。每个数字范围为[0, 255]
 */
export function hex_to_rgb(color) {
    // 字符串转16进制数字
    var hex = parseInt(color, 16);
    // 每八位一个数值，符号右移后按位与八位
    var r = (hex >> 16) & 255;
    var g = (hex >> 8) & 255;
    var b = hex & 255;
    return [r, g, b];
}
/**
 * rgb转hex字符串
 * @param r 红[0, 255]
 * @param g 绿[0, 255]
 * @param b 蓝[0, 255]
 * @returns hex字符串
 */
export function rgb_to_hex(r, g, b) {
    return ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
}
/**
 * hex字符串转hsl
 * 通过hex_to_rgb, rgb_to_hsl两个方法实现
 * @param color hex字符串
 * @returns [h, s, l]。h:[0, 360), s:[0, 1], l:[0, 1]
 */
export function hex_to_hsl(color) {
    var rgb = hex_to_rgb(color);
    return rgb_to_hsl(rgb[0], rgb[1], rgb[2]);
}
/**
 * hsl转hex字符串
 * 通过hsl_to_rgb, rgb_to_hex两个方法实现
 * @param h 色相[0, 360)
 * @param s 饱和度[0, 1]
 * @param l 亮度[0, 1]
 * @returns hex字符串
 */
export function hsl_to_hex(h, s, l) {
    var rgb = hsl_to_rgb(h, s, l);
    return rgb_to_hex(rgb[0], rgb[1], rgb[2]);
}
/**
 * 判断传入参数是否为IActor
 * @param obj 传入参数
 */
export function is_internal_actor(obj) {
    if (obj && obj.type) {
        return obj.type === ObjectType.Actor;
    }
    return false;
}
/**
 * 判断传入参数是否为IScene
 * @param obj 传入参数
 */
export function is_internal_scene(obj) {
    if (obj && obj.type) {
        return obj.type === ObjectType.Scene;
    }
    return false;
}
/**
 * 判断传入参数是否为IActorWrapper
 * @param obj 传入参数
 */
export function is_actor_wrapper(obj) {
    if (obj && obj.type) {
        return obj.type === InternalObjectType.ActorWrapper;
    }
    return false;
}
/**
 * 判断浏览器事件是否为TouchEvent
 * @param e 事件
 */
export function is_touch_event(e) {
    return e.type.startsWith('touch');
}
/**
 * 判断传入参数是否为ErrorMsg
 * @param obj 传入参数
 */
export function is_error_msg(obj) {
    if (obj && obj.type) {
        return obj.type === 'error_msg';
    }
    return false;
}
/**
 * 对旋转弧度取模，确保输出的值在[-PI, PI]。
 * 关于-PI和PI，实际上这两个值效果是一致的，但业务上可能需要这个区别。
 * 当取模计算结果为PI时，根据原来数值的正负性，来判定结果为PI还是-PI。
 * @param rotation 输入的旋转弧度
 */
export function mod_rotation(rotation) {
    var DOUBLE_PI = 2 * Math.PI;
    // 取弧度绝对值，先用正值计算
    var value = Math.abs(rotation);
    // 保留原本弧度的正负值信息
    var ratio = rotation < 0 ? -1 : 1;
    // 如果弧度超过2 * PI，则取余数，控制弧度在[0, 2 * PI]内
    value = value > DOUBLE_PI ? value % (DOUBLE_PI) : value;
    // 如果原本的弧度为负，则用2 * PI减去当前弧度，从反向取弧度，保持和原本弧度的效果一致
    value = ratio < 0 ? DOUBLE_PI - value : value;
    // 如果弧度大于180°，取反向的补角
    value = value > Math.PI ? value - DOUBLE_PI : value;
    return value;
}
var text_measurer;
/**
 * Stage内部测量文本长度的方法。
 * 由于用CanvasRenderingContext的measureText在不同浏览器存在差异。因此提供该方法以统一测量结果。
 * @param text 文本字符串
 * @param style 文本的样式。可选。
 */
export function measure_text_width(text, style) {
    if (!text_measurer) {
        text_measurer = new Text('');
    }
    if (style) {
        text_measurer.style = style;
    }
    text_measurer.text = text;
    return text_measurer.width;
}
/**
 * 初始化后的舞台对象的宽高可能会超出舞台范围，
 * 通过该方法调整对象的缩放比例，限制它不超出舞台边缘。
 * @param obj_size 对象的宽高
 * @param stage_size 舞台的宽高
 * @returns 调整后的对象的缩放比例
 */
export function get_adjusted_scale(obj_size, stage_size) {
    if (obj_size.width === 0 || obj_size.height === 0) {
        return;
    }
    var scale = Math.min(stage_size.width / obj_size.width, stage_size.height / obj_size.height);
    return scale > 1 ? 1 : scale;
}
/**
 * 默认的节流阀值：16毫秒。
 */
export var RESIZE_THROTTLE = 16;
export function throttle(func, wait) {
    var prev = Date.now();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (now - prev >= wait) {
            func.apply(undefined, args);
            prev = now;
        }
    };
}
export function debounce(func, wait) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = window.setTimeout(function () {
            func.apply(undefined, args);
        }, wait);
    };
}
export function is_mouse_in_stage(mouse_pos, stage_size) {
    var half_width = stage_size.width / 2;
    var half_height = stage_size.height / 2;
    // 拖拽作用域在舞台范围内
    if (mouse_pos.x < -half_width ||
        mouse_pos.x > half_width ||
        mouse_pos.y < -half_height ||
        mouse_pos.y > half_height) {
        return false;
    }
    return true;
}
//# sourceMappingURL=index.js.map