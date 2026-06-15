"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_valid_number = exports.lerp = exports.to_radians = exports.clamp = exports.gen_uid = exports.contains = exports.Rect = exports.Size = void 0;
/**
 * Creates an instance of Size.
 */
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());
exports.Size = Size;
/**
 * Creates an instance of Rect.
 */
var Rect = /** @class */ (function () {
    function Rect(x, y, w, h) {
        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }
    /**
     * Tests whether this rectangle entirely contains another rectangle or
     * coordinate.
     *
     * @param {vec2} another he rectangle or coordinate to test for containment.
     * @returns Whether this rectangle contains given rectangle or coordinate.
     */
    Rect.prototype.contains = function (another) {
        return another[0] >= this.left &&
            another[0] <= this.left + this.width &&
            another[1] >= this.top &&
            another[1] <= this.top + this.height;
    };
    return Rect;
}());
exports.Rect = Rect;
/**
 * Function to check if rect contains the point.
 *
 * @export
 * @param {ClientRect} rect
 * @param {vec2} point
 * @returns If rect contains the point.
 */
function contains(rect, point) {
    return (rect.left < point[0]) && (rect.right > point[0])
        && (rect.top < point[1]) && (rect.bottom > point[1]);
}
exports.contains = contains;
/**
 * Generate a unique ID.  This should be globally unique.
 * 87 characters ^ 20 length > 128 bits (better than a UUID).
 *
 * @export
 * @returns A globally unique ID string.
 */
function gen_uid() {
    var length = 20;
    var soup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var soup_length = soup.length;
    var id = [];
    for (var i = 0; i < length; i++) {
        id[i] = soup.charAt(Math.random() * soup_length);
    }
    return id.join('');
}
exports.gen_uid = gen_uid;
/**
 * Takes a number and clamps it to within the provided bounds.
 *
 * @export
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @returns The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.clamp = clamp;
/**
 * Converts degrees to radians.
 *
 * @param {number} angleDegrees Angle in degrees.
 * @returns Angle in radians.
 */
function to_radians(angleDegrees) {
    return angleDegrees * Math.PI / 180;
}
exports.to_radians = to_radians;
/**
 * Performs linear interpolation between values a and b. Returns the value
 * between a and b proportional to x (when x is between 0 and 1. When x is
 * outside this range, the return value is a linear extrapolation).
 *
 * @param {number} a A number.
 * @param {number} b A number.
 * @param {number} x The proportion between a and b.
 * @returns The interpolated value between a and b.
 */
function lerp(a, b, x) {
    return a + x * (b - a);
}
exports.lerp = lerp;
/**
 * Check whether a string is a valid number **without change of characters inside it**.
 * e.g. '1.2' is a valid, but '1.2.2' is not
 * Note: '+1.2', 'Infinity', '4e55' and '.2' are valid.
 * @param {string} text A string.
 * @returns {Boolean} A boolean indicates whether it is valid
 */
function is_valid_number(text) {
    return /^[+-]?Infinity$/.test(text) // Infinity
        || /^[+-]?\d*\.?\d+(e[+-]?\d+)?$/.test(text); // 格式正确的数字或科学记数法
}
exports.is_valid_number = is_valid_number;
