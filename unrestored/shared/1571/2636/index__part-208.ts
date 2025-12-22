/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-208
 */

"use strict"

import { py } from "./index__part-102"
import { DI } from "./index__part-175"
import { zL } from "./index__part-207"
import /* [auto-meaningful-name] */$_348 from "./348"
import * as /* [auto-meaningful-name] */$_147 from "./147"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1533 from "./1533"
import /* [auto-meaningful-name] */_$_ from "./1533"
var qL = undefined
function XL(e, t) {
  if (qL) {
    clearTimeout(qL)
    qL = setTimeout(function () {
      $_37_index.d.dispatch($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        message: t,
        type: "info"
      }))
      clearTimeout(qL)
      qL = undefined
    }, 400)
  } else {
    qL = setTimeout(function () {
      $_37_index.d.dispatch($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        message: e,
        type: "info"
      }))
      clearTimeout(qL)
      qL = undefined
    }, 400)
  }
}
var /* [auto-meaningful-name] */py$Option = py.Option
var ZL = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.cloudDBGridDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widgetName = e.widgetName
  var /* [auto-meaningful-name] */e$cloudDBId = e.cloudDBId
  var /* [auto-meaningful-name] */e$isProd = e.isProd
  var /* [auto-meaningful-name] */e$callback = e.callback
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var s = _React.useState()
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = _React.useState({})
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = _React.useState([])
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = _React.useState({})
  var T = $_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  var R = _React.useState("")
  var k = $_10_index.a(R, 2)
  var D = k[0]
  var M = k[1]
  var L = _React.useState([])
  var P = $_10_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = _React.useState(false)
  var W = $_10_index.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = _React.useState(false)
  var K = $_10_index.a(V, 2)
  var q = K[0]
  var X = K[1]
  var Q = _React.useState(false)
  var Z = $_10_index.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var te = _React.useState(false)
  var ne = $_10_index.a(te, 2)
  var re = ne[0]
  var oe = ne[1]
  var ie = _React.useState(true)
  var ae = $_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = _React.useState(false)
  var ue = $_10_index.a(le, 2)
  var de = ue[0]
  var pe = ue[1]
  var fe = _React.useState(false)
  var he = $_10_index.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = _React.useRef("")
  var ve = _React.useRef(false)
  var be = $_16_index.d()
  _React.useEffect(function () {
    if (!e$visible) {
      F([])
      M("")
      g({})
      w([])
      oe(false)
      pe(false)
    }
  }, [e$visible])
  _React.useEffect(function () {
    if (e$cloudDBId) {
      ce(true)
      Promise.all([$_147.e(e$cloudDBId, e$isProd ? "prod" : "dev"), $_147.f(e$cloudDBId, e$isProd ? "prod" : "dev", 0, 500)]).then(function (e) {
        var t = $_10_index.a(e, 2)
        var n = t[0]
        var r = t[1]
        ce(false)
        if (n && r && !ve.current) {
          var o = {}
          n.columns.forEach(function (e) {
            o[e.id] = {
              field: e.name,
              type: e.type
            }
          })
          var i = r.map(function (e) {
            var t = {}
            t.rowId = e.record_id
            Object.keys(e.values).forEach(function (n) {
              t[n] = e.values[n]
            })
            return t
          })
          g(o)
          w(i)
          F(n.columns)
          setTimeout(function () {
            M(n.primary_column || "")
            _e.current = n.primary_column || ""
          }, 500)
        }
      })
    }
  }, [e$cloudDBId, e$isProd])
  _React.useEffect(function () {
    if (D) {
      if (!B.find(function (e) {
        return e.id === D
      })) {
        M("")
        _e.current = ""
      }
    }
  }, [B, D])
  _React.useEffect(function () {
    $(!(!U && !q))
  }, [U, q])
  _React.useEffect(function () {
    return function () {
      ve.current = true
    }
  }, [])
  var ye = function (e, t) {
    w(e)
    g(t)
    oe(true)
    M("")
    X(false)
    H(false)
    be($$_$$_$$_$$_src_shared_events_messagesWrapper.pi({}))
  }
  var Ee = function () {
    if (!(null === l || undefined === l)) {
      l.stopEditing()
    }
    if (e$callback) {
      e$callback()
    }
    be($$_$$_$$_$$_src_shared_events_messagesWrapper.pi({}))
    be($$_$$_$$_$$_src_shared_events_messagesWrapper.ij("", false, "", false, function () {}))
    var e = Et.Y().find(function (e) {
      return e.attributes.cloudDbId === e$cloudDBId
    })
    if (e) {
      be($$_$$_$$_$$_src_shared_events_messagesWrapper.Xh(e.id))
    }
  }
  var Oe = function (e) {
    H(e)
  }
  var we = function (e) {
    var /* [auto-meaningful-name] */e$node$id = e.node.id
    var /* [auto-meaningful-name] */e$colDef$colId = e.colDef.colId
    var r = e.api.getColumnDefs()
    var o = e.api.getModel()
    if (e$node$id && !A[e$node$id]) {
      A[e$node$id] = true
      j(A)
    }
    pe(true)
    var /* [auto-meaningful-name] */e$value = e.value
    if (e$value) {
      var s = r.find(function (e) {
        return e.colId === e$colDef$colId
      })
      if (s && e$colDef$colId) {
        var /* [auto-meaningful-name] */s$type = s.type
        if ("boolean" === s$type && "true" !== e$value && "false" !== e$value && e$node$id) {
          var l = e.api.getRowNode(e$node$id)
          if (!(null === l || undefined === l)) {
            l.setDataValue(e$colDef$colId, "")
          }
          XL($_710_index$a$formatMessage({
            id: "cloudGrid.booleanCheckNotice"
          }), $_710_index$a$formatMessage({
            id: "cloudGrid.commonCheckNotice"
          }))
        }
        if ("number" === s$type) {
          var u = parseFloat(e$value)
          if (isNaN(u)) {
            if (e$node$id) {
              var d = e.api.getRowNode(e$node$id)
              if (!(null === d || undefined === d)) {
                d.setDataValue(e$colDef$colId, "")
              }
              XL($_710_index$a$formatMessage({
                id: "cloudGrid.numberCheckNotice"
              }), $_710_index$a$formatMessage({
                id: "cloudGrid.commonCheckNotice"
              }))
            }
          } else if (String(u) !== e$value && e$node$id) {
            var p = e.api.getRowNode(e$node$id)
            if (!(null === p || undefined === p)) {
              p.setDataValue(e$colDef$colId, String(u))
            }
          }
        }
      }
    }
    if (!(_e.current !== e$colDef$colId && "".concat("COLUMN_").concat(_e.current) !== e$colDef$colId)) {
      if (e$colDef$colId && r && o) {
        Re(e$colDef$colId, r, o)
      }
    }
  }
  var Ce = function (e) {
    var t = e.api.getColumnDefs()
    var n = e.api.getModel()
    pe(true)
    if (_e.current && t && n) {
      Re(_e.current, t, n)
    }
  }
  var Te = function (e) {
    u(e)
  }
  var Se = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t, n) {
      var i
      var s
      var c
      var l
      var u
      var d
      var p
      var f
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!me && e$cloudDBId) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (ge(true), i = {}, s = new RegExp("".concat("COLUMN_", "(.*)")), c = [], null === n || undefined === n || n.forEach(function (e) {
                var t
                var /* [auto-meaningful-name] */e$name = e.name
                if (e$name) {
                  if (null === (t = e.id) || undefined === t ? undefined : t.match(s)) {
                    i[e$name] = e.id || ""
                    c.push({
                      name: e$name,
                      type: e.type || "string"
                    })
                  } else {
                    i[e$name] = e.id || ""
                    c.push({
                      id: e.id,
                      name: e$name,
                      type: e.type || "string"
                    })
                  }
                }
              }), !e$isProd) {
                e.next = 11
                break
              }
              e.t0 = c
              e.next = 14
              break
            case 11:
              e.next = 13
              return $_147.q(e$cloudDBId, c, "dev")
            case 13:
              e.t0 = e.sent
            case 14:
              if (l = e.t0, e.prev = 15, u = D || "", Object.keys(i).length > 0 && (d = Object.keys(i).find(function (e) {
                return i[e] === D || i[e] === "".concat("COLUMN_").concat(D)
              }) || "", p = l.find(function (e) {
                return e.name === d
              }), u = (null === p || undefined === p ? undefined : p.id) || ""), !l) {
                e.next = 32
                break
              }
              if (!re) {
                e.next = 25
                break
              }
              e.next = 22
              return Ae(t, l, i, u)
            case 22:
              e.t1 = e.sent
              e.next = 28
              break
            case 25:
              e.next = 27
              return Ie(t, l, i, u)
            case 27:
              e.t1 = e.sent
            case 28:
              if (!(f = e.t1)) {
                e.next = 32
                break
              }
              be($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
                allowText: $_710_index$a$formatMessage({
                  id: "cloudGrid.confirm"
                }),
                title: "错误",
                content: "错误原因 ".concat(f),
                cancelBtnVisible: true
              }))
              return e.abrupt("return")
            case 32:
              if (!e$isProd) {
                be($$_$$_$$_$$_src_shared_events_messagesWrapper.zg(e$cloudDBId, l))
              }
              Ee()
              ge(false)
              e.next = 40
              break
            case 37:
              e.prev = 37
              e.t2 = e.catch(15)
              console.error(e.t2)
            case 40:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[15, 37]])
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  var Ae = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t, n, i, a) {
      var s
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              s = []
              t.forEach(function (e) {
                var t = []
                n.forEach(function (n) {
                  if (e["".concat(n.id)] || e[i[n.name]]) {
                    t.push({
                      column_id: n.id || "",
                      value: e["".concat(n.id)] || e[i[n.name]]
                    })
                  }
                })
                s.push({
                  values: t
                })
              })
              e.next = 4
              return $_147.i(e$cloudDBId, s, e$isProd ? "prod" : "dev", a)
            case 4:
              e$sent = e.sent
              return e.abrupt("return", e$sent)
            case 6:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n, r, o) {
      return e.apply(this, arguments)
    }
  }()
  var Ie = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t, n, i, a) {
      var s
      var c
      var l
      var u
      var d
      var /* [auto-meaningful-name] */yD$rowId
      var f
      var h
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              for (s = {
                add: [],
                update: [],
                delete: []
              }, c = 0, l = 0, u = function () {
                var e = y[c]
                var r = t[l]
                if (e.rowId === r.rowId) {
                  var /* [auto-meaningful-name] */e$rowId = e.rowId
                  if (A[e$rowId]) {
                    var a = n.map(function (e) {
                      return {
                        column_id: e.id || "",
                        value: r["".concat(e.id)] || r[i[e.name]] || ""
                      }
                    })
                    s.update.push({
                      record_id: e$rowId,
                      values: a
                    })
                  }
                  l++
                  c++
                } else {
                  var /* [auto-meaningful-name] */_e$rowId = e.rowId
                  s.delete.push(_e$rowId)
                  c++
                }
              }; c < y.length && l < t.length;) {
                u()
              }
              if (c < y.length) {
                for (d = c; d < y.length; d++) {
                  yD$rowId = y[d].rowId
                  s.delete.push(yD$rowId)
                }
              }
              if (l < t.length) {
                for (f = function (e) {
                  var r = t[e]
                  var o = []
                  n.forEach(function (e) {
                    if (r["".concat(e.id)] || r[i[e.name]]) {
                      o.push({
                        column_id: e.id || "",
                        value: r["".concat(e.id)] || r[i[e.name]]
                      })
                    }
                  })
                  s.add.push({
                    values: o
                  })
                }, h = l; h < t.length; h++) {
                  f(h)
                }
              }
              e.next = 9
              return $_147.r(e$cloudDBId, s, e$isProd ? "prod" : "dev", a)
            case 9:
              e$sent = e.sent
              return e.abrupt("return", e$sent)
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n, r, o) {
      return e.apply(this, arguments)
    }
  }()
  var je = React.createElement("div", null, React.createElement($_13_index.d, {
    type: "default",
    onClick: Ee
  }, $_710_index$a$formatMessage({
    id: "cloudGrid.cancel"
  })), React.createElement($_13_index.d, {
    type: "primary",
    disabled: J,
    onClick: function () {
      var e = []
      var t = false
      if (!(null === l || undefined === l)) {
        l.getModel().forEachNode(function (n) {
          if (D) {
            if (!(n.data[D] || n.data["".concat("COLUMN_").concat(D)])) {
              t = true
            }
          }
          e.push(n.data)
        })
      }
      var n = []
      var r = false
      if (!(null === l || undefined === l)) {
        l.getColumnDefs().forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          var /* [auto-meaningful-name] */e$headerName = e.headerName
          var /* [auto-meaningful-name] */e$type = e.type
          var a = "string" === typeof e$type ? e$type : "string"
          if (e$headerName) {
            n.push({
              id: e$colId,
              name: e$headerName,
              type: a
            })
          } else {
            if ("addColumn" !== e$colId && "indexColumn" !== e$colId) {
              r = true
            }
          }
        })
      }
      if (t) {
        be($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          allowText: $_710_index$a$formatMessage({
            id: "cloudGrid.confirm"
          }),
          title: $_710_index$a$formatMessage({
            id: "cloudGrid.uniqueColumnEmptyTitle"
          }),
          content: $_710_index$a$formatMessage({
            id: "cloudGrid.uniqueColumnEmptyContent"
          }),
          cancelBtnVisible: false
        }))
      } else {
        if (r) {
          be($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
            onCancel: function () {
              Se(e, n)
            },
            cancelText: $_710_index$a$formatMessage({
              id: "cloudGrid.continueSave"
            }),
            allowText: $_710_index$a$formatMessage({
              id: "cloudGrid.returnEdit"
            }),
            title: $_710_index$a$formatMessage({
              id: "cloudGrid.EmptyColumnTitle"
            }),
            content: $_710_index$a$formatMessage({
              id: "cloudGrid.EmptyColumnContent"
            })
          }))
        } else {
          Se(e, n)
        }
      }
    }
  }, $_710_index$a$formatMessage({
    id: "cloudGrid.save"
  })))
  var Ne = function (e) {
    var t = null === l || undefined === l ? undefined : l.getColumnDefs()
    var n = null === l || undefined === l ? undefined : l.getModel()
    if (t && n) {
      Re(e, t, n)
    }
    pe(true)
    M(e)
    _e.current = e
  }
  var Re = function (e, t, n) {
    var r = {}
    if (e) {
      var o = null === t || undefined === t ? undefined : t.find(function (t) {
        return t.colId === "".concat("COLUMN_").concat(e) || t.colId === e
      })
      var i = null === o || undefined === o ? undefined : o.colId
      if (i) {
        var s = {}
        var c = []
        n.forEachNode(function (e) {
          var /* [auto-meaningful-name] */e$data = e.data
          var n = e$data[i]
          if (n) {
            if (s[n]) {
              s[n].push(e$data.rowId)
              c.push.apply(c, $_25_index.a(s[n]))
            } else {
              s[n] = [e$data.rowId]
            }
          }
        })
        if (c.length > 0) {
          r[i] = Array.from(c)
        }
      }
    }
    if (0 === Object.keys(r).length) {
      X(false)
    } else {
      be($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        message: $_710_index$a$formatMessage({
          id: "cloudGrid.uniqueColumnError"
        }),
        type: "error"
      }))
      X(true)
    }
    be($$_$$_$$_$$_src_shared_events_messagesWrapper.pi(r))
  }
  var ke = function (e) {
    var t = []
    e.forEach(function (e) {
      if (e.headerName) {
        var n = e.colId || ""
        var r = new RegExp("".concat("COLUMN_", "(.*)"))
        var o = null === n || undefined === n ? undefined : n.match(r)
        var /* [auto-meaningful-name] */e$type = e.type
        t.push({
          name: e.headerName,
          id: o ? o[1] : n,
          type: "string" === typeof e$type ? e$type : "string"
        })
      }
    })
    F(t)
  }
  var xe = function (e) {
    var t = B.find(function (t) {
      return t.id === e
    })
    return t ? t.name : undefined
  }
  var De = function () {
    return B
  }
  return React.createElement($_13_index.f, {
    visible: e$visible,
    className: $_348.dataViewerGrid,
    title: React.createElement("div", {
      className: $_348.titleArea
    }, React.createElement("div", {
      className: $_348.title
    }, e$widgetName), React.createElement("div", {
      className: N($_348.titleBtn, e$isProd ? $_348.prod : $_348.dev)
    }, $_710_index$a$formatMessage(e$isProd ? {
      id: "cloudGrid.prodData"
    } : {
      id: "cloudGrid.testData"
    }))),
    onClose: function () {
      if (!(null === l || undefined === l)) {
        l.stopEditing()
      }
      if (de) {
        be($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          onConfirm: function () {
            Ee()
          },
          allowText: $_710_index$a$formatMessage({
            id: "cloudGrid.confirm"
          }),
          title: $_710_index$a$formatMessage({
            id: "cloudGrid.tips"
          }),
          content: $_710_index$a$formatMessage({
            id: "cloudGrid.unSaveNotice"
          })
        }))
      } else {
        Ee()
      }
    },
    footer: je
  }, se ? React.createElement("div", {
    className: $_348.loadingArea
  }, React.createElement("img", {
    src: _$_,
    alt: "loading"
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "cloudGrid.loading"
  }))) : function () {
    if (e$visible) {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: $_348.gridInfo
      }, React.createElement("span", {
        className: $_348.uniqueText
      }, React.createElement("span", null, $_710_index$a$formatMessage({
        id: "cloudGrid.uniqueColumn"
      })), React.createElement($_1213.a, {
        content: React.createElement("div", {
          className: $_348.btnContent
        }, React.createElement("div", null, $_710_index$a$formatMessage({
          id: "cloudGrid.uniqueColumnTipsContent"
        }))),
        placement: "rightTop",
        trigger: "click"
      }, React.createElement("div", {
        className: $_348.btn
      }, "?"))), React.createElement("span", {
        className: $_348.uniqueSelect
      }, React.createElement(py, {
        disabled: e$isProd,
        allowClear: true,
        placeholder: $_710_index$a$formatMessage({
          id: "cloudGrid.selectPlaceholder"
        }),
        onChange: Ne,
        value: xe(D),
        listHeight: 160,
        style: {
          width: "148px",
          height: "32px"
        }
      }, B.map(function (e) {
        return React.createElement(py$Option, {
          value: e.id || "",
          key: e.id
        }, e.name)
      }))), !e$isProd && React.createElement(React.Fragment, null, React.createElement("span", {
        className: $_348.importFile
      }, React.createElement(zL, {
        getColumnInfo: De,
        handleSetGridInfo: ye
      })), React.createElement("span", {
        className: $_348.importFileBtn
      }, React.createElement($_1213.a, {
        content: React.createElement("div", {
          className: $_348.importContent
        }, React.createElement("div", null, $_710_index$a$formatMessage({
          id: "cloudGrid.importTipsContent1"
        })), React.createElement("div", null, $_710_index$a$formatMessage({
          id: "cloudGrid.importTipsContent2"
        })), React.createElement("div", null, $_710_index$a$formatMessage({
          id: "cloudGrid.importTipsContent3"
        }))),
        placement: "leftTop",
        trigger: "click"
      }, React.createElement("div", {
        className: $_348.btn
      }, "?"))))), React.createElement("div", {
        className: $_348.grid
      }, React.createElement(DI, {
        id: e$cloudDBId,
        header: m,
        data: y,
        onGridReady: Te,
        allowEditHeader: !e$isProd,
        resizeColumnNumber: 12,
        columnUseType: true,
        visible: e$visible,
        handleCellChangeEvent: we,
        handleGridColumnChange: ke,
        handleRowDataUpdate: Ce,
        setSaveDisabled: Oe
      })))
    }
  }())
})
export { ZL }
