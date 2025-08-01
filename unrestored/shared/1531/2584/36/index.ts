"use strict";

export { B as e };
export { W as r };
export { V as v };
export { z as s };
export { q as t };
export { Z as u };
export { $ as x };
export { te as w };
export { re as k };
export { oe as l };
export { ae as p };
export { se as n };
export { ce as m };
export { le as o };
export { ue as j };
export { de as h };
export { pe as f };
export { fe as g };
export { he as i };
export { M as c };
export { P as d };
export { d as q } from "../79";
export { me as a };
export { ge as b };
var r;
var o = require("../1/index");
var i = (module => {
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
})(o);
var a = require("../27");
var s = require("./461");
var c = require("../25/index");
var l = require("../7");
var u = require("../6");
var d = require("./483/index");
var p = require("../51/index");
var f = (module => {
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
})(p);
var h = require("../0/index");
var m = (module => {
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
})(h);
var g = require("../31/index");
var _ = require("../41");
var v = require("../227/index");
var b = require("../60");
var y = require("../9");
var E = require("../23");
var O = require("../49/index");
var w = require("./345/index");
var C = require("../38/index");
var T = require("../2/index");
var S = require("../15/index");
var I = require("../53");
var A = require("../182");
var j = require("../233/index");
var N = require("../40");
var R = require("../21/index");
var k = require("../55");
var x = require("../35/85");
var D = require("../79");
var M = function () {
  function e(t) {
    Object(a.a)(this, e);
    this.__widgetId = void 0;
    this.__widgetType = void 0;
    this.__widgetId = t.__widgetId;
    this.__widgetType = t.__widgetType;
  }
  Object(N.a)(e, [{
    key: "emit",
    value: function (e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      R.emitWidgetEvent.apply(void 0, [this.__widgetType, e, this.__widgetId].concat(n));
    }
  }, {
    key: "widgetLog",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = e;
      if (!Object(D.d)(this.__widgetType)) {
        n = Object(x.b)(this.__widgetType, e);
      }
      k.b.widgetLog({
        widgetId: this.__widgetId,
        widgetType: this.__widgetType,
        message: n,
        values: t
      });
    }
  }, {
    key: "widgetWarn",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = e;
      if (!Object(D.d)(this.__widgetType)) {
        n = Object(x.b)(this.__widgetType, e);
      }
      k.b.widgetWarn({
        widgetId: this.__widgetId,
        widgetType: this.__widgetType,
        message: n,
        values: t
      });
    }
  }, {
    key: "widgetError",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = e;
      if (!Object(D.d)(this.__widgetType)) {
        n = Object(x.b)(this.__widgetType, e);
      }
      k.b.widgetError({
        widgetId: this.__widgetId,
        widgetType: this.__widgetType,
        message: n,
        values: t
      });
    }
  }, {
    key: "widgetInterrupt",
    value: function (e) {
      throw Error(e);
    }
  }]);
  return e;
}();
var L = require("../98");
!function (e) {
  e[e.EVENTORDER = 1e4] = "EVENTORDER";
  e[e.METHODORDER = 2e4] = "METHODORDER";
  e[e.SETORDER = 3e4] = "SETORDER";
  e[e.GETORDER = 4e4] = "GETORDER";
}(r || (r = {}));
var P = function () {
  function e(t) {
    Object(a.a)(this, e);
    this.__widgetId = void 0;
    this.__widgetType = void 0;
    this.__width = void 0;
    this.__height = void 0;
    this.__widgetId = t.__widgetId;
    this.__widgetType = t.__widgetType;
    this.__width = t.__width;
    this.__height = t.__height;
  }
  Object(N.a)(e, [{
    key: "emit",
    value: function (e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      R.emitWidgetEvent.apply(void 0, [this.__widgetType, e, this.__widgetId].concat(n));
    }
  }, {
    key: "setProps",
    value: function (e) {
      try {
        for (var t in e) Object(R.setProperty)(this.__widgetId, t, e[t]);
      } catch (n) {
        console.error("setProps error", n);
      }
    }
  }, {
    key: "widgetLog",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = e;
      if (!Object(D.d)(this.__widgetType)) {
        n = Object(x.b)(this.__widgetType, e);
      }
      k.b.widgetLog({
        widgetId: this.__widgetId,
        widgetType: this.__widgetType,
        message: n,
        values: t
      });
    }
  }, {
    key: "widgetWarn",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = e;
      if (!Object(D.d)(this.__widgetType)) {
        n = Object(x.b)(this.__widgetType, e);
      }
      k.b.widgetWarn({
        widgetId: this.__widgetId,
        widgetType: this.__widgetType,
        message: n,
        values: t
      });
    }
  }, {
    key: "widgetError",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = e;
      if (!Object(D.d)(this.__widgetType)) {
        n = Object(x.b)(this.__widgetType, e);
      }
      k.b.widgetError({
        widgetId: this.__widgetId,
        widgetType: this.__widgetType,
        message: n,
        values: t
      });
    }
  }, {
    key: "render",
    value: function () {
      return null;
    }
  }]);
  return e;
}();
var B = function (e, t, n, o) {
  var i = [];
  var a = [];
  var s = [];
  var c = [];
  var l = [];
  var u = [];
  var d = [];
  n.methods.forEach(function (n) {
    var i = n.key;
    var a = n.blockOptions;
    var s = void 0 === a ? {} : a;
    if (!1 !== s.generateBlock) {
      var c = s.order || r.METHODORDER + l.length + 1;
      var u = "";
      if (s.line) {
        var p = "flyout-line-".concat(t, "-method-").concat(i);
        d.push({
          lineLabel: p,
          text: s.line
        });
        u = '<label type="'.concat(p, '"></label>');
      }
      u += '\n    <block type="widget_method" uncache="true">\n      <mutation\n        widget_type="'.concat(t, '"\n        is_any_widget="').concat(o, '"\n        method="').concat(i, '">\n      </mutation>\n      <field name="WIDGET_ID">').concat(e, "</field>\n    </block>");
      if (s.space) {
        u += '<sep gap="'.concat(s.space, '"></sep>');
      }
      l.push({
        xml: u,
        order: c
      });
    }
  });
  n.properties.forEach(function (n) {
    var s;
    var c;
    var l;
    var u;
    var p = n.key;
    var f = n.blockOptions;
    var h = void 0 === f ? {} : f;
    if (!1 !== h.generateBlock && !1 !== (null === (s = h.getter) || void 0 === s ? void 0 : s.generateBlock)) {
      var m = (null === (c = h.getter) || void 0 === c ? void 0 : c.order) || r.GETORDER + i.length + 1;
      var g = "";
      if (null === (l = h.getter) || void 0 === l ? void 0 : l.line) {
        var _ = "flyout-line-".concat(t, "-property-").concat(p, "-getter");
        d.push({
          lineLabel: _,
          text: h.getter.line
        });
        g = '<label type="'.concat(_, '"></label>');
      }
      g += '\n      <block type="widget_get" uncache="true">\n        <mutation\n          widget_type="'.concat(t, '"\n          is_any_widget="').concat(o, '"\n          property="').concat(p, '">\n        </mutation>\n        <field name="WIDGET_ID">').concat(e, "</field>\n      </block>");
      if (null === (u = h.getter) || void 0 === u ? void 0 : u.space) {
        g += '<sep gap="'.concat(h.getter.space, '"></sep>');
      }
      if ("__visible" === p || "__disabled" === p) {
        a.push({
          xml: g,
          order: m + 1e3
        });
      } else {
        i.push({
          xml: g,
          order: m
        });
      }
    }
  });
  n.properties.forEach(function (n) {
    var i;
    var a;
    var l;
    var u;
    var p = n.key;
    var f = n.readonly;
    var h = n.blockOptions;
    var m = void 0 === h ? {} : h;
    var g = !0;
    if (f && (g = !1), "boolean" === typeof m.generateBlock && (g = m.generateBlock), m.setter && (g = !0), !1 === (null === (i = m.setter) || void 0 === i ? void 0 : i.generateBlock) && (g = !1), g) {
      var _ = (null === (a = m.setter) || void 0 === a ? void 0 : a.order) || r.SETORDER + s.length + 1;
      var v = "";
      if (null === (l = m.setter) || void 0 === l ? void 0 : l.line) {
        var b = "flyout-line-".concat(t, "-property-").concat(p, "-setter");
        d.push({
          lineLabel: b,
          text: m.setter.line
        });
        v = '<label type="'.concat(b, '"></label>');
      }
      v += '\n      <block type="widget_set" uncache="true">\n        <mutation\n          widget_type="'.concat(t, '"\n          is_any_widget="').concat(o, '"\n          property="').concat(p, '">\n        </mutation>\n        <field name="WIDGET_ID">').concat(e, "</field>\n      </block>");
      if (null === (u = m.setter) || void 0 === u ? void 0 : u.space) {
        v += '<sep gap="'.concat(m.setter.space, '"></sep>');
      }
      if ("__visible" === p || "__disabled" === p) {
        c.push({
          xml: v,
          order: _ + 1e3
        });
      } else {
        s.push({
          xml: v,
          order: _
        });
      }
    }
  });
  n.events.forEach(function (n) {
    var i = n.key;
    var a = n.blockOptions;
    var s = void 0 === a ? {} : a;
    var c = s.order || r.EVENTORDER + u.length + 1;
    var l = "";
    if (s.line) {
      var p = "flyout-line-".concat(t, "-event-").concat(i);
      d.push({
        lineLabel: p,
        text: s.line
      });
      l = '<label type="'.concat(p, '"></label>');
    }
    l += '\n    <block type="widget_event" uncache="true">\n      <mutation\n        widget_type="'.concat(t, '"\n        is_any_widget="').concat(o, '"\n        event="').concat(i, '">\n      </mutation>\n      <field name="WIDGET_ID">').concat(e, "</field>\n    </block>");
    u.push({
      xml: l,
      order: c
    });
  });
  if (u.length) {
    u.push({
      xml: y.k,
      order: r.EVENTORDER + 9999
    });
  }
  if (l.length) {
    l.push({
      xml: y.k,
      order: r.METHODORDER + 9999
    });
  }
  if (c.length) {
    s.push.apply(s, c);
  }
  if (s.length) {
    s.push({
      xml: y.k,
      order: r.SETORDER + 9999
    });
  }
  if (a.length) {
    a.unshift({
      xml: y.k,
      order: r.GETORDER + 500
    });
  }
  Object(y.x)(d, t);
  return [].concat(u, l, s, i, a).sort(function (e, t) {
    return e.order - t.order;
  }).map(function (e) {
    return e.xml;
  });
};
function F() {}
function G(e, t) {
  var n;
  var r = e.type;
  var o = e.icon;
  var i = e.properties;
  var a = e.isGlobalWidget;
  var s = void 0 === a || a;
  var c = e.isInvisibleWidget;
  var l = void 0 === c || c;
  var d = e.contentTextField;
  var p = {};
  var f = [{
    type: "WidgetTitle",
    hasDisableOrVisible: i.some(function (e) {
      return "__disabled" === e.key || "__visible" === e.key;
    })
  }];
  var h = [{
    type: "VisibleSwitch"
  }];
  if (!l) {
    f.push(h);
  }
  var m = l ? {
    width: 0,
    height: 0
  } : {
    width: 100,
    height: 60
  };
  var g = [I.s, I.o];
  var _ = [I.q, I.m];
  if (i.forEach(function (e) {
    var t = e.defaultValue;
    var n = e.valueType;
    var o = e.editorType;
    var i = e.hidePropertyEditor;
    var a = e.key;
    var s = e.readonly;
    var c = e.dropdown;
    var l = e.label;
    var u = e.unit;
    var d = e.validators;
    if ("__disabled" === a && h.push({
      type: "DisabledSwitch"
    }), "__width" === a) {
      m.width = t;
      var v = d;
      if (void 0 !== (null === v || void 0 === v ? void 0 : v.greaterThan)) {
        g[0] = ae(v);
      }
      return void (void 0 !== (null === v || void 0 === v ? void 0 : v.lessThan) && (g[1] = se(v)));
    }
    if ("__height" === a) {
      m.height = t;
      var b = d;
      if (void 0 !== (null === b || void 0 === b ? void 0 : b.greaterThan)) {
        _[0] = ae(b);
      }
      return void (void 0 !== (null === b || void 0 === b ? void 0 : b.lessThan) && (_[1] = se(b)));
    }
    var y;
    if (!["__position", "__size", "__opacity", "__visible", "__disabled"].includes(a)) {
      if (p[a] = t, y = o || (c ? "Select" : function (e, t) {
        var n;
        var r = "";
        if (Array.isArray(e)) {
          var o = typeof t;
          r = "number" !== o && "string" !== o && "boolean" !== o || !e.includes(o) ? e[0] : o;
        } else {
          r = e;
        }
        switch (r) {
          case "string":
            n = "TextInput";
            break;
          case "number":
            n = "InputNumber";
            break;
          case "boolean":
            n = "AntSwitch";
            break;
          case "color":
            n = "Color";
            break;
          default:
            n = "TextInput";
        }
        return n;
      }(n, t))) {
        if (!s && !i) {
          var E = {
            type: y,
            label: Object(D.d)(r) ? Object(x.b)(r, a) : Object(x.b)(r, l),
            key: a,
            addonAfter: u
          };
          if (c) {
            if (Object(D.d)(r)) {
              E.dropdown = c;
            } else {
              E.dropdown = c.map(function (e) {
                return {
                  label: Object(x.a)(r, e.label) || e.label,
                  value: e.value
                };
              });
            }
          }
          f.push(E);
        }
      } else {
        console.error("Property type ".concat(n, " is not supported."));
      }
    }
  }), l || (f.push({
    type: "WidgetOpacity"
  }), f.push({
    type: "Size",
    label: "",
    key: "size",
    sizeRange: [g, _]
  }), f.push({
    type: "Coordinate",
    label: "",
    key: "position"
  })), null === (n = e.docs) || void 0 === n ? void 0 : n.url) {
    var v = e.docs.url;
    f.push({
      type: "HelpUrl",
      url: v
    });
  }
  var b = Object(x.c)(r);
  return {
    type: r,
    icon: o,
    title: d ? "" : b,
    contentTextField: d,
    hasAnyWidget: !!e.hasAnyWidget,
    previewAreaWidgetTitle: b,
    component: t,
    widget: {
      size: m,
      isGlobalWidget: s,
      attributes: Object(u.a)({}, p)
    },
    editConfig: f,
    isInvisibleWidget: l,
    blockConfig: {
      type: r,
      category: {
        iconId: o,
        blocks: r
      },
      getTemplate: function (t) {
        return B(t, r, e, !1);
      },
      blockDeclareGroup: {
        setBlockGroupSnippet: F,
        setBlockGroupProfile: F
      },
      renameBlocksInfo: {
        blocksList: ["widget_event", "widget_method", "widget_get", "widget_set"],
        fieldName: "WIDGET_ID"
      },
      topBlocks: [],
      categoryClass: {
        text: "",
        iconId: "",
        blocks: []
      }
    }
  };
}
function U(e) {
  return "antd-mobile" === e ? d : "color" === e ? f.a : void 0;
}
function W(e, t) {
  return H.apply(this, arguments);
}
function H() {
  return (H = Object(l.a)(i.a.mark(function e(t, r) {
    var o;
    var u;
    var d;
    var p;
    var f;
    var h;
    var g;
    var _;
    var v;
    var y;
    var E;
    var O;
    var C;
    var T;
    var I = arguments;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            E = function () {
              return (E = Object(l.a)(i.a.mark(function e(t) {
                return i.a.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        if (!t.startsWith(_)) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return", Object(S.cb)(t));
                      case 4:
                        return e.abrupt("return", Promise.resolve());
                      case 5:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              }))).apply(this, arguments);
            };
            y = function (e) {
              return E.apply(this, arguments);
            };
            u = I.length > 2 && void 0 !== I[2] ? I[2] : U;
            d = {};
            e.next = 6;
            return import("../../../3272/index");
          case 6:
            p = e.sent;
            f = p.default;
            e.next = 10;
            return import("../../../3272/3198/2668/index");
          case 10:
            h = e.sent;
            g = h.transformSync;
            t = (null === (o = g(t, {
              presets: [f]
            })) || void 0 === o ? void 0 : o.code) || "";
            Object(w.clearExternalModules)();
            Object(s.a)(Function, ["require", "exports", "InvisibleWidget", "VisibleWidget", "React"].concat(Object(c.a)(j.b), [t])).apply(void 0, [w.requireExternalModule, {}, function () {
              return function e() {
                Object(a.a)(this, e);
              };
            }(), function () {
              return function e() {
                Object(a.a)(this, e);
              };
            }(), m.a].concat(Object(c.a)(j.c)));
            _ = "https://static.codemao.cn/appcraft/modules/";
            v = Object(w.getExternalModules)();
            e.next = 20;
            return Promise.all(v.map(function (e) {
              return y(e);
            }));
          case 20:
            Object(s.a)(Function, ["require", "exports", "InvisibleWidget", "VisibleWidget", "React"].concat(Object(c.a)(j.b), [t])).apply(void 0, [u, d, M, P, m.a].concat(Object(c.a)(j.c)));
            C = (O = d).types;
            T = O.widget;
            if (!C.isInvisibleWidget) {
              if (!C.properties.some(function (e) {
                return "__opacity" === e.key;
              })) {
                C.properties.push({
                  key: "__opacity",
                  label: "",
                  valueType: "number",
                  defaultValue: b.j,
                  validators: {
                    greaterThan: b.r,
                    lessThan: b.j,
                    isInteger: !0
                  }
                });
              }
              if (!C.properties.some(function (e) {
                return "__position" === e.key;
              })) {
                C.properties.push({
                  key: "__position",
                  label: "",
                  valueType: "number",
                  defaultValue: 100
                });
              }
              if (!C.properties.some(function (e) {
                return "__visible" === e.key;
              })) {
                C.properties.push({
                  key: "__visible",
                  label: "",
                  valueType: "boolean",
                  defaultValue: !0
                });
              }
            }
            C.type = Object(D.c)(C.type, r);
            return e.abrupt("return", {
              types: C,
              widget: T
            });
          case 26:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function V(e, t, n) {
  var r = e.widget;
  var o = e.types;
  var i = o.title;
  var a = o.type;
  var s = function () {
    Object(x.e)(o);
    var e = G(o, r);
    Object(y.Nb)(y.j.EXTENSION, [e]);
    Object(v.c)(e.type);
    if (t) {
      t();
    }
  };
  if (L.g(a)) {
    var c = Object(D.f)(a, !1);
    Object(C.a)(Object(T.zh)({
      onConfirm: s,
      onCancel: n,
      allowText: Object(E.c)(E.b, "ExtensionWidget.overwrite").toString(),
      title: Object(E.c)(E.b, "ExtensionWidget.dialogTitle", {
        title: i,
        type: c
      }).toString(),
      isDangerous: !0
    }));
  } else {
    s();
  }
}
function z(e, t) {
  var n = e.types;
  var r = e.messages;
  if (!n.isInvisibleWidget) {
    if (!n.properties.some(function (e) {
      return "__opacity" === e.key;
    })) {
      n.properties.push({
        key: "__opacity",
        label: "",
        valueType: "number",
        defaultValue: b.j,
        validators: {
          greaterThan: b.r,
          lessThan: b.j,
          isInteger: !0
        }
      });
    }
    if (!n.properties.some(function (e) {
      return "__position" === e.key;
    })) {
      n.properties.push({
        key: "__position",
        label: "",
        valueType: "number",
        defaultValue: 100
      });
    }
    if (!n.properties.some(function (e) {
      return "__visible" === e.key;
    })) {
      n.properties.push({
        key: "__visible",
        label: "",
        valueType: "boolean",
        defaultValue: !0
      });
    }
  }
  Object(x.d)(n, r);
  var o = G(n, t);
  L.a({
    types: n,
    type: n.type,
    code: ""
  });
  return o;
}
function Y(e, t) {
  return K.apply(this, arguments);
}
function K() {
  return (K = Object(l.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    var a;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return W(t, n);
          case 2:
            r = e.sent;
            o = r.types;
            a = r.widget;
            return e.abrupt("return", new Promise(function (e, r) {
              V({
                types: o,
                widget: a
              }, function () {
                var r = o.type;
                if (!n) {
                  var i;
                  L.a({
                    type: r,
                    types: o,
                    code: t
                  });
                  var a = {
                    type: r,
                    code: t
                  };
                  if (!(null === (i = O.oTHelper.extensionWidget) || void 0 === i)) {
                    i.clientOp.addUnsafeExtensionWidget(a);
                  }
                }
                Object(C.a)(Object(T.Rj)());
                e(o);
              }, function () {
                r("User cancel import widget");
              });
            }));
          case 6:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function q(e, t) {
  return X.apply(this, arguments);
}
function X() {
  return (X = Object(l.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return new Promise(function (e, n) {
              var r = new FileReader();
              r.readAsText(t);
              r.onload = function () {
                e(r.result);
              };
              r.onerror = n;
            });
          case 2:
            r = e.sent;
            if (!n) {
              Q(r);
            }
            e.next = 6;
            return Y(r, n);
          case 6:
            o = e.sent;
            return e.abrupt("return", o);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function Q(e) {
  if (/getElementsByClassName\([\s\S]*readonly[\s\S]*\)/i.test(e)) {
    throw new Error("file getElementsByClassName(*readonly*) not allow");
  }
  var t = [];
  if (j.a.forEach(function (n) {
    if (e.includes(n)) {
      t.push(n);
    }
  }), t.length > 0) {
    throw Object(C.a)(Object(T.zh)({
      allowText: Object(E.c)(E.b, "cloudDb.know").toString(),
      title: "error",
      content: "\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5b58\u5728\u95ee\u9898\uff0c\u4e0d\u652f\u6301\u5bfc\u5165",
      cancelBtnVisible: !1
    })), new Error("file ".concat(t.join("\uff0c"), " not allow"));
  }
}
function Z(e, t) {
  return J.apply(this, arguments);
}
function J() {
  return (J = Object(l.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    var a;
    var s;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t.startsWith("https")) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            r = "".concat(t, "?t=").concat(Math.random());
            e.next = 5;
            return _.a.get(r, {
              responseType: "blob",
              withCredentials: !1
            });
          case 5:
            o = e.sent;
            e.next = 8;
            return q(o.data, !0);
          case 8:
            a = e.sent;
            s = a.type;
            L.b({
              id: n,
              type: s,
              types: a,
              cdnUrl: t
            });
            return e.abrupt("return", a);
          case 12:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function $(e, t) {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = Object(l.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    var a;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (o = function () {
              return (o = Object(l.a)(i.a.mark(function e(t) {
                var n;
                var r;
                var o;
                var a;
                return i.a.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2;
                        return W(t, !1);
                      case 2:
                        n = e.sent;
                        r = n.types;
                        o = n.widget;
                        V({
                          types: r,
                          widget: o
                        });
                        a = r.type;
                        L.a({
                          type: a,
                          types: r,
                          code: t
                        });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              }))).apply(this, arguments);
            }, r = function (e) {
              return o.apply(this, arguments);
            }, Object(y.u)(y.j.EXTENSION), L.c(), !n.length) {
              e.next = 7;
              break;
            }
            e.next = 7;
            return Promise.all(n.map(function (e) {
              var t = e.code;
              return r(t);
            }));
          case 7:
            if (Object(C.a)(Object(T.Rj)()), !(a = t.filter(function (e) {
              return e.cdnUrl.startsWith("https") && e.id;
            })).length) {
              e.next = 11;
              break;
            }
            return e.abrupt("return", Promise.all(a.map(function (e) {
              return Z(e.cdnUrl, e.id);
            })));
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function te(e, t, n) {
  return ne.apply(this, arguments);
}
function ne() {
  return (ne = Object(l.a)(i.a.mark(function e(t, n, r) {
    var o;
    var a;
    var s;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    var m;
    var g;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            for (a in o = {}, n) {
              s = n[a];
              if (Object(D.e)(s.type)) {
                o[s.type] = !0;
              }
            }
            for (c in r) {
              l = r[c];
              if (Object(D.e)(l.type)) {
                o[l.type] = !0;
              }
            }
            if (t.forEach(function (e) {
              o[e.type] = !1;
              delete o[e.type];
            }), !(Object.keys(o).length > 0)) {
              e.next = 26;
              break;
            }
            u = [];
            d = 1;
            p = 100;
            e.next = 10;
            return Object(A.e)(d, p);
          case 10:
            if (f = e.sent, u = u.concat(f.items), !((h = Math.ceil(f.total / p)) > 1)) {
              e.next = 23;
              break;
            }
            d += 1;
          case 15:
            if (!(d <= h)) {
              e.next = 23;
              break;
            }
            e.next = 18;
            return Object(A.e)(d, p);
          case 18:
            m = e.sent;
            u = u.concat(m.items);
          case 20:
            d++;
            e.next = 15;
            break;
          case 23:
            g = [];
            u.forEach(function (e) {
              var t = "".concat(D.a).concat(e.widget_code);
              if (o[t] && e.resource_url.startsWith("https")) {
                g.push({
                  id: e.id,
                  type: t,
                  cdnUrl: e.resource_url
                });
              }
            });
            return e.abrupt("return", Promise.all(g.map(function (e) {
              return Z(e.cdnUrl, e.id);
            })));
          case 26:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function re(e) {
  var t = L.f(e);
  return t ? Object(x.a)(e, t.types.title) : "";
}
function oe(e, t) {
  var n = L.f(e);
  if (null === n || void 0 === n ? void 0 : n.types) {
    return n.types.properties.find(function (e) {
      return e.key === t;
    });
  }
}
function ie(e, t) {
  var n = L.f(e);
  if (null === n || void 0 === n ? void 0 : n.types) {
    var r = n.types.properties.find(function (e) {
      return e.key === t;
    });
    if (r) {
      if ("number" === r.valueType && r.validators) {
        return r.validators;
      }
    }
  }
}
function ae(e) {
  var t;
  if (void 0 !== e.greaterThan) {
    t = "number" === typeof e.greaterThan ? e.greaterThan : e.greaterThan.value;
  }
  return t;
}
function se(e) {
  var t;
  if (void 0 !== e.lessThan) {
    t = "number" === typeof e.lessThan ? e.lessThan : e.lessThan.value;
  }
  return t;
}
function ce(e, t) {
  var n = ie(e, t);
  if (n) {
    return se(n);
  }
}
function le(e, t) {
  var n = ie(e, t);
  if (n) {
    return ae(n);
  }
}
function ue(e, t) {
  var n = L.f(e);
  if (null === n || void 0 === n ? void 0 : n.types) {
    return n.types.methods.find(function (e) {
      return e.key === t;
    });
  }
}
function de(e, t) {
  var n = L.f(e);
  if (null === n || void 0 === n ? void 0 : n.types) {
    return n.types.events.find(function (e) {
      return e.key === t;
    });
  }
}
function pe(e, t) {
  var n = new Set();
  var r = t || e;
  if ((r = Array.isArray(r) ? r : [r]).includes("string")) {
    r.push("number", "boolean", "object", "array");
  }
  if (r.includes("color") || r.includes("image") || r.includes("icon") || r.includes("richTextString")) {
    r.push("string");
  }
  r.forEach(function (e) {
    n.add(Object(g.upperFirst)("".concat(e)));
  });
  return Array.from(n);
}
function fe(e) {
  var t = new Set();
  var n = Array.isArray(e) ? e : [e];
  if (n.includes("color") || n.includes("image")) {
    n.push("string");
  }
  n.forEach(function (e) {
    t.add(Object(g.upperFirst)("".concat(e)));
  });
  return Array.from(t);
}
function he(e, t) {
  return "".concat(e, "_").concat(t);
}
var me = "widget";
var ge = "\u63a7\u4ef6";
export default me;