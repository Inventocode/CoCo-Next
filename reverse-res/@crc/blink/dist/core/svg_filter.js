"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inject_comment_filters = exports.inject_extra_filters = exports.FILTER = void 0;
var tslib_1 = require("tslib");
var U = (0, tslib_1.__importStar)(require("./utils/index"));
exports.FILTER = {
    REPLACEMENT_GLOW: 'blocklyReplacementGlowFilter',
    DRAG_SHADOW: 'blocklyDragFilter',
    SURROUND_SHADOW: 'blocklySurroundShadowFilter',
    SELECTED: 'blocklySelectedFilter',
    BOXSHADOW: 'blocklyBoxShadowFilter',
    SURROUND_SHADOW_DARK: 'blocklySurroundShadowDarkFilter',
    DISABLED_HEAD_ICON: 'blocklyDisabledHeadIconFilter',
    FOCUSED: 'blocklyFocusedFilter', // 积木外围阴影，阴影颜色由积木颜色决定
};
function inject_extra_filters(defs) {
    /*
    <defs>
      ... filters go here ...
    </defs>
    */
    var _a;
    var filters = (_a = {},
        _a[exports.FILTER.REPLACEMENT_GLOW] = "\n      <filter id=\"" + exports.FILTER.REPLACEMENT_GLOW + "\" height=\"160%\" width=\"180%\" y=\"-30%\" x=\"-40%\">\n        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"1.5\"></feGaussianBlur>\n        <feComponentTransfer result=\"outBlur\">\n          <feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA>\n        </feComponentTransfer>\n        <feFlood flood-color=\"#FFFFFF\" flood-opacity=\"1\" result=\"outColor\"></feFlood>\n        <feComposite in=\"outColor\" in2=\"outBlur\" operator=\"in\" result=\"outGlow\"></feComposite>\n        <feComposite in=\"SourceGraphic\" in2=\"outGlow\" operator=\"over\"></feComposite>\n      </filter>\n    ",
        _a[exports.FILTER.DRAG_SHADOW] = "\n      <filter id=\"" + exports.FILTER.DRAG_SHADOW + "\" height=\"180%\" width=\"160%\" y=\"-40%\" x=\"-30%\">\n\n        <feGaussianBlur stdDeviation=\"1\"></feGaussianBlur>\n        <feComponentTransfer result=\"outBlur\">\n          <feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA>\n        </feComponentTransfer>\n        <feFlood flood-color=\"#FFFFFF\" flood-opacity=\"1\" result=\"outColor\"></feFlood>\n        <feComposite in=\"outColor\" in2=\"outBlur\" operator=\"in\" result=\"outGlow\"></feComposite>\n\n        <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"6\"></feGaussianBlur>\n        <feOffset dx=\"0\" dy=\"2\" />\n        <feComponentTransfer result=\"outShadow\" >\n          <feFuncA type=\"linear\" slope=\"0.4\" />\n        </feComponentTransfer>\n\n        <feMerge>\n          <feMergeNode in=\"outShadow\" />\n          <feMergeNode in=\"outGlow\" />\n          <feMergeNode in=\"SourceGraphic\" />\n        </feMerge>\n\n      </filter>\n    ",
        _a[exports.FILTER.SURROUND_SHADOW] = "\n      <filter id=\"" + exports.FILTER.SURROUND_SHADOW + "\" height=\"180%\" width=\"160%\" y=\"-40%\" x=\"-30%\">\n        <feFlood flood-color=\"#000\" flood-opacity=\"0.2\" result=\"shadowColor\"></feFlood>\n        <feComposite in=\"shadowColor\" in2=\"SourceAlpha\" operator=\"in\" result=\"floodShape\"/>\n        <feGaussianBlur in=\"floodShape\" stdDeviation=\"6\" result=\"outShadow\"></feGaussianBlur>\n        <feOffset dx=\"0\" dy=\"0\" />\n\n        <feMerge>\n          <feMergeNode in=\"outShadow\" />\n          <feMergeNode in=\"SourceGraphic\" />\n        </feMerge>\n      </filter>\n    ",
        _a[exports.FILTER.SELECTED] = "\n      <filter id=\"" + exports.FILTER.SELECTED + "\" height=\"160%\" width=\"180%\" y=\"-30%\" x=\"-40%\">\n        <feGaussianBlur stdDeviation=\"1\" />\n        <feComponentTransfer result=\"outColor\">\n          <feFuncR type=\"table\" tableValues=\"1 1\"></feFuncR>\n          <feFuncG type=\"table\" tableValues=\"0.67 0.67\"></feFuncG>\n          <feFuncB type=\"table\" tableValues=\"0.21 0.21\"></feFuncB>\n          <feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA>\n        </feComponentTransfer>\n        <feGaussianBlur result=\"outShadow\" in=\"outColor\" stdDeviation=\"4\" />\n        <feComposite in=\"SourceGraphic\" in2=\"outShadow\" operator=\"over\" />\n      </filter>\n      ",
        _a[exports.FILTER.BOXSHADOW] = "\n      <filter x=\"-47.9%\" y=\"-43.8%\" width=\"195.8%\" height=\"195.8%\" filterUnits=\"objectBoundingBox\" id=\"" + exports.FILTER.BOXSHADOW + "\">\n        <feOffset dx=\"0\" dy=\"1\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n        <feGaussianBlur stdDeviation=\"3\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n        <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0\" type=\"matrix\" in=\"shadowBlurOuter1\" result=\"outGlow\"></feColorMatrix>\n        <feComposite in=\"SourceGraphic\" in2=\"outGlow\" operator=\"over\"></feComposite>\n      </filter>\n      ",
        _a[exports.FILTER.SURROUND_SHADOW_DARK] = "\n    <filter x=\"-21.1%\" y=\"-23.1%\" width=\"140.1%\" height=\"142.5%\" filterUnits=\"objectBoundingBox\" id=\"" + exports.FILTER.SURROUND_SHADOW_DARK + "\">\n      <feOffset dx=\"0\" dy=\"0\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n      <feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n      <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0\" type=\"matrix\" in=\"shadowBlurOuter1\" result=\"outShadow\"></feColorMatrix>\n      <feComposite in=\"SourceGraphic\" in2=\"outShadow\" operator=\"over\"></feComposite>\n    </filter>\n    ",
        _a[exports.FILTER.DISABLED_HEAD_ICON] = "\n      <filter id=\"" + exports.FILTER.DISABLED_HEAD_ICON + "\">\n        <feColorMatrix in=\"SourceGraphic\" type=\"saturate\" values=\"0\" />\n      </filter>\n    ",
        _a[exports.FILTER.FOCUSED] = "\n    <filter id=" + exports.FILTER.FOCUSED + " height=\"180%\" width=\"160%\" y=\"-40%\" x=\"-30%\">\n      <feGaussianBlur stdDeviation=\"1\"></feGaussianBlur>\n      <feComponentTransfer result=\"outColor\">\n        <feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA>\n      </feComponentTransfer>\n      <feGaussianBlur result=\"outShadow\" in=\"outColor\" stdDeviation=\"4\"></feGaussianBlur>\n      <feComposite in=\"SourceGraphic\" in2=\"outShadow\" operator=\"over\"></feComposite>\n    </filter>\n    ",
        _a);
    var existed_filters = Array.prototype.map.call(defs.children, function (filter) { return filter.id; });
    Object.keys(filters)
        .filter(function (id) { return existed_filters.indexOf(id) < 0; })
        .map(function (filter_name) { return U.dom.parse_to_SVG(filters[filter_name]); })
        .forEach(function (filter) {
        defs.appendChild(filter);
    });
}
exports.inject_extra_filters = inject_extra_filters;
/**
 * 向指定的defs对象注入注释所用的filter。
 * @param defs
 */
function inject_comment_filters(defs) {
    //  <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
    //   <stop offset="0%" stop-color="red"/>
    //   <stop offset="100%" stop-color="blue"/>
    // </linearGradient>
    var COMMENT_COLOR_MAP = {
        'RED': ['#FF838D', '#F04E39'],
        'BLUE': ['#70C3FF', '#3882FF'],
        'GREEN': ['#A1FF5C', '#26E32D'],
        'YELLOW': ['#FFE06B', '#FFB93A'],
    };
    Object.keys(COMMENT_COLOR_MAP).forEach(function (key) {
        if (!U.base.is_comment_theme(key)) {
            return;
        }
        var linear_gradient = U.dom.create_svg_element('linearGradient', {
            'id': "CommentLinearGradient-" + key,
            'x1': '50%', 'y1': '0%',
            'x2': '50%', 'y2': '85.4676513%',
        }, defs);
        U.dom.create_svg_element('stop', {
            'offset': '0%',
            'stop-color': COMMENT_COLOR_MAP[key][0],
        }, linear_gradient);
        U.dom.create_svg_element('stop', {
            'offset': '100%',
            'stop-color': COMMENT_COLOR_MAP[key][1],
        }, linear_gradient);
    });
}
exports.inject_comment_filters = inject_comment_filters;
