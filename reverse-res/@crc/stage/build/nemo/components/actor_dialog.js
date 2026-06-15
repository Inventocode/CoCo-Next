var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import clamp from 'ramda/es/clamp';
import { Graphics } from '../../core/pixi';
import { ErrorMsg } from '../../core/result';
import { BaseActorDialog } from '../../core/tool/actor_dialog/model';
import { ActorDialogType } from '../di/interfaces/const';
var TEXT_STYLE = {
    fontSize: '26px',
    fontFamily: ['PingFangSC-Medium', 'Microsoft YaHei'],
    fill: '#666666',
    wordWrap: true,
    wordWrapWidth: 208,
    breakWords: true,
    lineHeight: 36,
};
var ActorDialogManager = /** @class */ (function () {
    function ActorDialogManager(app, data) {
        this.dialog_cache = new Map();
        this.app = app;
        this.data = data;
    }
    ActorDialogManager.prototype.load_actor_dialog = function (actor_id, text, type) {
        var _this = this;
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return new ErrorMsg("Actor " + actor_id + " has not been found");
        }
        var dialog = this.dialog_cache.get(actor_id);
        if (!dialog) {
            var _a = this.app.get_app().renderer, width = _a.width, height = _a.height;
            dialog = new ActorDialog(actor, type, width, height);
            dialog.get_graphics().setParent(actor.wrapper);
            this.dialog_cache.set(actor_id, dialog);
            actor.add_listener('destroy', function () {
                _this.destroy_actor_dialog(actor_id);
            });
        }
        dialog.update(text, type);
        return;
    };
    ActorDialogManager.prototype.destroy_actor_dialog = function (actor_id) {
        var dialog = this.dialog_cache.get(actor_id);
        if (!dialog) {
            return new ErrorMsg("Actor dialog " + actor_id + " has not been found");
        }
        this.dialog_cache.delete(actor_id);
        dialog.destroy();
        return;
    };
    ActorDialogManager.prototype.destroy_all_actor_dialogs = function () {
        this.dialog_cache.forEach(function (dialog) {
            dialog.destroy();
        });
        this.dialog_cache.clear();
    };
    ActorDialogManager.prototype.destroy = function () {
        this.destroy_all_actor_dialogs();
    };
    return ActorDialogManager;
}());
export { ActorDialogManager };
var ActorDialog = /** @class */ (function (_super) {
    __extends(ActorDialog, _super);
    function ActorDialog(actor, type, stage_width, stage_height) {
        var _this = _super.call(this, actor, stage_width, stage_height) || this;
        _this.DIALOG_MIN_WIDTH = 108;
        _this.DIALOG_MAX_WIDTH = 248;
        _this.TEXT_PADDING = 20;
        _this.bubbles = new Graphics();
        _this.type = type;
        _this.actor = actor;
        _this.text.style = TEXT_STYLE;
        _this.bubbles.name = 'bubbles';
        _this.actor_dialog.addChild(_this.bubbles);
        _this.update_dialog_style();
        return _this;
    }
    ActorDialog.prototype.update = function (text, type) {
        var is_same_text = text === this.text.text;
        var is_same_type = type === this.type;
        if (!is_same_text || !is_same_type) {
            this.text.text = text;
            this.type = type;
            this.update_dialog_style();
        }
        this.update_dialog_alpha();
        this.update_dialog_visible();
        this.update_dialog_position();
    };
    ActorDialog.prototype.update_dialog_style = function () {
        this.content_height = this.text.height + 30;
        var width = this.text.width + 2 * this.TEXT_PADDING;
        this.content_width = clamp(this.DIALOG_MIN_WIDTH, this.DIALOG_MAX_WIDTH, width);
        var bubble_center_pos_x = 5;
        var bubble_say_width = 50;
        var bubble_say_point = {
            start_x: 0.1 * this.DIALOG_MAX_WIDTH,
            center_x: 0.1 * this.DIALOG_MAX_WIDTH - bubble_center_pos_x,
        };
        var big_bubble_position = { x: 25, y: this.content_height + 20 };
        var small_bubble_position = { x: 5, y: this.content_height + 40 };
        var radius = this.content_height > 80 ? 40 : this.content_height / 2;
        this.actor_dialog.clear();
        this.actor_dialog.lineStyle(2, 0xeeeeee, 1);
        this.actor_dialog.beginFill(0xFFFFFF, 1);
        this.bubbles.clear();
        switch (this.type) {
            case ActorDialogType.SAYING:
                this.actor_dialog.drawRoundedRect(0, 0, this.content_width, this.content_height, 16);
                this.actor_dialog.moveTo(bubble_say_point.start_x, this.content_height);
                this.actor_dialog.lineTo(bubble_say_point.center_x, this.content_height + 25);
                this.actor_dialog.lineTo(bubble_say_point.start_x + bubble_say_width, this.content_height);
                this.actor_dialog.endFill();
                // draw a white line to cover the border of rect
                this.actor_dialog.lineStyle(2, 0xffffff, 1);
                this.actor_dialog.moveTo(bubble_say_point.start_x, this.content_height);
                this.actor_dialog.lineTo(bubble_say_point.start_x + bubble_say_width, this.content_height);
                this.bubbles.visible = false;
                break;
            case ActorDialogType.THINKING:
                this.bubbles.lineStyle(2, 0xeeeeee, 1);
                this.bubbles.beginFill(0xffffff);
                this.bubbles.drawEllipse(big_bubble_position.x, big_bubble_position.y, 13, 10);
                this.bubbles.drawEllipse(small_bubble_position.x, small_bubble_position.y, 8, 6);
                this.bubbles.endFill();
                this.bubbles.visible = true;
                this.actor_dialog.drawRoundedRect(0, 0, this.content_width, this.content_height, radius);
                this.actor_dialog.endFill();
                break;
        }
    };
    return ActorDialog;
}(BaseActorDialog));
export { ActorDialog };
//# sourceMappingURL=actor_dialog.js.map