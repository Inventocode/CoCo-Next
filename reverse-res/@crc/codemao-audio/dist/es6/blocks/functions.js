var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { assign, forEach } from 'lodash-es';
import { get_intl } from '../i18n';
import { EntityPlayer } from '../entity_player';
import { speech_synthesis } from '../speech_synthesis';
var midi_player = {};
export var ex_get_heart;
function get_midi_fns(get_heart) {
    var runtime_manager = get_heart().get_runtime_manager();
    return {
        midi_wait: function midi_wait(args, rbid, entity_id) {
            var duration = midi_player.beats_to_duration(args.beats);
            runtime_manager.thread_wait(entity_id, rbid, duration * 1000);
        },
        midi_play_note: function midi_play_note(args, rbid, entity_id) {
            var note_id = parseInt(args.note);
            var beats = args.beats;
            var duration = midi_player.beats_to_duration(beats);
            midi_player.play(note_id, beats);
            runtime_manager.thread_wait(entity_id, rbid, duration * 1000);
        },
    };
}
export function get_domain_functions(get_heart, domain_functions_override) {
    var VOICE_VOLUME_ID = '__voice__volume__';
    var runtime_manager = get_heart().get_runtime_manager();
    var runtime_data = get_heart().get_runtime_data();
    ex_get_heart = get_heart;
    var audio_locks = {};
    var fns = {
        stop_all_audios: function stop_all_audios(args, rbid, entity_id) {
            if (!args.audio || args.audio === '__all_sounds') {
                EntityPlayer.stop_all();
                forEach(audio_locks, function (lock, sound_id) {
                    lock.handle.stop();
                });
                audio_locks = {};
            }
            else {
                var players = EntityPlayer.get_all_players();
                players.forEach(function (player, key) {
                    player.stop_audio(args.audio);
                });
                forEach(audio_locks, function (lock, sound_id) {
                    if (lock.audio === args.audio) {
                        lock.handle.stop();
                        delete (audio_locks[sound_id]);
                    }
                });
            }
        },
        play_audio_and_wait: function play_audio_and_wait(args, rbid, entity_id, internals) {
            return __awaiter(this, void 0, void 0, function () {
                var player, sound_handler, lock_handler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            player = EntityPlayer.get_player(entity_id);
                            return [4, player.play(args.audio, function (e) { return release_audio_lock(e, audio_locks); }, function (e) {
                                    console.error(e);
                                    post_audio_loading_error(args, rbid, entity_id);
                                    release_audio_lock(e, audio_locks);
                                }, !!args.improvise)
                                    .catch(function (err) {
                                    throw new Error(err);
                                })];
                        case 1:
                            sound_handler = _a.sent();
                            if (sound_handler === undefined) {
                                return [2];
                            }
                            lock_handler = runtime_manager.get_thread_lock(entity_id, rbid);
                            audio_locks[sound_handler] = { handle: lock_handler, audio: args.audio };
                            return [2];
                    }
                });
            });
        },
        play_audio: function play_audio(args, rbid, entity_id) {
            var player = EntityPlayer.get_player(entity_id);
            player.play(args.audio, undefined, function (e) {
                post_audio_loading_error(args, rbid, entity_id);
                console.error(e);
            }, !!args.improvise)
                .catch(function (err) { throw new Error(err); });
        },
        play_words_audio: function play_words_audio(args, rbid, entity_id, internals) {
            var text = args.text;
            if (Array.isArray(text)) {
                text = text.map(function (item) {
                    if (Array.isArray(item)) {
                        return item.map(function (i) { return Array.isArray(i) ? '' : i; });
                    }
                    return item;
                });
            }
            speech_synthesis.speak(text, entity_id)
                .catch(function (err) { throw new Error(err); });
        },
        play_words_audio_wait: function play_words_audio_wait(args, rbid, entity_id, internals) {
            return __awaiter(this, void 0, void 0, function () {
                var lock_handler, release_lock, text, sound_handler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lock_handler = runtime_manager.get_thread_lock(entity_id, rbid);
                            release_lock = function (e) {
                                if (e != undefined && e !== 0) {
                                    release_audio_lock(e, audio_locks);
                                }
                                else {
                                    lock_handler.stop();
                                }
                            };
                            text = args.text;
                            if (Array.isArray(text)) {
                                text = text.map(function (item) {
                                    if (Array.isArray(item)) {
                                        return item.map(function (i) { return Array.isArray(i) ? '' : i; });
                                    }
                                    return item;
                                });
                            }
                            return [4, speech_synthesis.speak(text, entity_id, release_lock, release_lock)
                                    .catch(release_lock)];
                        case 1:
                            sound_handler = _a.sent();
                            if (sound_handler != undefined) {
                                audio_locks[sound_handler] = { handle: lock_handler, audio: '' };
                            }
                            return [2];
                    }
                });
            });
        },
        enable_voice_detection: function enable_voice_detection(args, rbid, entity_id) {
            if (args.state === 'open') {
            }
            else if (args.state === 'close') {
            }
        },
        get_voice_volume: function get_voice_volume(args, rbid, entity_id) {
            return runtime_data.get_arbitrary_data(VOICE_VOLUME_ID) || 0;
        },
    };
    if (domain_functions_override) {
        assign(fns, domain_functions_override(get_heart));
    }
    return fns;
}
function release_audio_lock(lock_id, audio_locks) {
    if (audio_locks[lock_id]) {
        audio_locks[lock_id].handle.stop();
        delete (audio_locks[lock_id]);
    }
}
function post_audio_loading_error(args, rbid, entity_id) {
    window.postMessage(JSON.stringify({
        type: 'AUDIO_LOADING_ERROR',
        payload: {
            args: args,
            rbid: rbid,
            entity_id: entity_id,
        },
    }), '*');
}
export function get_intl_fn(deps) {
    if ((deps === null || deps === void 0 ? void 0 : deps.get_intl) && typeof deps.get_intl === 'function') {
        return deps.get_intl;
    }
    return get_intl;
}
