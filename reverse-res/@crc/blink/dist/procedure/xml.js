"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_from_xml = exports.rename_procedures_in_xml = exports.load_from_xml = void 0;
var asserts_1 = require("../core/utils/asserts");
var constants_1 = require("./constants");
var util_1 = require("./util");
/**
 * 在加载项目或无事件增加积木时，从xml中加载函数数据。
 * （如复制角色、屏幕或删除角色、屏幕，造成业务xml更改但不会触发事件）
 * xml中所有函数积木必须有id，否则将抛错。
 * @param procedure_manager 相关的函数管理器。
 * @param xml 需要检查的xml。
 * @param should_rename 是否需要重命名。在作品加载过程中，所有xml应该是正确且没有重名问题的，因此该参数应该为false；
 *  在复制粘贴等过程中，需要处理本次xml中函数的重名问题，该参数应该为true。
 */
function load_from_xml(procedure_manager, xml, should_rename) {
    var all_blocks = Array.from(xml.querySelectorAll('block'));
    if (xml.tagName.toLowerCase() === 'block') {
        all_blocks.unshift(xml);
    }
    var procedure_to_add = {};
    var callers_to_add = {};
    all_blocks.forEach(function (block) {
        var type = block.getAttribute('type');
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            var id = block.getAttribute('id');
            (0, asserts_1.assert)(id);
            var name_field = block.querySelector("field[name=\"" + constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME + "\"]");
            var proc_name = name_field && name_field.textContent;
            (0, asserts_1.assert)(proc_name);
            var param_blocks_on_def = Array.from(block.querySelectorAll("block[type=\"" + constants_1.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK + "\"]"));
            var params = param_blocks_on_def.map(function (param_block) {
                var name_field = param_block.querySelector("field[name=\"" + constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME + "\"]");
                (0, asserts_1.assert)(name_field && name_field.textContent, 'No name field or name on block parameter. ');
                var value_field = param_block.querySelector("field[name=\"" + constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE + "\"]");
                return {
                    param_name: name_field.textContent,
                    default_value: (value_field === null || value_field === void 0 ? void 0 : value_field.textContent) || undefined,
                };
            });
            var stack = block.querySelector("statement[name=\"" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.DEF_STATEMENT + "\"]");
            var return_num = (stack && stack.querySelectorAll("block[type=\"" + constants_1.PROCEDURE_BLOCK_TYPES.RETURN + "\"]>mutation[items=\"1\"]").length) ||
                0;
            if (!should_rename) {
                var proc_1 = procedure_manager.add_procedure_def(proc_name, id);
                proc_1.params = params;
                proc_1.return_count = return_num;
                // 线上作品有多个角色中含有同名函数的情况。
                // 在通过add_procedure_def方法添加定义时，会将重名函数依次+1。
                // 如果函数名已改变，则此处同步修改xml。
                if (name_field && proc_1.name !== proc_name) {
                    name_field.textContent = proc_1.name;
                }
                return;
            }
            var proc = procedure_to_add[proc_name];
            if (!proc) {
                proc = {
                    def_id: id,
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
            proc.def_id = id;
            proc.disabled = false;
            proc.params = params;
            proc.return_count = return_num;
            return;
        }
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN
            || type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
            var id = block.getAttribute('id');
            (0, asserts_1.assert)(id);
            var name_field = block.querySelector('field[name="NAME"]');
            var proc_name = name_field && name_field.textContent;
            (0, asserts_1.assert)(proc_name);
            // 如果定义积木不存在于xml中，就需要以调用积木上的参数列表为准。
            // 因此需要检查调用积木上的参数列表。
            // 如果存在，则此处的设置会在定义积木被加载时覆盖。
            var param_shadows_on_caller = Array.from(block.querySelectorAll('mutation>procedures_2_parameter_shadow'));
            // 调用积木上的参数值可能已经不是默认值，所以只获取参数名
            var params = param_shadows_on_caller.map(function (param_shadow) { return ({
                param_name: param_shadow.getAttribute('name') || '',
            }); });
            if (!should_rename) {
                var existing_proc = procedure_manager.get_procedure_by_name(proc_name);
                if (!existing_proc) {
                    var proc_without_def = procedure_manager.add_procedure_def(proc_name, '');
                    proc_without_def.params = params;
                    proc_without_def.disabled = true;
                }
                procedure_manager.add_caller(proc_name, id, type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? 'call_return' : 'call');
                return;
            }
            var proc = procedure_to_add[proc_name];
            if (!proc) {
                var mutation = block.querySelector('mutation');
                proc = {
                    def_id: (mutation && mutation.getAttribute('def_id')) || '',
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
            callers_to_add[id] = {
                id: id,
                proc_name: proc_name,
                call_type: type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? 'call_return' : 'call',
                disabled: false,
            };
            proc.callers_id.push(id);
            return;
        }
    });
    if (!should_rename) {
        return xml;
    }
    // 处理函数重名，如果拟添加的函数与现有函数重名，则重命名新的函数及调用后再添加。
    var rename_map = (0, util_1.add_procedure_and_generate_rename_map)({
        procedure_manager: procedure_manager,
        procedure_to_add: procedure_to_add,
        callers_to_add: callers_to_add,
    });
    if (Object.keys(rename_map).length === 0) {
        return xml;
    }
    return rename_procedures_in_xml(xml, rename_map);
}
exports.load_from_xml = load_from_xml;
function rename_procedures_in_xml(xml, rename_map) {
    var rename_block = function (block) {
        if (block.tagName.toLowerCase() !== 'block') {
            return;
        }
        var type = block.getAttribute('type');
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            var name_field = block.querySelector('field[name="NAME"]');
            var proc_name = name_field && name_field.textContent;
            if (name_field && proc_name && rename_map[proc_name]) {
                name_field.textContent = rename_map[proc_name];
            }
            return;
        }
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN
            || type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
            var name_field = block.querySelector('field[name="NAME"]');
            var proc_name = name_field && name_field.textContent;
            if (name_field && proc_name && rename_map[proc_name]) {
                name_field.textContent = rename_map[proc_name];
                var mutation = block.querySelector('mutation');
                mutation && mutation.setAttribute('name', rename_map[proc_name]);
            }
        }
    };
    rename_block(xml); // 处理传入的xml本身是一个block的情况
    Array.from(xml.querySelectorAll('block')).forEach(rename_block);
    return xml;
}
exports.rename_procedures_in_xml = rename_procedures_in_xml;
/**
 * 无事件删除积木时，从xml中检查并删除对应函数数据。
 * （如删除角色、屏幕，造成业务xml更改但不会触发事件）
 * xml中所有函数积木必须有id（因此不能用于复制过程），否则将抛错。
 * @param procedure_manager 用以查询的函数管理器。
 * @param xml 需要检查的xml。
 * @return 所有被删除了的函数定义积木id。
 */
function delete_from_xml(procedure_manager, xml) {
    var deleted_def_ids = [];
    var delete_proc = function (block) {
        var type = block.getAttribute('type');
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.DEF) {
            var id = block.getAttribute('id');
            (0, asserts_1.assert)(id);
            var proc = procedure_manager.delete_procedure_def(id);
            proc && deleted_def_ids.push(proc.def_id);
            return;
        }
        if (type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN
            || type === constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
            var id = block.getAttribute('id');
            (0, asserts_1.assert)(id);
            procedure_manager.delete_caller(id);
        }
    };
    delete_proc(xml);
    Array.from(xml.querySelectorAll('block')).forEach(delete_proc);
    return deleted_def_ids;
}
exports.delete_from_xml = delete_from_xml;
