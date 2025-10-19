/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：289
 */

"use strict";

export { s as c };
export { l as b };
export { d as a };
import r = require("regenerator-runtime");
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
import i = require("./7");
import a = require("../../../../src/shared/widget/custom/shop");
function s(e) {
  return c.apply(this, arguments);
}
function c() {
  return (c = i.a(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var s;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (i = JSON.stringify(t), s = true, !i.includes("UNSAFE_EXTENSION_") && !(null === t || undefined === t || null === (n = t.unsafeExtensionWidgetList) || undefined === n ? undefined : n.length)) {
              e.next = 7;
              break;
            }
            console.info("当前作品包含自定义控件");
            s = false;
            e.next = 28;
            break;
          case 7:
            if (!((null === t || undefined === t || null === (r = t.extensionWidgetList) || undefined === r ? undefined : r.length) > 0)) {
              e.next = 28;
              break;
            }
            c = [];
            l = 1;
            u = 100;
            e.next = 13;
            return a.e(l, u);
          case 13:
            if (d = e.sent, c = c.concat(d.items.map(function (e) {
              return e.resource_url;
            })), !((p = Math.ceil(d.total / u)) > 1)) {
              e.next = 26;
              break;
            }
            l += 1;
          case 18:
            if (!(l <= p)) {
              e.next = 26;
              break;
            }
            e.next = 21;
            return a.e(l, u);
          case 21:
            f = e.sent;
            c = c.concat(f.items.map(function (e) {
              return e.resource_url;
            }));
          case 23:
            l++;
            e.next = 18;
            break;
          case 26:
            if (t.extensionWidgetList.filter(function (e) {
              return !c.includes(e.cdnUrl);
            }).length > 0) {
              console.info("当前作品包含自定义控件");
              s = false;
            }
          case 28:
            if (!s) {
              document.body.classList.add("intercepting");
              t.widgetMap = {};
              t.extensionWidgetList = [];
              t.unsafeExtensionWidgetList = [];
              t.blockCode = "";
            }
            return e.abrupt("return", t);
          case 30:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function l() {
  return u.apply(this, arguments);
}
function u() {
  return (u = i.a(o.a.mark(function e() {
    var t;
    var n;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch("https://static.codemao.cn/coco/whitelist.json");
          case 2:
            t = e.sent;
            e.next = 5;
            return t.json();
          case 5:
            n = e.sent;
            return e.abrupt("return", n);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function d(e) {
  var t = document.createElement("iframe");
  t.src = "".concat(window.location.origin, "/editor?playerBcmUrl=").concat(e);
  t.style.display = "none";
  t.id = "editor-iframe";
  document.body.appendChild(t);
}
export default d;