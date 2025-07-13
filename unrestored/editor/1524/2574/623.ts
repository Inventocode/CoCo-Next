"use strict";

export { p as a };
var r;
var i;
import * as o from "./19";
import * as a from "./171";
import * as s from "./110";
import * as c from "./110";
import * as u from "./0/index";
import * as l from "./0/index";
import * as f from "./75/index";
import * as h from "./75/index";
var d = !1;
var p = {
  load: function () {
    var e = Object(a.a)(c.a.mark(function e(t) {
      var a;
      return c.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!d) {
                e.next = 2;
                break;
              }
              return e.abrupt("return");
            case 2:
              a = l.a.lazy(function () {
                return Promise.reject(new Error("module (key: 2584) not found!")).then(function (e) {
                  return {
                    default: e.KittenVideoPlayer
                  };
                });
              });
              (r = document.createElement("div")).id = "CUI-kitten-video-player-container";
              document.body.appendChild(r);
              h.a.render(l.a.createElement(l.a.Suspense, {
                fallback: null
              }, l.a.createElement(a, Object(o.a)({
                getPlayerRef: function (e) {
                  return i = e;
                }
              }, t))), r);
              d = !0;
            case 8:
            case "end":
              return e.stop();
          }
        }
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(),
  close: function (e) {
    return new Promise(function (t, n) {
      var i;
      var o;
      var a = document.getElementsByClassName("CUI-kitten-video-player-draggable")[0];
      if (a) {
        var s = a.getBoundingClientRect();
        var c = s.width;
        var u = s.height;
        a.style.transform += " scale(1)";
        var l = {
          x: 0,
          y: 0
        };
        if (null !== e && void 0 !== e && e.closeAnimationPos) {
          l = e.closeAnimationPos;
        }
        var f = {
          transition: "transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)",
          transform: "translate(".concat(((null === (i = l) || void 0 === i ? void 0 : i.x) || 0) - c / 2, "px, ").concat(((null === (o = l) || void 0 === o ? void 0 : o.y) || 0) - u / 2, "px) scale(0)")
        };
        a.style.transition = f.transition;
        a.style.transform = f.transform;
        a.addEventListener("transitionend", function () {
          if (r) {
            h.a.unmountComponentAtNode(r);
            document.body.removeChild(r);
            r = void 0;
            t(void 0);
            d = !1;
          }
        });
      }
    });
  },
  hide: function () {
    var e;
    if (r) {
      if (!(null === (e = i) || void 0 === e)) {
        e.pause();
      }
      r.children[0].style.display = "none";
    }
  },
  show: function () {
    if (r) {
      r.children[0].style.display = "block";
    }
  },
  isLoaded: function () {
    return d;
  },
  getPlayer: function () {
    return i;
  }
};