"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logic_value = exports.logic_shadow = exports.number_value = exports.number_shadow = exports.text_value = exports.text_shadow = exports.create_head_icon = exports.i18n = void 0;
var i18n = function (str) { return "%{BKY_" + str + "}"; };
exports.i18n = i18n;
function create_head_icon(src) {
    return {
        type: 'field_icon',
        is_head: true,
        src: src,
        width: 38,
        height: 38,
        alt: '*',
    };
}
exports.create_head_icon = create_head_icon;
var text_shadow = function (text, id) {
    if (text === void 0) { text = ''; }
    if (id === void 0) { id = ''; }
    return "<shadow type=\"text\" id=\"" + id + "\"><field name=\"TEXT\">" + text + "</field></shadow>";
};
exports.text_shadow = text_shadow;
var text_value = function (input_name, text) {
    if (text === void 0) { text = ''; }
    return "<value name=\"" + input_name + "\">" + (0, exports.text_shadow)(text) + "</value>";
};
exports.text_value = text_value;
var number_shadow = function (default_num, constraints) {
    if (default_num === void 0) { default_num = '0'; }
    return (constraints ?
        "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"" + constraints + "\">" + default_num + "</field></shadow>" :
        "<shadow type=\"math_number\"><field name=\"NUM\">" + default_num + "</field></shadow>");
};
exports.number_shadow = number_shadow;
var number_value = function (input_name, default_num, constraints) {
    if (default_num === void 0) { default_num = '0'; }
    return "<value name=\"" + input_name + "\">" + (0, exports.number_shadow)(default_num, constraints) + "</value>";
};
exports.number_value = number_value;
var logic_shadow = function () {
    return "<empty type=\"logic_empty\"></empty>";
};
exports.logic_shadow = logic_shadow;
var logic_value = function (input_name) {
    return "<value name=\"" + input_name + "\">" + (0, exports.logic_shadow)() + "</value>";
};
exports.logic_value = logic_value;
