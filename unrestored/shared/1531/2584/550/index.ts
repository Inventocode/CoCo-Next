/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：550
 */

"use strict";

export { c as a };
import r = require("regenerator-runtime");
var o = function __importDefault(module) {
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
}(r);
import i = require("../7");
import a = require("html2canvas");
var s = function __importDefault(module) {
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
}(a);
function c(e, t) {
  return l.apply(this, arguments);
}
function l() {
  return (l = i.a(o.a.mark(function e(t, n) {
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
              useCORS: true,
              logging: false,
              ignoreElements: function (e) {
                return "iframe" === (null === e || undefined === e ? undefined : e.tagName.toLowerCase());
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
export default c;