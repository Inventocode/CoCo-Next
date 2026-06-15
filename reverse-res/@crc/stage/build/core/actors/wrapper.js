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
import { Container } from '../pixi';
import { InternalObjectType } from '../di/interfaces/const';
var ActorWrapper = /** @class */ (function (_super) {
    __extends(ActorWrapper, _super);
    function ActorWrapper(actor, scene) {
        var _this = _super.call(this) || this;
        _this.type = InternalObjectType.ActorWrapper;
        _this.actor = actor;
        _this.scene = scene;
        _this.id = actor.get_id();
        _this.name = actor.get_id();
        _this.addChild(_this.actor);
        _this.setParent(_this.scene.get_actor_container());
        return _this;
    }
    ActorWrapper.prototype.get_actor = function () {
        return this.actor;
    };
    return ActorWrapper;
}(Container));
export { ActorWrapper };
//# sourceMappingURL=wrapper.js.map