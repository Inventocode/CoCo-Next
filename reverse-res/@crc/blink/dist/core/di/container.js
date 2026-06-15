"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy_inject = exports.bind_singleton = exports.get_instance = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var inversify_inject_decorators_1 = (0, tslib_1.__importDefault)(require("inversify-inject-decorators"));
var cont = new inversify_1.Container();
function get_instance() {
    return cont;
}
exports.get_instance = get_instance;
function bind_singleton(name, target) {
    cont.rebind(name).to(target).inSingletonScope();
}
exports.bind_singleton = bind_singleton;
exports.lazy_inject = (0, inversify_inject_decorators_1.default)(cont).lazyInject;
