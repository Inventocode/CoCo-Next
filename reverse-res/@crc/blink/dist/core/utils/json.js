"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse_visibility = exports.parse_constraints = void 0;
var interfaces_1 = require("../interfaces");
/**
 * Parse field constraints from string.
 * @param constraints The string to parse.
 */
function parse_constraints(constraints) {
    var constraints_arr = constraints.split(',');
    var min = parseFloat(constraints_arr[0]);
    var max = parseFloat(constraints_arr[1]);
    var precision = parseFloat(constraints_arr[2]);
    var mod = constraints_arr[3] === 'true' ? true : null;
    return {
        min: isNaN(min) ? -Infinity : min,
        max: isNaN(max) ? Infinity : max,
        precision: isNaN(precision) ? 0 : precision,
        mod: mod,
    };
}
exports.parse_constraints = parse_constraints;
/**
 * Parse block visibility from string.
 * @param visibility The string to parse.
 */
function parse_visibility(visibility) {
    var visibility_;
    switch (visibility) {
        case 'visible':
            visibility_ = interfaces_1.BlockVisibility.VISIBLE;
            break;
        case 'hidden':
            visibility_ = interfaces_1.BlockVisibility.HIDDEN;
            break;
        case 'translucent':
            visibility_ = interfaces_1.BlockVisibility.TRANSLUCENT;
            break;
        default:
            return undefined;
    }
    return visibility_;
}
exports.parse_visibility = parse_visibility;
