"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_nested_blocks_with_comment = exports.get_outer_block = exports.has_context = exports.is_valid_context = exports.cal_num_blocks = exports.fire_block_onchange = exports.update_disable_status = void 0;
var procedure_1 = require("../../procedure");
var interfaces_1 = require("../interfaces");
var asserts_1 = require("./asserts");
var base_1 = require("./base");
function update_disable_status(block) {
    if (block.is_in_flyout) {
        return;
    }
    var LOOP_TYPES = ['repeat_forever', 'repeat_n_times', 'repeat_forever_until'];
    var legal = true;
    var surround_block = block.get_surround_parent();
    // 判断积木是否在该结构中：重复执行 >> this
    while (surround_block) {
        if (LOOP_TYPES.includes(surround_block.type)) {
            legal = false;
            break;
        }
        surround_block = surround_block.get_surround_parent();
    }
    if (legal) {
        if (!block.disabled) {
            return;
        }
        block.disabled = false;
        block.update_disabled();
    }
    else { // illegal
        if (block.disabled) {
            return;
        }
        block.disabled = true;
        block.update_disabled();
    }
}
exports.update_disable_status = update_disable_status;
function fire_block_onchange(block) {
    var all_blocks = block.get_descendants();
    var vain_event = {};
    for (var _i = 0, all_blocks_1 = all_blocks; _i < all_blocks_1.length; _i++) {
        var _block = all_blocks_1[_i];
        if (_block.onchange) {
            _block.onchange(vain_event);
        }
    }
}
exports.fire_block_onchange = fire_block_onchange;
function cal_num_blocks(blocks) {
    return blocks.filter(function (block) {
        return ((0, base_1.is_block_svg)(block) &&
            !block.is_shadow() &&
            !(block.type.includes('parameter') && block.parent_block && block.parent_block.type.includes('procedures_2_def')))
            || (0, base_1.is_workspace_comment)(block);
    })
        .length;
}
exports.cal_num_blocks = cal_num_blocks;
function is_valid_context(block) {
    var _a, _b;
    var inferior = block.previous_connection || block.output_connection;
    if (!inferior || !inferior.target_connection || !has_context(block)) {
        return true;
    }
    var superior = inferior.target_connection;
    var parent_connection = superior;
    var _loop_1 = function () {
        (0, asserts_1.assert)(parent_connection.is_superior());
        if (parent_connection.context === inferior.context) {
            // 对于函数参数积木，需要检查函数定义积木上是否有符合条件的同名参数
            if (block.type === procedure_1.PROCEDURE_BLOCK_TYPES.PARAM) {
                var found_1 = false;
                var param_name_1 = block.get_field_value('param_name') || '';
                var def_block = parent_connection.get_source_block();
                def_block.inputList.forEach(function (input) {
                    var _a;
                    if (input.type !== interfaces_1.InputType.VALUE) {
                        return;
                    }
                    var target_block = (_a = input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock();
                    if (!target_block) {
                        return;
                    }
                    if (target_block.get_field_value('param_name') === param_name_1) {
                        found_1 = true;
                    }
                });
                return { value: found_1 };
            }
            return { value: true };
        }
        parent_connection =
            ((_a = parent_connection.source_block.previous_connection) === null || _a === void 0 ? void 0 : _a.target_connection) ||
                ((_b = parent_connection.source_block.output_connection) === null || _b === void 0 ? void 0 : _b.target_connection);
    };
    while (parent_connection) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // run out of scopes.
    return false;
}
exports.is_valid_context = is_valid_context;
function has_context(block) {
    var inferior = block.previous_connection || block.output_connection;
    // 如果inferior积木没有作用域或作为shadow，则其可以在任意位置被连接。
    if (!inferior || !inferior.context || inferior.source_block.is_shadow()) {
        return false;
    }
    return true;
}
exports.has_context = has_context;
/**
 * 获得积木所在行的最外层积木。
 * 即第一块类型为执行积木的父积木，或不存在父积木的输出积木。
 */
function get_outer_block(block) {
    var outer_block = block;
    if (!outer_block.is_output_block()) {
        return outer_block;
    }
    while (outer_block.parent_block
        && outer_block.parent_block.is_output_block()) {
        outer_block = outer_block.parent_block;
    }
    if (outer_block.parent_block && !outer_block.parent_block.is_output_block()) {
        outer_block = outer_block.parent_block;
    }
    return outer_block;
}
exports.get_outer_block = get_outer_block;
/**
 * 获得积木内嵌的子积木中，带有注释的积木。
 */
function get_nested_blocks_with_comment(root_block) {
    var nested_blocks = root_block.get_all_nested_blocks();
    return nested_blocks.filter(function (b) { return b.comment; });
}
exports.get_nested_blocks_with_comment = get_nested_blocks_with_comment;
