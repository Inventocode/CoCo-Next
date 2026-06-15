"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var PcgRandom = require("pcg-random");
var PRNGFactoryImpl = /** @class */ (function () {
    function PRNGFactoryImpl() {
    }
    PRNGFactoryImpl.prototype.create = function (prng_seed) {
        if (prng_seed == undefined) {
            return new PcgRandomImpl();
        }
        if (typeof prng_seed === 'number') {
            return new PcgRandomImpl(prng_seed);
        }
        return new PcgRandomImpl(prng_seed.seed_high, prng_seed.seed_low, prng_seed.inc_high, prng_seed.inc_low);
    };
    PRNGFactoryImpl = tslib_1.__decorate([
        inversify_1.injectable()
    ], PRNGFactoryImpl);
    return PRNGFactoryImpl;
}());
exports.PRNGFactoryImpl = PRNGFactoryImpl;
var PcgRandomImpl = /** @class */ (function () {
    function PcgRandomImpl(seed_high, seed_low, inc_high, inc_low) {
        this.pcg_random = new PcgRandom(seed_high, seed_low, inc_high, inc_low);
    }
    PcgRandomImpl.prototype.set_state = function (state) {
        this.pcg_random.setState(state);
    };
    PcgRandomImpl.prototype.get_state = function () {
        return this.pcg_random.getState();
    };
    PcgRandomImpl.prototype.set_seed = function (seed_high, seed_low, inc_high, inc_low) {
        this.pcg_random.setSeed(seed_high, seed_low, inc_high, inc_low);
    };
    PcgRandomImpl.prototype.random_int = function (max) {
        return this.pcg_random.integer(max);
    };
    PcgRandomImpl.prototype.random = function () {
        return this.pcg_random.number();
    };
    return PcgRandomImpl;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJuZ19mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BybmdfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBdUM7QUFFdkMsc0NBQXdDO0FBS3hDO0lBQUE7SUFlQSxDQUFDO0lBZFEsZ0NBQU0sR0FBYixVQUFjLFNBQW1CO1FBQy9CLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtZQUMxQixPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxPQUFPLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLGFBQWEsQ0FDdEIsU0FBUyxDQUFDLFNBQVMsRUFDbkIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsU0FBUyxDQUFDLE9BQU8sQ0FDbEIsQ0FBQztJQUNKLENBQUM7SUFkVSxlQUFlO1FBRDNCLHNCQUFVLEVBQUU7T0FDQSxlQUFlLENBZTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSwwQ0FBZTtBQWlCNUI7SUFFRSx1QkFBWSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ2hGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLEtBQVM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLGlDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLGtDQUFVLEdBQWpCLFVBQWtCLEdBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIn0=