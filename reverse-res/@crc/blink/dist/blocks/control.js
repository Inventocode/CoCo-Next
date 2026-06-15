"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_tell_blocks = exports.is_controls_if = exports.init_control_blocks = void 0;
var di_1 = require("../core/di");
var asserts_1 = require("../core/utils/asserts");
var base_1 = require("../core/utils/base");
var defs_1 = require("./defs");
var IF_INPUT_CHECK = ['Boolean'];
var INPUT_EXTRA_ADD_ELSE = 'EXTRA_ADD_ELSE';
var BUTTON_ADD_ELSE_IF = 'ADD_ELSE_IF';
var BUTTON_REMOVE_ELSE = 'REMOVE_ELSE';
function init_control_blocks(Blink) {
    var config = [
        {
            type: 'repeat_forever',
            message0: (0, defs_1.i18n)('repeat_forever'),
            args0: [
                {
                    type: 'input_dummy',
                    align: 'CENTRE',
                },
                {
                    type: 'input_statement',
                    name: 'DO',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'repeat_n_times',
            message0: (0, defs_1.i18n)('repeat_n_times'),
            args0: [
                {
                    type: 'input_value',
                    name: 'times',
                    check: 'Number',
                    align: 'CENTRE',
                },
                {
                    type: 'input_dummy',
                    align: 'CENTRE',
                },
                {
                    type: 'input_statement',
                    name: 'DO',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'repeat_forever_until',
            message0: (0, defs_1.i18n)('repeat_forever_until'),
            args0: [
                {
                    type: 'input_value',
                    name: 'condition',
                    check: 'Boolean',
                    align: 'CENTRE',
                },
                {
                    type: 'input_dummy',
                    align: 'CENTRE',
                },
                {
                    type: 'input_statement',
                    name: 'DO',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'break',
            message0: (0, defs_1.i18n)('break'),
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'warp',
            message0: (0, defs_1.i18n)('warp'),
            args0: [
                {
                    type: 'input_dummy',
                    align: 'CENTRE',
                },
                {
                    type: 'input_statement',
                    name: 'DO',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('GREEN_5'),
            inputsInline: true,
        },
        {
            type: 'wait',
            message0: (0, defs_1.i18n)('wait_secs'),
            args0: [
                {
                    type: 'input_value',
                    name: 'time',
                    check: 'Number',
                    align: 'CENTRE',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'wait_until',
            message0: (0, defs_1.i18n)('wait_until'),
            args0: [
                {
                    type: 'input_value',
                    name: 'condition',
                    check: 'Boolean',
                    align: 'CENTRE',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'destruct',
            message0: (0, defs_1.i18n)('destruct'),
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
        },
        {
            type: 'controls_if',
            message0: (0, defs_1.i18n)('CONTROLS_IF_MSG_IF') + " %1",
            args0: [
                {
                    type: 'input_value',
                    name: 'IF0',
                    check: IF_INPUT_CHECK,
                },
            ],
            message1: '%1',
            args1: [
                {
                    type: 'input_statement',
                    name: 'DO0',
                },
            ],
            message2: '%1 %2',
            args2: [
                {
                    type: 'mutation_add_button',
                    name: BUTTON_ADD_ELSE_IF,
                },
                {
                    type: 'input_dummy',
                    name: INPUT_EXTRA_ADD_ELSE,
                },
            ],
            inputsInline: true,
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            mutator: 'controls_if_mutator_codemao',
            extensions: ['controls_if_tooltip'],
        },
    ];
    Blink.define_blocks_with_json_array(config);
    Object.assign(Blink.blocks_xml, {
        repeat_forever: '<block type="repeat_forever"/>',
        repeat_n_times: "<block type=\"repeat_n_times\">\n      " + (0, defs_1.number_value)('times', '20', '1,,1') + "\n    </block>",
        repeat_forever_until: "<block type=\"repeat_forever_until\">\n      " + (0, defs_1.logic_value)('condition') + "\n    </block>",
        break: '<block type="break"/>',
        warp: '<block type="warp"/>',
        wait: "<block type=\"wait\">\n      " + (0, defs_1.number_value)('time', '1', '0') + "\n    </block>",
        wait_until: "<block type=\"wait_until\">\n      " + (0, defs_1.logic_value)('condition') + "\n    </block>",
        destruct: '<block type="destruct"/>',
        controls_if_no_else: "<block type=\"controls_if\">\n      " + (0, defs_1.logic_value)('IF0') + "\n    </block>",
        controls_if: "<block type=\"controls_if\">\n      <mutation else=\"1\"></mutation>\n      " + (0, defs_1.logic_value)('IF0') + "\n    </block>",
    });
    var CONTROLS_IF_MUTATOR_CODEMAO = {
        elseCount_: 0,
        prevElseCount_: 0,
        elseifCount_: 0,
        prevElseifCount_: 0,
        addMutation: function (add_idx) {
            if (this.elseCount_ < 1) {
                this.elseCount_ = 1;
            }
            else {
                this.elseifCount_++;
            }
            this.updateShape_(add_idx);
            var cont = Blink.di_container;
            var events = cont.get(di_1.BINDING.events);
            var change_event_factory = cont.get(di_1.BINDING.ChangeEvent);
            if (events.is_enabled()) {
                var event_1 = change_event_factory('mutation', {
                    block: this,
                    old_value: undefined,
                    new_value: add_idx || this.prevElseifCount_,
                });
                events.fire(event_1);
            }
        },
        removeMutation: function (remove_idx) {
            if (this.elseifCount_ > 0) {
                this.elseifCount_--;
            }
            else {
                this.elseCount_ = 0;
            }
            this.updateShape_(remove_idx);
            var cont = Blink.di_container;
            var events = cont.get(di_1.BINDING.events);
            if (events.is_enabled()) {
                var change_event_factory = cont.get(di_1.BINDING.ChangeEvent);
                events.fire(change_event_factory('mutation', {
                    block: this,
                    old_value: remove_idx || this.prevElseifCount_,
                    new_value: undefined,
                }));
            }
        },
        updateShape_: function (change_idx) {
            var _a, _b;
            if (this.prevElseifCount_ === this.elseifCount_ &&
                this.prevElseCount_ === this.elseCount_) {
                return;
            }
            var cont = Blink.di_container;
            var msg = cont.get(di_1.BINDING.Msg);
            var mutation_add_factory = cont.get(di_1.BINDING.MutationAddButton);
            var mutation_remove_factory = cont.get(di_1.BINDING.MutationRemoveButton);
            // 首先处理否则的增减
            if (this.prevElseCount_ !== this.elseCount_) {
                if (this.prevElseCount_ < this.elseCount_) {
                    this.remove_input(INPUT_EXTRA_ADD_ELSE);
                    this.append_dummy_input('ELSE_TEXT')
                        .append_field(msg.CONTROLS_IF_MSG_ELSE)
                        .append_field(mutation_remove_factory(1), BUTTON_REMOVE_ELSE)
                        .append_field(mutation_add_factory(), BUTTON_ADD_ELSE_IF);
                    this.append_statement_input('ELSE');
                }
                else {
                    this.remove_input('ELSE');
                    this.remove_input('ELSE_TEXT');
                    this.append_dummy_input(INPUT_EXTRA_ADD_ELSE)
                        .append_field(mutation_add_factory(), BUTTON_ADD_ELSE_IF);
                }
                this.prevElseCount_ = this.elseCount_;
            }
            if (this.prevElseifCount_ === this.elseifCount_) {
                this.render();
                return;
            }
            var events = cont.get(di_1.BINDING.events);
            var is_add = this.elseifCount_ > this.prevElseifCount_;
            // 添加input，添加数量可能大于1（读取bcm时）
            if (is_add) {
                if (this.elseifCount_ > 0) {
                    var else_line = this.get_input('ELSE_TEXT');
                    if (else_line && else_line.get_field(BUTTON_REMOVE_ELSE)) {
                        else_line.remove_field(BUTTON_REMOVE_ELSE);
                        var add_else_if_button = else_line.get_field(BUTTON_ADD_ELSE_IF);
                        add_else_if_button && (add_else_if_button.margin_left = 26);
                    }
                }
                var add_idx_1 = change_idx || this.prevElseifCount_ + 1;
                var num_to_add_1 = this.elseifCount_ - this.prevElseifCount_;
                // input不是一直都插到最后的，撤销/重做时，可能会在中间插入input。
                // 这种情况下需要处理后续input的名字及按钮的索引信息。
                this.inputList = this.inputList.map(function (input) {
                    var input_idx = Number(input.name.match(/[0-9]+/));
                    // 重命名位于被插入的 input 之后的 input
                    if (input_idx >= add_idx_1) {
                        input.name = input.name.replace(String(input_idx), String(input_idx + num_to_add_1));
                        // 处理 [-] 按钮对应的index
                        var field = input.fieldRow[0];
                        if ((0, base_1.is_field_mutation)(field) && !field.is_add) {
                            field.set_index(input_idx + num_to_add_1);
                        }
                    }
                    return input;
                });
                // 在指定位置插入指定数量的input，
                // 由于插入位置为 “在某个input之前“， 所以需要从后往前插入，否则可能会找不到参照。
                // 插入过程需要避免shadow block的创建及连接事件，否则会在撤销时报错。
                events.disable();
                for (var input_idx = add_idx_1 + num_to_add_1 - 1; input_idx >= add_idx_1; input_idx--) {
                    var insert_before_input_name = input_idx === this.elseifCount_ ? 'ELSE_TEXT' : "IF" + (input_idx + 1);
                    this.append_logic_shadow("IF" + input_idx, insert_before_input_name)
                        .set_check(IF_INPUT_CHECK)
                        .append_field((0, defs_1.i18n)('CONTROLS_IF_MSG_ELSEIF'));
                    this.append_dummy_input("IF_TEXT" + input_idx, insert_before_input_name)
                        .append_field(mutation_remove_factory(input_idx));
                    this.append_statement_input("DO" + input_idx, insert_before_input_name);
                }
                events.enable();
                // 减少input，每次只会减少1个
            }
            else {
                if (this.elseifCount_ === 0) {
                    var else_line = this.get_input('ELSE_TEXT');
                    (0, asserts_1.assert)(else_line);
                    else_line.insert_field_at(1, mutation_remove_factory(1), BUTTON_REMOVE_ELSE);
                    var add_else_if_button = else_line.get_field(BUTTON_ADD_ELSE_IF);
                    add_else_if_button && (add_else_if_button.margin_left = Blink.theme.renderer.SEP_SPACE_X);
                }
                // 撤销 mutation_add 事件时，传入的remove_idx为空。
                // 此时移除被添加的 input，即最后一个。
                var remove_idx_1 = change_idx || this.prevElseifCount_;
                // 删除指定的input
                var reg = new RegExp("[^0-9]" + remove_idx_1 + "$");
                for (var idx = this.inputList.length - 1; idx >= 0; idx--) {
                    var input = this.inputList[idx];
                    if (reg.test(input.name)) {
                        if ((_b = (_a = input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock()) === null || _b === void 0 ? void 0 : _b.is_shadow()) {
                            events.disable();
                            this.remove_input(input.name);
                            events.enable();
                        }
                        else {
                            this.remove_input(input.name);
                        }
                    }
                }
                // 处理后续input
                this.inputList = this.inputList.map(function (input) {
                    var input_idx = Number(input.name.match(/[0-9]+/));
                    // 重命名位于被删除 input 之后的 input
                    // [1, 2, 3, 4, 5] -> delete 3 -> [1, 2, 4, 5] -> [1, 2, 3, 4]
                    if (input_idx > remove_idx_1) {
                        input.name = input.name.replace(String(input_idx), String(input_idx - 1));
                        // 处理 [-] 按钮对应的index
                        var field = input.fieldRow[0];
                        if ((0, base_1.is_field_mutation)(field) && !field.is_add) {
                            field.set_index(input_idx - 1);
                        }
                    }
                    return input;
                });
            }
            this.prevElseifCount_ = this.elseifCount_;
            this.render();
        },
        domToMutation: function (xmlElement) {
            this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
            this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
            this.updateShape_();
        },
        mutationToDom: function () {
            if (!this.elseifCount_ && !this.elseCount_) {
                return undefined;
            }
            var container = document.createElement('mutation');
            if (this.elseifCount_) {
                container.setAttribute('elseif', String(this.elseifCount_));
            }
            if (this.elseCount_) {
                container.setAttribute('else', String(1));
            }
            return container;
        },
    };
    // 实际上应该没什么用了
    var CONTROLS_IF_ONE_ELSE_MUTATOR_CODEMAO = Object.assign({}, CONTROLS_IF_MUTATOR_CODEMAO, {
        updateShape_: function () { },
    });
    /**
     * "controls_if" extension function.
     * Adds mutator, shape updating methods, and dynamic tooltip to "controls_if" blocks.
     */
    function EXTENSION_CONTROLS_IF_TOOLTIP() {
        var _this = this;
        this.set_tooltip(function () {
            var utils = Blink.di_container.get(di_1.BINDING.utils);
            var get_tooltip = function (idx) {
                return utils.replace_message_references((0, defs_1.i18n)("CONTROLS_IF_TOOLTIP_" + idx));
            };
            if (!_this.elseifCount_ && !_this.elseCount_) {
                return get_tooltip(1);
            }
            if (!_this.elseifCount_ && _this.elseCount_) {
                return get_tooltip(2);
            }
            if (_this.elseifCount_ && !_this.elseCount_) {
                return get_tooltip(3);
            }
            return get_tooltip(4);
        });
    }
    Blink.extensions.register('controls_if_tooltip', EXTENSION_CONTROLS_IF_TOOLTIP);
    Blink.extensions.register_mutator('controls_if_mutator_codemao', CONTROLS_IF_MUTATOR_CODEMAO);
    Blink.extensions.register_mutator('controls_if_one_else_mutator_codemao', CONTROLS_IF_ONE_ELSE_MUTATOR_CODEMAO);
}
exports.init_control_blocks = init_control_blocks;
var is_controls_if = function (block) { return block.type === 'controls_if'; };
exports.is_controls_if = is_controls_if;
function init_tell_blocks(Blink, get_entities) {
    var config = [
        {
            type: 'tell',
            message0: (0, defs_1.i18n)('tell'),
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'sprite',
                    options: function () {
                        var arr = get_entities();
                        if (arr.length > 1) {
                            arr.shift();
                        }
                        return arr;
                    },
                },
                {
                    type: 'input_dummy',
                    align: 'CENTRE',
                },
                {
                    type: 'input_statement',
                    name: 'DO',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
            extensions: ['disable_inside_warp_loop'],
        },
        {
            type: 'sync_tell',
            message0: (0, defs_1.i18n)('sync_tell'),
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'sprite',
                    options: function () {
                        var arr = get_entities();
                        if (arr.length > 1) {
                            arr.shift();
                        }
                        return arr;
                    },
                },
                {
                    type: 'input_dummy',
                    align: 'CENTRE',
                },
                {
                    type: 'input_statement',
                    name: 'DO',
                },
            ],
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('BLUE_1'),
            inputsInline: true,
            extensions: ['disable_inside_warp_loop'],
        },
    ];
    Blink.define_blocks_with_json_array(config);
    Object.assign(Blink.blocks_xml, {
        tell: '<block type="tell"/>',
        sync_tell: '<block type="sync_tell"/>',
    });
}
exports.init_tell_blocks = init_tell_blocks;
