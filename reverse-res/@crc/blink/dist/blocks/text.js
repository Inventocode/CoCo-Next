"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_text_blocks = void 0;
var di_1 = require("../core/di");
var constants_1 = require("../core/constants");
var maths_1 = require("../core/utils/maths");
var dom_1 = require("../core/utils/dom");
var defs_1 = require("./defs");
function init_text_blocks(Blink) {
    Blink.define_blocks_with_json_array([
        {
            type: 'text_select',
            message0: (0, defs_1.i18n)('text_select'),
            args0: [
                {
                    type: 'input_value',
                    name: 'string',
                    check: ['String', 'Number'],
                },
                {
                    type: 'input_value',
                    name: 'char_start_index',
                    check: ['Number'],
                },
                {
                    type: 'input_value',
                    name: 'char_end_index',
                    check: ['Number'],
                },
            ],
            output: 'String',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
        },
        {
            type: 'text_length',
            message0: (0, defs_1.i18n)('text_length'),
            args0: [
                {
                    type: 'input_value',
                    name: 'VALUE',
                    check: ['String', 'Number'],
                },
            ],
            output: 'Number',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
        },
        {
            type: 'text_contain',
            message0: (0, defs_1.i18n)('text_contain'),
            args0: [
                {
                    type: 'input_value',
                    name: 'TEXT1',
                    check: ['String', 'Number'],
                },
                {
                    type: 'input_value',
                    name: 'TEXT2',
                    check: ['String', 'Number'],
                },
            ],
            output: 'Boolean',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
        },
        {
            type: 'text_split',
            message0: (0, defs_1.i18n)('text_split'),
            args0: [
                {
                    type: 'input_value',
                    name: 'TEXT_TO_SPLIT',
                    check: ['String', 'Number'],
                },
                {
                    type: 'input_value',
                    name: 'SPLIT_TEXT',
                    check: ['String', 'Number'],
                },
            ],
            output: 'Array',
            colour: (0, defs_1.i18n)('ORANGE_3'),
            inputsInline: true,
        },
        {
            type: 'text_join',
            message0: '',
            output: 'String',
            inputsInline: true,
            colour: (0, defs_1.i18n)('ORANGE_3'),
            tooltip: (0, defs_1.i18n)('TEXT_JOIN_TOOLTIP'),
            mutator: 'text_join_mutator_codemao',
        },
    ]);
    var QUOTE_IMAGE_MIXIN = {
        /**
         * Image data URI of an LTR opening double quote (same as RTL closing couble quote).
         */
        QUOTE_IMAGE_LEFT_DATAURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC',
        /**
         * Image data URI of an LTR closing double quote (same as RTL opening couble quote).
         */
        QUOTE_IMAGE_RIGHT_DATAURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==',
        /**
         * Pixel width of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
         */
        QUOTE_IMAGE_WIDTH: 8,
        /**
         * Pixel height of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
         */
        QUOTE_IMAGE_HEIGHT: 8,
        /**
         * Inserts appropriate quote images before and after the named field.
         * @param fieldName The name of the field to wrap with quotes.
         */
        quoteField_: function (fieldName) {
            for (var i = 0; i < this.inputList.length; i++) {
                var input = this.inputList[i];
                for (var j = 0; j < input.fieldRow.length; j++) {
                    var field = input.fieldRow[j];
                    if (fieldName == field.name) {
                        input.insert_field_at(j, this.newQuote_(true));
                        input.insert_field_at(j + 2, this.newQuote_(false));
                        return;
                    }
                }
            }
        },
        newQuote_: function (is_left) {
            var quote_el = (0, dom_1.create_svg_element)('g', {});
            (0, dom_1.create_svg_element)('path', {
                'd': is_left ? constants_1.ICON.LEFT_QUOTA : constants_1.ICON.RIGHT_QUOTA,
                'fill-rule': 'nonzero',
            }, quote_el);
            var field_image_factory = Blink.di_container.get(di_1.BINDING.FieldImage);
            return field_image_factory({
                src: quote_el,
                width: QUOTE_IMAGE_MIXIN.QUOTE_IMAGE_WIDTH,
                height: QUOTE_IMAGE_MIXIN.QUOTE_IMAGE_HEIGHT,
                opt_tag: is_left ? 'quote_left' : 'quote_right',
            });
        },
    };
    var TEXT_JOIN_MUTATOR_CODEMAO = {
        itemCount_: 0,
        addMutation: function (value) {
            var _a;
            var events = Blink.di_container.get(di_1.BINDING.events);
            var ori_group = events.get_group();
            if (!ori_group) {
                events.set_group(true);
            }
            var new_input_name = "ADD" + this.itemCount_;
            var new_shadow_id = this.shadow_ids[this.itemCount_] || (0, maths_1.gen_uid)();
            this.shadow_ids[this.itemCount_] = new_shadow_id;
            var new_text = value || '';
            (_a = this.append_value_input(new_input_name, 'TITLE_TAIL', undefined, (0, defs_1.text_shadow)(new_text, new_shadow_id)).connection) === null || _a === void 0 ? void 0 : _a.respawn_shadow();
            this.itemCount_++;
            if (this.itemCount_ > 2) {
                var mutate_input = this.get_input('MUTATE_BUTTON');
                if (mutate_input && !mutate_input.get_field('REMOVE')) {
                    var mutation_remove_factory = Blink.di_container.get(di_1.BINDING.MutationRemoveButton);
                    mutate_input.insert_field_at(0, mutation_remove_factory(undefined), 'REMOVE');
                }
            }
            if (events.is_enabled()) {
                var change_event_factory = Blink.di_container.get(di_1.BINDING.ChangeEvent);
                events.fire(change_event_factory('mutation', {
                    block: this,
                    old_value: undefined,
                    new_value: new_text,
                }));
            }
            if (!ori_group) {
                events.set_group(false);
            }
        },
        removeMutation: function () {
            var _a;
            var idx_to_remove = this.itemCount_ - 1;
            var input_name_to_remove = "ADD" + idx_to_remove;
            var input_to_remove = this.get_input(input_name_to_remove);
            this.itemCount_--;
            if (this.itemCount_ <= 2) {
                var mutate_input = this.get_input('MUTATE_BUTTON');
                if (mutate_input && mutate_input.get_field('REMOVE')) {
                    mutate_input.remove_field('REMOVE');
                }
            }
            if (!input_to_remove) {
                return;
            }
            var events = Blink.di_container.get(di_1.BINDING.events);
            var ori_group = events.get_group();
            if (!ori_group) {
                events.set_group(true);
            }
            // 记录被移除shadow上的field value及shadow的最新id。
            var removed_text;
            var connected_block = input_to_remove.connection.targetBlock();
            if (!connected_block || !connected_block.is_shadow()) {
                // 当前没有连接到shadow积木，有两种情况会进入到此处：
                // 1. 正处于加载过程中，积木已经生成，连接还未处理，即shadow积木还未被生成就发生了变形。
                // 2. 此时该input上嵌入了其他积木。
                // 此时需要从shadow_dom中获取相关数值。
                var shadow_dom = input_to_remove.connection.get_shadow_dom();
                this.shadow_ids[idx_to_remove] = (shadow_dom === null || shadow_dom === void 0 ? void 0 : shadow_dom.getAttribute('id')) || (0, maths_1.gen_uid)();
                removed_text = ((_a = shadow_dom === null || shadow_dom === void 0 ? void 0 : shadow_dom.firstChild) === null || _a === void 0 ? void 0 : _a.textContent) || '';
            }
            else {
                // 连接到shadow，直接取值
                this.shadow_ids[idx_to_remove] = connected_block.id;
                removed_text = connected_block.get_field_value('TEXT') || '';
            }
            this.remove_input(input_name_to_remove);
            if (events.is_enabled()) {
                var change_event_factory = Blink.di_container.get(di_1.BINDING.ChangeEvent);
                events.fire(change_event_factory('mutation', {
                    block: this,
                    old_value: removed_text,
                    new_value: undefined,
                }));
            }
            if (ori_group === '') {
                events.set_group(false);
            }
        },
        mutationToDom: function () {
            var container = document.createElement('mutation');
            container.setAttribute('items', String(this.itemCount_));
            return container;
        },
        domToMutation: function (xmlElement) {
            this.itemCount_ = Math.max(parseInt(xmlElement.getAttribute('items') || '0', 10), 2);
            var events = Blink.di_container.get(di_1.BINDING.events);
            events.disable();
            this.append_dummy_input('TITLE_HEAD')
                .append_field((0, defs_1.i18n)('TEXT_JOIN_TITLE_HEAD'));
            this.shadow_ids = this.shadow_ids || [];
            for (var i = 0; i < this.itemCount_; i++) {
                if (!this.get_input("ADD" + i)) {
                    var id = (0, maths_1.gen_uid)();
                    this.shadow_ids[i] = id;
                    if (i == 0) {
                        this.append_shadow_input("ADD" + i, (0, defs_1.text_shadow)('ab', id));
                        continue;
                    }
                    if (i == 1) {
                        this.append_shadow_input("ADD" + i, (0, defs_1.text_shadow)('c', id));
                        continue;
                    }
                    this.append_shadow_input("ADD" + i, (0, defs_1.text_shadow)('', id));
                }
            }
            this.append_dummy_input('TITLE_TAIL')
                .append_field((0, defs_1.i18n)('TEXT_JOIN_TITLE_TAIL'));
            var mutation_add_factory = Blink.di_container.get(di_1.BINDING.MutationAddButton);
            var mutate_input = this.append_dummy_input('MUTATE_BUTTON')
                .append_field(mutation_add_factory(), 'ADD');
            if (this.itemCount_ > 2) {
                var mutation_remove_factory = Blink.di_container.get(di_1.BINDING.MutationRemoveButton);
                mutate_input.insert_field_at(0, mutation_remove_factory(undefined), 'REMOVE');
            }
            events.enable();
        },
    };
    /** Wraps TEXT field with images of double quote characters. */
    function EXTENSION_TEXT_QUOTES() {
        this.mixin(QUOTE_IMAGE_MIXIN);
        this.quoteField_('TEXT');
    }
    Blink.extensions.register('text_quotes', EXTENSION_TEXT_QUOTES);
    Blink.extensions.register_mutator('text_join_mutator_codemao', TEXT_JOIN_MUTATOR_CODEMAO);
    Object.assign(Blink.blocks_xml, {
        text_select: "<block type=\"text_select\">\n      " + (0, defs_1.text_value)('string', 'abc') + "\n      " + (0, defs_1.number_value)('char_start_index', '1') + "\n      " + (0, defs_1.number_value)('char_end_index', '2') + "\n    </block>",
        text_length: "<block type=\"text_length\">\n      " + (0, defs_1.text_value)('VALUE', 'abc') + "\n    </block>",
        text_contain: "<block type=\"text_contain\">\n      " + (0, defs_1.text_value)('TEXT1', 'abc') + "\n      " + (0, defs_1.text_value)('TEXT2', 'abc') + "\n    </block>",
        text_split: "<block type=\"text_split\">\n      " + (0, defs_1.text_value)('TEXT_TO_SPLIT', '1,2,3,4') + "\n      " + (0, defs_1.text_value)('SPLIT_TEXT', ',') + "\n    </block>",
        text_join: "<block type=\"text_join\">\n      <mutation items=\"2\"></mutation>\n      " + (0, defs_1.text_value)('ADD0', 'ab') + "\n      " + (0, defs_1.text_value)('ADD1', 'c') + "\n    </block>",
    });
}
exports.init_text_blocks = init_text_blocks;
