"use strict";

export { l as c };
export { d as b };
export { p as a };
import r = require("../47");
import o = require("../5");
import i = require("../9");
import a = require("../97");
import s = require("../77");
import c = require("../131");
function l(e, t) {
  for (var n in e) {
    var r = e[n];
    if (1 === t) {
      if (r.type === o.v && "" === r.attributes.fileId) {
        r.attributes.fileId = "https://creation.codemao.cn/coconut/web/1.10.0/static/media/defaultImage.8392642c.svg";
      }
      if (r.type !== o.H || r.parentId) {
        if (r.type === o.w) {
          var c = r.attributes.sizeType;
          if (c) {
            var l = i.ob(c);
            r.size.height = l.height;
            r.attributes.fontSize = l.fontSize;
          }
          if (r.attributes.color) {
            r.attributes.backgroundColor = r.attributes.color;
          }
          if (r.attributes.mode) {
            r.attributes.templateMode = r.attributes.mode;
          }
          r.attributes.placeholderColor = a.n;
          r.attributes.valueColor = a.o;
          r.attributes.fontFamily = a.f;
          r.attributes.backgroundMode = s.a.TEMPLATE;
          r.attributes.backgroundImage = a.a;
          r.attributes.imageResizeMode = s.b.CONTAIN;
        } else if (r.type === o.F) {
          u(r);
        }
      } else {
        var d = "__textWidgetMigrateContainer";
        var p = document.getElementById(d);
        if (!p) {
          (p = document.createElement("div")).id = d;
          p.style.whiteSpace = "pre";
          p.style.wordBreak = "break-all";
          p.style.position = "absolute";
          p.style.zIndex = "-100";
          p.style.visibility = "hidden";
          p.style.padding = "6px";
          document.body.appendChild(p);
        }
        var f = r.attributes;
        var h = f.fontSize;
        var m = f.content.replace(/&nbsp;/g, " ");
        r.attributes.content = m;
        if (40 === r.size.width && 40 === r.size.height && r.attributes.sizeAdaptive === o.q.AUTO_ALL) {
          p.style.fontSize = "".concat(h, "px");
          p.innerText = m;
          r.size.width = Math.max(40, p.clientWidth);
          r.size.height = Math.max(40, p.clientHeight);
          r.attributes.sizeAdaptive = o.q.AUTO_HEIGHT;
          p.innerText = "";
        } else {
          r.attributes.sizeAdaptive = o.q.FIXED;
        }
      }
    } else if (2 === t && r.type === o.F) {
      u(r);
    }
  }
}
function u(e) {
  var t = e.attributes.mode;
  var n = e.attributes.sizeType;
  if (t && n) {
    var r = c.l[t][n];
    e.size.width = r.width;
    e.size.height = r.height;
  }
  e.attributes.backgroundMode = s.a.TEMPLATE;
  e.attributes.imageResizeMode = s.b.CONTAIN;
}
function d(e) {
  var t = e.screens;
  Object.values(t).forEach(function (e) {
    if (!e.objectVariables) {
      e.objectVariables = [];
    }
  });
  if (!e.globalObjectList) {
    e.globalObjectList = [];
  }
}
function p(e) {
  var t = function (e) {
    var t = [];
    for (var n in e) if (e[n]) {
      var r = e[n].blocks;
      if (r) {
        for (var o in r) {
          var i = r[o].fields;
          if (i) {
            var a = i.BROADCAST;
            if (a && !t.includes(a)) {
              t.push(a);
            }
          }
        }
      }
    }
    return t;
  }(e.blockJsonMap);
  return {
    title: e.title,
    screenIds: e.screenList.map(function (e) {
      return e.id;
    }),
    screens: f(e.screenList, e.widgetMap, t),
    blockly: h(e.blockJsonMap),
    imageFileList: m(e.imageFileList),
    soundFileList: m(e.soundFileList),
    iconFileList: m(e.iconFileList),
    version: e.version,
    apiToken: e.apiToken || "",
    globalVariableList: v(e.variableMap).variableList,
    globalArrayList: v(e.variableMap).arrayList,
    globalObjectList: v(e.variableMap).objectList,
    globalWidgetIds: g(e.widgetMap).list,
    globalWidgets: g(e.widgetMap).map,
    authorId: e.authorId,
    extensionWidgetList: e.extensionWidgetList,
    unsafeExtensionWidgetList: e.unsafeExtensionWidgetList,
    fontFileList: m(e.fontFileList),
    sourceTag: e.sourceTag,
    sourceId: e.sourceId
  };
}
function f(e, t, n) {
  var o;
  var i = {};
  var a = r.a(e);
  try {
    for (a.s(); !(o = a.n()).done;) {
      var s = o.value;
      s.arrayVariables = [];
      s.broadcasts = n;
      s.objectVariables = [];
      s.primitiveVariables = [];
      s.widgets = _(s.widgetIds.concat(s.invisibleWidgetIds), t);
      i[s.id] = s;
    }
  } catch (c) {
    a.e(c);
  } finally {
    a.f();
  }
  return i;
}
function h(e) {
  var t = {};
  for (var n in e) t[n] = {
    screenId: n,
    workspaceJson: e[n],
    workspaceOffset: {
      x: 0,
      y: 0
    }
  };
  return t;
}
function m() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  var t = [];
  for (var n in e) t.push(e[n]);
  return t;
}
function g(e) {
  var t = [];
  var n = {};
  for (var r in e) if (e[r].isGlobalWidget) {
    t.push(r);
    n[r] = e[r];
  }
  return {
    list: t,
    map: n
  };
}
function _(e, t) {
  var n = {};
  e.forEach(function (e) {
    n[e] = t[e];
  });
  return n;
}
function v() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  var t = [];
  var n = [];
  var r = [];
  for (var o in e) if (o.startsWith("VARIABLE")) {
    t.push({
      defaultValue: e[o],
      id: o,
      name: o,
      value: e[o]
    });
  } else {
    if (o.startsWith("OBJECT")) {
      r.push({
        defaultValue: e[o],
        id: o,
        name: o,
        value: e[o]
      });
    } else {
      if (o.startsWith("ARRAY")) {
        n.push({
          defaultValue: e[o],
          id: o,
          name: o,
          value: e[o]
        });
      }
    }
  }
  return {
    variableList: t,
    objectList: r,
    arrayList: n
  };
}
export default p;