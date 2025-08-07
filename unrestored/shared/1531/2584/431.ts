"use strict";

export { s as b };
var r = function () {
  return {
    height: 0,
    opacity: 0
  };
};
var i = function (e) {
  return {
    height: e.scrollHeight,
    opacity: 1
  };
};
var o = function (e, t) {
  return true === (null === t || undefined === t ? undefined : t.deadline) || "height" === t.propertyName;
};
var a = {
  motionName: "ant-motion-collapse",
  onAppearStart: r,
  onEnterStart: r,
  onAppearActive: i,
  onEnterActive: i,
  onLeaveStart: function (e) {
    return {
      height: e ? e.offsetHeight : 0
    };
  },
  onLeaveActive: r,
  onAppearEnd: o,
  onEnterEnd: o,
  onLeaveEnd: o,
  motionDeadline: 500
};
var s = function (e, t, n) {
  return undefined !== n ? n : "".concat(e, "-").concat(t);
};
export { a };
export default a;