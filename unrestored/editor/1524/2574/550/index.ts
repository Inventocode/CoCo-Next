"use strict";

export { c as a };
import * as r from "../1/index";
import * as o from "../1/index";
import * as i from "../7";
import * as a from "./411";
import * as s from "./411";
function c(e, t) {
  return l.apply(this, arguments);
}
function l() {
  return (l = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = n || window.devicePixelRatio;
            e.next = 3;
            return new Promise(function (e) {
              return setTimeout(e, 0);
            });
          case 3:
            e.next = 5;
            return s()(t, {
              scale: n,
              useCORS: !0,
              logging: !1,
              ignoreElements: function (e) {
                return "iframe" === (null === e || void 0 === e ? void 0 : e.tagName.toLowerCase());
              },
              onclone: function (e) {
                try {
                  var t = e.getElementById("COCO_APP_ZONE");
                  if (t) {
                    t.style.transform = "";
                  }
                } catch (n) {
                  console.error("htmlToImage reset transform error", n);
                }
              }
            });
          case 5:
            r = e.sent;
            return e.abrupt("return", r.toDataURL());
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}