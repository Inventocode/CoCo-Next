"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy_inject = exports.get_instance = exports.BINDING = void 0;
var di_symbols_1 = require("./di_symbols");
Object.defineProperty(exports, "BINDING", { enumerable: true, get: function () { return di_symbols_1.BINDING; } });
var container_1 = require("./container");
Object.defineProperty(exports, "get_instance", { enumerable: true, get: function () { return container_1.get_instance; } });
Object.defineProperty(exports, "lazy_inject", { enumerable: true, get: function () { return container_1.lazy_inject; } });
