"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_expression = require("math-expression-evaluator");
var _cloneDeep = require("lodash/cloneDeep");
var _isEqual = require("lodash/isEqual");
var _isNaN = require("lodash/isNaN");
var _some = require("lodash/some");
var _toNumber = require("lodash/toNumber");
var miller_rabin_1 = require("../algorithm/miller_rabin");
function get_domain_functions(runtime_manager, runtime_data, event_bus, ohno, day_names, config) {
    // I think this was used for supporting user dicts?
    // Or it was an old method for getting data out of
    // lists. Probably written by Patrick.
    // -- Oliver Uvman, 2017-07-26
    // function get_properties(d:any) : any {
    //   if (d.length === 0) {
    //     return [];
    //   }
    //   if (d.length) {
    //     const temp = [];
    //     for (let i = 0; i < d.length; ++i) {
    //       if (d.properties[i].length === 0) {
    //         temp.push([]);
    //       } else if (d.properties[i].length) {
    //         temp.push(get_properties(d.properties[i]));
    //       } else {
    //         temp.push(d.properties[i].data);
    //       }
    //     }
    //     return temp;
    //   }
    //   return d.data;
    // }
    var TIME_FUNCTIONS = {
        year: function () {
            return new Date().getFullYear();
        },
        month: function () {
            return new Date().getMonth() + 1;
        },
        date: function () {
            return new Date().getDate();
        },
        week: function () {
            return day_names[(new Date().getDay())];
        },
        hour: function () {
            return new Date().getHours();
        },
        minute: function () {
            return new Date().getMinutes();
        },
        second: function () {
            return new Date().getSeconds();
        },
    };
    var LOGIC_FUNCTIONS = {
        // logic compare
        EQ: function (args) {
            return _isEqual(args.A, args.B);
        },
        NEQ: function (args) {
            return !_isEqual(args.A, args.B);
        },
        LT: function (args) {
            return args.A < args.B;
        },
        LTE: function (args) {
            return args.A <= args.B;
        },
        GT: function (args) {
            return args.A > args.B;
        },
        GTE: function (args) {
            return args.A >= args.B;
        },
        // operate
        AND: function (args) {
            return args.A && args.B;
        },
        OR: function (args) {
            return args.A || args.B;
        },
        // map
        TRUE: true,
        FALSE: false,
    };
    function to_fixed_number(num, decimals) {
        var pow = Math.pow(10, decimals);
        return Math.round(num * pow) / pow;
    }
    var MATH_FUNCTIONS = {
        ROUND: function (args) {
            return Math.floor(args.NUM + 0.5);
        },
        ROUNDUP: function (args) {
            return Math.ceil(args.NUM);
        },
        ROUNDDOWN: function (args) {
            return Math.floor(args.NUM);
        },
        EVEN: function (args) {
            return args.NUMBER_TO_CHECK % 2 === 0;
        },
        ODD: function (args) {
            return Math.abs(args.NUMBER_TO_CHECK % 2) === 1;
        },
        PRIME: function (args) {
            return miller_rabin_1.is_prime(args.NUMBER_TO_CHECK);
        },
        WHOLE: function (args) {
            return args.NUMBER_TO_CHECK === Math.floor(args.NUMBER_TO_CHECK);
        },
        POSITIVE: function (args) {
            return args.NUMBER_TO_CHECK > 0;
        },
        NEGATIVE: function (args) {
            return args.NUMBER_TO_CHECK < 0;
        },
        DIVISIBLE_BY: function (args) {
            return args.NUMBER_TO_CHECK % args.DIVISOR === 0;
        },
        SIN: function (args) {
            return to_fixed_number(Math.sin(args.NUM * Math.PI / 180), 2);
        },
        ASIN: function (args) {
            return to_fixed_number(Math.asin(args.NUM) / Math.PI * 180, 2);
        },
        COS: function (args) {
            return to_fixed_number(Math.cos(args.NUM * Math.PI / 180), 2);
        },
        ACOS: function (args) {
            return to_fixed_number(Math.acos(args.NUM) / Math.PI * 180, 2);
        },
        TAN: function (args) {
            return to_fixed_number(Math.tan(args.NUM * Math.PI / 180), 2);
        },
        ATAN: function (args) {
            return to_fixed_number(Math.atan(args.NUM) / Math.PI * 180, 2);
        },
        ROOT: function (args) {
            return Math.pow(args.NUM, 0.5);
        },
        ABS: function (args) {
            return Math.abs(args.NUM);
        },
        NEG: function (args) {
            return -args.NUM;
        },
        LN: function (args) {
            return Math.log(args.NUM);
        },
        LOG10: function (args) {
            return Math.log(args.NUM) / Math.log(10);
        },
        EXP: function (args) {
            return Math.pow(Math.E, args.NUM);
        },
        POW10: function (args) {
            return Math.pow(10, args.NUM);
        },
        ADD: function (args) {
            return args.A + args.B;
        },
        MINUS: function (args) {
            return args.A - args.B;
        },
        MULTIPLY: function (args) {
            return args.A * args.B;
        },
        DIVIDE: function (args) {
            return args.A / args.B;
        },
        POWER: function (args) {
            return Math.pow(args.A, args.B);
        },
    };
    /**
     * A list may have been retrieved from our stored lists, or it
     * may have been created by the block that splits a string by
     * some separator.
     */
    function list_update(block_id, entity_id, list) {
        var list_id = runtime_manager.get_list_id(list, entity_id);
        if (!list_id) {
            return;
        }
        if (runtime_manager.is_entity_variable(list_id)) {
            runtime_data.report_entity_list_updated(list_id, list, entity_id);
            return;
        }
        runtime_data.report_list_updated(list_id, list);
    }
    var fns = {
        text_indexOf: function (args, interpreter_id, entity_id, internals) {
            if (args.END === 'FIRST') {
                return args.VALUE.indexOf(args.FIND) + 1;
            }
            else if (args.END === 'LAST') {
                return args.VALUE.lastIndexOf(args.FIND) + 1;
            }
        },
        text_append: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.set_variable(args.VAR, internals.runtime_manager.get_variable(args.VAR, interpreter_id, entity_id) + args.TEXT, interpreter_id, entity_id);
        },
        text_implicit: function (args, interpreter_id, entity_id, internals) {
            var text = args.TEXT;
            if (text === '') {
                return '';
            }
            return text == Number(text) ? Number(text) : text;
        },
        text_join: function (args, interpreter_id, entity_id, internals) {
            var s = '';
            var i = 0;
            while (true) {
                var str = args["ADD" + i];
                if (str === undefined) {
                    break;
                }
                s += "" + str;
                i++;
            }
            return s;
        },
        text_length: function (args, interpreter_id, entity_id, internals) {
            return (isNaN(args.VALUE)) ? args.VALUE.length : args.VALUE.toString().length;
        },
        text_select: function (args, interpreter_id, entity_id, internals) {
            var str = (isNaN(args.string)) ? args.string : args.string.toString();
            var start_index = args.char_start_index;
            var end_index = args.char_end_index - 1;
            if (start_index <= end_index) {
                return str.substring(start_index - 1, end_index + 1);
            }
            else {
                var result = str.substring(end_index, start_index);
                return result.split('').reverse().join('');
            }
        },
        text_contain: function (args, interpreter_id, entity_id, internals) {
            var text1 = String(args.TEXT1);
            var text2 = String(args.TEXT2);
            return (text1.indexOf(text2) !== -1);
        },
        logic_operation: function (args, interpreter_id, entity_id, internals) {
            return LOGIC_FUNCTIONS[args.OP](args);
        },
        logic_negate: function (args, interpreter_id, entity_id, internals) {
            return !args.BOOL;
        },
        logic_boolean: function (args, interpreter_id, entity_id, internals) {
            return LOGIC_FUNCTIONS[args.BOOL];
        },
        logic_compare: function (args, interpreter_id, entity_id, internals) {
            return LOGIC_FUNCTIONS[args.OP](args);
        },
        math_arithmetic: function (args, interpreter_id, entity_id, internals) {
            return MATH_FUNCTIONS[args.OP](args);
        },
        math_number_property: function (args, interpreter_id, entity_id, internals) {
            return MATH_FUNCTIONS[args.PROPERTY](args);
        },
        divisible_by: function (args, interpreter_id, entity_id, internals) {
            return MATH_FUNCTIONS['DIVISIBLE_BY'](args);
        },
        math_modulo: function (args, interpreter_id, entity_id, internals) {
            return args.DIVIDEND % args.DIVISOR;
        },
        math_trig: function (args, interpreter_id, entity_id, internals) {
            return MATH_FUNCTIONS[args.OP](args);
        },
        math_single: function (args, interpreter_id, entity_id, internals) {
            return MATH_FUNCTIONS[args.OP](args);
        },
        math_round: function (args, interpreter_id, entity_id, internals) {
            return MATH_FUNCTIONS[args.OP](args);
        },
        start_on_click: function () {
        },
        start_on_click_2: function () {
        },
        get_time: function (args, interpreter_id, entity_id, internals) {
            return TIME_FUNCTIONS[args.op](args);
        },
        get_cur_frames: function (args, interpreter_id, entity_id, internals) {
            return internals.runtime_manager.get_elapsed_frames();
        },
        variables_get: function (args, interpreter_id, entity_id, internals) {
            // This function is used from the blocks defined in Blockly
            return internals.runtime_manager.get_variable(args.VAR, interpreter_id, entity_id);
        },
        variables_set: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.set_variable(args.VAR, args.VALUE, interpreter_id, entity_id);
        },
        days_after_2000: function () {
            var days = (new Date().valueOf() - new Date('2000-01-01').valueOf()) / (1000 * 60 * 60 * 24);
            return Math.floor(days);
        },
        self_broadcast: function (args, interpreter_id, entity_id, internals) {
            var message = args.message;
            internals.runtime_manager.broadcaster_sending_message(interpreter_id, message, false);
        },
        self_broadcast_and_wait: function (args, interpreter_id, entity_id, internals) {
            var message = args.message;
            internals.runtime_manager.broadcaster_sending_message(interpreter_id, message, true);
        },
        self_listen: function (args, interpreter_id, entity_id, internals) {
            var value = runtime_data.get_action_state_value({
                action_id: 'broadcast',
                action_namespace: '',
                sub_type: args.message,
            });
            if (value !== '') {
                internals.runtime_manager.broadcast_responder_bind_broadcaster(interpreter_id, args.message);
            }
            return value !== '';
        },
        when: function (args) {
            return args.condition;
        },
        wait: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.thread_wait(entity_id, interpreter_id, args.time * 1000);
        },
        change_variable: function (args, interpreter_id, entity_id, internals) {
            var var_id = args.valname;
            var method = args.method || 'increase';
            var n = args.n;
            var value = internals.runtime_manager.get_variable(var_id, interpreter_id, entity_id);
            // Only allow Number or String
            if (typeof (value) === 'object') {
                return;
            }
            if (method === 'increase') {
                internals.runtime_manager.set_variable(var_id, value + n, interpreter_id, entity_id);
            }
            else {
                internals.runtime_manager.set_variable(var_id, (value - n), interpreter_id, entity_id);
            }
        },
        random: function (args, interpreter_id, entity_id, internals) {
            var a = args.a;
            var b = args.b;
            var rand = internals.runtime_manager.get_random_number();
            var randomFunc = Math.floor(a + (rand * (b - a + 1)));
            return randomFunc;
        },
        reset_timer: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.reset_timer();
        },
        destruct: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.destruct_entity(entity_id);
        },
        get_timer: function (args, interpreter_id, entity_id, internals) {
            return internals.runtime_manager.get_timer_elapsed_s();
        },
        terminate: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.disable_interpreter_restarts_automatically();
            internals.runtime_manager.dispose_all();
        },
        restart: function (args, interpreter_id, entity_id, internals) {
            internals.runtime_manager.restart();
        },
        stop: function (args, interpreter_id, entity_id, internals) {
            var type = parseInt(args.scope);
            if (type === 0) { // All scripts
                internals.runtime_manager.dispose_all();
            }
            else if (type === 1) { // Current script
                internals.runtime_manager.dispose_block_group(interpreter_id);
            }
            else if (type === 2) { // Other scripts of this entity
                internals.runtime_manager.dispose_other_block_groups_of_entity(entity_id, interpreter_id);
            }
            else if (type === 3) { // Scripts of other entities
                internals.runtime_manager.dispose_block_groups_of_other_entities(entity_id);
            }
        },
        // TODO Add Types to list functions if possible
        lists_get: function (args, interpreter_id, entity_id, internals) {
            return internals.runtime_manager.lists_get(args.VAR, interpreter_id, entity_id);
        },
        lists_append: function (args, interpreter_id, entity_id, internals) {
            var list = args.VAR;
            list.push(args.VALUE);
            list_update(interpreter_id, entity_id, list);
        },
        lists_delete: function (args, interpreter_id, entity_id, internals) {
            var index = args.INDEX;
            var list = args.VAR;
            if (index === 0) {
                return;
            }
            if (args.TYPE === 'last') {
                list.pop();
            }
            else {
                index = index > 0 ? index - 1 : index;
                list.splice(index, 1);
            }
            list_update(interpreter_id, entity_id, list);
        },
        lists_insert_value: function (args, interpreter_id, entity_id, internals) {
            var index = args.INDEX;
            var list = args.VAR;
            if (index === 0) {
                return;
            }
            if (index === -1) {
                list.push(args.VALUE);
            }
            else {
                index = index > 0 ? index - 1 : index + 1;
                list.splice(index, 0, args.VALUE);
            }
            list_update(interpreter_id, entity_id, list);
        },
        lists_replace: function (args, interpreter_id, entity_id, internals) {
            var index = args.INDEX;
            var list = args.VAR;
            if (index === 0) {
                return;
            }
            if (args.TYPE === 'last') {
                index = list.length;
            }
            index = index > 0 ? index - 1 : index;
            list.splice(index, 1, args.VALUE);
            list_update(interpreter_id, entity_id, list);
        },
        lists_get_value: function (args, interpreter_id, entity_id, internals) {
            var index = args.INDEX;
            var list = args.VAR;
            if (args.TYPE === 'last') {
                index = list.length;
            }
            if (index === 0) {
                // index in codemao start from 1
                if (config.get().legacy.lists_get_value_allow_return_undefined == false) {
                    throw ohno.user.lists_get_value_bad_index({
                        list: list,
                        index: -1,
                        args: args,
                    });
                }
                return;
            }
            else {
                // index < 0 is allowed
                // -2 means the the last but the the second-last item in the list
                index = index > 0 ? index - 1 : list.length + index;
                var result = list[index];
                if (result == undefined && config.get().legacy.lists_get_value_allow_return_undefined == false) {
                    throw ohno.user.lists_get_value_bad_index({
                        list: list,
                        index: index > 0 ? index : -1,
                        args: args,
                    });
                }
                return result;
            }
        },
        lists_is_exist: function (args, interpreter_id, entity_id, internals) {
            // PERF We might be able to avoid the stringified comparison
            var stringified = args.VALUE.toString();
            var list = args.VAR;
            return _some(list, function (e) { return e == args.VALUE || e == stringified; });
        },
        lists_index_of: function (args, interpreter_id, entity_id, internals) {
            var text = args.VALUE;
            var list = args.VAR;
            var val = list.indexOf(text);
            return typeof val === 'number' ? val + 1 : 0;
        },
        lists_length: function (args, interpreter_id, entity_id, internals) {
            var list = args.VAR;
            return list.length;
        },
        calculate: function (args, interpreter_id, entity_id, internals) {
            try {
                return math_expression.lex(args.input).toPostfix().postfixEval();
            }
            catch (e) {
                throw ohno.user.block_bad_math_expression({ block_args: args });
            }
        },
        lists_copy: function (args, interpreter_id, entity_id, internals) {
            var value = _cloneDeep(args.VALUE);
            var target_list = args.TARGET;
            target_list.length = 0;
            value = value || [];
            for (var i = 0; i < value.length; i++) {
                var val = value[i];
                target_list.push(val);
            }
            list_update(interpreter_id, entity_id, target_list);
        },
        text_split: function (args, interpreter_id, entity_id, internals) {
            var text_to_split = args.TEXT_TO_SPLIT;
            if (typeof text_to_split === 'number') {
                text_to_split = text_to_split.toString();
            }
            var split_text = text_to_split.split(args.SPLIT_TEXT) || [];
            return split_text.map(function (element) {
                var n = element.indexOf(' ') < 0 && element !== '' ?
                    _toNumber(element) :
                    element;
                return _isNaN(n) ? element : n;
            });
        },
        multiline_text: function (args, interpreter_id, entity_id, internals) {
            var value = args.TEXT;
            return value;
        },
        default_value: function (args, interpreter_id, entity_id, internals) {
            var value = args.TEXT;
            var number = Number(value);
            return _isNaN(number) ? value : number;
        },
    };
    return function () { return fns; };
}
exports.get_domain_functions = get_domain_functions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluX2Z1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY19ibG9ja3MvZG9tYWluX2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUE2RDtBQUM3RCw2Q0FBZ0Q7QUFDaEQseUNBQTRDO0FBQzVDLHFDQUF3QztBQUN4QyxtQ0FBc0M7QUFDdEMsMkNBQThDO0FBRTlDLDBEQUFxRDtBQVNyRCxTQUFnQixvQkFBb0IsQ0FDaEMsZUFBOEIsRUFDOUIsWUFBd0IsRUFDeEIsU0FBeUIsRUFDekIsSUFBUyxFQUNULFNBQWtCLEVBQ2xCLE1BQWE7SUFHZixtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsNkNBQTZDO0lBQzdDLHNEQUFzRDtJQUN0RCxpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLFVBQVU7SUFDVixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixtQkFBbUI7SUFDbkIsSUFBSTtJQUVKLElBQU0sY0FBYyxHQUFHO1FBQ3JCLElBQUk7WUFDRixPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELEtBQUs7WUFDSCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJO1lBQ0YsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLEVBQUo7WUFDRSxPQUFPLFNBQVMsQ0FBZ0IsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFB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