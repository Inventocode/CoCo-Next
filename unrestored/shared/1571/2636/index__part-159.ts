/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-159
 */

"use strict"

import { we } from "./index__part-6"
import { GS } from "./index__part-158"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as /* [auto-meaningful-name] */$_20_index from "./20/index"
import /* [auto-meaningful-name] */Lodash from "lodash"
import * as An from "./5"
import * as _n from "./47"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_568 from "./568"
import /* [auto-meaningful-name] */_$_ from "./568"
import * as /* [auto-meaningful-name] */$_110 from "./110"
import * as /* [auto-meaningful-name] */$_174 from "./174"
import * as /* [auto-meaningful-name] */$_496 from "./496"
import /* [auto-meaningful-name] */_$_2 from "./496"
import * as /* [auto-meaningful-name] */$_384 from "./384"
import /* [auto-meaningful-name] */_$_3 from "./384"
var QS = function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var /* [auto-meaningful-name] */e$watchItem = e.watchItem
  var r = $_16_index.e(function (e) {
    return e.project.playing
  })
  var o = $_16_index.e(function (e) {
    return e.project.screens
  })
  var i = o.findIndex(function (e) {
    return e.id === e$watchItem.screenId
  })
  var a = undefined
  if (i >= 0) {
    a = o.get(i)
  }
  var s = function () {
    $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "isWatching", false))
    $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "selected", false))
  }
  var c = function () {
    $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "isFold", true))
  }
  var l = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (e$watchItem.type !== An.B && e$watchItem.type !== An.y || $_20_index.resetLocalStorage(e$watchItem.id), e$watchItem.type !== An.G) {
                e.next = 4
                break
              }
              e.next = 4
              return $_20_index.resetTableDataIndexedDB(e$watchItem.id)
            case 4:
              $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.pj("".concat(e$watchItem.name), true))
            case 5:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  if (e$watchItem.isFold) {
    return null
  }
  var u = []
  var d = e$watchItem[r ? "value" : "defaultValue"]
  if ("LIST" === e$watchItem.type) {
    for (var p = 0; p < d.length; p++) {
      u.push({
        key: (p + 1).toString(),
        value: $_190.e(d[p])
      })
    }
  }
  if ("DICT" === e$watchItem.type) {
    for (var f in d) u.push({
      key: f,
      value: $_190.e(d[f], false)
    })
  }
  if (e$watchItem.type === An.B || e$watchItem.type === An.y) {
    if (Array.isArray(e$watchItem.value)) {
      var m
      var g = _n.a(e$watchItem.value)
      try {
        for (g.s(); !(m = g.n()).done;) {
          var /* [auto-meaningful-name] */m$value = m.value
          u.push({
            key: m$value.key,
            value: $_190.e(m$value.value)
          })
        }
      } catch (y) {
        g.e(y)
      } finally {
        g.f()
      }
    } else if ("object" === typeof e$watchItem.value) {
      for (var b in e$watchItem.value) u.push({
        key: b,
        value: $_190.e(e$watchItem.value[b])
      })
    }
  }
  if (e$watchItem.type === An.G) {
    u.push({
      key: "cache",
      value: JSON.stringify(e$watchItem.value)
    })
  }
  return React.createElement("div", {
    className: _$_3.container
  }, function () {
    var e = null
    if (!(e$watchItem.type !== An.B && e$watchItem.type !== An.y)) {
      e = React.createElement($_748_index.a, {
        placement: "bottom",
        trigger: ["hover"],
        title: $_710_index$a$formatMessage({
          id: "resetData"
        })
      }, React.createElement("div", {
        className: _$_3.resetAction,
        onClick: l
      }, React.createElement($_13_index.j, {
        type: "icon-resetData"
      })))
    }
    return React.createElement("div", {
      className: N(_$_3.flexSc, _$_3.header)
    }, React.createElement("div", {
      className: _$_3.name
    }, React.createElement("div", {
      className: _$_3.screenIcon
    }, a ? GS(i, a) : ""), React.createElement("div", {
      className: _$_3.title
    }, e$watchItem.name)), React.createElement("div", {
      className: _$_3.action
    }, r ? "" : e, React.createElement("div", {
      className: _$_3.closeAction,
      onClick: s
    }, React.createElement($_13_index.j, {
      type: "icon-close-datawatch"
    })), React.createElement("div", {
      className: _$_3.unFoldAction,
      onClick: c
    }, React.createElement($_13_index.j, {
      type: "icon-open"
    }))))
  }(), React.createElement("div", {
    className: _$_3.content
  }, u.map(function (e) {
    return React.createElement("div", {
      className: _$_3.line,
      key: e.key
    }, React.createElement("div", {
      className: _$_3.lineKey
    }, React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e.key
    }, React.createElement("div", {
      className: _$_3.lineKeyText
    }, e.key))), React.createElement("div", {
      className: _$_3.lineValue
    }, React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e.value
    }, React.createElement("div", {
      className: _$_3.text
    }, $_190.e(e.value)))))
  })))
}
var ZS = function (e) {
  var /* [auto-meaningful-name] */e$watchItem = e.watchItem
  var n = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = $_16_index.e(function (e) {
    return e.project.screens
  })
  var i = $_16_index.e(function (e) {
    return e.project.playing
  })
  var a = o.findIndex(function (e) {
    return e.id === e$watchItem.screenId
  })
  var s = undefined
  if (a >= 0) {
    s = o.get(a)
  }
  var c = $_110.b(e$watchItem.type)
  var l = c.foldIcon && e$watchItem.isFold
  var u = function () {
    if (e$watchItem.type !== An.G) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "isFold", false))
    } else {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.aj(true, e$watchItem.id))
    }
  }
  var d = function () {
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "isWatching", false))
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "selected", false))
  }
  _React.useEffect(function () {
    if (e$watchItem.type === An.G) {
      $_174.a.get(e$watchItem.id).then(function (e) {
        if (e) {
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$watchItem.id, "value", e))
        }
      })
    }
  }, [n, e$watchItem.id, e$watchItem.type])
  var p = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (e$watchItem.type !== An.B && e$watchItem.type !== An.y || $_20_index.resetLocalStorage(e$watchItem.id), e$watchItem.type !== An.G) {
                e.next = 4
                break
              }
              e.next = 4
              return $_20_index.resetTableDataIndexedDB(e$watchItem.id)
            case 4:
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.pj("".concat(e$watchItem.name), true))
            case 5:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var m = null
  if (!(e$watchItem.type !== An.B && e$watchItem.type !== An.y)) {
    m = React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: $_710_index$a$formatMessage({
        id: "resetData"
      })
    }, React.createElement("div", {
      className: _$_2.resetAction,
      onClick: p
    }, React.createElement($_13_index.j, {
      type: "icon-resetData"
    })))
  }
  var g = function () {
    var e = function (e, t) {
      var n = t ? "value" : "defaultValue"
      if (!(e.type !== An.B && e.type !== An.G && e.type !== An.y)) {
        n = "value"
      }
      var r = Lodash.cloneDeep(e[n])
      var o = []
      if ("TABLE_DATA_WIDGET" === e.type) {
        for (var i in r.header) o.push(r.header[i].field)
      }
      var a = {}
      var s = ""
      var c = new Set()
      var l = function (e, t) {
        if ("object" === typeof t && null !== t) {
          if (c.has(t)) {
            try {
              return JSON.parse(JSON.stringify(t))
            } catch (n) {
              return Array.isArray(t) ? "[...]" : "{...}"
            }
          }
          c.add(t)
        }
        return t
      }
      switch (e.type) {
        case "PRIMITIVE":
        case "LIST":
        case "DICT":
          s = JSON.stringify(r, l).replaceAll("\"[...]\"", "[...]").replaceAll("\"{...}\"", "{...}")
          break
        case An.B:
        case An.y:
          if (Array.isArray(r)) {
            var u
            var d = _n.a(r)
            try {
              for (d.s(); !(u = d.n()).done;) {
                var /* [auto-meaningful-name] */u$value = u.value
                a[u$value.key] = $_190.e(u$value.value)
              }
            } catch (f) {
              d.e(f)
            } finally {
              d.f()
            }
          } else if ("object" === typeof r) {
            a = r
          }
          s = JSON.stringify(a, l)
          break
        case An.G:
          s = "Column names: " + o.join(",")
      }
      return s
    }(e$watchItem, i)
    return React.createElement("div", {
      className: _$_2.itemBox
    }, React.createElement("div", {
      className: _$_2.name
    }, React.createElement("div", {
      className: _$_2.screenIcon
    }, s ? GS(a, s) : ""), React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e$watchItem.name
    }, React.createElement("div", {
      className: _$_2.nameText
    }, e$watchItem.name))), React.createElement("div", {
      className: _$_2.value
    }, React.createElement("div", {
      className: _$_2.valueText
    }, React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover"],
      title: e
    }, e))), React.createElement("div", {
      className: _$_2.action
    }, i ? "" : m, React.createElement("div", {
      className: _$_2.closeAction,
      onClick: d
    }, React.createElement($_13_index.j, {
      type: "icon-close-datawatch"
    })), l ? React.createElement("div", {
      className: _$_2.foldAction,
      onClick: u
    }, React.createElement($_13_index.j, {
      type: c.foldIcon
    })) : ""))
  }
  return React.createElement("div", {
    className: _$_2.container
  }, e$watchItem.isFold ? g() : "", e$watchItem.type !== An.G || e$watchItem.isFold ? "" : g(), React.createElement(QS, {
    watchItem: e$watchItem
  }))
}
var JS = function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.e(function (e) {
    return e.dataWatch.variableList
  })
  var n = function (e) {
    return {
      PRIMITIVE: e.filter(function (e) {
        return "PRIMITIVE" === e.type
      }),
      LIST: e.filter(function (e) {
        return "LIST" === e.type
      }),
      DICT: e.filter(function (e) {
        return "DICT" === e.type
      }),
      TABLE_DATA_WIDGET: e.filter(function (e) {
        return "TABLE_DATA_WIDGET" === e.type
      }),
      LOCAL_STORAGE: e.filter(function (e) {
        return e.type === An.y || e.type === An.B
      })
    }
  }(t.filter(function (e) {
    return e.isWatching
  }))
  var /* [auto-meaningful-name] */n$PRIMITIVE = n.PRIMITIVE
  var /* [auto-meaningful-name] */n$LIST = n.LIST
  var /* [auto-meaningful-name] */n$DICT = n.DICT
  var /* [auto-meaningful-name] */n$TABLE_DATA_WIDGET = n.TABLE_DATA_WIDGET
  var /* [auto-meaningful-name] */n$LOCAL_STORAGE = n.LOCAL_STORAGE
  var c = function (t, n) {
    if (0 === n.size) {
      return ""
    }
    var r = n.filter(function (e) {
      return "GLOBAL" === e.screenId
    })
    var o = n.filter(function (e) {
      return "GLOBAL" !== e.screenId
    })
    var i = [].concat($_25_index.a(r), $_25_index.a(o))
    var a = $_110.b(t)
    return React.createElement("div", {
      className: _$_.watchBox
    }, React.createElement("div", {
      className: _$_.category
    }, React.createElement("div", {
      className: _$_.categoryIcon,
      style: {
        color: a.color,
        fontSize: a.fontSize
      }
    }, React.createElement($_13_index.j, {
      type: a.class
    })), React.createElement("div", {
      className: _$_.categoryText
    }, $_710_index$a$formatMessage({
      id: a.text
    }))), i.map(function (e) {
      return React.createElement(ZS, {
        watchItem: e,
        key: e.id
      })
    }))
  }
  return 0 === t.size ? React.createElement("div", {
    className: N(_$_.noData),
    style: {
      visibility: "hidden"
    }
  }, React.createElement(we, null), React.createElement("span", {
    className: _$_.emptyText
  }, $_710_index$a$formatMessage({
    id: "DataWatch.unable"
  }))) : 0 === t.filter(function (e) {
    return e.isWatching
  }).size ? React.createElement("div", {
      className: N(_$_.noData),
      style: {
        visibility: "hidden"
      }
    }, React.createElement(we, null), React.createElement("span", {
      className: _$_.emptyText
    }, $_710_index$a$formatMessage({
      id: "DataWatch.empty"
    }))) : React.createElement("div", {
      className: N(_$_.list)
    }, c("PRIMITIVE", n$PRIMITIVE), c("LIST", n$LIST), c("DICT", n$DICT), c("LOCAL_STORAGE_WIDGET", n$LOCAL_STORAGE), c("TABLE_DATA_WIDGET", n$TABLE_DATA_WIDGET))
}
export { JS }
