"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register_default_procedure_events = void 0;
var tslib_1 = require("tslib");
var di_1 = require("../core/di");
var I = (0, tslib_1.__importStar)(require("../core/public_interfaces"));
var asserts_1 = require("../core/utils/asserts");
var base_1 = require("../core/utils/base");
var constants_1 = require("./constants");
var util_1 = require("./util");
var xml_1 = require("./xml");
var register_default_procedure_events = function (workspace, procedure_manager) {
    var events = (0, di_1.get_instance)().get(di_1.BINDING.events);
    var change_event_factory = (0, di_1.get_instance)().get(di_1.BINDING.ChangeEvent);
    workspace.add_custom_change_event('procedure_rename', function (is_forward) {
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        var old_value = this.get_old_value();
        var new_value = this.get_new_value();
        var block_id = this.get_block_id();
        (0, asserts_1.assert)(typeof old_value === 'string');
        (0, asserts_1.assert)(typeof new_value === 'string');
        var block = workspace.get_block_by_id(block_id);
        (0, asserts_1.assert)(block);
        // 函数名可能在invalid时被修改，但当前名字一定为procedure_manager记录的名字，与block id绑定。
        var old_name = _procedure_manager.get_procedure_name_by_def(block_id);
        // 事件的目标名字可能已经被其他valid函数占用，因此需要依靠期望的新名字找到下一个合法命名。
        var maybe_new_name = is_forward ? new_value : old_value;
        var new_name = (0, util_1.get_legal_procedure_name)(maybe_new_name, _procedure_manager.get_occupied_procedure_names());
        events.disable();
        _procedure_manager.rename_procedure(old_name, new_name);
        var value_field = block.get_field('NAME');
        value_field && value_field.set_value(new_name);
        events.enable();
        events.fire(change_event_factory('procedure_rename', {
            block: block,
            old_value: old_name,
            new_value: new_name,
            name: constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME,
        }));
    });
    workspace.add_custom_change_event('change_procedure_param', function (is_forward) {
        var _a, _b, _c, _d;
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        var old_value = this.get_old_value();
        var new_value = this.get_new_value();
        var block_id = this.get_block_id();
        var new_param = is_forward ? new_value : old_value;
        var old_param = is_forward ? old_value : new_value;
        var block = workspace.get_block_by_id(block_id);
        (0, asserts_1.assert)(block);
        var procedure = _procedure_manager.get_procedure_by_def(block_id);
        (0, asserts_1.assert)(procedure);
        events.disable();
        if (typeof old_param === 'undefined' && typeof new_param === 'object') {
            // 新增参数
            (_a = block.addMutation) === null || _a === void 0 ? void 0 : _a.call(block, new_param.param_name);
            if (new_param.default_value !== undefined) {
                var index = procedure.params.length;
                var param_block = (_c = (_b = block.get_input("" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + index)) === null || _b === void 0 ? void 0 : _b.connection) === null || _c === void 0 ? void 0 : _c.targetBlock();
                (0, asserts_1.assert)(param_block);
                param_block.set_field_value("=" + new_param.default_value, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE);
            }
        }
        else if (typeof new_param === 'undefined' && typeof old_param === 'object') {
            // 减少参数
            (_d = block.removeMutation) === null || _d === void 0 ? void 0 : _d.call(block);
        }
        events.enable();
        events.fire(change_event_factory('change_procedure_param', {
            block: block,
            old_value: old_param,
            new_value: new_param,
        }));
    });
    /**
     * 涉及到ui修改的函数修改，需要在当前拖拽操作结束后再完成。
     *  拖拽结束时，积木可能已经被删除。
     *  所以为了取到积木删除时的数据，如果在拖拽结束前触发了delete事件，则立即执行回调。
     * @param cb 需要在当前拖拽完成后执行的操作。
     */
    var do_after_drag = function (cb) {
        var end_drag_listener = function (e) {
            if (e.type !== I.BlockEventType.END_DRAG &&
                e.type !== I.BlockEventType.DELETE) {
                return;
            }
            // 由于业务有“拖动到workspace范围外弹回“的需求，因此move事件可能会被取消。详情见end_drag事件的cancel_move方法。
            // 如果积木是从flyout中被拖出到workspace范围外松手，则积木会被通过撤销直接删除。
            // 拖拽到删除区域删除时，事件触发顺序是delete -> end_drag，
            // 在这种情况下，事件触发的顺序是end_drag -> delete。
            // 在kitten中，如果拖动积木到其他角色上，会产生【复制】的效果，需要特殊处理。
            // 为了避免函数记录撞车，延迟此处cb的处理时间。如果在处理到时，指定的积木已经不存在于当前ws，则不处理。
            setTimeout(function () {
                cb(e);
            });
            // 回调延迟执行，但监听需要同步移除，否则可能被连续的事件多次触发。
            workspace.remove_change_listener(end_drag_listener);
        };
        workspace.add_change_listener(end_drag_listener);
    };
    var handle_procedure_create_event = function (e, curr) {
        // 对创建事件的处理可能需要延迟到拖拽结束后才进行，可能在处理时，对应积木已经被直接删除。
        // 此时直接不做处理。
        if (curr && curr.type === I.BlockEventType.DELETE) {
            return;
        }
        var block = workspace.get_block_by_id(e.get_block_id());
        if (!block) {
            return;
        }
        var ori_status = events.is_record_undo();
        events.set_record_undo(false);
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        // 检查被创建函数的顶积木是否为函数定义积木
        // 1. 函数定义积木为头积木，一定有单独的create事件，不需要检查所有被同时创建的积木
        // 2. 当从flyout中拖拽创建时，在拖拽结束后才创建函数记录
        if (block.type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            // load时会获得正确的return count
            var procedure = _procedure_manager.load_def_from_block(block);
            (0, asserts_1.assert)(procedure);
            events.disable();
            var name_field = block.get_field(constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
            var old_name = name_field === null || name_field === void 0 ? void 0 : name_field.get_value();
            (0, asserts_1.assert)(name_field);
            name_field.set_value(procedure.name);
            events.enable();
            // 积木创建时的函数名和验证后的函数名不同，需要发送重命名事件
            // 这种情况发生在撤销函数的软删除时，函数被软删除后函数名改为了id，撤销时恢复为可用的函数名
            if (old_name !== procedure.name) {
                events.fire(change_event_factory('procedure_rename', {
                    block: block,
                    old_value: old_name || '',
                    new_value: procedure.name,
                    name: constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME,
                }));
            }
            _procedure_manager.update_callers_disabled(workspace, procedure.def_id);
            // 函数定义积木下方可能连接调用积木，不能在此处结束处理
        }
        /**
         * 在函数调用积木被创建时，增加调用的记录。
         * call积木可能连接在其他的积木上，因此需要检查所有被创建的积木。
         */
        var handle_caller_created = function (b) {
            if (b.type !== constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN &&
                b.type !== constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
                return;
            }
            var caller = _procedure_manager.load_caller_from_block(b);
            (0, asserts_1.assert)(caller);
            var b_procedure = _procedure_manager.get_procedure_by_caller_id(b.id);
            (0, asserts_1.assert)(b_procedure);
            var name_field = b.get_field(constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
            (0, asserts_1.assert)(name_field);
            name_field.set_value(b_procedure.name);
            // 由于有多角色操作，撤销造成caller创建时，函数状态可能已经更改，需要更新caller状态
            b.set_disabled(b_procedure.disabled ||
                (b.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN && b_procedure.return_count === 0));
        };
        block.get_descendants(false, true).forEach(handle_caller_created);
        events.set_record_undo(ori_status);
    };
    var handle_procedure_delete_event = function (e) {
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        var type = e.old_xml.getAttribute('type');
        // def积木为头积木，一定有单独的delete事件
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            var procedure = _procedure_manager.delete_procedure_def(e.get_block_id());
            if (!procedure) {
                return;
            }
            _procedure_manager.update_callers_disabled(workspace, procedure.def_id);
            // 函数定义积木下方可能连接调用积木，不能在此处结束处理
        }
        /**
         * 在函数调用积木被删除时，删除调用记录。
         * call积木可能连接在其他的积木上，因此需要检查所有被删除的积木。
         */
        var handle_caller_deleted = function (b) {
            if (b.tagName.toLowerCase() !== 'block') {
                return;
            }
            var b_type = b.getAttribute('type');
            var b_id = b.getAttribute('id');
            (0, asserts_1.assert)(b_type);
            (0, asserts_1.assert)(b_id);
            if (b_type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN ||
                b_type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
                _procedure_manager.delete_caller(b_id);
            }
        };
        handle_caller_deleted(e.old_xml);
        Array.from(e.old_xml.querySelectorAll('block')).forEach(handle_caller_deleted);
    };
    var handle_procedure_move_event = function (e) {
        var old_loc = e.get_old_loc();
        var new_loc = e.get_new_loc();
        var no_connection_change = !old_loc.input_name &&
            !old_loc.parent_id &&
            !new_loc.input_name &&
            !new_loc.parent_id;
        if (no_connection_change) {
            return;
        }
        var connection_cbs = [];
        var block = workspace.get_block_by_id(e.get_block_id());
        if (!block) {
            return;
        }
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        // 检查连接涉及的子积木中，所含函数返回积木的数量。
        // 在积木拖拽结束时触发，直接检查积木
        var relates_return_block_num = block.get_descendants(false, true)
            .filter(function (block) { return block.type === constants_1.PROCEDURE_BLOCK_TYPES.RETURN && block.get_input('VALUE'); })
            .length;
        if (relates_return_block_num < 1) {
            return;
        }
        var get_related_def_block_id = function (bid) {
            var block_ = bid && workspace.get_block_by_id(bid);
            var top_block_ = block_ && block_.get_top_parent();
            if (top_block_ && (0, base_1.is_block_svg)(top_block_) && top_block_.type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
                return top_block_.id;
            }
            return undefined;
        };
        var disconnected_from_def = get_related_def_block_id(e.get_old_loc().parent_id);
        if (disconnected_from_def) {
            // 从函数积木上断开连接。
            connection_cbs.push(function () {
                var proc = _procedure_manager.get_procedure_by_def(disconnected_from_def);
                (0, asserts_1.assert)(proc);
                _procedure_manager.change_return_count(proc.name, -1 * relates_return_block_num);
                if (proc.return_count === 0) {
                    _procedure_manager.update_callers_disabled(workspace, proc.def_id);
                }
            });
        }
        var connected_to_def = get_related_def_block_id(e.get_new_loc().parent_id);
        if (connected_to_def) {
            // 连接到新的函数积木。
            connection_cbs.push(function () {
                var proc = _procedure_manager.get_procedure_by_def(connected_to_def);
                // 从flyout中拖拽函数定义积木连接到其他函数积木上的情况，create事件在拖拽结束的最后才被处理，此时还没有函数记录
                // 在定义积木的create事件中再处理返回值变化
                if (!proc) {
                    return;
                }
                var prev_return_count = proc.return_count;
                _procedure_manager.change_return_count(proc.name, relates_return_block_num);
                // 从无到有
                if (prev_return_count === 0 && proc.return_count > 0) {
                    _procedure_manager.update_callers_disabled(workspace, proc.def_id);
                }
            });
        }
        var move_cb = function () {
            var ori_status = events.is_record_undo();
            events.set_record_undo(false);
            connection_cbs.forEach(function (c) { return c(); });
            events.set_record_undo(ori_status);
        };
        if (!events.is_undoing() && workspace.is_dragging()) {
            do_after_drag(move_cb);
        }
        else {
            move_cb();
        }
    };
    var handle_procedure_change_event = function (e) {
        var block = workspace.get_block_by_id(e.get_block_id() || '');
        // change事件可能发生在其他WorkspaceElement上，比如注释。
        // 如果查找不到对应id的积木，或者当前事件并非change事件，直接退出。
        if (e.type !== I.BlockEventType.CHANGE || !block) {
            return;
        }
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        if (block.type === constants_1.PROCEDURE_BLOCK_TYPES.RETURN) {
            // 返回值积木上的增减事件，先检查该积木当前是否连接到函数定义积木。
            var top_block = block.get_top_parent();
            if (top_block && (0, base_1.is_block_svg)(top_block) && top_block.type !== constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
                return;
            }
            var proc = _procedure_manager.get_procedure_by_def(top_block.id);
            (0, asserts_1.assert)(proc);
            // 返回值增减
            if (e.element === 'mutation') {
                // 增加返回值，使函数有返回值的分支数量+1
                if (e.get_new_value() !== undefined) {
                    _procedure_manager.change_return_count(proc.name, 1);
                    if (proc.return_count > 0) {
                        _procedure_manager.update_callers_disabled(workspace, proc.def_id);
                    }
                    // 去除返回值，使函数有返回值的分支数量-1
                }
                else if (e.get_old_value() !== undefined) {
                    _procedure_manager.change_return_count(proc.name, -1);
                    if (proc.return_count === 0) {
                        _procedure_manager.update_callers_disabled(workspace, proc.def_id);
                    }
                }
            }
        }
        if (block.type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            // 参数增减
            if (e.element === 'change_procedure_param') {
                var old_value = e.get_old_value();
                var new_value = e.get_new_value();
                var proc = _procedure_manager.get_procedure_by_def(e.get_block_id());
                (0, asserts_1.assert)(proc, 'Trying to edit param on in-existing procedure');
                if (typeof new_value === 'object' && typeof old_value === 'undefined') {
                    // 增加参数
                    var param = new_value;
                    _procedure_manager.add_param(proc.name, param.param_name, param.default_value);
                    _procedure_manager.update_params(workspace, proc.name, 'increase', param);
                }
                else if (typeof old_value === 'object' && typeof new_value === 'undefined') {
                    // 减少参数
                    var param = old_value;
                    _procedure_manager.delete_param(proc.name, param.param_name);
                    _procedure_manager.update_params(workspace, proc.name, 'decrease', param);
                }
                return;
            }
            // 重命名
            if (e.element === 'procedure_rename') {
                var old_value = e.get_old_value();
                var new_value = e.get_new_value();
                (0, asserts_1.assert)(typeof old_value === 'string');
                (0, asserts_1.assert)(typeof new_value === 'string');
                _procedure_manager.update_procedure_name(workspace, old_value, new_value);
            }
        }
    };
    workspace.add_change_listener(function (e) {
        var ori_status = events.is_record_undo();
        events.set_record_undo(false);
        switch (e.type) {
            case I.BlockEventType.CREATE:
                if (!events.is_undoing() && e.source === 'flyout:drag') {
                    do_after_drag(handle_procedure_create_event.bind(e, e));
                }
                else {
                    handle_procedure_create_event(e);
                }
                break;
            case I.BlockEventType.DELETE:
                handle_procedure_delete_event(e);
                break;
            case I.BlockEventType.MOVE:
                handle_procedure_move_event(e);
                break;
            case I.BlockEventType.CHANGE:
                handle_procedure_change_event(e);
                break;
        }
        events.set_record_undo(ori_status);
    });
    // 粘贴函数相关积木的预处理
    workspace.set_pre_paste(function (xml_block, mouse_position, is_move_to_default, is_from_paste_all) {
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        if (!is_from_paste_all) {
            xml_block = (0, xml_1.load_from_xml)(_procedure_manager, xml_block, true);
        }
        return {
            xml_block: xml_block,
            mouse_position: mouse_position,
            is_move_to_default: is_move_to_default,
        };
    });
    workspace.set_pre_paste_extend(function (xml_blocks, mouse_position, is_move_to_default) {
        var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager;
        var xml = document.createElement('xml');
        xml_blocks.forEach(function (x) { return xml.appendChild(x); });
        xml_blocks = Array.from((0, xml_1.load_from_xml)(_procedure_manager, xml, true).children);
        return {
            xml_blocks: xml_blocks,
            mouse_position: mouse_position,
            is_move_to_default: is_move_to_default,
        };
    });
};
exports.register_default_procedure_events = register_default_procedure_events;
