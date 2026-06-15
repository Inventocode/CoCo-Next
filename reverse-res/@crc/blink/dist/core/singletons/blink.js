"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blink = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var shadows_1 = require("../../blocks/shadows");
var zh_hans_1 = require("../../msg/zh-hans");
var inject_1 = require("../inject");
var container_1 = require("../di/container");
var di_1 = require("../di");
var Blink = /** @class */ (function () {
    function Blink() {
        this.Blocks = Object.create(null);
        this.blocks_xml = {};
        this.version = require('../../../package.json').version;
        this.inject = inject_1.Inject.bind(this);
        Object.assign(this.Msg, zh_hans_1.zh_hans);
        (0, shadows_1.init_shadows)(this);
    }
    Object.defineProperty(Blink.prototype, "mainWorkspace", {
        get: function () {
            return this.workspace_db.current;
        },
        set: function (workspace) {
            this.workspace_db.current = workspace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blink.prototype, "di_container", {
        get: function () { return (0, container_1.get_instance)(); },
        enumerable: false,
        configurable: true
    });
    Blink.prototype.define_blocks_with_json_array = function (jsonArray) {
        for (var i = 0; i < jsonArray.length; i++) {
            var elem = jsonArray[i];
            if (!elem) {
                console.warn("Block definition #" + i + " in JSON array not exist. Skipping.");
                continue;
            }
            var typename = elem.type;
            if (!typename) {
                console.warn("Block definition #" + i + " in JSON array is missing a type attribute. Skipping.");
                continue;
            }
            if (this.Blocks[typename]) {
                console.warn("Block definition #" + i + " in JSON array overwrites prior definition of \"" + typename + "\".");
            }
            this.Blocks[typename] = {
                init: (function (json_def) {
                    return function () {
                        this.jsonInit(json_def);
                    };
                }(elem)),
            };
        }
    };
    Blink.prototype.define_block_with_object = function (type, block_obj) {
        if (this.Blocks[type]) {
            console.warn("Block definition overwrites prior definition of \"" + type + "\".");
        }
        this.Blocks[type] = block_obj;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.context_menu)
    ], Blink.prototype, "context_menu", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Blink.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.extensions)
    ], Blink.prototype, "extensions", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Msg)
    ], Blink.prototype, "Msg", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.registry)
    ], Blink.prototype, "registry", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], Blink.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], Blink.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.tooltip)
    ], Blink.prototype, "tooltip", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], Blink.prototype, "widget_div", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], Blink.prototype, "workspace_db", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], Blink.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.json)
    ], Blink.prototype, "json", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Blink.prototype, "utils", void 0);
    Blink = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Blink);
    return Blink;
}());
exports.Blink = Blink;
