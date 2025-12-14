/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-128
 */

"use strict"

import * as /* [auto-meaningful-name] */$_557 from "./557"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_147 from "./147"
import * as /* [auto-meaningful-name] */$_1520 from "./1520"
import /* [auto-meaningful-name] */_$_ from "./1520"
import * as /* [auto-meaningful-name] */$_421 from "./421"
import /* [auto-meaningful-name] */_$_2 from "./421"
var Tw = {
  columns: [],
  rows: []
}
var Sw = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var r = e$getValue("cloudDbId")
  var o = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = Et.Bb(e$widgetId)
  var s = _React.useState(Tw)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = _React.useState(true)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = _React.useRef(false)
  _React.useEffect(function () {
    return function () {
      v.current = true
    }
  }, [])
  _React.useEffect(function () {
    if (a && r) {
      u(Tw)
      g(true)
      Promise.all([$_147.e(r, "dev"), $_147.f(r, "dev", 0, 500)]).then(function (e) {
        var t = $_10_index.a(e, 2)
        var n = t[0]
        var r = t[1]
        g(false)
        if (n) {
          var o = n.columns.map(function (e) {
            return e.name
          })
          var i = n.columns.map(function (e) {
            return e.id
          })
          var a = r ? r.map(function (e) {
            var t = []
            i.forEach(function (n) {
              if (e.values[n]) {
                t.push(e.values[n])
              } else {
                t.push("")
              }
            })
            return {
              id: e.record_id,
              value: t
            }
          }) : []
          if (!v.current) {
            u({
              columns: o,
              rows: a
            })
          }
        }
      }).catch(function (e) {
        console.error(e)
      })
    }
  }, [r, a])
  if (!a) {
    return React.createElement(React.Fragment, null)
  }
  function b() {
    if (a) {
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.Xh(""))
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.ij(e$getValue("name"), true, r, false, function () {}))
    }
  }
  var y = function (e) {
    var /* [auto-meaningful-name] */e$index = e.index
    var /* [auto-meaningful-name] */e$style = e.style
    var r = l.rows[e$index - 1]
    var /* [auto-meaningful-name] */l$columns = l.columns
    return 0 === e$index ? React.createElement("div", {
      className: _$_2.listItem,
      key: e$index,
      style: e$style
    }, l$columns.map(function (e, t) {
      return React.createElement("div", {
        className: _$_2.column,
        key: "".concat(e, "-").concat(t)
      }, e)
    })) : React.createElement("div", {
      className: _$_2.listItem,
      key: e$index,
      style: e$style
    }, r.value.map(function (e, t) {
      return React.createElement("div", {
        className: _$_2.row,
        key: "".concat(r.id, "-").concat(e, "-").concat(t)
      }, React.createElement("span", {
        title: String(e)
      }, String(e)))
    }))
  }
  return React.createElement("div", {
    className: N(_$_2.formItemWrapper, _$_2.cloudDBList)
  }, m ? React.createElement("div", {
    className: _$_2.loadingArea
  }, React.createElement("img", {
    src: _$_,
    alt: "loading"
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "cloudDBWidget.loading"
  }))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: _$_2.title
  }, React.createElement("div", null, $_710_index$a$formatMessage({
    id: "cloudDBWidget.data"
  }), React.createElement($_1213.a, {
    content: React.createElement("div", {
      className: _$_2.btnContent
    }, React.createElement("div", null, " ", $_710_index$a$formatMessage({
      id: "cloudDBWidget.tipsContent"
    }))),
    placement: "rightTop",
    trigger: "click"
  }, React.createElement("div", {
    className: _$_2.btn
  }, "?"))), React.createElement("div", {
    className: _$_2.editBtnBox
  }, React.createElement($_13_index.d, {
    className: _$_2.editBtn,
    onClick: b
  }, React.createElement($_13_index.j, {
    type: "icon-storage-edit"
  })))), React.createElement("div", {
    className: _$_2.list
  }, React.createElement("div", {
    className: _$_2.itemWrapper
  }, l.columns && l.columns.length > 0 && React.createElement($_557.a, {
    width: l.columns.length >= 5 ? 100 * l.columns.length : "auto",
    height: 32 * (l.rows.length > 15 ? 14.5 : l.rows.length + 1),
    itemCount: l.rows.length + 1,
    renderItem: y,
    itemSize: 32,
    className: "VirtualList"
  })))))
})
export { Sw }
