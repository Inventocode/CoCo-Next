"use strict";

export { f as a };
import * as r from "../0/index";
import * as o from "../0/index";
import * as i from "../16/index";
import * as a from "../623";
import * as s from "../702";
import * as c from "../739/index";
import * as l from "../13/index";
import * as u from "../2/index";
import * as d from "./513";
import * as p from "./513";
var f = "COURSE_ICON_NAME";
exports.b = Object(r.memo)(function () {
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