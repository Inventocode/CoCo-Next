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
import axios from 'axios';
import { Texture, utils } from '../pixi';
import { ErrorMsg, Result } from '../result';
var SPRITE_SHEET_PREFIX = 'SPRITE_SHEET_';
var SPRITE_SHEET_ERROR_MSG = {
    LOADING: 'Sprite sheet is being loaded.',
    REPEATED: 'Sprite sheet already exists.',
    IMG_LOAD_ERROR: 'Cannot load the image of sprite sheet',
    PARSE_ERROR: 'Cannot parse sprite sheet textures.',
};
/**
 * 舞台资源相关处理
 * 加载资源销毁资源等操作
 * 暴露给外部调用
 */
var Textures = /** @class */ (function () {
    function Textures(data) {
        this.data = data;
        this.loading_urls = new Set();
    }
    Textures.prototype.load_texture = function (texture_id, source) {
        return __awaiter(this, void 0, void 0, function () {
            var texture;
            return __generator(this, function (_a) {
                if (this.data.get_texture(texture_id)) {
                    return [2 /*return*/, new ErrorMsg("Texture " + texture_id + " already exists. Please use new texture id")];
                }
                texture = Texture.from(source);
                Texture.addToCache(texture, texture_id);
                // 可能存在此资源缓存没有被清除的情况
                if (texture.valid) {
                    return [2 /*return*/, new ErrorMsg("This texture " + texture_id + " is already available in pixi")];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        texture.baseTexture.on('loaded', function () {
                            resolve();
                        });
                        texture.baseTexture.on('update', function () {
                            resolve();
                        });
                        texture.baseTexture.on('error', function (e) {
                            texture.destroy(true);
                            reject(e);
                        });
                    })];
            });
        });
    };
    Textures.prototype.get_texture_img_url = function (texture_id) {
        var texture = this.data.get_texture(texture_id);
        if (!texture) {
            return Result.error("Cannot find texture " + texture_id);
        }
        var drawable_source = texture.baseTexture.getDrawableSource && texture.baseTexture.getDrawableSource();
        if (!drawable_source || !(drawable_source instanceof HTMLImageElement)) {
            return Result.error('Cannot get url because source is not ImageElement');
        }
        return Result.success(drawable_source.src);
    };
    Textures.prototype.destroy_texture = function (texture_id) {
        var texture = this.data.get_texture(texture_id);
        if (!texture) {
            return new ErrorMsg("Cannot find texture " + texture_id);
        }
        if (this.data.is_texture_in_sprite_sheet(texture_id)) {
            return new ErrorMsg("Texture " + texture_id + " is part of sprite sheet. Cannot destroy it alone");
        }
        texture.destroy(true); // true设置pixi的BaseTexture也被销毁
        this.data.clear_texture_points_cache(texture_id);
        return;
    };
    Textures.prototype.clear_texture_cache = function (texture_id) {
        var texture = this.data.get_texture(texture_id);
        if (!texture) {
            return new ErrorMsg("Cannot find texture " + texture_id);
        }
        delete utils.TextureCache[texture_id];
        this.data.clear_texture_points_cache(texture_id);
        return;
    };
    Textures.prototype.clear_all_textures_cache = function () {
        this.data.clear_all_textures_points_cache();
    };
    Textures.prototype.destroy_all_textures = function () {
        utils.destroyTextureCache();
        utils.clearTextureCache();
        this.data.clear_all_textures_points_cache();
        this.data.clear_all_sprite_sheet_cache();
    };
    Textures.prototype.load_sprite_sheet = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var may_be_sprite_sheet, delete_loading_url, data, response, err_1, img_url, texture_id, texture, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        may_be_sprite_sheet = this.data.get_sprite_sheet_data(url);
                        /**
                         * 如果已有缓存，直接返回缓存。并在开发模式中打印warning。
                         */
                        if (may_be_sprite_sheet) {
                            new ErrorMsg(SPRITE_SHEET_ERROR_MSG.REPEATED);
                            return [2 /*return*/, may_be_sprite_sheet.texture_ids];
                        }
                        /**
                         * 如果url已经在处理中，则直接返回，不做进一步处理。
                         * 并且在每次return前，从loading_urls中删除该url。
                         */
                        if (this.loading_urls.has(url)) {
                            return [2 /*return*/, new ErrorMsg(SPRITE_SHEET_ERROR_MSG.LOADING)];
                        }
                        this.loading_urls.add(url);
                        delete_loading_url = function () { return _this.loading_urls.delete(url); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios.get(url)];
                    case 2:
                        response = _a.sent();
                        data = response.data;
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        delete_loading_url();
                        return [2 /*return*/, new ErrorMsg(err_1)];
                    case 4:
                        img_url = utils.url.resolve(url, data.meta.image);
                        texture_id = "" + SPRITE_SHEET_PREFIX + url;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.load_texture(texture_id, img_url)];
                    case 6:
                        _a.sent();
                        texture = this.data.get_texture(texture_id);
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _a.sent();
                        delete_loading_url();
                        return [2 /*return*/, new ErrorMsg(SPRITE_SHEET_ERROR_MSG.IMG_LOAD_ERROR)];
                    case 8:
                        if (!texture) {
                            delete_loading_url();
                            return [2 /*return*/, new ErrorMsg(SPRITE_SHEET_ERROR_MSG.IMG_LOAD_ERROR)];
                        }
                        return [4 /*yield*/, this.data.parse_and_cache_sprite_sheet_data(url, texture_id, data)];
                    case 9:
                        /**
                         * 第3阶段，解析数据，生成精灵图的textures
                         */
                        may_be_sprite_sheet = _a.sent();
                        if (!may_be_sprite_sheet) {
                            delete_loading_url();
                            return [2 /*return*/, new ErrorMsg(SPRITE_SHEET_ERROR_MSG.PARSE_ERROR)];
                        }
                        delete_loading_url();
                        return [2 /*return*/, may_be_sprite_sheet.texture_ids];
                }
            });
        });
    };
    Textures.prototype.destroy_sprite_sheet = function (url) {
        var _this = this;
        var sprite_sheet_data = this.data.get_sprite_sheet_data(url);
        if (!sprite_sheet_data) {
            return new ErrorMsg("Cannot find sprite sheet " + url);
        }
        sprite_sheet_data.texture_ids.forEach(function (id) {
            var texture = _this.data.get_texture(id);
            texture && texture.destroy();
        });
        var origin_texture = this.data.get_texture(sprite_sheet_data.origin_texture_id);
        origin_texture && origin_texture.destroy(true);
        this.data.clear_sprite_sheet_cache(url);
        return;
    };
    Textures.prototype.get_sprite_sheet_texture_ids = function (url) {
        var sprite_sheet = this.data.get_sprite_sheet_data(url);
        if (!sprite_sheet) {
            return;
        }
        return sprite_sheet.texture_ids;
    };
    return Textures;
}());
export { Textures };
//# sourceMappingURL=model.js.map