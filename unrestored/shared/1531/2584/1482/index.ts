/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1482
 */

"use strict";

(function (e) {
  var r = require("../25/index");
  var o = require("../6");
  var i = require("../10/index");
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
  var c = require("../554");
  var l = require("../16/index");
  var u = require("../702");
  var d = require("../8");
  var p = function __importDefault(module) {
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
  }(d);
  var f = require("lodash");
  var h = require("../1185");
  var m = require("../13/index");
  var g = require("./154");
  var _ = function __importDefault(module) {
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
  }(g);
  var v = require("../../../../../src/shared/events/messages-wrapper");
  var b = require("../64");
  var y = require("../5");
  var E = require("../9");
  var O = require("../68");
  var w = require("../784/index");
  var C = require("./1483");
  var T = {
    visible: false,
    position: {
      x: 0,
      y: 0
    },
    type: "string",
    index: -1
  };
  function S(t, n) {
    e(function () {
      t.focus();
      t.selectionEnd = t.selectionStart = n ? 0 : t.value.length;
    });
  }
  exports.a = a.memo(function () {
    var e = l.e(function (e) {
      return e.block.storageDialogInfo;
    });
    var t = e.visible;
    var n = e.widget;
    var d = e.dbName;
    var g = e.maxKeyLength;
    var I = e.data;
    var A = e.onSave;
    var j = null === n || undefined === n ? undefined : n.type;
    var N = u.a().formatMessage;
    var R = a.useRef(-1);
    var k = a.useRef(-1);
    var x = l.d();
    var D = a.useState([]);
    var M = i.a(D, 2);
    var L = M[0];
    var P = M[1];
    var B = a.useState([]);
    var F = i.a(B, 2);
    var G = F[0];
    var U = F[1];
    var W = a.useState(-1);
    var H = i.a(W, 2);
    var V = H[0];
    var z = H[1];
    var Y = a.useState(-1);
    var K = i.a(Y, 2);
    var q = K[0];
    var X = K[1];
    var Q = a.useState(0);
    var Z = i.a(Q, 2);
    var J = Z[0];
    var $ = Z[1];
    var ee = a.useState(false);
    var te = i.a(ee, 2);
    var ne = te[0];
    var re = te[1];
    var oe = a.useState(false);
    var ie = i.a(oe, 2);
    var ae = ie[0];
    var se = ie[1];
    var ce = a.useState(false);
    var le = i.a(ce, 2);
    var ue = le[0];
    var de = le[1];
    var pe = a.useState(false);
    var fe = i.a(pe, 2);
    var he = fe[0];
    var me = fe[1];
    var ge = a.useState(T);
    var _e = i.a(ge, 2);
    var ve = _e[0];
    var be = _e[1];
    function ye(e) {
      var t = 2 * e;
      var n = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + t, " input"));
      if (n instanceof HTMLInputElement) {
        R.current = t;
        S(n, false);
      }
    }
    function Ee() {
      return {
        value: "",
        key: E.ac("key1", G.map(function (e) {
          return e.key;
        })),
        type: "string",
        id: b.a("DOC_KEY")
      };
    }
    function Oe(e) {
      G.splice(e, 1);
      U(r.a(G));
    }
    function we(e, t, n) {
      if (G.find(function (n, r) {
        return r !== e && t.trim() === n.key;
      })) {
        n.target.value = G[e].key;
        return void P([]);
      }
      G[e].key = t.trim();
      U(r.a(G));
    }
    function Ce(e, t) {
      if (G.find(function (n, r) {
        return r !== e && t.trim() === n.key;
      })) {
        P([e]);
        x(v.mj({
          showPrefixIcon: false,
          message: N({
            id: "repeatKeyToastMsg"
          })
        }));
      } else {
        P([]);
      }
    }
    function Te(e, t) {
      if (Ie(t)) {
        G[e].type = "number";
      } else {
        G[e].type = "string";
      }
      G[e].value = t;
      U(r.a(G));
    }
    function Se() {
      if (A) {
        A(G);
      }
      x(v.uh());
    }
    function Ie(e) {
      return "" !== e && !isNaN(Number(e));
    }
    function Ae(e, t) {
      R.current = 2 * e + t;
    }
    function je(e) {
      X(e);
    }
    function Ne(e, t) {
      G[e].type = t;
      U(r.a(G));
    }
    function Re(e) {
      var t = e.target;
      if (t instanceof HTMLInputElement) {
        t.select();
      }
    }
    function ke(e, t) {
      var n = t.currentTarget;
      var r = n.getClientRects()[0];
      var o = n.closest(".coco-dialog-content");
      if (o) {
        var i = o.getClientRects()[0];
        var a = {
          x: r.left - i.left - 98,
          y: r.top - i.top
        };
        be({
          visible: true,
          position: a,
          type: G[e].type,
          index: e,
          onSelect: Ne
        });
      }
    }
    a.useEffect(function () {
      U(f.cloneDeep(I));
    }, [I]);
    a.useEffect(function () {
      me(false);
    }, [t]);
    a.useEffect(function () {
      function e(t) {
        var n = t.target;
        if (!(n.closest("." + _.a.typeSelectionList) || n.closest("." + _.a.typeFlag))) {
          be(o.a({}, T));
          document.removeEventListener("mousemove", e);
        }
      }
      if (ve.visible) {
        document.addEventListener("mousemove", e);
      }
      return function () {
        document.removeEventListener("mousemove", e);
      };
    }, [ve]);
    a.useEffect(function () {
      var e = {};
      G.forEach(function (t, n) {
        G.slice(n + 1, G.length).forEach(function (r, o) {
          if (r.key && r.key === t.key) {
            e[o + n + 1] = true;
            e[n] = true;
          }
        });
      });
      P(Object.keys(e).map(function (e) {
        return Number(e);
      }));
    }, [G]);
    a.useEffect(function () {
      ye(V);
    }, [V]);
    var xe = function (e) {
      re(e);
    };
    var De = function () {
      re(false);
      x(v.wj(O.c.ImageLibrary, function (e) {
        var t = e[0];
        if (null === t || undefined === t ? undefined : t.id) {
          G[q].value = t.id;
          U(r.a(G));
        }
      }));
    };
    var Me = function () {
      re(false);
      x(v.wj(O.c.IconLibrary, function (e) {
        var t = e[0];
        if (null === t || undefined === t ? undefined : t.name) {
          G[q].value = t.name + ".svg";
          U(r.a(G));
        }
      }));
    };
    var Le = function () {
      re(false);
      x(v.wj(O.c.SoundLibrary, function (e) {
        var t = e[0];
        if (null === t || undefined === t ? undefined : t.name) {
          G[q].value = t.name;
          U(r.a(G));
        }
      }));
    };
    var Pe = function (e) {
      if (e) {
        se(false);
        de(false);
      }
    };
    var Be = function (e) {
      e.preventDefault();
      k.current = q;
      se(true);
    };
    var Fe = function (e) {
      e.preventDefault();
      k.current = q;
      de(true);
    };
    function Ge(e) {
      var t = G[k.current].key;
      if ("value" === e) {
        t = G[k.current].value.toString();
      }
      navigator.clipboard.writeText(t);
    }
    function Ue(e) {
      navigator.clipboard.readText().then(function (t) {
        if ("value" === e) {
          G[k.current].value = t.trim();
          return void U(r.a(G));
        }
        if (G.find(function (e, n) {
          return n !== k.current && t.trim() === e.key;
        })) {
          x(v.mj({
            showPrefixIcon: false,
            message: N({
              id: "repeatKeyToastMsg"
            })
          }));
        } else {
          G[k.current].key = t.trim();
          U(r.a(G));
        }
      });
    }
    function We(e) {
      if (g && G.length >= g) {
        x(v.mj({
          message: N({
            id: "cloudDbOverTheMaxKeyTips"
          })
        }));
      } else {
        var t = "prev" === e ? k.current : k.current + 1;
        G.splice(t, 0, Ee());
        U(G.concat([]));
        $(t - 1);
        ye(t);
      }
    }
    function He(e) {
      if ("value" === e) {
        G[k.current].value = "";
        return void U(r.a(G));
      }
      if (G.find(function (e, t) {
        return t !== k.current && "" === e.key;
      })) {
        x(v.mj({
          showPrefixIcon: false,
          message: N({
            id: "repeatKeyToastMsg"
          })
        }));
      } else {
        G[k.current].key = "";
        U(r.a(G));
      }
    }
    a.useEffect(function () {
      if (ae || ue) {
        document.addEventListener("mousedown", function e() {
          se(false);
          de(false);
          document.removeEventListener("mousedown", e, true);
        }, true);
      }
    }, [ae, ue]);
    return s.a.createElement(m.f, {
      className: _.a.editListDialog,
      visible: t,
      withPortal: true,
      onClose: function () {
        if (f.isEqual(G, I)) {
          x(v.uh());
        } else {
          me(true);
        }
      }
    }, s.a.createElement("div", {
      className: _.a.dialogTitle
    }, d, s.a.createElement("span", {
      className: _.a.defaultData
    }, "— ", N({
      id: "StorageDialog.defaultData"
    }))), s.a.createElement(C.a, ve), s.a.createElement("div", {
      className: _.a.list
    }, s.a.createElement("div", {
      className: _.a.summary
    }, s.a.createElement("div", {
      className: _.a.count
    }, s.a.createElement("span", null, N({
      id: "keyValueTotal"
    }), "："), G.length || "0")), s.a.createElement("div", {
      className: _.a.listHeader
    }, s.a.createElement("div", {
      className: _.a.column1
    }, N({
      id: "key"
    })), s.a.createElement("div", {
      className: _.a.column2
    }, N({
      id: "value"
    })), s.a.createElement("div", {
      className: _.a.column3
    })), s.a.createElement("div", {
      className: _.a.dataList,
      onKeyDown: function (e) {
        var t = e.target;
        var n = R.current;
        if (t instanceof HTMLInputElement && n > -1 && t.selectionEnd === t.selectionStart) {
          var r = e.keyCode;
          var o = n;
          var i = true;
          if (38 === r) {
            o -= 2;
          } else {
            if (40 === r) {
              o += 2;
            } else {
              if (37 === r && 0 === t.selectionStart) {
                o -= 1;
                i = false;
              } else {
                if (39 === r && t.selectionEnd === t.value.length) {
                  o += 1;
                }
              }
            }
          }
          if (n !== o) {
            var a = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + o, " input"));
            if (a && a instanceof HTMLInputElement) {
              R.current = o;
              S(a, i);
            }
          }
        }
      }
    }, G.length > 0 && s.a.createElement(c.a, {
      width: "auto",
      height: 36 * Math.min(G.length, 12),
      itemCount: G.length,
      renderItem: function (e) {
        var t = e.index;
        var n = e.style;
        return s.a.createElement("div", {
          className: _.a.listItem,
          key: t,
          style: n,
          onMouseEnter: je.bind(null, t)
        }, s.a.createElement(h.a, {
          placement: "rightTop",
          trigger: "click",
          onVisibleChange: Pe,
          visible: ae && k.current === t,
          content: s.a.createElement("div", {
            className: _.a.rowMenuWrapper,
            style: {
              marginTop: 13
            }
          }, s.a.createElement("div", {
            onMouseDown: Ge.bind(null, "key"),
            className: _.a.menuItem
          }, N({
            id: "copyGridData"
          })), s.a.createElement("div", {
            onMouseDown: Ue.bind(null, "key"),
            className: _.a.menuItem
          }, N({
            id: "pasteGridData"
          })), s.a.createElement("div", {
            onMouseDown: We.bind(null, "prev"),
            className: p()(_.a.menuItem, _.a.borderTop)
          }, N({
            id: "insertPrevRow"
          })), s.a.createElement("div", {
            onMouseDown: We.bind(null, "next"),
            className: p()(_.a.menuItem, _.a.borderBottom)
          }, N({
            id: "insertNextRow"
          })), s.a.createElement("div", {
            onMouseDown: He.bind(null, "key"),
            className: p()(_.a.menuItem, _.a.deleteOption)
          }, N({
            id: "clearData"
          })))
        }, s.a.createElement("div", {
          className: _.a.column1,
          onContextMenu: Be
        }, s.a.createElement(m.k, {
          type: "text",
          isTrimmed: true,
          className: p()(_.a.listInput, "STORAGE_KEY_VALUE_INPUT_SERIAL_" + 2 * t, L.includes(t) && _.a.error),
          maxLength: 150,
          onClick: Re,
          defaultValue: G[t].key,
          onFocus: Ae.bind(null, t, 0),
          onBlur: we.bind(null, t),
          onChange: Ce.bind(null, t),
          dependency: G[t].key
        }))), s.a.createElement(h.a, {
          placement: "rightTop",
          trigger: "click",
          onVisibleChange: Pe,
          visible: ue && k.current === t,
          content: s.a.createElement("div", {
            className: _.a.rowMenuWrapper,
            style: {
              marginTop: 13
            }
          }, s.a.createElement("div", {
            onMouseDown: Ge.bind(null, "value"),
            className: _.a.menuItem
          }, N({
            id: "copyGridData"
          })), s.a.createElement("div", {
            onMouseDown: Ue.bind(null, "value"),
            className: _.a.menuItem
          }, N({
            id: "pasteGridData"
          })), s.a.createElement("div", {
            onMouseDown: We.bind(null, "prev"),
            className: p()(_.a.menuItem, _.a.borderTop)
          }, N({
            id: "insertPrevRow"
          })), s.a.createElement("div", {
            onMouseDown: We.bind(null, "next"),
            className: p()(_.a.menuItem, _.a.borderBottom)
          }, N({
            id: "insertNextRow"
          })), s.a.createElement("div", {
            onMouseDown: He.bind(null, "value"),
            className: p()(_.a.menuItem, _.a.deleteOption)
          }, N({
            id: "clearData"
          })))
        }, s.a.createElement("div", {
          className: _.a.column2,
          onContextMenu: Fe
        }, function (e) {
          return j && j === y.B ? "" : Ie(G[e].value) && s.a.createElement("div", {
            className: _.a.typeFlag,
            onMouseEnter: ke.bind(null, e)
          }, s.a.createElement(m.j, {
            type: "icon-corner-right-top"
          }));
        }(t), s.a.createElement(m.k, {
          type: "text",
          onFocus: Ae.bind(null, t, 1),
          className: p()(_.a.listInput, "STORAGE_KEY_VALUE_INPUT_SERIAL_" + (2 * t + 1)),
          maxLength: 8e3,
          isTrimmed: true,
          defaultValue: G[t].value,
          onBlur: Te.bind(null, t),
          onClick: Re,
          dependency: G[t].value
        }), q === t && j === y.B && s.a.createElement(h.a, {
          key: t,
          placement: "rightTop",
          onVisibleChange: xe,
          visible: ne,
          content: s.a.createElement("div", {
            className: _.a.menuWrapper,
            style: {
              marginTop: 4
            }
          }, s.a.createElement("div", {
            onMouseDown: De,
            className: _.a.resourceMenuItem
          }, s.a.createElement(m.j, {
            type: "icon-Image",
            className: _.a.resourceMenuIcon
          }), N({
            id: "Resource.ImageLibrary"
          })), s.a.createElement("div", {
            onMouseDown: Me,
            className: _.a.resourceMenuItem
          }, s.a.createElement(m.j, {
            type: "icon-Icon",
            className: _.a.resourceMenuIcon
          }), N({
            id: "Resource.IconLibrary"
          })), s.a.createElement("div", {
            onMouseDown: Le,
            className: _.a.resourceMenuItem
          }, s.a.createElement(m.j, {
            type: "icon-Sound",
            className: _.a.resourceMenuIcon
          }), N({
            id: "Resource.SoundLibrary"
          })))
        }, s.a.createElement("div", {
          className: _.a.addBox
        }, s.a.createElement(m.j, {
          type: "icon-add"
        }))))), s.a.createElement("div", {
          className: p()(_.a.inputClose, _.a.column3),
          onClick: Oe.bind(null, t)
        }, s.a.createElement(m.j, {
          type: "icon-close"
        })));
      },
      itemSize: 36,
      scrollToIndex: J,
      className: "VirtualList"
    })), s.a.createElement("div", {
      className: p()(_.a.addRow, G.length > 12 && _.a.shadow),
      onClick: function () {
        if (g && G.length >= g) {
          x(v.mj({
            message: N({
              id: "cloudDbOverTheMaxKeyTips"
            })
          }));
        } else {
          G.push(Ee());
          U(G.concat([]));
          z(G.length - 1);
          $(G.length - 1);
        }
      }
    }, s.a.createElement(m.j, {
      type: "icon-add"
    }))), he && s.a.createElement(w.b, {
      onCancel: function () {
        x(v.uh());
      },
      onOk: Se
    }), s.a.createElement("div", {
      className: _.a.footer
    }, j && j === y.B ? s.a.createElement("span", null, N({
      id: "storageDialogTips"
    })) : s.a.createElement("span", null, N({
      id: "deprecatedStorageDialogTips"
    })), s.a.createElement(m.d, {
      className: p()(_.a.save, false),
      type: "primary",
      onClick: Se
    }, N({
      id: "save"
    }), false)));
  });
}).call(this, require("../795/625/index").setImmediate);