/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-210
 */

"use strict"

import { we } from "./index__part-6"
import { Bm } from "./index__part-75"
import { _C } from "./index__part-139"
import { eP, nP } from "./index__part-209"
import /* [auto-meaningful-name] */$_160 from "./160"
import * as /* [auto-meaningful-name] */$_147 from "./147"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1534 from "./1534"
import /* [auto-meaningful-name] */$_15341 from "./1534"
var iP = {
  total: 1e5,
  dev: 100,
  prod: 200
}
var aP = memo(function () {
  var e
  var t = useSelector(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var n = useDispatch()
  var r = useState(true)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = useState(iP)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState([])
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState()
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = useState()
  var T = $_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  var R = useState()
  var k = $_10_index.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = useState([])
  var L = $_10_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useState([])
  var G = $_10_index.a(F, 2)
  var W = G[0]
  var U = G[1]
  var H = useState(0)
  var V = $_10_index.a(H, 2)
  var K = V[0]
  var q = V[1]
  var X = useState(true)
  var Q = $_10_index.a(X, 2)
  var Z = Q[0]
  var J = Q[1]
  var $ = useState(true)
  var ee = $_10_index.a($, 2)
  var te = ee[0]
  var ne = ee[1]
  var re = useState(true)
  var oe = $_10_index.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = useState(0)
  var ce = $_10_index.a(se, 2)
  var le = ce[0]
  var ue = ce[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var pe = useRef("")
  var fe = useSelector(function (e) {
    var /* [auto-meaningful-name] */e$common$userInfo
    return null === (e$common$userInfo = e.common.userInfo) || undefined === e$common$userInfo ? undefined : e$common$userInfo.id
  })
  var he = useSelector(function (e) {
    return e.common.isProjectFinishedOpen
  })
  var me = function () {
    n($$_$$_$$_$$_src_editor_redux_common_actions.jj(false))
  }
  var ge = Et.Y().map(function (e) {
    return e.attributes.cloudDbId
  })
  useEffect(function () {
    if (t) {
      var /* [auto-meaningful-name] */pe$current = pe.current
      $_147.h().then(function (t) {
        if (t && 0 !== t.length) {
          J(false)
          var n = 0
          var r = 0
          var o = t.map(function (e) {
            n += e.dev_capacity
            r += e.prod_capacity
            return {
              id: e.id,
              name: e.name,
              workIds: e.work_list
            }
          }).reverse()
          g(o)
          u({
            dev: n,
            prod: r,
            total: 1e5
          })
          if (o.length > 0) {
            var i = o.find(function (t) {
              return t.id === pe$current
            })
            var a = i ? i.id : o[0].id
            var s = o.find(function (e) {
              return e.id === a
            })
            if (s) {
              w(s.id)
              pe.current = s.id
              j(s.name)
              if (s.id === pe$current) {
                ue(performance.now())
              }
            }
          }
        } else {
          J(true)
        }
      })
    }
  }, [K, t])
  useEffect(function () {
    if (y) {
      ne(true)
      Promise.all([
        $_147.e(y, i ? "dev" : "prod"), $_147.f(y, i ? "dev" : "prod", 0, 500), new Promise(function (e) {
          setTimeout(e, 300)
        })
      ]).then(function (e) {
        var t = $_10_index.a(e, 3)
        var n = t[0]
        var r = t[1]
        t[2]
        ne(false)
        D(i ? n.dev_capacity : n.prod_capacity)
        j(n.name)
        if (0 !== n.columns.length) {
          var o = r ? r.map(function (e) {
            var t = []
            n.columns.forEach(function (n) {
              var r = n.id
              if (e.values[r]) {
                t.push(e.values[r])
              } else {
                t.push("")
              }
            })
            return {
              id: e.record_id,
              value: t
            }
          }) : []
          ae(false)
          U(o)
          B(n.columns)
        } else {
          ae(true)
        }
      })
    }
  }, [y, i, le])
  useEffect(function () {
    var e = function () {
      var e = O.a(RegeneratorRuntime.mark(function e(t) {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                try {
                  if (fe && he) {
                    n($$_$$_$$_$$_src_editor_redux_common_actions.Cf(true))
                  }
                } catch (t) {
                  console.error(t)
                }
              case 1:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function (t) {
        return e.apply(this, arguments)
      }
    }()
    window.addEventListener("focus", e)
    return function () {
      window.removeEventListener("focus", e)
    }
  }, [n, fe, he])
  var _e = function (e, t) {
    var n = Math.floor(e / t * 100)
    return Math.max(5, n)
  }
  var ve = function (e) {
    w(e)
    pe.current = e
  }
  var be = function (e) {
    $_147.e(e, "dev").then(function (t) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.hg("", $$_$$_$$_$$_src_editor_widget_builtIn_types.h, {
        x: 0,
        y: 0
      }, {
        cloudDbId: e,
        name: t.name,
        columns: t.columns,
        primaryKey: t.primary_column
      }))
      me()
    })
  }
  var ye = function (e, t) {
    if (ge.includes(e)) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.zh({
        title: $_710$a$formatMessage({
          id: "cloudDBManager.deleteTitle"
        }),
        content: $_710$a$formatMessage({
          id: "cloudDBManager.deleteImportContent"
        }),
        cancelBtnVisible: false,
        confirmBtnVisible: true
      }))
    } else {
      var r = function () {
        O.a(RegeneratorRuntime.mark(function t() {
          return RegeneratorRuntime.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0
                  t.next = 3
                  return $_147.c(e)
                case 3:
                  q(K + 1)
                  t.next = 9
                  break
                case 6:
                  t.prev = 6
                  t.t0 = t.catch(0)
                  console.info(t.t0)
                case 9:
                case "end":
                  return t.stop()
              }
            }
          }, t, null, [[0, 6]])
        }))()
      }
      if (t.length > 0) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.zh({
          onConfirm: function () {
            r()
          },
          isDangerous: true,
          title: $_710$a$formatMessage({
            id: "cloudDBManager.deleteTitle"
          }),
          content: $_710$a$formatMessage({
            id: "cloudDBManager.deleteContent"
          })
        }))
      } else {
        r()
      }
    }
  }
  var Ee = function (e) {
    var t = function () {
      ue(performance.now())
    }
    var r = function () {
      n($$_$$_$$_$$_src_editor_redux_common_actions.ij(A || "", true, e, !i, t))
    }
    if (i) {
      r()
    } else {
      n($$_$$_$$_$$_src_editor_redux_common_actions.zh({
        onConfirm: function () {
          r()
        },
        title: $_710$a$formatMessage({
          id: "cloudDBManager.editTitle"
        }),
        content: $_710$a$formatMessage({
          id: "cloudDBManager.editNotice"
        }),
        allowText: $_710$a$formatMessage({
          id: "cloudDBManager.editBtn"
        })
      }))
    }
  }
  var Oe = function (e) {
    a(e)
  }
  var Ce = {
    type: "CloudDBManagerDialog",
    url: null === (e = Bm[0]) || undefined === e ? undefined : e.url,
    label: "云数据表"
  }
  return React.createElement($_13_index.f, {
    visible: t,
    className: $_160.cloudDBManager,
    title: React.createElement("div", {
      className: $_160.managerTitle
    }, React.createElement("div", {
      className: $_160.titleText
    }, $_710$a$formatMessage({
      id: "cloudDBManager.title"
    })), React.createElement(_C, {
      onChange: function () {
        return 1
      },
      getValue: function () {
        return 1
      },
      suffix: false,
      widgetId: "unUse-fields",
      formConfig: Ce
    })),
    onClose: me
  }, React.createElement("div", {
    className: $_160.container
  }, Z ? React.createElement("div", {
    className: $_160.emptyContainer
  }, React.createElement(we, {
    text: $_710$a$formatMessage({
      id: "cloudDBManager.noCloudDB"
    })
  })) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_160.left
  }, React.createElement("div", {
    className: $_160.capacity
  }, React.createElement("div", {
    className: $_160.header
  }, React.createElement("span", {
    className: $_160.text1
  }, $_710$a$formatMessage({
    id: "cloudDBManager.capacity"
  })), React.createElement("span", {
    className: $_160.text2
  }, "".concat(l.dev + l.prod, "/").concat(l.total))), React.createElement("div", {
    className: $_160.data
  }, l.dev > 0 && React.createElement("div", {
    className: $_160.dataDev,
    style: {
      width: "".concat(_e(l.dev, l.total), "%")
    }
  }), l.prod > 0 && React.createElement("div", {
    className: $_160.dataProd,
    style: {
      width: "".concat(_e(l.prod, l.total), "%")
    }
  })), React.createElement("div", {
    className: $_160.description
  }, React.createElement("div", {
    className: N($_160.point, $_160.dev)
  }), React.createElement("span", {
    className: $_160.text
  }, $_710$a$formatMessage({
    id: "cloudDBManager.testData"
  })), React.createElement("div", {
    className: N($_160.point, $_160.prod)
  }), React.createElement("span", {
    className: $_160.text
  }, $_710$a$formatMessage({
    id: "cloudDBManager.prodData"
  }))), React.createElement("div", {
    className: $_160.line
  })), React.createElement("div", {
    className: $_160.DBData
  }, m.map(function (e) {
    return React.createElement(eP, {
      key: e.id,
      id: e.id,
      name: e.name,
      workIds: e.workIds,
      isSelected: e.id === y,
      canImport: !ge.includes(e.id),
      handleClick: ve,
      handleImport: be,
      handleDelete: ye
    })
  }))), React.createElement("div", {
    className: $_160.right
  }, React.createElement("div", {
    className: $_160.tabs
  }, React.createElement("div", {
    onClick: function () {
      return Oe(true)
    },
    className: N($_160.tab, i && $_160.selected_dev)
  }, $_710$a$formatMessage({
    id: "cloudDBManager.testData"
  })), React.createElement("div", {
    onClick: function () {
      return Oe(false)
    },
    className: N($_160.tab, !i && $_160.selected_prod)
  }, $_710$a$formatMessage({
    id: "cloudDBManager.prodData"
  }))), React.createElement("div", {
    className: $_160.gridArea
  }, te ? React.createElement("div", {
    className: N($_160.container, $_160.loading)
  }, React.createElement("img", {
    src: $_15341,
    alt: "loading"
  }), React.createElement("span", {
    className: $_160.text
  }, $_710$a$formatMessage({
    id: "cloudDBWidget.loading"
  }))) : React.createElement(nP, {
    id: y || "",
    name: A || "",
    usedCapacity: x || 0,
    renderColumns: P,
    renderRows: W,
    isNoData: ie,
    devMode: i,
    handleEdit: Ee
  }))))))
})
export { aP }
