var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from 'inversify';
import { utils } from '../pixi';
import { ErrorMsg } from '../result';
var Events = /** @class */ (function () {
    function Events() {
        this.event_emitter = new utils.EventEmitter();
        this.disabled = 0;
        this.fire_queue = [];
    }
    Events.prototype.disable = function () {
        this.disabled++;
    };
    Events.prototype.enable = function () {
        if (this.disabled <= 0) {
            this.disabled = 0;
            return new ErrorMsg('Do not use enable more than once');
        }
        this.disabled--;
        return;
    };
    Events.prototype.is_enabled = function () {
        return this.disabled === 0;
    };
    Events.prototype.add_listener = function (type, listener) {
        this.event_emitter.addListener(type, listener);
    };
    Events.prototype.remove_listener = function (type, listener) {
        this.event_emitter.removeListener(type, listener);
    };
    Events.prototype.fire = function (type, data) {
        if (!this.is_enabled()) {
            return;
        }
        this.fire_queue.push([type, data]);
        this.release();
    };
    Events.prototype.emit_break_event = function (id) {
        this.event_emitter.emit('break', id);
    };
    Events.prototype.release = function () {
        var event_task = this.fire_queue.shift();
        if (!event_task) {
            return;
        }
        this.emit(event_task[0], event_task[1]);
        this.release();
    };
    Events.prototype.emit = function (type, data) {
        this.event_emitter.emit(type, data);
    };
    Events = __decorate([
        injectable()
    ], Events);
    return Events;
}());
export { Events };
//# sourceMappingURL=model.js.map