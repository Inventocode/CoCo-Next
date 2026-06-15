"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_extensions = void 0;
var tslib_1 = require("tslib");
var I = (0, tslib_1.__importStar)(require("../core/public_interfaces"));
var block_1 = require("../core/utils/block");
function init_extensions(Blink) {
    /**
     * Configures the tooltip to mimic the parent block when connected.
     * Otherwise, uses the tooltip text at the time this extension is initialized.
     * This takes advantage of the fact that all other values from JSON are initialized before extensions.
     */
    function EXTENSION_PARENT_TOOLTIP() {
        var _this = this;
        this.tooltip_when_not_connected = this.tooltip;
        this.set_tooltip((function () {
            var parent = _this.get_parent();
            return (parent &&
                parent.get_inputs_inline() &&
                parent.tooltip) ||
                _this.tooltip_when_not_connected;
        }));
    }
    Blink.extensions.register('parent_tooltip_when_inline', EXTENSION_PARENT_TOOLTIP);
    /**
     * 通用插件，用于不能在*循环*中使用的积木
     */
    var MIXIN_DISABLE_INSIDE_WRAP_LOOP = {
        onchange: function (e) {
            if (e.type && e.type != I.BlockEventType.MOVE) {
                return;
            }
            (0, block_1.update_disable_status)(this);
        },
    };
    Blink.extensions.register_mixin('disable_inside_wrap_loop', MIXIN_DISABLE_INSIDE_WRAP_LOOP);
    /**
     * 通用插件，用于不能在*一步执行+循环*中使用的积木
     */
    Blink.extensions.register_mixin('disable_inside_warp_loop', {
        onchange: function (e) {
            if (e.type && e.type != I.BlockEventType.MOVE) {
                return;
            }
            if (this.is_in_flyout) {
                return;
            }
            var LOOP_TYPES = ['repeat_forever', 'repeat_n_times', 'repeat_forever_until'];
            var inside_loop = false;
            var legal = true;
            var surround_block = this.get_surround_parent();
            // 判断积木是否在该结构中：重复执行 >> warp >> this
            while (surround_block) {
                if (inside_loop && surround_block.type === 'warp') {
                    legal = false;
                    break;
                }
                if (LOOP_TYPES.includes(surround_block.type)) {
                    inside_loop = true;
                }
                surround_block = surround_block.get_surround_parent();
            }
            if (legal) {
                if (!this.disabled) {
                    return;
                }
                this.disabled = false;
                this.update_disabled();
            }
            else { // illegal
                if (this.disabled) {
                    return;
                }
                this.disabled = true;
                this.update_disabled();
            }
        },
    });
    Blink.extensions.register('param_block', function () {
        this.element_type = 'param';
    });
    Blink.extensions.register('param_color_block', function () {
        this.element_type = 'param_color';
    });
}
exports.init_extensions = init_extensions;
