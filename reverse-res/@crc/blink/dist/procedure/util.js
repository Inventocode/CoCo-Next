"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_caller_blocks = exports.add_procedure_and_generate_rename_map = exports.get_legal_procedure_name = void 0;
var constants_1 = require("./constants");
function get_oversize_number(name_number) {
    // this function is for dealing with number precision in JS when integer is larger than 2^53
    if (name_number.length > 15) {
        var start = parseInt(name_number.substring(0, 15), 10);
        var end = parseInt(name_number.substring(15, name_number.length), 10) + 1;
        var end_string = end.toString();
        if (end > Math.pow(name_number.length - 15, 10) - 1) {
            start += 1;
            end_string = end_string.substring(1, end_string.length);
        }
        return start + end_string;
    }
    return parseInt(name_number, 10) + 1;
}
function get_legal_procedure_name(new_name, existing_names) {
    while (existing_names.includes(new_name)) {
        var r = new_name.match(/^(.*?)(\d+)$/);
        if (!r) {
            new_name += '1';
        }
        else {
            new_name = r[1] + get_oversize_number(r[2]);
        }
    }
    return new_name;
}
exports.get_legal_procedure_name = get_legal_procedure_name;
function add_procedure_and_generate_rename_map(params) {
    var procedure_manager = params.procedure_manager, procedure_to_add = params.procedure_to_add, callers_to_add = params.callers_to_add;
    var rename_map = {};
    Object.keys(procedure_to_add).forEach(function (adding_name) {
        var procedures = procedure_manager.get_procedures();
        var callers = procedure_manager.get_callers();
        // 本次需要添加的积木中，仅有调用积木而无定义积木，且
        // 调用积木所相关的def_id可以查找到已存在函数
        // 可能为粘贴过程或新版的加载过程
        // 不需要重命名，直接指向已存在的函数，函数名以已存在函数为准
        var existing_proc = procedure_manager.get_procedure_by_def(procedure_to_add[adding_name].def_id);
        if (existing_proc) {
            procedure_to_add[adding_name].callers_id.forEach(function (caller_id) {
                procedure_manager.add_caller(existing_proc.name, caller_id, callers_to_add[caller_id].call_type);
            });
            return;
        }
        // 本次需要添加的积木中，仅有调用积木而无定义积木，且
        // 调用积木未记录自身def_id（旧版加载过程）
        // 不需要重命名，直接添加记录
        if (!procedure_to_add[adding_name].def_id) {
            procedure_to_add[adding_name].callers_id.forEach(function (caller_id) {
                procedure_manager.add_caller(adding_name, caller_id, callers_to_add[caller_id].call_type);
            });
            return;
        }
        // 未发现重名，不需要重命名
        if (!procedures[adding_name]) {
            procedures[adding_name] = procedure_to_add[adding_name];
            procedures[adding_name].callers_id.forEach(function (caller_id) {
                callers[caller_id] = callers_to_add[caller_id];
            });
            return;
        }
        var new_name = get_legal_procedure_name(adding_name, procedure_manager.get_occupied_procedure_names());
        rename_map[adding_name] = new_name;
        var procedure = procedure_to_add[adding_name];
        procedure.name = new_name;
        procedure.base_name = new_name;
        procedure.callers_id.forEach(function (caller_id) {
            var caller = callers_to_add[caller_id];
            caller.proc_name = new_name;
            callers[caller_id] = caller;
        });
        procedures[new_name] = procedure;
    });
    return rename_map;
}
exports.add_procedure_and_generate_rename_map = add_procedure_and_generate_rename_map;
function find_caller_blocks(ws_json, procedure_name) {
    var block_ids = Object.keys(ws_json.blocks);
    var blocks = [];
    block_ids.forEach(function (id) {
        var block = ws_json.blocks[id];
        if ((block.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN
            || block.type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN)
            && block.fields[constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] === procedure_name) {
            blocks.push(ws_json.blocks[id]);
        }
    });
    return blocks;
}
exports.find_caller_blocks = find_caller_blocks;
