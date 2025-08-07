"use strict";

export { p as a };
var r;
var i;
import o = require("./19");
import a = require("./171");
import s = require("./110");
var c = function __importDefault(module) {
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
}(s);
import u = require("react");
var l = function __importDefault(module) {
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
}(u);
import f = require("./75/index");
var d = function __importDefault(module) {
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
}(f);
var h = false;
var p = {
  load: function () {
    var e = a.a(c.a.mark(function e(t) {
      var a;
      return c.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!h) {
                e.next = 2;
                break;
              }
              return e.abrupt("return");
            case 2:
              a = l.a.lazy(function () {
                return Promise.reject(new Error("module (key: 2594) not found!")).then(function (e) {
                  return {
                    default: e.KittenVideoPlayer
                  };
                });
              });
              (r = document.createElement("div")).id = "CUI-kitten-video-player-container";
              document.body.appendChild(r);
              d.a.render(l.a.createElement(l.a.Suspense, {
                fallback: null
              }, l.a.createElement(a, o.a({
                getPlayerRef: function (e) {
                  return i = e;
                }
              }, t))), r);
              h = true;
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
        if (null !== e && undefined !== e && e.closeAnimationPos) {
          l = e.closeAnimationPos;
        }
        var f = {
          transition: "transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)",
          transform: "translate(".concat(((null === (i = l) || undefined === i ? undefined : i.x) || 0) - c / 2, "px, ").concat(((null === (o = l) || undefined === o ? undefined : o.y) || 0) - u / 2, "px) scale(0)")
        };
        a.style.transition = f.transition;
        a.style.transform = f.transform;
        a.addEventListener("transitionend", function () {
          if (r) {
            d.a.unmountComponentAtNode(r);
            document.body.removeChild(r);
            r = undefined;
            t(undefined);
            h = false;
          }
        });
      }
    });
  },
  hide: function () {
    var e;
    if (r) {
      if (!(null === (e = i) || undefined === e)) {
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
    return h;
  },
  getPlayer: function () {
    return i;
  }
};
export default p;