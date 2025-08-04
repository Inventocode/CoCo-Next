"use strict";

var r = require("../807/index")("eslint:code-path");
function i(e) {
  return e.id + (e.reachable ? "" : "!");
}
module.exports = {
  enabled: r.enabled,
  dump: r,
  dumpState: r.enabled ? function (e, t, n) {
    for (var o = 0; o < t.currentSegments.length; ++o) {
      var a = t.currentSegments[o].internal;
      if (n) {
        a.exitNodes.push(e);
      } else {
        a.nodes.push(e);
      }
    }
    r(["".concat(t.currentSegments.map(i).join(","), ")"), "".concat(e.type).concat(n ? ":exit" : "")].join(" "));
  } : r,
  dumpDot: r.enabled ? function (e) {
    var t = "\ndigraph {\nnode[shape=box,style=\"rounded,filled\",fillcolor=white];\ninitial[label=\"\",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];\n";
    if (e.returnedSegments.length > 0) {
      t += "final[label=\"\",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];\n";
    }
    if (e.thrownSegments.length > 0) {
      t += "thrown[label=\"✘\",shape=circle,width=0.3,height=0.3,fixedsize];\n";
    }
    var n = Object.create(null);
    var i = this.makeDotArrows(e, n);
    for (var o in n) {
      var a = n[o];
      t += "".concat(o, "[");
      if (a.reachable) {
        t += "label=\"";
      } else {
        t += "style=\"rounded,dashed,filled\",fillcolor=\"#FF9800\",label=\"<<unreachable>>\\n";
      }
      if (a.internal.nodes.length > 0 || a.internal.exitNodes.length > 0) {
        t += [].concat(a.internal.nodes.map(function (e) {
          switch (e.type) {
            case "Identifier":
              return "".concat(e.type, " (").concat(e.name, ")");
            case "Literal":
              return "".concat(e.type, " (").concat(e.value, ")");
            default:
              return e.type;
          }
        }), a.internal.exitNodes.map(function (e) {
          switch (e.type) {
            case "Identifier":
              return "".concat(e.type, ":exit (").concat(e.name, ")");
            case "Literal":
              return "".concat(e.type, ":exit (").concat(e.value, ")");
            default:
              return "".concat(e.type, ":exit");
          }
        })).join("\\n");
      } else {
        t += "????";
      }
      t += "\"];\n";
    }
    t += "".concat(i, "\n");
    r("DOT", t += "}");
  } : r,
  makeDotArrows: function (e, t) {
    for (var n = [[e.initialSegment, 0]], r = t || Object.create(null), i = e.initialSegment.id, o = "initial->".concat(e.initialSegment.id); n.length > 0;) {
      var a = n.pop();
      var s = a[0];
      var c = a[1];
      if (!r[s.id] || 0 !== c) {
        r[s.id] = s;
        var u = s.allNextSegments[c];
        if (u) {
          if (i === s.id) {
            o += "->".concat(u.id);
          } else {
            o += ";\n".concat(s.id, "->").concat(u.id);
          }
          i = u.id;
          n.unshift([s, 1 + c]);
          n.push([u, 0]);
        }
      }
    }
    e.returnedSegments.forEach(function (e) {
      if (i === e.id) {
        o += "->final";
      } else {
        o += ";\n".concat(e.id, "->final");
      }
      i = null;
    });
    e.thrownSegments.forEach(function (e) {
      if (i === e.id) {
        o += "->thrown";
      } else {
        o += ";\n".concat(e.id, "->thrown");
      }
      i = null;
    });
    return "".concat(o, ";");
  }
};