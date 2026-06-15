"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
var Is = /** @class */ (function () {
    function Is() {
        this.userAgent = (navigator && navigator.userAgent || '').toLowerCase();
        this.platform = (navigator && navigator.platform || '').toLowerCase();
        this.comparator = {
            '<': function (a, b) { return a < b; },
            '<=': function (a, b) { return a <= b; },
            '>': function (a, b) { return a > b; },
            '>=': function (a, b) { return a >= b; },
        };
    }
    Is.prototype.compare_version = function (version, range) {
        var str_range = String(range);
        var n = +(str_range.match(/\d+/) || NaN);
        var op = str_range.match(/^[<>]=?|/)[0];
        return this.comparator[op] ?
            this.comparator[op](version, n) :
            (version == n || n !== n);
    };
    /**
     * @param range 11 || '<=11'
     */
    Is.prototype.iphone = function (range) {
        // Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143
        // mozilla/5.0 (iphone; cpu iphone os 8_4 like mac os x) applewebkit/600.1.4 (khtml, like gecko) mobile/12h143
        var match = this.ipad() ?
            null :
            // (?:reg) 非捕获组，提升性能
            // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            // 但似乎可以这么写：this.userAgent.match(/iphone.+?os (\d+)/);
            this.userAgent.match(/iphone(?:.+?os (\d+))?/);
        return match !== null && this.compare_version(Number(match[1] || 1), range);
    };
    /**
     * @param range 11 || '<=11'
     */
    Is.prototype.ipad = function (range) {
        var match = this.userAgent.match(/ipad.+?os (\d+)/);
        return match !== null && this.compare_version(Number(match[1]), range);
    };
    Is.prototype.ios = function () {
        return this.ipad() || this.iphone();
    };
    Is.prototype.android = function (range) {
        // Mozilla/5.0 (Linux; Android 6.0.1; SM919 Build/MXB48T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36
        // mozilla/5.0 (linux; android 6.0.1; sm919 build/mxb48t; wv) applewebkit/537.36 (khtml, like gecko) version/4.0 chrome/62.0.3202.84 mobile safari/537.36
        if (!range) {
            return /android/.test(this.userAgent);
        }
        var match = this.userAgent.match(/android.+?(\d+)/);
        try {
            return match !== null && this.compare_version(Number(match[1]), range);
        }
        catch (err) {
            console.warn('cc android', err);
            return false;
        }
    };
    Is.prototype.ie = function (range) {
        var match = this.userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return match !== null && this.compare_version(Number(match[1]), range);
    };
    Is.prototype.webkit = function () {
        return /webkit\/([\d.]+)/.test(this.userAgent);
    };
    Is.prototype.JavaFX = function () {
        return /JavaFX/i.test(this.userAgent);
    };
    Is.prototype.firefox = function () {
        return /Firefox\/([\d.]+)/.test(this.userAgent);
    };
    Is.prototype.safari = function (range) {
        var match = this.userAgent.match(/version\/(\d+).+?safari/);
        return match !== null && this.compare_version(Number(match[1]), range);
    };
    Is.prototype.android_phone = function () {
        return /android/.test(this.userAgent) && /mobile/.test(this.userAgent);
    };
    Is.prototype.mobile = function () {
        return this.iphone() || this.android_phone();
    };
    Is.prototype.Gecko = function () {
        return /Gecko/i.test(this.userAgent);
    };
    Is.prototype.edge = function (range) {
        var match = this.userAgent.match(/edge\/(\d+)/);
        return match !== null && this.compare_version(Number(match[1]), range);
    };
    Is.prototype.mac = function () {
        return /mac/.test(this.platform);
    };
    return Is;
}());
exports.is = new Is();
