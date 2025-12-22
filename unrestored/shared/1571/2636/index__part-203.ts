/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-203
 */

"use strict"

import { we } from "./index__part-6"
import * as /* [auto-meaningful-name] */$_94_index from "./94/index"
import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$_177 from "./177"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_193 from "./193"
import /* [auto-meaningful-name] */_$_ from "./193"
var SL = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$item$data
  var n = _React.useState(false)
  var r = $_10_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: _$_.item
  }, React.createElement("div", {
    onClick: function () {
      i(!o)
    },
    className: _$_.date
  }, React.createElement("div", {
    className: _$_.text
  }, " ", e.item.date), React.createElement("div", {
    className: N(_$_.icon, o && _$_.fold)
  }, React.createElement($_13_index.j, {
    type: "icon-dropdown-down"
  }))), !o && (e$item$data = e.item.data, React.createElement("ul", null, e$item$data.map(function (t) {
    return React.createElement("li", {
      className: N(_$_.data, e.selectedId === t.id && _$_.selected),
      key: t.id
    }, React.createElement("div", {
      className: _$_.icon
    }, React.createElement("div", {
      className: _$_.dot_area
    }, React.createElement("div", {
      className: _$_.dot
    })), React.createElement("div", {
      className: _$_.line_area
    }, React.createElement("div", {
      className: N(_$_.line, e.selectedId === t.id && _$_.selected)
    }))), React.createElement("div", {
      className: _$_.details
    }, React.createElement("div", {
      className: N(_$_.time, e.selectedId === t.id && _$_.selected)
    }, t.time), React.createElement("div", {
      className: _$_.type
    }, t.saveInfo.saveType === Qu.b.ByUser ? React.createElement(React.Fragment, null, React.createElement("img", {
      src: t.saveInfo.avatarUrl,
      className: _$_.avatar,
      alt: ""
    }), React.createElement("div", {
      className: N(_$_.text, _$_.name)
    }, t.saveInfo.name), React.createElement("div", {
      className: N(_$_.save_text, _$_.save_type)
    }, $_710_index$a$formatMessage({
      id: "History.save"
    }))) : React.createElement("div", {
      className: N(_$_.save_text, _$_.save_type)
    }, $_710_index$a$formatMessage({
      id: "History.autoSave"
    })))), React.createElement("div", {
      className: _$_.button_area
    }, React.createElement($_748_index.a, {
      placement: "bottom",
      title: $_710_index$a$formatMessage({
        id: "History.fallback"
      }),
      trigger: ["hover", "click"]
    }, React.createElement("div", {
      onClick: function () {
        n = t.id
        e.setSelected("")
        return void a($$_$$_$$_$$_src_shared_events_messagesWrapper.si(n))
        var n
      },
      className: _$_.button
    }, React.createElement($_13_index.j, {
      type: "icon-btn-fallback",
      className: _$_.icon
    }))), React.createElement($_748_index.a, {
      placement: "bottom",
      title: $_710_index$a$formatMessage({
        id: "History.overview"
      }),
      trigger: ["hover", "click"]
    }, React.createElement("div", {
      className: N(_$_.button, t.id === e.selectedId && _$_.selected),
      onClick: function () {
        e.setSelected(t.id)
      }
    }, React.createElement($_13_index.j, {
      type: "icon-btn-overview",
      className: _$_.icon
    })))))
  }))))
})
var AL = React.memo(function () {
  var e = _React.useState("")
  var t = $_10_index.a(e, 2)
  var n = t[0]
  var r = t[1]
  var o = $_16_index.e(function (e) {
    return e.common.historyDialogVisible
  })
  var i = $_16_index.e(function (e) {
    return e.project.id
  })
  var a = _React.useState([])
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState([])
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var b = _React.useState(undefined)
  var y = $_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = _React.useState(false)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = function (e) {
    r(e)
  }
  var R = _React.useCallback(function () {
    r("")
    g($$_$$_$$_$$_src_shared_events_messagesWrapper.tj(false))
  }, [g])
  var k = function (e) {
    return e < 10 ? "0".concat(e) : String(e)
  }
  var x = _React.useCallback(function (e) {
    var t = new Date(e)
    return {
      date: "".concat(t.getFullYear(), "年").concat(t.getMonth() + 1, "月").concat(t.getDate(), "日"),
      time: "".concat(k(t.getHours()), ":").concat(k(t.getMinutes()), ":").concat(k(t.getSeconds()))
    }
  }, [])
  _React.useEffect(function () {
    if (i !== E) {
      l([])
      m([])
      r("")
      O(i)
      R()
    }
  }, [i, E, R])
  _React.useEffect(function () {
    A(false)
  }, [n])
  _React.useEffect(function () {
    if (E && o) {
      if (E.includes(Qu.v)) {
        l([])
        m([])
        return void r("")
      }
      $_177.f(E).then(function (e) {
        if (0 === e.length) {
          l([])
          m([])
          return void r("")
        }
        l(e)
        var t = {}
        e.forEach(function (e) {
          var n = x(e.create_time)
          var /* [auto-meaningful-name] */n$date = n.date
          var /* [auto-meaningful-name] */n$time = n.time
          if (!t[n$date]) {
            t[n$date] = []
          }
          t[n$date].push({
            id: e.id,
            time: n$time,
            saveInfo: {
              name: e.nickname,
              avatarUrl: e.avatar_url,
              saveType: e.save_type
            }
          })
        })
        var n = Object.keys(t).map(function (e) {
          return {
            date: e,
            data: t[e]
          }
        })
        m(n)
      }).catch(function () {
        l([])
        m([])
        r("")
        g($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          message: $_710_index$a$formatMessage({
            id: "History.fetchError"
          }).toString(),
          type: "error"
        }))
      })
    }
  }, [o, E, x, g, $_710_index$a$formatMessage])
  var D = function () {
    return React.createElement("div", {
      className: N(_$_.historyBar, "" === n && _$_.fixedBar)
    }, React.createElement("div", {
      className: _$_.header
    }, $_710_index$a$formatMessage({
      id: "History.historyVersion"
    }), React.createElement("div", {
      onClick: R
    }, React.createElement($_94_index.a, {
      className: _$_.icon,
      type: "icon-close"
    }))), React.createElement("div", {
      className: _$_.content
    }, 0 === p.length ? React.createElement("div", {
      className: _$_.empty
    }, React.createElement(we, {
      type: "image-text",
      text: $_710_index$a$formatMessage({
        id: "History.noVersion"
      })
    })) : React.createElement("ul", null, p.map(function (e) {
      return React.createElement(SL, {
        key: e.date,
        item: e,
        selectedId: n,
        setSelected: j
      })
    }))))
  }
  return o ? "" !== n ? function () {
    var e = "?archiveId=".concat(n)
    var t = origin + "/editor" + e
    return React.createElement("div", {
      className: _$_.historyDialog
    }, React.createElement("div", {
      className: _$_.historyPreview
    }, React.createElement("div", {
      className: _$_.previewDialog
    }, T && React.createElement(React.Fragment, null, React.createElement("div", {
      className: _$_.previewHeader
    }, React.createElement("p", {
      className: _$_.projectName
    }, function () {
      var e
      return (null === (e = c.find(function (e) {
        return e.id === n
      })) || undefined === e ? undefined : e.work_name) || ""
    }()), React.createElement("p", {
      className: _$_.projectTime
    }, function () {
      var e
      var t = null === (e = c.find(function (e) {
        return e.id === n
      })) || undefined === e ? undefined : e.create_time
      if (!t) {
        return ""
      }
      var r = x(t)
      return "版本：".concat(r.date, " ").concat(r.time)
    }())), React.createElement("div", {
      onClick: function () {
        return r("")
      },
      className: _$_.close
    }, React.createElement($_94_index.a, {
      type: "icon-close",
      className: _$_.icon
    }))), React.createElement("div", {
      className: _$_.previewIframe
    }, React.createElement("iframe", {
      title: "previewAppCraft",
      height: "100%",
      width: "100%",
      allow: "geolocation, microphone, camera",
      src: t,
      onLoad: function () {
        return A(true)
      }
    })))), D())
  }() : D() : null
})
export { AL }
