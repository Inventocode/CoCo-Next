/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-149
 */

"use strict"

import { Sg } from "./index__part-79"
import * as ng from "./64"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as po from "./49"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as te from "./15"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1525 from "./1525"
import /* [auto-meaningful-name] */_$_ from "./1525"
import * as /* [auto-meaningful-name] */$_236 from "./236"
import /* [auto-meaningful-name] */_$_2 from "./236"
var RT = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$variableType = e.variableType
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = _React.useState(true)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = _React.useState("")
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = _React.useState("")
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = _React.useState("")
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = _React.useState(false)
  var w = $_10_index.a(O, 2)
  var C = w[0]
  var j = w[1]
  var R = _React.useState([])
  var k = $_10_index.a(R, 2)
  var D = k[0]
  var M = k[1]
  var L = _React.useState([])
  var P = $_10_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = _React.useState([])
  var W = $_10_index.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = $_16_index.d()
  var q = $_238.d()
  var X = $_16_index.e(function (e) {
    return e.common.language
  })
  var Q = $_16_index.e(function (e) {
    return e.project.globalVariableList
  })
  var Z = $_16_index.e(function (e) {
    return e.project.globalArrayList
  })
  var J = $_16_index.e(function (e) {
    return e.project.globalObjectList
  })
  var $ = $_16_index.e(function (e) {
    return e.project.screens
  })
  _React.useEffect(function () {
    if (q) {
      M(q.primitiveVariables)
      F(q.arrayVariables)
      H(q.objectVariables)
      if (e$variableType === K.b.PRIMITIVE && 0 === q.primitiveVariables.length && 0 === Q.length || e$variableType === K.b.ARRAY && 0 === q.arrayVariables.length && 0 === Z.length || e$variableType === K.b.OBJECT && 0 === q.objectVariables.length && 0 === J.length) {
        a(false)
      } else {
        a(true)
      }
    }
  }, [q, e$variableType, Q, Z, J])
  _React.useEffect(function () {
    var e = $_17_index.Blink.mainWorkspace && $_26_index.g.getToolbox()
    if (e) {
      var t
      var n
      var r = null === (t = e.get_selected()) || undefined === t ? undefined : t.get_name()
      if ("toolbox-primitive" === r || "toolbox-array" === r || "toolbox-object" === r) {
        if (!(null === (n = $_26_index.g.getToolbox()) || undefined === n)) {
          n.refresh_selection()
        }
      }
    }
  }, [i, B, D, U, C, y, Q, Z, J, l])
  var ee = function () {
    if (q) {
      if (e$variableType === K.b.PRIMITIVE) {
        var e = ng.a("VARIABLE")
        V($$_$$_$$_$$_src_shared_events_messagesWrapper.nj({
          title: "addPrimitiveVariableName",
          placeholder: $_710_index$a$formatMessage({
            id: "addPrimitiveVariableNamePlaceholder"
          }),
          onConfirm: function (t, n) {
            V($$_$$_$$_$$_src_shared_events_messagesWrapper.uf(n, e, t, 0, q.id, 0))
          },
          validators: [
            {
              validator: function (e, t) {
                var n = q.primitiveVariables.concat(Q)
                if (t === K.i.GLOBAL) {
                  $.forEach(function (e) {
                    n = n.concat(e.primitiveVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: $_710_index$a$formatMessage({
                id: "primitiveVariableNameRepeat"
              })
            }
          ].concat($_25_index.a(Sg($_710_index$a$formatMessage)))
        }))
      } else if (e$variableType === K.b.ARRAY) {
        var r = ng.a("ARRAY")
        V($$_$$_$$_$$_src_shared_events_messagesWrapper.nj({
          title: "addArrayVariableName",
          placeholder: $_710_index$a$formatMessage({
            id: "addArrayVariableNamePlaceholder"
          }),
          onConfirm: function (e, t) {
            V($$_$$_$$_$$_src_shared_events_messagesWrapper.of(t, r, e, [], q.id, 0))
          },
          validators: [
            {
              validator: function (e, t) {
                var n = q.arrayVariables.concat(Z)
                if (t === K.i.GLOBAL) {
                  $.forEach(function (e) {
                    n = n.concat(e.arrayVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: $_710_index$a$formatMessage({
                id: "arrayVariableNameRepeat"
              })
            }
          ].concat($_25_index.a(Sg($_710_index$a$formatMessage)))
        }))
      } else if (e$variableType === K.b.OBJECT) {
        var o = ng.a("OBJECT")
        V($$_$$_$$_$$_src_shared_events_messagesWrapper.nj({
          title: "object.createNewObject",
          placeholder: $_710_index$a$formatMessage({
            id: "object.createNewObjectNamePlaceholder"
          }),
          onConfirm: function (e, t) {
            V($$_$$_$$_$$_src_shared_events_messagesWrapper.tf({
              scopeType: t,
              id: o,
              name: e,
              defaultValue: {},
              screenId: q.id,
              index: 0
            }))
          },
          validators: [
            {
              validator: function (e, t) {
                var n = q.objectVariables.concat(J)
                if (t === K.i.GLOBAL) {
                  $.forEach(function (e) {
                    n = n.concat(e.objectVariables)
                  })
                }
                return !n.some(function (t) {
                  return t.name === e
                })
              },
              message: $_710_index$a$formatMessage({
                id: "object.nameRepeat"
              })
            }
          ].concat($_25_index.a(Sg($_710_index$a$formatMessage)))
        }))
      }
    }
  }
  var ne = function (e, n) {
    var r
    var o
    if (e$variableType === K.b.PRIMITIVE) {
      u(l !== e ? e : "")
    }
    if (e$variableType === K.b.ARRAY && (q || Z.length > 0)) {
      if (r = n === K.i.GLOBAL ? Z.find(function (t) {
        return t.id === e
      }) : B.find(function (t) {
        return t.id === e
      })) {
        V($$_$$_$$_$$_src_shared_events_messagesWrapper.qj({
          array: r,
          arrayType: n
        }))
      }
    }
    if (e$variableType === K.b.OBJECT) {
      if (o = n === K.i.GLOBAL ? J.find(function (t) {
        return t.id === e
      }) : U.find(function (t) {
        return t.id === e
      })) {
        V($$_$$_$$_$$_src_shared_events_messagesWrapper.rj({
          variable: o,
          scopeType: n
        }))
      }
    }
  }
  var re = function (e, n, r, o) {
    if (q) {
      var /* [auto-meaningful-name] */e$name = e.name
      g("")
      if (r !== e$name) {
        if (!te.j(r)) {
          if ("" !== r && r[0].match(/[0-9_]/)) {
            V($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
              message: $$_$$_$$_$$_src_shared_ui_language.c(X, "invalidVariableFirstChar")
            }))
          }
          return void V($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
            message: $$_$$_$$_$$_src_shared_ui_language.c(X, "invalidVariableName")
          }))
        }
        if (function (e, n) {
          if (e$variableType === K.b.PRIMITIVE) {
            var r = D.concat(Q)
            if (n === K.i.GLOBAL) {
              $.forEach(function (e) {
                r = r.concat(e.primitiveVariables)
              })
            }
            return r.some(function (t) {
              return t.name === e
            })
          }
          if (e$variableType === K.b.ARRAY) {
            var o = B.concat(Z)
            if (n === K.i.GLOBAL) {
              $.forEach(function (e) {
                o = o.concat(e.arrayVariables)
              })
            }
            return o.some(function (t) {
              return t.name === e
            })
          }
          if (e$variableType === K.b.OBJECT) {
            var i = U.concat(J)
            if (n === K.i.GLOBAL) {
              $.forEach(function (e) {
                i = i.concat(e.objectVariables)
              })
            }
            return i.some(function (t) {
              return t.name === e
            })
          }
          return false
        }(r, n)) {
          var a
          switch (e$variableType) {
            case K.b.PRIMITIVE:
              a = "primitiveVariableNameRepeat"
              break
            case K.b.ARRAY:
              a = "arrayVariableNameRepeat"
              break
            case K.b.OBJECT:
              a = "object.nameRepeat"
              break
            default:
              throw Error("Unreachable branch")
          }
          V($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
            message: $$_$$_$$_$$_src_shared_ui_language.c(X, a)
          }))
          return void o.target.focus()
        }
        if (e$variableType === K.b.PRIMITIVE) {
          $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(V, $$_$$_$$_$$_src_shared_events_messagesWrapper.Hg(n, e.id, "name", r, q.id))
        } else {
          if (e$variableType === K.b.ARRAY) {
            $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(V, $$_$$_$$_$$_src_shared_events_messagesWrapper.yg(n, e.id, "name", r, q.id))
          } else {
            if (e$variableType === K.b.OBJECT) {
              V($$_$$_$$_$$_src_shared_events_messagesWrapper.Gg({
                scopeType: n,
                id: e.id,
                key: "name",
                value: r,
                screenId: q.id
              }))
            }
          }
        }
      }
    }
  }
  var oe = function (e, t) {
    return React.createElement($_13_index.k, {
      type: "text",
      className: _$_2.valueInput,
      maxLength: 20,
      defaultValue: e.defaultValue,
      onFocus: function (e) {
        return e.target.select()
      },
      onBlur: function (n) {
        !function (e, t, n) {
          if (q) {
            var r = e
            if (r) {
              r = te.mb(r)
            }
            V($$_$$_$$_$$_src_shared_events_messagesWrapper.Hg(n, t.id, "defaultValue", r, q.id))
          }
        }(n, e, t)
      },
      onKeyDown: ie
    })
  }
  var ie = function (e) {
    if (13 === e.keyCode) {
      e.currentTarget.blur()
    }
  }
  var ae = function (e) {
    g(e)
  }
  _React.useEffect(function () {
    if (m) {
      var e = document.querySelector(".".concat("VARIABLE_ID_" + m, " input"))
      if (e && e instanceof HTMLInputElement) {
        e.focus()
      }
    }
  }, [m])
  var se = function (e, n) {
    if (q) {
      if (e$variableType === K.b.PRIMITIVE) {
        $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(V, $$_$$_$$_$$_src_shared_events_messagesWrapper.Lf(n, e.id, q.id))
      } else {
        if (e$variableType === K.b.ARRAY) {
          $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(V, $$_$$_$$_$$_src_shared_events_messagesWrapper.If(n, e.id, q.id))
        } else {
          if (e$variableType === K.b.OBJECT) {
            V($$_$$_$$_$$_src_shared_events_messagesWrapper.Kf(n, e.id, q.id))
          }
        }
      }
    }
  }
  var ce = function (e) {
    var /* [auto-meaningful-name] */e$item = e.item
    var /* [auto-meaningful-name] */e$type = e.type
    if (!q) {
      return React.createElement("div", null)
    }
    return React.createElement("div", {
      className: N(_$_2.itemWrap, y === e$item.id && _$_2.select),
      id: e$item.id,
      key: e$item.id,
      onClick: function () {
        var /* [auto-meaningful-name] */po$oTHelper$customEvent
        var /* [auto-meaningful-name] */po$oTHelper$customEvent$emit
        E(e$item.id)
        if (!(null === (po$oTHelper$customEvent = po.oTHelper.customEvent) || undefined === po$oTHelper$customEvent || null === (po$oTHelper$customEvent$emit = po$oTHelper$customEvent.emit) || undefined === po$oTHelper$customEvent$emit)) {
          po$oTHelper$customEvent$emit.focusItem("dynamicData", e$item.id)
        }
      }
    }, React.createElement("div", {
      className: _$_2.item
    }, React.createElement("div", {
      className: N(_$_2.name)
    }, m === e$item.id ? React.createElement($_13_index.k, {
      type: "text",
      className: N(_$_2.nameInput, "".concat("VARIABLE_ID_" + e$item.id)),
      maxLength: 20,
      defaultValue: e$item.name,
      onBlur: re.bind(null, e$item, e$type),
      onKeyDown: ie
    }) : React.createElement("div", {
      className: N(_$_2.nameInputWrapper)
    }, React.createElement("div", {
      onClick: ae.bind(null, e$item.id),
      className: N(_$_2.noEditing)
    }, e$item.name), React.createElement("div", {
      className: N(_$_2.itemBtn, _$_2.delete),
      onClick: se.bind(null, e$item, e$type)
    }, React.createElement($_13_index.j, {
      type: "icon-close"
    })), React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover", "click"],
      title: $_710_index$a$formatMessage({
        id: e$variableType === K.b.PRIMITIVE ? "editDefaultValue" : "edit"
      })
    }, React.createElement("div", {
      className: _$_2.itemBtn,
      onClick: ne.bind(null, e$item.id, e$type)
    }, e$variableType === K.b.PRIMITIVE && React.createElement($_13_index.j, {
      type: "icon-fold-left",
      className: N(_$_2.itemExpand, l === e$item.id && _$_2.active)
    }), e$variableType === K.b.ARRAY && React.createElement($_13_index.j, {
      type: "icon-list"
    }), e$variableType === K.b.OBJECT && React.createElement($_13_index.j, {
      type: "icon-list"
    })))))), e$variableType === K.b.PRIMITIVE && y === e$item.id && l === e$item.id && React.createElement("div", {
      className: _$_2.detail
    }, $_710_index$a$formatMessage({
      id: "initValue"
    }), oe(e$item, e$type)))
  }
  return React.createElement("div", {
    id: e.labelType,
    className: _$_2.wrapper
  }, function () {
    var e
    switch (e$variableType) {
      case K.b.PRIMITIVE:
        e = "variable"
        break
      case K.b.OBJECT:
        e = "object"
        break
      case K.b.ARRAY:
        e = "list"
    }
    return React.createElement("div", {
      className: _$_2.addBtn,
      onClick: ee
    }, React.createElement($_13_index.j, {
      type: "icon-add",
      className: _$_2.addIcon
    }), $_710_index$a$formatMessage({
      id: e
    }))
  }(), !i && React.createElement("div", {
    className: _$_2.line
  }), !C && (e$variableType === K.b.PRIMITIVE ? React.createElement("div", {
    className: _$_2.content
  }, Q.length ? React.createElement("div", {
    className: _$_2.variableTitle
  }, $_710_index$a$formatMessage({
    id: "globalVariable"
  })) : null, Q.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: K.i.GLOBAL
    })
  }), D.length > 0 ? React.createElement("div", {
    className: _$_2.variableTitle
  }, $_710_index$a$formatMessage({
    id: "screenVariable"
  })) : null, D.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: K.i.SCREEN
    })
  })) : e$variableType === K.b.ARRAY ? React.createElement("div", {
    className: _$_2.content
  }, Z.length > 0 ? React.createElement("div", {
    className: _$_2.variableTitle
  }, $_710_index$a$formatMessage({
    id: "globalArray"
  })) : null, Z.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: K.i.GLOBAL
    })
  }), B.length > 0 ? React.createElement("div", {
    className: _$_2.variableTitle
  }, $_710_index$a$formatMessage({
    id: "screenArray"
  })) : null, B.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: K.i.SCREEN
    })
  })) : e$variableType === K.b.OBJECT ? React.createElement("div", {
    className: _$_2.content
  }, J.length > 0 ? React.createElement("div", {
    className: _$_2.variableTitle
  }, $_710_index$a$formatMessage({
    id: "object.globalObject"
  })) : null, J.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: K.i.GLOBAL
    })
  }), U.length > 0 ? React.createElement("div", {
    className: _$_2.variableTitle
  }, $_710_index$a$formatMessage({
    id: "object.screenObject"
  })) : null, U.map(function (e) {
    return React.createElement(ce, {
      item: e,
      key: e.id,
      type: K.i.SCREEN
    })
  })) : undefined), i && React.createElement("div", {
    className: _$_2.footer
  }, C && React.createElement("div", {
    className: _$_2.ellipse
  }, "..."), React.createElement("div", {
    className: _$_2.expand
  }, React.createElement("div", {
    className: _$_2.foldBtn,
    onClick: function () {
      return j(!C)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-fold",
    className: C ? _$_2.expandIcon : _$_2.foldIcon
  })))))
})
var kT = _React.memo(function () {
  return React.createElement("div", {
    className: _$_.wrapper
  }, React.createElement(RT, {
    variableType: K.b.PRIMITIVE,
    labelType: $_26_index.b.PRIMITIVE
  }), React.createElement(RT, {
    variableType: K.b.ARRAY,
    labelType: $_26_index.b.ARRAY
  }), React.createElement(RT, {
    variableType: K.b.OBJECT,
    labelType: $_26_index.b.OBJECT
  }))
})
export { kT }
