import equals from 'ramda/es/equals';
import { map_actor_px_to_local_point, collision_opti_scaled_to_origin_point } from '../utils';
import { EdgeBinary } from '../di/interfaces/const';
var PixelDetector = /** @class */ (function () {
    function PixelDetector(actor, app, data) {
        /**
         * 全局坐标系的素材轮廓点顶点坐标缓存。
         */
        this.cached_bounds_points_vertices = {
            value: undefined,
            dependencies: [],
        };
        /**
         * 全局坐标系的素材内部点顶点坐标缓存。
         */
        this.cached_internal_points_vertices = {
            value: undefined,
            dependencies: [],
        };
        this.actor = actor;
        this.app = app;
        this.data = data;
    }
    /**
     * 通过当前状态的属性生成数据数组，用于对比是否和缓存的依赖数组一致，判断缓存是否可用。
     * 如果一致，说明缓存有效，可直接使用。
     * 如果不一致，说明缓存失效。
     */
    PixelDetector.prototype.get_state_dependencies = function () {
        return [
            this.actor.texture,
            this.actor.position.x,
            this.actor.position.y,
            this.actor.scale.x,
            this.actor.scale.y,
            this.actor.rotation,
        ];
    };
    /**
     * 获取缓存的素材轮廓点顶点坐标。根据当前角色的状态判断缓存是否可用。
     */
    PixelDetector.prototype.get_cached_bounds_points_vertices = function () {
        var value;
        if (!this.cached_bounds_points_vertices.value) {
            return;
        }
        var cur_state_deps = this.get_state_dependencies();
        if (equals(cur_state_deps, this.cached_bounds_points_vertices.dependencies)) {
            value = this.cached_bounds_points_vertices.value;
        }
        else {
            this.cached_bounds_points_vertices.value = undefined;
        }
        return value;
    };
    /**
     * 获取缓存的素材内部点顶点坐标。根据当前角色的状态判断缓存是否可用。
     */
    PixelDetector.prototype.get_cached_internal_points_vertices = function () {
        var value;
        if (!this.cached_internal_points_vertices.value) {
            return;
        }
        var cur_state_deps = this.get_state_dependencies();
        if (equals(cur_state_deps, this.cached_internal_points_vertices.dependencies)) {
            value = this.cached_internal_points_vertices.value;
        }
        else {
            this.cached_internal_points_vertices.value = undefined;
        }
        return value;
    };
    /**
     * 更新素材轮廓点顶点坐标缓存。
     * @param coordinates 素材顶点坐标。
     */
    PixelDetector.prototype.set_cached_bounds_points_vertices = function (coordinates) {
        var cur_state_deps = this.get_state_dependencies();
        this.cached_bounds_points_vertices = {
            value: coordinates,
            dependencies: cur_state_deps,
        };
    };
    /**
     * 更新素材内部点顶点坐标缓存。
     * @param coordinates 素材顶点坐标。
     */
    PixelDetector.prototype.set_cached_internal_points_vertices = function (coordinates) {
        var cur_state_deps = this.get_state_dependencies();
        this.cached_internal_points_vertices = {
            value: coordinates,
            dependencies: cur_state_deps,
        };
    };
    PixelDetector.prototype.get_vertices = function (points) {
        var _this = this;
        var vertices;
        points.forEach(function (point) {
            var origin_point = collision_opti_scaled_to_origin_point(point);
            var transformed_point = map_actor_px_to_local_point(origin_point, _this.actor);
            if (!vertices) {
                vertices = {
                    max_x: transformed_point.x,
                    min_x: transformed_point.x,
                    max_y: transformed_point.y,
                    min_y: transformed_point.y,
                };
            }
            else {
                vertices.max_x = Math.max(vertices.max_x, transformed_point.x);
                vertices.min_x = Math.min(vertices.min_x, transformed_point.x);
                vertices.max_y = Math.max(vertices.max_y, transformed_point.y);
                vertices.min_y = Math.min(vertices.min_y, transformed_point.y);
            }
        });
        return vertices;
    };
    PixelDetector.prototype.check_relation_by_vertices = function (vertices, relation) {
        var max_x = vertices.max_x, min_x = vertices.min_x, max_y = vertices.max_y, min_y = vertices.min_y;
        var _a = this.app.get_app().renderer, width = _a.width, height = _a.height;
        var half_stage_width = width / 2;
        var half_stage_height = height / 2;
        var num_compared_with_right_edge = 0;
        var num_compared_with_left_edge = 0;
        var num_compared_with_top_edge = 0;
        var num_compared_with_bottom_edge = 0;
        switch (relation) {
            case 'collision':
                num_compared_with_right_edge = max_x;
                num_compared_with_left_edge = min_x;
                num_compared_with_top_edge = min_y;
                num_compared_with_bottom_edge = max_y;
                break;
            case 'overstep':
                num_compared_with_right_edge = min_x;
                num_compared_with_left_edge = max_x;
                num_compared_with_top_edge = max_y;
                num_compared_with_bottom_edge = min_y;
                break;
        }
        var result_value = 0;
        if (num_compared_with_right_edge >= half_stage_width) {
            result_value += EdgeBinary.RIGHT;
        }
        if (num_compared_with_left_edge <= -half_stage_width) {
            result_value += EdgeBinary.LEFT;
        }
        if (num_compared_with_top_edge <= -half_stage_height) {
            result_value += EdgeBinary.TOP;
        }
        if (num_compared_with_bottom_edge >= half_stage_height) {
            result_value += EdgeBinary.BOTTOM;
        }
        return result_value;
    };
    PixelDetector.prototype.get_texture_bounds_points_vertices = function () {
        var cached_vertices = this.get_cached_bounds_points_vertices();
        if (cached_vertices) {
            return cached_vertices;
        }
        if (!this.actor.current_style) {
            return;
        }
        var bounds_points = this.data.get_texture_bounds_points(this.actor.current_style.texture_id);
        if (!bounds_points || !bounds_points[0]) {
            return;
        }
        var vertices = this.get_vertices(bounds_points);
        vertices && this.set_cached_bounds_points_vertices(vertices);
        return vertices;
    };
    PixelDetector.prototype.get_texture_internal_points_vertices = function () {
        var cached_vertices = this.get_cached_internal_points_vertices();
        if (cached_vertices) {
            return cached_vertices;
        }
        if (!this.actor.current_style) {
            return;
        }
        var internal_points = this.data.get_texture_internal_points(this.actor.current_style.texture_id);
        if (!internal_points || !internal_points[0]) {
            return;
        }
        var vertices = this.get_vertices(internal_points);
        vertices && this.set_cached_internal_points_vertices(vertices);
        return vertices;
    };
    PixelDetector.prototype.contains_edge = function (check_result, edge) {
        var ratio = edge ? edge : 15;
        return !!(ratio & check_result);
    };
    return PixelDetector;
}());
export { PixelDetector };
//# sourceMappingURL=pixel_detector.js.map