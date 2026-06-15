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
import { Container, Sprite, RENDERER_TYPE, } from '../pixi';
import { Result, ErrorMsg } from '../result';
import { ObjectType } from '../di/interfaces/const';
import { is_actor_wrapper } from '../utils';
import { Effects } from '../effects/model';
import { WebglBackground } from './background';
/**
 * 拓展pixi Container并且添加Codemao独有数据后的：Scene类
 * 舞台上每个背景是一个Scene实例
 * 该类型不可被暴露至外部
 * 否则可能出现用户直接调用pixi的方法
 * @param scene_id 背景ID
 * @param texture 背景样式资源Texture
*/
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(scene_id, texture, texture_id, data, app, events) {
        var _this = _super.call(this) || this;
        _this.type = ObjectType.Scene;
        _this.brush_canvas = document.createElement('canvas');
        _this.brush_ctx = _this.brush_canvas.getContext('2d');
        _this.should_update_brush_texture = false;
        _this.mouse_down_time = 0;
        _this.on_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.brush_canvas.width = e.data.width;
            _this.brush_canvas.height = e.data.height;
        };
        /**
         * ticker执行时的钩子函数，依赖于ticker执行的内容会放到这里，比如画笔图层更新。
         * 在背景初始化时创建，并挂上监听。
         * 在背景被销毁时移除监听。
         */
        _this.on_tick = function () {
            if (!_this.should_update_brush_texture) {
                return;
            }
            _this.should_update_brush_texture = false;
            _this.update_brush();
        };
        _this.data = data;
        _this.app = app;
        _this.events = events;
        _this.id = scene_id;
        _this.name = scene_id;
        var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
        _this.visible = false;
        _this.interactive = true;
        var is_webgl_renderer = _this.app.get_renderer_type() === RENDERER_TYPE.WEBGL;
        var emit_scene_event = _this.emit_event.bind(_this);
        _this.background = new WebglBackground(texture, texture_id, width, height, emit_scene_event, app, data, events, scene_id);
        _this.addChildAt(_this.background, 0 /* BACKGROUND */);
        _this.brush_canvas.width = width;
        _this.brush_canvas.height = height;
        _this.brush_sprite = Sprite.from(_this.brush_canvas);
        _this.brush_sprite.anchor.set(0.5);
        _this.addChildAt(_this.brush_sprite, 1 /* BRUSH */);
        _this.actor_container = new Container();
        _this.actor_container.name = 'actor_container';
        _this.addChildAt(_this.actor_container, 2 /* ACTOR_CONTAINER */);
        _this.background.addListener('mousedown', function () { return _this.emit_mouse_event('scene:mousedown'); });
        _this.background.addListener('mousemove', function () { return _this.emit_mouse_event('scene:mousemove'); });
        _this.background.addListener('mouseup', function () { return _this.emit_mouse_event('scene:mouseup'); });
        _this.background.addListener('mouseupoutside', function () { return _this.emit_mouse_event('scene:mouseupoutside'); });
        _this.background.addListener('touchstart', function () { return _this.emit_mouse_event('scene:touchstart'); });
        _this.background.addListener('touchmove', function () { return _this.emit_mouse_event('scene:touchmove'); });
        _this.background.addListener('touchend', function () { return _this.emit_mouse_event('scene:touchend'); });
        _this.background.addListener('touchendoutside', function () { return _this.emit_mouse_event('scene:touchendoutside'); });
        _this.events.add_listener('stage:resize', _this.on_resize);
        // 当舞台开启持续渲染时，自动渲染画布
        _this.app.get_app().ticker.add(_this.on_tick);
        if (is_webgl_renderer) {
            _this.effects = new Effects(_this.app, _this);
        }
        return _this;
    }
    Scene.prototype.emit_event = function (type, data) {
        this.emit(type, data);
    };
    Scene.prototype.add_listener = function (type, listener) {
        this.on(type, listener);
    };
    Scene.prototype.remove_listener = function (type, listener) {
        this.off(type, listener);
    };
    Scene.prototype.destroy = function () {
        this.emit_event('destroy', undefined);
        this.app.get_app().ticker.remove(this.on_tick);
        this.events.remove_listener('stage:resize', this.on_resize);
        this.brush_sprite.destroy({ children: true, texture: true, baseTexture: true });
        _super.prototype.destroy.call(this, { children: true });
        this.data.clear_scene_cache(this.id);
    };
    Scene.prototype.get_background = function () {
        return this.background;
    };
    Scene.prototype.get_id = function () {
        return this.id;
    };
    Scene.prototype.get_actor_ids = function (group) {
        var actor_ids = [];
        var add_id = group
            ? function (actor) { return actor.group === group && actor_ids.push(actor.id); }
            : function (actor) { return actor_ids.push(actor.id); };
        this.actor_container.children.forEach(function (child) {
            if (!is_actor_wrapper(child)) {
                return;
            }
            add_id(child.get_actor());
        });
        return actor_ids;
    };
    Scene.prototype.get_brush_ctx = function () {
        return this.brush_ctx;
    };
    Scene.prototype.should_update_brush = function () {
        this.should_update_brush_texture = true;
    };
    Scene.prototype.update_brush = function () {
        this.brush_sprite.texture.update();
    };
    Scene.prototype.get_actor_container = function () {
        return this.actor_container;
    };
    Scene.prototype.emit_mouse_event = function (event) {
        switch (event) {
            case 'scene:mousedown':
            case 'scene:touchstart':
                this.mouse_down_time = new Date().getTime();
                this.events.fire('scene:selected', {
                    target_id: this.id,
                });
                break;
            case 'scene:mouseup':
            case 'scene:touchend':
                if (new Date().getTime() - this.mouse_down_time < 1000) {
                    this.events.fire('scene:click', {
                        target_id: this.id,
                    });
                }
                break;
            default:
                break;
        }
        this.events.fire(event, {
            target_id: this.id,
        });
    };
    Scene.prototype.get_effects = function () {
        if (!this.effects) {
            return Result.error('Effect not available. It needs support of WebGL.');
        }
        else {
            return Result.success(this.effects);
        }
    };
    Scene.prototype.set_brush_target = function (actor_id) {
        var _this = this;
        var actor = this.data.get_internal_actor(actor_id, [this.get_id()]);
        if (!actor) {
            return new ErrorMsg("Cannot find actor " + actor_id + " in scene " + this.id);
        }
        actor.wrapper.addChild(this.brush_sprite);
        this.brush_unset_listener = function () {
            _this.unset_brush_target();
        };
        actor.add_listener('destroy', this.brush_unset_listener);
        return;
    };
    Scene.prototype.get_brush_target = function () {
        if (!is_actor_wrapper(this.brush_sprite.parent)) {
            return;
        }
        return this.brush_sprite.parent.get_actor();
    };
    Scene.prototype.unset_brush_target = function () {
        var may_be_wrapper = this.brush_sprite.parent;
        if (!is_actor_wrapper(may_be_wrapper)) {
            return;
        }
        this.addChildAt(this.brush_sprite, 1 /* BRUSH */);
        if (!this.brush_unset_listener) {
            return;
        }
        may_be_wrapper.get_actor()
            .remove_listener('destroy', this.brush_unset_listener);
        this.brush_unset_listener = undefined;
    };
    return Scene;
}(Container));
export { Scene };
//# sourceMappingURL=scene.js.map