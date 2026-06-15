"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rename_procedures_in_json = exports.delete_from_json = exports.load_from_json = void 0;
var asserts_1 = require("../core/utils/asserts");
var constants_1 = require("./constants");
var util_1 = require("./util");
function get_field_value(block, field_name) {
    return block.fields[field_name];
}
function get_descendants(workspace_json, block_id, predict) {
    var descendants = [];
    if (!predict || predict(workspace_json.blocks[block_id])) {
        descendants.push(workspace_json.blocks[block_id]);
    }
    if (workspace_json.connections[block_id]) {
        Object.keys(workspace_json.connections[block_id]).forEach(function (child_id) {
            descendants.push.apply(descendants, get_descendants(workspace_json, child_id, predict));
        });
    }
    return descendants;
}
function parse_def_from_block(deps) {
    var procedure_manager = deps.procedure_manager, workspace_json = deps.workspace_json, should_rename = deps.should_rename, block_id = deps.block_id, procedure_to_add = deps.procedure_to_add;
    var block_data = workspace_json.blocks[block_id];
    if (block_data.type !== constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
        return;
    }
    // 确定函数名
    var proc_name = get_field_value(block_data, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
    (0, asserts_1.assert)(proc_name);
    // 确定参数列表
    var block_connections = workspace_json.connections[block_id];
    var param_block_ids = Object.keys(block_connections)
        .filter(function (child_id) {
        var conn = block_connections[child_id];
        return conn.type === 'input' && conn.input_name.startsWith(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX);
    })
        .sort(function (id_a, id_b) {
        var conn_a = block_connections[id_a];
        var conn_b = block_connections[id_b];
        (0, asserts_1.assert)(conn_a.type === 'input' && conn_b.type === 'input');
        var idx_a = Number(conn_a.input_name.slice(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX.length));
        var idx_b = Number(conn_b.input_name.slice(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX.length));
        return idx_a - idx_b;
    });
    var params = param_block_ids.map(function (param_block_id) {
        var param_block = workspace_json.blocks[param_block_id];
        (0, asserts_1.assert)(param_block && param_block.type === constants_1.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK);
        var param_name = get_field_value(param_block, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME);
        (0, asserts_1.assert)(param_name);
        var default_value = get_field_value(param_block, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE);
        return {
            param_name: param_name,
            default_value: default_value,
        };
    });
    // 确定下接积木中，返回值积木的数量
    var return_num = get_descendants(workspace_json, block_id, function (b) { return b.type === constants_1.PROCEDURE_BLOCK_TYPES.RETURN && Object.keys(b.shadows).some(function (name) { return name === 'VALUE'; }); }).length;
    if (!should_rename) {
        var proc_1 = procedure_manager.add_procedure_def(proc_name, block_id);
        proc_1.params = params;
        proc_1.return_count = return_num;
        // 由于json是新功能，暂时不对存在重名函数的问题作品进行处理。
        return;
    }
    var proc = procedure_to_add[proc_name];
    if (!proc) {
        proc = {
            def_id: block_id,
            disabled: true,
            name: proc_name,
            base_name: proc_name,
            params: [],
            callers_id: [],
            return_count: 0,
            valid: true,
            created_timestamp: Date.now(),
        };
        procedure_to_add[proc_name] = proc;
    }
    proc.def_id = block_id;
    proc.disabled = false;
    proc.params = params;
    proc.return_count = return_num;
}
function parse_caller_from_block(deps) {
    var procedure_manager = deps.procedure_manager, workspace_json = deps.workspace_json, should_rename = deps.should_rename, block_id = deps.block_id, procedure_to_add = deps.procedure_to_add, callers_to_add = deps.callers_to_add;
    var block_data = workspace_json.blocks[block_id];
    if (block_data.type !== constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN &&
        block_data.type !== constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
        return;
    }
    // 确定函数名
    var proc_name = get_field_value(block_data, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
    (0, asserts_1.assert)(proc_name);
    // 如果定义积木不存在于xml中，就需要以调用积木上的参数列表为准。
    // 因此需要检查调用积木上的参数列表。
    // 如果存在，则此处的设置会在定义积木被加载时覆盖。
    var param_shadows_on_caller = block_data.mutation.match(/<procedures_2_parameter_shadow[^>]+><\/procedures_2_parameter_shadow>/g);
    var params = [];
    if (param_shadows_on_caller) {
        // 调用积木上的参数值可能已经不是默认值，所以只获取参数名
        params = Array.from(param_shadows_on_caller).map(function (str) {
            var param_name = str.match(/ name="([^"]+)"/);
            (0, asserts_1.assert)(param_name && param_name.length === 2, "Trying to extract param name from invalid procedures_2_parameter_shadow: " + str);
            return {
                param_name: param_name[1],
            };
        });
    }
    if (!should_rename) {
        var existing_proc = procedure_manager.get_procedure_by_name(proc_name);
        if (!existing_proc) {
            var proc_without_def = procedure_manager.add_procedure_def(proc_name, '');
            proc_without_def.params = params;
            proc_without_def.disabled = true;
        }
        procedure_manager.add_caller(proc_name, block_id, block_data.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? 'call_return' : 'call');
        return;
    }
    var proc = procedure_to_add[proc_name];
    if (!proc) {
        var def_id_pattern = block_data.mutation.match(/def_id="([^"]+)"/);
        var def_id = (def_id_pattern && def_id_pattern[1]) || '';
        proc = {
            def_id: def_id,
            disabled: true,
            name: proc_name,
            base_name: proc_name,
            params: params,
            callers_id: [],
            return_count: 0,
            valid: true,
            created_timestamp: Date.now(),
        };
        procedure_to_add[proc_name] = proc;
    }
    callers_to_add[block_id] = {
        id: block_id,
        proc_name: proc_name,
        call_type: block_data.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? 'call_return' : 'call',
        disabled: false,
    };
    proc.callers_id.push(block_id);
}
/**
 * 在加载项目或无事件增加积木时，从json中加载函数数据。
 * （如复制角色、屏幕或删除角色、屏幕，造成业务json更改但不会触发事件）
 * @param procedure_manager 相关的函数管理器。
 * @param json 需要检查的json。
 * @param should_rename 是否需要重命名。在作品加载过程中，所有json应该是正确且没有重名问题的，因此该参数应该为false；
 *  在复制粘贴等过程中，需要处理本次json中函数的重名问题，该参数应该为true。
 */
function load_from_json(procedure_manager, workspace_json, should_rename) {
    var procedure_to_add = {};
    var callers_to_add = {};
    Object.keys(workspace_json.blocks).forEach(function (block_id) {
        parse_def_from_block({
            procedure_manager: procedure_manager,
            procedure_to_add: procedure_to_add,
            workspace_json: workspace_json,
            block_id: block_id,
            should_rename: should_rename,
        });
        parse_caller_from_block({
            procedure_manager: procedure_manager,
            procedure_to_add: procedure_to_add,
            workspace_json: workspace_json,
            block_id: block_id,
            should_rename: should_rename,
            callers_to_add: callers_to_add,
        });
    });
    if (!should_rename) {
        return workspace_json;
    }
    var rename_map = (0, util_1.add_procedure_and_generate_rename_map)({
        procedure_manager: procedure_manager,
        procedure_to_add: procedure_to_add,
        callers_to_add: callers_to_add,
    });
    return rename_procedures_in_json(workspace_json, rename_map);
}
exports.load_from_json = load_from_json;
function delete_from_json(procedure_manager, workspace_json) {
    var deleted_def_ids = [];
    var delete_proc = function (block_json) {
        var type = block_json.type;
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            var id = block_json.id;
            var proc = procedure_manager.delete_procedure_def(id);
            proc && deleted_def_ids.push(proc.def_id);
            return;
        }
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN
            || type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
            var id = block_json.id;
            procedure_manager.delete_caller(id);
        }
    };
    Object.keys(workspace_json.blocks).forEach(function (block_id) {
        var block_json = workspace_json.blocks[block_id];
        delete_proc(block_json);
    });
    return deleted_def_ids;
}
exports.delete_from_json = delete_from_json;
function rename_procedures_in_json(workspace_json, rename_map) {
    var procedure_blocks = [
        constants_1.PROCEDURE_BLOCK_TYPES.DEF,
        constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN,
        constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN,
    ];
    Object.keys(workspace_json.blocks).forEach(function (block_id) {
        var block = workspace_json.blocks[block_id];
        if (procedure_blocks.indexOf(block.type) < 0) {
            return;
        }
        var ori_name = block.fields[constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME];
        if (ori_name) {
            if (rename_map[ori_name]) {
                block.fields[constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] = rename_map[ori_name];
            }
        }
    });
    return workspace_json;
}
exports.rename_procedures_in_json = rename_procedures_in_json;
