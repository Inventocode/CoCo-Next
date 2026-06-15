"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupEvent = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var procedure_1 = require("../../procedure");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var block_1 = require("../utils/block");
var base_event_1 = require("./base_event");
var GroupEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(GroupEvent, _super);
    function GroupEvent(options) {
        var _this = _super.call(this) || this;
        _this._workspace_id = _this.Blink.mainWorkspace.id || '';
        _this._record_undo = false;
        var type = options.type, group = options.group;
        _this.type = type;
        _this._group = group;
        if (type === interfaces_1.GroupEventType.GroupEnd) {
            var ws = _this._get_event_workspace();
            // 刚刚被生成或重做，此时事件被推到了undo stack里
            var undo_events = ws.get_undo_stack().filter(function (e) { return e._group === _this._group; });
            for (var i = undo_events.length - 1; i >= 0; i--) {
                var e = undo_events[i];
                // 积木移动、函数定义积木上参数增减、复制粘贴积木造成的create事件
                // 会影响子积木中参数积木的作用域
                if (e.type === interfaces_1.BlockEventType.MOVE
                    || (e.type === interfaces_1.BlockEventType.CREATE
                        && e.source === 'other')
                    || (e.type === interfaces_1.BlockEventType.CHANGE
                        && e.element === 'change_procedure_param')) {
                    _this.process_context_blocks(e);
                }
            }
            // set_disabled操作也产生了对应事件并且推入undo stack
            // 在撤销时只需要正常undo事件，不需要再次检查
        }
        return _this;
    }
    GroupEvent.prototype.process_context_blocks = function (related_e) {
        var _this = this;
        var ws = this._get_event_workspace();
        var block = ws.get_block_by_id(related_e.get_block_id());
        if (!block) {
            return;
        }
        // 由于可能存在 **作用域嵌套** ，
        // 因此需要针对每一块带有作用域的积木，检查其当前的连接情况是否合理。
        var out_of_context_blocks = new Set();
        var in_context_blocks = new Set();
        block.get_descendants(false, true).forEach(function (b) {
            // 函数调用积木的disable状态由procedure manager管理
            if (b.type === procedure_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN
                || b.type === procedure_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
                return;
            }
            if (!(0, block_1.has_context)(b)) {
                return;
            }
            var valid_context = (0, block_1.is_valid_context)(b);
            if (!valid_context && !b.disabled) {
                out_of_context_blocks.add(b);
            }
            if (valid_context && b.disabled) {
                in_context_blocks.add(b);
            }
        });
        var set_disabled = function (b, disabled) {
            // 事件可以被撤销重做，可能被外部关闭（函数副作用），在开始处理前打开
            var ori_status = _this.events.is_record_undo();
            _this.events.set_record_undo(true);
            // 与操作产生的事件使用同一事件组
            // set_group期间需要关闭事件，避免set_group发送出事件造成爆栈
            _this.events.disable();
            var ori_group = _this.events.get_group();
            _this.events.set_group(_this._group);
            _this.events.enable();
            b.set_disabled(disabled);
            // 恢复处理前的状态
            _this.events.disable();
            _this.events.set_group(ori_group);
            _this.events.enable();
            _this.events.set_record_undo(ori_status);
        };
        out_of_context_blocks.forEach(function (b) {
            set_disabled(b, true);
        });
        in_context_blocks.forEach(function (b) {
            set_disabled(b, false);
        });
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], GroupEvent.prototype, "Blink", void 0);
    GroupEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], GroupEvent);
    return GroupEvent;
}(base_event_1.BaseEvent));
exports.GroupEvent = GroupEvent;
