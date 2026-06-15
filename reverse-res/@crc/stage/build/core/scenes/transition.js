import { Sprite, RenderTexture, Point, TwistFilter, BaseRenderTexture } from '../pixi';
import { CURVE_TYPE, } from '../di/interfaces/scenes';
import { angle_to_radian } from '../utils';
import { Timeline } from './timeline';
var Transition = /** @class */ (function () {
    function Transition(app) {
        this.app = app;
        this.tl = new Timeline(this.app);
    }
    Transition.prototype.on_complete = function () { };
    Transition.prototype.set_transition = function (type, out_scene, in_scene, complete_cb) {
        var _this = this;
        this.clear_tl(out_scene, in_scene);
        this.on_complete = function () {
            _this.reset_scenes(out_scene, in_scene);
            complete_cb && complete_cb();
        };
        if (type === 'none') {
            complete_cb && complete_cb();
            return;
        }
        this.tl.set_complete_handler(this.on_complete);
        this.scene_destroy_handler = function () {
            _this.clear_tl(out_scene, in_scene);
            _this.scene_destroy_handler = undefined;
        };
        out_scene.add_listener('destroy', this.scene_destroy_handler);
        in_scene.add_listener('destroy', this.scene_destroy_handler);
        switch (type) {
            case 'slide_up':
            case 'slide_left':
            case 'slide_down':
            case 'slide_right':
                this.set_slide_transition(out_scene, in_scene, type);
                return;
            case 'bounce_up':
            case 'bounce_down':
            case 'bounce_left':
            case 'bounce_right':
                this.set_bounce_transition(in_scene, type);
                return;
            case 'fade_in_out':
                this.set_fade_transition(out_scene, in_scene);
                return;
            case 'distort':
                this.set_distort_transition(out_scene, in_scene);
                return;
        }
        ;
    };
    Transition.prototype.set_slide_transition = function (out_scene, in_scene, type) {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        in_scene.visible = true;
        var duration = 0.5;
        var out_x = 0;
        var out_y = 0;
        switch (type) {
            case 'slide_down':
                in_scene.position.y = -height;
                out_y = height;
                break;
            case 'slide_up':
                in_scene.position.y = height;
                out_y = -height;
                break;
            case 'slide_left':
                in_scene.position.x = width;
                out_x = -width;
                break;
            case 'slide_right':
                in_scene.position.x = -width;
                out_x = width;
                break;
        }
        this.tl.to(out_scene, duration, { x: out_x, y: out_y, ease: CURVE_TYPE.QUAD })
            .to(in_scene, duration, { x: 0, y: 0, ease: CURVE_TYPE.QUAD });
    };
    Transition.prototype.set_bounce_transition = function (in_scene, type) {
        var app = this.app.get_app();
        var scene_container = this.app.get_scene_container();
        var _a = app.view, width = _a.width, height = _a.height;
        /**
         * 弹入的动效要求in_scene做动效的时候比out_scene的层级高
         * 因此先把in_scene原本的层级记下，将in_scene层级移到最高层
         * 动效结束后再移动回去
         */
        this.in_scene_origin_z_index = scene_container.getChildIndex(in_scene);
        scene_container.setChildIndex(in_scene, scene_container.children.length - 1);
        in_scene.visible = true;
        var duration = 1;
        switch (type) {
            case 'bounce_down':
                in_scene.position.y = -height;
                break;
            case 'bounce_up':
                in_scene.position.y = height;
                break;
            case 'bounce_left':
                in_scene.position.x = width;
                break;
            case 'bounce_right':
                in_scene.position.x = -width;
                break;
        }
        this.tl.to(in_scene, duration, { x: 0, y: 0, ease: CURVE_TYPE.BOUNCE });
    };
    Transition.prototype.set_fade_transition = function (out_scene, in_scene) {
        in_scene.visible = true;
        var duration = 0.5;
        in_scene.alpha = 0;
        this.tl.to(out_scene, duration, { alpha: 0, ease: CURVE_TYPE.QUAD })
            .from_to(in_scene, duration, { alpha: 0 }, { alpha: 1, ease: CURVE_TYPE.QUAD });
    };
    Transition.prototype.set_distort_transition = function (out_scene, in_scene) {
        var app = this.app.get_app();
        var duration = 0.5;
        var _a = app.view, width = _a.width, height = _a.height;
        /**
         * 扭曲渐变动效需要扭曲特效滤镜，结束后移除
         * 以免与其他滤镜动态混合，将out_scene和in_scene的当前状态render到render_texture上
         * 新建Sprite，放到stage上
         * 结束后销毁texture与Sprite
         */
        var out_texture = new RenderTexture(new BaseRenderTexture({ width: width, height: height }));
        var in_texture = new RenderTexture(new BaseRenderTexture({ width: width, height: height }));
        out_scene.visible = true;
        in_scene.visible = false;
        app.renderer.render(app.stage, { renderTexture: out_texture });
        out_scene.visible = false;
        in_scene.visible = true;
        app.renderer.render(app.stage, { renderTexture: in_texture });
        this.out_sprite = Sprite.from(out_texture);
        this.out_sprite.anchor.set(0.5);
        this.in_sprite = Sprite.from(in_texture);
        this.in_sprite.anchor.set(0.5);
        /**
         * 以下的magic number，10，189，-227.8，0.1 都是动效的效果参数
         * 笔者也不知道为什么设置这些数字，为了效果还原，先搬过来
         */
        var radius = Math.min(width, height);
        var offset = new Point(width / 2, height / 2);
        var out_twist_filter = new TwistFilter({
            radius: radius,
            angle: 0,
            padding: 10,
        });
        out_twist_filter.offset = offset;
        var in_twist_filter = new TwistFilter({
            radius: radius,
            angle: angle_to_radian(189),
            padding: 10,
        });
        in_twist_filter.offset = offset;
        this.out_sprite.filters = [out_twist_filter];
        this.in_sprite.filters = [in_twist_filter];
        app.stage.addChild(this.out_sprite, this.in_sprite);
        this.tl.from_to(this.out_sprite, duration, { alpha: 1 }, { alpha: 0 })
            .from_to(out_twist_filter, duration, { angle: 0 }, { angle: angle_to_radian(-227.8) })
            .from_to(this.in_sprite, duration, { visible: true, alpha: 0 }, { visible: true, alpha: 1 }, 0.1)
            .to(in_twist_filter, duration, { angle: 0 }, 0.1);
    };
    Transition.prototype.clear_tl = function (out_scene, in_scene) {
        if (this.tl.get_cache_size()) {
            this.reset_scenes(out_scene, in_scene);
            this.tl.clear();
        }
    };
    ;
    Transition.prototype.reset_scenes = function (out_scene, in_scene) {
        out_scene.x = 0;
        out_scene.y = 0;
        out_scene.alpha = 1;
        in_scene.x = 0;
        in_scene.y = 0;
        in_scene.alpha = 1;
        if (this.scene_destroy_handler) {
            out_scene.remove_listener('destroy', this.scene_destroy_handler);
            in_scene.remove_listener('destroy', this.scene_destroy_handler);
            this.scene_destroy_handler = undefined;
        }
        if (this.in_scene_origin_z_index !== undefined) {
            this.app.get_scene_container().setChildIndex(in_scene, this.in_scene_origin_z_index);
            this.in_scene_origin_z_index = undefined;
        }
        if (this.out_sprite) {
            this.out_sprite.destroy({ children: true, texture: true, baseTexture: true });
            this.out_sprite = undefined;
        }
        if (this.in_sprite) {
            this.in_sprite.destroy({ children: true, texture: true, baseTexture: true });
            this.in_sprite = undefined;
        }
    };
    return Transition;
}());
export { Transition };
//# sourceMappingURL=transition.js.map