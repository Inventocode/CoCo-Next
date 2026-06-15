import { forEach, assign } from 'lodash-es';
import { foreach_sound } from '../sound_player';
function create_icon_config(src) {
    return {
        type: 'field_icon',
        src: src,
        is_head: false,
    };
}
function get_audio_dropdown() {
    var dropdown = [];
    foreach_sound(function (sound, id) {
        dropdown.push([sound.get_name() || id, id]);
    });
    if (dropdown.length < 1) {
        dropdown.push(['?', 'nothing']);
    }
    return dropdown;
}
export function block_config(blink, deps) {
    var icn_sound = '%{BKY_BLOCK_SOUND_ICON}';
    var icn_sensing = '%{BKY_BLOCK_SENSING_ICON}';
    var intl = deps.get_intl();
    var cfg = {
        'midi_wait': {
            type: 'midi_wait',
            message0: blink.Msg['midi_wait'],
            args0: [
                {
                    type: 'input_value',
                    name: 'beats',
                    check: 'Number',
                    align: 'CENTRE',
                },
                create_icon_config(icn_sound),
            ],
            tooltip: '',
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'midi_play_note': {
            type: 'midi_play_note',
            message0: blink.Msg['midi_play_note'],
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'note',
                    options: function () {
                        return [['?', '?']];
                    },
                },
                {
                    type: 'input_value',
                    name: 'beats',
                    check: 'Number',
                    align: 'CENTRE',
                },
                create_icon_config(icn_sound),
            ],
            tooltip: '',
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'play_audio_and_wait': {
            type: 'play_audio_and_wait',
            message0: blink.Msg['play_audio_and_wait'],
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'audio',
                    options: function () {
                        return get_audio_dropdown();
                    },
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'play_audio': {
            type: 'play_audio',
            message0: intl.formatMessage({ id: 'play_audio' }),
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'audio',
                    options: function () {
                        return get_audio_dropdown();
                    },
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
            extensions: ['disable_inside_wrap_loop'],
        },
        'stop_all_audios': {
            type: 'stop_all_audios',
            message0: blink.Msg['stop_all_audios'],
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'audio',
                    options: function () {
                        var audio_array = get_audio_dropdown();
                        if (audio_array.length === 1 && audio_array[0][0] === '?') {
                            audio_array.shift();
                        }
                        audio_array.reverse();
                        audio_array.unshift([blink.Msg['all_sounds'], '__all_sounds']);
                        return audio_array;
                    },
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'play_words_audio': {
            type: 'play_words_audio',
            message0: intl.formatMessage({ id: 'play_words_audio' }),
            args0: [
                {
                    type: 'input_value',
                    name: 'text',
                    check: ['Number', 'String', 'Boolean', 'Array'],
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
            extensions: ['disable_inside_wrap_loop'],
        },
        'play_words_audio_wait': {
            type: 'play_words_audio_wait',
            message0: intl.formatMessage({ id: 'play_words_audio_wait' }),
            args0: [
                {
                    type: 'input_value',
                    name: 'text',
                    check: ['Number', 'String', 'Boolean', 'Array'],
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'self_ask_record': {
            type: 'self_ask_record',
            message0: blink.Msg['self_ask_record'],
            args0: [
                {
                    type: 'input_value',
                    name: 'TEXT',
                    check: ['Number', 'String', 'Boolean'],
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'play_ask_record': {
            type: 'play_ask_record',
            message0: blink.Msg['play_ask_record'],
            args0: [
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'self_ask_listen': {
            type: 'self_ask_listen',
            message0: blink.Msg['self_ask_listen'],
            args0: [
                {
                    type: 'input_value',
                    name: 'text',
                    check: ['Number', 'String', 'Boolean'],
                },
                {
                    type: 'field_dropdown',
                    name: 'lang',
                    options: [
                        [blink.Msg['chinese'], 'zh-hans'],
                        [blink.Msg['english'], 'en'],
                    ],
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            tooltip: '',
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'get_voice_answer': {
            type: 'get_voice_answer',
            message0: blink.Msg['get_voice_answer'],
            args0: [],
            output: 'String',
            tooltip: '',
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'voice_recognition': {
            type: 'voice_recognition',
            message0: blink.Msg['voice_recognition'],
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'lang',
                    options: [
                        [blink.Msg['chinese'], 'zh-hans'],
                        [blink.Msg['english'], 'en'],
                    ],
                },
                create_icon_config(icn_sound),
            ],
            previousStatement: true,
            nextStatement: true,
            tooltip: '',
            colour: '%{BKY_SOUND_HUE}',
            inputsInline: true,
        },
        'enable_voice_detection': {
            type: 'enable_voice_detection',
            message0: blink.Msg['enable_voice_detection'],
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'state',
                    options: [
                        [blink.Msg['open'], 'open'],
                        [blink.Msg['close'], 'close'],
                    ],
                },
                create_icon_config(icn_sensing),
            ],
            previousStatement: true,
            nextStatement: true,
            tooltip: '',
            colour: '%{BKY_SENSING_HUE}',
            inputsInline: true,
        },
        'get_voice_volume': {
            type: 'get_voice_volume',
            message0: blink.Msg['get_voice_volume'],
            args0: [],
            tooltip: '',
            output: 'Number',
            colour: '%{BKY_SENSING_HUE}',
            inputsInline: true,
        },
    };
    if (deps !== undefined && deps.extensions_config) {
        forEach(deps.extensions_config, function (block_extra_config, block_name) {
            if (cfg[block_name]) {
                assign(cfg[block_name], block_extra_config);
            }
        });
    }
    return cfg;
}
