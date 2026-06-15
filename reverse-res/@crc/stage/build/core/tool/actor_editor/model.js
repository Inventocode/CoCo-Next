import { Container } from '../../pixi';
import { is_internal_actor } from '../../utils';
import { ErrorMsg } from '../../result';
var BaseActorEditor = /** @class */ (function () {
    function BaseActorEditor(app, data) {
        var _this = this;
        this.on_actor_destroy = function () { return _this.hide(); };
        /**
         * 当角色改变时的handler
         * 需要在业务方组件中实现对应的业务变化
         * @param e 角色改变事件参数
         */
        this.on_actor_change = function (e) { };
        this.app = app;
        this.data = data;
        this.actor_editor = new Container();
        this.actor_editor.interactive = true;
        this.actor_editor.visible = false;
        this.app.get_app().stage.addChild(this.actor_editor);
    }
    BaseActorEditor.prototype.destroy = function () {
        this.hide();
        this.actor_editor.destroy({ children: true, texture: true, baseTexture: true });
    };
    BaseActorEditor.prototype.set_target_actor = function (actor_id) {
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return new ErrorMsg("Cannot find actor " + actor_id);
        }
        if (this.actor === actor) {
            return;
        }
        this.get_displayed() && this.hide();
        this.actor = actor;
        this.actor_editor.name = this.actor.get_id();
        this.actor_editor.visible = this.actor.get_visible();
        this.draw_editor(this.actor);
        this.actor.add_listener('change', this.on_actor_change);
        this.actor.add_listener('destroy', this.on_actor_destroy);
        this.app.render();
        return;
    };
    BaseActorEditor.prototype.hide = function () {
        if (!this.actor) {
            return;
        }
        this.actor.remove_listener('change', this.on_actor_change);
        this.actor.remove_listener('destroy', this.on_actor_destroy);
        this.actor = undefined;
        this.actor_editor.name = '';
        this.actor_editor.visible = false;
        this.app.render();
    };
    BaseActorEditor.prototype.get_displayed = function () {
        return !!this.actor;
    };
    /**
     * 返回选中的目标角色
     * 当某角色出现在当前选中的角色编辑器空白内时，会切换当前选中的角色
     * @param actor_editor_event 角色编辑器的事件参数
     */
    BaseActorEditor.prototype.get_hit_target = function (actor_editor_event) {
        var scene_hit_test = this.app.get_interaction_manager().hitTest(actor_editor_event.data.global, this.app.get_scene_container());
        // 检测是否点到像素空白处的其他角色
        if (is_internal_actor(scene_hit_test)) {
            var hit_target = this.data.get_internal_actor(scene_hit_test.id);
            if (hit_target) {
                this.set_target_actor(hit_target.id);
                return hit_target;
            }
        }
        // 返回当前选中角色
        if (this.actor_editor.name) {
            return this.data.get_internal_actor(this.actor_editor.name);
        }
        return;
    };
    /**
     * 检测鼠标落点是否在舞台内
     * @param actor_editor_event 角色编辑器的事件参数
     */
    BaseActorEditor.prototype.check_mouse_pos_is_in_stage = function (actor_editor_event) {
        var mouse_pos = actor_editor_event.data.getLocalPosition(this.app.get_app().stage);
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        // 鼠标离开舞台后编辑失效
        if (mouse_pos.x > width / 2 ||
            mouse_pos.x < -width / 2 ||
            mouse_pos.y > height / 2 ||
            mouse_pos.y < -height / 2) {
            return false;
        }
        return true;
    };
    return BaseActorEditor;
}());
export { BaseActorEditor };
//# sourceMappingURL=model.js.map