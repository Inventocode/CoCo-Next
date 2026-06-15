import { Container, Graphics, Text } from '../../pixi';
import { get_actor_center, is_internal_scene } from '../../../core/utils';
import { ErrorMsg } from '../../result';
var BaseDialogManager = /** @class */ (function () {
    function BaseDialogManager(app, data) {
        this.actor_dialogs = new Map();
        this.dialog_containers = new Map();
        this.actor_destroy_handlers = new Map();
        this.app = app;
        this.data = data;
    }
    /**
     * 添加对话框到角色对话框层级中。
     * @param actor 角色
     * @param dialog 对话框
     */
    BaseDialogManager.prototype.load_dialog = function (actor, dialog) {
        var scene = actor.parent_scene;
        var container = this.get_dialog_container(scene);
        this.actor_dialogs.set(actor.get_id(), dialog);
        container.addChild(dialog.get_graphics());
    };
    BaseDialogManager.prototype.destroy_actor_dialog = function (actor_id) {
        var actor_dialog = this.actor_dialogs.get(actor_id);
        if (!actor_dialog) {
            return new ErrorMsg("Actor dialog " + actor_id + " has not been found");
        }
        var actor = this.data.get_internal_actor(actor_id);
        var destroy_fun = this.actor_destroy_handlers.get(actor_id);
        if (actor && destroy_fun) {
            actor.remove_listener('destroy', destroy_fun);
            this.actor_destroy_handlers.delete(actor_id);
        }
        this.actor_dialogs.delete(actor_id);
        actor_dialog.destroy();
        return;
    };
    BaseDialogManager.prototype.destroy_all_actor_dialogs = function () {
        var _this = this;
        this.dialog_containers.forEach(function (container) {
            _this.destroy_dialog_container(container);
        });
    };
    BaseDialogManager.prototype.set_container_z_index = function () {
        console.warn('Method deprecated. It will not change anything.');
    };
    BaseDialogManager.prototype.destroy = function () {
        this.destroy_all_actor_dialogs();
    };
    /**
     * 获取背景的对话气泡容器，如果当前背景未创建容器，则进行创建。如果已创建，则复用已创建的容器。
     * @param scene 需要获取对话气泡容器的背景
     */
    BaseDialogManager.prototype.get_dialog_container = function (scene) {
        var _this = this;
        var scene_id = scene.get_id();
        var container = this.dialog_containers.get(scene_id);
        if (!container) {
            container = new Container();
            scene.addChild(container);
            this.dialog_containers.set(scene_id, container);
            // 当背景/屏幕被删除时，该组件也需要删除
            scene.add_listener('destroy', function () {
                var container = _this.dialog_containers.get(scene_id);
                container && _this.destroy_dialog_container(container);
            });
        }
        return container;
    };
    BaseDialogManager.prototype.destroy_dialog_container = function (container) {
        var _this = this;
        var scene = container.parent;
        if (is_internal_scene(scene)) {
            this.dialog_containers.delete(scene.get_id());
            var removed = container.removeChildren();
            removed.forEach(function (actor_dialog) {
                actor_dialog.name && _this.actor_dialogs.delete(actor_dialog.name);
                actor_dialog.destroy();
            });
        }
        container.destroy();
    };
    return BaseDialogManager;
}());
export { BaseDialogManager };
/**
 * 基本对话框的抽象类。
 * 实现了一些基本的通用功能，比如订阅角色变化事件更新对话框属性以及边缘检测。
 * 默认样式为透明底和黑色文本。
 */
var BaseActorDialog = /** @class */ (function () {
    /**
     * 初始化对话框基本结构并订阅角色事件。
     * @param actor 对话框绑定的角色
     * @param stage_width 舞台的宽度
     * @param stage_height 舞台的高度
     */
    function BaseActorDialog(actor, stage_width, stage_height) {
        var _this = this;
        /**
         * 对话框容器
         */
        this.actor_dialog = new Graphics();
        /**
         * 文本对象
         */
        this.text = new Text('');
        /**
         * 记录对话框容器的宽度
         */
        this.content_width = 0;
        /**
         * 记录对话框容器的高度
         */
        this.content_height = 0;
        /**
         * 角色属性发生变化时的回调函数。
         * @param e 角色变化事件。
         */
        this.on_change = function (e) {
            _this.update_on_change(e);
        };
        /**
         * 根据角色变化更新对话框，可由业务方进行覆盖定制。
         * @param e 角色变化事件。
         */
        this.update_on_change = function (e) {
            if (e.position || e.scale || e.rotation) {
                _this.update_dialog_position();
            }
            if (e.alpha !== undefined) {
                _this.update_dialog_alpha();
            }
            if (e.position ||
                e.scale ||
                e.rotation ||
                e.visible !== undefined) {
                _this.update_dialog_visible();
            }
        };
        this.actor_dialog.name = actor.id;
        this.text.name = 'text';
        this.actor = actor;
        this.STAGE_WIDTH = stage_width;
        this.STAGE_HEIGHT = stage_height;
        this.actor_dialog.addChild(this.text);
        this.actor.add_listener('change', this.on_change);
    }
    /**
     * 更新对话框的alpha为角色的alpha。
     */
    BaseActorDialog.prototype.update_dialog_alpha = function () {
        this.actor_dialog.alpha = this.actor.get_alpha();
    };
    /**
     * 根据角色可见性和scale值设置对话框可见性。
     */
    BaseActorDialog.prototype.update_dialog_visible = function () {
        var visible = this.actor.get_visible() && this.actor.get_scale().x !== 0;
        this.actor_dialog.visible = visible;
    };
    ;
    /**
     * 根据角色质心位置更新对话框位置。
     * 也会根据对话框与舞台边缘的距离做进一步调整。
     */
    BaseActorDialog.prototype.update_dialog_position = function () {
        var actor_center = get_actor_center(this.actor, this.actor.position);
        this.actor_dialog.position.set(actor_center.x, actor_center.y - this.actor.height / 2 - this.actor_dialog.height);
        this.actor_dialog.scale.x = 1;
        this.text.scale.x = 1;
        var is_min_width_dialog = this.content_width === this.DIALOG_MIN_WIDTH;
        var pos_x_offset = is_min_width_dialog
            ? (this.content_width - this.text.width) / 2
            : this.TEXT_PADDING;
        this.text.position.x = pos_x_offset;
        this.text.position.y = this.TEXT_PADDING;
        this.calibrate_edge_detection(this.actor_dialog.getBounds(), actor_center);
    };
    ;
    /**
     * 触碰舞台边缘时调整对话框位置。
     * @param dialog_box 对话框的边界矩形。
     * @param actor_center 角色质心位置。
     */
    BaseActorDialog.prototype.calibrate_edge_detection = function (dialog_box, actor_center) {
        var half_stage_width = this.STAGE_WIDTH / 2;
        var half_stage_height = this.STAGE_HEIGHT / 2;
        var is_out_of_right_edge = dialog_box.x + dialog_box.width > this.STAGE_WIDTH;
        var is_out_of_left_edge = dialog_box.x < 0;
        var is_out_of_top_edge = dialog_box.y < 0;
        var is_out_of_bottom_edge = dialog_box.y + dialog_box.height > this.STAGE_HEIGHT;
        if (is_out_of_right_edge && this.actor_dialog.scale.x > 0) {
            this.actor_dialog.scale.x = -1;
            this.text.scale.x = -1;
            this.text.position.x = this.content_width - this.text.position.x;
            if (actor_center.x > half_stage_width) {
                this.actor_dialog.position.x = half_stage_width;
            }
        }
        if (is_out_of_left_edge) {
            this.actor_dialog.position.x = -half_stage_width;
        }
        if (is_out_of_top_edge) {
            this.actor_dialog.position.y = -half_stage_height;
        }
        if (is_out_of_bottom_edge) {
            this.actor_dialog.position.y = half_stage_height - this.actor_dialog.height;
        }
    };
    /**
     * 判断角色是否依然在舞台内。
     */
    BaseActorDialog.prototype.actor_is_in_stage = function () {
        var actor_box = this.actor.getBounds();
        return actor_box.x < this.STAGE_WIDTH &&
            actor_box.x > -actor_box.width &&
            actor_box.y < this.STAGE_HEIGHT &&
            actor_box.y > -actor_box.height;
    };
    BaseActorDialog.prototype.destroy = function () {
        this.actor.remove_listener('change', this.on_change);
        this.actor_dialog.destroy({ children: true, texture: true });
    };
    BaseActorDialog.prototype.get_graphics = function () {
        return this.actor_dialog;
    };
    return BaseActorDialog;
}());
export { BaseActorDialog };
//# sourceMappingURL=model.js.map