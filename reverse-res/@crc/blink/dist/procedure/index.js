"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureManager = exports.register_procedure_json_generator = exports.register_procedure_generator = exports.PROCEDURE_BLOCK_FIELD_NAMES = exports.PROCEDURE_BLOCK_INPUT_NAMES = exports.PROCEDURE_BLOCK_TYPES = void 0;
var tslib_1 = require("tslib");
var di_1 = require("../core/di");
var asserts_1 = require("../core/utils/asserts");
var blocks_1 = require("./blocks");
var constants_1 = require("./constants");
var events_1 = require("./events");
var xml_1 = require("./xml");
var json_1 = require("./json");
var util_1 = require("./util");
(0, tslib_1.__exportStar)(require("./interfaces"), exports);
var constants_2 = require("./constants");
Object.defineProperty(exports, "PROCEDURE_BLOCK_TYPES", { enumerable: true, get: function () { return constants_2.PROCEDURE_BLOCK_TYPES; } });
Object.defineProperty(exports, "PROCEDURE_BLOCK_INPUT_NAMES", { enumerable: true, get: function () { return constants_2.PROCEDURE_BLOCK_INPUT_NAMES; } });
Object.defineProperty(exports, "PROCEDURE_BLOCK_FIELD_NAMES", { enumerable: true, get: function () { return constants_2.PROCEDURE_BLOCK_FIELD_NAMES; } });
var base_1 = require("./generators/base");
Object.defineProperty(exports, "register_procedure_generator", { enumerable: true, get: function () { return base_1.register_procedure_generator; } });
var json_2 = require("./generators/json");
Object.defineProperty(exports, "register_procedure_json_generator", { enumerable: true, get: function () { return json_2.register_procedure_json_generator; } });
var ProcedureManager = /** @class */ (function () {
    /**
     * 函数集中管理模块，提供函数的增删改查及一些用于功能注册工具方法。
     *
     * @param caller_disable_callback 调用积木被置灰/取消置灰后的回调。
     *  默认情况下，定义积木的增删、返回值积木的增减会引起*当前workspace*中调用积木的状态变化。
     *  除此之外，业务也许需要一些别的变化（如修改其他屏幕的xml、刷新flyout），可以在该回调中注册。
     *
     * @param param_update_callback 函数的入参变化后的回调。
     *  默认情况下，积木上参数的增减会引起*当前workspace*中调用积木的状态变化。
     *  除此之外，业务也许需要一些别的变化（如修改其他屏幕的xml、刷新flyout），可以在该回调中注册。
     *
     * @param rename_procedure_callback 函数被改名后的回调。
     *  默认情况下，函数名的修改会引起*当前workspace*中调用积木的状态变化。
     *  除此之外，业务也许需要一些别的变化（如修改其他屏幕的xml、刷新flyout），可以在该回调中注册。
     */
    function ProcedureManager(caller_disable_callback, param_update_callback, rename_procedure_callback) {
        var _this = this;
        this.caller_disable_callback = caller_disable_callback;
        this.param_update_callback = param_update_callback;
        this.rename_procedure_callback = rename_procedure_callback;
        this.procedures = {};
        this.callers = {};
        this.get_all_procedures_xml = function () {
            var xml = [];
            var def_block = document.createElement('block');
            def_block.setAttribute('type', constants_1.PROCEDURE_BLOCK_TYPES.DEF);
            xml.push(def_block);
            var return_block = document.createElement('block');
            return_block.setAttribute('type', constants_1.PROCEDURE_BLOCK_TYPES.RETURN);
            xml.push(return_block);
            var gap = document.createElement('sep');
            gap.setAttribute('gap', '30');
            xml.push(gap);
            Object.keys(_this.procedures)
                .filter(function (proc_name) { return !_this.procedures[proc_name].disabled; })
                .sort(function (a, b) { return _this.procedures[a].created_timestamp - _this.procedures[b].created_timestamp; })
                .forEach(function (proc_name) {
                var procedure = _this.procedures[proc_name];
                if (procedure.disabled) {
                    return;
                }
                var name = procedure.name;
                var params = procedure.params;
                var call_noreturn_block = document.createElement('block');
                call_noreturn_block.setAttribute('type', constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN);
                var mutation = document.createElement('mutation');
                mutation.setAttribute('name', name);
                call_noreturn_block.appendChild(mutation);
                var name_field = document.createElement('field');
                name_field.setAttribute('name', 'NAME');
                name_field.textContent = name;
                call_noreturn_block.appendChild(name_field);
                params.forEach(function (param) {
                    var arg = document.createElement('procedures_2_parameter_shadow');
                    arg.setAttribute('name', param.param_name);
                    if (param.default_value !== undefined) {
                        arg.setAttribute('value', param.default_value);
                    }
                    else {
                        // 没有设置默认值的参数，显示原有的默认值0
                        arg.setAttribute('value', '0');
                    }
                    mutation.appendChild(arg);
                });
                xml.push(call_noreturn_block);
                if (procedure.return_count > 0) {
                    var call_return_block = call_noreturn_block.cloneNode(true);
                    call_return_block.setAttribute('type', constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN);
                    xml.push(call_return_block);
                }
            });
            return xml;
        };
    }
    // 工具方法
    ProcedureManager.prototype.register_procedure_blocks = function (blink, on_procedure_name_click, on_add_param_click) {
        (0, blocks_1.register_procedure_blocks)(blink, this, on_procedure_name_click, on_add_param_click);
    };
    ProcedureManager.prototype.register_default_procedure_events = function (workspace) {
        (0, events_1.register_default_procedure_events)(workspace, this);
    };
    ProcedureManager.prototype.load_from_xml = function (xml, should_rename) {
        return (0, xml_1.load_from_xml)(this, xml, should_rename);
    };
    ProcedureManager.prototype.delete_from_xml = function (xml) {
        return (0, xml_1.delete_from_xml)(this, xml);
    };
    ProcedureManager.prototype.load_from_json = function (json, should_rename) {
        return (0, json_1.load_from_json)(this, json, should_rename);
    };
    ProcedureManager.prototype.delete_from_json = function (json) {
        return (0, json_1.delete_from_json)(this, json);
    };
    ProcedureManager.prototype.update_callers_disabled = function (workspace, proc_def_id) {
        var _this = this;
        var events = (0, di_1.get_instance)().get(di_1.BINDING.events);
        // 开始副作用前，关闭事件组，让adapter中暂存的事件先被处理
        var ori_group = events.get_group();
        events.set_group(false);
        events.disable();
        var proc = this.get_procedure_by_def(proc_def_id);
        (0, asserts_1.assert)(proc);
        var noreturn_block_disabled = proc.disabled;
        var return_block_disabled = proc.disabled || proc.return_count === 0;
        proc.callers_id.forEach(function (caller_id) {
            var caller = _this.callers[caller_id];
            (0, asserts_1.assert)(caller);
            var block = workspace.get_block_by_id(caller_id);
            if (!block) {
                return;
            }
            block.set_disabled(caller.call_type === 'call_return' ? return_block_disabled : noreturn_block_disabled);
        });
        this.caller_disable_callback && this.caller_disable_callback(proc.name, noreturn_block_disabled, return_block_disabled);
        events.enable();
        // 结束副作用后，重新打开事件组
        events.set_group(ori_group);
    };
    ProcedureManager.prototype.update_params = function (workspace, proc_name, type, change_value) {
        var events = (0, di_1.get_instance)().get(di_1.BINDING.events);
        // 开始副作用前，关闭事件组，让adapter中暂存的事件先被处理
        var ori_group = events.get_group();
        events.set_group(false);
        events.disable();
        var proc = this.procedures[proc_name];
        (0, asserts_1.assert)(proc, 'Trying to update param on inexistent procedure');
        proc.callers_id.forEach(function (caller_id) {
            var _a, _b;
            var block = workspace.get_block_by_id(caller_id);
            if (!block) {
                return;
            }
            if (type === 'increase') {
                (_a = block.addMutation) === null || _a === void 0 ? void 0 : _a.call(block, change_value.default_value);
            }
            else if (type === 'decrease') {
                (_b = block.removeMutation) === null || _b === void 0 ? void 0 : _b.call(block);
            }
        });
        this.param_update_callback && this.param_update_callback(type, proc_name, change_value);
        events.enable();
        // 结束副作用后，重新打开事件组
        events.set_group(ori_group);
    };
    ProcedureManager.prototype.update_procedure_name = function (workspace, old_name, new_name) {
        var events = (0, di_1.get_instance)().get(di_1.BINDING.events);
        // 开始副作用前，关闭事件组，让adapter中暂存的事件先被处理
        var ori_group = events.get_group();
        events.set_group(false);
        var ori_record_undo = events.is_record_undo();
        var proc = this.procedures[new_name];
        (0, asserts_1.assert)(proc, 'Rename render should be called after rename data');
        var collapsed_top_block_ids = [];
        proc.callers_id.forEach(function (caller_id) {
            var block = workspace.get_block_by_id(caller_id);
            if (!block) {
                return;
            }
            var field_name = block.get_field('NAME');
            (0, asserts_1.assert)(field_name);
            events.set_record_undo(false);
            field_name.set_value(new_name);
            // 重命名时，如果当前积木所属积木块的包裹型父积木（包含配错的头积木）被折叠
            // 需要强制更新一次当前头积木以及调用积木本身的折叠文案
            var collapsed_parent = block.get_collapsed_surround_parent();
            if (collapsed_parent) {
                block.update_collapsed(true);
                if (collapsed_parent === block || collapsed_top_block_ids.includes(collapsed_parent.id)) {
                    return;
                }
                collapsed_top_block_ids.push(collapsed_parent.id);
                collapsed_parent.update_collapsed(true);
            }
            events.set_record_undo(ori_record_undo);
        });
        this.rename_procedure_callback && this.rename_procedure_callback(old_name, new_name);
        // 结束副作用后，重新打开事件组
        events.set_group(ori_group);
    };
    /**
     * 新增一条函数记录。
     * @param proc_name 函数名。
     */
    ProcedureManager.prototype.add_procedure = function (proc_name) {
        (0, asserts_1.assert)(this.procedures[proc_name] == undefined, 'Duplicated procedure name');
        var new_procedure = {
            def_id: '',
            disabled: true,
            name: proc_name,
            params: [],
            callers_id: [],
            return_count: 0,
            valid: false,
            base_name: proc_name,
            created_timestamp: Date.now(),
        };
        this.procedures[proc_name] = new_procedure;
        return new_procedure;
    };
    ProcedureManager.prototype.add_procedure_def = function (proc_name, def_id) {
        var proc = this.procedures[proc_name];
        // 问题作品自动重命名并重新添加
        if (proc && proc.def_id && proc.def_id !== def_id) {
            var ori_name = proc_name;
            proc_name = (0, util_1.get_legal_procedure_name)(proc_name + "%1", this.get_occupied_procedure_names());
            console.warn("Procedure " + ori_name + " def exists. Renaming block [" + def_id + "] to " + proc_name);
            proc = this.add_procedure(proc_name);
        }
        if (!proc) {
            proc = this.add_procedure(proc_name);
        }
        proc.def_id = def_id;
        proc.disabled = false;
        if (!proc.valid) {
            this.soft_recover(proc);
        }
        return proc;
    };
    ProcedureManager.prototype.add_caller = function (proc_name_or_def_id, id, call_type) {
        var proc = this.get_procedure_by_name(proc_name_or_def_id) || this.get_procedure_by_def(proc_name_or_def_id);
        if (!proc) {
            proc = this.add_procedure(proc_name_or_def_id);
        }
        if (!proc.valid) {
            this.soft_recover(proc);
        }
        if (this.callers[id]) {
            this.callers[id].disabled = false;
            return this.callers[id];
        }
        var new_caller = {
            id: id,
            proc_name: proc.name,
            call_type: call_type,
            disabled: false,
        };
        this.callers[id] = new_caller;
        proc.callers_id.push(id);
        return new_caller;
    };
    ProcedureManager.prototype.add_param = function (proc_name, param_name, default_value) {
        var proc = this.procedures[proc_name];
        if (!proc) {
            proc = this.add_procedure(proc_name);
        }
        var existed_param = proc.params.find(function (param) { return param.param_name === param_name; });
        (0, asserts_1.assert)(!existed_param, 'Param existed');
        proc.params.push({
            param_name: param_name,
            default_value: default_value,
        });
        return param_name;
    };
    ProcedureManager.prototype.load_from_workspace = function (workspace) {
        var _this = this;
        workspace.blockDB_.forEach(function (block) {
            if (block.is_insertion_marker() || block.is_in_flyout) {
                return;
            }
            if (block.type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
                _this.load_def_from_block(block);
                return;
            }
            if (block.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN
                || block.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
                _this.load_caller_from_block(block);
            }
        });
    };
    ProcedureManager.prototype.load_def_from_block = function (block) {
        if (block.type !== constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            return;
        }
        var new_proc_name = block.get_field_value('NAME');
        (0, asserts_1.assert)(new_proc_name);
        var procedure = this.add_procedure_def(new_proc_name, block.id);
        procedure.params = block.inputList
            .filter(function (input) { return input.name.startsWith(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX); })
            .map(function (input) {
            var shadow = input.connection && input.connection.targetBlock();
            return {
                param_name: (shadow === null || shadow === void 0 ? void 0 : shadow.get_field_value(constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)) || '',
                default_value: (shadow === null || shadow === void 0 ? void 0 : shadow.get_field_value(constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)) || undefined,
            };
        });
        procedure.return_count = block.get_descendants()
            .filter(function (block) { return block.type === constants_1.PROCEDURE_BLOCK_TYPES.RETURN; }).length;
        return procedure;
    };
    ProcedureManager.prototype.load_caller_from_block = function (block) {
        if (block.type !== constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN &&
            block.type !== constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
            return;
        }
        // 处理一个场景：拖出【函数1】【调用函数1】，删除【函数1】，剪切【调用函数1】
        // 然后粘贴。
        var proc_name_or_id = block.get_field_value('NAME');
        (0, asserts_1.assert)(proc_name_or_id);
        var caller = this.add_caller(proc_name_or_id, block.id, block.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? 'call_return' : 'call');
        return caller;
    };
    ProcedureManager.prototype.delete_procedure_def = function (def_id) {
        var _this = this;
        var procedure = this.get_procedure_by_def(def_id);
        // 函数的创建发生在将定义积木拖到workspace中放下后。
        // 如果从flyout中拖拽出积木后，不放在workspace里，而是直接删除，则积木删除时函数未被创建。
        // 此时不做处理。
        if (!procedure) {
            return;
        }
        procedure.disabled = true;
        // 若函数定义和调用被清空，则函数将被软删除
        if (procedure.callers_id.every(function (caller_id) { return _this.callers[caller_id].disabled; })) {
            this.soft_delete(procedure);
        }
        return procedure;
    };
    ProcedureManager.prototype.soft_delete = function (procedure) {
        var ori_name = procedure.name;
        this.rename_procedure(ori_name, procedure.def_id);
        procedure.valid = false;
        procedure.base_name = ori_name;
    };
    ProcedureManager.prototype.soft_recover = function (procedure) {
        if (procedure.base_name !== procedure.name) {
            this.rename_procedure(procedure.name, (0, util_1.get_legal_procedure_name)(procedure.base_name, this.get_occupied_procedure_names()));
        }
        procedure.valid = true;
        procedure.base_name = procedure.name;
    };
    ProcedureManager.prototype.delete_param = function (proc_name, param_name) {
        var procedure = this.procedures[proc_name];
        (0, asserts_1.assert)(procedure, 'Target procedure does not exist. ');
        var index = procedure.params.findIndex(function (param) { return param.param_name === param_name; });
        (0, asserts_1.assert)(index > -1, "Target procedure does not contain param " + param_name + ". ");
        var remove_params = procedure.params.splice(index, 1);
        return remove_params[0].param_name;
    };
    ProcedureManager.prototype.delete_caller = function (id) {
        var _this = this;
        var caller = this.callers[id];
        // 函数调用的创建发生在将调用积木拖到workspace中放下后。
        // 如果从flyout中拖拽出函木后，不放在workspace里，而是直接删除，则积木删除时函数调用未被创建。
        // 此时不做处理。
        if (!caller) {
            return;
        }
        var procedure = this.procedures[caller.proc_name];
        (0, asserts_1.assert)(procedure);
        caller.disabled = true;
        // 若函数定义和调用被清空，则函数将被软删除
        if (procedure.disabled &&
            procedure.callers_id.every(function (caller_id) { return _this.callers[caller_id].disabled; })) {
            this.soft_delete(procedure);
        }
        return caller;
    };
    ProcedureManager.prototype.clear = function () {
        this.procedures = {};
        this.callers = {};
    };
    ProcedureManager.prototype.rename_procedure = function (old_name, new_name) {
        var _this = this;
        var procedure = this.procedures[old_name];
        (0, asserts_1.assert)(procedure);
        procedure.name = new_name;
        procedure.base_name = new_name;
        this.procedures[new_name] = procedure;
        delete this.procedures[old_name];
        procedure.callers_id.forEach(function (caller_id) {
            var caller = _this.callers[caller_id];
            caller.proc_name = new_name;
        });
        return new_name;
    };
    ProcedureManager.prototype.change_return_count = function (name, change_num) {
        var procedure = this.procedures[name];
        (0, asserts_1.assert)(procedure);
        procedure.return_count += change_num;
    };
    ProcedureManager.prototype.set_param_default_value = function (proc_name, param_name, default_value) {
        var procedure = this.procedures[proc_name];
        var param = procedure.params.find(function (param) { return param.param_name === param_name; });
        (0, asserts_1.assert)(param);
        param.default_value = default_value;
    };
    ProcedureManager.prototype.get_procedures = function () {
        return this.procedures;
    };
    ProcedureManager.prototype.get_procedure_by_name = function (proc_name) {
        return this.procedures[proc_name];
    };
    ProcedureManager.prototype.get_procedure_by_def = function (def_id) {
        var procedure_names = this.get_all_procedure_names();
        var len = procedure_names.length;
        for (var i = 0; i < len; i++) {
            var proc = this.procedures[procedure_names[i]];
            if (proc.def_id === def_id) {
                return proc;
            }
        }
        return undefined;
    };
    ProcedureManager.prototype.get_procedure_name_by_def = function (def_id) {
        var proc = this.get_procedure_by_def(def_id);
        (0, asserts_1.assert)(proc);
        return proc.name;
    };
    ProcedureManager.prototype.get_procedure_param_names = function (proc_name) {
        var procedure = this.procedures[proc_name];
        (0, asserts_1.assert)(procedure);
        var param_names = procedure.params.map(function (_a) {
            var param_name = _a.param_name;
            return param_name;
        });
        return param_names;
    };
    ProcedureManager.prototype.get_all_procedure_names = function () {
        return Object.keys(this.procedures);
    };
    ProcedureManager.prototype.get_occupied_procedure_names = function () {
        var _this = this;
        return Object.keys(this.procedures).filter(function (proc_name) { return _this.procedures[proc_name].valid; });
    };
    ProcedureManager.prototype.get_procedure_by_caller_id = function (caller_id) {
        var caller = this.callers[caller_id];
        if (!caller) {
            return;
        }
        return this.procedures[caller.proc_name];
    };
    ProcedureManager.prototype.get_callers = function () {
        return this.callers;
    };
    return ProcedureManager;
}());
exports.ProcedureManager = ProcedureManager;
