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
import { cfg } from './config';
import { EntityPlayer } from './entity_player';
var SpeechSynthesisManager = (function () {
    function SpeechSynthesisManager() {
        this.tts_token = '';
        this.api = cfg().api;
        this.api_tts = cfg().api_tts;
        this.api_translate = cfg().api_translate;
    }
    SpeechSynthesisManager.prototype.init = function (api, api_tts, api_translate) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.api = api || this.api;
                        this.api_tts = api_tts || this.api_tts;
                        this.api_translate = api_translate || this.api_translate;
                        _a = this;
                        return [4, this.fetch_token()];
                    case 1:
                        _a.tts_token = _b.sent();
                        return [2];
                }
            });
        });
    };
    SpeechSynthesisManager.prototype.fetch_token = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tts_token_url;
            var _this = this;
            return __generator(this, function (_a) {
                tts_token_url = this.api + "/api/work/tts/token";
                return [2, fetch(tts_token_url, {
                        credentials: 'include',
                        mode: 'cors',
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    switch (response.status) {
                                        case 200:
                                        case 0:
                                            break;
                                        default:
                                            console.error('Error happend when fetch tts token.');
                                            return [2, undefined];
                                    }
                                    return [4, response.json()];
                                case 1: return [2, (_a.sent()).data.token];
                            }
                        });
                    }); }).catch(function (error) {
                        throw error;
                    })];
            });
        });
    };
    SpeechSynthesisManager.prototype.set_api = function (api) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.api = api || this.api;
                        _a = this;
                        return [4, this.fetch_token()];
                    case 1:
                        _a.tts_token = _b.sent();
                        return [2];
                }
            });
        });
    };
    SpeechSynthesisManager.prototype.get_token = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.tts_token != undefined) {
                            return [2, this.tts_token];
                        }
                        _a = this;
                        return [4, this.fetch_token()];
                    case 1: return [2, _a.tts_token = _b.sent()];
                }
            });
        });
    };
    SpeechSynthesisManager.prototype.detect_language = function (text) {
        var reg = /[^\u0000-\u00FF]/g;
        return reg.test(text) ? 'zh-CN' : 'en-UK';
    };
    SpeechSynthesisManager.prototype.speak = function (text, entity_id, on_end, on_err) {
        return __awaiter(this, void 0, void 0, function () {
            var lang, token, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lang = this.detect_language(text);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.get_token()];
                    case 2:
                        token = _a.sent();
                        if (token == undefined || entity_id == undefined) {
                            this.local_speech_synthesis(text, lang, on_end, on_err);
                        }
                        else {
                            return [2, this.online_speech_synthesis(text, lang, token, entity_id, on_end, on_err)];
                        }
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.local_speech_synthesis(text, lang, on_end, on_err);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    SpeechSynthesisManager.prototype.local_speech_synthesis = function (text, language, on_end, on_err) {
        if (language === void 0) { language = 'zh-CN'; }
        if (window.speechSynthesis == undefined) {
            console.error('Speech synthesis not supported.');
            return;
        }
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = 10;
        utterance.rate = 0.8;
        utterance.lang = language;
        utterance.pitch = 1;
        if (on_end != undefined) {
            utterance.onend = function () {
                on_end();
            };
        }
        if (on_err != undefined) {
            utterance.onerror = function () {
                on_err();
            };
        }
        window.speechSynthesis.speak(utterance);
    };
    SpeechSynthesisManager.prototype.online_speech_synthesis = function (text, language, token, entity_id, on_end, on_err) {
        return __awaiter(this, void 0, void 0, function () {
            var audio, player;
            return __generator(this, function (_a) {
                audio = this.api_tts +
                    '/text2audio?tex=' + text +
                    '&lan=zh&cuid=' + (new Date()).valueOf() +
                    '&ctp=1&vol=9&tok=' + token;
                player = EntityPlayer.get_player(entity_id);
                return [2, player.play(audio, on_end, on_err, true)
                        .catch(function (e) { throw new Error(e); })];
            });
        });
    };
    SpeechSynthesisManager.unique_id = 0;
    return SpeechSynthesisManager;
}());
export { SpeechSynthesisManager };
export var speech_synthesis = new SpeechSynthesisManager();
