"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.inject_comment_filters = exports.inject_extra_filters = exports.FILTER = void 0;
var r = (0, require("../../../1000/93").__importStar)(require("../../497/index"));
exports.FILTER = {
  REPLACEMENT_GLOW: "blocklyReplacementGlowFilter",
  DRAG_SHADOW: "blocklyDragFilter",
  SURROUND_SHADOW: "blocklySurroundShadowFilter",
  SELECTED: "blocklySelectedFilter",
  BOXSHADOW: "blocklyBoxShadowFilter",
  SURROUND_SHADOW_DARK: "blocklySurroundShadowDarkFilter",
  DISABLED_HEAD_ICON: "blocklyDisabledHeadIconFilter",
  FOCUSED: "blocklyFocusedFilter"
};
exports.inject_extra_filters = function (e) {
  var n;
  (n = {})[exports.FILTER.REPLACEMENT_GLOW] = '\n      <filter id="' + exports.FILTER.REPLACEMENT_GLOW + '" height="160%" width="180%" y="-30%" x="-40%">\n        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"></feGaussianBlur>\n        <feComponentTransfer result="outBlur">\n          <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"></feFuncA>\n        </feComponentTransfer>\n        <feFlood flood-color="#FFFFFF" flood-opacity="1" result="outColor"></feFlood>\n        <feComposite in="outColor" in2="outBlur" operator="in" result="outGlow"></feComposite>\n        <feComposite in="SourceGraphic" in2="outGlow" operator="over"></feComposite>\n      </filter>\n    ';
  n[exports.FILTER.DRAG_SHADOW] = '\n      <filter id="' + exports.FILTER.DRAG_SHADOW + '" height="180%" width="160%" y="-40%" x="-30%">\n\n        <feGaussianBlur stdDeviation="1"></feGaussianBlur>\n        <feComponentTransfer result="outBlur">\n          <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"></feFuncA>\n        </feComponentTransfer>\n        <feFlood flood-color="#FFFFFF" flood-opacity="1" result="outColor"></feFlood>\n        <feComposite in="outColor" in2="outBlur" operator="in" result="outGlow"></feComposite>\n\n        <feGaussianBlur in="SourceAlpha" stdDeviation="6"></feGaussianBlur>\n        <feOffset dx="0" dy="2" />\n        <feComponentTransfer result="outShadow" >\n          <feFuncA type="linear" slope="0.4" />\n        </feComponentTransfer>\n\n        <feMerge>\n          <feMergeNode in="outShadow" />\n          <feMergeNode in="outGlow" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n\n      </filter>\n    ';
  n[exports.FILTER.SURROUND_SHADOW] = '\n      <filter id="' + exports.FILTER.SURROUND_SHADOW + '" height="180%" width="160%" y="-40%" x="-30%">\n        <feFlood flood-color="#000" flood-opacity="0.2" result="shadowColor"></feFlood>\n        <feComposite in="shadowColor" in2="SourceAlpha" operator="in" result="floodShape"/>\n        <feGaussianBlur in="floodShape" stdDeviation="6" result="outShadow"></feGaussianBlur>\n        <feOffset dx="0" dy="0" />\n\n        <feMerge>\n          <feMergeNode in="outShadow" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    ';
  n[exports.FILTER.SELECTED] = '\n      <filter id="' + exports.FILTER.SELECTED + '" height="160%" width="180%" y="-30%" x="-40%">\n        <feGaussianBlur stdDeviation="1" />\n        <feComponentTransfer result="outColor">\n          <feFuncR type="table" tableValues="1 1"></feFuncR>\n          <feFuncG type="table" tableValues="0.67 0.67"></feFuncG>\n          <feFuncB type="table" tableValues="0.21 0.21"></feFuncB>\n          <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"></feFuncA>\n        </feComponentTransfer>\n        <feGaussianBlur result="outShadow" in="outColor" stdDeviation="4" />\n        <feComposite in="SourceGraphic" in2="outShadow" operator="over" />\n      </filter>\n      ';
  n[exports.FILTER.BOXSHADOW] = '\n      <filter x="-47.9%" y="-43.8%" width="195.8%" height="195.8%" filterUnits="objectBoundingBox" id="' + exports.FILTER.BOXSHADOW + '">\n        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" result="outGlow"></feColorMatrix>\n        <feComposite in="SourceGraphic" in2="outGlow" operator="over"></feComposite>\n      </filter>\n      ';
  n[exports.FILTER.SURROUND_SHADOW_DARK] = '\n    <filter x="-21.1%" y="-23.1%" width="140.1%" height="142.5%" filterUnits="objectBoundingBox" id="' + exports.FILTER.SURROUND_SHADOW_DARK + '">\n      <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="outShadow"></feColorMatrix>\n      <feComposite in="SourceGraphic" in2="outShadow" operator="over"></feComposite>\n    </filter>\n    ';
  n[exports.FILTER.DISABLED_HEAD_ICON] = '\n      <filter id="' + exports.FILTER.DISABLED_HEAD_ICON + '">\n        <feColorMatrix in="SourceGraphic" type="saturate" values="0" />\n      </filter>\n    ';
  n[exports.FILTER.FOCUSED] = "\n    <filter id=" + exports.FILTER.FOCUSED + ' height="180%" width="160%" y="-40%" x="-30%">\n      <feGaussianBlur stdDeviation="1"></feGaussianBlur>\n      <feComponentTransfer result="outColor">\n        <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"></feFuncA>\n      </feComponentTransfer>\n      <feGaussianBlur result="outShadow" in="outColor" stdDeviation="4"></feGaussianBlur>\n      <feComposite in="SourceGraphic" in2="outShadow" operator="over"></feComposite>\n    </filter>\n    ';
  var i = n;
  var o = Array.prototype.map.call(e.children, function (e) {
    return e.id;
  });
  Object.keys(i).filter(function (e) {
    return o.indexOf(e) < 0;
  }).map(function (e) {
    return r.dom.parse_to_SVG(i[e]);
  }).forEach(function (t) {
    e.appendChild(t);
  });
};
exports.inject_comment_filters = function (e) {
  var t = {
    RED: ["#FF838D", "#F04E39"],
    BLUE: ["#70C3FF", "#3882FF"],
    GREEN: ["#A1FF5C", "#26E32D"],
    YELLOW: ["#FFE06B", "#FFB93A"]
  };
  Object.keys(t).forEach(function (n) {
    if (r.base.is_comment_theme(n)) {
      var i = r.dom.create_svg_element("linearGradient", {
        id: "CommentLinearGradient-" + n,
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "85.4676513%"
      }, e);
      r.dom.create_svg_element("stop", {
        offset: "0%",
        "stop-color": t[n][0]
      }, i);
      r.dom.create_svg_element("stop", {
        offset: "100%",
        "stop-color": t[n][1]
      }, i);
    }
  });
};