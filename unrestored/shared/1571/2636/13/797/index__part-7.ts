/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：797__part-7
 */

"use strict"

import { d, g, b, O } from "./index__part-0"
import { qt, Jt, An } from "./index__part-5"
import { Tn, Bn, Fn, Hn, ii, Si } from "./index__part-6"
import /* [auto-meaningful-name] */$$_$$_50_index from "../../50/index"
import /* [auto-meaningful-name] */$_101_index from "./101/index"
import * as /* [auto-meaningful-name] */_$_101_index from "./101/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1506 from "./1506"
import /* [auto-meaningful-name] */_$_ from "./1506"
var Di = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      r.enumerable = r.enumerable || false
      r.configurable = true
      if ("value" in r) {
        r.writable = true
      }
      Object.defineProperty(e, r.key, r)
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var Ii = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
    n.toggleViews = function () {
      if ("hex" === n.state.view) {
        n.setState({
          view: "rgb"
        })
      } else {
        if ("rgb" === n.state.view) {
          n.setState({
            view: "hsl"
          })
        } else {
          if ("hsl" === n.state.view) {
            if (1 === n.props.hsl.a) {
              n.setState({
                view: "hex"
              })
            } else {
              n.setState({
                view: "rgb"
              })
            }
          }
        }
      }
    }
    n.handleChange = function (e, t) {
      if (e.hex) {
        if (Tn(e.hex)) {
          n.props.onChange({
            hex: e.hex,
            source: "hex"
          }, t)
        }
      } else {
        if (e.r || e.g || e.b) {
          n.props.onChange({
            r: e.r || n.props.rgb.r,
            g: e.g || n.props.rgb.g,
            b: e.b || n.props.rgb.b,
            source: "rgb"
          }, t)
        } else {
          if (e.a) {
            if (e.a < 0) {
              e.a = 0
            } else {
              if (e.a > 1) {
                e.a = 1
              }
            }
            n.props.onChange({
              h: n.props.hsl.h,
              s: n.props.hsl.s,
              l: n.props.hsl.l,
              a: Math.round(100 * e.a) / 100,
              source: "rgb"
            }, t)
          } else {
            if (e.h || e.s || e.l) {
              if ("string" === typeof e.s && e.s.includes("%")) {
                e.s = e.s.replace("%", "")
              }
              if ("string" === typeof e.l && e.l.includes("%")) {
                e.l = e.l.replace("%", "")
              }
              if (1 == e.s) {
                e.s = .01
              } else {
                if (1 == e.l) {
                  e.l = .01
                }
              }
              n.props.onChange({
                h: e.h || n.props.hsl.h,
                s: Number(Si(e.s) ? n.props.hsl.s : e.s),
                l: Number(Si(e.l) ? n.props.hsl.l : e.l),
                source: "hsl"
              }, t)
            }
          }
        }
      }
    }
    n.showHighlight = function (e) {
      e.currentTarget.style.background = "#eee"
    }
    n.hideHighlight = function (e) {
      e.currentTarget.style.background = "transparent"
    }
    if (1 !== e.hsl.a && "hex" === e.view) {
      n.state = {
        view: "rgb"
      }
    } else {
      n.state = {
        view: e.view
      }
    }
    return n
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  Di(t, [
    {
      key: "render",
      value: function () {
        var e = this
        var t = $_101_index({
          default: {
            wrap: {
              paddingTop: "16px",
              display: "flex"
            },
            fields: {
              flex: "1",
              display: "flex",
              marginLeft: "-6px"
            },
            field: {
              paddingLeft: "6px",
              width: "100%"
            },
            alpha: {
              paddingLeft: "6px",
              width: "100%"
            },
            toggle: {
              width: "32px",
              textAlign: "right",
              position: "relative"
            },
            icon: {
              marginRight: "-4px",
              marginTop: "12px",
              cursor: "pointer",
              position: "relative"
            },
            iconHighlight: {
              position: "absolute",
              width: "24px",
              height: "28px",
              background: "#eee",
              borderRadius: "4px",
              top: "10px",
              left: "12px",
              display: "none"
            },
            input: {
              fontSize: "11px",
              color: "#333",
              width: "100%",
              borderRadius: "2px",
              border: "none",
              boxShadow: "inset 0 0 0 1px #dadada",
              height: "21px",
              textAlign: "center"
            },
            label: {
              textTransform: "uppercase",
              fontSize: "11px",
              lineHeight: "11px",
              color: "#969696",
              textAlign: "center",
              display: "block",
              marginTop: "12px"
            },
            svg: {
              fill: "#333",
              width: "24px",
              height: "24px",
              border: "1px transparent solid",
              borderRadius: "5px"
            }
          },
          disableAlpha: {
            alpha: {
              display: "none"
            }
          }
        }, this.props, this.state)
        var n = undefined
        if ("hex" === this.state.view) {
          n = React.createElement("div", {
            style: t.fields,
            className: "flexbox-fix"
          }, React.createElement("div", {
            style: t.field
          }, React.createElement(b, {
            style: {
              input: t.input,
              label: t.label
            },
            label: "hex",
            value: this.props.hex,
            onChange: this.handleChange
          })))
        } else {
          if ("rgb" === this.state.view) {
            n = React.createElement("div", {
              style: t.fields,
              className: "flexbox-fix"
            }, React.createElement("div", {
              style: t.field
            }, React.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "r",
              value: this.props.rgb.r,
              onChange: this.handleChange
            })), React.createElement("div", {
              style: t.field
            }, React.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "g",
              value: this.props.rgb.g,
              onChange: this.handleChange
            })), React.createElement("div", {
              style: t.field
            }, React.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "b",
              value: this.props.rgb.b,
              onChange: this.handleChange
            })), React.createElement("div", {
              style: t.alpha
            }, React.createElement(b, {
              style: {
                input: t.input,
                label: t.label
              },
              label: "a",
              value: this.props.rgb.a,
              arrowOffset: .01,
              onChange: this.handleChange
            })))
          } else {
            if ("hsl" === this.state.view) {
              n = React.createElement("div", {
                style: t.fields,
                className: "flexbox-fix"
              }, React.createElement("div", {
                style: t.field
              }, React.createElement(b, {
                style: {
                  input: t.input,
                  label: t.label
                },
                label: "h",
                value: Math.round(this.props.hsl.h),
                onChange: this.handleChange
              })), React.createElement("div", {
                style: t.field
              }, React.createElement(b, {
                style: {
                  input: t.input,
                  label: t.label
                },
                label: "s",
                value: Math.round(100 * this.props.hsl.s) + "%",
                onChange: this.handleChange
              })), React.createElement("div", {
                style: t.field
              }, React.createElement(b, {
                style: {
                  input: t.input,
                  label: t.label
                },
                label: "l",
                value: Math.round(100 * this.props.hsl.l) + "%",
                onChange: this.handleChange
              })), React.createElement("div", {
                style: t.alpha
              }, React.createElement(b, {
                style: {
                  input: t.input,
                  label: t.label
                },
                label: "a",
                value: this.props.hsl.a,
                arrowOffset: .01,
                onChange: this.handleChange
              })))
            }
          }
        }
        return React.createElement("div", {
          style: t.wrap,
          className: "flexbox-fix"
        }, n, React.createElement("div", {
          style: t.toggle
        }, React.createElement("div", {
          style: t.icon,
          onClick: this.toggleViews,
          ref: function (t) {
            return e.icon = t
          }
        }, React.createElement(_$_, {
          style: t.svg,
          onMouseOver: this.showHighlight,
          onMouseEnter: this.showHighlight,
          onMouseOut: this.hideHighlight
        }))))
      }
    }
  ], [
    {
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        return 1 !== e.hsl.a && "hex" === t.view ? {
          view: "rgb"
        } : null
      }
    }
  ])
  return t
}(React.Component)
Ii.defaultProps = {
  view: "hex"
}
var Ri = Ii
var Fi = function () {
  var e = $_101_index({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        transform: "translate(-6px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  })
  return React.createElement("div", {
    style: e.picker
  })
}
var Pi = function () {
  var e = $_101_index({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  })
  return React.createElement("div", {
    style: e.picker
  })
}
var Ni = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$disableAlpha = e.disableAlpha
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$hsv = e.hsv
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$renderers = e.renderers
  var /* [auto-meaningful-name] */e$styles = e.styles
  var h = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var _ = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$defaultView = e.defaultView
  var v = $_101_index(qt({
    default: {
      picker: {
        width: e$width,
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
        boxSizing: "initial",
        fontFamily: "Menlo"
      },
      saturation: {
        width: "100%",
        paddingBottom: "55%",
        position: "relative",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden"
      },
      Saturation: {
        radius: "2px 2px 0 0"
      },
      body: {
        padding: "16px 16px 12px"
      },
      controls: {
        display: "flex"
      },
      color: {
        width: "32px"
      },
      swatch: {
        marginTop: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden"
      },
      active: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
        background: "rgba(" + e$rgb.r + ", " + e$rgb.g + ", " + e$rgb.b + ", " + e$rgb.a + ")",
        zIndex: "2"
      },
      toggles: {
        flex: "1"
      },
      hue: {
        height: "10px",
        position: "relative",
        marginBottom: "8px"
      },
      Hue: {
        radius: "2px"
      },
      alpha: {
        height: "10px",
        position: "relative"
      },
      Alpha: {
        radius: "2px"
      }
    },
    disableAlpha: {
      color: {
        width: "22px"
      },
      alpha: {
        display: "none"
      },
      hue: {
        marginBottom: "0px"
      },
      swatch: {
        width: "10px",
        height: "10px",
        marginTop: "0px"
      }
    }
  }, h), {
    disableAlpha: e$disableAlpha
  })
  return React.createElement("div", {
    style: v.picker,
    className: "chrome-picker " + _
  }, React.createElement("div", {
    style: v.saturation
  }, React.createElement(An, {
    style: v.Saturation,
    hsl: e$hsl,
    hsv: e$hsv,
    pointer: Pi,
    onChange: e$onChange
  })), React.createElement("div", {
    style: v.body
  }, React.createElement("div", {
    style: v.controls,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: v.color
  }, React.createElement("div", {
    style: v.swatch
  }, React.createElement("div", {
    style: v.active
  }), React.createElement(d, {
    renderers: e$renderers
  }))), React.createElement("div", {
    style: v.toggles
  }, React.createElement("div", {
    style: v.hue
  }, React.createElement(O, {
    style: v.Hue,
    hsl: e$hsl,
    pointer: Fi,
    onChange: e$onChange
  })), React.createElement("div", {
    style: v.alpha
  }, React.createElement(g, {
    style: v.Alpha,
    rgb: e$rgb,
    hsl: e$hsl,
    pointer: Fi,
    renderers: e$renderers,
    onChange: e$onChange
  })))), React.createElement(Ri, {
    rgb: e$rgb,
    hsl: e$hsl,
    hex: e$hex,
    view: e$defaultView,
    onChange: e$onChange,
    disableAlpha: e$disableAlpha
  })))
}
Ni.propTypes = {
  width: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  disableAlpha: $$_$$_50_index.bool,
  styles: $$_$$_50_index.object,
  defaultView: $$_$$_50_index.oneOf(["hex", "rgb", "hsl"])
}
Ni.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
}
Fn(Ni)
var Mi = function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var r = undefined === e$onClick ? function () {} : e$onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$active = e.active
  var c = $_101_index({
    default: {
      color: {
        background: e$color,
        width: "15px",
        height: "15px",
        float: "left",
        marginRight: "5px",
        marginBottom: "5px",
        position: "relative",
        cursor: "pointer"
      },
      dot: {
        absolute: "5px 5px 5px 5px",
        background: Bn(e$color),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    active: {
      dot: {
        opacity: "1"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      dot: {
        background: "#000"
      }
    },
    transparent: {
      dot: {
        background: "#000"
      }
    }
  }, {
    active: e$active,
    "color-#FFFFFF": "#FFFFFF" === e$color,
    transparent: "transparent" === e$color
  })
  return React.createElement(Hn, {
    style: c.color,
    color: e$color,
    onClick: r,
    onHover: e$onSwatchHover,
    focusStyle: {
      boxShadow: "0 0 4px " + e$color
    }
  }, React.createElement("div", {
    style: c.dot
  }))
}
var Li = function (e) {
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = $_101_index({
    default: {
      fields: {
        display: "flex",
        paddingBottom: "6px",
        paddingRight: "5px",
        position: "relative"
      },
      active: {
        position: "absolute",
        top: "6px",
        left: "5px",
        height: "9px",
        width: "9px",
        background: e$hex
      },
      HEXwrap: {
        flex: "6",
        position: "relative"
      },
      HEXinput: {
        width: "80%",
        padding: "0px",
        paddingLeft: "20%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      HEXlabel: {
        display: "none"
      },
      RGBwrap: {
        flex: "3",
        position: "relative"
      },
      RGBinput: {
        width: "70%",
        padding: "0px",
        paddingLeft: "30%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      RGBlabel: {
        position: "absolute",
        top: "3px",
        left: "0px",
        lineHeight: "16px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#999"
      }
    }
  })
  var s = function (e, t) {
    if (e.r || e.g || e.b) {
      e$onChange({
        r: e.r || e$rgb.r,
        g: e.g || e$rgb.g,
        b: e.b || e$rgb.b,
        source: "rgb"
      }, t)
    } else {
      e$onChange({
        hex: e.hex,
        source: "hex"
      }, t)
    }
  }
  return React.createElement("div", {
    style: o.fields,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: o.active
  }), React.createElement(b, {
    style: {
      wrap: o.HEXwrap,
      input: o.HEXinput,
      label: o.HEXlabel
    },
    label: "hex",
    value: e$hex,
    onChange: s
  }), React.createElement(b, {
    style: {
      wrap: o.RGBwrap,
      input: o.RGBinput,
      label: o.RGBlabel
    },
    label: "r",
    value: e$rgb.r,
    onChange: s
  }), React.createElement(b, {
    style: {
      wrap: o.RGBwrap,
      input: o.RGBinput,
      label: o.RGBlabel
    },
    label: "g",
    value: e$rgb.g,
    onChange: s
  }), React.createElement(b, {
    style: {
      wrap: o.RGBwrap,
      input: o.RGBinput,
      label: o.RGBlabel
    },
    label: "b",
    value: e$rgb.b,
    onChange: s
  }))
}
var ji = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$styles = e.styles
  var u = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var f = undefined === e$className ? "" : e$className
  var d = $_101_index(qt({
    default: {
      Compact: {
        background: "#f6f6f6",
        radius: "4px"
      },
      compact: {
        paddingTop: "5px",
        paddingLeft: "5px",
        boxSizing: "initial",
        width: "240px"
      },
      clear: {
        clear: "both"
      }
    }
  }, u))
  var h = function (e, n) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, n)
      }
    } else {
      e$onChange(e, n)
    }
  }
  return React.createElement(Jt, {
    style: d.Compact,
    styles: u
  }, React.createElement("div", {
    style: d.compact,
    className: "compact-picker " + f
  }, React.createElement("div", null, ii(e$colors, function (e) {
    return React.createElement(Mi, {
      key: e,
      color: e,
      active: e.toLowerCase() === e$hex,
      onClick: h,
      onSwatchHover: e$onSwatchHover
    })
  }), React.createElement("div", {
    style: d.clear
  })), React.createElement(Li, {
    hex: e$hex,
    rgb: e$rgb,
    onChange: h
  })))
}
ji.propTypes = {
  colors: $$_$$_50_index.arrayOf($$_$$_50_index.string),
  styles: $$_$$_50_index.object
}
ji.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
}
Fn(ji)
var Ui = _$_101_index.handleHover(function (e) {
  var /* [auto-meaningful-name] */e$hover = e.hover
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var s = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  }
  var c = $_101_index({
    default: {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    hover: {
      swatch: s
    }
  }, {
    hover: e$hover
  })
  return React.createElement("div", {
    style: c.swatch
  }, React.createElement(Hn, {
    color: e$color,
    onClick: e$onClick,
    onHover: e$onSwatchHover,
    focusStyle: s
  }))
})
var Hi = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$triangle = e.triangle
  var /* [auto-meaningful-name] */e$styles = e.styles
  var u = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var f = undefined === e$className ? "" : e$className
  var d = $_101_index(qt({
    default: {
      card: {
        width: e$width,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        position: "relative",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
      },
      triangle: {
        position: "absolute",
        border: "7px solid transparent",
        borderBottomColor: "#fff"
      },
      triangleShadow: {
        position: "absolute",
        border: "8px solid transparent",
        borderBottomColor: "rgba(0,0,0,0.15)"
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
        top: "-14px",
        left: "10px"
      },
      triangleShadow: {
        top: "-16px",
        left: "9px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-14px",
        right: "10px"
      },
      triangleShadow: {
        top: "-16px",
        right: "9px"
      }
    },
    "bottom-left-triangle": {
      triangle: {
        top: "35px",
        left: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        left: "9px",
        transform: "rotate(180deg)"
      }
    },
    "bottom-right-triangle": {
      triangle: {
        top: "35px",
        right: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        right: "9px",
        transform: "rotate(180deg)"
      }
    }
  }, u), {
    "hide-triangle": "hide" === e$triangle,
    "top-left-triangle": "top-left" === e$triangle,
    "top-right-triangle": "top-right" === e$triangle,
    "bottom-left-triangle": "bottom-left" === e$triangle,
    "bottom-right-triangle": "bottom-right" === e$triangle
  })
  var h = function (e, t) {
    return e$onChange({
      hex: e,
      source: "hex"
    }, t)
  }
  return React.createElement("div", {
    style: d.card,
    className: "github-picker " + f
  }, React.createElement("div", {
    style: d.triangleShadow
  }), React.createElement("div", {
    style: d.triangle
  }), ii(e$colors, function (e) {
    return React.createElement(Ui, {
      color: e,
      key: e,
      onClick: h,
      onSwatchHover: e$onSwatchHover
    })
  }))
}
Hi.propTypes = {
  width: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  colors: $$_$$_50_index.arrayOf($$_$$_50_index.string),
  triangle: $$_$$_50_index.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: $$_$$_50_index.object
}
Hi.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
}
Fn(Hi)
var Vi = function (e) {
  var /* [auto-meaningful-name] */e$direction = e.direction
  var n = $_101_index({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: "vertical" === e$direction
  })
  return React.createElement("div", {
    style: n.picker
  })
}
var Gi = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var zi = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$pointer = e.pointer
  var /* [auto-meaningful-name] */e$styles = e.styles
  var l = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var d = undefined === e$className ? "" : e$className
  var h = $_101_index(qt({
    default: {
      picker: {
        position: "relative",
        width: e$width,
        height: e$height
      },
      hue: {
        radius: "2px"
      }
    }
  }, l))
  return React.createElement("div", {
    style: h.picker,
    className: "hue-picker " + d
  }, React.createElement(O, Gi({}, h.hue, {
    hsl: e$hsl,
    pointer: e$pointer,
    onChange: function (e) {
      return e$onChange({
        a: 1,
        h: e.h,
        l: .5,
        s: 1
      })
    },
    direction: e$direction
  })))
}
zi.propTypes = {
  styles: $$_$$_50_index.object
}
zi.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: Vi,
  styles: {}
}
Fn(zi)
Fn(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$styles = e.styles
  var s = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var u = undefined === e$className ? "" : e$className
  var l = $_101_index(qt({
    default: {
      material: {
        width: "98px",
        height: "98px",
        padding: "16px",
        fontFamily: "Roboto"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "2px solid " + e$hex,
        outline: "none",
        height: "30px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "1px solid #eee",
        outline: "none",
        height: "30px"
      },
      RGBlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      split: {
        display: "flex",
        marginRight: "-10px",
        paddingTop: "11px"
      },
      third: {
        flex: "1",
        paddingRight: "10px"
      }
    }
  }, s))
  var f = function (e, n) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, n)
      }
    } else {
      if (e.r || e.g || e.b) {
        e$onChange({
          r: e.r || e$rgb.r,
          g: e.g || e$rgb.g,
          b: e.b || e$rgb.b,
          source: "rgb"
        }, n)
      }
    }
  }
  return React.createElement(Jt, {
    styles: s
  }, React.createElement("div", {
    style: l.material,
    className: "material-picker " + u
  }, React.createElement(b, {
    style: {
      wrap: l.HEXwrap,
      input: l.HEXinput,
      label: l.HEXlabel
    },
    label: "hex",
    value: e$hex,
    onChange: f
  }), React.createElement("div", {
    style: l.split,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: l.third
  }, React.createElement(b, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "r",
    value: e$rgb.r,
    onChange: f
  })), React.createElement("div", {
    style: l.third
  }, React.createElement(b, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "g",
    value: e$rgb.g,
    onChange: f
  })), React.createElement("div", {
    style: l.third
  }, React.createElement(b, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "b",
    value: e$rgb.b,
    onChange: f
  })))))
})
var Qi = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hsv = e.hsv
  var /* [auto-meaningful-name] */e$hex = e.hex
  var s = $_101_index({
    default: {
      fields: {
        paddingTop: "5px",
        paddingBottom: "9px",
        width: "80px",
        position: "relative"
      },
      divider: {
        height: "5px"
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        marginLeft: "40%",
        width: "40%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "5px",
        fontSize: "13px",
        paddingLeft: "3px",
        marginRight: "10px"
      },
      RGBlabel: {
        left: "0px",
        top: "0px",
        width: "34px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px",
        position: "absolute"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        marginLeft: "20%",
        width: "80%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "6px",
        fontSize: "13px",
        paddingLeft: "3px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "14px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px"
      },
      fieldSymbols: {
        position: "absolute",
        top: "5px",
        right: "-7px",
        fontSize: "13px"
      },
      symbol: {
        height: "20px",
        lineHeight: "22px",
        paddingBottom: "7px"
      }
    }
  })
  var c = function (e, i) {
    if (e["#"]) {
      if (Tn(e["#"])) {
        e$onChange({
          hex: e["#"],
          source: "hex"
        }, i)
      }
    } else {
      if (e.r || e.g || e.b) {
        e$onChange({
          r: e.r || e$rgb.r,
          g: e.g || e$rgb.g,
          b: e.b || e$rgb.b,
          source: "rgb"
        }, i)
      } else {
        if (e.h || e.s || e.v) {
          e$onChange({
            h: e.h || e$hsv.h,
            s: e.s || e$hsv.s,
            v: e.v || e$hsv.v,
            source: "hsv"
          }, i)
        }
      }
    }
  }
  return React.createElement("div", {
    style: s.fields
  }, React.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "h",
    value: Math.round(e$hsv.h),
    onChange: c
  }), React.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "s",
    value: Math.round(100 * e$hsv.s),
    onChange: c
  }), React.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "v",
    value: Math.round(100 * e$hsv.v),
    onChange: c
  }), React.createElement("div", {
    style: s.divider
  }), React.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "r",
    value: e$rgb.r,
    onChange: c
  }), React.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "g",
    value: e$rgb.g,
    onChange: c
  }), React.createElement(b, {
    style: {
      wrap: s.RGBwrap,
      input: s.RGBinput,
      label: s.RGBlabel
    },
    label: "b",
    value: e$rgb.b,
    onChange: c
  }), React.createElement("div", {
    style: s.divider
  }), React.createElement(b, {
    style: {
      wrap: s.HEXwrap,
      input: s.HEXinput,
      label: s.HEXlabel
    },
    label: "#",
    value: e$hex.replace("#", ""),
    onChange: c
  }), React.createElement("div", {
    style: s.fieldSymbols
  }, React.createElement("div", {
    style: s.symbol
  }, "°"), React.createElement("div", {
    style: s.symbol
  }, "%"), React.createElement("div", {
    style: s.symbol
  }, "%")))
}
var Wi = function (e) {
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var n = $_101_index({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    },
    "black-outline": {
      picker: {
        boxShadow: "inset 0 0 0 1px #000"
      }
    }
  }, {
    "black-outline": e$hsl.l > .5
  })
  return React.createElement("div", {
    style: n.picker
  })
}
var Ki = function () {
  var e = $_101_index({
    default: {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  })
  return React.createElement("div", {
    style: e.pointer
  }, React.createElement("div", {
    style: e.left
  }, React.createElement("div", {
    style: e.leftInside
  })), React.createElement("div", {
    style: e.right
  }, React.createElement("div", {
    style: e.rightInside
  })))
}
var Xi = function (e) {
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$active = e.active
  var s = $_101_index({
    default: {
      button: {
        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
        border: "1px solid #878787",
        borderRadius: "2px",
        height: "20px",
        boxShadow: "0 1px 0 0 #EAEAEA",
        fontSize: "14px",
        color: "#000",
        lineHeight: "20px",
        textAlign: "center",
        marginBottom: "10px",
        cursor: "pointer"
      }
    },
    active: {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, {
    active: e$active
  })
  return React.createElement("div", {
    style: s.button,
    onClick: e$onClick
  }, e$label || e$children)
}
var Yi = function (e) {
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$currentColor = e.currentColor
  var r = $_101_index({
    default: {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + e$rgb.r + "," + e$rgb.g + ", " + e$rgb.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: e$currentColor,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  })
  return React.createElement("div", null, React.createElement("div", {
    style: r.label
  }, "new"), React.createElement("div", {
    style: r.swatches
  }, React.createElement("div", {
    style: r.new
  }), React.createElement("div", {
    style: r.current
  })), React.createElement("div", {
    style: r.label
  }, "current"))
}
var qi = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      r.enumerable = r.enumerable || false
      r.configurable = true
      if ("value" in r) {
        r.writable = true
      }
      Object.defineProperty(e, r.key, r)
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
var $i = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }(this, t)
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
    n.state = {
      currentColor: e.hex
    }
    return n
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t)
      } else {
        e.__proto__ = t
      }
    }
  })(t, e)
  qi(t, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$styles = this$props.styles
        var n = undefined === this$props$styles ? {} : this$props$styles
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var o = undefined === this$props$className ? "" : this$props$className
        var s = $_101_index(qt({
          default: {
            picker: {
              background: "#DCDCDC",
              borderRadius: "4px",
              boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
              boxSizing: "initial",
              width: "513px"
            },
            head: {
              backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
              borderBottom: "1px solid #B1B1B1",
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
              height: "23px",
              lineHeight: "24px",
              borderRadius: "4px 4px 0 0",
              fontSize: "13px",
              color: "#4D4D4D",
              textAlign: "center"
            },
            body: {
              padding: "15px 15px 0",
              display: "flex"
            },
            saturation: {
              width: "256px",
              height: "256px",
              position: "relative",
              border: "2px solid #B3B3B3",
              borderBottom: "2px solid #F0F0F0",
              overflow: "hidden"
            },
            hue: {
              position: "relative",
              height: "256px",
              width: "19px",
              marginLeft: "10px",
              border: "2px solid #B3B3B3",
              borderBottom: "2px solid #F0F0F0"
            },
            controls: {
              width: "180px",
              marginLeft: "10px"
            },
            top: {
              display: "flex"
            },
            previews: {
              width: "60px"
            },
            actions: {
              flex: "1",
              marginLeft: "20px"
            }
          }
        }, n))
        return React.createElement("div", {
          style: s.picker,
          className: "photoshop-picker " + o
        }, React.createElement("div", {
          style: s.head
        }, this.props.header), React.createElement("div", {
          style: s.body,
          className: "flexbox-fix"
        }, React.createElement("div", {
          style: s.saturation
        }, React.createElement(An, {
          hsl: this.props.hsl,
          hsv: this.props.hsv,
          pointer: Wi,
          onChange: this.props.onChange
        })), React.createElement("div", {
          style: s.hue
        }, React.createElement(O, {
          direction: "vertical",
          hsl: this.props.hsl,
          pointer: Ki,
          onChange: this.props.onChange
        })), React.createElement("div", {
          style: s.controls
        }, React.createElement("div", {
          style: s.top,
          className: "flexbox-fix"
        }, React.createElement("div", {
          style: s.previews
        }, React.createElement(Yi, {
          rgb: this.props.rgb,
          currentColor: this.state.currentColor
        })), React.createElement("div", {
          style: s.actions
        }, React.createElement(Xi, {
          label: "OK",
          onClick: this.props.onAccept,
          active: true
        }), React.createElement(Xi, {
          label: "Cancel",
          onClick: this.props.onCancel
        }), React.createElement(Qi, {
          onChange: this.props.onChange,
          rgb: this.props.rgb,
          hsv: this.props.hsv,
          hex: this.props.hex
        }))))))
      }
    }
  ])
  return t
}(React.Component)
$i.propTypes = {
  header: $$_$$_50_index.string,
  styles: $$_$$_50_index.object
}
$i.defaultProps = {
  header: "Color Picker",
  styles: {}
}
Fn($i)
var Ji = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$disableAlpha = e.disableAlpha
  var c = $_101_index({
    default: {
      fields: {
        display: "flex",
        paddingTop: "4px"
      },
      single: {
        flex: "1",
        paddingLeft: "6px"
      },
      alpha: {
        flex: "1",
        paddingLeft: "6px"
      },
      double: {
        flex: "2"
      },
      input: {
        width: "80%",
        padding: "4px 10% 3px",
        border: "none",
        boxShadow: "inset 0 0 0 1px #ccc",
        fontSize: "11px"
      },
      label: {
        display: "block",
        textAlign: "center",
        fontSize: "11px",
        color: "#222",
        paddingTop: "3px",
        paddingBottom: "4px",
        textTransform: "capitalize"
      }
    },
    disableAlpha: {
      alpha: {
        display: "none"
      }
    }
  }, {
    disableAlpha: e$disableAlpha
  })
  var u = function (e, i) {
    if (e.hex) {
      if (Tn(e.hex)) {
        e$onChange({
          hex: e.hex,
          source: "hex"
        }, i)
      }
    } else {
      if (e.r || e.g || e.b) {
        e$onChange({
          r: e.r || e$rgb.r,
          g: e.g || e$rgb.g,
          b: e.b || e$rgb.b,
          a: e$rgb.a,
          source: "rgb"
        }, i)
      } else {
        if (e.a) {
          if (e.a < 0) {
            e.a = 0
          } else {
            if (e.a > 100) {
              e.a = 100
            }
          }
          e.a /= 100
          e$onChange({
            h: e$hsl.h,
            s: e$hsl.s,
            l: e$hsl.l,
            a: e.a,
            source: "rgb"
          }, i)
        }
      }
    }
  }
  return React.createElement("div", {
    style: c.fields,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: c.double
  }, React.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "hex",
    value: e$hex.replace("#", ""),
    onChange: u
  })), React.createElement("div", {
    style: c.single
  }, React.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "r",
    value: e$rgb.r,
    onChange: u,
    dragLabel: "true",
    dragMax: "255"
  })), React.createElement("div", {
    style: c.single
  }, React.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "g",
    value: e$rgb.g,
    onChange: u,
    dragLabel: "true",
    dragMax: "255"
  })), React.createElement("div", {
    style: c.single
  }, React.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "b",
    value: e$rgb.b,
    onChange: u,
    dragLabel: "true",
    dragMax: "255"
  })), React.createElement("div", {
    style: c.alpha
  }, React.createElement(b, {
    style: {
      input: c.input,
      label: c.label
    },
    label: "a",
    value: Math.round(100 * e$rgb.a),
    onChange: u,
    dragLabel: "true",
    dragMax: "100"
  })))
}
var Zi = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var eo = function (e) {
  var /* [auto-meaningful-name] */e$colors = e.colors
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var r = undefined === e$onClick ? function () {} : e$onClick
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var s = $_101_index({
    default: {
      colors: {
        margin: "0 -10px",
        padding: "10px 0 0 10px",
        borderTop: "1px solid #eee",
        display: "flex",
        flexWrap: "wrap",
        position: "relative"
      },
      swatchWrap: {
        width: "16px",
        height: "16px",
        margin: "0 10px 10px 0"
      },
      swatch: {
        borderRadius: "3px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
      }
    },
    "no-presets": {
      colors: {
        display: "none"
      }
    }
  }, {
    "no-presets": !e$colors || !e$colors.length
  })
  var c = function (e, t) {
    r({
      hex: e,
      source: "hex"
    }, t)
  }
  return React.createElement("div", {
    style: s.colors,
    className: "flexbox-fix"
  }, e$colors.map(function (e) {
    var t = "string" === typeof e ? {
      color: e
    } : e
    var n = "" + t.color + (t.title || "")
    return React.createElement("div", {
      key: n,
      style: s.swatchWrap
    }, React.createElement(Hn, Zi({}, t, {
      style: s.swatch,
      onClick: c,
      onHover: e$onSwatchHover,
      focusStyle: {
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
      }
    })))
  }))
}
eo.propTypes = {
  colors: $$_$$_50_index.arrayOf($$_$$_50_index.oneOfType([
    $$_$$_50_index.string, $$_$$_50_index.shape({
      color: $$_$$_50_index.string,
      title: $$_$$_50_index.string
    })
  ])).isRequired
}
var to = eo
var no = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var ro = function (e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$rgb = e.rgb
  var /* [auto-meaningful-name] */e$hex = e.hex
  var /* [auto-meaningful-name] */e$hsv = e.hsv
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onSwatchHover = e.onSwatchHover
  var /* [auto-meaningful-name] */e$disableAlpha = e.disableAlpha
  var /* [auto-meaningful-name] */e$presetColors = e.presetColors
  var /* [auto-meaningful-name] */e$renderers = e.renderers
  var /* [auto-meaningful-name] */e$styles = e.styles
  var _ = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var v = undefined === e$className ? "" : e$className
  var m = $_101_index(qt({
    default: no({
      picker: {
        width: e$width,
        padding: "10px 10px 0",
        boxSizing: "initial",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
      },
      saturation: {
        width: "100%",
        paddingBottom: "75%",
        position: "relative",
        overflow: "hidden"
      },
      Saturation: {
        radius: "3px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      controls: {
        display: "flex"
      },
      sliders: {
        padding: "4px 0",
        flex: "1"
      },
      color: {
        width: "24px",
        height: "24px",
        position: "relative",
        marginTop: "4px",
        marginLeft: "4px",
        borderRadius: "3px"
      },
      activeColor: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "2px",
        background: "rgba(" + e$rgb.r + "," + e$rgb.g + "," + e$rgb.b + "," + e$rgb.a + ")",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      hue: {
        position: "relative",
        height: "10px",
        overflow: "hidden"
      },
      Hue: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      alpha: {
        position: "relative",
        height: "10px",
        marginTop: "4px",
        overflow: "hidden"
      },
      Alpha: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      }
    }, _),
    disableAlpha: {
      color: {
        height: "10px"
      },
      hue: {
        height: "10px"
      },
      alpha: {
        display: "none"
      }
    }
  }, _), {
    disableAlpha: e$disableAlpha
  })
  return React.createElement("div", {
    style: m.picker,
    className: "sketch-picker " + v
  }, React.createElement("div", {
    style: m.saturation
  }, React.createElement(An, {
    style: m.Saturation,
    hsl: e$hsl,
    hsv: e$hsv,
    onChange: e$onChange
  })), React.createElement("div", {
    style: m.controls,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: m.sliders
  }, React.createElement("div", {
    style: m.hue
  }, React.createElement(O, {
    style: m.Hue,
    hsl: e$hsl,
    onChange: e$onChange
  })), React.createElement("div", {
    style: m.alpha
  }, React.createElement(g, {
    style: m.Alpha,
    rgb: e$rgb,
    hsl: e$hsl,
    renderers: e$renderers,
    onChange: e$onChange
  }))), React.createElement("div", {
    style: m.color
  }, React.createElement(d, null), React.createElement("div", {
    style: m.activeColor
  }))), React.createElement(Ji, {
    rgb: e$rgb,
    hsl: e$hsl,
    hex: e$hex,
    onChange: e$onChange,
    disableAlpha: e$disableAlpha
  }), React.createElement(to, {
    colors: e$presetColors,
    onClick: e$onChange,
    onSwatchHover: e$onSwatchHover
  }))
}
ro.propTypes = {
  disableAlpha: $$_$$_50_index.bool,
  width: $$_$$_50_index.oneOfType([$$_$$_50_index.string, $$_$$_50_index.number]),
  styles: $$_$$_50_index.object
}
ro.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
}
var io = Fn(ro)
var oo = function (e) {
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$offset = e.offset
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var o = undefined === e$onClick ? function () {} : e$onClick
  var /* [auto-meaningful-name] */e$active = e.active
  var /* [auto-meaningful-name] */e$first = e.first
  var /* [auto-meaningful-name] */e$last = e.last
  var l = $_101_index({
    default: {
      swatch: {
        height: "12px",
        background: "hsl(" + e$hsl.h + ", 50%, " + 100 * e$offset + "%)",
        cursor: "pointer"
      }
    },
    first: {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    last: {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    active: {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, {
    active: e$active,
    first: e$first,
    last: e$last
  })
  return React.createElement("div", {
    style: l.swatch,
    onClick: function (e) {
      return o({
        h: e$hsl.h,
        s: .5,
        l: e$offset,
        source: "hsl"
      }, e)
    }
  })
}
var ao = function (e) {
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var r = $_101_index({
    default: {
      swatches: {
        marginTop: "20px"
      },
      swatch: {
        boxSizing: "border-box",
        width: "20%",
        paddingRight: "1px",
        float: "left"
      },
      clear: {
        clear: "both"
      }
    }
  })
  return React.createElement("div", {
    style: r.swatches
  }, React.createElement("div", {
    style: r.swatch
  }, React.createElement(oo, {
    hsl: e$hsl,
    offset: ".80",
    active: Math.abs(e$hsl.l - .8) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick,
    first: true
  })), React.createElement("div", {
    style: r.swatch
  }, React.createElement(oo, {
    hsl: e$hsl,
    offset: ".65",
    active: Math.abs(e$hsl.l - .65) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick
  })), React.createElement("div", {
    style: r.swatch
  }, React.createElement(oo, {
    hsl: e$hsl,
    offset: ".50",
    active: Math.abs(e$hsl.l - .5) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick
  })), React.createElement("div", {
    style: r.swatch
  }, React.createElement(oo, {
    hsl: e$hsl,
    offset: ".35",
    active: Math.abs(e$hsl.l - .35) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick
  })), React.createElement("div", {
    style: r.swatch
  }, React.createElement(oo, {
    hsl: e$hsl,
    offset: ".20",
    active: Math.abs(e$hsl.l - .2) < .1 && Math.abs(e$hsl.s - .5) < .1,
    onClick: e$onClick,
    last: true
  })), React.createElement("div", {
    style: r.clear
  }))
}
var so = function () {
  var e = $_101_index({
    default: {
      picker: {
        width: "14px",
        height: "14px",
        borderRadius: "6px",
        transform: "translate(-7px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  })
  return React.createElement("div", {
    style: e.picker
  })
}
var co = function (e) {
  var /* [auto-meaningful-name] */e$hsl = e.hsl
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$pointer = e.pointer
  var /* [auto-meaningful-name] */e$styles = e.styles
  var s = undefined === e$styles ? {} : e$styles
  var /* [auto-meaningful-name] */e$className = e.className
  var u = undefined === e$className ? "" : e$className
  var l = $_101_index(qt({
    default: {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, s))
  return React.createElement("div", {
    style: l.wrap || {},
    className: "slider-picker " + u
  }, React.createElement("div", {
    style: l.hue
  }, React.createElement(O, {
    style: l.Hue,
    hsl: e$hsl,
    pointer: e$pointer,
    onChange: e$onChange
  })), React.createElement("div", {
    style: l.swatches
  }, React.createElement(ao, {
    hsl: e$hsl,
    onClick: e$onChange
  })))
}
co.propTypes = {
  styles: $$_$$_50_index.object
}
co.defaultProps = {
  pointer: so,
  styles: {}
}
Fn(co)
export { io }
