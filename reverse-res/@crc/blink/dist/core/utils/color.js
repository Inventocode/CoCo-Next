"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsva_to_rgba = exports.rgba_to_hex = exports.hsv_to_rgb = exports.rgb_to_hsv = exports.darken = exports.Color = void 0;
var maths_1 = require("./maths");
var Color = /** @class */ (function () {
    /**
     * Blink内部使用的Color对象。
     * @param src rgb(a) 或 hex(a) 格式的颜色语句，或一个含有r, g, b, a值的对象。
     * @param or 当src不是一个合法颜色语句时，用以替代的颜色。
     * @param replace_msg 发生替代时，打印到控制台的信息。
     */
    function Color(src, or, replace_msg) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
        if (!this.set(src) && or) {
            console.warn(replace_msg || "Cannot init Color with " + src + ", using " + or + ". ");
            this.set(or);
        }
    }
    Color.prototype.set = function (src) {
        if (typeof src === 'undefined') {
            return false;
        }
        if (typeof src === 'string') {
            return this._set(src);
        }
        this.copy(src);
        return true;
    };
    Color.prototype._set = function (str) {
        str = String(str).toLowerCase().trim();
        var matcher = str.match(/^(?:rgb|rgba)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*(\d*\.?\d+)\s*)?\)$/);
        if (matcher) {
            var r = Math.round(Number(matcher[1]));
            var g = Math.round(Number(matcher[2]));
            var b = Math.round(Number(matcher[3]));
            var a = matcher[5] === undefined ? 1 : Number(matcher[5]);
            if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || a < 0 || a > 1) {
                return false;
            }
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
            return true;
        }
        var hexa = this.normalize_hexa(str);
        if (hexa) {
            var r = parseInt(hexa.substr(1, 2), 16);
            var g = parseInt(hexa.substr(3, 2), 16);
            var b = parseInt(hexa.substr(5, 2), 16);
            var a = parseInt(hexa.substr(7, 2), 16) / 255;
            if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || a < 0 || a > 1) {
                return false;
            }
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
            return true;
        }
        return false;
    };
    Color.prototype.normalize_hexa = function (hex_color) {
        hex_color = hex_color.substring(0, 2) == '0x' ? "#" + hex_color.substring(2) : hex_color;
        if (!/^#(?:[0-9a-f]{3}){1,2}$/i.test(hex_color) && !/^#(?:[0-9a-f]{4}){1,2}$/i.test(hex_color)) {
            return;
        }
        if (hex_color.length === 5) {
            hex_color = hex_color.replace(/#(.)(.)(.)(.)/, '#$1$1$2$2$3$3$4$4');
        }
        if (hex_color.length === 4) { // of the form #RGB
            hex_color = hex_color.replace(/#(.)(.)(.)/, '#$1$1$2$2$3$3ff');
        }
        if (hex_color.length === 7) {
            hex_color += 'ff';
        }
        return hex_color.toLowerCase();
    };
    Color.prototype.toString = function () {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    };
    Color.prototype.clone = function () {
        var new_color = new Color();
        new_color.r = this.r;
        new_color.g = this.g;
        new_color.b = this.b;
        new_color.a = this.a;
        return new_color;
    };
    Color.prototype.copy = function (source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        this.a = source.a;
        return this;
    };
    Color.prototype.blend = function (color) {
        var target_a = 1 - (1 - this.a) * (1 - color.a);
        this.r = Math.round((color.r * color.a / target_a) + (this.r * this.a * (1 - color.a) / target_a));
        this.g = Math.round((color.g * color.a / target_a) + (this.g * this.a * (1 - color.a) / target_a));
        this.b = Math.round((color.b * color.a / target_a) + (this.b * this.a * (1 - color.a) / target_a));
        this.a = target_a;
        return this;
    };
    Color.prototype.equals = function (color) {
        if (!color || typeof color === 'string') {
            color = new Color(color);
        }
        return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
    };
    return Color;
}());
exports.Color = Color;
var black = new Color('#000');
/**
 * Adds black to the specified color, darkening it
 *
 * @param rgb rgb representation of the color.
 * @param factor Number in the range [0, 1]. 0 will do nothing, while
 * 1 will return black. If less than 0, factor will be set to 0. If greater
 * than 1, factor will be set to 1.
 * @returns Combined rgb color.
 */
function darken(rgb, factor, out) {
    black.a = (0, maths_1.clamp)(factor, 0, 1);
    return ((out === null || out === void 0 ? void 0 : out.copy(rgb)) || rgb.clone()).blend(black);
}
exports.darken = darken;
/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h in the set [0, 360], rounded to the nearest integer.
 * s, v in the set [0, 100], rounded to the nearest tenth.
 *
 * @param red     The red color value
 * @param green   The green color value
 * @param blue    The blue color value
 */
function rgb_to_hsv(red, green, blue) {
    var r = red / 255;
    var g = green / 255;
    var b = blue / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    var v = max;
    var h = max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    var hsv = {
        h: Math.round(h * 360),
        s: Math.round(s * 1000 / 10),
        v: Math.round(v * 1000 / 10),
    };
    return hsv;
}
exports.rgb_to_hsv = rgb_to_hsv;
/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h is contained in the set [0, 360] and s, v are contained in the set [0, 100].
 * returns r, g, and b in the set [0, 255], rounded to the nearest integer.
 *
 * @param h   Hue value.
 * @param s   Saturation value.
 * @param v   Brightness.
 */
function hsv_to_rgb(hsv) {
    var h = hsv.h / 360;
    var s = hsv.s / 100;
    var v = hsv.v / 100;
    var r = 0;
    var g = 0;
    var b = 0;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
exports.hsv_to_rgb = hsv_to_rgb;
function rgba_to_hex(rgba) {
    var hex = (rgba.r | 1 << 8).toString(16).slice(1) +
        (rgba.g | 1 << 8).toString(16).slice(1) +
        (rgba.b | 1 << 8).toString(16).slice(1);
    if (rgba.a === 1) {
        return "#" + hex;
    }
    // multiply before convert to HEX
    var a = ((rgba.a * 255) | 1 << 8).toString(16).slice(1);
    hex = hex + a;
    return "#" + hex;
}
exports.rgba_to_hex = rgba_to_hex;
function hsva_to_rgba(hsva) {
    var h = hsva.h / 360;
    var s = hsva.s / 100;
    var v = hsva.v / 100;
    var r = 0;
    var g = 0;
    var b = 0;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255), a: hsva.a };
}
exports.hsva_to_rgba = hsva_to_rgba;
