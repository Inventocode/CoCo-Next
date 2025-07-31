"use strict";

export { b } from "../227/262";
export { a } from "../227/262";
export { e as h } from "../227/262";
export { h as g };
export { W as u };
export { he as f };
export { me as e };
export { ge as d };
export { ve as j };
export { ye as k };
export { Ee as z };
export { Ne as i };
export { We as c };
export { ze as m };
export { Ye as q };
export { Ke as l };
export { qe as y };
export { Xe as x };
export { Qe as n };
export { Ze as t };
export { Je as o };
export { $e as p };
export { et as v };
export { tt as r };
export { nt as w };
export { rt as s };
var r;
var o = require("../227/262");
var i = require("../25/index");
var a = require("../27");
var s = require("../40");
var c = require("../17/index");
var l = require("../9");
var u = require("../23");
var d = require("../301/index");
var p = require("../5");
var f = require("../15/index");
var h = new (function () {
  function e() {
    Object(a.a)(this, e);
    this.lastSelectedWidgetCategoryName = void 0;
    this.basicToolboxConfig = void 0;
  }
  Object(s.a)(e, [{
    key: "getToolbox",
    value: function () {
      var e;
      return null === (e = c.Blink.mainWorkspace) || void 0 === e ? void 0 : e.get_toolbox();
    }
  }, {
    key: "convertBlockTypeToXml",
    value: function (e) {
      var t = Object(d.a)();
      var n = "<xml>";
      e.forEach(function (e) {
        if (e !== o.c) {
          if (t[e]) {
            n += t[e];
          } else {
            n += e;
          }
        } else {
          n += '<sep gap="50"></sep>';
        }
      });
      n += "</xml>";
      return c.Blink.xml.text_to_dom(n).children;
    }
  }, {
    key: "getConfig",
    value: function () {
      var e = this;
      if (this.basicToolboxConfig) {
        return this.basicToolboxConfig;
      }
      var t = Object.keys(o.f).map(function (t) {
        var n = o.f[t];
        return {
          name: n.id,
          text: n.text,
          icon: {
            font_id: n.iconId
          },
          blocks: Array.isArray(n.blocks) ? e.convertBlockTypeToXml(n.blocks) : n.blocks
        };
      });
      this.basicToolboxConfig = [].concat(Object(i.a)(t), [{
        name: "toolbox-widget",
        text: "%{BKY_COMPONENTS}",
        children: [],
        selectable: !1,
        element: {
          unselected_classname: "cocoToolboxWidgetTab",
          selected_classname: "cocoToolboxWidgetTabSelected"
        },
        icon: {
          font_id: "icon-fold"
        }
      }, {
        name: "toolbox-invisible-widget",
        text: "%{BKY_INVISIBLE_COMPONENTS}",
        children: [],
        selectable: !1,
        element: {
          unselected_classname: "cocoToolboxWidgetTab",
          selected_classname: "cocoToolboxWidgetTabSelected"
        },
        icon: {
          font_id: "icon-fold"
        }
      }, {
        name: "toolbox-global-widget",
        text: "%{BKY_GLOBAL_COMPONENTS}",
        children: [],
        selectable: !1,
        element: {
          unselected_classname: "cocoToolboxWidgetTab",
          selected_classname: "cocoToolboxWidgetTabSelected"
        },
        icon: {
          font_id: "icon-fold"
        }
      }, {
        name: "toolbox-any-widget",
        text: "%{BKY_ANY_COMPONENTS}",
        children: [],
        selectable: !1,
        element: {
          unselected_classname: "cocoToolboxWidgetTab",
          selected_classname: "cocoToolboxWidgetTabSelected"
        },
        icon: {
          font_id: "icon-fold"
        }
      }]);
      return this.basicToolboxConfig;
    }
  }, {
    key: "_appendTreeNode",
    value: function (e, t, n, r, i, a) {
      var s = this.getToolbox();
      if (s) {
        var c = r.find(function (t) {
          return t.get_name() === e;
        });
        if (!c) {
          if (n === p.m) {
            return;
          }
          var l = Object(o.e)()[n];
          if (!l) {
            return void console.error("Type [".concat(n, "] has no toolbox config. "));
          }
          c = s.new_node({
            name: e,
            text: t || l.text || Object(u.c)(u.b, "untitled"),
            icon: {
              font_id: Object(f.X)(l.iconId) ? void 0 : l.iconId,
              html: Object(f.X)(l.iconId) ? '<img draggable="false" style="width: 16px; height: 16px;" src="'.concat(l.iconId, '">') : void 0
            },
            blocks: a ? "ANY_".concat(n) : Array.isArray(l.blocks) ? this.convertBlockTypeToXml(l.blocks) : l.blocks
          });
        }
        i.add_child_at(c, 0);
      }
    }
  }, {
    key: "update",
    value: function (e) {
      var t;
      var n = this;
      var r = this.getToolbox();
      if (r && e) {
        var o = r.find_node_by_name("toolbox-widget");
        var i = r.find_node_by_name("toolbox-invisible-widget");
        if (!o || !i) {
          throw Error("Trying to update toolbox before init");
        }
        var a = o.remove_children();
        var s = i.remove_children();
        try {
          var c;
          if ((null === (c = e.invisibleWidgetIds) || void 0 === c ? void 0 : c.length) > 0) {
            i.html_div.style.display = "block";
          } else {
            i.html_div.style.display = "none";
          }
        } catch (d) {
          console.error(d);
        }
        var u = [];
        this._appendTreeNode(e.id, e.title, p.D, a, o);
        e.widgetIds.forEach(function (e) {
          var t = l.dc.get(e);
          if (t) {
            var r = Object(l.qb)(e);
            if (!((null === r || void 0 === r ? void 0 : r.type) && [p.x, p.A].includes(r.type))) {
              n._appendTreeNode(t.id, Object(l.Fb)(t.id), t.type, a, o);
              if (-1 === u.indexOf(t.type)) {
                u.unshift(t.type);
              }
            }
          }
        });
        if (!(null === (t = e.invisibleWidgetIds) || void 0 === t)) {
          t.forEach(function (e) {
            var t = l.dc.get(e);
            if (t) {
              n._appendTreeNode(t.id, Object(l.Fb)(t.id), t.type, s, i);
              if (-1 === u.indexOf(t.type)) {
                u.unshift(t.type);
              }
            }
          });
        }
      }
    }
  }, {
    key: "updateGlobalWidget",
    value: function (e) {
      var t = this;
      var n = this.getToolbox();
      if (n && e) {
        var r = n.find_node_by_name("toolbox-global-widget");
        if (!r) {
          throw Error("Trying to update toolbox before init");
        }
        try {
          if (e.length > 0) {
            r.html_div.style.display = "block";
          } else {
            r.html_div.style.display = "none";
          }
        } catch (a) {
          console.error(a);
        }
        var o = r.remove_children();
        var i = [];
        e.forEach(function (e) {
          var n = l.dc.get(e);
          if (n) {
            t._appendTreeNode(n.id, Object(l.Fb)(n.id), n.type, o, r);
            if (-1 === i.indexOf(n.type)) {
              i.unshift(n.type);
            }
          }
        });
      }
    }
  }, {
    key: "updateAnyWidget",
    value: function (e) {
      var t = this;
      var n = this.getToolbox();
      if (n && e) {
        var r = n.find_node_by_name("toolbox-any-widget");
        if (!r) {
          throw Error("Trying to update toolbox before init");
        }
        var o = r.remove_children();
        var i = [];
        e.forEach(function (e) {
          t._appendTreeNode("ANY_" + e, e, e, o, r, !0);
          if (-1 === i.indexOf(e)) {
            i.unshift(e);
          }
        });
      }
    }
  }, {
    key: "updateToolBoxWidgetTitle",
    value: function (e, t) {
      var n;
      var r;
      var o = null === (n = c.Blink.mainWorkspace) || void 0 === n || null === (r = n.get_toolbox()) || void 0 === r ? void 0 : r.find_node_by_name(e);
      if (o) {
        o.get_element().getElementsByClassName("blocklyTreeLabel")[0].textContent = t;
      }
    }
  }, {
    key: "changeSelectWidgetCategoryStyle",
    value: function (e) {
      if (this.clearLastSelectWidgetCategoryStyle(), this.lastSelectedWidgetCategoryName = e, e) {
        var t;
        var n = e;
        var r = Object(l.qb)(e);
        if ((null === r || void 0 === r ? void 0 : r.type) && [p.x, p.A].includes(r.type)) {
          n = r.id;
        }
        var o = null === (t = c.Blink.mainWorkspace.get_toolbox()) || void 0 === t ? void 0 : t.find_node_by_name(n);
        if (o) {
          o.get_element().classList.add("cocoWidgetSelected");
        }
      }
    }
  }, {
    key: "clearLastSelectWidgetCategoryStyle",
    value: function () {
      var e = document.getElementsByClassName("cocoWidgetSelected")[0];
      if (e) {
        e.classList.remove("cocoWidgetSelected");
      }
    }
  }, {
    key: "checkIsWidgetCategory",
    value: function (e) {
      var t;
      var n;
      var r;
      var o = this.getToolbox();
      if (o) {
        var i = null === (t = o.find_node_by_name("toolbox-widget")) || void 0 === t ? void 0 : t.get_children();
        if (i && i.indexOf(e) > -1) {
          return !0;
        }
        var a = null === (n = o.find_node_by_name("toolbox-invisible-widget")) || void 0 === n ? void 0 : n.get_children();
        if (a && a.indexOf(e) > -1) {
          return !0;
        }
        var s = null === (r = o.find_node_by_name("toolbox-global-widget")) || void 0 === r ? void 0 : r.get_children();
        return !!(s && s.indexOf(e) > -1);
      }
    }
  }, {
    key: "getSelectWidgetCategoryName",
    value: function () {
      var e;
      var t = null === (e = this.getToolbox()) || void 0 === e ? void 0 : e.get_selected();
      if (t && this.checkIsWidgetCategory(t)) {
        return t.get_name();
      }
    }
  }, {
    key: "setSelectedItem",
    value: function (e) {
      var t;
      if (!(null === (t = this.getToolbox()) || void 0 === t)) {
        t.set_selected_item(e);
      }
    }
  }, {
    key: "setSelectedItemByWidgetId",
    value: function (e) {
      var t = this.getToolbox();
      if (null === t || void 0 === t ? void 0 : t.flyout.is_visible()) {
        if (!(null === t || void 0 === t)) {
          t.set_selected_item(null === t || void 0 === t ? void 0 : t.find_node_by_name(e));
        }
      }
    }
  }]);
  return e;
}())();
var m = require("./653");
var g = (module => {
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
})(m);
var _ = require("./654");
var v = (module => {
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
})(_);
var b = require("./655");
var y = (module => {
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
})(b);
var E = require("./656");
var O = (module => {
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
})(E);
var w = require("./657");
var C = (module => {
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
})(w);
var T = require("./658");
var S = (module => {
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
})(T);
var I = require("./659");
var A = (module => {
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
})(I);
var j = require("./660");
var N = (module => {
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
})(j);
var R = require("./661");
var k = (module => {
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
})(R);
var x = require("./662");
var D = (module => {
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
})(x);
var M = require("./663");
var L = (module => {
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
})(M);
var P = require("./664");
var B = (module => {
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
})(P);
var F = require("./665");
var G = (module => {
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
})(F);
var U = {
  BLOCK_CLOUD_ICON: g.a,
  BLOCK_CLOUD_VARIABLE_ICON: v.a,
  BLOCK_PHONE_SHAKE_ICON: y.a,
  BLOCK_INPUT_ICON: O.a,
  BLOCK_INTERNET_ICON: C.a,
  BLOCK_SMS_ICON: S.a,
  BLOCK_PHONE_ICON: A.a,
  BLOCK_TAB_ICON: N.a,
  BLOCK_PEDOMETER_ICON: k.a,
  BLOCK_LIST_ICON: D.a,
  BLOCK_DICT_ICON: L.a,
  BLOCK_CLOUD_DICT_ICON: B.a,
  BLOCK_CLOUD_TABLE_ICON: G.a
};
var W = function () {
  for (var e in U) c.Blink.Msg[e] = U[e];
};
var H = require("../6");
var V = require("../1/index");
var z = (module => {
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
})(V);
var Y = require("../7");
var K = require("../206/208/index");
var q = require("../38/index");
var X = require("../53");
var Q = require("../47");
var Z = require("../4/127");
var J = require("../2/index");
!function (e) {
  e.PNG = "dataurl+png";
  e.SVG_ASCII = "dataurl+ascii";
  e.SVG_BASE64 = "dataurl+base64";
  e.XML = "xml";
}(r || (r = {}));
var $ = "http://www.w3.org/2000/svg";
var ee = "http://www.w3.org/1999/xlink";
function te(e) {
  return ne.apply(this, arguments);
}
function ne() {
  return (ne = Object(Y.a)(z.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var i;
    var a;
    var s;
    var l;
    var u = arguments;
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = u.length > 1 && void 0 !== u[1] ? u[1] : 2, o = null === (n = c.Blink.mainWorkspace.get_block_by_id(t)) || void 0 === n ? void 0 : n.svg_group) {
              e.next = 4;
              break;
            }
            return e.abrupt("return");
          case 4:
            e.next = 6;
            return ce(o);
          case 6:
            i = e.sent;
            a = o.getBBox();
            s = (a.width + 10) * r;
            l = (a.height + 10) * r;
            ue(i, s, l, "png", function (e) {
              q.d.dispatch(Object(J.bi)(!0, e));
            });
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function re(e, t) {
  return oe.apply(this, arguments);
}
function oe() {
  return (oe = Object(Y.a)(z.a.mark(function e(t, n) {
    var r;
    var o;
    var i;
    var a;
    var s;
    var c;
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = 2;
            o = t.type;
            e.next = 4;
            return ce(n);
          case 4:
            i = e.sent;
            a = n.getBBox();
            s = (a.width + 10) * r;
            c = (a.height + 10) * r;
            return e.abrupt("return", new Promise(function (e) {
              ue(i, s, c, "png", function (n) {
                var r = t;
                var i = t.type;
                var a = t.widgetType || "";
                if (a = a.toLowerCase(), "widget_event" === o) {
                  var s = r.event;
                  i = "".concat(a, "_event_").concat(s);
                } else if ("widget_get" === o) {
                  var c = r.property;
                  i = "".concat(a, "_get_").concat(c);
                } else if ("widget_set" === o) {
                  var l = r.property;
                  i = "".concat(a, "_set_").concat(l);
                } else if ("widget_method" === o) {
                  var u = r.method;
                  i = "".concat(a, "_method_").concat(u);
                }
                var d = document.createElement("a");
                d.href = n;
                d.download = "".concat(i, ".png");
                d.click();
                e(i);
              });
            }));
          case 9:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function ie() {
  return ae.apply(this, arguments);
}
function ae() {
  return (ae = Object(Y.a)(z.a.mark(function e() {
    var t;
    var n;
    var r;
    var o;
    var i;
    var a;
    var s;
    var l;
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = null === (t = c.Blink.mainWorkspace.get_flyout()) || void 0 === t ? void 0 : t.get_workspace()) {
              e.next = 3;
              break;
            }
            return e.abrupt("return");
          case 3:
            r = n.get_top_blocks(!1);
            o = Object(Q.a)(r);
            e.prev = 5;
            o.s();
          case 7:
            if ((i = o.n()).done) {
              e.next = 18;
              break;
            }
            if (s = i.value, l = null === (a = n.get_block_by_id(s.id)) || void 0 === a ? void 0 : a.svg_group) {
              e.next = 12;
              break;
            }
            return e.abrupt("return");
          case 12:
            e.next = 14;
            return re(s, l);
          case 14:
            e.next = 16;
            return Object(f.lb)(200);
          case 16:
            e.next = 7;
            break;
          case 18:
            e.next = 23;
            break;
          case 20:
            e.prev = 20;
            e.t0 = e.catch(5);
            o.e(e.t0);
          case 23:
            e.prev = 23;
            o.f();
            return e.finish(23);
          case 26:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[5, 20, 23, 26]]);
  }))).apply(this, arguments);
}
var se = "batchDownloadBlockImage=1".toLowerCase();
function ce(e) {
  return le.apply(this, arguments);
}
function le() {
  return (le = Object(Y.a)(z.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var i;
    var a;
    var s;
    var l;
    var u;
    var d;
    var p;
    var f;
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            (n = t.cloneNode(!0)).removeAttribute("width");
            n.removeAttribute("height");
            n.removeAttribute("transform");
            r = n.querySelectorAll("image");
            o = z.a.mark(function e(t) {
              var n;
              return z.a.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (!(n = r[t].getAttributeNS(ee, "href")) || !n.match(/\.svg$/g)) {
                        e.next = 4;
                        break;
                      }
                      e.next = 4;
                      return fetch(n).then(function (e) {
                        return e.text();
                      }).then(function (e) {
                        var n = "data:image/svg+xml," + encodeURIComponent(e);
                        r[t].setAttributeNS(ee, "href", n);
                      });
                    case 4:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            });
            i = 0;
          case 7:
            if (!(i < r.length)) {
              e.next = 12;
              break;
            }
            return e.delegateYield(o(i), "t0", 9);
          case 9:
            i++;
            e.next = 7;
            break;
          case 12:
            a = document.createElementNS("http://www.w3.org/2000/svg", "style");
            s = c.Blink.di_container.get(Z.BINDING.css);
            a.textContent = "".concat(s.CONTENT, " .blocklyDropdownArrow{ fill: rgba(0, 0, 0, .1); }");
            (l = t.getBBox()).x -= 5;
            l.y -= 5;
            l.width += 10;
            l.height += 10;
            u = new XMLSerializer();
            d = u.serializeToString(document.querySelector("defs"));
            p = u.serializeToString(a);
            f = u.serializeToString(n);
            d = d.replace(/[\n\r]|\s{2,}/g, "");
            return e.abrupt("return", '<svg xmlns="'.concat($, '" xmlns:xlink="').concat(ee, '" width="').concat(l.width, '" height="').concat(l.height, '"') + ' viewBox="'.concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height, '">\n      ').concat(d, "\n      ").concat(p, "\n      ").concat(f, "\n    </svg>"));
          case 26:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function ue(e, t, n, r, o) {
  r = r || "png";
  var i = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e)));
  var a = document.createElement("canvas");
  var s = a.getContext("2d");
  if (s) {
    a.width = t;
    a.height = n;
    var c = new Image();
    c.onload = function () {
      s.clearRect(0, 0, t, n);
      s.drawImage(c, 0, 0, t, n);
      var e = a.toDataURL("image/".concat(r));
      o(e);
    };
    c.src = i;
  }
}
if (window.location.href.toLowerCase().includes(se)) {
  window.addEventListener("load", function () {
    var e = document.getElementById("logo");
    if (!(null === e || void 0 === e)) {
      e.addEventListener("click", ie);
    }
  });
}
var de = require("../227/index");
var pe = require("../206/index");
var fe = require("../206/426");
var he = X.d;
var me = .5 * he;
var ge = 2 * he;
var _e = {
  zoom: {
    controls: !1,
    wheel: !1,
    startScale: he,
    maxScale: ge,
    minScale: me,
    scaleSpeed: 1.2
  },
  notch: !1,
  tooltip: !0,
  flyout: {
    fixed_width: X.b,
    corner_radius: 12,
    blocks: {
      default_gap: 12 / he,
      head_block_offset: [14 / he, 4 / he]
    },
    padding: {
      left: 16 / he,
      top: 24 / he
    }
  },
  grid: {
    spacing: 10,
    step: 10
  },
  show_scrollbars: {
    flyout: !1
  },
  delete_area_margin: 0,
  sounds: !1,
  scrollable: {
    flyout: !0
  },
  context_menu: {
    workspace: [c.I.WorkspaceOptionType.PASTE, c.I.WorkspaceOptionType.CLEAN_UP, c.I.WorkspaceOptionType.DELETE_ALL, c.I.WorkspaceOptionType.COPY_ALL, c.I.WorkspaceOptionType.GLOBAL_COMMENT],
    block: [c.I.BlockOptionType.COPY_AND_PASTE, c.I.BlockOptionType.COPY, c.I.BlockOptionType.ADD_COMMENT, c.I.BlockOptionType.COLLAPSE, c.I.BlockOptionType.DELETE, function (e) {
      return {
        text: Object(u.c)(Object(q.b)(), "Workspace.ContextMenu.blockToImage"),
        name: "blockToImage",
        enabled: !0,
        callback: function () {
          var t = Object(Y.a)(z.a.mark(function t() {
            return z.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    e.unselect();
                    t.next = 3;
                    return te(e.id);
                  case 3:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }));
          return function () {
            return t.apply(this, arguments);
          };
        }()
      };
    }, function (e) {
      if (e.type !== K.PROCEDURE_BLOCK_TYPES.CALL_NORETURN && e.type !== K.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
        return;
      }
      var t = function () {
        var t;
        var n = q.d.getState();
        var r = n.project.screens.get(n.project.currentScreenIndex);
        if (r) {
          var o = null === (t = Ee.getWorkspaceDataByScreenId(r.id)) || void 0 === t ? void 0 : t.getProcedureManager();
          if (o) {
            return o.get_procedure_by_caller_id(e.id);
          }
        }
      }();
      return {
        text: Object(u.c)(Object(q.b)(), "Workspace.ContextMenu.jumpToProcDef"),
        name: "jumpToProcDef",
        enabled: !!t && !t.disabled,
        callback: function () {
          if (t) {
            var e = t.def_id;
            var n = c.Blink.mainWorkspace.get_block_by_id(e);
            if (n) {
              c.Blink.mainWorkspace.center_on_block(e);
              n.select();
              Ee.setDebuggingBlock(n);
              n.set_glow_stack(!0);
            }
          }
        }
      };
    }]
  }
};
function ve(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zh";
  Object.assign(c.Blink.Msg, e);
  c.Blink.utils.set_language(t);
}
function be() {
  var e = Ee.getWorkspaceDataByScreenId(Ee.getCurrentScreenId());
  if (!e) {
    throw Error("No workspace selected");
  }
  return e.getProcedureManager();
}
function ye(e, t) {
  var n = c.Blink.inject(e, Object(H.a)(Object(H.a)(Object(H.a)({}, _e), t), {}, {
    custom_svg_defs: fe.a,
    auto_resize: !0
  }));
  var r = h.getToolbox();
  if (r) {
    r.get_flyout().hide();
    r.get_flyout().get_workspace().set_scale(.8);
    r.get_children().forEach(function (e) {
      return e.set_expanded(!0);
    });
  }
  n.get_parent_svg().setAttribute("enable-animation", "true");
  Object.values(o.b).forEach(function (e, t) {
    c.Blink.mainWorkspace.register_flyout_button(e, function () {
      var t = document.createElementNS(X.c, "foreignObject");
      t.style.overflow = "visible";
      var n = document.getElementById(e);
      if (n) {
        var r = n.clientWidth;
        var o = n.clientHeight;
        t.setAttribute("width", "".concat(r));
        t.setAttribute("height", "".concat(o));
        t.appendChild(n);
      }
      return {
        svg_group: t,
        update_callback: function (n) {
          var r = t.querySelector("#".concat(e));
          if (r) {
            var o = r.clientWidth;
            var i = r.clientHeight;
            o *= 1.25;
            i *= 1.25;
            t.setAttribute("width", "".concat(o));
            t.setAttribute("height", "".concat(i));
            n.width = o;
            n.height = i;
          }
        }
      };
    });
  });
  Object.values(o.a).forEach(function (e) {
    var t = {
      lineLabel: e.id,
      text: e.label
    };
    Object(l.x)([t], "category");
  });
  Object(de.d)();
  Object(de.b)(be);
  return n;
}
var Ee = new pe.b();
var Oe = require("../125/index");
var we = require("../49/index");
var Ce = -20;
var Te = -4;
var Se = [-12, -16];
var Ie = [-20, -20];
var Ae = '<svg width="'.concat(24, 'px" height="').concat(24, 'px" class="icon" aria-hidden="true">\n  <use xlink:href="#icon-block-drag-delete"></use>\n</svg>');
var je = new (function () {
  function e() {
    Object(a.a)(this, e);
    this.iconGroup = void 0;
    this.iconGroup = function () {
      var e = c.BU.dom.create_svg_element("g", {
        class: "blocklyDeleteIcon"
      });
      c.BU.dom.create_svg_element("g", {
        id: "block_delete_icon_animate_id",
        class: "blocklyDeleteIconShow"
      }, e).innerHTML = Ae;
      return e;
    }();
  }
  Object(s.a)(e, [{
    key: "removeDisposeAnimation",
    value: function () {
      var e = this.iconGroup.querySelector("#".concat("block_delete_icon_animate_id"));
      if (e) {
        e.classList.remove("blocklyDeleteIconDispose");
      }
    }
  }, {
    key: "create",
    value: function (e) {
      var t;
      this.removeDisposeAnimation();
      var n = function (e) {
        var t = c.vec2.fromValues(-12, -12);
        if (c.BU.base.is_workspace_comment(e)) {
          return c.vec2.add(t, t, e.is_expanded() ? Ie : Se);
        }
        if (!c.BU.base.is_block_svg(e)) {
          return t;
        }
        var n = [0, 0];
        if (e.is_starting_block()) {
          n[0] = Ce;
          n[1] = Te;
        } else if (e.output_connection) {
          var r = e.output_connection.check_ && e.output_connection.check_.indexOf("Boolean") > -1;
          n[0] = r ? 10 : 4;
        }
        c.vec2.add(t, t, n);
        return t;
      }(e);
      this.iconGroup.setAttribute("transform", "translate(".concat(n[0], ", ").concat(n[1], ")"));
      var r = null === (t = e.workspace.get_block_drag_surface()) || void 0 === t ? void 0 : t.get_group();
      if (r) {
        r.appendChild(this.iconGroup);
      }
    }
  }, {
    key: "remove",
    value: function () {
      var e = this.iconGroup.querySelector("#".concat("block_delete_icon_animate_id"));
      if (e) {
        e.classList.add("blocklyDeleteIconDispose");
        c.BU.dom.remove_node(this.iconGroup);
      }
    }
  }]);
  return e;
}())();
function Ne() {
  c.Blink.mainWorkspace.add_event_listener(c.I.BlockEventType.UI, De);
  c.Blink.mainWorkspace.add_change_listener(xe);
  c.Blink.mainWorkspace.add_event_listener(c.I.BlockEventType.DELETE, function () {
    Ee.eventBus.emit(pe.a.DELETE_BLOCK);
  });
  c.Blink.mainWorkspace.add_event_listener(c.I.BlockEventType.START_DRAG, Pe);
  c.Blink.mainWorkspace.add_event_listener(c.I.BlockEventType.END_DRAG, Be);
  c.Blink.mainWorkspace.add_event_listener(c.I.BlockEventType.DRAG_AREA_CHANGE, Fe);
  var e = c.Blink.widget_div.DIV;
  document.addEventListener("focusout", function (e) {
    var t;
    var n;
    var r = document.querySelector(".slider-controller");
    var o = Object(Oe.is_parent)(r, e.relatedTarget);
    var i = document.querySelector(".angle-controller");
    var a = Object(Oe.is_parent)(i, e.relatedTarget);
    var s = document.querySelector(".color-controller");
    var l = Object(Oe.is_parent)(s, e.relatedTarget);
    var u = "menu-item" === (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.className);
    var d = "blocklyHtmlInput" === (null === (n = e.relatedTarget) || void 0 === n ? void 0 : n.className);
    if (!(o || a || l || d || u)) {
      c.Blink.widget_div.hide();
    }
  });
  if (!(null === e || void 0 === e)) {
    e.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
}
var Re;
var ke = [c.I.BlockEventType.CHANGE, c.I.BlockEventType.CREATE, c.I.BlockEventType.DELETE, c.I.BlockEventType.MOVE];
function xe(e) {
  if (-1 !== ke.indexOf(e.type)) {
    Ee.eventBus.emit(pe.a.COMMON_BLOCKS, {
      canRedo: c.Blink.mainWorkspace.get_redo_stack().length > 0,
      canUndo: c.Blink.mainWorkspace.get_undo_stack().length > 0
    });
  }
}
function De(e) {
  switch (Ee.stopWarningAnimation(), e.type) {
    case c.I.UIEventType.SCALE:
      !function (e) {
        var t = Number(e.get_new_value());
        Ee.eventBus.emit(pe.a.WORKSPACE_SCALE_CHANGE, Object(f.M)(t, me, ge));
      }(e);
      break;
    case c.I.UIEventType.FLYOUT_SHOW:
      !function (e) {
        var t = e.get_new_value();
        Ee.eventBus.emit(pe.a.FLYOUT_CHANGE, !!t);
      }(e);
      break;
    case c.I.UIEventType.CATEGORY_WILL_CHANGE:
      !function (e) {
        var t;
        var n = null === (t = e.get_new_value()) || void 0 === t ? void 0 : t.get_name();
        if (n) {
          Object(de.e)(n);
        }
      }(e);
      break;
    case c.I.UIEventType.SELECTED:
      !function (e) {
        var t;
        var n;
        var r = e.get_new_value();
        if (!(null === (t = we.oTHelper.customEvent) || void 0 === t || null === (n = t.emit) || void 0 === n)) {
          n.focusItem("block", r);
        }
      }(e);
      break;
    case c.I.UIEventType.CATEGORY:
      Me(e);
      break;
    case c.I.UIEventType.V_SCROLLBAR_SET:
    case c.I.UIEventType.H_SCROLLBAR_SET:
    case c.I.UIEventType.CLICK:
    case c.I.UIEventType.CONTEXT_MENU_OPEN:
      Ue();
  }
}
var Me = function (e) {
  var t = h.getSelectWidgetCategoryName() || h.lastSelectedWidgetCategoryName;
  if (t) {
    h.changeSelectWidgetCategoryStyle(t);
    Ee.eventBus.emit(pe.a.SELECT_WIDGET_CATEGORY, t);
  }
  var n = e.get_new_value();
  if (n) {
    var r = n.get_tree();
    if (r !== Re && r && r !== c.Blink.mainWorkspace.get_toolbox()) {
      var o;
      var i;
      var a;
      if (Re) {
        if (!(null === (a = Re.get_element()) || void 0 === a)) {
          a.classList.remove("cocoTreeRelated");
        }
      }
      if (!(null === (o = (Re = r).get_element()) || void 0 === o || null === (i = o.classList) || void 0 === i)) {
        i.add("cocoTreeRelated");
      }
    }
  } else {
    var s;
    if (Re) {
      if (!(null === (s = Re.get_element()) || void 0 === s)) {
        s.classList.remove("cocoTreeRelated");
      }
      Re = void 0;
    }
  }
};
var Le = !1;
function Pe(e) {
  Ue();
  Le = e._is_from_flyout;
  Ge(1);
}
function Be(e) {
  q.d.dispatch(Object(J.ti)(!1));
}
function Fe(e) {
  var t;
  var n = e.area;
  var r = e.is_in;
  var o = e.get_block_id();
  t = o;
  var i = c.Blink.mainWorkspace.get_block_by_id(t);
  if (!c.BU.base.is_workspace_comment(i) || !i.get_parent_block()) {
    switch (n) {
      case c.I.DragArea.INJECTION_DIV:
        break;
      case c.I.DragArea.DELETE_AREA:
        if (i) {
          (function (e, t) {
            if (Le) {
              return;
            }
            if (!Le) {
              q.d.dispatch(Object(J.ti)(t));
            }
            if (t) {
              je.create(e);
            } else {
              je.remove();
            }
            Ge(t ? .7 : 1);
          })(i, r);
        }
        break;
      case c.I.DragArea.WORKSPACE:
    }
  }
}
function Ge(e) {
  var t;
  if (!(e > 1 || e < 0)) {
    var n = null === (t = c.Blink.mainWorkspace.get_block_drag_surface()) || void 0 === t ? void 0 : t.get_group();
    if (n) {
      if (1 === e) {
        n.removeAttribute("opacity");
      } else {
        n.setAttribute("opacity", "".concat(e));
      }
    }
  }
}
function Ue() {
  var e = Ee.getDebuggingBlock();
  if (e) {
    e.set_glow_stack(!1);
  }
}
var We;
var He = require("../11");
!function (e) {
  e.PRIMITIVE = "PRIMITIVE";
  e.ARRAY = "ARRAY";
  e.STORAGE = "STORAGE";
  e.DOC_KEYS = "DOC_KEYS";
  e.BROADCAST = "BROADCAST";
  e.SCREEN = "SCREEN";
  e.IMAGE_LIBRARY = "IMAGE_LIBRARY";
  e.ICON_LIBRARY = "ICON_LIBRARY";
  e.SOUND_LIBRARY = "SOUND_LIBRARY";
  e.CLOUD_DATABASE = "CLOUD_DATABASE";
  e.CLOUD_DOC_KEYS = "CLOUD_DOC_KEYS";
  e.DATA_SOURCE = "DATA_SOURCE";
  e.GRID = "DATABASE_WIDGET";
  e.COLUMNS = "COLUMNS";
  e.CLOUD_DB = "CLOUD_DB";
  e.TABLE_DATA_COLUMN = "TABLE_DATA_COLUMN";
  e.OBJECT = "OBJECT";
  e.CLOUD_TABLE_COLUMNS = "CLOUD_TABLE_COLUMNS";
  e.CLOUD_DICT_KEYS = "CLOUD_DICT_KEYS";
}(We || (We = {}));
var Ve = function () {
  var e;
  return Object(H.a)((e = {}, Object(He.a)(e, We.PRIMITIVE, {
    blocksList: ["variables_get", "variables_set", "variables_change"],
    fieldName: "VAR"
  }), Object(He.a)(e, We.ARRAY, {
    blocksList: ["array_get"],
    fieldName: "ARRAY"
  }), Object(He.a)(e, We.OBJECT, {
    blocksList: ["object_get"],
    fieldName: "OBJECT"
  }), Object(He.a)(e, We.BROADCAST, {
    blocksList: ["broadcast_input"],
    fieldName: "BROADCAST"
  }), Object(He.a)(e, We.DOC_KEYS, {
    blocksList: ["local_document_all_key_field_dropdown", "local_document_set_field_item", "local_document_remove_field_item", "local_document_get_field_item", "local_document_check_if_field_key_exists", "new_local_document_all_key_field_dropdown", "new_local_document_set_field_item", "new_local_document_remove_field_item", "new_local_document_get_field_item", "new_local_document_check_if_field_key_exists"],
    fieldName: "DOC_KEYS"
  }), Object(He.a)(e, We.IMAGE_LIBRARY, {
    blocksList: ["image_file_list_dropdown"],
    fieldName: "IMAGE_FILE_ID"
  }), Object(He.a)(e, We.ICON_LIBRARY, {
    blocksList: ["icon_file_list_dropdown"],
    fieldName: "ICON_FILE_ID"
  }), Object(He.a)(e, We.SOUND_LIBRARY, {
    blocksList: ["audio_sound_file_list_dropdown"],
    fieldName: "SOUND_FILE_ID"
  }), Object(He.a)(e, We.CLOUD_DOC_KEYS, {
    blocksList: ["cloud_document_all_key_field_dropdown"],
    fieldName: "DOC_KEYS"
  }), Object(He.a)(e, We.SCREEN, {
    blocksList: ["screen_set_background_color", "screen_set_background_image", "screen_navigate_to", "screen_navigate_to_by_value", "new_screen_navigate_to", "new_screen_navigate_to_by_value", "screen_get_size", "screen_get_color", "screen_get_background_image", "screen_check_if_pressed"],
    fieldName: "SCREEN_ID"
  }), Object(He.a)(e, We.DATA_SOURCE, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), Object(He.a)(e, We.GRID, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), Object(He.a)(e, We.COLUMNS, {
    blocksList: ["cloudDB_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), Object(He.a)(e, We.CLOUD_DB, {
    blocksList: ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count"],
    fieldName: "WIDGET_ID"
  }), Object(He.a)(e, We.TABLE_DATA_COLUMN, {
    blocksList: ["table_data_column_field_dropdown"],
    fieldName: "COLUMN"
  }), Object(He.a)(e, We.CLOUD_DICT_KEYS, {
    blocksList: ["cloud_dict_all_key_dropdown"],
    fieldName: "KEYS"
  }), Object(He.a)(e, We.CLOUD_TABLE_COLUMNS, {
    blocksList: ["cloudTable_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), e), Object(l.N)());
};
function ze(e, t, n) {
  var r;
  var o = Ve();
  var i = o[e].blocksList;
  var a = o[e].fieldName;
  if (c.Blink.mainWorkspace) {
    c.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (i.includes(e.type) && e.inputList.length) {
        var r;
        var o = e.get_field(a);
        if (!o || (null === (r = o.get_value()) || void 0 === r ? void 0 : r.toString()) !== t) {
          return;
        }
        if (o.get_text() === n) {
          return;
        }
        o.set_text(n);
      }
    });
    if (!(null === (r = c.Blink.mainWorkspace.get_toolbox()) || void 0 === r)) {
      r.refresh_selection();
    }
  }
}
function Ye(e, t) {
  var n;
  var r = Ve();
  var o = r[e].blocksList;
  var i = r[e].fieldName;
  if (c.Blink.mainWorkspace) {
    c.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (o.includes(e.type) && e.inputList.length) {
        var n;
        var r = e.get_field(i);
        if (!r || (null === (n = r.get_value()) || void 0 === n ? void 0 : n.toString()) !== t) {
          return;
        }
        if (!(null === r || void 0 === r)) {
          r.set_value(l.h);
        }
        if (!(null === r || void 0 === r)) {
          r.set_text(l.g);
        }
      }
    });
    if (!(null === (n = c.Blink.mainWorkspace.get_toolbox()) || void 0 === n)) {
      n.refresh_selection();
    }
  }
}
function Ke() {
  var e;
  if (c.Blink.mainWorkspace) {
    c.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      var t;
      if (e.inputList.length) {
        !function (e) {
          var t = e.get_field("BUMP_TYPE");
          if (t) {
            var n = e.get_field_value("BUMP_TYPE");
            if ((null === n || void 0 === n ? void 0 : n.startsWith("ACTOR_")) || (null === n || void 0 === n ? void 0 : n.startsWith("BRUSH_"))) {
              var r = Object(l.Bb)(n);
              if (r) {
                t.set_text(r.title);
              } else {
                t.set_value(l.h);
                t.set_text(l.g);
              }
            }
          }
        }(e);
        (function (e) {
          var t = e.get_field("TARGET");
          if (t) {
            var n = e.get_field_value("TARGET");
            if ((null === n || void 0 === n ? void 0 : n.startsWith("ACTOR_")) || (null === n || void 0 === n ? void 0 : n.startsWith("BRUSH_"))) {
              var r = Object(l.Bb)(n);
              if (r) {
                t.set_text(r.title);
              } else {
                t.set_value(l.h);
                t.set_text(l.g);
              }
            }
          }
        })(e);
        var n = e.get_field("ACTOR_ACTION_ID") || e.get_shadow_field("ACTOR_ACTION_WRAPPER", "ACTOR_ACTION_ID");
        if (n) {
          var r;
          var o;
          var i;
          var a = e.get_field("ACTOR_STYLE_ID") || e.get_shadow_field("ACTOR_STYLE_WRAPPER", "ACTOR_STYLE_ID");
          var s = e.get_field("WIDGET_ID") || (null === (t = e.parent_block) || void 0 === t ? void 0 : t.get_field("WIDGET_ID"));
          var c = null === s || void 0 === s ? void 0 : s.get_value();
          if (!c || void 0 === (o = Object(l.Bb)(c)) || (r = n.get_value()) === l.h || void 0 === (i = o.attributes.actionList.find(function (e) {
            return e.id === r;
          }))) {
            n.set_value(l.h);
            n.set_text(l.g);
            if (!(null === a || void 0 === a)) {
              a.set_value(l.h);
            }
            if (!(null === a || void 0 === a)) {
              a.set_text(l.g);
            }
            return void (o || (null === s || void 0 === s || s.set_value(l.h), null === s || void 0 === s || s.set_text(l.g)));
          }
          if (n.set_value(i.id), n.set_text(i.name), a) {
            var u = a.get_value();
            var d = i.styleList.findIndex(function (e) {
              return e.id === u;
            });
            var p = -1 === d ? void 0 : i.styleList[d];
            a.set_value((null === p || void 0 === p ? void 0 : p.id) || l.h);
          }
        }
      }
    });
    if (!(null === (e = c.Blink.mainWorkspace.get_toolbox()) || void 0 === e)) {
      e.refresh_selection();
    }
  }
}
function qe(e, t, n) {
  if (e && n) {
    ze(n, e, t);
    if (!(n !== p.a && n !== p.c)) {
      Ke();
    }
  }
}
function Xe(e, t) {
  ze(We.SCREEN, e, t);
}
function Qe(e, t, n) {
  var r = Ve()[We.CLOUD_DOC_KEYS].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (r.includes(o.type)) {
      var i;
      var a = o.parent_block;
      if (a && a.get_field_value("WIDGET_ID") === e) {
        if (o.get_field_value("DOC_KEYS") === t) {
          if (!(null === (i = o.get_field("DOC_KEYS")) || void 0 === i)) {
            i.set_value(n);
          }
        }
      }
    }
  });
}
function Ze(e) {
  var t = Ve();
  var n = t.LIST_VIEWER_WIDGET.blocksList.concat(t.NEW_LIST_VIEWER_WIDGET.blocksList);
  if (c.Blink.mainWorkspace) {
    c.Blink.mainWorkspace.get_all_blocks().forEach(function (t) {
      if (n.includes(t.type) && t.inputList.length) {
        var r;
        var o = t.get_field("WIDGET_ID");
        if (!o || (null === (r = o.get_value()) || void 0 === r ? void 0 : r.toString()) !== e) {
          return;
        }
        var i = t.get_field("SLOT_WIDGET");
        if (!(null === i || void 0 === i)) {
          i.set_value(l.h);
        }
        if (!(null === i || void 0 === i)) {
          i.set_text(l.g);
        }
        var a = t.get_field("ATTRIBUTE");
        if (!(null === a || void 0 === a)) {
          a.set_value(l.h);
        }
        if (!(null === a || void 0 === a)) {
          a.set_text(l.g);
        }
      }
    });
  }
}
function Je(e, t) {
  var n = Ve()[We.DOC_KEYS].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (n.includes(r.type)) {
      var o = r.parent_block;
      if (o && o.get_field_value("WIDGET_ID") === e) {
        var i;
        var a = r.get_field("DOC_KEYS");
        var s = Object(Q.a)(t);
        try {
          for (s.s(); !(i = s.n()).done;) {
            var c = i.value;
            if (c.id === (null === a || void 0 === a ? void 0 : a.get_value())) {
              a.set_text(c.key);
            }
          }
        } catch (l) {
          s.e(l);
        } finally {
          s.f();
        }
      }
    }
  });
}
function $e(e, t) {
  var n = Ve()[We.TABLE_DATA_COLUMN].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (n.includes(r.type)) {
      var o = r.parent_block;
      if (o && o.get_field_value("WIDGET_ID") === e) {
        var i = r.get_field("COLUMN");
        var a = t.header;
        for (var s in a) if (s === (null === i || void 0 === i ? void 0 : i.get_value())) {
          var c = a[s];
          i.set_text(c.field);
        }
      }
    }
  });
}
function et(e, t, n) {
  var r = Ve()[We.CLOUD_DICT_KEYS].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (r.includes(o.type)) {
      var i = o.parent_block;
      var a = null === i || void 0 === i ? void 0 : i.get_field_value("WIDGET_ID");
      if (a) {
        var s = Object(l.Z)(a);
        if (e === s && o.get_field_value("KEYS") === t) {
          var c = o.get_field("KEYS");
          if (!(null === c || void 0 === c)) {
            c.set_value(n);
          }
          if (!(null === c || void 0 === c)) {
            c.set_text(n);
          }
        }
      }
    }
  });
}
function tt(e) {
  var t = Ve()[We.CLOUD_DICT_KEYS].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (t.includes(n.type)) {
      var r = n.parent_block;
      if (r && r.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("KEYS");
        if (!(null === o || void 0 === o)) {
          o.set_value(l.h);
        }
        if (!(null === o || void 0 === o)) {
          o.set_text(l.g);
        }
      }
    }
  });
}
function nt(e, t, n) {
  var r = Ve()[We.CLOUD_TABLE_COLUMNS].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (r.includes(o.type)) {
      var i = o.parent_block;
      var a = null === i || void 0 === i ? void 0 : i.get_field_value("WIDGET_ID");
      if (a) {
        var s = Object(l.db)(a);
        if (e === s && o.get_field_value("COLUMNS") === t) {
          var c = o.get_field("COLUMNS");
          if (!(null === c || void 0 === c)) {
            c.set_value(n);
          }
          if (!(null === c || void 0 === c)) {
            c.set_text(n);
          }
        }
      }
    }
  });
}
function rt(e) {
  var t = Ve()[We.CLOUD_TABLE_COLUMNS].blocksList;
  c.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (t.includes(n.type)) {
      var r = n.parent_block;
      if (r && r.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("COLUMNS");
        if (!(null === o || void 0 === o)) {
          o.set_value(l.h);
        }
        if (!(null === o || void 0 === o)) {
          o.set_text(l.g);
        }
      }
    }
  });
}