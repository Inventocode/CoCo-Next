"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
// Only pure functions with no state allowed in this file.
var PredicatesImpl = /** @class */ (function () {
    function PredicatesImpl() {
    }
    PredicatesImpl.prototype.uncompiled_XML_entity = function (e) {
        return !!e.blocksXML;
    };
    PredicatesImpl.prototype.uncompiled_JSON_entity = function (e) {
        return !!e.blocksJSON;
    };
    PredicatesImpl = tslib_1.__decorate([
        inversify_1.injectable()
    ], PredicatesImpl);
    return PredicatesImpl;
}());
exports.PredicatesImpl = PredicatesImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVkaWNhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1QztBQUt2QywwREFBMEQ7QUFHMUQ7SUFBQTtJQVNBLENBQUM7SUFSUSw4Q0FBcUIsR0FBNUIsVUFBNkIsQ0FBa0I7UUFDN0MsT0FBTyxDQUFDLENBQU8sQ0FBRSxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRU0sK0NBQXNCLEdBQTdCLFVBQThCLENBQWtCO1FBQzlDLE9BQU8sQ0FBQyxDQUFPLENBQUUsQ0FBQyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQVBVLGNBQWM7UUFEMUIsc0JBQVUsRUFBRTtPQUNBLGNBQWMsQ0FTMUI7SUFBRCxxQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHdDQUFjIn0=