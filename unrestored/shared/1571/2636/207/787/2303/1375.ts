/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1375
 */

"use strict"

var r = require("../818/index")("eslint:code-path")
function i(e) {
  return e.id + (e.reachable ? "" : "!")
}
module.exports = {
  enabled: r.enabled,
  dump: r,
  dumpState: r.enabled ? function (e, t, n) {
    for (var o = 0; o < t.currentSegments.length; ++o) {
      var /* [auto-meaningful-name] */t$currentSegmentsO$internal = t.currentSegments[o].internal
      if (n) {
        t$currentSegmentsO$internal.exitNodes.push(e)
      } else {
        t$currentSegmentsO$internal.nodes.push(e)
      }
    }
    r(["".concat(t.currentSegments.map(i).join(","), ")"), "".concat(e.type).concat(n ? ":exit" : "")].join(" "))
  } : r,
  dumpDot: r.enabled ? function (e) {
    var /* [auto-meaningful-name] */_ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n = "\ndigraph {\nnode[shape=box,style=\"rounded,filled\",fillcolor=white];\ninitial[label=\"\",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];\n"
    if (e.returnedSegments.length > 0) {
      _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "final[label=\"\",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];\n"
    }
    if (e.thrownSegments.length > 0) {
      _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "thrown[label=\"✘\",shape=circle,width=0.3,height=0.3,fixedsize];\n"
    }
    var n = Object.create(null)
    var i = this.makeDotArrows(e, n)
    for (var o in n) {
      var a = n[o]
      _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "".concat(o, "[")
      if (a.reachable) {
        _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "label=\""
      } else {
        _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "style=\"rounded,dashed,filled\",fillcolor=\"#FF9800\",label=\"<<unreachable>>\\n"
      }
      if (a.internal.nodes.length > 0 || a.internal.exitNodes.length > 0) {
        _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += [].concat(a.internal.nodes.map(function (e) {
          switch (e.type) {
            case "Identifier":
              return "".concat(e.type, " (").concat(e.name, ")")
            case "Literal":
              return "".concat(e.type, " (").concat(e.value, ")")
            default:
              return e.type
          }
        }), a.internal.exitNodes.map(function (e) {
          switch (e.type) {
            case "Identifier":
              return "".concat(e.type, ":exit (").concat(e.name, ")")
            case "Literal":
              return "".concat(e.type, ":exit (").concat(e.value, ")")
            default:
              return "".concat(e.type, ":exit")
          }
        })).join("\\n")
      } else {
        _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "????"
      }
      _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "\"];\n"
    }
    _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "".concat(i, "\n")
    r("DOT", _ndigraph_nnodeShapeBoxStyle_RoundedFilled_FillcolorWhite_ninitialLabel__ShapeCircleStyleFilledFillcolorBlackWidth0$25Height0$25_n += "}")
  } : r,
  makeDotArrows: function (e, t) {
    for (var n = [[e.initialSegment, 0]], r = t || Object.create(null), /* [auto-meaningful-name] */e$initialSegment$id = e.initialSegment.id, o = "initial->".concat(e.initialSegment.id); n.length > 0;) {
      var a = n.pop()
      var s = a[0]
      var c = a[1]
      if (!r[s.id] || 0 !== c) {
        r[s.id] = s
        var u = s.allNextSegments[c]
        if (u) {
          if (e$initialSegment$id === s.id) {
            o += "->".concat(u.id)
          } else {
            o += ";\n".concat(s.id, "->").concat(u.id)
          }
          e$initialSegment$id = u.id
          n.unshift([s, 1 + c])
          n.push([u, 0])
        }
      }
    }
    e.returnedSegments.forEach(function (e) {
      if (e$initialSegment$id === e.id) {
        o += "->final"
      } else {
        o += ";\n".concat(e.id, "->final")
      }
      e$initialSegment$id = null
    })
    e.thrownSegments.forEach(function (e) {
      if (e$initialSegment$id === e.id) {
        o += "->thrown"
      } else {
        o += ";\n".concat(e.id, "->thrown")
      }
      e$initialSegment$id = null
    })
    return "".concat(o, ";")
  }
}
