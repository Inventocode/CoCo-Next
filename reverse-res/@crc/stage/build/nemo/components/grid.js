import { Sprite, Texture } from '../../core/pixi';
import { ErrorMsg } from '../../core/result';
var Grid = /** @class */ (function () {
    function Grid(opt, app, data, events) {
        var _this = this;
        this.visible = false;
        this.on_stage_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
            _this.background.texture = width > height ? _this.bg_landscape_texture : _this.bg_portrait_texture;
        };
        this.app = app;
        this.events = events;
        this.data = data;
        this.bg_portrait_texture = Texture.from(opt.grid_img);
        this.bg_landscape_texture = Texture.from(opt.grid_landscape_img);
        this.background = new Sprite(this.bg_portrait_texture);
        this.background.anchor.set(0.5);
        this.background.interactive = true;
        this.events.add_listener('stage:resize', this.on_stage_resize);
    }
    Grid.prototype.set_target_actor = function (actor_id) {
        var _this = this;
        this.get_displayed() && this.hide();
        // actor_id为空表示选中背景，则设置网格在背景容器最上面一层
        if (!actor_id) {
            var scene_container_index = this.app.get_app().stage.getChildIndex(this.app.get_scene_container());
            this.app.get_app().stage.addChildAt(this.background, scene_container_index + 1);
            this.visible = true;
            return;
        }
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return new ErrorMsg("Cannot find actor " + actor_id);
        }
        var actor_wrapper = actor.wrapper;
        var actor_container = actor.parent_scene.get_actor_container();
        actor_wrapper.addChildAt(this.background, 0);
        this.actor = actor;
        this.origin_index = this.actor.get_z_index();
        this.actor.set_z_index(actor_container.children.length - 1);
        this.visible = true;
        this.actor.add_listener('destroy', function () {
            // 删除角色并不意味着退出网格模式
            actor.wrapper.removeChild(_this.background);
            _this.actor = undefined;
            _this.origin_index = undefined;
        });
        return;
    };
    Grid.prototype.hide = function () {
        if (!this.actor || this.origin_index === undefined) {
            this.app.get_app().stage.removeChild(this.background);
        }
        else {
            this.actor.wrapper.removeChild(this.background);
            this.actor.set_z_index(this.origin_index);
        }
        this.actor = undefined;
        this.origin_index = undefined;
        this.visible = false;
    };
    Grid.prototype.get_displayed = function () {
        return this.visible;
    };
    Grid.prototype.destroy = function () {
        this.background.destroy({ children: true, texture: true, baseTexture: true });
        this.events.remove_listener('stage:resize', this.on_stage_resize);
    };
    return Grid;
}());
export { Grid };
//# sourceMappingURL=grid.js.map