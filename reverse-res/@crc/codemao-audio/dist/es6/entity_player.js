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
import { get_sound, load_sound, stop_sound, dispose_all_sounds, get_improvised_sound, } from './sound_player';
var EntityPlayer = (function () {
    function EntityPlayer(id) {
        this.id = id;
        this.active_sound_playings = new Map();
        this.paused_sound_playings = new Map();
    }
    EntityPlayer.create_player = function (id) {
        var player = this.players.get(id);
        if (player != undefined) {
            return player;
        }
        player = new EntityPlayer(id);
        this.players.set(id, player);
        return player;
    };
    EntityPlayer.get_player = function (id) {
        return this.players.get(id) || this.create_player(id);
    };
    EntityPlayer.remove_player = function (id) {
        this.players.delete(id);
    };
    EntityPlayer.stop_all = function () {
        this.players.forEach(function (player) {
            player.stop_entity();
        });
    };
    EntityPlayer.dispose_all = function () {
        dispose_all_sounds();
        this.players.clear();
        this.error_loading_sounds = {};
    };
    EntityPlayer.prototype.play = function (sound_url, on_end, on_loaderr, fallback) {
        if (fallback === void 0) { fallback = false; }
        return __awaiter(this, void 0, void 0, function () {
            var sound, sound_id, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!EntityPlayer.validate(sound_url)) {
                            return [2, undefined];
                        }
                        sound = get_sound(sound_url) || get_improvised_sound(sound_url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!!sound) return [3, 3];
                        return [4, load_sound(sound_url, false, true)];
                    case 2:
                        sound = _a.sent();
                        _a.label = 3;
                    case 3:
                        sound_id = sound.play_with_event(on_end, on_loaderr);
                        this.active_sound_playings.set(sound_id, sound_url);
                        return [2, sound_id];
                    case 4:
                        error_1 = _a.sent();
                        console.warn("Sound <" + sound_url + "> loaderror: " + error_1);
                        if (!EntityPlayer.error_loading_sounds[sound_url]) {
                            EntityPlayer.error_loading_sounds[sound_url] = 1;
                        }
                        else {
                            EntityPlayer.error_loading_sounds[sound_url] += 1;
                        }
                        on_end && on_end(0);
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    EntityPlayer.validate = function (sound_url) {
        if (sound_url === 'nothing' || sound_url === '?') {
            return false;
        }
        if (EntityPlayer.error_loading_sounds[sound_url] &&
            EntityPlayer.error_loading_sounds[sound_url] >=
                EntityPlayer.ERROR_LOADING_RETRY_LIMIT) {
            return false;
        }
        return true;
    };
    EntityPlayer.prototype.stop_entity = function () {
        var _this = this;
        this.active_sound_playings.forEach(function (audio_id, sound_handler) {
            stop_sound(audio_id, sound_handler);
            _this.active_sound_playings.delete(sound_handler);
        });
    };
    EntityPlayer.prototype.stop_audio = function (audio_id) {
        var _this = this;
        this.active_sound_playings.forEach(function (id, sound_handler) {
            if (id === audio_id) {
                stop_sound(id, sound_handler);
                _this.active_sound_playings.delete(sound_handler);
            }
        });
    };
    EntityPlayer.get_all_players = function () {
        return this.players;
    };
    EntityPlayer.prototype.pause = function () {
        var _this = this;
        this.active_sound_playings.forEach(function (sound_player_id, output_sound_id) {
            var sound_player = get_sound(sound_player_id) || get_improvised_sound(sound_player_id);
            if (sound_player === null || sound_player === void 0 ? void 0 : sound_player.playing(output_sound_id)) {
                sound_player.pause(output_sound_id);
                _this.paused_sound_playings.set(output_sound_id, sound_player_id);
            }
        });
    };
    EntityPlayer.prototype.resume = function () {
        var _this = this;
        this.paused_sound_playings.forEach(function (sound_player_id, output_sound_id) {
            if (_this.active_sound_playings.has(output_sound_id)) {
                var sound_player = get_sound(sound_player_id) || get_improvised_sound(sound_player_id);
                (sound_player === null || sound_player === void 0 ? void 0 : sound_player.playing(output_sound_id)) === false && sound_player.play(output_sound_id);
            }
        });
        this.paused_sound_playings.clear();
    };
    EntityPlayer.players = new Map();
    EntityPlayer.error_loading_sounds = {};
    EntityPlayer.ERROR_LOADING_RETRY_LIMIT = 3;
    return EntityPlayer;
}());
export { EntityPlayer };
