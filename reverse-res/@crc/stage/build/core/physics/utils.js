// 物理世界中的1米对应Pixi坐标系中的10px
var PIXEL_PER_METER = 10;
export function convert_pixel_to_meter(pixel) {
    return pixel / PIXEL_PER_METER;
}
export function convert_meter_to_pixel(meter) {
    return meter * PIXEL_PER_METER;
}
export function concatenate_ids(id_1, id_2) {
    return id_1 + "---" + id_2;
}
/**
 * 鼠标关节的参数
 * MassMultiplier, 质量系数，用于获取MaxForce。
 * MaxForce，可以施加在角色身上的最大的力，一般为角色质量的倍数。对鼠标关节来说，这个力越大，角色跟随鼠标移动时就越稳定（较少晃动），太小的话会拖不动角色。
 * Stiffness，刚度，对鼠标关节来说，表现为物体跟随到鼠标落点的反应速度（数值越大跟过去的速度越快）。
 * Damping，阻尼，影响角色的震荡效果，0为无阻尼，1为临界阻尼（震荡效果完全消失），一般取值范围为0 - 1。
 */
export var MASS_MULTIPLIER = 6000;
export var STIFFNESS = 5;
export var DAMPING = 1;
// 物理边界实际上是一个有面积的正方形，1000为正方形边长的一半
export var EDGE_HALF_LENGTH = 1000;
// 物理边界的密度
export var EDGE_DENSITY = 0;
// 物理世界Step参数
export var DELTA_TIME = 1 / 60;
export var VELOCITY_ITERATIONS = 8;
export var POSITION_ITERATIONS = 3;
// 物理世界的默认重力加速度
export var DEFAULT_GRAVITY = 10;
// 角色物理模型的默认数值
export var DEFAULT_DENSITY = 1;
export var DEFAULT_FRICTION = 0.1;
export var DEFAULT_RESTITUTION = 0;
export function compute_convex_polygon_area(vertices) {
    var v0 = vertices[0];
    var area = 0;
    for (var i = 1; i < vertices.length; i++) {
        // Triangle vertices.
        var v1 = vertices[i];
        var v2 = vertices[(i + 1) % vertices.length];
        var e1 = {
            x: v1.x - v0.x,
            y: v1.y - v0.y,
        };
        var e2 = {
            x: v2.x - v0.x,
            y: v2.y - v0.y,
        };
        var D = (e1.x * e2.y - e1.y * e2.x) / 2;
        area += D;
    }
    return Math.abs(area);
}
//# sourceMappingURL=utils.js.map