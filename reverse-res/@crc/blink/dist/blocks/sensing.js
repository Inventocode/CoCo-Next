"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_sensing_blocks = void 0;
var defs_1 = require("./defs");
function init_sensing_blocks(Blink) {
    var config = [
        {
            type: 'get_time',
            message0: (0, defs_1.i18n)('get_time'),
            args0: [{
                    type: 'field_dropdown',
                    name: 'op',
                    options: [
                        [(0, defs_1.i18n)('year'), 'year'],
                        [(0, defs_1.i18n)('month'), 'month'],
                        [(0, defs_1.i18n)('date'), 'date'],
                        [(0, defs_1.i18n)('week'), 'week'],
                        [(0, defs_1.i18n)('hour'), 'hour'],
                        [(0, defs_1.i18n)('minute'), 'minute'],
                        [(0, defs_1.i18n)('second'), 'second'],
                    ],
                }],
            output: 'Number',
            colour: (0, defs_1.i18n)('GREEN_3'),
            inputsInline: true,
        },
        {
            type: 'get_timer',
            message0: (0, defs_1.i18n)('timer'),
            args0: [],
            output: 'Number',
            colour: (0, defs_1.i18n)('GREEN_3'),
            inputsInline: true,
        },
        {
            type: 'reset_timer',
            message0: (0, defs_1.i18n)('reset_timer'),
            previousStatement: true,
            nextStatement: true,
            colour: (0, defs_1.i18n)('GREEN_3'),
            inputsInline: true,
        },
    ];
    Blink.define_blocks_with_json_array(config);
    Object.assign(Blink.blocks_xml, {
        get_time: '<block type="get_time"/>',
        get_timer: '<block type="get_timer"/>',
        reset_timer: '<block type="reset_timer"/>',
    });
}
exports.init_sensing_blocks = init_sensing_blocks;
