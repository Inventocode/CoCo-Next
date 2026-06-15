import { Texture, RENDERER_TYPE } from '../pixi';
import { Result, ErrorMsg } from '../result';
import { is_internal_scene, is_actor_wrapper } from '../utils';
/**
 * 舞台背景相关处理
 * 加载背景销毁背景，以及背景状态数据设置等等
 * 暴露给外部调用
 */
var Scenes = /** @class */ (function () {
    function Scenes(app, data, transition, scene, events) {
        this.transition_type = 'none';
        this.app = app;
        this.data = data;
        this.transition = transition(app);
        this.scene = scene;
        this.events = events;
    }
    Scenes.prototype.load_scene = function (scene_id, texture_id) {
        if (this.data.get_internal_scene(scene_id)) {
            return Result.error("Scene " + scene_id + " already exists. Please use new scene id");
        }
        var texture = texture_id ? this.data.get_texture(texture_id) : Texture.EMPTY;
        if (!texture) {
            return Result.error("Cannot find texture " + texture_id + ". Please load texture first");
        }
        var scene = this.scene(scene_id, texture, texture_id || '', this.data, this.app);
        this.app.get_scene_container().addChild(scene);
        return Result.success(scene);
    };
    Scenes.prototype.set_current_scene = function (scene_id, on_complete) {
        var _this = this;
        var in_scene = this.data.get_internal_scene(scene_id);
        if (!in_scene) {
            return new ErrorMsg("Cannot find scene " + scene_id);
        }
        if (this.current_scene === scene_id) {
            return;
        }
        if (!this.current_scene) {
            this.current_scene = scene_id;
            this.set_one_scene_visible(scene_id);
            on_complete && on_complete();
            return;
        }
        var out_scene = this.data.get_internal_scene(this.current_scene);
        if (!out_scene) {
            return new ErrorMsg("Cannot find out scene " + this.current_scene);
        }
        this.current_scene = scene_id;
        this.transition.set_transition(this.transition_type, out_scene, in_scene, function () {
            _this.set_one_scene_visible(in_scene.id);
            on_complete && on_complete();
        });
        return;
    };
    Scenes.prototype.get_current_scene = function () {
        return this.current_scene;
    };
    Scenes.prototype.destroy_scene = function (scene_id) {
        var target = this.data.get_internal_scene(scene_id);
        if (!target) {
            return Result.error("Cannot find scene " + scene_id);
        }
        target.destroy();
        if (this.current_scene === scene_id) {
            this.current_scene = undefined;
        }
        var scenes = this.app.get_scene_container().children;
        var scene_ids = [];
        scenes.forEach(function (scene) {
            is_internal_scene(scene) && scene_ids.push(scene.id);
        });
        return Result.success({ scene_ids: scene_ids });
    };
    Scenes.prototype.dispose_actors_by_scene = function (scene_id) {
        var _this = this;
        var scene = this.data.get_internal_scene(scene_id);
        if (!scene) {
            return new ErrorMsg("Cannot find scene " + scene_id);
        }
        var disposed_children = scene.get_actor_container().removeChildren();
        disposed_children.forEach(function (child) {
            if (is_actor_wrapper(child)) {
                var actor = child.get_actor();
                actor.destroy();
                _this.data.clear_actor_cache(actor.get_id());
            }
        });
        return;
    };
    Scenes.prototype.destroy_all_scenes = function () {
        var _this = this;
        this.get_scene_ids().forEach(function (scene_id) {
            var scene = _this.data.get_internal_scene(scene_id);
            scene && scene.destroy();
        });
        this.current_scene = undefined;
        this.data.clear_all_scenes_cache();
    };
    Scenes.prototype.get_scene_ids = function () {
        var scene_ids = [];
        var scenes = this.app.get_scene_container().children;
        scenes.forEach(function (scene) {
            is_internal_scene(scene) && scene_ids.push(scene.id);
        });
        return scene_ids;
    };
    Scenes.prototype.set_one_scene_visible = function (scene_id) {
        var scenes_container = this.app.get_scene_container();
        scenes_container.children.forEach(function (scene) {
            if (!is_internal_scene(scene)) {
                return;
            }
            if (scene.id === scene_id) {
                scene.visible = true;
            }
            else {
                scene.visible = false;
            }
        });
        this.events.fire('scene:current_scene_changed', scene_id);
    };
    Scenes.prototype.set_transition_type = function (type) {
        if (type === 'distort' && this.app.get_renderer_type() !== RENDERER_TYPE.WEBGL) {
            return new ErrorMsg('Only WEBGL support distort transition');
        }
        this.transition_type = type;
        return;
    };
    Scenes.prototype.get_scene = function (scene_id) {
        var scene = this.data.get_internal_scene(scene_id);
        if (!scene) {
            return Result.error("Cannot find scene " + scene_id);
        }
        return Result.success(scene);
    };
    return Scenes;
}());
export { Scenes };
//# sourceMappingURL=model.js.map