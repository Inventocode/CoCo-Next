"use strict";

import * as r from "../../../../../3190/494";
function i() {
  var e = require("../../../3093/2702/3035/2780/index");
  i = function () {
    return e;
  };
  return e;
}
function a(e) {
  return "".concat(e.line, "/").concat(e.columnStart);
}
function s(e) {
  var t = new (i().SourceMapConsumer)(Object.assign({}, e, {
    sourceRoot: null
  }));
  var n = new Map();
  var r = new Map();
  var a = null;
  t.computeColumnSpans();
  t.eachMapping(function (e) {
    if (null !== e.originalLine) {
      var i = n.get(e.source);
      if (!i) {
        i = {
          path: e.source,
          content: t.sourceContentFor(e.source, !0)
        };
        n.set(e.source, i);
      }
      var s = r.get(i);
      if (!s) {
        s = {
          source: i,
          mappings: []
        };
        r.set(i, s);
      }
      var o = {
        line: e.originalLine,
        columnStart: e.originalColumn,
        columnEnd: 1 / 0,
        name: e.name
      };
      if (a && a.source === i && a.mapping.line === e.originalLine) {
        a.mapping.columnEnd = e.originalColumn;
      }
      a = {
        source: i,
        mapping: o
      };
      s.mappings.push({
        original: o,
        generated: t.allGeneratedPositionsFor({
          source: e.source,
          line: e.originalLine,
          column: e.originalColumn
        }).map(function (e) {
          return {
            line: e.line,
            columnStart: e.column,
            columnEnd: e.lastColumn + 1
          };
        })
      });
    }
  }, null, i().SourceMapConsumer.ORIGINAL_ORDER);
  return {
    file: e.file,
    sourceRoot: e.sourceRoot,
    sources: Array.from(r.values())
  };
}
export default (function (e, t) {
  var n;
  var o = s(e);
  var l = s(t);
  var u = new (i().SourceMapGenerator)();
  var c = r(o.sources);
  try {
    for (c.s(); !(n = c.n()).done;) {
      var p = n.value.source;
      if ("string" === typeof p.content) {
        u.setSourceContent(p.path, p.content);
      }
    }
  } catch (b) {
    c.e(b);
  } finally {
    c.f();
  }
  if (1 === l.sources.length) {
    var f = l.sources[0];
    var d = new Map();
    !function (e, t) {
      var n;
      var i = r(e.sources);
      try {
        for (i.s(); !(n = i.n()).done;) {
          var a;
          var s = n.value;
          var o = s.source;
          var l = s.mappings;
          var u = r(l);
          try {
            for (u.s(); !(a = u.n()).done;) {
              var c;
              var p = a.value;
              var f = p.original;
              var d = p.generated;
              var h = r(d);
              try {
                for (h.s(); !(c = h.n()).done;) {
                  var y = c.value;
                  t(y, f, o);
                }
              } catch (b) {
                h.e(b);
              } finally {
                h.f();
              }
            }
          } catch (b) {
            u.e(b);
          } finally {
            u.f();
          }
        }
      } catch (b) {
        i.e(b);
      } finally {
        i.f();
      }
    }(o, function (e, t, n) {
      !function (e, t, n) {
        var i;
        var a = function (e, t) {
          var n = e.mappings;
          var r = t.line;
          var i = t.columnStart;
          var a = t.columnEnd;
          return function (e, t) {
            for (var n = function (e, t) {
                var n = 0;
                var r = e.length;
                for (; n < r;) {
                  var i = Math.floor((n + r) / 2);
                  var a = e[i];
                  var s = t(a);
                  if (0 === s) {
                    n = i;
                    break;
                  }
                  if (s >= 0) {
                    r = i;
                  } else {
                    n = i + 1;
                  }
                }
                var o = n;
                if (o < e.length) {
                  for (; o >= 0 && t(e[o]) >= 0;) {
                    o--;
                  }
                  return o + 1;
                }
                return o;
              }(e, t), r = [], i = n; i < e.length && 0 === t(e[i]); i++) {
              r.push(e[i]);
            }
            return r;
          }(n, function (e) {
            var t = e.original;
            return r > t.line ? -1 : r < t.line ? 1 : i >= t.columnEnd ? -1 : a <= t.columnStart ? 1 : 0;
          });
        }(e, t);
        var s = r(a);
        try {
          for (s.s(); !(i = s.n()).done;) {
            var o;
            var l = i.value.generated;
            var u = r(l);
            try {
              for (u.s(); !(o = u.n()).done;) {
                var c = o.value;
                n(c);
              }
            } catch (b) {
              u.e(b);
            } finally {
              u.f();
            }
          }
        } catch (b) {
          s.e(b);
        } finally {
          s.f();
        }
      }(f, e, function (e) {
        var r = a(e);
        if (!d.has(r)) {
          d.set(r, e);
          u.addMapping({
            source: n.path,
            original: {
              line: t.line,
              column: t.columnStart
            },
            generated: {
              line: e.line,
              column: e.columnStart
            },
            name: t.name
          });
        }
      });
    });
    var h;
    var y = r(d.values());
    try {
      for (y.s(); !(h = y.n()).done;) {
        var m = h.value;
        if (m.columnEnd !== 1 / 0) {
          var v = {
            line: m.line,
            columnStart: m.columnEnd
          };
          var g = a(v);
          if (!d.has(g)) {
            u.addMapping({
              generated: {
                line: v.line,
                column: v.columnStart
              }
            });
          }
        }
      }
    } catch (b) {
      y.e(b);
    } finally {
      y.f();
    }
  }
  var T = u.toJSON();
  if ("string" === typeof o.sourceRoot) {
    T.sourceRoot = o.sourceRoot;
  }
  return T;
});