"use strict";

export { f as a };
var r = require("../0/index");
var o = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(r);
var i = require("../16/index");
var a = require("../623");
var s = require("../702");
var c = require("../739/index");
var l = require("../13/index");
var u = require("../2/index");
var d = require("./513");
var p = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(d);
var f = "COURSE_ICON_NAME";
var _b;
_b = Object(r.memo)(function () {
  var e = Object(i.d)();
  var t = Object(s.a)().formatMessage;
  return o.a.createElement(c.a, {
    placement: "left",
    title: t({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, o.a.createElement("div", {
    className: p.a.courseMinIcon,
    onClick: function () {
      a.a.show();
      e(Object(u.ii)(f, !1));
    }
  }, o.a.createElement(l.j, {
    type: "icon-video"
  }), o.a.createElement("div", {
    className: p.a.close,
    onClick: function (t) {
      t.stopPropagation();
      a.a.show();
      a.a.close({
        closeAnimationPos: {
          x: 150,
          y: 30
        }
      });
      e(Object(u.Gh)(f));
    }
  }, o.a.createElement(l.j, {
    type: "icon-close"
  }))));
});
export { _b as b };
export default f;