import { Result, ErrorMsg } from '../result';
import { is_internal_scene } from '../utils';
/**
 * 舞台角色相关处理
 * 加载角色销毁角色，以及角色状态数据设置等等
 * 暴露给外部调用
 */
var Actors = /** @class */ (function () {
    function Actors(app, data, actor) {
        this.app = app;
        this.data = data;
        this.actor = actor;
    }
    Actors.prototype.load_actor = function (options) {
        var actor_id = options.actor_id, parent_scene_id = options.parent_scene_id, position = options.position, scale = options.scale, rotation_type = options.rotation_type, rotation = options.rotation, visible = options.visible, group = options.group;
        if (this.data.get_internal_actor(actor_id)) {
            return Result.error("Actor " + actor_id + " already exists. Please use new actor id");
        }
        var scene = this.data.get_internal_scene(parent_scene_id);
        if (!scene) {
            return Result.error("Scene " + parent_scene_id + " should be loaded before loading actor " + actor_id);
        }
        var actor = this.actor({
            actor_id: actor_id,
            parent_scene: scene,
            app: this.app,
            data: this.data,
        });
        if (position) {
            actor.set_position_x(position.x);
            actor.set_position_y(position.y);
        }
        if (scale) {
            actor.set_scale(scale.x, scale.y);
        }
        if (rotation !== undefined) {
            actor.set_rotation(rotation);
        }
        if (rotation_type !== undefined) {
            actor.set_rotation_type(rotation_type);
        }
        if (visible !== undefined) {
            actor.set_visible(visible);
        }
        if (group !== undefined) {
            actor.set_group(group);
        }
        return Result.success(actor);
    };
    Actors.prototype.destroy_actor = function (actor_id) {
        var target = this.data.get_internal_actor(actor_id);
        if (!target) {
            return new ErrorMsg("Cannot find actor " + actor_id);
        }
        target.destroy();
        return;
    };
    Actors.prototype.destroy_all_actors = function () {
        var _this = this;
        var scenes = this.app.get_scene_container().children;
        scenes.forEach(function (scene) {
            if (!is_internal_scene(scene)) {
                return;
            }
            var actor_ids = scene.get_actor_ids();
            actor_ids.forEach(function (actor_id) {
                var actor = _this.data.get_internal_actor(actor_id);
                actor && actor.destroy();
            });
        });
        this.data.clear_all_actors_cache();
    };
    Actors.prototype.get_actor_ids = function (group) {
        var actors_id = [];
        var scenes = this.app.get_scene_container().children;
        scenes.forEach(function (scene) {
            if (!is_internal_scene(scene)) {
                return;
            }
            actors_id = actors_id.concat(scene.get_actor_ids(group));
        });
        return actors_id;
    };
    Actors.prototype.get_actor = function (actor_id) {
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return Result.error("Cannot find actor " + actor_id);
        }
        return Result.success(actor);
    };
    return Actors;
}());
export { Actors };
//# sourceMappingURL=model.js.map