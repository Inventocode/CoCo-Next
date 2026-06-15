"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_color_blocks = void 0;
var tslib_1 = require("tslib");
var color_1 = require("../core/utils/color");
var utils_1 = require("../core/workspace_element/block/input/fields/utils");
var I = (0, tslib_1.__importStar)(require("../core/public_interfaces"));
var di_1 = require("../core/di");
var defs_1 = require("./defs");
var images_1 = require("./images");
function init_color_blocks(Blink) {
    Blink.define_block_with_object('color_picker', {
        init: function () {
            var field_colour_factory = Blink.di_container.get(di_1.BINDING.FieldColour);
            var field_colour = field_colour_factory({ colour: '#E8308C' });
            this.append_dummy_input('COLOR_PALETTE')
                .append_field(field_colour, 'COLOR_PALETTE');
            var field_button_factory = Blink.di_container.get(di_1.BINDING.FieldButton);
            var button = field_button_factory({
                src: images_1.icon_setting,
                height: 20,
                width: 20,
                opt_callback: function (field) { show_color_menu(field, Blink.Msg.SELECT_COLOR_PARAM_TYPE); },
                has_circle: true,
            });
            this.append_dummy_input('BUTTON').append_field(button, 'BUTTON');
            this.set_output(true, ['String', 'Color']);
            this.set_inputs_inline(true);
            this.set_colour(Blink.theme.block_color.PURPLE_1.fill);
            this.format_ = I.EColorFormat.ColorPalette;
            this.color_ = new color_1.Color('#E8308C');
            Blink.extensions.apply('param_color_block', this);
        },
        addMutation: function (format, prev_format) {
            if (format === undefined || typeof format === 'string') {
                return;
            }
            this.updateShape_(format);
            // 与普通变形积木的+/-变形不同，颜色积木可以在几种形态之间随意切换，不遵循一定的增减规则
            // 因此事件中仅记录new_value，在撤销和重做时无法得知需要切换到哪一种形态
            // 因此用name字段记录积木变形前的格式，在撤销时使用（该字段原用于记录触发积木变形的field名称）
            var cont = Blink.di_container;
            var events = cont.get(di_1.BINDING.events);
            if (events.is_enabled()) {
                var change_event_factory = cont.get(di_1.BINDING.ChangeEvent);
                var event_1 = change_event_factory('mutation', {
                    block: this,
                    old_value: undefined,
                    new_value: format,
                    name: prev_format, // 变形前的形态
                });
                events.fire(event_1);
            }
        },
        removeMutation: function (prev_format, format) {
            if (format === undefined) {
                return;
            }
            this.updateShape_(parseInt(format));
            // 颜色积木的removeMutation仅在撤销时被调用，手动切换时只会调用addMutation
            // 此时fire事件不会进入撤销重做栈，只会触发相应的事件监听，执行副作用
            // 因此与addMutation发送一样的事件即可
            var cont = Blink.di_container;
            var events = cont.get(di_1.BINDING.events);
            if (events.is_enabled()) {
                var change_event_factory = cont.get(di_1.BINDING.ChangeEvent);
                var event_2 = change_event_factory('mutation', {
                    block: this,
                    old_value: undefined,
                    new_value: format,
                    name: prev_format, // 变形前的形态
                });
                events.fire(event_2);
            }
        },
        updateShape_: function (format, color) {
            var _this = this;
            if (this.format_ === format) {
                return;
            }
            // 更新当前颜色值
            if (!color) {
                update_color(this);
            }
            // 移除现有结构
            switch (this.format_) {
                case I.EColorFormat.ColorPalette:
                    this.remove_input('COLOR_PALETTE');
                    break;
                case I.EColorFormat.ColorString:
                    this.remove_input('COLOR_STRING');
                    break;
                case I.EColorFormat.HSVA:
                    ['H', 'S', 'V', 'A'].forEach(function (item) { return _this.remove_input(item); });
                    break;
                case I.EColorFormat.RGBA:
                    ['R', 'G', 'B', 'A'].forEach(function (item) { return _this.remove_input(item); });
                    break;
                default:
                    break;
            }
            // 添加新结构
            switch (format) {
                case I.EColorFormat.ColorPalette: {
                    var field_colour_factory = Blink.di_container.get(di_1.BINDING.FieldColour);
                    this.append_dummy_input('COLOR_PALETTE', 0)
                        .append_field(field_colour_factory({ colour: this.color_.toString() }), 'COLOR_PALETTE');
                    this.format_ = I.EColorFormat.ColorPalette;
                    break;
                }
                case I.EColorFormat.ColorString: {
                    this.append_shadow_input('COLOR_STRING', (0, defs_1.text_shadow)((0, color_1.rgba_to_hex)(this.color_).toUpperCase()), 0).set_check('String');
                    this.format_ = I.EColorFormat.ColorString;
                    break;
                }
                case I.EColorFormat.HSVA: {
                    var _a = color_to_hsva(this.color_), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
                    this.append_shadow_input('H', hue_number_shadow(h, hue_constraints, hue_exceptions), 0).set_check('Number').append_field('H');
                    this.append_shadow_input('S', (0, defs_1.number_shadow)(s, common_constraints), 1).set_check('Number').append_field('S');
                    this.append_shadow_input('V', (0, defs_1.number_shadow)(v, common_constraints), 2).set_check('Number').append_field('V');
                    this.append_shadow_input('A', (0, defs_1.number_shadow)(a, common_constraints), 3).set_check('Number').append_field('A');
                    ['H', 'S', 'V', 'A'].forEach(function (item) {
                        var field = _this.get_shadow_field(item);
                        field.set_controller_option({
                            type: I.ControllerType.COLOR_PICKER,
                            color_format: I.EColorControllerFormat.HSVA,
                            line: item,
                        });
                    });
                    this.format_ = I.EColorFormat.HSVA;
                    break;
                }
                case I.EColorFormat.RGBA: {
                    var _b = color_to_rgba(this.color_), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
                    this.append_shadow_input('R', (0, defs_1.number_shadow)(r, rgb_constraints), 0).set_check('Number').append_field('R');
                    this.append_shadow_input('G', (0, defs_1.number_shadow)(g, rgb_constraints), 1).set_check('Number').append_field('G');
                    this.append_shadow_input('B', (0, defs_1.number_shadow)(b, rgb_constraints), 2).set_check('Number').append_field('B');
                    this.append_shadow_input('A', (0, defs_1.number_shadow)(a, common_constraints), 3).set_check('Number').append_field('A');
                    ['R', 'G', 'B', 'A'].forEach(function (item) {
                        var field = _this.get_shadow_field(item);
                        field.set_controller_option({
                            type: I.ControllerType.COLOR_PICKER,
                            color_format: I.EColorControllerFormat.RGBA,
                            line: item,
                        });
                    });
                    this.format_ = I.EColorFormat.RGBA;
                    break;
                }
                default:
                    break;
            }
            this.render();
        },
        domToMutation: function (xml) {
            if (!xml) {
                return;
            }
            var format = parseInt(xml.getAttribute('format') || '1');
            var color = new color_1.Color(xml.getAttribute('color') || '#E8308C');
            this.color_ = color;
            this.updateShape_(format, color);
        },
        mutationToDom: function () {
            var container = document.createElement('mutation');
            container.setAttribute('format', String(this.format_));
            var color = update_color(this);
            if (color) {
                container.setAttribute('color', color.toString());
            }
            return container;
        },
    });
    Object.assign(Blink.blocks_xml, {
        color_picker: "<block type=\"color_picker\">\n      <mutation format=\"1\" color=\"#E8308C\"></mutation>\n      <field name=\"COLOR_PALETTE\">#E8308C</field>\n    </block>",
    });
    function show_color_menu(field, title) {
        var source_block = field.source_block;
        if (!source_block) {
            return;
        }
        update_color(source_block);
        var menu = document.createElement('div');
        menu.classList.add('color-menu');
        field.source_block && menu.classList.add(field.source_block.type);
        var menu_title = document.createElement('div');
        menu_title.classList.add('color-menu-title');
        var title_text = document.createElement('div');
        title_text.innerText = title;
        menu_title.appendChild(title_text);
        menu.appendChild(menu_title);
        var formats = Object.values(I.EColorFormat).filter(function (v) { return !isNaN(Number(v)); });
        formats.forEach(function (format) {
            create_menu_item(source_block, field, format, menu);
        });
        Blink.widget_div.show(field, function () {
            field.focus(false);
        });
        var div = Blink.widget_div.DIV;
        div === null || div === void 0 ? void 0 : div.appendChild(menu);
        field.source_block.workspace.options.dropdown.menu.align = 'center';
        var xy = (0, utils_1.position_dropdown)(menu, field);
        Blink.widget_div.position(xy[0], xy[1]);
    }
    function create_menu_item(source_block, field, format, parent_menu) {
        var menu_item = document.createElement('div');
        menu_item.classList.add('color-menu-item');
        if (source_block.format_ === format) {
            menu_item.classList.add('color-menu-item-selected');
        }
        var color = update_color(source_block);
        var content = create_menu_item_dom(color, format, source_block);
        menu_item.innerHTML = content;
        menu_item.addEventListener('mousedown', function (e) {
            var _a;
            e.stopImmediatePropagation();
            e.preventDefault();
            Blink.widget_div.hide_if_owner(field);
            Blink.tooltip.hide();
            var prev_format = String(source_block.format_);
            (_a = source_block.addMutation) === null || _a === void 0 ? void 0 : _a.call(source_block, format, prev_format);
        });
        parent_menu.appendChild(menu_item);
    }
    function create_menu_item_dom(color, format, source_block) {
        switch (format) {
            case I.EColorFormat.ColorString:
                return "  <div class=\"color-menu-item-content\">\n        <div class=\"color-string\">\n        \u201C" + (0, color_1.rgba_to_hex)(color).toUpperCase() + "\u201D\n        </div>\n      </div>";
            case I.EColorFormat.HSVA: {
                var _a = color_to_hsva(color), h = _a[0], s = _a[1], v = _a[2], a = _a[3];
                return "  <div class=\"color-menu-item-content\">\n        <div class=\"color-hsva\">\n          H\n          <div>" + (get_field_value(source_block, 'H') || h) + "</div>\n          S\n          <div>" + (get_field_value(source_block, 'S') || s) + "</div>\n          V\n          <div>" + (get_field_value(source_block, 'V') || v) + "</div>\n          A\n          <div>" + (get_field_value(source_block, 'A') || a) + "</div>\n        </div>\n      </div>";
            }
            case I.EColorFormat.RGBA: {
                var _b = color_to_rgba(color), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
                return "  <div class=\"color-menu-item-content\">\n        <div class=\"color-rgba\">\n          R\n          <div>" + (get_field_value(source_block, 'R') || r) + "</div>\n          G\n          <div>" + (get_field_value(source_block, 'G') || g) + "</div>\n          B\n          <div>" + (get_field_value(source_block, 'B') || b) + "</div>\n          A\n          <div>" + (get_field_value(source_block, 'A') || a) + "</div>\n        </div>\n      </div>";
            }
            case I.EColorFormat.ColorPalette:
            default:
                return "<div class=\"color-menu-item-content\">\n          <div class=\"color-palette\">\n            <div style=\"background-color: " + color + ";\"></div>\n          </div>\n        </div>";
        }
    }
    function update_color(block) {
        var _a;
        switch (block.format_) {
            case I.EColorFormat.ColorPalette: {
                var field = block.get_field('COLOR_PALETTE');
                if (field) {
                    block.color_ = new color_1.Color(field.get_value());
                }
                return block.color_;
            }
            case I.EColorFormat.ColorString: {
                var field = (_a = block.get_input_target_block('COLOR_STRING')) === null || _a === void 0 ? void 0 : _a.get_field('TEXT');
                if (field) {
                    block.color_ = new color_1.Color(field.get_value());
                }
                return block.color_;
            }
            case I.EColorFormat.HSVA: {
                var h = get_field_value(block, 'H');
                var s = get_field_value(block, 'S');
                var v = get_field_value(block, 'V');
                var a = get_field_value(block, 'A');
                var rgb = (0, color_1.hsv_to_rgb)({
                    h: parseFloat(h || '0') % 360,
                    s: parseFloat(s || '0'),
                    v: parseFloat(v || '0'),
                });
                block.color_.r = Math.round(rgb[0]);
                block.color_.g = Math.round(rgb[1]);
                block.color_.b = Math.round(rgb[2]);
                block.color_.a = parseFloat(a || '100') / 100; // range [0, 1]
                return block.color_;
            }
            case I.EColorFormat.RGBA: {
                var r = get_field_value(block, 'R');
                var g = get_field_value(block, 'G');
                var b = get_field_value(block, 'B');
                var a = get_field_value(block, 'A');
                block.color_.r = Math.round(parseFloat(r || '0'));
                block.color_.g = Math.round(parseFloat(g || '0'));
                block.color_.b = Math.round(parseFloat(b || '0'));
                block.color_.a = parseFloat(a || '100') / 100; // range [0, 1]
                return block.color_;
            }
            default:
                return block.color_;
        }
    }
    function color_to_hsva(color) {
        var hsv = (0, color_1.rgb_to_hsv)(color.r, color.g, color.b);
        var h = hsv.h.toFixed(0);
        var s = hsv.s.toFixed(0);
        var v = hsv.v.toFixed(0);
        var a = (color.a * 100).toFixed(0); // range [0, 100]
        return [h, s, v, a];
    }
    function color_to_rgba(color) {
        var r = color.r.toFixed(0);
        var g = color.g.toFixed(0);
        var b = color.b.toFixed(0);
        var a = (color.a * 100).toFixed(0); // range [0, 100]
        return [r, g, b, a];
    }
}
exports.init_color_blocks = init_color_blocks;
function get_field_value(block, name) {
    var _a, _b, _c, _d, _e;
    return ((_a = block.get_input_target_block(name)) === null || _a === void 0 ? void 0 : _a.get_field_value('NUM')) ||
        ((_e = (_d = (_c = (_b = block.get_input_target_block(name)) === null || _b === void 0 ? void 0 : _b.output_connection) === null || _c === void 0 ? void 0 : _c.target_connection) === null || _d === void 0 ? void 0 : _d.get_shadow_dom()) === null || _e === void 0 ? void 0 : _e.textContent);
}
// 变形使用的常量
var hue_constraints = '0,360,1,false';
var rgb_constraints = '0,255,1,';
var common_constraints = '0,100,1,';
var hue_exceptions = '360';
var hue_number_shadow = function (default_num, constraints, exceptions) {
    return "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"" + constraints + "\" exceptions=\"" + exceptions + "\">" + default_num + "</field></shadow>";
};
