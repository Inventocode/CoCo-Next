"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var r = require("resul-ts");
var _last = require("lodash/last");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../../di_symbols");
var HtmlParserImpl = /** @class */ (function () {
    function HtmlParserImpl(html_parser) {
        this.html_parser = html_parser;
    }
    HtmlParserImpl.prototype.parse = function (xml_string, cb) {
        var handler = new this.html_parser.DomHandler(function (error, dom_list) {
            if (error) {
                return r.error('htmlparser2 compile error', error);
            }
            cb(dom_list);
        });
        var parser = new this.html_parser.Parser(handler);
        parser.write(xml_string);
        parser.end();
    };
    HtmlParserImpl.prototype.for_each_child = function (dom, cb) {
        for (var i = 0; i < dom.children.length; i++) {
            var child = dom.children[i];
            cb(child, i);
        }
    };
    HtmlParserImpl.prototype.first_child = function (dom) {
        return dom.children[0];
    };
    HtmlParserImpl.prototype.last_child = function (dom) {
        return _last(dom.children) || null;
    };
    HtmlParserImpl.prototype.children = function (dom) {
        return dom.children;
    };
    HtmlParserImpl.prototype.parent = function (dom) {
        return dom.parent;
    };
    HtmlParserImpl.prototype.attr = function (dom, attr_name) {
        return dom.attribs[attr_name];
    };
    HtmlParserImpl.prototype.inner_html = function (dom) {
        var _a;
        return ((_a = dom.children[0]) === null || _a === void 0 ? void 0 : _a.data) || '';
    };
    HtmlParserImpl.prototype.tag_name = function (dom) {
        return dom.name;
    };
    HtmlParserImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.HtmlParser)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], HtmlParserImpl);
    return HtmlParserImpl;
}());
exports.HtmlParserImpl = HtmlParserImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcGlsZXIveG1sX2VudGl0eV9jb21waWxlci9odG1sX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0QkFBOEI7QUFDOUIsbUNBQXNDO0FBRXRDLHVDQUErQztBQUMvQywrQ0FBMkM7QUFLM0M7SUFDRSx3QkFDd0MsV0FBc0I7UUFBdEIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7SUFDMUQsQ0FBQztJQUVFLDhCQUFLLEdBQVosVUFBYSxVQUFpQixFQUFFLEVBQWtDO1FBQ2hFLElBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFLLEVBQUUsUUFBeUI7WUFDL0UsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLHVDQUFjLEdBQXJCLFVBQ0ksR0FBa0IsRUFDbEIsRUFBK0M7UUFFakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLG9DQUFXLEdBQWxCLFVBQW1CLEdBQWtCO1FBQ25DLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsR0FBa0I7UUFDbEMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixHQUFrQjtRQUNoQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxHQUFrQjtRQUM5QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVNLDZCQUFJLEdBQVgsVUFBWSxHQUFrQixFQUFFLFNBQWdCO1FBQzlDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsR0FBa0I7O1FBQ2xDLE9BQU8sT0FBQSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxJQUFJLEtBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLEdBQWtCO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBckRVLGNBQWM7UUFEMUIsc0JBQVUsRUFBRTtRQUdOLG1CQUFBLGtCQUFNLENBQUMsb0JBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTs7T0FGcEIsY0FBYyxDQXNEMUI7SUFBRCxxQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHdDQUFjIn0=