/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-169
 */

"use strict"

import { GS } from "./index__part-158"
import { XA } from "./index__part-168"
import * as /* [auto-meaningful-name] */$_110 from "./110"
import * as An from "./5"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_237 from "./237"
import /* [auto-meaningful-name] */_$_ from "./237"
function JA(e, t) {
  var n = e.filter(function (e) {
    return "GLOBAL" !== e.screenId
  })
  var r = e.filter(function (e) {
    return "GLOBAL" === e.screenId
  })
  var o = n.sort(function (e, n) {
    return t.findIndex(function (t) {
      return t.id === e.screenId
    }) - t.findIndex(function (e) {
      return e.id === n.screenId
    })
  })
  return [].concat($_25_index.a(r), $_25_index.a(o))
}
var $A = React.memo(React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = $_16_index.d()
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$setVisible = e.setVisible
  var a = _React.useRef(null)
  var s = function () {
    var e = $_16_index.e(function (e) {
      return e.dataWatch.variableList
    })
    var t = $_16_index.e(function (e) {
      return e.project.screens
    })
    return {
      Primitives: JA(e.filter(function (e) {
        return "PRIMITIVE" === e.type
      }), t),
      Lists: JA(e.filter(function (e) {
        return "LIST" === e.type
      }), t),
      Dictionaries: JA(e.filter(function (e) {
        return "DICT" === e.type
      }), t),
      TableDataWidgets: JA(e.filter(function (e) {
        return e.type === An.G
      }), t),
      LocalStorageWidgets: JA(e.filter(function (e) {
        return e.type === An.B || e.type === An.y
      }), t),
      variableList: e
    }
  }()
  var c = _React.useState("")
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useRef({})
  var /* [auto-meaningful-name] */s$Primitives = s.Primitives
  var /* [auto-meaningful-name] */s$Lists = s.Lists
  var /* [auto-meaningful-name] */s$Dictionaries = s.Dictionaries
  var /* [auto-meaningful-name] */s$LocalStorageWidgets = s.LocalStorageWidgets
  var /* [auto-meaningful-name] */s$TableDataWidgets = s.TableDataWidgets
  var /* [auto-meaningful-name] */s$variableList = s.variableList
  var O = $_16_index.e(function (e) {
    return e.project.screens
  })
  var w = function (e) {
    r($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e.id, "selected", true))
    p.current[e.id] = Date.now()
  }
  var C = function (e) {
    r($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e.id, "selected", false))
    delete p.current[e.id]
  }
  var T = function (e, t) {
    if (0 === t.length) {
      return null
    }
    var r = $_110.b(e)
    var o = t.map(function (e) {
      return A(e)
    }).filter(function (e) {
      return e
    })
    return 0 !== o.length ? React.createElement("div", {
      className: _$_.type
    }, React.createElement("div", {
      className: _$_.icon
    }, React.createElement("div", {
      className: _$_.categoryIcon,
      style: {
        color: r.color,
        fontSize: r.fontSize
      }
    }, React.createElement($_13_index.j, {
      type: r.class
    })), React.createElement("span", {
      className: _$_.text
    }, $_710_index$a$formatMessage({
      id: r.text
    }))), o) : undefined
  }
  var A = function (e) {
    if (u && !e.name.toLowerCase().includes(u.toLowerCase())) {
      return null
    }
    var t
    var n = O.findIndex(function (t) {
      return t.id === e.screenId
    })
    var r = null
    if (n >= 0) {
      r = React.createElement("div", {
        className: _$_.screenInfoBox
      }, React.createElement("div", {
        className: _$_.screenTitle
      }, React.createElement("div", {
        className: _$_.screenTitleText
      }, null === (t = O.get(n)) || undefined === t ? undefined : t.title)), React.createElement("div", {
        className: _$_.screenIconBox
      }, GS(n)))
    }
    return React.createElement("div", {
      className: _$_.option,
      key: e.id,
      onClick: function () {
        if (e.selected) {
          C(e)
        } else {
          w(e)
        }
      }
    }, React.createElement("div", {
      className: _$_.checkbox
    }, React.createElement(XA, {
      checked: e.selected,
      onChange: function (t) {
        if (t.target) {
          if (t.target.checked) {
            w(e)
          } else {
            C(e)
          }
        }
      }
    })), React.createElement("div", {
      className: _$_.name
    }, React.createElement("div", {
      className: _$_.nameText
    }, e.name)), r)
  }
  var j = function () {
    s$variableList.forEach(function (e) {
      r($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e.id, "selected", e.isWatching))
    })
    e$setVisible(false)
  }
  _React.useImperativeHandle(t, function () {
    return {
      cancel: j
    }
  })
  if (!e$visible) {
    return null
  }
  return React.createElement("div", {
    className: _$_.container,
    ref: a
  }, React.createElement("div", {
    className: _$_.leftSelect
  }, React.createElement("div", {
    className: _$_.searchInputBox
  }, React.createElement($_13_index.k, {
    value: u,
    className: N(_$_.searchInput),
    onClearCallback: function () {
      d("")
    },
    placeholder: $_710_index$a$formatMessage({
      id: "DataWatch.search"
    }),
    onChange: function (e) {
      d(e)
    },
    clearButtonVisible: !!u,
    before: React.createElement($_13_index.j, {
      type: "icon-material-search"
    })
  })), function () {
    if (0 === s$variableList.size) {
      return React.createElement("div", {
        className: _$_.empty
      }, $_710_index$a$formatMessage({
        id: "DataWatch.noData"
      }))
    }
    var e = T("PRIMITIVE", s$Primitives)
    var t = T("LIST", s$Lists)
    var r = T("DICT", s$Dictionaries)
    var o = T("LOCAL_STORAGE_WIDGET", s$LocalStorageWidgets)
    var i = T("TABLE_DATA_WIDGET", s$TableDataWidgets)
    return s$variableList.find(function (e) {
      return e.name.toLowerCase().includes(u.toLowerCase())
    }) ? React.createElement("div", {
        className: _$_.renderSelectBox
      }, e, t, r, o, i) : React.createElement("div", {
        className: _$_.empty
      }, $_710_index$a$formatMessage({
        id: "DataWatch.searchEmpty"
      }))
  }()), React.createElement("div", {
    className: _$_.rightSelected
  }, React.createElement("div", {
    className: _$_.addedTitle
  }, "已添加数据"), React.createElement("div", {
    className: _$_.selectedItems
  }, s$variableList.filter(function (e) {
    return e.selected
  }).sort(function (e, t) {
    return p.current[e.id] - p.current[t.id]
  }).map(function (e) {
    return function (e) {
      var t
      var n = $_110.b(e.type)
      var r = O.findIndex(function (t) {
        return t.id === e.screenId
      })
      var o = null
      if (r >= 0) {
        o = React.createElement("div", {
          className: _$_.screenInfoBox
        }, React.createElement("div", {
          className: _$_.screenTitle
        }, React.createElement("div", {
          className: _$_.screenTitleText
        }, null === (t = O.get(r)) || undefined === t ? undefined : t.title)), React.createElement("div", {
          className: _$_.screenIconBox
        }, GS(r)))
      }
      return React.createElement("div", {
        className: N(_$_.option, _$_.selectedBox),
        key: e.id
      }, React.createElement("div", {
        className: _$_.categoryIcon,
        style: {
          color: n.color,
          fontSize: n.fontSize
        }
      }, React.createElement($_13_index.j, {
        type: n.class
      })), React.createElement("div", {
        className: _$_.name
      }, React.createElement("div", {
        className: _$_.nameText
      }, e.name)), o, React.createElement("div", {
        onClick: function () {
          return C(e)
        },
        className: N(_$_.closeIcon, "watchItemCloseIcon")
      }, React.createElement($_13_index.j, {
        type: "icon-close"
      })))
    }(e)
  })), React.createElement("div", {
    className: _$_.actions
  }, React.createElement($_13_index.d, {
    style: {
      width: "84px",
      marginRight: "14px"
    },
    onClick: j
  }, $_710_index$a$formatMessage({
    id: "DataWatch.cancel"
  })), React.createElement($_13_index.d, {
    style: {
      width: "84px"
    },
    type: "primary",
    onClick: function () {
      s$variableList.forEach(function (e) {
        r($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e.id, "isWatching", e.selected))
      })
      e$setVisible(false)
    }
  }, $_710_index$a$formatMessage({
    id: "DataWatch.confirm"
  })))))
}))
export { $A }
