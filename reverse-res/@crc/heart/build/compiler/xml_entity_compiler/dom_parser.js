"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../../di_symbols");
var DOMParserImpl = /** @class */ (function () {
    function DOMParserImpl(dom_parser) {
        this.dom_parser = dom_parser;
    }
    DOMParserImpl.prototype.parse = function (xml_string, cb) {
        var dom = this.dom_parser.parseFromString("<kitten>" + xml_string + "</kitten>", 'text/xml').firstChild;
        cb(dom.children);
    };
    DOMParserImpl.prototype.for_each_child = function (dom, cb) {
        for (var i = 0; i < dom.children.length; i++) {
            var child = dom.children[i];
            cb(child, i);
        }
    };
    DOMParserImpl.prototype.first_child = function (dom) {
        return dom.firstChild;
    };
    DOMParserImpl.prototype.last_child = function (dom) {
        return dom.lastChild;
    };
    DOMParserImpl.prototype.children = function (dom) {
        return dom.children;
    };
    DOMParserImpl.prototype.parent = function (dom) {
        return dom.parentNode;
    };
    DOMParserImpl.prototype.attr = function (dom, attr_name) {
        return dom.getAttribute(attr_name);
    };
    DOMParserImpl.prototype.inner_html = function (dom) {
        return dom.innerHTML;
    };
    DOMParserImpl.prototype.tag_name = function (dom) {
        return dom.tagName;
    };
    DOMParserImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.DOMParser)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DOMParserImpl);
    return DOMParserImpl;
}());
exports.DOMParserImpl = DOMParserImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci94bWxfZW50aXR5X2NvbXBpbGVyL2RvbV9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQStDO0FBQy9DLCtDQUEyQztBQUszQztJQUNFLHVCQUN1QyxVQUFvQjtRQUFwQixlQUFVLEdBQVYsVUFBVSxDQUFVO0lBQ3ZELENBQUM7SUFFRSw2QkFBSyxHQUFaLFVBQWEsVUFBaUIsRUFBRSxFQUEwQjtRQUN4RCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FDekMsYUFBVyxVQUFVLGNBQVcsRUFDaEMsVUFBVSxDQUNYLENBQUMsVUFBb0IsQ0FBQztRQUN2QixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxzQ0FBYyxHQUFyQixVQUNJLEdBQVUsRUFDVixFQUF1QztRQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsR0FBVTtRQUMzQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFVLEdBQWpCLFVBQWtCLEdBQVU7UUFDMUIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLEdBQVU7UUFDeEIsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsR0FBVTtRQUN0QixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxHQUFVLEVBQUUsU0FBZ0I7UUFDdEMsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixHQUFVO1FBQzFCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixHQUFVO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBakRVLGFBQWE7UUFEekIsc0JBQVUsRUFBRTtRQUdOLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7T0FGbkIsYUFBYSxDQWtEekI7SUFBRCxvQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHNDQUFhIn0=