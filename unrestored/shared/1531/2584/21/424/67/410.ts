"use strict";

export { ze as c };
export { Ye as b };
var r = require("../../../51/index");
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
var i = require("../../../16/index");
var a = require("react");
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
var c = require("../../../5");
var l = require("../../../15");
var u = require("../../../205");
var d = require("../../../9");
var p = require("../../../98");
var f = require("../../../36/index");
var h = require("../../../11");
var m = require("../../../8");
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
var _ = require("../../../90");
var v = require("../../../145");
var b = require("../../../240");
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
  var C = void 0 === w ? "hidden" : w;
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
    opacity: void 0 === l ? void 0 : l / 100,
    overflow: C
  };
  return s.a.createElement("div", {
    id: t,
    "data-widget-type": c.H,
    "data-role": c.M,
    className: g()(_.b, y.a.textWidget, Object(h.a)({}, y.a.hide, !r)),
    onClick: function () {
      u();
    },
    style: T
  }, s.a.createElement("span", {
    className: y.a.content
  }, p));
};
var O = require("../../../542");
var w = require("../../index");
var C = require("../../../55");
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
var S = require("../../../543/index");
var I = require("../243");
var A = require("../../../28/index");
var j = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.attributes;
  var o = e.animationRecord;
  var a = r.disabled;
  var l = Object(i.e)(function (e) {
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
      Object(I.b)(t, c.d, Object(A.m)("click", o));
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
var N = require("../../../6");
var R = require("../../../321");
var k = require("../../../82");
var x = require("../../../60");
var D = require("../../../116");
var M = require("../../../216");
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
  var Y = Object(a.useMemo)(function () {
    return function (e, t, n, r) {
      var o;
      o = {};
      Object(h.a)(o, D.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      });
      Object(h.a)(o, D.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      });
      Object(h.a)(o, D.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      });
      Object(h.a)(o, D.b.CIRCLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 2,
        padding: "0 10px"
      });
      return o;
    }(n.height, E, I, M);
  }, [I, M, n.height, E]);
  var K = void 0;
  K = T === D.a.IMAGE ? {
    color: M ? "#7E7E7E" : E,
    backgroundImage: "url(".concat(A, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === j ? "contain" : "100% 100%"
  } : Y[S];
  var q = Object(N.a)({
    top: t.y,
    left: t.x,
    height: n.height,
    width: n.width,
    fontSize: z,
    fontFamily: b,
    justifyContent: F,
    opacity: void 0 === i ? void 0 : i / 100,
    filter: M && T === D.a.IMAGE ? "saturate(0) brightness(1.1)" : void 0,
    padding: T === D.a.TEMPLATE || n.width < 2 * k.j ? "0 ".concat(k.r, "px") : "0 ".concat(k.j, "px")
  }, K);
  return s.a.createElement("button", {
    id: r,
    className: g()(_.b, L.a.buttonWidget, !M && L.a.transform, Object(h.a)({}, L.a.hide, !o)),
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
    style: Object(N.a)(Object(N.a)({}, q), {}, {
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
var B = require("../../../36/345/114");
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
  var m = Object(B.a)(f) || k.c;
  var g = Object(B.b)(h) || k.f;
  var _ = Object(a.useMemo)(function () {
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
  var v = Object(a.useMemo)(function () {
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
  var b = Object(a.useMemo)(function () {
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
    attributes: Object(N.a)(Object(N.a)({}, e.attributes), {}, {
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
      Object(I.b)(t, c.z, Object(A.m)("click", i));
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
var G = require("../../../510");
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
var W = require("../../../429");
var H = require("../../../133/index");
var V = Object(a.memo)(function (e) {
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
  var b = Object(a.useRef)(null);
  var y = Object(B.b)(v);
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
      visibility: i ? void 0 : "hidden",
      pointerEvents: i ? void 0 : "none",
      position: d ? "static" : "absolute",
      backgroundColor: o()(f).toString(),
      backgroundImage: "url(".concat(y, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: Object(W.a)(h),
      borderRadius: m,
      opacity: void 0 === l ? void 0 : l / 100
    }
  }, s.a.createElement("img", {
    src: y,
    alt: "",
    style: {
      visibility: "hidden",
      borderRadius: m,
      objectFit: Object(W.b)(h)
    }
  }));
});
var z = require("../../../10/index");
var Y = require("../../../77");
var K = require("../../../291");
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
var X = require("../../../97");
var Q = require("../index");
function Z(e, t) {
  try {
    return o()(e.toString()).alpha(t).toString();
  } catch (n) {
    return "";
  }
}
var J = require("../../../551/index");
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
        Object(I.b)(t, c.C, Object(A.m)("click", r, l), e);
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
var ee = require("../../../552/index");
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
var ne = require("../../../544/index");
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
var oe = require("../../../545/index");
var ie = require("../../../131");
var ae = function (e) {
  var t = e.attributes;
  var n = t.backgroundOpenImage;
  var r = void 0 === n ? ie.b : n;
  var o = t.backgroundCloseImage;
  var i = void 0 === o ? ie.a : o;
  var a = Object(B.b)(r) || ie.b;
  var c = Object(B.b)(i) || ie.a;
  return s.a.createElement(oe.a, Object.assign({}, e, {
    attributes: Object(N.a)(Object(N.a)({}, e.attributes), {}, {
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
var se = require("../../../546/index");
var ce = require("../../../148");
var le = function (e) {
  var t = e.id;
  var n = e.type;
  var r = e.attributes;
  var o = r.handleImageFileId;
  var i = void 0 === o ? ce.c : o;
  var a = r.backgroundImageFileId;
  var c = void 0 === a ? ce.a : a;
  var l = r.trackImageFileId;
  var u = void 0 === l ? ce.g : l;
  var d = Object(B.b)(c) || ce.a;
  var p = Object(B.b)(i) || ce.c;
  var f = Object(B.b)(u) || ce.g;
  return s.a.createElement(se.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      w.setSliderWidgetValue(t, e, !1);
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
var ue = require("../../../129");
var de = require("../../../30");
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
var fe = require("../../../13/index");
var he = require("../89");
var me = require("../12");
var ge = require("./index");
var _e = {};
var ve = Object(a.memo)(function (e) {
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
    var y = Object(me.b)(m[b].widgetId);
    _e[b] = !1 !== (null === y || void 0 === y ? void 0 : y.visible);
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
      }, Object(ge.c)(null === (n = m.titleSlot) || void 0 === n ? void 0 : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
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
      }, Object(ge.c)(null === (n = m.titleSlot) || void 0 === n ? void 0 : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (r = m.subTitleSlot) || void 0 === r ? void 0 : r.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
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
      }, Object(ge.c)(null === (n = m.imageSlot) || void 0 === n ? void 0 : n.widgetId, "imageSlot", e, t)), _e.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (o = m.subTitleSlot) || void 0 === o ? void 0 : o.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
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
      }, Object(ge.c)(null === (n = m.avatarSlot) || void 0 === n ? void 0 : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (o = m.subTitleSlot) || void 0 === o ? void 0 : o.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
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
      }, Object(ge.c)(null === (n = m.imageSlot) || void 0 === n ? void 0 : n.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Object(ge.c)(null === (o = m.descSlot) || void 0 === o ? void 0 : o.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
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
      }, Object(ge.c)(null === (n = m.avatarSlot) || void 0 === n ? void 0 : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (o = m.subTitleSlot) || void 0 === o ? void 0 : o.widgetId, "subTitleSlot", e, t)))), _e.bannerSlot && s.a.createElement("div", {
        className: pe.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, Object(ge.c)(null === (i = m.bannerSlot) || void 0 === i ? void 0 : i.widgetId, "bannerSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Object(ge.c)(null === (a = m.descSlot) || void 0 === a ? void 0 : a.widgetId, "descSlot", e, t)));
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
      }, Object(ge.c)(null === (n = m.bannerSlot) || void 0 === n ? void 0 : n.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Object(ge.c)(null === (r = m.avatarSlot) || void 0 === r ? void 0 : r.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (o = m.titleSlot) || void 0 === o ? void 0 : o.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (i = m.subTitleSlot) || void 0 === i ? void 0 : i.widgetId, "subTitleSlot", e, t)))), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Object(ge.c)(null === (a = m.descSlot) || void 0 === a ? void 0 : a.widgetId, "descSlot", e, t)));
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
    className: g()(_.b, pe.a.listViewerBox, Object(h.a)({}, pe.a.hide, !o)),
    style: {
      top: r.y,
      left: r.x,
      width: a.width,
      height: a.height,
      background: u,
      opacity: void 0 === i ? void 0 : i / 100,
      filter: v ? "saturate(0)" : void 0,
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
var be = require("../../../172");
var ye = require("../../../45");
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
var we = Object(a.memo)(function (e) {
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
    var y = Object(me.b)(m[b].widgetId);
    Oe[b] = !1 !== (null === y || void 0 === y ? void 0 : y.visible);
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
      }, Object(ge.c)(null === (n = m.titleSlot) || void 0 === n ? void 0 : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
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
      }, Object(ge.c)(null === (n = m.titleSlot) || void 0 === n ? void 0 : n.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (r = m.subTitleSlot) || void 0 === r ? void 0 : r.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
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
      }, Object(ge.c)(null === (n = m.imageSlot) || void 0 === n ? void 0 : n.widgetId, "imageSlot", e, t)), Oe.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (o = m.subTitleSlot) || void 0 === o ? void 0 : o.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
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
      }, Object(ge.c)(null === (n = m.avatarSlot) || void 0 === n ? void 0 : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (o = m.subTitleSlot) || void 0 === o ? void 0 : o.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
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
      }, Object(ge.c)(null === (n = m.imageSlot) || void 0 === n ? void 0 : n.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Object(ge.c)(null === (o = m.descSlot) || void 0 === o ? void 0 : o.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
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
      }, Object(ge.c)(null === (n = m.avatarSlot) || void 0 === n ? void 0 : n.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (r = m.titleSlot) || void 0 === r ? void 0 : r.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (o = m.subTitleSlot) || void 0 === o ? void 0 : o.widgetId, "subTitleSlot", e, t)))), Oe.bannerSlot && s.a.createElement("div", {
        className: Ee.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, Object(ge.c)(null === (i = m.bannerSlot) || void 0 === i ? void 0 : i.widgetId, "bannerSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Object(ge.c)(null === (a = m.descSlot) || void 0 === a ? void 0 : a.widgetId, "descSlot", e, t)));
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
      }, Object(ge.c)(null === (n = m.bannerSlot) || void 0 === n ? void 0 : n.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Object(ge.c)(null === (r = m.avatarSlot) || void 0 === r ? void 0 : r.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Object(ge.c)(null === (o = m.titleSlot) || void 0 === o ? void 0 : o.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Object(ge.c)(null === (i = m.subTitleSlot) || void 0 === i ? void 0 : i.widgetId, "subTitleSlot", e, t)))), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Object(ge.c)(null === (a = m.descSlot) || void 0 === a ? void 0 : a.widgetId, "descSlot", e, t)));
    }(e, t));
  }
  function O(e, n) {
    if (void 0 === n) {
      n = 0;
    }
    if (!v) {
      w.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1);
    }
  }
  function T(e) {
    if (void 0 === e) {
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
    className: g()(_.b, Ee.a.listViewerBox, Object(h.a)({}, Ee.a.hide, !o)),
    style: {
      top: r.y,
      left: r.x,
      width: a.width,
      height: a.height,
      background: v ? be.f : u,
      opacity: void 0 === i ? void 0 : i / 100,
      filter: v ? "saturate(0)" : void 0,
      overflowY: "auto"
    }
  }, function () {
    if (d) {
      var e;
      var t;
      if ("string" === typeof d) {
        e = null === (t = he.b.get(d)) || void 0 === t ? void 0 : t.data;
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
var Ce = require("../../../683/index");
var Te = require("../../../144");
require("../../../760");
function Se(e, t) {
  var n;
  return (null === (n = Object(me.b)(t)) || void 0 === n ? void 0 : n.parentId) === e;
}
function Ie(e, t) {
  var n = Object(a.useMemo)(function () {
    return function (e, t) {
      return {
        handleActorClick: function (t) {
          var n = t.target_id;
          if (Se(e, n)) {
            Object(w.unsetPressedActorId)(n);
            Object(w.emitActorPress)(n, t.data.position);
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
            Object(w.setPressedActorId)(r);
            document.addEventListener("mouseup", function () {
              return Object(w.clearPressedActorIds)();
            }, {
              once: !0
            });
            Object(w.emitActorPressIn)(r, n.data.position);
            C.b.playerWidgetLog({
              widgetId: r,
              widgetType: c.a,
              message: "onWidgetPressIn"
            });
            if (t) {
              Object(w.setStageMouse)(t, n.data.position);
              Object(ge.a)(function () {
                var e = Object(w.getStageMouse)(t);
                return Object(w.emitActorPressHoldAndWait)(r, e || {
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
            Object(w.unsetPressedActorId)(n);
            Object(w.emitActorPressOut)(n, t.data.position);
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
  Object(a.useEffect)(function () {
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
var Ae = Object(a.memo)(function (e) {
  var t = Object(a.useRef)(null);
  var n = Object(a.useRef)(null);
  var r = Object(a.useRef)(null);
  var o = Object(a.useState)(!1);
  var l = Object(z.a)(o, 2);
  var u = l[0];
  var p = l[1];
  var f = Object(a.useState)();
  var h = Object(z.a)(f, 2);
  var m = h[0];
  var g = h[1];
  var _ = e.id;
  var v = e.position;
  var b = e.visible;
  var y = e.size;
  var E = e.onload;
  var O = e.widgetIds;
  var T = e.opacity;
  var S = void 0 === T ? 100 : T;
  var I = e.attributes;
  var A = I.backgroundColor;
  var j = I.backgroundImage;
  var N = I.resizeMode;
  var R = I.coordinateRatio;
  var k = void 0 === R ? 2 : R;
  var x = y.width;
  var D = y.height;
  var M = _;
  var L = _;
  var P = Object(i.e)(function (e) {
    return e.imageFileMap;
  });
  !function (e, t) {
    Object(a.useEffect)(function () {
      if (t) {
        var n = function (n) {
          var r = n.target_id;
          var o = n.data;
          if (r === e) {
            Object(w.setStageMouse)(t, o.position);
            Object(w.unsetPressedCanvasId)(e);
            Object(w.emitCanvasPress)(e, o.position);
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
            Object(w.setPressedCanvasId)(e);
            document.addEventListener("mouseup", function () {
              return Object(w.clearPressedCanvasIds)();
            }, {
              once: !0
            });
            Object(w.setStageMouse)(t, o.position);
            Object(w.emitCanvasPressIn)(e, o.position);
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressIn"
            });
            Object(ge.a)(function () {
              var n = Object(w.getStageMouse)(t);
              return Object(w.emitCanvasPressHoldAndWait)(e, n || {
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
            Object(w.unsetPressedCanvasId)(e);
            Object(w.setStageMouse)(t, o.position);
            Object(w.emitCanvasPressOut)(e, o.position);
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
            Object(w.setStageMouse)(t, o.position);
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
  Object(a.useEffect)(function () {
    if (null === n || void 0 === n ? void 0 : n.current) {
      var e = Object(Ce.a)();
      r.current = e;
      e.init({
        renderer: {
          width: x * k,
          height: D * k,
          view: n.current,
          preserveDrawingBuffer: !0,
          resolution: 2 / k,
          forceCanvas: !0
        },
        id: M
      });
      e.components.init({
        actor_dialog_manager: !0
      });
      e.scenes.load_scene(L, "");
      e.scenes.set_current_scene(L);
      g(e);
      Object(w.setStage)(M, e);
      e.start_rendering();
      e.stage_animation.init().finally(function () {
        p(!0);
      });
      return function () {
        Object(w.deleteStage)(M);
      };
    }
  }, []);
  Object(a.useEffect)(function () {
    var e = r.current;
    if (e) {
      Object(Te.q)(e, x * k, D * k);
    }
  }, [k, x, D]);
  Object(a.useEffect)(function () {
    var e = r.current;
    if (e) {
      Object(Te.n)(e, A);
    }
  }, [A]);
  Object(a.useEffect)(function () {
    var e = r.current;
    if (e) {
      var t;
      if (j) {
        var n = P.get(j);
        if (n) {
          t = Object(d.lb)(n);
        } else {
          if (j.includes("://") || j.includes("data:image/")) {
            t = j;
          }
        }
      }
      Object(Te.o)(e, t, N);
    }
  }, [j, P, N]);
  var B = O.length;
  var F = 0;
  Object(a.useEffect)(function () {
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
      visibility: b ? void 0 : "hidden",
      pointerEvents: b ? void 0 : "none",
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
      Object(w.setStage)(e, r.current);
    }
    return Ye({
      widgetId: e,
      onload: G
    });
  }));
});
var je = require("../../../1/index");
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
var Re = require("../../../7");
var ke = require("../../../287");
var xe = function (e) {
  var t = e.id;
  var n = e.parentId;
  var r = e.onload;
  var o = Object(i.e)(function (e) {
    return e.widgetMap;
  }).get(t);
  var s = o.position;
  var c = o.attributes;
  var l = c.color;
  var u = c.penSize;
  var d = c.rotation;
  var p = void 0 === d ? 0 : d;
  var f = c.cursorShape;
  var h = void 0 === f ? ke.a.NONE : f;
  var m = t;
  var g = Object(a.useState)(!0);
  var _ = Object(z.a)(g, 2);
  var v = _[0];
  var b = _[1];
  var y = Object(a.useCallback)(Object(Re.a)(Ne.a.mark(function e() {
    var n;
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = Object(w.getStage)(m)) {
              e.next = 4;
              break;
            }
            console.error("Brush widget get stage error");
            return e.abrupt("return");
          case 4:
            e.next = 6;
            return Object(Te.d)(n, m, s, !0);
          case 6:
            if (r) {
              r(t);
            }
            Object(Te.l)(n, m, l);
            Object(Te.m)(n, m, u);
            b(!1);
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  })), []);
  Object(a.useEffect)(function () {
    y();
  }, [y]);
  var E = Object(a.useCallback)(Object(Re.a)(Ne.a.mark(function e() {
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
            if (t = Object(me.b)(n)) {
              e.next = 5;
              break;
            }
            return e.abrupt("return");
          case 5:
            if (r = t.attributes.coordinateRatio, o = void 0 === r ? 2 : r, i = Object(w.getStage)(m)) {
              e.next = 10;
              break;
            }
            console.error("Brush widget get stage error");
            return e.abrupt("return");
          case 10:
            e.next = 12;
            return Object(Te.r)(i, m, u, l, h, o, !0);
          case 12:
          case "end":
            return e.stop();
        }
      }
    }, e);
  })), [m, l, h, n, u]);
  Object(a.useEffect)(function () {
    if (!v) {
      E();
    }
  }, [v, E]);
  Object(a.useLayoutEffect)(function () {
    if (!v) {
      var e = Object(w.getActor)(t);
      if (e) {
        e.set_rotation(p);
      }
    }
  }, [t, v, p]);
  Object(a.useLayoutEffect)(function () {
    if (!v) {
      var e = Object(w.getActor)(t);
      if (e) {
        e.set_position(s.x, s.y);
      }
    }
  }, [t, v, s]);
  return null;
};
var De = require("../../../143");
var Me = function () {
  var e = Object(Re.a)(Ne.a.mark(function e(t, n, r) {
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(r.map(function (e) {
              return Object(Te.a)(t, n, e);
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
  var r = Object(i.e)(function (e) {
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
  var v = Object(a.useState)(!1);
  var b = Object(z.a)(v, 2);
  var y = b[0];
  var E = b[1];
  var O = t;
  var C = Object(i.e)(function (e) {
    return e.imageFileMap;
  });
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
      if (!e) {
        return;
      }
      e.set_position(s.x, s.y);
    }
  }, [t, y, s.x, s.y]);
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
      if (!e) {
        return;
      }
      if (!f) {
        return;
      }
      e.set_scale(f.x, f.y);
    }
  }, [t, y, f]);
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
      if (!e) {
        return;
      }
      e.set_visible(l);
    }
  }, [t, y, l]);
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
      if (e) {
        e.set_current_style(d);
      }
    }
  }, [O, t, y, d]);
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
      if (!e) {
        return;
      }
      e.set_rotation(m);
    }
  }, [t, y, m]);
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
      if (!e) {
        return;
      }
      e.set_alpha((void 0 === o ? 100 : o) / 100);
    }
  }, [t, y, o]);
  Object(a.useEffect)(function () {
    if (y) {
      var e = Object(w.getActor)(t);
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
  var T = Object(a.useCallback)(function () {
    var e = Object(Re.a)(Ne.a.mark(function e(t) {
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
                  var n = (null === t || void 0 === t ? void 0 : t.cdnUrl) || (null === t || void 0 === t ? void 0 : t.source) || "";
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
              v.set_draggable(!1);
              y = s.x + ((null === _ || void 0 === _ ? void 0 : _.x) || 0);
              w = s.y + ((null === _ || void 0 === _ ? void 0 : _.y) || 0);
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
              E(!0);
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
  Object(a.useEffect)(function () {
    var e = Object(w.getStage)(O);
    if (e) {
      T(e);
    } else {
      console.error("ActorWidget get Stage error");
    }
  }, [O, T]);
  return null;
};
var Pe = require("../../../548/index");
var Be = function (e) {
  var t = e.id;
  var n = e.type;
  var r = Object(a.useCallback)(function (e) {
    var r = Object(A.k)(e);
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
var Fe = require("../../../549/index");
var Ge = function (e) {
  var t = e.id;
  var n = e.type;
  var r = Object(a.useCallback)(function (e) {
    var r = Object(A.k)(e);
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
Object(h.a)(Ue, c.H, T);
Object(h.a)(Ue, c.d, j);
Object(h.a)(Ue, c.z, F);
Object(h.a)(Ue, c.v, V);
Object(h.a)(Ue, c.w, function (e) {
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
  var b = void 0 === v ? "left" : v;
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
  var M = Object(a.useState)(f);
  var L = Object(z.a)(M, 2);
  var P = L[0];
  var F = L[1];
  var G = Object(a.useState)(!1);
  var U = Object(z.a)(G, 2);
  var W = U[0];
  var H = U[1];
  var V = Object(a.useMemo)(function () {
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
  var K = Object(B.b)(R) || X.a;
  var J = Object(a.useMemo)(function () {
    if (!W || S === Y.a.IMAGE) {
      return {};
    }
    var e = void 0 !== m ? X.d : V;
    return function (e, t) {
      var n;
      return (n = {}, Object(h.a)(n, Y.c.OUTLINED_NORMAL, {
        borderColor: t
      }), Object(h.a)(n, Y.c.CONTAINED_NORMAL, {
        background: Z(t, .3)
      }), Object(h.a)(n, Y.c.CONTAINED_ROUND, {
        background: Z(t, .3)
      }), Object(h.a)(n, Y.c.OUTLINED_FLAT, {
        borderBottomColor: t
      }), n)[e];
    }(A, e);
  }, [W, S, m, V, A]);
  var $ = void 0;
  var ee = Object(a.useMemo)(function () {
    return function (e, t, n) {
      var r;
      return (r = {}, Object(h.a)(r, Y.c.OUTLINED_NORMAL, {
        background: "rgba(255, 255, 255)",
        borderRadius: "4px",
        border: "2px solid ".concat(Z(t, .5)),
        borderColor: Z(t, .5)
      }), Object(h.a)(r, Y.c.CONTAINED_NORMAL, {
        background: Z(t, .14),
        borderRadius: "4px"
      }), Object(h.a)(r, Y.c.CONTAINED_ROUND, {
        background: Z(t, .14),
        borderRadius: "".concat(n / 2, "px")
      }), Object(h.a)(r, Y.c.OUTLINED_FLAT, {
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
    $ = Object(N.a)(Object(N.a)({}, ee), {}, {
      padding: "6px ".concat(14, "px")
    });
  }
  var te = Object(a.useMemo)(function () {
    if (p) {
      return function (e) {
        var t;
        return (t = {}, Object(h.a)(t, Y.c.OUTLINED_NORMAL, {
          color: "#CCCCCC",
          borderColor: "#E9E9E9"
        }), Object(h.a)(t, Y.c.CONTAINED_NORMAL, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), Object(h.a)(t, Y.c.CONTAINED_ROUND, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), Object(h.a)(t, Y.c.OUTLINED_FLAT, {
          color: "#CCCCCC",
          borderBottomColor: "#E9E9E9"
        }), t)[e];
      }(A);
    }
  }, [A, p]);
  Object(a.useEffect)(function () {
    F(f);
  }, [f]);
  Object(a.useEffect)(function () {
    var e;
    if (!(null === (e = document.getElementById(t)) || void 0 === e)) {
      e.style.setProperty("--input-placeholder-color", y);
    }
  }, [t, y]);
  return s.a.createElement("div", {
    id: t,
    className: g()(q.a.inputWidget, S === Y.a.TEMPLATE && A !== Y.c.OUTLINED_FLAT && q.a.inputWidgetUnderpainting),
    "data-role": c.M,
    "data-type": c.w,
    style: Object(N.a)(Object(N.a)(Object(N.a)({
      top: r.y,
      left: r.x,
      height: D,
      width: x,
      visibility: i ? void 0 : "hidden",
      pointerEvents: i ? void 0 : "none",
      fontSize: T,
      opacity: void 0 === l ? void 0 : l / 100,
      filter: p && S === Y.a.IMAGE ? "saturate(0) brightness(1.1)" : void 0,
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
      Object(Q.Yh)(t, n);
      w.emitInputChange(t);
    },
    onBlur: function () {
      if (!p) {
        H(!1);
        F(f);
        Object(I.a)(t);
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
        H(!0);
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
  }), void 0 !== m && s.a.createElement("span", {
    className: q.a.errorMessage,
    style: {
      color: X.d
    }
  }, m), p && s.a.createElement("div", {
    className: q.a.mask
  })));
});
Object(h.a)(Ue, c.C, $);
Object(h.a)(Ue, c.g, te);
Object(h.a)(Ue, c.L, re);
Object(h.a)(Ue, c.F, ae);
Object(h.a)(Ue, c.E, le);
Object(h.a)(Ue, c.x, ve);
Object(h.a)(Ue, c.A, we);
Object(h.a)(Ue, c.f, Ae);
Object(h.a)(Ue, c.c, xe);
Object(h.a)(Ue, c.a, Le);
Object(h.a)(Ue, c.b, Audio);
Object(h.a)(Ue, c.n, Be);
Object(h.a)(Ue, c.J, Ge);
Object(h.a)(Ue, c.e, We);
Object(h.a)(Ue, c.t, We);
Object(h.a)(Ue, c.K, We);
Object(h.a)(Ue, c.I, We);
Object(h.a)(Ue, c.u, We);
Object(h.a)(Ue, c.i, We);
Object(h.a)(Ue, c.y, We);
Object(h.a)(Ue, c.B, We);
Object(h.a)(Ue, c.l, We);
Object(h.a)(Ue, c.m, We);
Object(h.a)(Ue, c.h, We);
Object(h.a)(Ue, c.G, We);
Object(h.a)(Ue, c.j, We);
Object(h.a)(Ue, c.k, We);
var He = Ue;
var Ve = require("../312");
function ze(e) {
  var t = e.widget;
  var n = e.forceRender;
  var r = e.onload;
  var o = t.type;
  if (!t.parentId || n) {
    var i = "";
    if (t.parentId) {
      var a = Object(me.b)(t.parentId);
      if ((null === a || void 0 === a ? void 0 : a.type) && [c.x, c.A].includes(a.type) && o === c.v) {
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
    if (Object(f.q)(o) && !1 === d.isInvisibleWidget) {
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
          opacity: void 0 === t.opacity ? void 0 : t.opacity / 100
        }
      }, h.render()) : (console.error("getWidgetInstance error", o, t.id), null);
    }
  }
}
function Ye(e) {
  var t = e.widgetId;
  var n = e.onload;
  var r = Object(me.b)(t);
  return r ? ze({
    widget: r,
    forceRender: !0,
    onload: n
  }) : (console.error("getWidget error"), null);
}
var _a;
_a = Object(a.memo)(function (e) {
  var t = e.id;
  var n = Object(i.e)(function (e) {
    return e.widgetMap;
  });
  var r = Object(a.useRef)({
    x: 0,
    y: 0
  });
  var p = Object(i.e)(function (e) {
    return e.screenList.find(function (e) {
      return e.id === t;
    });
  });
  var f = Object(i.e)(function (e) {
    return e.imageFileMap;
  });
  var h = Object(i.e)(function (e) {
    return e.currentScreenParam;
  });
  var m = 0;
  var g = 0;
  var _ = (null === p || void 0 === p ? void 0 : p.widgetIds) || [];
  _.forEach(function (e) {
    var t = n.get(e);
    if (t && t.type === c.f) {
      m++;
    }
  });
  var v = Object(a.useCallback)(function (e) {
    w.emitScreenOpen(e, h);
  }, [h]);
  Object(a.useEffect)(function () {
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
  var b = Object(a.useCallback)(function (e) {
    if (++g >= m) {
      v(t);
    }
  }, [m, t, g, v]);
  if (p && p.type === c.D) {
    var y = p.backgroundColor;
    var E = p.backgroundImageResizeMode;
    var O = p.backgroundImage;
    var T = f.get(O);
    var S = T ? Object(d.lb)(T) : "";
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
        if (null === n || void 0 === n ? void 0 : n.startsWith(c.D)) {
          Object(Ve.n)(t);
          w.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
      },
      onMouseDown: function (e) {
        var n = e.target.dataset.screenId;
        if (null === n || void 0 === n ? void 0 : n.startsWith(c.D)) {
          Object(Ve.k)(t);
          document.addEventListener("mouseup", function () {
            return Object(Ve.b)();
          }, {
            once: !0
          });
          w.emitScreenPressIn(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          Object(ge.a)(function () {
            return w.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0);
          });
        }
      },
      onMouseUp: function (e) {
        var n = e.target.dataset.screenId;
        if (null === n || void 0 === n ? void 0 : n.startsWith(c.D)) {
          Object(Ve.n)(t);
          w.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
      },
      onMouseMove: function (e) {
        var t = e.target.dataset.screenId;
        if (null === t || void 0 === t ? void 0 : t.startsWith(c.D)) {
          r.current.x = e.nativeEvent.offsetX;
          r.current.y = e.nativeEvent.offsetY;
        }
      },
      onTouchStart: function (e) {
        if (Object(l.W)()) {
          var n = e.target.dataset.screenId;
          if (null === n || void 0 === n ? void 0 : n.startsWith(c.D)) {
            w.emitScreenPressIn(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            Object(ge.a)(function () {
              return w.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0);
            });
          }
        }
      },
      onTouchMove: function (e) {
        if (Object(l.W)()) {
          var t = e.target.dataset.screenId;
          if (null === t || void 0 === t ? void 0 : t.startsWith(c.D)) {
            r.current.x = e.targetTouches[0].clientX;
            r.current.y = e.targetTouches[0].clientX;
          }
        }
      },
      onTouchEnd: function (e) {
        if (Object(l.W)()) {
          var n = e.target.dataset.screenId;
          if (null === n || void 0 === n ? void 0 : n.startsWith(c.D)) {
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