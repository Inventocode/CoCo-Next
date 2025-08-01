"use strict";

var r = require("../../../../../3200/494");
function i() {
  var e = require("../3132/2816/index");
  i = function () {
    return e;
  };
  return e;
}
function a() {
  var e = require("../../../3103/2712/index");
  a = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  var n;
  var o;
  var l = t.opts;
  var u = t.ast;
  var c = t.code;
  var p = t.inputMap;
  var f = [];
  var d = r(e);
  try {
    for (d.s(); !(n = d.n()).done;) {
      var h;
      var y = n.value;
      var m = r(y);
      try {
        for (m.s(); !(h = m.n()).done;) {
          var v = h.value.generatorOverride;
          if (v) {
            var g = v(u, l.generatorOpts, c, a().default);
            if (void 0 !== g) {
              f.push(g);
            }
          }
        }
      } catch (E) {
        m.e(E);
      } finally {
        m.f();
      }
    }
  } catch (E) {
    d.e(E);
  } finally {
    d.f();
  }
  if (0 === f.length) {
    o = (0, a().default)(u, l.generatorOpts, c);
  } else {
    if (1 !== f.length) {
      throw new Error("More than one plugin attempted to override codegen.");
    }
    if ("function" === typeof (o = f[0]).then) {
      throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
    }
  }
  var T = o;
  var b = T.code;
  var S = T.map;
  if (S && p) {
    S = (0, s.default)(p.toObject(), S);
  }
  if (!("inline" !== l.sourceMaps && "both" !== l.sourceMaps)) {
    b += "\n" + i().fromObject(S).toComment();
  }
  if ("inline" === l.sourceMaps) {
    S = null;
  }
  return {
    outputCode: b,
    outputMap: S
  };
};
var s = require("./3138");