"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var H = require("../di_interfaces");
var ClockImpl = /** @class */ (function () {
    function ClockImpl(u) {
        this.u = u;
        // TODO Error out if changing determinism config at runtime
        // We do not support changing deterministic and non-deterministic
        // execution mode at runtime.
        var d = this.u.config.get().deterministic;
        if (d !== undefined) {
            this.ms_per_update = d.seconds_per_update * 1000;
        }
    }
    ClockImpl.prototype._wall_clock_now = function () {
        if (typeof performance !== 'undefined' && performance.now !== undefined) {
            return performance.now();
        }
        return new Date().getTime();
    };
    ClockImpl.prototype.wall_clock_now = function () {
        if (this.ms_per_update !== undefined) {
            // We rarely actually throw and break in Heart, but I think it's
            // reasonable not do so here because:
            // * Hunting down determinism bugs is always super hard.
            // * Any fake value we return will cause or hide bugs.
            throw this.u.ohno.system.looked_at_wall_clock_in_deterministic_mode();
        }
        return this._wall_clock_now();
    };
    ClockImpl.prototype.clear = function () {
        this.current_time = undefined;
    };
    ClockImpl.prototype.update = function () {
        if (this.current_time === undefined) {
            this.current_time = this._wall_clock_now();
            return;
        }
        if (this.ms_per_update !== undefined) {
            this.current_time += this.ms_per_update;
        }
        else {
            this.current_time = this._wall_clock_now();
        }
    };
    ClockImpl.prototype.now = function () {
        if (this.current_time === undefined) {
            this.current_time = this._wall_clock_now();
        }
        return this.current_time;
    };
    ClockImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ClockImpl);
    return ClockImpl;
}());
exports.ClockImpl = ClockImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnVudGltZS9jbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBK0M7QUFFL0MsNENBQXdDO0FBQ3hDLG9DQUFzQztBQU90QztJQUtFLG1CQUNrQyxDQUFRO1FBQVIsTUFBQyxHQUFELENBQUMsQ0FBTztRQUV4QywyREFBMkQ7UUFDM0QsaUVBQWlFO1FBQ2pFLDZCQUE2QjtRQUM3QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFTyxtQ0FBZSxHQUF2QjtRQUNFLElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3ZFLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxrQ0FBYyxHQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDcEMsZ0VBQWdFO1lBQ2hFLHFDQUFxQztZQUNyQyx3REFBd0Q7WUFDeEQsc0RBQXNEO1lBQ3RELE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBDQUEwQyxFQUFFLENBQUM7U0FDdkU7UUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0seUJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN6QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRU0sdUJBQUcsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUM7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQXhEVSxTQUFTO1FBRHJCLHNCQUFVLEVBQUU7UUFPTixtQkFBQSxrQkFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7O09BTmQsU0FBUyxDQTBEckI7SUFBRCxnQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDhCQUFTIn0=