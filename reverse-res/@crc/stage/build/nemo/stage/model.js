var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { injectable, inject } from 'inversify';
import { TYPES as STAGE_TYPES } from '../../core/di/symbols';
import { TYPES } from '../di/symbols';
import { Stage } from '../../core/stage/model';
var NemoStage = /** @class */ (function (_super) {
    __extends(NemoStage, _super);
    function NemoStage(app, events, data_factory, textures_factory, scenes_factory, actors_factory, stage_animation_factory, physics_animation_factory, components_factory) {
        var _this = _super.call(this, app, data_factory, textures_factory, scenes_factory, actors_factory, stage_animation_factory, physics_animation_factory, events) || this;
        _this.events = events;
        _this.components = components_factory(_this.app, _this.data);
        return _this;
    }
    NemoStage.prototype.get_size = function () {
        var _a = this.app.get_app().renderer, width = _a.width, height = _a.height;
        return {
            width: width,
            height: height,
        };
    };
    NemoStage = __decorate([
        injectable(),
        __param(0, inject(STAGE_TYPES.App)),
        __param(1, inject(STAGE_TYPES.Events)),
        __param(2, inject(STAGE_TYPES.Data)),
        __param(3, inject(STAGE_TYPES.Textures)),
        __param(4, inject(STAGE_TYPES.Scenes)),
        __param(5, inject(STAGE_TYPES.Actors)),
        __param(6, inject(STAGE_TYPES.StageAnimation)),
        __param(7, inject(STAGE_TYPES.Physics)),
        __param(8, inject(TYPES.Components)),
        __metadata("design:paramtypes", [Object, Object, Function, Function, Function, Function, Function, Function, Function])
    ], NemoStage);
    return NemoStage;
}(Stage));
export { NemoStage };
//# sourceMappingURL=model.js.map