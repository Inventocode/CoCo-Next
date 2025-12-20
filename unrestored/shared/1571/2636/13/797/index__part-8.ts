/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-8
 */

"use strict"

import { b, O } from "./index__part-0"
import { qt, Jt, An } from "./index__part-5"
import { Tn, Bn, Dn, Fn, Hn, ii, si, ci, ui, li, fi, di, hi, pi, _i, Ai, gi, vi, mi, yi, bi, wi, Ei, xi } from "./index__part-6"
import /* [auto-meaningful-name] */$$_$$_50_index from "../../50/index"
import /* [auto-meaningful-name] */$_101_index from "./101/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1507 from "./1507"
import /* [auto-meaningful-name] */_$_ from "./1507"
var fo = function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var r = undefined === e$onClick ? function () {} : e$onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$first = e.first
  var /* [auto-meaningful-name] */e$last = e.last
  var /* [auto-meaningful-name] */e$active = e.active
  var l = $_101_index({
    default: {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: e$color,
        marginBottom: "1px"
      },
      check: {
        color: Bn(e$color),
        marginLeft: "8px",
        display: "none"
      }
    },
    first: {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    last: {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    active: {
      check: {
        display: "block"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      check: {
        color: "#333"
      }
    },
    transparent: {
      check: {
        color: "#333"
      }
    }
  }, {
    first: e$first,
    last: e$last,
    active: e$active,
    "color-#FFFFFF": "#FFFFFF" === e$color,
    transparent: "transparent" === e$color
  })
  return React.createElement(Hn, {
    color: e$color,
    style: l.color,
    onClick: r,
    onHover: e$onSwatchHover,
    focusStyle: {
      boxShadow: "0 0 4px " + e$color
    }
  }, React.createElement("div", {
    style: l.check
  }, React.createElement(_$_, null)))
}
var ho = function (e) {
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$group = e.group
  var /* [auto-meaningful-name] */e$active = e.active
  var s = $_101_index({
    default: {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  })
  return React.createElement("div", {
    style: s.group
  }, ii(e$group, function (e, a) {
    return React.createElement(fo, {
      key: e,
      color: e,
      active: e.toLowerCase() === e$active,
      first: 0 === a,
      last: a === e$group.length - 1,
      onClick: e$onClick,
      onSwatchHover: e$onSwatchHover
    })
  }))
}
var po = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var d = undefined === e$className ? "" : e$className
  var h = $_101_index(qt({
    default: {
      picker: {
        width: e$width,
        height: e$height
      },
      overflow: {
        height: e$height,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, l))
  var p = function (e, t) {
    return e$onChange({
      hex: e,
      source: "hex"
    }, t)
  }
  return React.createElement("div", {
    style: h.picker,
    className: "swatches-picker " + d
  }, React.createElement(Jt, null, React.createElement("div", {
    style: h.overflow
  }, React.createElement("div", {
    style: h.body
  }, ii(e$colors, function (e) {
    return React.createElement(ho, {
      key: e.toString(),
      group: e,
      active: e$hex,
      onClick: p,
      onSwatchHover: e$onSwatchHover
    })
  }), React.createElement("div", {
    style: h.clear
  })))))
}
po.propTypes = {
  width: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  height: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  colors: $$_$$_50_index.arrayOf($$_$$_50_index.arrayOf($$_$$_50_index.string)),
  styles: $$_$$_50_index.object
}
po.defaultProps = {
  width: 320,
  height: 240,
  colors: [[si[900], si[700], si[500], si[300], si[100]], [ci[900], ci[700], ci[500], ci[300], ci[100]], [ui[900], ui[700], ui[500], ui[300], ui[100]], [li[900], li[700], li[500], li[300], li[100]], [fi[900], fi[700], fi[500], fi[300], fi[100]], [di[900], di[700], di[500], di[300], di[100]], [hi[900], hi[700], hi[500], hi[300], hi[100]], [pi[900], pi[700], pi[500], pi[300], pi[100]], [_i[900], _i[700], _i[500], _i[300], _i[100]], ["#194D33", Ai[700], Ai[500], Ai[300], Ai[100]], [gi[900], gi[700], gi[500], gi[300], gi[100]], [vi[900], vi[700], vi[500], vi[300], vi[100]], [mi[900], mi[700], mi[500], mi[300], mi[100]], [yi[900], yi[700], yi[500], yi[300], yi[100]], [bi[900], bi[700], bi[500], bi[300], bi[100]], [wi[900], wi[700], wi[500], wi[300], wi[100]], [Ei[900], Ei[700], Ei[500], Ei[300], Ei[100]], [xi[900], xi[700], xi[500], xi[300], xi[100]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
}
Fn(po)
var _o = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$triangle = e.triangle
  var /* [auto-meaningful-name] */e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var d = undefined === e$className ? "" : e$className
  var h = $_101_index(qt({
    default: {
      card: {
        width: e$width,
        background: "#fff",
        border: "0 solid rgba(0,0,0,0.25)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative"
      },
      body: {
        padding: "15px 9px 9px 15px"
      },
      label: {
        fontSize: "18px",
        color: "#fff"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent #fff transparent",
        position: "absolute"
      },
      triangleShadow: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
        position: "absolute"
      },
      hash: {
        background: "#F0F0F0",
        height: "30px",
        width: "30px",
        borderRadius: "4px 0 0 4px",
        float: "left",
        color: "#98A1A4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        width: "100px",
        fontSize: "14px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "28px",
        boxShadow: "inset 0 0 0 1px #F0F0F0",
        boxSizing: "content-box",
        borderRadius: "0 4px 4px 0",
        float: "left",
        paddingLeft: "8px"
      },
      swatch: {
        width: "30px",
        height: "30px",
        float: "left",
        borderRadius: "4px",
        margin: "0 6px 6px 0"
      },
      clear: {
        clear: "both"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-10px",
        left: "12px"
      },
      triangleShadow: {
        top: "-11px",
        left: "12px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-10px",
        right: "12px"
      },
      triangleShadow: {
        top: "-11px",
        right: "12px"
      }
    }
  }, l), {
    "hide-triangle": "hide" === e$triangle,
    "top-left-triangle": "top-left" === e$triangle,
    "top-right-triangle": "top-right" === e$triangle
  })
  var p = function (e, n) {
    if (Tn(e)) {
      e$onChange({
        hex: e,
        source: "hex"
      }, n)
    }
  }
  return React.createElement("div", {
    style: h.card,
    className: "twitter-picker " + d
  }, React.createElement("div", {
    style: h.triangleShadow
  }), React.createElement("div", {
    style: h.triangle
  }), React.createElement("div", {
    style: h.body
  }, ii(e$colors, function (e, t) {
    return React.createElement(Hn, {
      key: t,
      color: e,
      hex: e,
      style: h.swatch,
      onClick: p,
      onHover: e$onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), React.createElement("div", {
    style: h.hash
  }, "#"), React.createElement(b, {
    label: null,
    style: {
      input: h.input
    },
    value: e$hex.replace("#", ""),
    onChange: p
  }), React.createElement("div", {
    style: h.clear
  })))
}
_o.propTypes = {
  width: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  triangle: $$_$$_50_index.oneOf(["hide", "top-left", "top-right"]),
  colors: $$_$$_50_index.arrayOf($$_$$_50_index.string),
  styles: $$_$$_50_index.object
}
_o.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
}
Fn(_o)
var Ao = function (e) {
  var t = $_101_index({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
      }
    }
  })
  return React.createElement("div", {
    style: t.picker
  })
}
Ao.propTypes = {
  hsl: $$_$$_50_index.shape({
    h: $$_$$_50_index.number,
    s: $$_$$_50_index.number,
    l: $$_$$_50_index.number,
    a: $$_$$_50_index.number
  })
}
Ao.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}
var go = Ao
var vo = function (e) {
  var t = $_101_index({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  })
  return React.createElement("div", {
    style: t.picker
  })
}
vo.propTypes = {
  hsl: $$_$$_50_index.shape({
    h: $$_$$_50_index.number,
    s: $$_$$_50_index.number,
    l: $$_$$_50_index.number,
    a: $$_$$_50_index.number
  })
}
vo.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}
var mo = vo
var yo = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$hsv = e.hsv
  var c = function (e, n) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, n)
      }
    } else if (e.rgb) {
      var r = e.rgb.split(",")
      if (Dn(e.rgb, "rgb")) {
        e$onChange({
          r: r[0],
          g: r[1],
          b: r[2],
          a: 1,
          source: "rgb"
        }, n)
      }
    } else if (e.hsv) {
      var i = e.hsv.split(",")
      if (Dn(e.hsv, "hsv")) {
        i[2] = i[2].replace("%", "")
        i[1] = i[1].replace("%", "")
        i[0] = i[0].replace("°", "")
        if (1 == i[1]) {
          i[1] = .01
        } else {
          if (1 == i[2]) {
            i[2] = .01
          }
        }
        e$onChange({
          h: Number(i[0]),
          s: Number(i[1]),
          v: Number(i[2]),
          source: "hsv"
        }, n)
      }
    } else if (e.hsl) {
      var o = e.hsl.split(",")
      if (Dn(e.hsl, "hsl")) {
        o[2] = o[2].replace("%", "")
        o[1] = o[1].replace("%", "")
        o[0] = o[0].replace("°", "")
        if (1 == d[1]) {
          d[1] = .01
        } else {
          if (1 == d[2]) {
            d[2] = .01
          }
        }
        e$onChange({
          h: Number(o[0]),
          s: Number(o[1]),
          v: Number(o[2]),
          source: "hsl"
        }, n)
      }
    }
  }
  var u = $_101_index({
    default: {
      wrap: {
        display: "flex",
        height: "100px",
        marginTop: "4px"
      },
      fields: {
        width: "100%"
      },
      column: {
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between"
      },
      double: {
        padding: "0px 4.4px",
        boxSizing: "border-box"
      },
      input: {
        width: "100%",
        height: "38px",
        boxSizing: "border-box",
        padding: "4px 10% 3px",
        textAlign: "center",
        border: "1px solid #dadce0",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      input2: {
        height: "38px",
        width: "100%",
        border: "1px solid #dadce0",
        boxSizing: "border-box",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        paddingLeft: "10px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label: {
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "35px",
        top: "-6px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label2: {
        left: "10px",
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "32px",
        top: "-6px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      single: {
        flexGrow: "1",
        margin: "0px 4.4px"
      }
    }
  })
  var l = e$rgb.r + ", " + e$rgb.g + ", " + e$rgb.b
  var f = Math.round(e$hsl.h) + "°, " + Math.round(100 * e$hsl.s) + "%, " + Math.round(100 * e$hsl.l) + "%"
  var d = Math.round(e$hsv.h) + "°, " + Math.round(100 * e$hsv.s) + "%, " + Math.round(100 * e$hsv.v) + "%"
  return React.createElement("div", {
    style: u.wrap,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: u.fields
  }, React.createElement("div", {
    style: u.double
  }, React.createElement(b, {
    style: {
      input: u.input,
      label: u.label
    },
    label: "hex",
    value: e$hex,
    onChange: c
  })), React.createElement("div", {
    style: u.column
  }, React.createElement("div", {
    style: u.single
  }, React.createElement(b, {
    style: {
      input: u.input2,
      label: u.label2
    },
    label: "rgb",
    value: l,
    onChange: c
  })), React.createElement("div", {
    style: u.single
  }, React.createElement(b, {
    style: {
      input: u.input2,
      label: u.label2
    },
    label: "hsv",
    value: d,
    onChange: c
  })), React.createElement("div", {
    style: u.single
  }, React.createElement(b, {
    style: {
      input: u.input2,
      label: u.label2
    },
    label: "hsl",
    value: f,
    onChange: c
  })))))
}
var bo = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$hsv = e.hsv
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$header = e.header
  var /* [auto-meaningful-name] */e$styles = e.styles
  var f = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var h = undefined === e$className ? "" : e$className
  var p = $_101_index(qt({
    default: {
      picker: {
        width: e$width,
        background: "#fff",
        border: "1px solid #dfe1e5",
        boxSizing: "initial",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "8px 8px 0px 0px"
      },
      head: {
        height: "57px",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        fontSize: "20px",
        boxSizing: "border-box",
        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
      },
      saturation: {
        width: "70%",
        padding: "0px",
        position: "relative",
        overflow: "hidden"
      },
      swatch: {
        width: "30%",
        height: "228px",
        padding: "0px",
        background: "rgba(" + e$rgb.r + ", " + e$rgb.g + ", " + e$rgb.b + ", 1)",
        position: "relative",
        overflow: "hidden"
      },
      body: {
        margin: "auto",
        width: "95%"
      },
      controls: {
        display: "flex",
        boxSizing: "border-box",
        height: "52px",
        paddingTop: "22px"
      },
      color: {
        width: "32px"
      },
      hue: {
        height: "8px",
        position: "relative",
        margin: "0px 16px 0px 16px",
        width: "100%"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, f))
  return React.createElement("div", {
    style: p.picker,
    className: "google-picker " + h
  }, React.createElement("div", {
    style: p.head
  }, e$header), React.createElement("div", {
    style: p.swatch
  }), React.createElement("div", {
    style: p.saturation
  }, React.createElement(An, {
    hsl: e$hsl,
    hsv: e$hsv,
    pointer: go,
    onChange: e$onChange
  })), React.createElement("div", {
    style: p.body
  }, React.createElement("div", {
    style: p.controls,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: p.hue
  }, React.createElement(O, {
    style: p.Hue,
    hsl: e$hsl,
    radius: "4px",
    pointer: mo,
    onChange: e$onChange
  }))), React.createElement(yo, {
    rgb: e$rgb,
    hsl: e$hsl,
    hex: e$hex,
    hsv: e$hsv,
    onChange: e$onChange
  })))
}
bo.propTypes = {
  width: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  styles: $$_$$_50_index.object,
  header: $$_$$_50_index.string
}
bo.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}
Fn(bo)
