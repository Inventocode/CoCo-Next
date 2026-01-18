/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-4
 */

"use strict"

import { y, b, E } from "./index__part-0"
import { B } from "./index__part-1"
import { N, M, L, j, U, G, z, ie, oe } from "./index__part-3"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */$$_$$_79_index from "../../79/index"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_54 from "../../54"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
var /* [auto-meaningful-name] */__Field_split__ = "__@field_split__"
function ce(e) {
  return e.map(function (e) {
    return "".concat($$_$$_107.a(e), ":").concat(e)
  }).join(__Field_split__)
}
var ue = function () {
  function e() {
    $$_$$_103.a(this, e)
    this.kvs = new Map()
  }
  $$_$$_106.a(e, [
    {
      key: "set",
      value: function (e, t) {
        this.kvs.set(ce(e), t)
      }
    }, {
      key: "get",
      value: function (e) {
        return this.kvs.get(ce(e))
      }
    }, {
      key: "update",
      value: function (e, t) {
        var n = t(this.get(e))
        if (n) {
          this.set(e, n)
        } else {
          this.delete(e)
        }
      }
    }, {
      key: "delete",
      value: function (e) {
        this.kvs.delete(ce(e))
      }
    }, {
      key: "map",
      value: function (e) {
        return $$_$$_79_index.a(this.kvs.entries()).map(function (t) {
          var n = $$_$$_40_index.a(t, 2)
          var r = n[0]
          var i = n[1]
          var o = r.split(__Field_split__)
          return e({
            key: o.map(function (e) {
              var t = e.match(/^([^:]*):(.*)$/)
              var n = $$_$$_40_index.a(t, 3)
              var r = n[1]
              var i = n[2]
              return "number" === r ? Number(i) : i
            }),
            value: i
          })
        })
      }
    }, {
      key: "toJSON",
      value: function () {
        var e = {}
        this.map(function (t) {
          var /* [auto-meaningful-name] */t$key = t.key
          var /* [auto-meaningful-name] */t$value = t.value
          e[t$key.join(".")] = t$value
          return null
        })
        return e
      }
    }
  ])
  return e
}()
var le = ["name", "errors"]
var fe = function e(t) {
  var n = this
  $$_$$_103.a(this, e)
  this.formHooked = false
  this.forceRootUpdate = undefined
  this.subscribable = true
  this.store = {}
  this.fieldEntities = []
  this.initialValues = {}
  this.callbacks = {}
  this.validateMessages = null
  this.preserve = null
  this.lastValidatePromise = null
  this.getForm = function () {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      getInternalHooks: n.getInternalHooks
    }
  }
  this.getInternalHooks = function (e) {
    return e === b ? (n.formHooked = true, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue
    }) : (y(false, "`getInternalHooks` is internal usage. Should not call directly."), null)
  }
  this.useSubscribe = function (e) {
    n.subscribable = e
  }
  this.setInitialValues = function (e, t) {
    n.initialValues = e || {}
    if (t) {
      n.store = G({}, e, n.store)
    }
  }
  this.getInitialValue = function (e) {
    return M(n.initialValues, e)
  }
  this.setCallbacks = function (e) {
    n.callbacks = e
  }
  this.setValidateMessages = function (e) {
    n.validateMessages = e
  }
  this.setPreserve = function (e) {
    n.preserve = e
  }
  this.timeoutId = null
  this.warningUnhooked = function () {
    0
  }
  this.getFieldEntities = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0]
    return e ? n.fieldEntities.filter(function (e) {
      return e.getNamePath().length
    }) : n.fieldEntities
  }
  this.getFieldsMap = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0]
    var t = new ue()
    n.getFieldEntities(e).forEach(function (e) {
      var n = e.getNamePath()
      t.set(n, e)
    })
    return t
  }
  this.getFieldEntitiesForNamePathList = function (e) {
    if (!e) {
      return n.getFieldEntities(true)
    }
    var t = n.getFieldsMap(true)
    return e.map(function (e) {
      var n = N(e)
      return t.get(n) || {
        INVALIDATE_NAME_PATH: N(e)
      }
    })
  }
  this.getFieldsValue = function (e, t) {
    n.warningUnhooked()
    if (true === e && !t) {
      return n.store
    }
    var r = n.getFieldEntitiesForNamePathList(Array.isArray(e) ? e : null)
    var i = []
    r.forEach(function (n) {
      var /* [auto-meaningful-name] */n$isListField
      var o = "INVALIDATE_NAME_PATH" in n ? n.INVALIDATE_NAME_PATH : n.getNamePath()
      if (e || !(null === (n$isListField = n.isListField) || undefined === n$isListField ? undefined : n$isListField.call(n))) {
        if (t) {
          var a = "getMeta" in n ? n.getMeta() : null
          if (t(a)) {
            i.push(o)
          }
        } else {
          i.push(o)
        }
      }
    })
    return j(n.store, i.map(N))
  }
  this.getFieldValue = function (e) {
    n.warningUnhooked()
    var t = N(e)
    return M(n.store, t)
  }
  this.getFieldsError = function (e) {
    n.warningUnhooked()
    return n.getFieldEntitiesForNamePathList(e).map(function (t, n) {
      return t && !("INVALIDATE_NAME_PATH" in t) ? {
        name: t.getNamePath(),
        errors: t.getErrors(),
        warnings: t.getWarnings()
      } : {
        name: N(e[n]),
        errors: [],
        warnings: []
      }
    })
  }
  this.getFieldError = function (e) {
    n.warningUnhooked()
    var t = N(e)
    return n.getFieldsError([t])[0].errors
  }
  this.getFieldWarning = function (e) {
    n.warningUnhooked()
    var t = N(e)
    return n.getFieldsError([t])[0].warnings
  }
  this.isFieldsTouched = function () {
    n.warningUnhooked()
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), r = 0; r < arguments$length; r++) {
      t[r] = arguments[r]
    }
    var i
    var o = t[0]
    var a = t[1]
    var s = false
    if (0 === t.length) {
      i = null
    } else {
      if (1 === t.length) {
        if (Array.isArray(o)) {
          i = o.map(N)
          s = false
        } else {
          i = null
          s = o
        }
      } else {
        i = o.map(N)
        s = a
      }
    }
    var c = n.getFieldEntities(true)
    var u = function (e) {
      return e.isFieldTouched()
    }
    if (!i) {
      return s ? c.every(u) : c.some(u)
    }
    var f = new ue()
    i.forEach(function (e) {
      f.set(e, [])
    })
    c.forEach(function (e) {
      var t = e.getNamePath()
      i.forEach(function (n) {
        if (n.every(function (e, n) {
          return t[n] === e
        })) {
          f.update(n, function (t) {
            return [].concat($$_$$_79_index.a(t), [e])
          })
        }
      })
    })
    var d = function (e) {
      return e.some(u)
    }
    var h = f.map(function (e) {
      return e.value
    })
    return s ? h.every(d) : h.some(d)
  }
  this.isFieldTouched = function (e) {
    n.warningUnhooked()
    return n.isFieldsTouched([e])
  }
  this.isFieldsValidating = function (e) {
    n.warningUnhooked()
    var t = n.getFieldEntities()
    if (!e) {
      return t.some(function (e) {
        return e.isFieldValidating()
      })
    }
    var r = e.map(N)
    return t.some(function (e) {
      var t = e.getNamePath()
      return U(r, t) && e.isFieldValidating()
    })
  }
  this.isFieldValidating = function (e) {
    n.warningUnhooked()
    return n.isFieldsValidating([e])
  }
  this.resetWithFieldInitialValue = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
    var t = new ue()
    var r = n.getFieldEntities(true)
    r.forEach(function (e) {
      var /* [auto-meaningful-name] */e$props$initialValue = e.props.initialValue
      var r = e.getNamePath()
      if (undefined !== e$props$initialValue) {
        var i = t.get(r) || new Set()
        i.add({
          entity: e,
          value: e$props$initialValue
        })
        t.set(r, i)
      }
    })
    var i
    var o = function (r) {
      r.forEach(function (r) {
        if (undefined !== r.props.initialValue) {
          var i = r.getNamePath()
          if (undefined !== n.getInitialValue(i)) {
            y(false, "Form already set 'initialValues' with path '".concat(i.join("."), "'. Field can not overwrite it."))
          } else {
            var o = t.get(i)
            if (o && o.size > 1) {
              y(false, "Multiple Field with path '".concat(i.join("."), "' set 'initialValue'. Can not decide which one to pick."))
            } else if (o) {
              var a = n.getFieldValue(i)
              if (!(e.skipExist && undefined !== a)) {
                n.store = L(n.store, i, $$_$$_79_index.a(o)[0].value)
              }
            }
          }
        }
      })
    }
    if (e.entities) {
      i = e.entities
    } else {
      if (e.namePathList) {
        i = []
        e.namePathList.forEach(function (e) {
          var n
          var r = t.get(e)
          if (r) {
            (n = i).push.apply(n, $$_$$_79_index.a($$_$$_79_index.a(r).map(function (e) {
              return e.entity
            })))
          }
        })
      } else {
        i = r
      }
    }
    o(i)
  }
  this.resetFields = function (e) {
    n.warningUnhooked()
    var /* [auto-meaningful-name] */n$store = n.store
    if (!e) {
      n.store = G({}, n.initialValues)
      n.resetWithFieldInitialValue()
      return void n.notifyObservers(n$store, null, {
        type: "reset"
      })
    }
    var r = e.map(N)
    r.forEach(function (e) {
      var t = n.getInitialValue(e)
      n.store = L(n.store, e, t)
    })
    n.resetWithFieldInitialValue({
      namePathList: r
    })
    n.notifyObservers(n$store, r, {
      type: "reset"
    })
  }
  this.setFields = function (e) {
    n.warningUnhooked()
    var /* [auto-meaningful-name] */n$store = n.store
    e.forEach(function (e) {
      var /* [auto-meaningful-name] */e$name = e.name
      e.errors
      var i = $$_$$_54.a(e, le)
      var o = N(e$name)
      if ("value" in i) {
        n.store = L(n.store, o, i.value)
      }
      n.notifyObservers(n$store, [o], {
        type: "setField",
        data: e
      })
    })
  }
  this.getFields = function () {
    return n.getFieldEntities(true).map(function (e) {
      var t = e.getNamePath()
      var r = e.getMeta()
      var i = $$_$$_21.a($$_$$_21.a({}, r), {}, {
        name: t,
        value: n.getFieldValue(t)
      })
      Object.defineProperty(i, "originRCField", {
        value: true
      })
      return i
    })
  }
  this.initEntityValue = function (e) {
    var /* [auto-meaningful-name] */e$props$initialValue = e.props.initialValue
    if (undefined !== e$props$initialValue) {
      var r = e.getNamePath()
      if (undefined === M(n.store, r)) {
        n.store = L(n.store, r, e$props$initialValue)
      }
    }
  }
  this.registerField = function (e) {
    n.fieldEntities.push(e)
    if (undefined !== e.props.initialValue) {
      var /* [auto-meaningful-name] */n$store = n.store
      n.resetWithFieldInitialValue({
        entities: [e],
        skipExist: true
      })
      n.notifyObservers(n$store, [e.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      })
    }
    return function (t, r) {
      var i = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : []
      n.fieldEntities = n.fieldEntities.filter(function (t) {
        return t !== e
      })
      var o = undefined !== r ? r : n.preserve
      if (false === o && (!t || i.length > 1)) {
        var a = e.getNamePath()
        var s = t ? undefined : M(n.initialValues, a)
        if (a.length && n.getFieldValue(a) !== s && n.fieldEntities.every(function (e) {
          return !z(e.getNamePath(), a)
        })) {
          n.store = L(n.store, a, s, true)
        }
      }
    }
  }
  this.dispatch = function (e) {
    switch (e.type) {
      case "updateValue":
        var /* [auto-meaningful-name] */e$namePath = e.namePath,
          /* [auto-meaningful-name] */e$value = e.value
        n.updateValue(e$namePath, e$value)
        break
      case "validateField":
        var /* [auto-meaningful-name] */e$namePath1 = e.namePath,
          /* [auto-meaningful-name] */e$triggerName = e.triggerName
        n.validateFields([e$namePath1], {
          triggerName: e$triggerName
        })
    }
  }
  this.notifyObservers = function (e, t, r) {
    if (n.subscribable) {
      var i = $$_$$_21.a($$_$$_21.a({}, r), {}, {
        store: n.getFieldsValue(true)
      })
      n.getFieldEntities().forEach(function (n) {
        (0, n.onStoreChange)(e, t, i)
      })
    } else {
      n.forceRootUpdate()
    }
  }
  this.updateValue = function (e, t) {
    var r = N(e)
    var /* [auto-meaningful-name] */n$store = n.store
    n.store = L(n.store, r, t)
    n.notifyObservers(n$store, [r], {
      type: "valueUpdate",
      source: "internal"
    })
    var o = n.getDependencyChildrenFields(r)
    if (o.length) {
      n.validateFields(o)
    }
    n.notifyObservers(n$store, o, {
      type: "dependenciesUpdate",
      relatedFields: [r].concat($$_$$_79_index.a(o))
    })
    var /* [auto-meaningful-name] */n$callbacks$onValuesChange = n.callbacks.onValuesChange
    if (n$callbacks$onValuesChange) {
      n$callbacks$onValuesChange(j(n.store, [r]), n.getFieldsValue())
    }
    n.triggerOnFieldsChange([r].concat($$_$$_79_index.a(o)))
  }
  this.setFieldsValue = function (e) {
    n.warningUnhooked()
    var /* [auto-meaningful-name] */n$store = n.store
    if (e) {
      n.store = G(n.store, e)
    }
    n.notifyObservers(n$store, null, {
      type: "valueUpdate",
      source: "external"
    })
  }
  this.getDependencyChildrenFields = function (e) {
    var t = new Set()
    var r = []
    var i = new ue()
    n.getFieldEntities().forEach(function (e) {
      (e.props.dependencies || []).forEach(function (t) {
        var n = N(t)
        i.update(n, function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Set()
          t.add(e)
          return t
        })
      })
    });
    (function e(n) {
      (i.get(n) || new Set()).forEach(function (n) {
        if (!t.has(n)) {
          t.add(n)
          var i = n.getNamePath()
          if (n.isFieldDirty() && i.length) {
            r.push(i)
            e(i)
          }
        }
      })
    })(e)
    return r
  }
  this.triggerOnFieldsChange = function (e, t) {
    var /* [auto-meaningful-name] */n$callbacks$onFieldsChange = n.callbacks.onFieldsChange
    if (n$callbacks$onFieldsChange) {
      var i = n.getFields()
      if (t) {
        var o = new ue()
        t.forEach(function (e) {
          var /* [auto-meaningful-name] */e$name = e.name
          var /* [auto-meaningful-name] */e$errors = e.errors
          o.set(e$name, e$errors)
        })
        i.forEach(function (e) {
          e.errors = o.get(e.name) || e.errors
        })
      }
      n$callbacks$onFieldsChange(i.filter(function (t) {
        var /* [auto-meaningful-name] */t$name = t.name
        return U(e, t$name)
      }), i)
    }
  }
  this.validateFields = function (e, t) {
    n.warningUnhooked()
    var r = !!e
    var i = r ? e.map(N) : []
    var o = []
    n.getFieldEntities(true).forEach(function (a) {
      if (!r) {
        i.push(a.getNamePath())
      }
      if ((null === t || undefined === t ? undefined : t.recursive) && r) {
        var s = a.getNamePath()
        if (s.every(function (t, n) {
          return e[n] === t || undefined === e[n]
        })) {
          i.push(s)
        }
      }
      if (a.props.rules && a.props.rules.length) {
        var c = a.getNamePath()
        if (!r || U(i, c)) {
          var f = a.validateRules($$_$$_21.a({
            validateMessages: $$_$$_21.a($$_$$_21.a({}, B), n.validateMessages)
          }, t))
          o.push(f.then(function () {
            return {
              name: c,
              errors: [],
              warnings: []
            }
          }).catch(function (e) {
            var t = []
            var n = []
            e.forEach(function (e) {
              var /* [auto-meaningful-name] */e$rule$warningOnly = e.rule.warningOnly
              var /* [auto-meaningful-name] */e$errors = e.errors
              if (e$rule$warningOnly) {
                n.push.apply(n, $$_$$_79_index.a(e$errors))
              } else {
                t.push.apply(t, $$_$$_79_index.a(e$errors))
              }
            })
            return t.length ? Promise.reject({
              name: c,
              errors: t,
              warnings: n
            }) : {
              name: c,
              errors: t,
              warnings: n
            }
          }))
        }
      }
    })
    var a = function (e) {
      var t = false
      var /* [auto-meaningful-name] */e$length = e.length
      var r = []
      return e.length ? new Promise(function (i, o) {
        e.forEach(function (e, a) {
          e.catch(function (e) {
            t = true
            return e
          }).then(function (e) {
            e$length -= 1
            r[a] = e
            if (!(e$length > 0)) {
              if (t) {
                o(r)
              }
              i(r)
            }
          })
        })
      }) : Promise.resolve([])
    }(o)
    n.lastValidatePromise = a
    a.catch(function (e) {
      return e
    }).then(function (e) {
      var t = e.map(function (e) {
        return e.name
      })
      n.notifyObservers(n.store, t, {
        type: "validateFinish"
      })
      n.triggerOnFieldsChange(t, e)
    })
    var s = a.then(function () {
      return n.lastValidatePromise === a ? Promise.resolve(n.getFieldsValue(i)) : Promise.reject([])
    }).catch(function (e) {
      var t = e.filter(function (e) {
        return e && e.errors.length
      })
      return Promise.reject({
        values: n.getFieldsValue(i),
        errorFields: t,
        outOfDate: n.lastValidatePromise !== a
      })
    })
    s.catch(function (e) {
      return e
    })
    return s
  }
  this.submit = function () {
    n.warningUnhooked()
    n.validateFields().then(function (e) {
      var /* [auto-meaningful-name] */n$callbacks$onFinish = n.callbacks.onFinish
      if (n$callbacks$onFinish) {
        try {
          n$callbacks$onFinish(e)
        } catch (r) {
          console.error(r)
        }
      }
    }).catch(function (e) {
      var /* [auto-meaningful-name] */n$callbacks$onFinishFailed = n.callbacks.onFinishFailed
      if (n$callbacks$onFinishFailed) {
        n$callbacks$onFinishFailed(e)
      }
    })
  }
  this.forceRootUpdate = t
}
var de = function (e) {
  var t = React.useRef()
  var n = React.useState({})
  var r = $$_$$_40_index.a(n, 2)[1]
  if (!t.current) {
    if (e) {
      t.current = e
    } else {
      var o = new fe(function () {
        r({})
      })
      t.current = o.getForm()
    }
  }
  return [t.current]
}
var he = React.createContext({
  triggerFormChange: function () {},
  triggerFormFinish: function () {},
  registerForm: function () {},
  unregisterForm: function () {}
})
var pe = function (e) {
  var /* [auto-meaningful-name] */e$validateMessages = e.validateMessages
  var /* [auto-meaningful-name] */e$onFormChange = e.onFormChange
  var /* [auto-meaningful-name] */e$onFormFinish = e.onFormFinish
  var /* [auto-meaningful-name] */e$children = e.children
  var a = React.useContext(he)
  var s = React.useRef({})
  return React.createElement(he.Provider, {
    value: $$_$$_21.a($$_$$_21.a({}, a), {}, {
      validateMessages: $$_$$_21.a($$_$$_21.a({}, a.validateMessages), e$validateMessages),
      triggerFormChange: function (e, t) {
        if (e$onFormChange) {
          e$onFormChange(e, {
            changedFields: t,
            forms: s.current
          })
        }
        a.triggerFormChange(e, t)
      },
      triggerFormFinish: function (e, t) {
        if (e$onFormFinish) {
          e$onFormFinish(e, {
            values: t,
            forms: s.current
          })
        }
        a.triggerFormFinish(e, t)
      },
      registerForm: function (e, t) {
        if (e) {
          s.current = $$_$$_21.a($$_$$_21.a({}, s.current), {}, $$_$$_35.a({}, e, t))
        }
        a.registerForm(e, t)
      },
      unregisterForm: function (e) {
        var t = $$_$$_21.a({}, s.current)
        delete t[e]
        s.current = t
        a.unregisterForm(e)
      }
    })
  }, e$children)
}
var _e = he
var Ae = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"]
var ge = function (e, t) {
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$initialValues = e.initialValues
  var /* [auto-meaningful-name] */e$fields = e.fields
  var /* [auto-meaningful-name] */e$form = e.form
  var /* [auto-meaningful-name] */e$preserve = e.preserve
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$component = e.component
  var p = undefined === e$component ? "form" : e$component
  var /* [auto-meaningful-name] */e$validateMessages = e.validateMessages
  var /* [auto-meaningful-name] */e$validateTrigger = e.validateTrigger
  var g = undefined === e$validateTrigger ? "onChange" : e$validateTrigger
  var /* [auto-meaningful-name] */e$onValuesChange = e.onValuesChange
  var /* [auto-meaningful-name] */e$onFieldsChange = e.onFieldsChange
  var /* [auto-meaningful-name] */e$onFinish = e.onFinish
  var /* [auto-meaningful-name] */e$onFinishFailed = e.onFinishFailed
  var x = $$_$$_54.a(e, Ae)
  var C = React.useContext(_e)
  var O = de(e$form)
  var k = $$_$$_40_index.a(O, 1)[0]
  var S = k.getInternalHooks(b)
  var /* [auto-meaningful-name] */S$useSubscribe = S.useSubscribe
  var /* [auto-meaningful-name] */S$setInitialValues = S.setInitialValues
  var /* [auto-meaningful-name] */S$setCallbacks = S.setCallbacks
  var /* [auto-meaningful-name] */S$setValidateMessages = S.setValidateMessages
  var /* [auto-meaningful-name] */S$setPreserve = S.setPreserve
  React.useImperativeHandle(t, function () {
    return k
  })
  React.useEffect(function () {
    C.registerForm(e$name, k)
    return function () {
      C.unregisterForm(e$name)
    }
  }, [C, k, e$name])
  S$setValidateMessages($$_$$_21.a($$_$$_21.a({}, C.validateMessages), e$validateMessages))
  S$setCallbacks({
    onValuesChange: e$onValuesChange,
    onFieldsChange: function (e) {
      C.triggerFormChange(e$name, e)
      if (e$onFieldsChange) {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 1 ? arguments$length - 1 : 0), i = 1; i < arguments$length; i++) {
          r[i - 1] = arguments[i]
        }
        e$onFieldsChange.apply(undefined, [e].concat(r))
      }
    },
    onFinish: function (e) {
      C.triggerFormFinish(e$name, e)
      if (e$onFinish) {
        e$onFinish(e)
      }
    },
    onFinishFailed: e$onFinishFailed
  })
  S$setPreserve(e$preserve)
  var P = React.useRef(null)
  S$setInitialValues(e$initialValues, !P.current)
  if (!P.current) {
    P.current = true
  }
  var N = e$children
  var M = "function" === typeof e$children
  if (M) {
    N = e$children(k.getFieldsValue(true), k)
  }
  S$useSubscribe(!M)
  var L = React.useRef()
  React.useEffect(function () {
    if (!function (e, t) {
      if (e === t) {
        return true
      }
      if (!e && t || e && !t) {
        return false
      }
      if (!e || !t || "object" !== $$_$$_107.a(e) || "object" !== $$_$$_107.a(t)) {
        return false
      }
      var n = Object.keys(e)
      var r = Object.keys(t)
      var i = new Set([].concat($$_$$_79_index.a(n), $$_$$_79_index.a(r)))
      return $$_$$_79_index.a(i).every(function (n) {
        var r = e[n]
        var i = t[n]
        return "function" === typeof r && "function" === typeof i || r === i
      })
    }(L.current || [], e$fields || [])) {
      k.setFields(e$fields || [])
    }
    L.current = e$fields
  }, [e$fields, k])
  var j = React.useMemo(function () {
    return $$_$$_21.a($$_$$_21.a({}, k), {}, {
      validateTrigger: g
    })
  }, [k, g])
  var U = React.createElement(E.Provider, {
    value: j
  }, N)
  return false === p ? U : React.createElement(p, $$_$$_19.a({}, x, {
    onSubmit: function (e) {
      e.preventDefault()
      e.stopPropagation()
      k.submit()
    },
    onReset: function (e) {
      var /* [auto-meaningful-name] */x$onReset
      e.preventDefault()
      k.resetFields()
      if (!(null === (x$onReset = x.onReset) || undefined === x$onReset)) {
        x$onReset.call(x, e)
      }
    }
  }), U)
}
var ve = React.forwardRef(ge)
ve.FormProvider = pe
ve.Field = ie
ve.List = oe
ve.useForm = de
export { pe }
