"use strict";

var r = require("../../../3190/494");
function i() {
  var e = require("../../1184/index");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t;
  var n = e.options;
  var a = n.filename;
  var s = n.cwd;
  var o = n.filenameRelative;
  var l = void 0 === o ? "string" === typeof a ? i().relative(s, a) : "unknown" : o;
  var u = n.sourceType;
  var c = void 0 === u ? "module" : u;
  var p = n.inputSourceMap;
  var f = n.sourceMaps;
  var d = void 0 === f ? !!p : f;
  var h = n.sourceRoot;
  var y = void 0 === h ? e.options.moduleRoot : h;
  var m = n.sourceFileName;
  var v = void 0 === m ? i().basename(l) : m;
  var g = n.comments;
  var T = void 0 === g || g;
  var b = n.compact;
  var S = void 0 === b ? "auto" : b;
  var E = e.options;
  var x = Object.assign({}, E, {
    parserOpts: Object.assign({
      sourceType: ".mjs" === i().extname(l) ? "module" : c,
      sourceFileName: a,
      plugins: []
    }, E.parserOpts),
    generatorOpts: Object.assign({
      filename: a,
      auxiliaryCommentBefore: E.auxiliaryCommentBefore,
      auxiliaryCommentAfter: E.auxiliaryCommentAfter,
      retainLines: E.retainLines,
      comments: T,
      shouldPrintComment: E.shouldPrintComment,
      compact: S,
      minified: E.minified,
      sourceMaps: d,
      sourceRoot: y,
      sourceFileName: v
    }, E.generatorOpts)
  });
  var P = r(e.passes);
  try {
    for (P.s(); !(t = P.n()).done;) {
      var A;
      var k = t.value;
      var w = r(k);
      try {
        for (w.s(); !(A = w.n()).done;) {
          var O = A.value;
          if (O.manipulateOptions) {
            O.manipulateOptions(x, x.parserOpts);
          }
        }
      } catch (C) {
        w.e(C);
      } finally {
        w.f();
      }
    }
  } catch (C) {
    P.e(C);
  } finally {
    P.f();
  }
  return x;
};