"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var FieldRegistry = /** @class */ (function () {
    function FieldRegistry() {
        this.field_map = {};
    }
    FieldRegistry.prototype.register = function (type, field_class) {
        if (!type) {
            throw new Error("Invalid field type \"" + type + "\"");
        }
        this.field_map[type] = field_class;
    };
    FieldRegistry.prototype.from_json = function (options) {
        var type = options.type;
        if (!type || !this.field_map[type]) {
            throw new Error("Custom field type \"" + type + "\" not found");
        }
        return new (this.field_map[type])(options);
    };
    return FieldRegistry;
}());
var Registry = /** @class */ (function () {
    function Registry() {
        this.field = new FieldRegistry();
    }
    Registry = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Registry);
    return Registry;
}());
exports.Registry = Registry;
