import { Point } from '../pixi';
var ActorHitArea = /** @class */ (function () {
    function ActorHitArea(actor, fn) {
        this.actor = actor;
        this.fn = fn;
    }
    ActorHitArea.prototype.contains = function (x, y) {
        var global_pos = this.actor.toGlobal(new Point(x, y));
        if (!this.actor.containsPoint(new Point(global_pos.x, global_pos.y))) {
            return false;
        }
        return this.fn(global_pos);
    };
    return ActorHitArea;
}());
export { ActorHitArea };
//# sourceMappingURL=hitarea.js.map