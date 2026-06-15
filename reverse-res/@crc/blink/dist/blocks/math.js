"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_math_blocks = void 0;
var di_1 = require("../core/di");
var defs_1 = require("./defs");
function init_math_blocks(Blink) {
    var Blocks = Blink.Blocks;
    Blink.define_blocks_with_json_array([
        {
            type: 'random',
            message0: (0, defs_1.i18n)('random_num'),
            args0: [
                {
                    type: 'input_value',
                    name: 'a',
                    check: 'Number',
                    align: 'CENTRE',
                },
                {
                    type: 'input_value',
                    name: 'b',
                    check: 'Number',
                    align: 'CENTRE',
                },
            ],
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
        },
        {
            type: 'divisible_by',
            message0: (0, defs_1.i18n)('divisible_by'),
            args0: [
                {
                    type: 'input_value',
                    name: 'NUMBER_TO_CHECK',
                    check: 'Number',
                },
                {
                    type: 'input_value',
                    name: 'DIVISOR',
                    check: 'Number',
                },
            ],
            output: 'Boolean',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
        },
        {
            type: 'calculate',
            message0: (0, defs_1.i18n)('calculate'),
            args0: [
                {
                    type: 'input_value',
                    name: 'input',
                    check: ['String', 'Number'],
                },
            ],
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
            tooltip: (0, defs_1.i18n)('CALCULATE_TOOLTIPS'),
        },
        {
            type: 'math_arithmetic',
            message0: (0, defs_1.i18n)('math_arithmetic'),
            args0: [
                {
                    type: 'input_value',
                    name: 'A',
                    check: ['Number', 'String', 'Boolean', 'Array'],
                },
                {
                    'type': 'field_dropdown',
                    'name': 'OP',
                    'options': [
                        [(0, defs_1.i18n)('MATH_ADDITION_SYMBOL'), 'ADD'],
                        [(0, defs_1.i18n)('MATH_SUBTRACTION_SYMBOL'), 'MINUS'],
                        [(0, defs_1.i18n)('MATH_MULTIPLICATION_SYMBOL'), 'MULTIPLY'],
                        [(0, defs_1.i18n)('MATH_DIVISION_SYMBOL'), 'DIVIDE'],
                        [(0, defs_1.i18n)('MATH_POWER_SYMBOL'), 'POWER'],
                    ],
                },
                {
                    type: 'input_value',
                    name: 'B',
                    check: ['Number', 'String', 'Boolean', 'Array'],
                },
            ],
            inputsInline: true,
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            extensions: ['math_op_tooltip'],
        },
        {
            type: 'math_single',
            message0: (0, defs_1.i18n)('math_single'),
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'OP',
                    options: [
                        [(0, defs_1.i18n)('MATH_SINGLE_OP_ROOT'), 'ROOT'],
                        [(0, defs_1.i18n)('MATH_SINGLE_OP_ABSOLUTE'), 'ABS'],
                        ['-', 'NEG'],
                        ['ln', 'LN'],
                        ['log10', 'LOG10'],
                        ['e^', 'EXP'],
                        ['10^', 'POW10'],
                    ],
                },
                {
                    type: 'input_value',
                    name: 'NUM',
                    check: 'Number',
                },
            ],
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            extensions: ['math_op_tooltip'],
        },
        {
            type: 'math_round',
            message0: (0, defs_1.i18n)('math_round'),
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'OP',
                    options: [
                        [(0, defs_1.i18n)('MATH_ROUND_OPERATOR_ROUND'), 'ROUND'],
                        [(0, defs_1.i18n)('MATH_ROUND_OPERATOR_ROUNDUP'), 'ROUNDUP'],
                        [(0, defs_1.i18n)('MATH_ROUND_OPERATOR_ROUNDDOWN'), 'ROUNDDOWN'],
                    ],
                },
                {
                    type: 'input_shadow',
                    name: 'NUM',
                    field_type: 'math',
                    default_text: '0',
                },
            ],
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            tooltip: (0, defs_1.i18n)('MATH_ROUND_TOOLTIP'),
        },
        {
            type: 'math_modulo',
            message0: (0, defs_1.i18n)('MATH_MODULO_TITLE'),
            args0: [
                {
                    type: 'input_value',
                    name: 'DIVIDEND',
                    check: 'Number',
                },
                {
                    type: 'input_value',
                    name: 'DIVISOR',
                    check: 'Number',
                },
            ],
            inputsInline: true,
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            tooltip: (0, defs_1.i18n)('MATH_MODULO_TOOLTIP'),
        },
        {
            type: 'math_number_property',
            message0: (0, defs_1.i18n)('math_number_property'),
            args0: [
                {
                    type: 'input_value',
                    name: 'NUMBER_TO_CHECK',
                    check: 'Number',
                },
                {
                    type: 'field_dropdown',
                    name: 'PROPERTY',
                    options: [
                        [(0, defs_1.i18n)('MATH_IS_EVEN'), 'EVEN'],
                        [(0, defs_1.i18n)('MATH_IS_ODD'), 'ODD'],
                        [(0, defs_1.i18n)('MATH_IS_PRIME'), 'PRIME'],
                        [(0, defs_1.i18n)('MATH_IS_WHOLE'), 'WHOLE'],
                        [(0, defs_1.i18n)('MATH_IS_POSITIVE'), 'POSITIVE'],
                        [(0, defs_1.i18n)('MATH_IS_NEGATIVE'), 'NEGATIVE'],
                    ],
                },
            ],
            inputsInline: true,
            output: 'Boolean',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            tooltip: (0, defs_1.i18n)('MATH_IS_TOOLTIP'),
        },
    ]);
    /**
     * Tooltip text, keyed by block OP value.
     * Used by logic_compare and logic_operation blocks.
     */
    var TOOLTIPS_BY_OP = {
        // math_arithmetic
        'ADD': (0, defs_1.i18n)('MATH_ARITHMETIC_TOOLTIP_ADD'),
        'MINUS': (0, defs_1.i18n)('MATH_ARITHMETIC_TOOLTIP_MINUS'),
        'MULTIPLY': (0, defs_1.i18n)('MATH_ARITHMETIC_TOOLTIP_MULTIPLY'),
        'DIVIDE': (0, defs_1.i18n)('MATH_ARITHMETIC_TOOLTIP_DIVIDE'),
        'POWER': (0, defs_1.i18n)('MATH_ARITHMETIC_TOOLTIP_POWER'),
        // math_single
        'ROOT': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_ROOT'),
        'ABS': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_ABS'),
        'NEG': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_NEG'),
        'LN': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_LN'),
        'LOG10': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_LOG10'),
        'EXP': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_EXP'),
        'POW10': (0, defs_1.i18n)('MATH_SINGLE_TOOLTIP_POW10'),
    };
    Blink.extensions.register('math_op_tooltip', Blink.extensions.build_tooltip_for_dropdown('OP', TOOLTIPS_BY_OP));
    Blocks.math_trig = {
        init: function () {
            this.set_colour_by_key((0, defs_1.i18n)('ORANGE_3'));
            var this_source_block = this;
            var field_dropdown_factory = Blink.di_container.get(di_1.BINDING.FieldDropdown);
            var trig_dropdown = field_dropdown_factory({
                menu_generator: [
                    [(0, defs_1.i18n)('MATH_TRIG_SIN'), 'SIN'],
                    [(0, defs_1.i18n)('MATH_TRIG_COS'), 'COS'],
                    [(0, defs_1.i18n)('MATH_TRIG_TAN'), 'TAN'],
                    [(0, defs_1.i18n)('MATH_TRIG_ASIN'), 'ASIN'],
                    [(0, defs_1.i18n)('MATH_TRIG_ACOS'), 'ACOS'],
                    [(0, defs_1.i18n)('MATH_TRIG_ATAN'), 'ATAN'],
                ],
                opt_onchange: function (option) {
                    var _a, _b;
                    var is_trig_function = (option === 'SIN') || (option === 'COS') || (option === 'TAN');
                    var degrees_exist = this_source_block.get_input('DEGREES');
                    var events = Blink.di_container.get(di_1.BINDING.events);
                    if (is_trig_function) {
                        if (!degrees_exist && !events.is_undoing()) {
                            (_a = this_source_block.addMutation) === null || _a === void 0 ? void 0 : _a.call(this_source_block);
                        }
                    }
                    else {
                        if (degrees_exist && !events.is_undoing()) {
                            (_b = this_source_block.removeMutation) === null || _b === void 0 ? void 0 : _b.call(this_source_block);
                        }
                    }
                },
            });
            this.append_dummy_input()
                .append_field(trig_dropdown, 'OP');
            this.append_shadow_input('NUM', (0, defs_1.number_shadow)('45')).set_check('Number');
            this.append_dummy_input('DEGREES')
                .append_field((0, defs_1.i18n)('MATH_DEGREES'));
            this.set_inputs_inline(true);
            this.set_output(true);
        },
        addMutation: function () {
            this.append_dummy_input('DEGREES')
                .append_field((0, defs_1.i18n)('MATH_DEGREES'));
            // 变形完成后发送Change Event
            var events = Blink.di_container.get(di_1.BINDING.events);
            if (events.is_enabled()) {
                var change_event_factory = Blink.di_container.get(di_1.BINDING.ChangeEvent);
                events.fire(change_event_factory('mutation', {
                    block: this,
                    old_value: undefined,
                    new_value: 'add',
                }));
            }
        },
        removeMutation: function () {
            var events = Blink.di_container.get(di_1.BINDING.events);
            this.remove_input('DEGREES');
            // 变形完成后发送Change Event
            if (events.is_enabled()) {
                var change_event_factory = Blink.di_container.get(di_1.BINDING.ChangeEvent);
                events.fire(change_event_factory('mutation', {
                    block: this,
                    old_value: 'remove',
                    new_value: undefined,
                }));
            }
        },
    };
    Object.assign(Blink.blocks_xml, {
        random: "<block type=\"random\">\n      " + (0, defs_1.number_value)('a', '0') + "\n      " + (0, defs_1.number_value)('b', '5') + "\n    </block>\n    ",
        divisible_by: "<block type=\"divisible_by\">\n      " + (0, defs_1.number_value)('NUMBER_TO_CHECK', '9') + "\n      " + (0, defs_1.number_value)('DIVISOR', '3') + "\n    </block>\n    ",
        calculate: "<block type=\"calculate\">\n      " + (0, defs_1.text_value)('input', '1+2') + "\n    </block>\n    ",
        math_arithmetic: "<block type=\"math_arithmetic\">\n      " + (0, defs_1.number_value)('A', '0') + "\n      " + (0, defs_1.number_value)('B', '0') + "\n    </block>\n    ",
        math_single: "<block type=\"math_single\">\n      " + (0, defs_1.number_value)('NUM', '0') + "\n    </block>\n    ",
        math_round: "<block type=\"math_round\">\n      " + (0, defs_1.number_value)('NUM', '3.1') + "\n    </block>\n    ",
        math_modulo: "<block type=\"math_modulo\">\n      " + (0, defs_1.number_value)('DIVIDEND', '64') + "\n      " + (0, defs_1.number_value)('DIVISOR', '10') + "\n    </block>\n    ",
        math_number_property: "<block type=\"math_number_property\">\n      " + (0, defs_1.number_value)('NUMBER_TO_CHECK', '0') + "\n    </block>\n    ",
        math_trig: "<block type=\"math_trig\">\n      " + (0, defs_1.number_value)('NUM', '45') + "\n    </block>\n    ",
    });
}
exports.init_math_blocks = init_math_blocks;
