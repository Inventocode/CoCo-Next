var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import includes from 'ramda/es/includes';
import { utils, Texture, Spritesheet } from '../pixi';
import { is_internal_scene, is_actor_wrapper, get_collision_optimization_scaled_size } from '../utils';
import { collect_texture_internal_points, trace_and_get_bounds } from '../utils/bounds';
import { concave_to_convex } from '../utils/convace_to_convex';
/**
 * 舞台数据管理区以及缓存处理
 * 在Stage系列库中内部使用，不暴露给业务方
 */
var Data = /** @class */ (function () {
    function Data(app) {
        this.scenes_cache = new Map();
        this.actors_cache = new Map();
        this.textures_points_color_data = new Map();
        this.textures_bounds_points = new Map();
        this.textures_internal_points = new Map();
        this.textures_convex_groups = new Map();
        this.sprite_sheets = new Map();
        this.app = app;
    }
    Data.prototype.get_texture = function (texture_id) {
        var texture_cache = utils.TextureCache[texture_id];
        if (!(texture_cache instanceof Texture)) {
            return;
        }
        return texture_cache;
    };
    Data.prototype.get_texture_points_color_data = function (texture_id) {
        var data = this.textures_points_color_data.get(texture_id);
        if (data) {
            return data;
        }
        var texture = this.get_texture(texture_id);
        if (!texture) {
            return;
        }
        return this.set_points_data(texture_id, texture);
    };
    Data.prototype.get_texture_points_position = function (texture_id) {
        var internal_points = this.get_texture_internal_points(texture_id);
        var bounds_points = this.get_texture_bounds_points(texture_id);
        if (!internal_points || !bounds_points) {
            return;
        }
        return internal_points.concat(bounds_points);
    };
    Data.prototype.get_texture_internal_points = function (texture_id) {
        var cache_points = this.textures_internal_points.get(texture_id);
        if (cache_points) {
            return cache_points;
        }
        var texture = this.get_texture(texture_id);
        var data = this.get_texture_points_color_data(texture_id);
        if (!texture || !data) {
            return;
        }
        var scaled_texture_size = get_collision_optimization_scaled_size({ width: texture.width, height: texture.height });
        var points = collect_texture_internal_points(data, scaled_texture_size.width, scaled_texture_size.height);
        if (!points) {
            return;
        }
        this.textures_internal_points.set(texture_id, points);
        return points;
    };
    Data.prototype.get_texture_bounds_points = function (texture_id) {
        var cache_points = this.textures_bounds_points.get(texture_id);
        if (cache_points) {
            return cache_points;
        }
        var texture = this.get_texture(texture_id);
        var data = this.get_texture_points_color_data(texture_id);
        if (!texture || !data) {
            return;
        }
        var scaled_texture_size = get_collision_optimization_scaled_size({ width: texture.width, height: texture.height });
        var points = trace_and_get_bounds(data, scaled_texture_size.width, scaled_texture_size.height, { mode: 'step', step: 5 });
        if (!points) {
            return;
        }
        this.textures_bounds_points.set(texture_id, points);
        return points;
    };
    Data.prototype.get_texture_convex_groups = function (texture_id) {
        var cache_groups = this.textures_convex_groups.get(texture_id);
        if (cache_groups) {
            return cache_groups;
        }
        var groups = this.collect_texture_convex_groups(texture_id);
        if (!groups) {
            return;
        }
        this.textures_convex_groups.set(texture_id, groups);
        return groups;
    };
    Data.prototype.collect_texture_convex_groups = function (texture_id) {
        var texture = this.get_texture(texture_id);
        var data = this.get_texture_points_color_data(texture_id);
        if (!texture || !data) {
            return;
        }
        var scaled_texture_size = get_collision_optimization_scaled_size({ width: texture.width, height: texture.height });
        var bounds = trace_and_get_bounds(data, scaled_texture_size.width, scaled_texture_size.height, {
            mode: 'vertex',
            tolerance: 5,
        });
        if (!bounds)
            return;
        var convex_groups = [];
        concave_to_convex(bounds, convex_groups);
        return convex_groups;
    };
    Data.prototype.set_points_data = function (texture_id, texture) {
        var source = texture.baseTexture.getDrawableSource && texture.baseTexture.getDrawableSource();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx || !source) {
            return;
        }
        var scaled_texture_size = get_collision_optimization_scaled_size({ width: texture.width, height: texture.height });
        canvas.width = scaled_texture_size.width || 1;
        canvas.height = scaled_texture_size.height || 1;
        ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
        // 把8位无符号整形固定数组换成32位，从[r, g, b, a, r, ...] 换成 [abgr, abgr, abgr]
        var data = new Uint32Array(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
        this.textures_points_color_data.set(texture_id, data);
        return data;
    };
    Data.prototype.get_internal_scene = function (scene_id) {
        var scene_cache = this.scenes_cache.get(scene_id);
        if (scene_cache)
            return scene_cache;
        var scene_container_children = this.app.get_scene_container().children;
        for (var i = 0; i < scene_container_children.length; i++) {
            var scene = scene_container_children[i];
            if (is_internal_scene(scene) && scene.id === scene_id) {
                this.scenes_cache.set(scene_id, scene);
                return scene;
            }
        }
        return;
    };
    Data.prototype.get_internal_actor = function (actor_id, scene_ids) {
        var e_1, _a, e_2, _b;
        var actor_cache = this.actors_cache.get(actor_id);
        var is_target_scene = function (scene) { return !scene_ids ||
            includes(scene.get_id(), scene_ids); };
        if (actor_cache) {
            if (!scene_ids || is_target_scene(actor_cache.get_parent_scene())) {
                return actor_cache;
            }
            return;
        }
        var scenes = this.app.get_scene_container().children;
        try {
            for (var scenes_1 = __values(scenes), scenes_1_1 = scenes_1.next(); !scenes_1_1.done; scenes_1_1 = scenes_1.next()) {
                var scene = scenes_1_1.value;
                if (!is_internal_scene(scene) || !is_target_scene(scene)) {
                    continue;
                }
                var actor_container_children = scene.get_actor_container().children;
                try {
                    for (var actor_container_children_1 = (e_2 = void 0, __values(actor_container_children)), actor_container_children_1_1 = actor_container_children_1.next(); !actor_container_children_1_1.done; actor_container_children_1_1 = actor_container_children_1.next()) {
                        var actor_wrapper = actor_container_children_1_1.value;
                        if (is_actor_wrapper(actor_wrapper) && actor_wrapper.id === actor_id) {
                            var actor = actor_wrapper.get_actor();
                            this.actors_cache.set(actor_id, actor);
                            return actor;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (actor_container_children_1_1 && !actor_container_children_1_1.done && (_b = actor_container_children_1.return)) _b.call(actor_container_children_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (scenes_1_1 && !scenes_1_1.done && (_a = scenes_1.return)) _a.call(scenes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return;
    };
    Data.prototype.get_target = function (target_id) {
        var target = this.get_internal_scene(target_id);
        if (target) {
            return target;
        }
        return this.get_internal_actor(target_id);
    };
    Data.prototype.clear_scene_cache = function (scene_id) {
        var scene = this.scenes_cache.get(scene_id);
        if (scene) {
            this.scenes_cache.delete(scene_id);
        }
    };
    Data.prototype.clear_actor_cache = function (actor_id) {
        var actor = this.actors_cache.get(actor_id);
        if (actor) {
            this.actors_cache.delete(actor_id);
        }
    };
    Data.prototype.clear_texture_points_cache = function (texture_id) {
        var points_data = this.textures_points_color_data.get(texture_id);
        points_data && this.textures_points_color_data.delete(texture_id);
        var bounds = this.textures_bounds_points.get(texture_id);
        bounds && this.textures_bounds_points.delete(texture_id);
        var internal_points = this.textures_internal_points.get(texture_id);
        internal_points && this.textures_internal_points.delete(texture_id);
        var groups = this.textures_convex_groups.get(texture_id);
        groups && this.textures_convex_groups.delete(texture_id);
    };
    Data.prototype.clear_all_scenes_cache = function () {
        this.scenes_cache.clear();
    };
    Data.prototype.clear_all_actors_cache = function () {
        this.actors_cache.clear();
    };
    Data.prototype.clear_all_textures_points_cache = function () {
        this.textures_points_color_data.clear();
        this.textures_bounds_points.clear();
        this.textures_internal_points.clear();
        this.textures_convex_groups.clear();
    };
    Data.prototype.get_sprite_sheet_data = function (sprite_sheet_id) {
        return this.sprite_sheets.get(sprite_sheet_id);
    };
    Data.prototype.parse_and_cache_sprite_sheet_data = function (sprite_sheet_id, origin_texture_id, json) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var may_be_sprite_sheet = _this.sprite_sheets.get(sprite_sheet_id);
            if (may_be_sprite_sheet) {
                resolve(may_be_sprite_sheet);
            }
            var texture = _this.get_texture(origin_texture_id);
            if (!texture) {
                resolve(undefined);
                return;
            }
            var sprite_sheet = new Spritesheet(texture, json);
            sprite_sheet.parse(function () {
                if (!sprite_sheet.textures) {
                    resolve(undefined);
                    return;
                }
                var data = {
                    origin_texture_id: origin_texture_id,
                    texture_ids: Object.keys(sprite_sheet.textures),
                };
                _this.sprite_sheets.set(sprite_sheet_id, data);
                resolve(data);
            });
        });
    };
    Data.prototype.clear_sprite_sheet_cache = function (sprite_sheet_id) {
        return this.sprite_sheets.delete(sprite_sheet_id);
    };
    Data.prototype.clear_all_sprite_sheet_cache = function () {
        this.sprite_sheets.clear();
    };
    Data.prototype.is_texture_in_sprite_sheet = function (texture_id) {
        var e_3, _a;
        var values = this.sprite_sheets.values();
        try {
            for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                var value = values_1_1.value;
                if (includes(texture_id, value.texture_ids)) {
                    return true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    return Data;
}());
export { Data };
//# sourceMappingURL=model.js.map