"use strict";

export { g as b };
export { b as c };
export { A as g };
export { j as f };
export { N as d };
export { R as e };
export { k as a };
import * as r from "./1/index";
import * as o from "./1/index";
import * as i from "./10/index";
import * as a from "./6";
import * as s from "./25/index";
import * as c from "./7";
import * as l from "./31/index";
import * as u from "./38/index";
import * as d from "./9";
import * as p from "./26/index";
import * as f from "./5";
import * as h from "./98";
import * as m from "./38/375";
function g(e) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = Object(c.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    var s;
    var c;
    var m;
    var g;
    var _;
    var b;
    var y;
    var C;
    var T;
    var S;
    var I;
    var A;
    var j;
    var N;
    var R;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = u.d.getState();
            i = r.project;
            a = i.title;
            s = i.globalVariableList;
            c = i.globalArrayList;
            m = i.globalWidgetIds;
            g = i.globalObjectList;
            _ = i.version;
            b = i.projectSource;
            y = null === (n = r.common.userInfo) || void 0 === n ? void 0 : n.id;
            C = w(r.project.screens);
            T = r.project.screens.map(function (e) {
              return e.id;
            }).toJSON();
            S = p.z.getWorkspacesRecord();
            I = E(S, m);
            A = Object(l.cloneDeep)(O(I));
            j = Object(h.d)();
            N = Object(h.e)();
            e.t0 = l.cloneDeep;
            e.t1 = y;
            e.t2 = a;
            e.t3 = _;
            e.t4 = C;
            e.t5 = T;
            e.t6 = S;
            e.next = 19;
            return Object(d.H)();
          case 19:
            e.t7 = e.sent;
            e.next = 22;
            return Object(d.I)();
          case 22:
            e.t8 = e.sent;
            e.next = 25;
            return Object(d.G)();
          case 25:
            e.t9 = e.sent;
            e.t10 = v();
            e.t11 = s;
            e.t12 = c;
            e.t13 = g;
            e.t14 = I;
            e.t15 = A;
            e.t16 = j;
            e.t17 = N;
            e.t18 = b.tag;
            e.t19 = b.id;
            e.t20 = {
              authorId: e.t1,
              title: e.t2,
              version: e.t3,
              screens: e.t4,
              screenIds: e.t5,
              blockly: e.t6,
              imageFileList: e.t7,
              soundFileList: e.t8,
              iconFileList: e.t9,
              fontFileList: e.t10,
              globalVariableList: e.t11,
              globalArrayList: e.t12,
              globalObjectList: e.t13,
              globalWidgetIds: e.t14,
              globalWidgets: e.t15,
              extensionWidgetList: e.t16,
              unsafeExtensionWidgetList: e.t17,
              sourceTag: e.t18,
              sourceId: e.t19
            };
            R = (0, e.t0)(e.t20);
            if (!t) {
              Object.keys(R.globalWidgets).forEach(function (e) {
                var t = R.globalWidgets[e];
                if (t.type === f.l) {
                  t.attributes.fields.forEach(function (e) {
                    e.value = "";
                  });
                }
              });
            }
            return e.abrupt("return", R);
          case 40:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function v() {
  var e = u.d.getState();
  var t = e.resource.fontFileList;
  var n = {};
  var r = e.project.screens;
  var o = [];
  var i = {};
  t.forEach(function (e) {
    n[e.id] = e;
  });
  r.forEach(function (e) {
    e.widgetIds.forEach(function (e) {
      var t = Object(d.Bb)(e);
      if ((null === t || void 0 === t ? void 0 : t.type) === f.H || (null === t || void 0 === t ? void 0 : t.type) === f.z || (null === t || void 0 === t ? void 0 : t.type) === f.w) {
        var r = t.attributes.fontFamily;
        if (!i[r]) {
          if (n[r].cdnUrl) {
            o.push(n[r]);
          }
          i[r] = !0;
        }
      }
      if (t && t.attributes && "EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type) {
        var a = t.attributes.content;
        var s = void 0 === a ? "" : a;
        Object(m.a)(s).forEach(function (e) {
          if (!i[e]) {
            if (n[e].cdnUrl) {
              o.push(n[e]);
            }
            i[e] = !0;
          }
        });
      }
    });
  });
  return o;
}
function b() {
  return y.apply(this, arguments);
}
function y() {
  return (y = Object(c.a)(o.a.mark(function e() {
    var t;
    var n;
    var r;
    var i;
    var a;
    var s;
    var c;
    var m;
    var g;
    var _;
    var v;
    var b;
    var y;
    var E;
    var A;
    var j;
    var N;
    var R;
    var k;
    var x;
    var D;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = u.d.getState();
            r = n.project;
            i = r.title;
            a = r.globalVariableList;
            s = r.globalArrayList;
            c = r.globalWidgetIds;
            m = r.version;
            g = r.globalObjectList;
            _ = null === (t = n.common.userInfo) || void 0 === t ? void 0 : t.id;
            v = C(n.cloudSpace.cloudDictKeysList);
            b = S(n.cloudSpace.cloudTableColumnList);
            y = I(n.cloudSpace.cloudTableDataList);
            E = T(n.cloudSpace.cloudDictList);
            A = T(n.cloudSpace.cloudTableList);
            j = w(n.project.screens);
            N = n.project.screens.map(function (e) {
              return e.id;
            }).toJSON();
            R = p.z.getWorkspacesRecord();
            k = Object(h.d)();
            x = Object(h.e)();
            e.t0 = l.cloneDeep;
            e.t1 = _;
            e.t2 = i;
            e.t3 = m;
            e.t4 = j;
            e.t5 = N;
            e.t6 = R;
            e.next = 22;
            return Object(d.H)();
          case 22:
            e.t7 = e.sent;
            e.next = 25;
            return Object(d.I)();
          case 25:
            e.t8 = e.sent;
            e.next = 28;
            return Object(d.G)();
          case 28:
            e.t9 = e.sent;
            e.t10 = a;
            e.t11 = s;
            e.t12 = g;
            e.t13 = c;
            e.t14 = O(c);
            e.t15 = k;
            e.t16 = x;
            e.t17 = v;
            e.t18 = b;
            e.t19 = y;
            e.t20 = E;
            e.t21 = A;
            e.t22 = {
              authorId: e.t1,
              title: e.t2,
              version: e.t3,
              screens: e.t4,
              screenIds: e.t5,
              blockly: e.t6,
              imageFileList: e.t7,
              soundFileList: e.t8,
              iconFileList: e.t9,
              globalVariableList: e.t10,
              globalArrayList: e.t11,
              globalObjectList: e.t12,
              globalWidgetIds: e.t13,
              globalWidgets: e.t14,
              extensionWidgetList: e.t15,
              unsafeExtensionWidgetList: e.t16,
              cloudDictKeysList: e.t17,
              cloudTableColumnList: e.t18,
              cloudTableDataList: e.t19,
              cloudDictList: e.t20,
              cloudTableList: e.t21
            };
            D = (0, e.t0)(e.t22);
            Object.keys(D.globalWidgets).forEach(function (e) {
              var t = D.globalWidgets[e];
              if (t.type === f.l) {
                t.attributes.fields.forEach(function (e) {
                  e.value = "";
                });
              }
            });
            return e.abrupt("return", D);
          case 45:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function E(e, t) {
  var n = [];
  Object.keys(e).forEach(function (t) {
    var r;
    var o = null === (r = e[t].workspaceJson) || void 0 === r ? void 0 : r.blocks;
    if (o) {
      Object.keys(o).forEach(function (e) {
        var t = o[e].fields.WIDGET_ID;
        if (t && t.startsWith(f.l) && !n.includes(t)) {
          n.push(t);
        }
      });
    }
  });
  return [].concat(Object(s.a)(t.filter(function (e) {
    return !e.startsWith(f.l);
  })), n);
}
function O(e) {
  var t = {};
  e.forEach(function (e) {
    var n = Object(d.Bb)(e);
    if (n && n.type) {
      t[e] = n;
    }
  });
  return t;
}
function w(e) {
  var t = {};
  e.toJSON().forEach(function (e) {
    var n = e.toJSON();
    t[n.id] = A(n);
  });
  return t;
}
function C(e) {
  var t = {};
  e.forEach(function (e) {
    t[e.id] = e.data;
  });
  return t;
}
function T(e) {
  return Object(s.a)(e);
}
function S(e) {
  var t = {};
  e.forEach(function (e) {
    t[e.id] = e.columns;
  });
  return t;
}
function I(e) {
  var t = {};
  e.forEach(function (e) {
    t[e.id] = e.data;
  });
  return t;
}
function A(e) {
  var t;
  var n = Object(l.cloneDeep)(Object(a.a)(Object(a.a)({}, e), {}, {
    widgets: {}
  }));
  e.widgetIds.forEach(function (e) {
    var t = Object(d.Bb)(e);
    if (t) {
      n.widgets[e] = t;
    }
  });
  if (!(null === (t = e.invisibleWidgetIds) || void 0 === t)) {
    t.forEach(function (e) {
      var t = Object(d.Bb)(e);
      if (t) {
        n.widgets[e] = t;
      }
    });
  }
  return n;
}
function j(e) {
  var t = {};
  Object.entries(e).forEach(function (e) {
    var n = Object(i.a)(e, 2);
    var r = (n[0], n[1]);
    t = Object(a.a)(Object(a.a)({}, t), r.widgets);
  });
  return t;
}
function N(e) {
  var t = Object(l.cloneDeep)(e);
  if (!t.invisibleWidgetIds) {
    t.invisibleWidgetIds = [];
  }
  delete t.widgets;
  return t;
}
function R(e, t) {
  return t.map(function (t) {
    return N(e[t]);
  });
}
function k(e) {
  return !e.startsWith("PROJECT");
}