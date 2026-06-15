"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_data_blocks = exports.init_tell_blocks = exports.init_basic_blocks = exports.init_extensions = void 0;
var shadows_1 = require("./shadows");
var events_1 = require("./events");
var control_1 = require("./control");
var sensing_1 = require("./sensing");
var math_1 = require("./math");
var logic_1 = require("./logic");
var text_1 = require("./text");
var color_1 = require("./color");
// Extensions
var extensions_1 = require("./extensions");
Object.defineProperty(exports, "init_extensions", { enumerable: true, get: function () { return extensions_1.init_extensions; } });
// Block Configs
function init_basic_blocks(Blink) {
    (0, shadows_1.init_shadows)(Blink);
    (0, events_1.init_events_blocks)(Blink);
    (0, control_1.init_control_blocks)(Blink);
    (0, sensing_1.init_sensing_blocks)(Blink);
    (0, math_1.init_math_blocks)(Blink);
    (0, logic_1.init_logic_blocks)(Blink);
    (0, text_1.init_text_blocks)(Blink);
    (0, color_1.init_color_blocks)(Blink);
}
exports.init_basic_blocks = init_basic_blocks;
var control_2 = require("./control");
Object.defineProperty(exports, "init_tell_blocks", { enumerable: true, get: function () { return control_2.init_tell_blocks; } });
var data_1 = require("./data");
Object.defineProperty(exports, "init_data_blocks", { enumerable: true, get: function () { return data_1.init_data_blocks; } });
