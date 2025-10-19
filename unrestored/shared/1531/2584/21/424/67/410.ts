/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410
 */

"use strict";

export { ze as c };
export { Ye as b };
import r = require("color");
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
import i = require("../../../16/index");
import a = require("react");
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
import c = require("../../../5");
import l = require("../../../15");
import u = require("../../../205");
import d = require("../../../9");
import p = require("../../../../../../../src/shared/widget/custom/storage");
import f = require("../../../../../../../src/shared/widget/custom/load");
import h = require("../../../11");
import m = require("../../../8");
var g = function __importDefault(module) {
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
}(m);
import _ = require("../../../90");
import v = require("../../../145");
import b = require("../../../240");
var y = function __importDefault(module) {
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
}(b);
var E = function (e) {
  var t = e.id;
  var n = e.position;
  var r = e.visible;
  var i = e.attributes;
  var a = e.size;
  var l = e.opacity;
  var u = e.onClick;
  var d = i.backgroundColor;
  var p = i.content;
  var f = i.color;
  var m = i.fontFamily;
  var b = i.fontSize;
  var E = i.justifyContent;
  var O = i.textAlign;
  var w = i.overflow;
  var C = undefined === w ? "hidden" : w;
  var T = {
    width: a.width,
    height: a.height,
    minWidth: "".concat(v.m, "px"),
    minHeight: "".concat(v.l, "px"),
    backgroundColor: o()(d).toString(),
    color: o()(f).toString(),
    fontFamily: m,
    fontSize: b,
    justifyContent: E,
    textAlign: O,
    top: n.y,
    left: n.x,
    opacity: undefined === l ? undefined : l / 100,
    overflow: C
  };
  return s.a.createElement("div", {
    id: t,
    "data-widget-type": c.H,
    "data-role": c.M,
    className: g()(_.b, y.a.textWidget, h.a({}, y.a.hide, !r)),
    onClick: function () {
      u();
    },
    style: T
  }, s.a.createElement("span", {
    className: y.a.content
  }, p));
};
import O = require("../../../542");
import w = require("../../index");
import C = require("../../../55");
var T = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.parentId;
  function o() {
    w.emitWidgetEvent(n, "onTextPress", t);
    w.emitTextPress(t);
    C.b.playerWidgetLog({
      widgetId: r ? t.replace(/_\d+$/, "") : t,
      widgetType: n,
      message: "onWidgetPress"
    });
  }
  return r ? s.a.createElement(O.a, Object.assign({}, e, {
    onClick: o
  })) : s.a.createElement(E, Object.assign({}, e, {
    onClick: o
  }));
};
import S = require("../../../543/index");
import I = require("../243");
import A = require("../../../28/index");
var j = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.attributes;
  var o = e.animationRecord;
  var a = r.disabled;
  var l = i.e(function (e) {
    return e.iconFileMap;
  }).get(r.iconId);
  return s.a.createElement(S.a, Object.assign({}, e, {
    iconFile: l,
    onClick: function () {
      if (!a) {
        w.emitButtonPress(t);
      }
      if (!a) {
        w.emitWidgetEvent(n, "onButtonPressPress", t);
      }
      I.b(t, c.d, A.m("click", o));
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onWidgetPress"
      });
    },
    onMouseDown: function () {
      if (!a) {
        w.emitButtonPressIn(t);
      }
      if (!a) {
        w.emitWidgetEvent(n, "onButtonPressPressIn", t);
      }
    },
    onMouseUp: function () {
      if (!a) {
        w.emitButtonPressOut(t);
      }
      if (!a) {
        w.emitWidgetEvent(n, "onButtonPressPressOut", t);
      }
    }
  }));
};
import N = require("../../../6");
import R = require("../../../321");
import k = require("../../../82");
import x = require("../../../60");
import D = require("../../../116");
import M = require("../../../216");
var L = function __importDefault(module) {
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
}(M);
var P = function (e) {
  var t = e.position;
  var n = e.size;
  var r = e.id;
  var o = e.visible;
  var i = e.opacity;
  var l = e.attributes;
  var u = e.iconFileOrUrl;
  var d = e.onClick;
  var p = e.onMouseDown;
  var f = e.onMouseUp;
  var m = l.textVisible;
  var v = l.text;
  var b = l.fontFamily;
  var y = l.maxFontSize;
  var E = l.textColor;
  var O = l.textAlign;
  var w = l.iconVisible;
  var C = l.iconColor;
  var T = l.backgroundMode;
  var S = l.templateMode;
  var I = l.backgroundColor;
  var A = l.backgroundImage;
  var j = l.imageResizeMode;
  var M = l.disabled;
  var P = "true" === m.toString();
  var B = "true" === w.toString();
  var F = P ? O : x.a.CENTER;
  var G = y;
  if (!P) {
    G = k.l;
  }
  var U = 2 * k.r;
  var W = 2 * k.q;
  if (T === D.a.IMAGE) {
    U = 2 * k.j;
    W = 2 * k.i;
  }
  var H = (n.width - U) / 1.5;
  var V = (n.height - W) / 1.5;
  var z = Math.min(H, V, G);
  z = Math.max(z, k.o);
  z = Math.floor(z);
  var Y = a.useMemo(function () {
    return function (e, t, n, r) {
      var o;
      o = {};
      h.a(o, D.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      });
      h.a(o, D.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      });
      h.a(o, D.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      });
      h.a(o, D.b.CIRCLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 2,
        padding: "0 10px"
      });
      return o;
    }(n.height, E, I, M);
  }, [I, M, n.height, E]);
  var K = undefined;
  K = T === D.a.IMAGE ? {
    color: M ? "#7E7E7E" : E,
    backgroundImage: "url(".concat(A, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === j ? "contain" : "100% 100%"
  } : Y[S];
  var q = N.a({
    top: t.y,
    left: t.x,
    height: n.height,
    width: n.width,
    fontSize: z,
    fontFamily: b,
    justifyContent: F,
    opacity: undefined === i ? undefined : i / 100,
    filter: M && T === D.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: T === D.a.TEMPLATE || n.width < 2 * k.j ? "0 ".concat(k.r, "px") : "0 ".concat(k.j, "px")
  }, K);
  return s.a.createElement("button", {
    id: r,
    className: g()(_.b, L.a.buttonWidget, !M && L.a.transform, h.a({}, L.a.hide, !o)),
    "data-role": c.M,
    "data-widget-type": c.z,
    "data-min-width": k.p,
    "data-max-width": k.m,
    "data-min-height": k.n,
    "data-max-height": k.k,
    onClick: function () {
      if (d) {
        d();
      }
    },
    onMouseDown: function () {
      if (p) {
        p();
      }
    },
    onMouseUp: function () {
      if (f) {
        f();
      }
    },
    style: N.a(N.a({}, q), {}, {
      flexDirection: F === x.a.RIGHT ? "row-reverse" : "row"
    })
  }, B && s.a.createElement("div", {
    className: L.a.iconWrapper,
    style: {
      color: M ? T === D.a.TEMPLATE ? K.color : "#7E7E7E" : C
    }
  }, "string" === typeof u ? s.a.createElement("img", {
    style: {
      width: z,
      height: z
    },
    src: u,
    alt: ""
  }) : u && s.a.createElement(R.a, {
    icon: u
  })), P && s.a.createElement("div", {
    className: g()(L.a.textWrapper, B && v && (F === x.a.RIGHT ? L.a.iconToTextRightSpacing : L.a.iconToTextLeftSpacing))
  }, s.a.createElement("div", {
    className: L.a.text,
    style: {
      display: "flex",
      textAlign: F
    }
  }, s.a.createElement("span", null, v))));
};
import B = require("../../../36/345/114");
var F = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.attributes;
  var i = e.animationRecord;
  var l = r.disabled;
  var u = r.textColor;
  var d = r.iconColor;
  var p = r.backgroundColor;
  var f = r.iconId;
  var h = r.backgroundImage;
  var m = B.a(f) || k.c;
  var g = B.b(h) || k.f;
  var _ = a.useMemo(function () {
    try {
      return o()(u.toString()).toString();
    } catch (e) {
      C.b.widgetError({
        widgetId: t,
        widgetType: n,
        message: "player/colorError"
      });
      return u;
    }
  }, [t, u, n]);
  var v = a.useMemo(function () {
    try {
      return o()(d.toString()).toString();
    } catch (e) {
      C.b.widgetError({
        widgetId: t,
        widgetType: n,
        message: "player/colorError"
      });
      return d;
    }
  }, [t, d, n]);
  var b = a.useMemo(function () {
    try {
      return o()(p.toString()).toString();
    } catch (e) {
      C.b.widgetError({
        widgetId: t,
        widgetType: n,
        message: "player/colorError"
      });
      return p;
    }
  }, [p, t, n]);
  return s.a.createElement(P, Object.assign({}, e, {
    iconFileOrUrl: m,
    attributes: N.a(N.a({}, e.attributes), {}, {
      textColor: _,
      iconColor: v,
      backgroundColor: b,
      backgroundImage: g
    }),
    onClick: function () {
      if (!l) {
        w.emitButtonPress(t);
      }
      if (!l) {
        w.emitWidgetEvent(n, "onButtonPressPress", t);
      }
      I.b(t, c.z, A.m("click", i));
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onWidgetPress"
      });
    },
    onMouseDown: function () {
      if (!l) {
        w.emitButtonPressIn(t);
      }
      if (!l) {
        w.emitWidgetEvent(n, "onButtonPressPressIn", t);
      }
    },
    onMouseUp: function () {
      if (!l) {
        w.emitButtonPressOut(t);
      }
      if (!l) {
        w.emitWidgetEvent(n, "onButtonPressPressOut", t);
      }
    }
  }));
};
import G = require("../../../510");
var U = function __importDefault(module) {
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
}(G);
import W = require("../../../429");
import H = require("../../../133/index");
var V = a.memo(function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.position;
  var i = e.visible;
  var l = e.opacity;
  var u = e.size;
  var d = e.parentId;
  var p = e.attributes;
  var f = p.backgroundColor;
  var h = p.resizeMode;
  var m = p.borderRadius;
  var v = p.fileId;
  var b = a.useRef(null);
  var y = B.b(v);
  if (!y) {
    y = d ? H.i : H.m;
  }
  return s.a.createElement("div", {
    id: t,
    className: g()(U.a.imageWidget, _.b),
    "data-role": c.M,
    "data-type": c.v,
    "data-scale-mode": c.p.PROPORTIONAL,
    ref: b,
    onClick: function () {
      w.emitWidgetEvent(n, "onImagePress", t);
      w.emitImagePress(t);
      C.b.playerWidgetLog({
        widgetId: d ? t.replace(/_\d+$/, "") : t,
        widgetType: n,
        message: "onWidgetPress"
      });
    },
    style: {
      top: r.y,
      left: r.x,
      height: d ? "100%" : u.height,
      width: d ? "100%" : u.width,
      visibility: i ? undefined : "hidden",
      pointerEvents: i ? undefined : "none",
      position: d ? "static" : "absolute",
      backgroundColor: o()(f).toString(),
      backgroundImage: "url(".concat(y, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: W.a(h),
      borderRadius: m,
      opacity: undefined === l ? undefined : l / 100
    }
  }, s.a.createElement("img", {
    src: y,
    alt: "",
    style: {
      visibility: "hidden",
      borderRadius: m,
      objectFit: W.b(h)
    }
  }));
});
import z = require("../../../10/index");
import Y = require("../../../77");
import K = require("../../../291");
var q = function __importDefault(module) {
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
}(K);
import X = require("../../../97");
import Q = require("../index");
function Z(e, t) {
  try {
    return o()(e.toString()).alpha(t).toString();
  } catch (n) {
    return "";
  }
}
import J = require("../../../551/index");
var $ = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.animationRecord;
  var o = e.attributes;
  var i = o.options;
  var a = o.disabled;
  var l = o.mode;
  return s.a.createElement(J.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!a && "disabled" !== i[e].state && i.findIndex(function (e) {
        return e.isSelected;
      }) !== e) {
        var o = e + 1;
        w.setRadioWidgetOptionSelectedOrDisabled(t, o, "selected");
        I.b(t, c.C, A.m("click", r, l), e);
        C.b.playerWidgetLog({
          widgetId: t,
          widgetType: n,
          message: "onRadioSelected",
          values: {
            index: o
          }
        });
      }
    }
  }));
};
import ee = require("../../../552/index");
var te = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.attributes;
  var o = r.options;
  var i = r.disabled;
  return s.a.createElement(ee.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!i && "disabled" !== o[e].state) {
        var r = [];
        o.forEach(function (e, t) {
          if (e.isSelected) {
            r.push(t);
          }
        });
        var a = e + 1;
        if (r.includes(e)) {
          w.setCheckboxWidgetOptionUnselected(t, a);
          C.b.playerWidgetLog({
            widgetId: t,
            widgetType: n,
            message: "onCheckboxUnselected",
            values: {
              index: a,
              content: o[e].content
            }
          });
        } else {
          w.setCheckboxWidgetOptionSelected(t, a);
          C.b.playerWidgetLog({
            widgetId: t,
            widgetType: n,
            message: "onCheckboxSelected",
            values: {
              index: a,
              content: o[e].content
            }
          });
        }
      }
    }
  }));
};
import ne = require("../../../544/index");
var re = function (e) {
  var t = e.id;
  var n = e.type;
  return s.a.createElement(ne.a, Object.assign({}, e, {
    onLoad: function () {
      w.emitWebViewWidgetLoaded(t);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onWebViewUrlLoaded"
      });
    },
    onLoading: function () {
      w.emitWebViewWidgetStartLoad(t);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onWebViewUrlStartLoad"
      });
    },
    onError: function () {
      w.emitWebViewWidgetLoadError(t);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onWebViewUrlLoadError"
      });
    }
  }));
};
import oe = require("../../../545/index");
import ie = require("../../../131");
var ae = function (e) {
  var t = e.attributes;
  var n = t.backgroundOpenImage;
  var r = undefined === n ? ie.b : n;
  var o = t.backgroundCloseImage;
  var i = undefined === o ? ie.a : o;
  var a = B.b(r) || ie.b;
  var c = B.b(i) || ie.a;
  return s.a.createElement(oe.a, Object.assign({}, e, {
    attributes: N.a(N.a({}, e.attributes), {}, {
      backgroundCloseImage: c,
      backgroundOpenImage: a
    }),
    onSwitch: function (t) {
      var n = e.id;
      var r = e.type;
      w.setSwitchWidgetState(n, t);
      C.b.playerWidgetLog({
        widgetId: n,
        widgetType: r,
        message: t ? "onSwitchChangeTrue" : "onSwitchChangeFalse"
      });
    }
  }));
};
import se = require("../../../546/index");
import ce = require("../../../148");
var le = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.attributes;
  var o = r.handleImageFileId;
  var i = undefined === o ? ce.c : o;
  var a = r.backgroundImageFileId;
  var c = undefined === a ? ce.a : a;
  var l = r.trackImageFileId;
  var u = undefined === l ? ce.g : l;
  var d = B.b(c) || ce.a;
  var p = B.b(i) || ce.c;
  var f = B.b(u) || ce.g;
  return s.a.createElement(se.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      w.setSliderWidgetValue(t, e, false);
      w.emitSliderWidgetChange(t, e);
    },
    onEndToSlid: function (e) {
      w.emitSliderWidgetEndToSlide(t, e);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onSliderEndSlide",
        values: {
          value: e
        }
      });
    },
    onStartToSlid: function (e) {
      w.emitSliderWidgetStartToSlide(t, e);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: "onSliderStartSlide",
        values: {
          value: e
        }
      });
    },
    handleImageUrl: p,
    backgroundImageUrl: d,
    trackImageUrl: f
  }));
};
import ue = require("../../../129");
import de = require("../../../30");
var pe = function __importDefault(module) {
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
}(de);
import fe = require("../../../13/index");
import he = require("../89");
import me = require("../12");
import ge = require("./index");
var _e = {};
var ve = a.memo(function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.position;
  var o = e.visible;
  var i = e.opacity;
  var a = e.size;
  var l = e.attributes;
  var u = l.backgroundColor;
  var d = l.dataSource;
  var p = l.templateType;
  var f = l.templateRenderType;
  var m = l.templateSlotMap;
  var v = l.disabled;
  for (var b in m) {
    var y = me.b(m[b].widgetId);
    _e[b] = false !== (null === y || undefined === y ? undefined : y.visible);
  }
  function E(e, t) {
    return s.a.createElement(s.a.Fragment, null, p === c.o.ONLY_TITLE && function (e, t) {
      var n;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.flexSC, pe.a.template1, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, _e.titleSlot ? s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (n = m.titleSlot) || undefined === n ? undefined : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })));
    }(e, t), p === c.o.TITLE_AND_SUBTITLE && function (e, t) {
      var n;
      var r;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.flexSC, pe.a.template2, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, _e.titleSlot ? s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (n = m.titleSlot) || undefined === n ? undefined : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (r = m.subTitleSlot) || undefined === r ? undefined : r.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })));
    }(e, t), p === c.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var n;
      var r;
      var o;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.flexSC, pe.a.template3, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.title
      }, _e.imageSlot && s.a.createElement("div", {
        className: pe.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, ge.c(null === (n = m.imageSlot) || undefined === n ? undefined : n.widgetId, "imageSlot", e, t)), _e.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (o = m.subTitleSlot) || undefined === o ? undefined : o.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })));
    }(e, t), p === c.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var n;
      var r;
      var o;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.flexSC, pe.a.template4, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (n = m.avatarSlot) || undefined === n ? undefined : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (o = m.subTitleSlot) || undefined === o ? undefined : o.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })));
    }(e, t), p === c.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var n;
      var r;
      var o;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.flexSC, pe.a.template5, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.imgAndTitleBox
      }, _e.imageSlot && s.a.createElement("div", {
        className: pe.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, ge.c(null === (n = m.imageSlot) || undefined === n ? undefined : n.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (o = m.descSlot) || undefined === o ? undefined : o.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })));
    }(e, t), p === c.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var a;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.template6, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (n = m.avatarSlot) || undefined === n ? undefined : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (o = m.subTitleSlot) || undefined === o ? undefined : o.widgetId, "subTitleSlot", e, t)))), _e.bannerSlot && s.a.createElement("div", {
        className: pe.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, ge.c(null === (i = m.bannerSlot) || undefined === i ? undefined : i.widgetId, "bannerSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (a = m.descSlot) || undefined === a ? undefined : a.widgetId, "descSlot", e, t)));
    }(e, t), p === c.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var a;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e + 1);
        },
        className: g()(pe.a.template6, "tiled" === f ? pe.a.itemTiled : pe.a.itemCard)
      }, _e.bannerSlot && s.a.createElement("div", {
        className: pe.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, ge.c(null === (n = m.bannerSlot) || undefined === n ? undefined : n.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (r = m.avatarSlot) || undefined === r ? undefined : r.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (o = m.titleSlot) || undefined === o ? undefined : o.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (i = m.subTitleSlot) || undefined === i ? undefined : i.widgetId, "subTitleSlot", e, t)))), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (a = m.descSlot) || undefined === a ? undefined : a.widgetId, "descSlot", e, t)));
    }(e, t));
  }
  function O(e, n) {
    if (!v) {
      w.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1);
    }
  }
  function T(e) {
    if (!v) {
      w.emitListViewerPress(t, e);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: e ? "onListViewerIndexPress" : "onWidgetPress",
        values: {
          index: e
        }
      });
    }
  }
  return s.a.createElement("div", {
    onClick: T.bind(null, ""),
    id: t,
    "data-role": c.M,
    "data-widget-type": c.x,
    "data-min-width": ue.m,
    "data-max-width": ue.k,
    "data-min-height": ue.l,
    "data-max-height": ue.j,
    className: g()(_.b, pe.a.listViewerBox, h.a({}, pe.a.hide, !o)),
    style: {
      top: r.y,
      left: r.x,
      width: a.width,
      height: a.height,
      background: u,
      opacity: undefined === i ? undefined : i / 100,
      filter: v ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (d) {
      var e = he.b.get(d);
      if (e) {
        return s.a.createElement(s.a.Fragment, null, e.data.map(function (e, t) {
          return s.a.createElement("div", {
            key: t
          }, E(t, e));
        }));
      }
    }
    return null;
  }());
});
import be = require("../../../172");
import ye = require("../../../45");
var Ee = function __importDefault(module) {
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
}(ye);
var Oe = {};
var we = a.memo(function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.position;
  var o = e.visible;
  var i = e.opacity;
  var a = e.size;
  var l = e.attributes;
  var u = l.backgroundColor;
  var d = l.dataSource;
  var p = l.templateType;
  var f = l.templateRenderType;
  var m = l.templateSlotMap;
  var v = l.disabled;
  for (var b in m) {
    var y = me.b(m[b].widgetId);
    Oe[b] = false !== (null === y || undefined === y ? undefined : y.visible);
  }
  function E(e, t) {
    return s.a.createElement(s.a.Fragment, null, p === c.o.ONLY_TITLE && function (e, t) {
      var n;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.flexSC, Ee.a.template1, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, Oe.titleSlot ? s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (n = m.titleSlot) || undefined === n ? undefined : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })));
    }(e, t), p === c.o.TITLE_AND_SUBTITLE && function (e, t) {
      var n;
      var r;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.flexSC, Ee.a.template2, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, Oe.titleSlot ? s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (n = m.titleSlot) || undefined === n ? undefined : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (r = m.subTitleSlot) || undefined === r ? undefined : r.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })));
    }(e, t), p === c.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var n;
      var r;
      var o;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.flexSC, Ee.a.template3, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.title
      }, Oe.imageSlot && s.a.createElement("div", {
        className: Ee.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, ge.c(null === (n = m.imageSlot) || undefined === n ? undefined : n.widgetId, "imageSlot", e, t)), Oe.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (o = m.subTitleSlot) || undefined === o ? undefined : o.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })));
    }(e, t), p === c.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var n;
      var r;
      var o;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.flexSC, Ee.a.template4, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (n = m.avatarSlot) || undefined === n ? undefined : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (o = m.subTitleSlot) || undefined === o ? undefined : o.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })));
    }(e, t), p === c.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var n;
      var r;
      var o;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.flexSC, Ee.a.template5, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.imgAndTitleBox
      }, Oe.imageSlot && s.a.createElement("div", {
        className: Ee.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, ge.c(null === (n = m.imageSlot) || undefined === n ? undefined : n.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (o = m.descSlot) || undefined === o ? undefined : o.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })));
    }(e, t), p === c.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var a;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.template6, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (n = m.avatarSlot) || undefined === n ? undefined : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (r = m.titleSlot) || undefined === r ? undefined : r.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (o = m.subTitleSlot) || undefined === o ? undefined : o.widgetId, "subTitleSlot", e, t)))), Oe.bannerSlot && s.a.createElement("div", {
        className: Ee.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, ge.c(null === (i = m.bannerSlot) || undefined === i ? undefined : i.widgetId, "bannerSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (a = m.descSlot) || undefined === a ? undefined : a.widgetId, "descSlot", e, t)));
    }(e, t), p === c.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var a;
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation();
          T(e);
        },
        className: g()(Ee.a.template6, "tiled" === f ? Ee.a.itemTiled : Ee.a.itemCard)
      }, Oe.bannerSlot && s.a.createElement("div", {
        className: Ee.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, ge.c(null === (n = m.bannerSlot) || undefined === n ? undefined : n.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (r = m.avatarSlot) || undefined === r ? undefined : r.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (o = m.titleSlot) || undefined === o ? undefined : o.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (i = m.subTitleSlot) || undefined === i ? undefined : i.widgetId, "subTitleSlot", e, t)))), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (a = m.descSlot) || undefined === a ? undefined : a.widgetId, "descSlot", e, t)));
    }(e, t));
  }
  function O(e, n) {
    if (undefined === n) {
      n = 0;
    }
    if (!v) {
      w.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1);
    }
  }
  function T(e) {
    if (undefined === e) {
      e = 0;
    }
    if ("number" === typeof e) {
      e += 1;
    }
    if (!v) {
      w.emitListViewerPress(t, e);
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: n,
        message: e ? "onListViewerIndexPress" : "onWidgetPress",
        values: {
          index: e
        }
      });
    }
  }
  return s.a.createElement("div", {
    onClick: T.bind(null, ""),
    id: t,
    "data-role": c.M,
    "data-widget-type": c.A,
    "data-min-width": be.k,
    "data-max-width": be.i,
    "data-min-height": be.j,
    "data-max-height": be.h,
    className: g()(_.b, Ee.a.listViewerBox, h.a({}, Ee.a.hide, !o)),
    style: {
      top: r.y,
      left: r.x,
      width: a.width,
      height: a.height,
      background: v ? be.f : u,
      opacity: undefined === i ? undefined : i / 100,
      filter: v ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (d) {
      var e;
      var t;
      if ("string" === typeof d) {
        e = null === (t = he.b.get(d)) || undefined === t ? undefined : t.data;
      } else {
        e = he.a.get(d);
      }
      if (e && e.length > 0) {
        return s.a.createElement(s.a.Fragment, null, e.map(function (e, t) {
          return s.a.createElement("div", {
            key: t
          }, E(t, e));
        }));
      }
    }
    return s.a.createElement("div", null, E());
  }());
});
import Ce = require("../../../683/index");
import Te = require("../../../144");
require("../../../760");
function Se(e, t) {
  var n;
  return (null === (n = me.b(t)) || undefined === n ? undefined : n.parentId) === e;
}
function Ie(e, t) {
  var n = a.useMemo(function () {
    return function (e, t) {
      return {
        handleActorClick: function (t) {
          var n = t.target_id;
          if (Se(e, n)) {
            w.unsetPressedActorId(n);
            w.emitActorPress(n, t.data.position);
            C.b.playerWidgetLog({
              widgetId: n,
              widgetType: c.a,
              message: "onWidgetPress"
            });
          }
        },
        handleActorMouseDown: function (n) {
          var r = n.target_id;
          if (Se(e, r)) {
            w.setPressedActorId(r);
            document.addEventListener("mouseup", function () {
              return w.clearPressedActorIds();
            }, {
              once: true
            });
            w.emitActorPressIn(r, n.data.position);
            C.b.playerWidgetLog({
              widgetId: r,
              widgetType: c.a,
              message: "onWidgetPressIn"
            });
            if (t) {
              w.setStageMouse(t, n.data.position);
              ge.a(function () {
                var e = w.getStageMouse(t);
                return w.emitActorPressHoldAndWait(r, e || {
                  x: 0,
                  y: 0
                });
              });
              C.b.playerWidgetLog({
                widgetId: r,
                widgetType: c.a,
                message: "onWidgetPressHold"
              });
            }
          }
        },
        handleActorMouseUp: function (t) {
          var n = t.target_id;
          if (Se(e, n)) {
            w.unsetPressedActorId(n);
            w.emitActorPressOut(n, t.data.position);
            C.b.playerWidgetLog({
              widgetId: n,
              widgetType: c.a,
              message: "onWidgetPressOut"
            });
          }
        }
      };
    }(e, t);
  }, [e, t]);
  var r = n.handleActorClick;
  var o = n.handleActorMouseDown;
  var i = n.handleActorMouseUp;
  a.useEffect(function () {
    if (t) {
      var e = t.events;
      e.add_listener("actor:click", r);
      e.add_listener("actor:mousedown", o);
      e.add_listener("actor:touchstart", o);
      e.add_listener("actor:mouseup", i);
      e.add_listener("actor:touchend", i);
      return function () {
        e.remove_listener("actor:click", r);
        e.remove_listener("actor:mousedown", o);
        e.remove_listener("actor:touchstart", o);
        e.remove_listener("actor:mouseup", i);
        e.remove_listener("actor:touchend", i);
      };
    }
  }, [t, r, o, i]);
}
var Ae = a.memo(function (e) {
  var t = a.useRef(null);
  var n = a.useRef(null);
  var r = a.useRef(null);
  var o = a.useState(false);
  var l = z.a(o, 2);
  var u = l[0];
  var p = l[1];
  var f = a.useState();
  var h = z.a(f, 2);
  var m = h[0];
  var g = h[1];
  var _ = e.id;
  var v = e.position;
  var b = e.visible;
  var y = e.size;
  var E = e.onload;
  var O = e.widgetIds;
  var T = e.opacity;
  var S = undefined === T ? 100 : T;
  var I = e.attributes;
  var A = I.backgroundColor;
  var j = I.backgroundImage;
  var N = I.resizeMode;
  var R = I.coordinateRatio;
  var k = undefined === R ? 2 : R;
  var x = y.width;
  var D = y.height;
  var M = _;
  var L = _;
  var P = i.e(function (e) {
    return e.imageFileMap;
  });
  !function (e, t) {
    a.useEffect(function () {
      if (t) {
        var n = function (n) {
          var r = n.target_id;
          var o = n.data;
          if (r === e) {
            w.setStageMouse(t, o.position);
            w.unsetPressedCanvasId(e);
            w.emitCanvasPress(e, o.position);
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPress"
            });
          }
        };
        var r = function (n) {
          var r = n.target_id;
          var o = n.data;
          if (r === e) {
            w.setPressedCanvasId(e);
            document.addEventListener("mouseup", function () {
              return w.clearPressedCanvasIds();
            }, {
              once: true
            });
            w.setStageMouse(t, o.position);
            w.emitCanvasPressIn(e, o.position);
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressIn"
            });
            ge.a(function () {
              var n = w.getStageMouse(t);
              return w.emitCanvasPressHoldAndWait(e, n || {
                x: 0,
                y: 0
              });
            });
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressHold"
            });
          }
        };
        var o = function (n) {
          var r = n.target_id;
          var o = n.data;
          if (r === e) {
            w.unsetPressedCanvasId(e);
            w.setStageMouse(t, o.position);
            w.emitCanvasPressOut(e, o.position);
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressOut"
            });
          }
        };
        var i = function (e) {};
        var a = function (n) {
          var r = n.target_id;
          var o = n.data;
          if (r === e) {
            w.setStageMouse(t, o.position);
          }
        };
        var s = t.events;
        s.add_listener("stage:click", n);
        s.add_listener("stage:mousedown", r);
        s.add_listener("stage:mouseup", o);
        s.add_listener("stage:touchstart", r);
        s.add_listener("stage:touchend", o);
        s.add_listener("stage:swipe", i);
        s.add_listener("stage:mousemove", a);
        s.add_listener("stage:touchmove", a);
        return function () {
          s.remove_listener("stage:click", n);
          s.remove_listener("stage:mousedown", r);
          s.remove_listener("stage:mouseup", o);
          s.remove_listener("stage:touchstart", r);
          s.remove_listener("stage:touchend", o);
          s.remove_listener("stage:swipe", i);
          s.remove_listener("stage:mousemove", a);
          s.remove_listener("stage:touchmove", a);
        };
      }
    }, [t, e]);
  }(M, m);
  Ie(M, m);
  a.useEffect(function () {
    if (null === n || undefined === n ? undefined : n.current) {
      var e = Ce.a();
      r.current = e;
      e.init({
        renderer: {
          width: x * k,
          height: D * k,
          view: n.current,
          preserveDrawingBuffer: true,
          resolution: 2 / k,
          forceCanvas: true
        },
        id: M
      });
      e.components.init({
        actor_dialog_manager: true
      });
      e.scenes.load_scene(L, "");
      e.scenes.set_current_scene(L);
      g(e);
      w.setStage(M, e);
      e.start_rendering();
      e.stage_animation.init().finally(function () {
        p(true);
      });
      return function () {
        w.deleteStage(M);
      };
    }
  }, []);
  a.useEffect(function () {
    var e = r.current;
    if (e) {
      Te.q(e, x * k, D * k);
    }
  }, [k, x, D]);
  a.useEffect(function () {
    var e = r.current;
    if (e) {
      Te.n(e, A);
    }
  }, [A]);
  a.useEffect(function () {
    var e = r.current;
    if (e) {
      var t;
      if (j) {
        var n = P.get(j);
        if (n) {
          t = d.lb(n);
        } else {
          if (j.includes("://") || j.includes("data:image/")) {
            t = j;
          }
        }
      }
      Te.o(e, t, N);
    }
  }, [j, P, N]);
  var B = O.length;
  var F = 0;
  a.useEffect(function () {
    if (0 === B && E) {
      E(M);
    }
  }, [B, E, M]);
  var G = function (e) {
    if (++F >= B && E) {
      E(M);
    }
  };
  return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
    id: _,
    "data-role": c.M,
    "data-widget-type": c.f,
    ref: t,
    style: {
      top: v.y,
      left: v.x,
      height: y.height,
      width: y.width,
      visibility: b ? undefined : "hidden",
      pointerEvents: b ? undefined : "none",
      opacity: S / 100
    }
  }, s.a.createElement("canvas", {
    ref: n,
    style: {
      width: "100%",
      height: "100%"
    }
  })), u && O.map(function (e) {
    if (r.current) {
      w.setStage(e, r.current);
    }
    return Ye({
      widgetId: e,
      onload: G
    });
  }));
});
import je = require("regenerator-runtime");
var Ne = function __importDefault(module) {
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
}(je);
import Re = require("../../../7");
import ke = require("../../../287");
var xe = function (e) {
  var t = e.id;
  var n = e.parentId;
  var r = e.onload;
  var o = i.e(function (e) {
    return e.widgetMap;
  }).get(t);
  var s = o.position;
  var c = o.attributes;
  var l = c.color;
  var u = c.penSize;
  var d = c.rotation;
  var p = undefined === d ? 0 : d;
  var f = c.cursorShape;
  var h = undefined === f ? ke.a.NONE : f;
  var m = t;
  var g = a.useState(true);
  var _ = z.a(g, 2);
  var v = _[0];
  var b = _[1];
  var y = a.useCallback(Re.a(Ne.a.mark(function e() {
    var n;
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = w.getStage(m)) {
              e.next = 4;
              break;
            }
            console.error("Brush widget get stage error");
            return e.abrupt("return");
          case 4:
            e.next = 6;
            return Te.d(n, m, s, true);
          case 6:
            if (r) {
              r(t);
            }
            Te.l(n, m, l);
            Te.m(n, m, u);
            b(false);
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  })), []);
  a.useEffect(function () {
    y();
  }, [y]);
  var E = a.useCallback(Re.a(Ne.a.mark(function e() {
    var t;
    var r;
    var o;
    var i;
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            if (t = me.b(n)) {
              e.next = 5;
              break;
            }
            return e.abrupt("return");
          case 5:
            if (r = t.attributes.coordinateRatio, o = undefined === r ? 2 : r, i = w.getStage(m)) {
              e.next = 10;
              break;
            }
            console.error("Brush widget get stage error");
            return e.abrupt("return");
          case 10:
            e.next = 12;
            return Te.r(i, m, u, l, h, o, true);
          case 12:
          case "end":
            return e.stop();
        }
      }
    }, e);
  })), [m, l, h, n, u]);
  a.useEffect(function () {
    if (!v) {
      E();
    }
  }, [v, E]);
  a.useLayoutEffect(function () {
    if (!v) {
      var e = w.getActor(t);
      if (e) {
        e.set_rotation(p);
      }
    }
  }, [t, v, p]);
  a.useLayoutEffect(function () {
    if (!v) {
      var e = w.getActor(t);
      if (e) {
        e.set_position(s.x, s.y);
      }
    }
  }, [t, v, s]);
  return null;
};
import De = require("../../../143");
var Me = function () {
  var e = Re.a(Ne.a.mark(function e(t, n, r) {
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(r.map(function (e) {
              return Te.a(t, n, e);
            })));
          case 1:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }));
  return function (t, n, r) {
    return e.apply(this, arguments);
  };
}();
var Le = function (e) {
  var t = e.id;
  var n = e.onload;
  var r = i.e(function (e) {
    return e.widgetMap;
  }).get(t);
  var o = r.opacity;
  var s = r.position;
  var c = r.parentId;
  var l = r.visible;
  var u = r.attributes;
  var d = u.selectedStyleId;
  var p = u.flipped;
  var f = u.scaleAndLock;
  var h = u.scale;
  var m = u.rotation;
  var g = u.actionList;
  var _ = u.pivotToCenter;
  var v = a.useState(false);
  var b = z.a(v, 2);
  var y = b[0];
  var E = b[1];
  var O = t;
  var C = i.e(function (e) {
    return e.imageFileMap;
  });
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (!e) {
        return;
      }
      e.set_position(s.x, s.y);
    }
  }, [t, y, s.x, s.y]);
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (!e) {
        return;
      }
      if (!f) {
        return;
      }
      e.set_scale(f.x, f.y);
    }
  }, [t, y, f]);
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (!e) {
        return;
      }
      e.set_visible(l);
    }
  }, [t, y, l]);
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (e) {
        e.set_current_style(d);
      }
    }
  }, [O, t, y, d]);
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (!e) {
        return;
      }
      e.set_rotation(m);
    }
  }, [t, y, m]);
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (!e) {
        return;
      }
      e.set_alpha((undefined === o ? 100 : o) / 100);
    }
  }, [t, y, o]);
  a.useEffect(function () {
    if (y) {
      var e = w.getActor(t);
      if (!e || !p) {
        return;
      }
      if (p.horizontal !== e.get_horizontal_flipped()) {
        e.set_flipped("horizontal");
      }
      if (p.vertical !== e.get_vertical_flipped()) {
        e.set_flipped("vertical");
      }
    }
  }, [t, y, p]);
  var T = a.useCallback(function () {
    var e = Re.a(Ne.a.mark(function e(t) {
      var r;
      var o;
      var i;
      var a;
      var u;
      var v;
      var b;
      var y;
      var w;
      return Ne.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (c) {
                e.next = 2;
                break;
              }
              return e.abrupt("return");
            case 2:
              if (o = (r = f || (h ? {
                x: h,
                y: h
              } : {
                x: 1,
                y: 1
              })).x, i = r.y, a = t.actors.load_actor({
                actor_id: O,
                parent_scene_id: c,
                position: s,
                scale: {
                  x: o,
                  y: i
                },
                rotation: m
              }), u = a.is_error, v = a.value, !u(v)) {
                e.next = 7;
                break;
              }
              console.error("load_actor error");
              return e.abrupt("return");
            case 7:
              b = [];
              g.forEach(function (e) {
                e.styleList.forEach(function (e) {
                  var t = C.get(e.source);
                  var n = (null === t || undefined === t ? undefined : t.cdnUrl) || (null === t || undefined === t ? undefined : t.source) || "";
                  var r = {
                    id: e.id,
                    source: n
                  };
                  b.push(r);
                });
              });
              e.next = 11;
              return Me(t, v, [].concat(b, [De.h]));
            case 11:
              if (d) {
                v.set_current_style(d);
              } else {
                v.set_current_style(De.h.id);
              }
              v.set_visible(l);
              v.set_draggable(false);
              y = s.x + ((null === _ || undefined === _ ? undefined : _.x) || 0);
              w = s.y + ((null === _ || undefined === _ ? undefined : _.y) || 0);
              v.set_position(y, w);
              if (p) {
                if (p.horizontal !== v.get_horizontal_flipped()) {
                  v.set_flipped("horizontal");
                }
                if (p.vertical !== v.get_vertical_flipped()) {
                  v.set_flipped("vertical");
                }
              }
              v.set_scale(o, i);
              v.set_rotation(m);
              v.set_pivot_by_stage_point(s.x, s.y);
              E(true);
              if (n) {
                n(O);
              }
            case 23:
            case "end":
              return e.stop();
          }
        }
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), []);
  a.useEffect(function () {
    var e = w.getStage(O);
    if (e) {
      T(e);
    } else {
      console.error("ActorWidget get Stage error");
    }
  }, [O, T]);
  return null;
};
import Pe = require("../../../548/index");
var Be = function (e) {
  var t = e.id;
  var n = e.type;
  var r = a.useCallback(function (e) {
    var r = A.k(e);
    w.emitDatePickerSelectDone(t, r.date, r.y, r.m, r.d);
    w.setWidgetAttribute(t, "timeStamp", new Date(e).getTime());
    C.b.playerWidgetLog({
      widgetId: t,
      widgetType: n,
      message: "onWidgetSelected"
    });
  }, [t, n]);
  return s.a.createElement(Pe.a, Object.assign({}, e, {
    onDatePickerChange: r
  }));
};
import Fe = require("../../../549/index");
var Ge = function (e) {
  var t = e.id;
  var n = e.type;
  var r = a.useCallback(function (e) {
    var r = A.k(e);
    w.emitTimePickerSelectDone(t, r.time, r.h, r.min, r.s);
    w.setWidgetAttribute(t, "timeStamp", new Date(e).getTime());
    C.b.playerWidgetLog({
      widgetId: t,
      widgetType: n,
      message: "onWidgetSelected"
    });
  }, [t, n]);
  return s.a.createElement(Fe.a, Object.assign({}, e, {
    onDatePickerChange: r
  }));
};
var Ue;
var We = function () {
  return null;
};
Ue = {};
h.a(Ue, c.H, T);
h.a(Ue, c.d, j);
h.a(Ue, c.z, F);
h.a(Ue, c.v, V);
h.a(Ue, c.w, function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.position;
  var i = e.visible;
  var l = e.opacity;
  var u = e.size;
  var d = e.attributes;
  var p = d.disabled;
  var f = d.placeholder;
  var m = d.errorMessage;
  var _ = d.value;
  var v = d.textAlign;
  var b = undefined === v ? "left" : v;
  var y = d.placeholderColor;
  var E = d.valueColor;
  var O = d.fontFamily;
  var T = d.fontSize;
  var S = d.backgroundMode;
  var A = d.templateMode;
  var j = d.backgroundColor;
  var R = d.backgroundImage;
  var k = d.imageResizeMode;
  var x = u.width;
  var D = u.height;
  var M = a.useState(f);
  var L = z.a(M, 2);
  var P = L[0];
  var F = L[1];
  var G = a.useState(false);
  var U = z.a(G, 2);
  var W = U[0];
  var H = U[1];
  var V = a.useMemo(function () {
    var e = m ? X.d : j;
    try {
      return o()(e.toString()).toString();
    } catch (r) {
      C.b.widgetError({
        widgetId: t,
        widgetType: n,
        message: "player/colorError"
      });
      return "";
    }
  }, [j, m, t, n]);
  var K = B.b(R) || X.a;
  var J = a.useMemo(function () {
    if (!W || S === Y.a.IMAGE) {
      return {};
    }
    var e = undefined !== m ? X.d : V;
    return function (e, t) {
      var n;
      return (n = {}, h.a(n, Y.c.OUTLINED_NORMAL, {
        borderColor: t
      }), h.a(n, Y.c.CONTAINED_NORMAL, {
        background: Z(t, .3)
      }), h.a(n, Y.c.CONTAINED_ROUND, {
        background: Z(t, .3)
      }), h.a(n, Y.c.OUTLINED_FLAT, {
        borderBottomColor: t
      }), n)[e];
    }(A, e);
  }, [W, S, m, V, A]);
  var $ = undefined;
  var ee = a.useMemo(function () {
    return function (e, t, n) {
      var r;
      return (r = {}, h.a(r, Y.c.OUTLINED_NORMAL, {
        background: "rgba(255, 255, 255)",
        borderRadius: "4px",
        border: "2px solid ".concat(Z(t, .5)),
        borderColor: Z(t, .5)
      }), h.a(r, Y.c.CONTAINED_NORMAL, {
        background: Z(t, .14),
        borderRadius: "4px"
      }), h.a(r, Y.c.CONTAINED_ROUND, {
        background: Z(t, .14),
        borderRadius: "".concat(n / 2, "px")
      }), h.a(r, Y.c.OUTLINED_FLAT, {
        borderBottom: "2px solid ".concat(Z(t, .5)),
        borderBottomColor: Z(t, .5)
      }), r)[e];
    }(A, V, D);
  }, [V, D, A]);
  if (S === Y.a.IMAGE) {
    $ = {
      backgroundImage: "url(".concat(K, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "contain" === k ? "contain" : "100% 100%",
      padding: "6px ".concat(20, "px")
    };
  } else {
    $ = N.a(N.a({}, ee), {}, {
      padding: "6px ".concat(14, "px")
    });
  }
  var te = a.useMemo(function () {
    if (p) {
      return function (e) {
        var t;
        return (t = {}, h.a(t, Y.c.OUTLINED_NORMAL, {
          color: "#CCCCCC",
          borderColor: "#E9E9E9"
        }), h.a(t, Y.c.CONTAINED_NORMAL, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), h.a(t, Y.c.CONTAINED_ROUND, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), h.a(t, Y.c.OUTLINED_FLAT, {
          color: "#CCCCCC",
          borderBottomColor: "#E9E9E9"
        }), t)[e];
      }(A);
    }
  }, [A, p]);
  a.useEffect(function () {
    F(f);
  }, [f]);
  a.useEffect(function () {
    var e;
    if (!(null === (e = document.getElementById(t)) || undefined === e)) {
      e.style.setProperty("--input-placeholder-color", y);
    }
  }, [t, y]);
  return s.a.createElement("div", {
    id: t,
    className: g()(q.a.inputWidget, S === Y.a.TEMPLATE && A !== Y.c.OUTLINED_FLAT && q.a.inputWidgetUnderpainting),
    "data-role": c.M,
    "data-type": c.w,
    style: N.a(N.a(N.a({
      top: r.y,
      left: r.x,
      height: D,
      width: x,
      visibility: i ? undefined : "hidden",
      pointerEvents: i ? undefined : "none",
      fontSize: T,
      opacity: undefined === l ? undefined : l / 100,
      filter: p && S === Y.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
      fontFamily: O,
      color: E
    }, $), J), te)
  }, s.a.createElement("div", {
    className: g()(q.a.inputWidgetInputWrapper)
  }, s.a.createElement("input", {
    placeholder: P,
    value: _,
    onChange: function (e) {
      var n = e.target.value;
      Q.Yh(t, n);
      w.emitInputChange(t);
    },
    onBlur: function () {
      if (!p) {
        H(false);
        F(f);
        I.a(t);
        w.emitInputBlur(t);
        C.b.playerWidgetLog({
          widgetId: t,
          widgetType: n,
          message: "onInputBlur"
        });
      }
    },
    onFocus: function () {
      if (!p) {
        F("");
        w.emitInputFocus(t);
        H(true);
        C.b.playerWidgetLog({
          widgetId: t,
          widgetType: n,
          message: "onInputFocus"
        });
      }
    },
    disabled: p,
    style: {
      textAlign: b,
      color: p ? X.o : E,
      fontFamily: O
    }
  }), undefined !== m && s.a.createElement("span", {
    className: q.a.errorMessage,
    style: {
      color: X.d
    }
  }, m), p && s.a.createElement("div", {
    className: q.a.mask
  })));
});
h.a(Ue, c.C, $);
h.a(Ue, c.g, te);
h.a(Ue, c.L, re);
h.a(Ue, c.F, ae);
h.a(Ue, c.E, le);
h.a(Ue, c.x, ve);
h.a(Ue, c.A, we);
h.a(Ue, c.f, Ae);
h.a(Ue, c.c, xe);
h.a(Ue, c.a, Le);
h.a(Ue, c.b, Audio);
h.a(Ue, c.n, Be);
h.a(Ue, c.J, Ge);
h.a(Ue, c.e, We);
h.a(Ue, c.t, We);
h.a(Ue, c.K, We);
h.a(Ue, c.I, We);
h.a(Ue, c.u, We);
h.a(Ue, c.i, We);
h.a(Ue, c.y, We);
h.a(Ue, c.B, We);
h.a(Ue, c.l, We);
h.a(Ue, c.m, We);
h.a(Ue, c.h, We);
h.a(Ue, c.G, We);
h.a(Ue, c.j, We);
h.a(Ue, c.k, We);
var He = Ue;
import Ve = require("../312");
function ze(e) {
  var t = e.widget;
  var n = e.forceRender;
  var r = e.onload;
  var o = t.type;
  if (!t.parentId || n) {
    var i = "";
    if (t.parentId) {
      var a = me.b(t.parentId);
      if ((null === a || undefined === a ? undefined : a.type) && [c.x, c.A].includes(a.type) && o === c.v) {
        i += "coco-child-widget-full";
      }
    }
    if (o in He) {
      var l = He[o];
      return s.a.createElement("div", {
        key: t.id,
        className: i
      }, s.a.createElement(l, Object.assign({}, t, {
        onload: r
      })));
    }
    var u = p.f(o);
    if (!u) {
      console.error("getWidget error", o);
      return null;
    }
    var d = u.types;
    if (f.q(o) && false === d.isInvisibleWidget) {
      var h = w.getWidgetInstance(t.id);
      return h ? s.a.createElement("div", {
        key: t.id,
        id: t.id,
        "data-role": c.M,
        "data-widget-type": t.type,
        style: {
          position: "absolute",
          left: t.position.x,
          top: t.position.y,
          display: t.visible ? "block" : "none",
          width: t.size.width,
          height: t.size.height,
          opacity: undefined === t.opacity ? undefined : t.opacity / 100
        }
      }, h.render()) : (console.error("getWidgetInstance error", o, t.id), null);
    }
  }
}
function Ye(e) {
  var t = e.widgetId;
  var n = e.onload;
  var r = me.b(t);
  return r ? ze({
    widget: r,
    forceRender: true,
    onload: n
  }) : (console.error("getWidget error"), null);
}
var _a;
_a = a.memo(function (e) {
  var t = e.id;
  var n = i.e(function (e) {
    return e.widgetMap;
  });
  var r = a.useRef({
    x: 0,
    y: 0
  });
  var p = i.e(function (e) {
    return e.screenList.find(function (e) {
      return e.id === t;
    });
  });
  var f = i.e(function (e) {
    return e.imageFileMap;
  });
  var h = i.e(function (e) {
    return e.currentScreenParam;
  });
  var m = 0;
  var g = 0;
  var _ = (null === p || undefined === p ? undefined : p.widgetIds) || [];
  _.forEach(function (e) {
    var t = n.get(e);
    if (t && t.type === c.f) {
      m++;
    }
  });
  var v = a.useCallback(function (e) {
    w.emitScreenOpen(e, h);
  }, [h]);
  a.useEffect(function () {
    if (0 === m) {
      v(t);
    }
    var e = function () {
      w.emitGyroscopePhoneShake(t);
      C.b.playerWidgetLog({
        widgetId: "",
        widgetType: c.t,
        message: "onGyroscopeShake"
      });
    };
    w.onDeviceShake(e);
    return function () {
      w.offDeviceShake(e);
    };
  }, [m, t, v]);
  var b = a.useCallback(function (e) {
    if (++g >= m) {
      v(t);
    }
  }, [m, t, g, v]);
  if (p && p.type === c.D) {
    var y = p.backgroundColor;
    var E = p.backgroundImageResizeMode;
    var O = p.backgroundImage;
    var T = f.get(O);
    var S = T ? d.lb(T) : "";
    if (!(S || !O.includes("://") && !O.includes("data:image/"))) {
      S = O;
    }
    var I = [];
    _.forEach(function (e) {
      var t = n.get(e);
      if (t) {
        I.push(t);
      }
    });
    return s.a.createElement("div", {
      id: p.id,
      "data-screen-id": p.id,
      className: "screen-view",
      onClick: function (e) {
        var n = e.target.dataset.screenId;
        if (null === n || undefined === n ? undefined : n.startsWith(c.D)) {
          Ve.n(t);
          w.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
      },
      onMouseDown: function (e) {
        var n = e.target.dataset.screenId;
        if (null === n || undefined === n ? undefined : n.startsWith(c.D)) {
          Ve.k(t);
          document.addEventListener("mouseup", function () {
            return Ve.b();
          }, {
            once: true
          });
          w.emitScreenPressIn(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          ge.a(function () {
            return w.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0);
          });
        }
      },
      onMouseUp: function (e) {
        var n = e.target.dataset.screenId;
        if (null === n || undefined === n ? undefined : n.startsWith(c.D)) {
          Ve.n(t);
          w.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
      },
      onMouseMove: function (e) {
        var t = e.target.dataset.screenId;
        if (null === t || undefined === t ? undefined : t.startsWith(c.D)) {
          r.current.x = e.nativeEvent.offsetX;
          r.current.y = e.nativeEvent.offsetY;
        }
      },
      onTouchStart: function (e) {
        if (l.W()) {
          var n = e.target.dataset.screenId;
          if (null === n || undefined === n ? undefined : n.startsWith(c.D)) {
            w.emitScreenPressIn(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            ge.a(function () {
              return w.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0);
            });
          }
        }
      },
      onTouchMove: function (e) {
        if (l.W()) {
          var t = e.target.dataset.screenId;
          if (null === t || undefined === t ? undefined : t.startsWith(c.D)) {
            r.current.x = e.targetTouches[0].clientX;
            r.current.y = e.targetTouches[0].clientX;
          }
        }
      },
      onTouchEnd: function (e) {
        if (l.W()) {
          var n = e.target.dataset.screenId;
          if (null === n || undefined === n ? undefined : n.startsWith(c.D)) {
            w.emitScreenPressOut(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY);
          }
        }
      },
      style: {
        backgroundColor: o()(y).toString(),
        backgroundImage: S ? "url(".concat(S, ")") : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: E === u.a.STRETCH ? "100% 100%" : E
      }
    }, s.a.createElement("div", {
      className: "screen-view-inner",
      "data-screen-id": p.id
    }, I.map(function (e) {
      return ze({
        widget: e,
        onload: b
      });
    })));
  }
  return null;
});
export { _a as a };
export default _a;