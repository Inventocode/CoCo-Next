var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Howl, Howler } from 'howler';
import { ex_get_heart } from './blocks/functions';
export { Howler };
var SoundPlayer = (function (_super) {
    __extends(SoundPlayer, _super);
    function SoundPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        return _this;
    }
    SoundPlayer.prototype.set_name = function (name) {
        this.name = name;
    };
    SoundPlayer.prototype.get_name = function () {
        return this.name;
    };
    SoundPlayer.prototype.play_with_event = function (on_end, on_loaderr) {
        if (ex_get_heart &&
            ex_get_heart().get_runtime_data().is_running() === false) {
            return 0;
        }
        var sound_id = _super.prototype.play.call(this);
        setTimeout(function () {
            Howler.ctx.resume().then().catch(function (e) {
                console.log(e);
            });
        }, 0);
        if (on_end != undefined) {
            this.once('end', on_end, sound_id);
        }
        if (on_loaderr != undefined) {
            this.once('loaderror', function () {
                on_loaderr(sound_id, 'state:error');
            }, sound_id);
            _super.prototype.state.call(this) === 'loading' && on_loaderr(sound_id, 'state:loading');
        }
        return sound_id;
    };
    return SoundPlayer;
}(Howl));
export { SoundPlayer };
var sounds = new Map();
var improvised_sounds = new Map();
export function get_sound(id) {
    return sounds.get(id);
}
export function get_improvised_sound(id) {
    return improvised_sounds.get(id);
}
export function foreach_sound(func) {
    sounds.forEach(func);
}
function get_sound_like_obj(audio) {
    return {
        id: audio.id,
        name: audio.name,
        get_name: function () {
            return audio.name;
        },
        unload: function () { },
        url: audio.url,
    };
}
export function load_sound(audio, html5, improvise, is_use_native) {
    if (html5 === void 0) { html5 = false; }
    if (improvise === void 0) { improvise = false; }
    if (is_use_native === void 0) { is_use_native = false; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (is_use_native) {
                return [2, new Promise(function (resolve, reject) {
                        var audio_ = get_sound_like_obj(audio);
                        sounds.set(audio_.id, audio_);
                        resolve(audio_);
                    })];
            }
            return [2, new Promise(function (resolve, reject) {
                    var id;
                    var src;
                    var name;
                    if (typeof audio === 'string') {
                        id = name = src = audio;
                    }
                    else {
                        id = audio.id;
                        name = audio.name;
                        src = audio.url;
                    }
                    var sound = new SoundPlayer({
                        src: [src],
                        format: ['mp3'],
                        html5: html5,
                    });
                    sound.set_name(name);
                    sound.once('load', function () {
                        resolve(sound);
                    });
                    sound.once('loaderror', function (sid, err) {
                        sounds.delete(id) || improvised_sounds.delete(id);
                        reject(err);
                    });
                    if (improvise) {
                        sound.once('end', function (sid) {
                            sound.unload();
                            improvised_sounds.delete(id);
                        });
                        improvised_sounds.set(id, sound);
                    }
                    else {
                        sounds.set(id, sound);
                    }
                })];
        });
    });
}
export function unload_sound(audio_id) {
    var sound = sounds.get(audio_id);
    if (sound != undefined) {
        sound.unload();
    }
    sounds.delete(audio_id);
}
export function update_sound(id, sound) {
    sounds.set(id, sound);
}
export function stop_sound(audio_id, handler) {
    var sound = sounds.get(audio_id)
        || improvised_sounds.get(audio_id);
    if (sound != undefined) {
        sound.stop(handler);
    }
}
export function dispose_all_sounds() {
    sounds.forEach(function (sound_player) {
        sound_player.unload();
    });
    sounds.clear();
}
