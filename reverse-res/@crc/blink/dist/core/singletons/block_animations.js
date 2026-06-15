"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockAnimations = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var dom_1 = require("../utils/dom");
var color_1 = require("../utils/color");
var svg_filter_1 = require("../svg_filter");
/**
 * Methods animating a block on connection and disconnection.
 */
var BlockAnimations = /** @class */ (function () {
    function BlockAnimations() {
        /**
         * Record the disconnect ui effect timeout pid.
         */
        this.disconnectUiEffectTimeoutId = 0;
    }
    /**
     * Play some UI effects (sound, animation) when disposing of a workspace element.
     * @param block The element being disposed of.
     * @return the animating element.
     */
    BlockAnimations.prototype.dispose_ui_effect = function (block) {
        var workspace = block.get_workspace();
        var svg_group = block.get_svg_root();
        var injection_div = workspace.get_injection_div();
        workspace.get_audio_manager().play('delete'); // TODO 音效做个字典？
        if (!svg_group || !injection_div) {
            console.warn('UI effects cannot be played without svg group or injection div.');
            return;
        }
        var xy = this.utils.get_injection_div_xy(svg_group);
        var scale = workspace.get_scale();
        var wrapper_classname = 'blocklyBlockDisposeWrapper';
        var wrapper = (0, dom_1.create_svg_element)('svg', { class: wrapper_classname });
        wrapper.style.transformOrigin = 'left top';
        wrapper.style.overflow = 'visible';
        this.utils.set_transform_style(wrapper, xy[0], xy[1], scale);
        var clone = (0, dom_1.clone_node)(svg_group, true);
        clone.setAttribute('transform', '');
        wrapper.appendChild(clone);
        injection_div.appendChild(wrapper);
        var end_animation_listener = function () {
            (0, dom_1.remove_node)(wrapper);
            clone.removeEventListener('webkitAnimationEnd', end_animation_listener);
            clone.removeEventListener('animationend', end_animation_listener);
            clearTimeout(timeout);
        };
        clone.addEventListener('webkitAnimationEnd', end_animation_listener);
        clone.addEventListener('animationend', end_animation_listener);
        // Leave a timeout in browsers not support animationend or webkitAnimationEnd.
        var timeout = window.setTimeout(end_animation_listener, 500);
        // 计算积木 视觉中心点 相对于 积木绘制原点(BLOCK_LEFT_TOP)的位置，
        // 作为缩放原点
        var block_size = block.get_height_width();
        clone.setAttribute('transform-origin', (block_size.width / 2 - this.theme.renderer.BLOCK_LEFT_TOP[0]) * scale + "px " + (block_size.height / 2 - this.theme.renderer.BLOCK_LEFT_TOP[1]) * scale + "px");
        clone.classList.add('blocklyBlockDispose');
        return clone;
    };
    /**
     * Play some UI effects (sound, ripple) after a connection has been established.
     * @param block The block being connected to another.
     */
    BlockAnimations.prototype.connection_ui_effect = function (block) {
        var svg_root = block.get_svg_root();
        if (svg_root == undefined) {
            throw new ReferenceError('Cannot connect ui effect to block without svg root.');
        }
        var workspace = block.get_workspace();
        workspace.get_audio_manager().play('click');
        if (workspace.get_scale() < 1) {
            return; // Too small to care about visual effects.
        }
        // Determine the absolute coordinates of the inferior block.
        var xy = workspace.get_svg_xy(svg_root);
        // Offset the coordinates based on the two connection types, fix scale.
        if (block.output_connection) {
            gl_matrix_1.vec2.add(xy, xy, [
                -3 * workspace.get_scale(),
                13 * workspace.get_scale(),
            ]);
        }
        else if (block.previous_connection) {
            gl_matrix_1.vec2.add(xy, xy, [
                0 * workspace.get_scale(),
                3 * workspace.get_scale(),
            ]);
        }
        var effect_offset = block.workspace.options.notch ?
            block.workspace.get_scale() *
                (this.theme.renderer.NOTCH_WIDTH / 2 +
                    this.theme.renderer.NTOCH_START_PADDING) :
            0;
        var ripple = (0, dom_1.create_svg_element)('circle', {
            // If notch have been rendered, the effect animation
            // center should move according to the notch offset.
            cx: xy[0] + effect_offset,
            cy: xy[1],
            r: 0,
            fill: '#fff',
        }, workspace.get_parent_svg());
        // Start the animation.
        this.connection_ui_step(ripple, Date.now(), workspace.get_scale());
    };
    /**
     * Expand a ripple around a connection.
     * @param ripple Element to animate.
     * @param start Date of animation's start.
     * @param workspace_scale Scale of workspace.
     */
    BlockAnimations.prototype.connection_ui_step = function (ripple, start, workspace_scale) {
        var _this = this;
        var ms = Date.now() - start;
        var percent = ms / 150;
        if (percent > 1) {
            (0, dom_1.remove_node)(ripple);
        }
        else {
            ripple.setAttribute('r', String(percent * 15 * workspace_scale));
            ripple.style.opacity = String(1 - percent);
            window.setTimeout(function () {
                _this.connection_ui_step(ripple, start, workspace_scale);
            }, 10);
        }
    };
    /**
     * Play some UI effects (sound, animation) when disconnecting a block.
     * @param block The block being disconnected from another.
     */
    BlockAnimations.prototype.disconnect_ui_effect = function (block) {
        block.workspace.get_audio_manager().play('disconnect');
        if (block.workspace.get_scale() < 1) {
            return; // Too small to care about visual effects.
        }
        if (!block.svg_group) {
            return;
        }
        if (!block.use_drag_surface) {
            return;
        }
        block.svg_group.classList.add('dd');
        this.disconnectUiEffectTimeoutId = window.setTimeout(function () {
            block.svg_group.classList.remove('dd');
            var original_transform = block.svg_group.getAttribute('transform');
            block.svg_group.setAttribute('transform', (original_transform == undefined ? '' : original_transform) + "skewX(0)");
        }, 100);
    };
    /**
     * Function to clear the timeout of the disconnect_ui_effect
     * @param block The block being disconnected from another.
     */
    BlockAnimations.prototype.disconnect_ui_effect_stop = function (block) {
        // Clear timeout
        clearTimeout(this.disconnectUiEffectTimeoutId);
        // Prevent flash blocks when the time between
        // startDrag and endDrag are less than 100ms
        block.svg_group.classList.remove('dd');
        var original_transform = block.svg_group.getAttribute('transform');
        block.svg_group.setAttribute('transform', (original_transform == undefined ? '' : original_transform));
    };
    BlockAnimations.prototype.toolbox_click_effect = function () {
        // Overrride in an external project
    };
    BlockAnimations.prototype.block_flash_effect = function (block, start_animation) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (start_animation) {
            // 根据积木自身颜色计算闪烁颜色
            var block_color = block.get_colour();
            var block_color_hsv = (0, color_1.rgb_to_hsv)(block_color.r, block_color.g, block_color.b);
            var animate_color_rgb = (0, color_1.hsv_to_rgb)({
                h: block_color_hsv.h,
                s: block_color_hsv.s + 20,
                v: block_color_hsv.v - 15,
            });
            var flash_color = new color_1.Color({
                r: animate_color_rgb[0],
                g: animate_color_rgb[1],
                b: animate_color_rgb[2],
                a: block_color.a,
            });
            var from_color = block_color.toString();
            var to_color = flash_color.toString();
            var animate_svg_1 = (0, dom_1.create_svg_element)('animate', {
                id: 'BlockFlashAnimation',
                attributeName: 'fill',
                attributeType: 'XML',
                values: from_color + " ; " + to_color + " ; " + from_color,
                dur: '1s',
                repeatCount: 'indefinite',
                keyTimes: '0 ; 0.5; 1',
                calcMode: 'spline',
                keySplines: '0.25,0.1,0.25,1;0.25,0.1,0.25,1',
            });
            (_a = block.svg_path) === null || _a === void 0 ? void 0 : _a.removeAttribute('fill');
            if (block.is_starting_block()) {
                var head_icon = block.get_svg_root().querySelector("." + "blockly_head_icon_wrapper" /* HEAD_ICON_WRAPPER */);
                if (head_icon) {
                    head_icon.removeAttribute('fill');
                }
            }
            // 内嵌的输出积木添加白边，其他积木添加阴影滤镜
            if (block.is_output_block() && block.parent_block) {
                (_b = block.svg_path) === null || _b === void 0 ? void 0 : _b.setAttribute('stroke', '#FFFFFF');
                (_c = block.svg_path) === null || _c === void 0 ? void 0 : _c.setAttribute('stroke-width', '2px');
            }
            else {
                block.get_svg_root().setAttribute('filter', "url(#" + svg_filter_1.FILTER.FOCUSED + ")");
            }
            // 添加动画
            block.get_svg_root().appendChild(animate_svg_1);
            return;
        }
        // 移除动画
        var animate_svg = block.svg_group.querySelector('#BlockFlashAnimation');
        animate_svg && block.svg_group.removeChild(animate_svg);
        // 移除滤镜
        (_d = block.svg_path) === null || _d === void 0 ? void 0 : _d.removeAttribute('filter');
        // 填充颜色
        var color = block.get_colour().toString();
        (_e = block.svg_path) === null || _e === void 0 ? void 0 : _e.setAttribute('fill', color);
        if (block.is_starting_block()) {
            var head_icon = block.get_svg_root().querySelector("." + "blockly_head_icon_wrapper" /* HEAD_ICON_WRAPPER */);
            if (head_icon) {
                head_icon.setAttribute('fill', color);
                head_icon.removeAttribute('filter');
            }
        }
        // 恢复原来的描边样式
        (_f = block.svg_path) === null || _f === void 0 ? void 0 : _f.setAttribute('stroke', block.get_border_colour().toString());
        (_g = block.svg_path) === null || _g === void 0 ? void 0 : _g.setAttribute('stroke-width', block.get_stroke_width());
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], BlockAnimations.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], BlockAnimations.prototype, "theme", void 0);
    BlockAnimations = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], BlockAnimations);
    return BlockAnimations;
}());
exports.BlockAnimations = BlockAnimations;
