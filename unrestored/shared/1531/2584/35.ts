"use strict";

export { r as g };
export { I as Nb };
export { A as K };
export { j as L };
export { N as Db };
export { R as Eb };
export { k as t };
export { x as pb };
export { D as Y };
export { M as U };
export { L as Ab };
export { P as Z };
export { B as S };
export { F as T };
export { G as bb };
export { U as W };
export { z as l };
export { Y as k };
export { K as i };
export { q as j };
export { X as h };
export { Q as sb };
export { Z as qb };
export { J as w };
export { $ as cb };
export { se as f };
export { ce as e };
export { le as c };
export { ue as d };
export { de as b };
export { pe as a };
export { fe as X };
export { he as tb };
export { me as ac };
export { ge as H };
export { _e as M };
export { ve as N };
export { be as ub };
export { ye as vb };
export { Ee as Gb };
export { Oe as s };
export { we as p };
export { Ce as q };
export { Te as D };
export { Se as Cb };
export { Ie as rb };
export { Ae as R };
export { je as db };
export { Ne as Vb };
export { Re as ab };
export { ke as V };
export { De as J };
export { Le as Sb };
export { Pe as v };
export { Be as u };
export { Fe as Xb };
export { Ge as Yb };
export { Ue as Wb };
export { We as Q };
export { He as O };
export { Ve as P };
export { ze as ob };
export { Ye as Ib };
export { Ke as I };
export { qe as Zb };
export { Xe as Hb };
export { Qe as Kb };
export { Ze as nb };
export { Je as Rb };
export { $e as jb };
export { et as kb };
export { tt as lb };
export { nt as mb };
export { rt as hb };
export { ot as ib };
export { it as Fb };
export { at as Ub };
export { st as n };
export { ct as m };
export { lt as cc };
export { ut as dc };
export { dt as yb };
export { pt as zb };
export { ft as fb };
export { ht as gb };
export { mt as bc };
export { gt as z };
export { _t as Ob };
export { vt as B };
export { bt as Pb };
export { yt as A };
export { Et as y };
export { Ot as x };
export { Ct as Qb };
export { Tt as F };
export { It as G };
export { jt as E };
export { Rt as C };
export { kt as r };
export { xt as Tb };
export { Dt as Jb };
export { Mt as wb };
export { Lt as Lb };
export { Pt as Mb };
export { Bt as Bb };
export { Ft as xb };
export { Gt as eb };
export { Ut as o };
var r;
import o = require("regenerator-runtime");
var i = function __importDefault(module) {
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
}(o);
import a = require("./7");
import s = require("./10/index");
import c = require("./11");
import l = require("./6");
import u = require("./25/index");
import d = require("./47");
import p = require("./42/index");
import f = require("./5");
import h = require("./64");
import m = require("./15");
import g = require("./83");
import _ = require("./313");
import v = require("./97");
import b = require("./190");
import y = require("./133/index");
import E = require("./76");
import O = require("../../../../src/shared/events/actions");
import w = require("./26/index");
import C = require("./53");
!function (e) {
  e[e.UI = 0] = "UI";
  e[e.STAGE = 1] = "STAGE";
  e[e.MEDIA = 2] = "MEDIA";
  e[e.SENSOR = 3] = "SENSOR";
  e[e.DATE = 4] = "DATE";
  e[e.LOCAL_STORAGE = 5] = "LOCAL_STORAGE";
  e[e.CLOUD_STORAGE = 6] = "CLOUD_STORAGE";
  e[e.NETWORK = 7] = "NETWORK";
  e[e.EXTENSION = 8] = "EXTENSION";
  e[e.DATABASE = 9] = "DATABASE";
  e[e.SOCIAL = 10] = "SOCIAL";
  e[e.CLOUD_SPACE = 11] = "CLOUD_SPACE";
}(r || (r = {}));
var T = new Map();
var S = new Map();
function I(e, t) {
  t.forEach(function (t) {
    var n = t.type;
    if (T.has(n)) {
      console.error("Component ".concat(n, " is registered"));
    } else {
      T.set(n, t);
      var r = S.get(e) || [];
      r.push(t);
      S.set(e, r);
    }
  });
}
function A() {
  var e = [];
  T.forEach(function (t) {
    e.push(t);
  });
  return e;
}
function j() {
  var e = [];
  T.forEach(function (t) {
    return e.push(t.type);
  });
  return e;
}
function N(e) {
  return T.get(e);
}
function R(e) {
  return S.get(e) || [];
}
function k(e) {
  var t;
  if (!(null === (t = S.get(e)) || undefined === t)) {
    t.forEach(function (t) {
      !function (e, t) {
        if (T.has(t)) {
          T.delete(t);
          var n = (S.get(e) || []).filter(function (e) {
            return e.type !== t;
          });
          S.set(e, n);
        } else {
          console.error("Component ".concat(t, " is not registered"));
        }
      }(e, t.type);
    });
  }
  S.delete(e);
}
function x() {
  var e = [];
  p.g.forEach(function (t) {
    if (!(t.type !== f.y && t.type !== f.B)) {
      e.push({
        id: t.id,
        title: t.title
      });
    }
  });
  return e;
}
function D() {
  var e = [];
  p.g.forEach(function (t) {
    if (t.type === f.l) {
      e.push({
        id: t.id,
        title: t.title
      });
    }
  });
  return e;
}
function M() {
  var e = [];
  p.g.forEach(function (t) {
    if (t.type === f.h) {
      e.push({
        id: t.id,
        title: t.title
      });
    }
  });
  return e;
}
function L(e) {
  var t = Se(e);
  if (t && (t.type === f.y || t.type === f.B || t.type === f.l)) {
    var n = t.attributes.fields;
    return undefined === n ? [] : n;
  }
  return [];
}
function P(e) {
  var t = Se(e);
  return t && t.type === f.l ? t.attributes.cloudDbId : null;
}
function B(e) {
  var t = Se(e);
  return t && t.type === f.h ? t.attributes.columns : [];
}
function F(e) {
  var t = Se(e);
  return t && t.type === f.h ? t.attributes.cloudDbId : null;
}
function G(e) {
  var t = Se(e);
  return t && t.type === f.k ? t.attributes.cloudTableId : null;
}
function U(e) {
  var t = Se(e);
  return t && t.type === f.j ? t.attributes.cloudDictId : null;
}
import W = require("./17/index");
import H = require("./60");
import V = require("./36/85");
var z = ["Size", "Coordinate", "VisibleSwitch", "WidgetOpacity"];
var Y = ["size", "position", "visible", "opacity"];
var K = {
  key: "__opacity",
  label: "",
  valueType: "number",
  defaultValue: 100,
  validators: {
    lessThan: H.j,
    greaterThan: H.r,
    isInteger: true
  }
};
var q = {
  key: "__visible",
  label: "",
  valueType: "boolean",
  defaultValue: true
};
var X = {
  key: "__disabled",
  label: "",
  valueType: "boolean",
  defaultValue: false
};
function Q(e) {
  var t = e.property;
  var n = e.widgetType;
  var r = e.widgetId;
  var o = "widget_get";
  if (e.isSetProperty) {
    o = "widget_set";
  }
  return "<block type=\"".concat(o, "\" uncache=\"true\">\n    <mutation property=\"").concat(t, "\" widget_type=\"").concat(n, "\"></mutation>\n    <field name=\"WIDGET_ID\">").concat(r, "</field>\n  </block>");
}
function Z(e) {
  var t = e.property;
  var n = e.widgetType;
  var r = e.widgetId;
  return "<block type=\"widget_method\" uncache=\"true\">\n  <mutation\n    widget_type=\"".concat(n, "\"\n    method=\"").concat(t, "\">\n  </mutation>\n  <field name=\"WIDGET_ID\">").concat(r, "</field>\n</block>");
}
function J(e, t) {
  var n = "flyout-line-".concat(t);
  var r = document.getElementById(n);
  if (!r) {
    (r = document.createElement("div")).id = n;
    r.style.display = "none";
  }
  e.forEach(function (e) {
    var n;
    var o = e.lineLabel;
    var i = e.text;
    var a = document.getElementById(o);
    if (!a) {
      (a = document.createElement("div")).id = o;
      a.style.display = "flex";
      a.style.alignItems = "center";
      a.style.width = "".concat(C.b + 40, "px");
      var s = document.createElement("div");
      s.style.width = "6px";
      s.style.height = "6px";
      s.style.borderRadius = "50%";
      s.style.backgroundColor = "#82778C";
      var c = document.createElement("div");
      c.style.fontSize = "14px";
      c.style.fontFamily = "NotoSansCJKsc-Medium, NotoSansCJKsc";
      c.style.color = "#82778C";
      c.style.marginLeft = "8px";
      var l = V.a(t, i) || i;
      c.innerText = l;
      var u = document.createElement("div");
      u.style.flex = "1";
      u.style.height = "1px";
      u.style.backgroundColor = "#F2F2F2";
      u.style.marginLeft = "8px";
      a.appendChild(s);
      a.appendChild(c);
      a.appendChild(u);
      if (!(null === (n = r) || undefined === n)) {
        n.appendChild(a);
      }
      W.Blink.mainWorkspace.register_flyout_button(o, function () {
        var e = document.createElementNS(C.c, "foreignObject");
        e.style.overflow = "visible";
        var t = document.getElementById(o);
        if (t) {
          var n = t.clientWidth;
          var r = t.clientHeight;
          e.setAttribute("width", "".concat(n));
          e.setAttribute("height", "".concat(r));
          e.appendChild(t);
        }
        return {
          svg_group: e,
          update_callback: function (t) {
            var n = e.querySelector("#".concat(o));
            if (n) {
              var r = n.clientWidth;
              var i = n.clientHeight;
              r /= C.d;
              i /= C.d;
              e.setAttribute("width", "".concat(r));
              e.setAttribute("height", "".concat(i));
              t.width = r;
              t.height = i;
            }
          }
        };
      });
    }
  });
  document.body.append(r);
}
function $(e) {
  var t = e.widgetType;
  var n = e.title;
  var r = e.lineId;
  var o = "flyout-line-".concat(t, "-").concat(r);
  J([{
    lineLabel: o,
    text: n
  }], t);
  return "<label type=\"".concat(o, "\"></label>");
}
import ee = require("lodash");
import te = require("./38/3");
import ne = require("./38/22");
var re = i.a.mark(_e);
var oe = i.a.mark(ve);
var ie = i.a.mark(be);
var ae = i.a.mark(ye);
var se = 0;
var ce = "DB_NOT_EXIST";
var le = 2e3;
var ue = 5e3;
var de = .8;
var pe = 1;
function fe() {
  var e = [];
  p.g.forEach(function (t) {
    if (t.type === f.j) {
      e.push(t);
    }
  });
  return e;
}
function he() {
  var e = [];
  p.g.forEach(function (t) {
    if (t.type === f.k && t.attributes.cloudTableId) {
      e.push(t.attributes.cloudTableId);
    }
    if (t.type === f.A && "number" === typeof t.attributes.dataSource) {
      e.push(t.attributes.dataSource);
    }
  });
  return e;
}
function me(e) {
  var t = [];
  for (var n in e) {
    var r = e[n];
    if (r.type === f.j && r.attributes.cloudDictId !== se) {
      t.push(ee.cloneDeep(r));
      r.attributes.cloudDictId = se;
    }
    if (r.type === f.k && r.attributes.cloudTableId !== se) {
      t.push(ee.cloneDeep(r));
      r.attributes.cloudTableId = se;
    }
    if (r.type === f.A && "number" === typeof r.attributes.dataSource) {
      t.push(ee.cloneDeep(r));
      r.attributes.dataSource = "";
    }
  }
  return t;
}
function ge() {
  return p.b.clear();
}
function _e() {
  var e;
  var t;
  var n;
  return i.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2;
          return te.f(ne.p);
        case 2:
          e = r.sent;
          t = fe();
          n = t.map(function (e) {
            return e.attributes.cloudDictId;
          });
          return r.abrupt("return", m.r(n, u.a(e)).filter(function (e) {
            return e !== se;
          }));
        case 6:
        case "end":
          return r.stop();
      }
    }
  }, re);
}
function ve() {
  var e;
  var t;
  return i.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return te.f(ne.q);
        case 2:
          e = n.sent;
          t = he();
          return n.abrupt("return", m.r(t, u.a(e)).filter(function (e) {
            return e !== se;
          }));
        case 5:
        case "end":
          return n.stop();
      }
    }
  }, oe);
}
function be() {
  var e;
  var t;
  var n;
  return i.a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2;
          return te.f(ne.p);
        case 2:
          e = r.sent;
          t = fe();
          n = t.map(function (e) {
            return e.attributes.cloudDictId;
          });
          return r.abrupt("return", m.r(u.a(e), n).filter(function (e) {
            return e !== se;
          }));
        case 6:
        case "end":
          return r.stop();
      }
    }
  }, ie);
}
function ye() {
  var e;
  var t;
  return i.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2;
          return te.f(ne.q);
        case 2:
          e = n.sent;
          t = he();
          return n.abrupt("return", m.r(u.a(e), t).filter(function (e) {
            return e !== se;
          }));
        case 5:
        case "end":
          return n.stop();
      }
    }
  }, ae);
}
function Ee(e) {
  var t = Se(e);
  if (t) {
    var n = t.title || t.contentTitle;
    if (!n) {
      n = function (e) {
        var t = Se(e);
        if (t) {
          var n;
          var r = (null === (n = N(t.type)) || undefined === n ? undefined : n.contentTextField) || "";
          return t.attributes[r] || "";
        }
      }(e).replace(C.E, "").substr(0, 20);
    }
    return n || "";
  }
  return "";
}
function Oe(e, t) {
  var n = Se(e);
  return !!n && function (e) {
    var t = xe();
    var n = [];
    if (t) {
      t.widgetIds.forEach(function (t) {
        var r = Se(t);
        if ((null === r || undefined === r ? undefined : r.type) === e) {
          n.push(r);
        }
      });
      t.invisibleWidgetIds.forEach(function (t) {
        var r = Se(t);
        if ((null === r || undefined === r ? undefined : r.type) === e) {
          n.push(r);
        }
      });
    }
    je().forEach(function (t) {
      var r = Se(t);
      if ((null === r || undefined === r ? undefined : r.type) === e) {
        n.push(r);
      }
    });
    return n;
  }(n.type).some(function (n) {
    var r = n.title || n.contentTitle;
    return n.id !== e && r === t;
  });
}
function we() {
  var e = false;
  p.g.forEach(function (t) {
    if ((null === t || undefined === t ? undefined : t.type) === f.A && "number" === typeof t.attributes.dataSource) {
      e = true;
    }
  });
  return e;
}
function Ce(e, t) {
  var n = O.d.getState().project.screens;
  var r = new Set();
  Array.from(n).forEach(function (t) {
    if (t.id !== e) {
      r.add(t.title);
    }
  });
  return r.has(t);
}
function Te(e) {
  p.g.delete(e);
}
function Se(e) {
  return p.g.get(e);
}
function Ie(e) {
  var t = p.g.get(e);
  if (t && t.parentId) {
    return p.g.get(t.parentId);
  }
}
function Ae(e) {
  var t;
  var n = [];
  var r = p.g.keys();
  var o = d.a(r);
  try {
    for (o.s(); !(t = o.n()).done;) {
      var i;
      var a = t.value;
      if ((null === (i = p.g.get(a)) || undefined === i ? undefined : i.parentId) === e) {
        n.push(a);
      }
    }
  } catch (s) {
    o.e(s);
  } finally {
    o.f();
  }
  return n;
}
function je() {
  return O.d.getState().project.globalWidgetIds;
}
function Ne(e, t) {
  return p.g.set(e, t);
}
function Re() {
  var e = [];
  p.g.forEach(function (t) {
    if (t.type === f.l) {
      e.push(t);
    }
  });
  return e;
}
function ke() {
  var e = [];
  p.g.forEach(function (t) {
    if (t.type === f.h) {
      e.push(t);
    }
  });
  return e;
}
function xe() {
  var e = O.d.getState().project.currentScreenIndex;
  return O.d.getState().project.screens.get(e);
}
function De(e) {
  var t = [];
  p.g.forEach(function (n) {
    if (n.type === e) {
      t.push(n.id);
    }
  });
  return t;
}
function Me(e) {
  var t = xe();
  var n = [];
  if (t) {
    t.widgetIds.forEach(function (t) {
      var r;
      if ((null === (r = Se(t)) || undefined === r ? undefined : r.type) === e) {
        n.push(t);
      }
    });
    t.invisibleWidgetIds.forEach(function (t) {
      var r;
      if ((null === (r = Se(t)) || undefined === r ? undefined : r.type) === e) {
        n.push(t);
      }
    });
  }
  je().forEach(function (t) {
    var r;
    if ((null === (r = Se(t)) || undefined === r ? undefined : r.type) === e) {
      n.push(t);
    }
  });
  return n;
}
function Le(e) {
  for (var t in p.g.clear(), e) p.g.set(t, e[t]);
}
function Pe(e) {
  var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
  var n = arguments.length > 2 ? arguments[2] : undefined;
  var r = [];
  var o = Se(e);
  if (o) {
    var i = function e(t) {
      var n = t instanceof Array ? [] : {};
      if (t instanceof Array || t instanceof Object) {
        for (var r in t) n[r] = e(t[r]);
        return n;
      }
      return t;
    };
    var a = i(o);
    r.push(a);
    var s = h.a(o.type);
    a.id = s;
    if (o.title) {
      var c = vt(o.type, Me(o.type), o.title);
      a.title = c;
    } else if (o.contentTitle) {
      var l = vt(o.type, Me(o.type), o.contentTitle);
      a.contentTitle = l;
    }
    if (n) {
      a.parentId = n;
    } else if (a.parentId) {
      var d = Se(a.parentId);
      if (d) {
        var p = d;
        p.widgetIds = [].concat(u.a(p.widgetIds), [s]);
      }
    }
    if (o.type === f.f) {
      var m = a;
      m.widgetIds = [];
      o.widgetIds.forEach(function (e) {
        var t = Pe(e, true, s);
        if (t.length) {
          var n = t[0];
          r.push(n);
          var o = n.id;
          m.widgetIds.push(o);
        }
      });
    }
    if (o.type === f.x || o.type === f.A) {
      var g = a;
      for (var _ in g.widgetIds = [], o.attributes.templateSlotMap) {
        var v = Pe(o.attributes.templateSlotMap[_].widgetId, true, s);
        if (v.length) {
          var b = v[0];
          r.push(b);
          var y = b.id;
          g.widgetIds.push(y);
          g.attributes.templateSlotMap[_].widgetId = y;
        }
      }
    }
    if (t) {
      Ne(s, a);
    }
  }
  return r;
}
function Be(e, t, n) {
  var r = Se(e);
  if (r) {
    if (!r.parentId || n) {
      var o = function e(t) {
        var n = t instanceof Array ? [] : {};
        if (t instanceof Array || t instanceof Object) {
          for (var r in t) n[r] = e(t[r]);
          return n;
        }
        return t;
      }(r);
      [].push(o);
      var i = h.a(r.type);
      o.id = i;
      var a = t.indexOf(e);
      if (a > -1) {
        t.splice(a, 1, o.id);
      } else {
        console.error("copy screen error");
      }
      if (n) {
        o.parentId = n;
      }
      if (r.type === f.f) {
        var s = o;
        s.widgetIds = [];
        r.widgetIds.forEach(function (e) {
          var n = Be(e, t, i);
          if (n) {
            s.widgetIds.push(n.id);
          }
        });
      }
      if (r.type === f.x || r.type === f.A) {
        var c = o;
        for (var l in c.widgetIds = [], r.attributes.templateSlotMap) {
          var u = Be(r.attributes.templateSlotMap[l].widgetId, t, i);
          if (u) {
            c.widgetIds.push(u.id);
            c.attributes.templateSlotMap[l].widgetId = u.id;
          }
        }
      }
      Ne(o.id, o);
      return o;
    }
  } else {
    console.error("cloneScreenWidget get widget error");
  }
}
function Fe(e, t) {
  var n = Se(e);
  if (n && "widgetIds" in n) {
    n.widgetIds = t;
  }
}
function Ge(e, t) {
  var n = Se(e);
  if (n) {
    n.title = t;
  }
}
function Ue(e, t, n) {
  var r = Se(e);
  if (r) {
    r.attributes = l.a(l.a({}, r.attributes), {}, c.a({}, t, n));
  }
}
function We(e, t) {
  switch (t) {
    case g.b.CONTAINED_ICON:
    case g.b.OUTLINED_ICON:
      return _.e[e];
    case g.b.CONTAINED_TEXT:
    case g.b.OUTLINED_TEXT:
      return _.f[e];
  }
}
var He = function (e) {
  switch (e) {
    case g.b.OUTLINED_TEXT:
    case g.b.CONTAINED_TEXT:
      return "TEXT";
    case g.b.OUTLINED_ICON:
    case g.b.CONTAINED_ICON:
      return "ICON";
  }
};
var Ve = function (e) {
  var t = p.g.get(e);
  return t && t.type === f.d ? He(t.attributes.mode) : "";
};
var ze = function (e) {
  return v.p[e];
};
function Ye(e) {
  return Array.from(p.g).some(function (t) {
    return t[1].type === f.v && t[1].attributes.fileId === e || t[1].type === f.z && t[1].attributes.backgroundImage === e || t[1].type === f.w && t[1].attributes.backgroundImage === e || t[1].type === f.E && (t[1].attributes.backgroundImageFileId === e || t[1].attributes.handleImageFileId === e || t[1].attributes.trackImageFileId === e) || t[1].type === f.f && t[1].attributes.backgroundImage === e || !(t[1].type !== f.a || !t[1].attributes.actionList.some(function (t) {
      return t.styleList.some(function (t) {
        return t.source === e;
      });
    }));
  });
}
function Ke(e) {
  var t = [];
  Array.from(p.g).forEach(function (n) {
    var r = s.a(n, 2);
    r[0];
    var o = r[1];
    if (o.type === f.a && o.attributes.actionList.some(function (t) {
      return t.styleList.some(function (t) {
        return t.source === e;
      });
    })) {
      t.push(o);
    }
  });
  return t;
}
function qe(e) {
  return Array.from(p.g).some(function (t) {
    return t[1].type === f.b && t[1].attributes.fileId === e;
  });
}
function Xe(e) {
  return Array.from(p.g).some(function (t) {
    return (t[1].type === f.d || t[1].type === f.z) && t[1].attributes.iconId === e;
  });
}
function Qe(e) {
  var t = e.size;
  return !e.attributes.fileId && t.height === y.h && t.width === y.l;
}
function Ze(e) {
  var t = e.width;
  var n = e.height;
  var r = E.d;
  var o = E.e;
  return t > o || n > r ? t / n > o / r ? {
    width: o,
    height: n / t * o
  } : {
    width: t / n * r,
    height: r
  } : {
    width: t,
    height: n
  };
}
function Je(e, t) {
  p.g.forEach(function (n) {
    if (n.type === f.v) {
      if (n.attributes.fileId === e) {
        n.attributes.fileId = t;
      }
      if (Ut(e, n.attributes.fileId)) {
        n.attributes.fileId = Gt(e, t, n.attributes.fileId);
      }
    } else {
      if ("ACTOR_WIDGET" === n.type) {
        n.attributes.actionList.forEach(function (n) {
          n.styleList.forEach(function (n) {
            if (n.source === e) {
              n.source = t;
            }
            if (Ut(e, n.source)) {
              n.source = Gt(e, t, n.source);
            }
          });
        });
      }
    }
    if ("backgroundImage" in n.attributes) {
      if (n.attributes.backgroundImage === e) {
        n.attributes.backgroundImage = t;
      }
      if (Ut(e, n.attributes.backgroundImage)) {
        n.attributes.backgroundImage = Gt(e, t, n.attributes.backgroundImage);
      }
    }
  });
}
function $e() {
  return p.a;
}
function et() {
  var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
  var t = {};
  p.a.forEach(function (n) {
    t[n.id] = l.a(l.a({}, n), {}, {
      cdnUrl: e && n.source || n.cdnUrl
    });
  });
  return t;
}
function tt(e) {
  return e.cdnUrl || e.source;
}
function nt(e) {
  var t = p.a.find(function (t) {
    return t.id === e;
  });
  return (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl);
}
function rt(e) {
  return p.a.find(function (t) {
    return t.id === e;
  });
}
function ot(e, t) {
  return p.a.find(function (n) {
    return n.groupId === e && n.groupImageIndex === t;
  });
}
function it(e) {
  if ("string" === typeof e) {
    if (m.U(e)) {
      return e;
    }
    var t = rt(e);
    if (t) {
      return (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl);
    }
    var n = ht().find(function (t) {
      return t.name + ".svg" === e || t.id === e;
    });
    return n ? (null === n || undefined === n ? undefined : n.source) || (null === n || undefined === n ? undefined : n.cdnUrl) : undefined;
  }
}
function at(e, t) {
  if (undefined !== t) {
    p.a.splice(t, 0, e);
  } else {
    p.a.push(e);
  }
}
function st(e, t) {
  var n = p.a.find(function (t) {
    return t.id === e;
  });
  if (n) {
    n.id = t;
  }
}
function ct(e, t) {
  p.a.filter(function (t) {
    return t.groupId === e;
  }).forEach(function (e) {
    e.groupId = t;
    if (undefined !== e.groupImageIndex) {
      e.id = "".concat(t, "-").concat(e.groupImageIndex + 1).concat(e.extension);
    }
  });
}
function lt(e, t) {
  var n = rt(e);
  if (n) {
    n.cdnUrl = t;
  }
}
function ut(e, t, n) {
  var r = rt(e);
  if (r && r.urls) {
    r.urls[t] = n;
  }
}
function dt(e) {
  return O.d.getState().resource.soundFileList.find(function (t) {
    return t.id === e;
  });
}
function pt() {
  return O.d.getState().resource.soundFileList;
}
function ft(e) {
  return O.d.getState().resource.iconFileList.find(function (t) {
    return t.id === e;
  });
}
function ht() {
  return O.d.getState().resource.iconFileList;
}
function mt(e, t) {
  if (t.includes(e)) {
    var n = t;
    var r = e.replace(/\d+$/g, "");
    var o = new RegExp("^" + r + "(\\d+)$", "i");
    var i = [];
    n.forEach(function (e) {
      var t = e.match(o);
      if (t && t[1]) {
        i.push(parseInt(t[1]));
      }
    });
    var a = 1;
    var s = e.match(o);
    for (s && s[1] && (a = parseInt(s[1])); i.includes(a);) {
      a++;
    }
    return "".concat(r).concat(a);
  }
  return e;
}
function gt(e, t) {
  return mt(e, t.toJSON().map(function (e) {
    return e.title;
  }));
}
function _t(e, t, n) {
  var r = [];
  n.toJSON().forEach(function (t) {
    if (t.id !== e) {
      r.push(t.title);
    }
  });
  return mt(t, r);
}
function vt(e, t, n) {
  var r = [];
  t.forEach(function (t) {
    var n = Se(t);
    if (n && n.type === e) {
      if (n.title) {
        r.push(n.title);
      } else {
        if (n.contentTitle) {
          r.push(n.contentTitle);
        }
      }
    }
  });
  return mt(n, r);
}
function bt(e, t, n) {
  var r = Me(t);
  return vt(t, r = r.filter(function (t) {
    return t !== e;
  }), n);
}
function yt(e, t, n) {
  var r = Me(t);
  r = r.filter(function (t) {
    return t !== e;
  });
  var o = n.replace(C.E, "");
  o = o.trim();
  return o = vt(t, r, o = b.c(o, 40));
}
function Et(e) {
  var t = e.slice(0, e.lastIndexOf(".") < 0 ? undefined : e.lastIndexOf("."));
  var n = m.I(e);
  var r = [];
  $e().forEach(function (e) {
    if (e.extension === n) {
      r.push(e.id.slice(0, e.id.lastIndexOf(".") < 0 ? undefined : e.id.lastIndexOf(".")));
    }
  });
  return mt(t, r) + n;
}
function Ot(e) {
  return wt.apply(this, arguments);
}
function wt() {
  return (wt = a.a(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = Et(t.name);
            e.next = 3;
            return m.ob(t);
          case 3:
            if (!(r = e.sent)) {
              e.next = 8;
              break;
            }
            at(o = {
              cdnUrl: "",
              id: n,
              source: r,
              extension: m.I(t.name)
            });
            return e.abrupt("return", o);
          case 8:
            return e.abrupt("return", null);
          case 9:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function Ct(e) {
  p.a.length = 0;
  var t;
  var n = d.a(e);
  try {
    for (n.s(); !(t = n.n()).done;) {
      var r = t.value;
      var o = r.source;
      if (o && m.R(o)) {
        r.source = m.n(o);
      }
      p.a.push(r);
    }
  } catch (i) {
    n.e(i);
  } finally {
    n.f();
  }
}
function Tt() {
  return St.apply(this, arguments);
}
function St() {
  return (St = a.a(i.a.mark(function e() {
    var t;
    var n;
    var r;
    var o;
    var a;
    var s;
    var c;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = [];
            n = d.a(p.a);
            e.prev = 2;
            n.s();
          case 4:
            if ((r = n.n()).done) {
              e.next = 18;
              break;
            }
            if (o = r.value, a = l.a({}, o), s = a.cdnUrl, c = a.source, s || !c || !m.P(c)) {
              e.next = 14;
              break;
            }
            e.next = 11;
            return m.d(c);
          case 11:
            a.source = e.sent;
            e.next = 15;
            break;
          case 14:
            if (s) {
              delete a.source;
            }
          case 15:
            t.push(a);
          case 16:
            e.next = 4;
            break;
          case 18:
            e.next = 23;
            break;
          case 20:
            e.prev = 20;
            e.t0 = e.catch(2);
            n.e(e.t0);
          case 23:
            e.prev = 23;
            n.f();
            return e.finish(23);
          case 26:
            return e.abrupt("return", t);
          case 27:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[2, 20, 23, 26]]);
  }))).apply(this, arguments);
}
function It() {
  return At.apply(this, arguments);
}
function At() {
  return (At = a.a(i.a.mark(function e() {
    var t;
    var n;
    var r;
    var o;
    var a;
    var s;
    var c;
    var u;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = O.d.getState().resource.soundFileList.toJS();
            n = [];
            r = d.a(t);
            e.prev = 3;
            r.s();
          case 5:
            if ((o = r.n()).done) {
              e.next = 19;
              break;
            }
            if (a = o.value, s = l.a({}, a), c = s.cdnUrl, u = s.source, c || !u || !m.P(u)) {
              e.next = 15;
              break;
            }
            e.next = 12;
            return m.d(u);
          case 12:
            s.source = e.sent;
            e.next = 16;
            break;
          case 15:
            if (c) {
              delete s.source;
            }
          case 16:
            n.push(s);
          case 17:
            e.next = 5;
            break;
          case 19:
            e.next = 24;
            break;
          case 21:
            e.prev = 21;
            e.t0 = e.catch(3);
            r.e(e.t0);
          case 24:
            e.prev = 24;
            r.f();
            return e.finish(24);
          case 27:
            return e.abrupt("return", n);
          case 28:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[3, 21, 24, 27]]);
  }))).apply(this, arguments);
}
function jt() {
  return Nt.apply(this, arguments);
}
function Nt() {
  return (Nt = a.a(i.a.mark(function e() {
    var t;
    var n;
    var r;
    var o;
    var a;
    var s;
    var c;
    var u;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = O.d.getState().resource.iconFileList.toJS();
            n = [];
            r = d.a(t);
            e.prev = 3;
            r.s();
          case 5:
            if ((o = r.n()).done) {
              e.next = 19;
              break;
            }
            if (a = o.value, s = l.a({}, a), c = s.cdnUrl, u = s.source, c || !u || !m.P(u)) {
              e.next = 15;
              break;
            }
            e.next = 12;
            return m.d(u);
          case 12:
            s.source = e.sent;
            e.next = 16;
            break;
          case 15:
            if (c) {
              delete s.source;
            }
          case 16:
            n.push(s);
          case 17:
            e.next = 5;
            break;
          case 19:
            e.next = 24;
            break;
          case 21:
            e.prev = 21;
            e.t0 = e.catch(3);
            r.e(e.t0);
          case 24:
            e.prev = 24;
            r.f();
            return e.finish(24);
          case 27:
            return e.abrupt("return", n);
          case 28:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[3, 21, 24, 27]]);
  }))).apply(this, arguments);
}
function Rt(e) {
  var t = p.a.findIndex(function (t) {
    return t.id === e;
  });
  !function (e) {
    p.g.forEach(function (t) {
      if (t.type === f.v && t.attributes.fileId === e) {
        t.attributes.fileId = "";
      }
      if (t.type === f.f && t.attributes.backgroundImage === e) {
        t.attributes.backgroundImage = "";
      }
    });
  }(e);
  p.a.splice(t, 1);
}
function kt(e) {
  var t = document.getElementById(e);
  return (null === t || undefined === t ? undefined : t.dataset.clickType) === C.h.CLICK;
}
function xt(e) {
  p.g.forEach(function (t) {
    if (t.type === f.b && t.attributes.fileId === e) {
      t.attributes.fileId = "";
    }
  });
}
function Dt(e) {
  return !!rt(e);
}
function Mt(e, t) {
  var n = w.z.checkOtherScreenFieldValueIsSelected(e, t);
  var r = O.d.getState().project.screens;
  var o = O.d.getState().project.currentScreenIndex;
  var i = [];
  r.forEach(function (e, t) {
    if (n.includes(e.id)) {
      i.push(t + 1);
    }
  });
  if (w.z.checkFieldValueIsSelected(e, t) && !i.includes(o + 1)) {
    i.push(o + 1);
  }
  i.sort(function (e, t) {
    return e - t;
  });
  return i;
}
function Lt(e) {
  var t;
  var n = O.d.getState().project.screens;
  var r = d.a(n);
  try {
    for (r.s(); !(t = r.n()).done;) {
      if (t.value.backgroundImage === e) {
        return true;
      }
    }
  } catch (o) {
    r.e(o);
  } finally {
    r.f();
  }
  return false;
}
function Pt(e) {
  return Array.from(p.g).some(function (t) {
    return t[1].type === e;
  });
}
function Bt(e) {
  var t = [];
  p.a.forEach(function (n) {
    if (n.groupId === e) {
      t.push(n);
    }
  });
  return t;
}
function Ft(e) {
  return p.a.find(function (t) {
    return (null === t || undefined === t ? undefined : t.cdnUrl) === (null === e || undefined === e ? undefined : e.cdnUrl) && t.groupId === e.id;
  });
}
function Gt(e, t, n) {
  return t + n.split(e)[1];
}
function Ut(e, t) {
  var n = rt(t);
  return (null === n || undefined === n ? undefined : n.groupId) === e;
}
export default pe;