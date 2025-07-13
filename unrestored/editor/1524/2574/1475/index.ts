"use strict";

(function (e) {
  var r = require("../25/index");
  var o = require("../6");
  var i = require("../10/index");
  var a = require("../0/index");
  var s = n.n(a);
  var c = require("../554");
  var l = require("../16/index");
  var u = require("../702");
  var d = require("../8");
  var p = n.n(d);
  var f = require("../31/index");
  var h = require("../1182");
  var m = require("../13/index");
  var g = require("./154");
  var _ = n.n(g);
  var v = require("../2/index");
  var b = require("../64");
  var y = require("../5");
  var E = require("../9");
  var O = require("../68");
  var w = require("../783/index");
  var C = require("./1476");
  var T = {
    visible: !1,
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
  exports.a = Object(a.memo)(function () {
    var e = Object(l.e)(function (e) {
      return e.block.storageDialogInfo;
    });
    var t = e.visible;
    var n = e.widget;
    var d = e.dbName;
    var g = e.maxKeyLength;
    var I = e.data;
    var A = e.onSave;
    var j = null === n || void 0 === n ? void 0 : n.type;
    var N = Object(u.a)().formatMessage;
    var R = Object(a.useRef)(-1);
    var k = Object(a.useRef)(-1);
    var x = Object(l.d)();
    var D = Object(a.useState)([]);
    var M = Object(i.a)(D, 2);
    var L = M[0];
    var P = M[1];
    var B = Object(a.useState)([]);
    var F = Object(i.a)(B, 2);
    var G = F[0];
    var U = F[1];
    var W = Object(a.useState)(-1);
    var H = Object(i.a)(W, 2);
    var V = H[0];
    var z = H[1];
    var Y = Object(a.useState)(-1);
    var K = Object(i.a)(Y, 2);
    var q = K[0];
    var X = K[1];
    var Q = Object(a.useState)(0);
    var Z = Object(i.a)(Q, 2);
    var J = Z[0];
    var $ = Z[1];
    var ee = Object(a.useState)(!1);
    var te = Object(i.a)(ee, 2);
    var ne = te[0];
    var re = te[1];
    var oe = Object(a.useState)(!1);
    var ie = Object(i.a)(oe, 2);
    var ae = ie[0];
    var se = ie[1];
    var ce = Object(a.useState)(!1);
    var le = Object(i.a)(ce, 2);
    var ue = le[0];
    var de = le[1];
    var pe = Object(a.useState)(!1);
    var fe = Object(i.a)(pe, 2);
    var he = fe[0];
    var me = fe[1];
    var ge = Object(a.useState)(T);
    var _e = Object(i.a)(ge, 2);
    var ve = _e[0];
    var be = _e[1];
    function ye(e) {
      var t = 2 * e;
      var n = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + t, " input"));
      if (n instanceof HTMLInputElement) {
        R.current = t;
        S(n, !1);
      }
    }
    function Ee() {
      return {
        value: "",
        key: Object(E.ac)("key1", G.map(function (e) {
          return e.key;
        })),
        type: "string",
        id: Object(b.a)("DOC_KEY")
      };
    }
    function Oe(e) {
      G.splice(e, 1);
      U(Object(r.a)(G));
    }
    function we(e, t, n) {
      if (G.find(function (n, r) {
        return r !== e && t.trim() === n.key;
      })) {
        n.target.value = G[e].key;
        return void P([]);
      }
      G[e].key = t.trim();
      U(Object(r.a)(G));
    }
    function Ce(e, t) {
      if (G.find(function (n, r) {
        return r !== e && t.trim() === n.key;
      })) {
        P([e]);
        x(Object(v.mj)({
          showPrefixIcon: !1,
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
      U(Object(r.a)(G));
    }
    function Se() {
      if (A) {
        A(G);
      }
      x(Object(v.uh)());
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
      U(Object(r.a)(G));
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
          visible: !0,
          position: a,
          type: G[e].type,
          index: e,
          onSelect: Ne
        });
      }
    }
    Object(a.useEffect)(function () {
      U(Object(f.cloneDeep)(I));
    }, [I]);
    Object(a.useEffect)(function () {
      me(!1);
    }, [t]);
    Object(a.useEffect)(function () {
      function e(t) {
        var n = t.target;
        if (!(n.closest("." + _.a.typeSelectionList) || n.closest("." + _.a.typeFlag))) {
          be(Object(o.a)({}, T));
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
    Object(a.useEffect)(function () {
      var e = {};
      G.forEach(function (t, n) {
        G.slice(n + 1, G.length).forEach(function (r, o) {
          if (r.key && r.key === t.key) {
            e[o + n + 1] = !0;
            e[n] = !0;
          }
        });
      });
      P(Object.keys(e).map(function (e) {
        return Number(e);
      }));
    }, [G]);
    Object(a.useEffect)(function () {
      ye(V);
    }, [V]);
    var xe = function (e) {
      re(e);
    };
    var De = function () {
      re(!1);
      x(Object(v.wj)(O.c.ImageLibrary, function (e) {
        var t = e[0];
        if (null === t || void 0 === t ? void 0 : t.id) {
          G[q].value = t.id;
          U(Object(r.a)(G));
        }
      }));
    };
    var Me = function () {
      re(!1);
      x(Object(v.wj)(O.c.IconLibrary, function (e) {
        var t = e[0];
        if (null === t || void 0 === t ? void 0 : t.name) {
          G[q].value = t.name + ".svg";
          U(Object(r.a)(G));
        }
      }));
    };
    var Le = function () {
      re(!1);
      x(Object(v.wj)(O.c.SoundLibrary, function (e) {
        var t = e[0];
        if (null === t || void 0 === t ? void 0 : t.name) {
          G[q].value = t.name;
          U(Object(r.a)(G));
        }
      }));
    };
    var Pe = function (e) {
      if (e) {
        se(!1);
        de(!1);
      }
    };
    var Be = function (e) {
      e.preventDefault();
      k.current = q;
      se(!0);
    };
    var Fe = function (e) {
      e.preventDefault();
      k.current = q;
      de(!0);
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
          return void U(Object(r.a)(G));
        }
        if (G.find(function (e, n) {
          return n !== k.current && t.trim() === e.key;
        })) {
          x(Object(v.mj)({
            showPrefixIcon: !1,
            message: N({
              id: "repeatKeyToastMsg"
            })
          }));
        } else {
          G[k.current].key = t.trim();
          U(Object(r.a)(G));
        }
      });
    }
    function We(e) {
      if (g && G.length >= g) {
        x(Object(v.mj)({
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
        return void U(Object(r.a)(G));
      }
      if (G.find(function (e, t) {
        return t !== k.current && "" === e.key;
      })) {
        x(Object(v.mj)({
          showPrefixIcon: !1,
          message: N({
            id: "repeatKeyToastMsg"
          })
        }));
      } else {
        G[k.current].key = "";
        U(Object(r.a)(G));
      }
    }
    Object(a.useEffect)(function () {
      if (ae || ue) {
        document.addEventListener("mousedown", function e() {
          se(!1);
          de(!1);
          document.removeEventListener("mousedown", e, !0);
        }, !0);
      }
    }, [ae, ue]);
    return s.a.createElement(m.f, {
      className: _.a.editListDialog,
      visible: t,
      withPortal: !0,
      onClose: function () {
        if (Object(f.isEqual)(G, I)) {
          x(Object(v.uh)());
        } else {
          me(!0);
        }
      }
    }, s.a.createElement("div", {
      className: _.a.dialogTitle
    }, d, s.a.createElement("span", {
      className: _.a.defaultData
    }, "\u2014 ", N({
      id: "StorageDialog.defaultData"
    }))), s.a.createElement(C.a, ve), s.a.createElement("div", {
      className: _.a.list
    }, s.a.createElement("div", {
      className: _.a.summary
    }, s.a.createElement("div", {
      className: _.a.count
    }, s.a.createElement("span", null, N({
      id: "keyValueTotal"
    }), "\uff1a"), G.length || "0")), s.a.createElement("div", {
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
          var i = !0;
          if (38 === r ? o -= 2 : 40 === r ? o += 2 : 37 === r && 0 === t.selectionStart ? (o -= 1, i = !1) : 39 === r && t.selectionEnd === t.value.length && (o += 1), n !== o) {
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
          isTrimmed: !0,
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
          isTrimmed: !0,
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
          x(Object(v.mj)({
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
        x(Object(v.uh)());
      },
      onOk: Se
    }), s.a.createElement("div", {
      className: _.a.footer
    }, j && j === y.B ? s.a.createElement("span", null, N({
      id: "storageDialogTips"
    })) : s.a.createElement("span", null, N({
      id: "deprecatedStorageDialogTips"
    })), s.a.createElement(m.d, {
      className: p()(_.a.save, !1),
      type: "primary",
      onClick: Se
    }, N({
      id: "save"
    }), !1)));
  });
}).call(this, require("../794/625/index").setImmediate);