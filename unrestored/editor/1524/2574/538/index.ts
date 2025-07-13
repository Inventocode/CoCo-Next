"use strict";

import * as r from "../10/index";
import * as o from "../0/index";
import * as i from "../0/index";
import * as a from "../8";
import * as s from "../8";
import "./865";
exports.a = Object(o.memo)(function (e) {
  var t = e.onChange;
  var n = e.checked;
  var a = Object(o.useState)(n);
  var c = Object(r.a)(a, 2);
  var l = c[0];
  var u = c[1];
  Object(o.useEffect)(function () {
    u(!!n);
  }, [n]);
  return i.a.createElement("div", {
    className: s()("coco-switch", l && "coco-switch-checked"),
    onClick: function () {
      u(!l);
      if (t) {
        t(!l);
      }
    }
  }, i.a.createElement("div", {
    className: s()("coco-switch-handle", l && "coco-switch-handle-checked")
  }));
});