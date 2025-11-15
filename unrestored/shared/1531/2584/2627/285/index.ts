/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285
 */

"use strict"

export { Cn as b }
import /* [auto-meaningful-name] */$$_$$_19 = require("../../19")
import /* [auto-meaningful-name] */React = require("react")
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import /* [auto-meaningful-name] */$$_$$_223_780 = require("../../223/780")
import /* [auto-meaningful-name] */$$_$$_54 = require("../../54")
import /* [auto-meaningful-name] */$$_$$_29 = require("../../29")
import /* [auto-meaningful-name] */$$_$$_20 = require("../../20")
import /* [auto-meaningful-name] */$$_$$_80_index = require("../../80/index")
import /* [auto-meaningful-name] */$$_$$_95 = require("../../95")
import /* [auto-meaningful-name] */$$_$$_96 = require("../../96")
import /* [auto-meaningful-name] */$$_$$_103 = require("../../103")
import /* [auto-meaningful-name] */$$_$$_120 = require("../../120")
import /* [auto-meaningful-name] */$$_$$_140 = require("../../140")
import /* [auto-meaningful-name] */$$_$$_242_index = require("../../242/index")
var g = {}
function v(e, t) {
  0
}
function m(e, t, n) {
  if (!(t || g[n])) {
    e(false, n)
    g[n] = true
  }
}
var y = function (e, t) {
  m(v, e, t)
}
var /* [auto-meaningful-name] */RC_FORM_INTERNAL_HOOKS = "RC_FORM_INTERNAL_HOOKS"
var w = function () {
  y(false, "Can not find FormContext. Please make sure you wrap Field under Form.")
}
var E = React.createContext({
  getFieldValue: w,
  getFieldsValue: w,
  getFieldError: w,
  getFieldWarning: w,
  getFieldsError: w,
  isFieldsTouched: w,
  isFieldTouched: w,
  isFieldValidating: w,
  isFieldsValidating: w,
  resetFields: w,
  setFields: w,
  setFieldsValue: w,
  validateFields: w,
  submit: w,
  getInternalHooks: function () {
    w()
    return {
      dispatch: w,
      initEntityValue: w,
      registerField: w,
      useSubscribe: w,
      setInitialValues: w,
      setCallbacks: w,
      getFields: w,
      setValidateMessages: w,
      setPreserve: w,
      getInitialValue: w
    }
  }
})
function x(e) {
  return undefined === e || null === e ? [] : Array.isArray(e) ? e : [e]
}
import /* [auto-meaningful-name] */$$_$$_110 = require("../../110")
var O = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_110)
import /* [auto-meaningful-name] */$$_$$_171 = require("../../171")
import /* [auto-meaningful-name] */$_998 = require("./998")
var /* [auto-meaningful-name] */$NameIsNotAValid$Type = "'${name}' is not a valid ${type}"
var B = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: $NameIsNotAValid$Type,
    method: $NameIsNotAValid$Type,
    array: $NameIsNotAValid$Type,
    object: $NameIsNotAValid$Type,
    number: $NameIsNotAValid$Type,
    date: $NameIsNotAValid$Type,
    boolean: $NameIsNotAValid$Type,
    integer: $NameIsNotAValid$Type,
    float: $NameIsNotAValid$Type,
    regexp: $NameIsNotAValid$Type,
    email: $NameIsNotAValid$Type,
    url: $NameIsNotAValid$Type,
    hex: $NameIsNotAValid$Type
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}
import /* [auto-meaningful-name] */$$_$$_108 = require("../../108")
function I(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (null === n || undefined === n) {
      return
    }
    n = n[t[r]]
  }
  return n
}
import /* [auto-meaningful-name] */$$_$$_519_772 = require("../../519/772")
function R(e, t, n, r) {
  if (!t.length) {
    return n
  }
  var i
  var o = $$_$$_519_772.a(t)
  var a = o[0]
  var s = o.slice(1)
  i = e || "number" !== typeof a ? Array.isArray(e) ? $$_$$_80_index.a(e) : $$_$$_20.a({}, e) : []
  if (r && undefined === n && 1 === s.length) {
    delete i[a][s[0]]
  } else {
    i[a] = R(i[a], s, n, r)
  }
  return i
}
function P(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3]
  return t.length && r && undefined === n && !I(e, t.slice(0, -1)) ? e : R(e, t, n, r)
}
function N(e) {
  return x(e)
}
function M(e, t) {
  return I(e, t)
}
function j(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3]
  var i = P(e, t, n, r)
  return i
}
function L(e, t) {
  var n = {}
  t.forEach(function (t) {
    var r = M(e, t)
    n = j(n, t, r)
  })
  return n
}
function U(e, t) {
  return e && e.some(function (e) {
    return z(e, t)
  })
}
function H(e) {
  return "object" === $$_$$_108.a(e) && null !== e && Object.getPrototypeOf(e) === Object.prototype
}
function V(e, t) {
  var n = Array.isArray(e) ? $$_$$_80_index.a(e) : $$_$$_20.a({}, e)
  return t ? (Object.keys(t).forEach(function (e) {
    var r = n[e]
    var i = t[e]
    var o = H(r) && H(i)
    n[e] = o ? V(r, i || {}) : i
  }), n) : n
}
function G(e) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  return n.reduce(function (e, t) {
    return V(e, t)
  }, e)
}
function z(e, t) {
  return !(!e || !t || e.length !== t.length) && e.every(function (e, n) {
    return t[n] === e
  })
}
function Q(e) {
  var t = arguments.length <= 1 ? undefined : arguments[1]
  return t && t.target && e in t.target ? t.target[e] : t
}
function W(e, t, n) {
  var /* [auto-meaningful-name] */e$length = e.length
  if (t < 0 || t >= e$length || n < 0 || n >= e$length) {
    return e
  }
  var i = e[t]
  var o = t - n
  return o > 0 ? [].concat($$_$$_80_index.a(e.slice(0, n)), [i], $$_$$_80_index.a(e.slice(n, t)), $$_$$_80_index.a(e.slice(t + 1, e$length))) : o < 0 ? [].concat($$_$$_80_index.a(e.slice(0, t)), $$_$$_80_index.a(e.slice(t + 1, n + 1)), [i], $$_$$_80_index.a(e.slice(n + 1, e$length))) : e
}
var /* [auto-meaningful-name] */$_998$a = $_998.a
function X(e, t) {
  return e.replace(/\$\{\w+\}/g, function (e) {
    var n = e.slice(2, -1)
    return t[n]
  })
}
function Y(e, t, n, r, i) {
  return q.apply(this, arguments)
}
function q() {
  return (q = $$_$$_171.a(O.a.mark(function e(t, n, r, o, a) {
    var s
    var f
    var d
    var h
    var p
    var /* [auto-meaningful-name] */e$sent
    var A
    var g
    return O.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            delete (s = $$_$$_20.a({}, r)).ruleIndex
            f = null
            if (s && "array" === s.type && s.defaultField) {
              f = s.defaultField
              delete s.defaultField
            }
            d = new $_998$a($$_$$_29.a({}, t, [s]))
            h = G({}, B, o.validateMessages)
            d.messages(h)
            p = []
            e.prev = 8
            e.next = 11
            return Promise.resolve(d.validate($$_$$_29.a({}, t, n), $$_$$_20.a({}, o)))
          case 11:
            e.next = 16
            break
          case 13:
            e.prev = 13
            e.t0 = e.catch(8)
            if (e.t0.errors) {
              p = e.t0.errors.map(function (e, t) {
                var /* [auto-meaningful-name] */e$message = e.message
                return React.isValidElement(e$message) ? React.cloneElement(e$message, {
                  key: "error_".concat(t)
                }) : e$message
              })
            } else {
              console.error(e.t0)
              p = [h.default]
            }
          case 16:
            if (p.length || !f) {
              e.next = 21
              break
            }
            e.next = 19
            return Promise.all(n.map(function (e, n) {
              return Y("".concat(t, ".").concat(n), e, f, o, a)
            }))
          case 19:
            e$sent = e.sent
            return e.abrupt("return", e$sent.reduce(function (e, t) {
              return [].concat($$_$$_80_index.a(e), $$_$$_80_index.a(t))
            }, []))
          case 21:
            A = $$_$$_20.a($$_$$_20.a({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, a)
            g = p.map(function (e) {
              return "string" === typeof e ? X(e, A) : e
            })
            return e.abrupt("return", g)
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[8, 13]])
  }))).apply(this, arguments)
}
function $(e, t, n, r, i, o) {
  var a
  var s = e.join(".")
  var c = n.map(function (e, t) {
    var /* [auto-meaningful-name] */e$validator = e.validator
    var r = $$_$$_20.a($$_$$_20.a({}, e), {}, {
      ruleIndex: t
    })
    if (e$validator) {
      r.validator = function (e, t, r) {
        var i = false
        var o = e$validator(e, t, function () {
          for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
            t[n] = arguments[n]
          }
          Promise.resolve().then(function () {
            y(!i, "Your validator function has already return a promise. `callback` will be ignored.")
            if (!i) {
              r.apply(undefined, t)
            }
          })
        })
        i = o && "function" === typeof o.then && "function" === typeof o.catch
        y(i, "`callback` is deprecated. Please return a promise instead.")
        if (i) {
          o.then(function () {
            r()
          }).catch(function (e) {
            r(e || " ")
          })
        }
      }
    }
    return r
  }).sort(function (e, t) {
    var /* [auto-meaningful-name] */e$warningOnly = e.warningOnly
    var /* [auto-meaningful-name] */e$ruleIndex = e.ruleIndex
    var /* [auto-meaningful-name] */t$warningOnly = t.warningOnly
    var /* [auto-meaningful-name] */t$ruleIndex = t.ruleIndex
    return !!e$warningOnly === !!t$warningOnly ? e$ruleIndex - t$ruleIndex : e$warningOnly ? 1 : -1
  })
  if (true === i) {
    a = new Promise(function () {
      var e = $$_$$_171.a(O.a.mark(function e(n, i) {
        var a
        var u
        var /* [auto-meaningful-name] */e$sent
        return O.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                a = 0
              case 1:
                if (!(a < c.length)) {
                  e.next = 12
                  break
                }
                u = c[a]
                e.next = 5
                return Y(s, t, u, r, o)
              case 5:
                if (!(e$sent = e.sent).length) {
                  e.next = 9
                  break
                }
                i([{
                  errors: e$sent,
                  rule: u
                }])
                return e.abrupt("return")
              case 9:
                a += 1
                e.next = 1
                break
              case 12:
                n([])
              case 13:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function (t, n) {
        return e.apply(this, arguments)
      }
    }())
  } else {
    var l = c.map(function (e) {
      return Y(s, t, e, r, o).then(function (t) {
        return {
          errors: t,
          rule: e
        }
      })
    })
    a = (i ? function (e) {
      return Z.apply(this, arguments)
    }(l) : function (e) {
      return J.apply(this, arguments)
    }(l)).then(function (e) {
      return Promise.reject(e)
    })
  }
  a.catch(function (e) {
    return e
  })
  return a
}
function J() {
  return (J = $$_$$_171.a(O.a.mark(function e(t) {
    return O.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(t).then(function (e) {
              var t
              return (t = []).concat.apply(t, $$_$$_80_index.a(e))
            }))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Z() {
  return (Z = $$_$$_171.a(O.a.mark(function e(t) {
    var n
    return O.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = 0
            return e.abrupt("return", new Promise(function (e) {
              t.forEach(function (r) {
                r.then(function (r) {
                  if (r.errors.length) {
                    e([r])
                  }
                  if ((n += 1) === t.length) {
                    e([])
                  }
                })
              })
            }))
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var ee = ["name"]
var te = []
function ne(e, t, n, r, i, o) {
  return "function" === typeof e ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== i
}
var re = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n(e) {
    var r
    $$_$$_95.a(this, n);
    (r = t.call(this, e)).state = {
      resetCount: 0
    }
    r.cancelRegisterFunc = null
    r.mounted = false
    r.touched = false
    r.dirty = false
    r.validatePromise = null
    r.prevValidating = undefined
    r.errors = te
    r.warnings = te
    r.cancelRegister = function () {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$preserve = r$props.preserve
      var /* [auto-meaningful-name] */r$props$isListField = r$props.isListField
      var /* [auto-meaningful-name] */r$props$name = r$props.name
      if (r.cancelRegisterFunc) {
        r.cancelRegisterFunc(r$props$isListField, r$props$preserve, N(r$props$name))
      }
      r.cancelRegisterFunc = null
    }
    r.getNamePath = function () {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$name = r$props.name
      var /* [auto-meaningful-name] */r$props$fieldContext$prefixName = r$props.fieldContext.prefixName
      var i = undefined === r$props$fieldContext$prefixName ? [] : r$props$fieldContext$prefixName
      return undefined !== r$props$name ? [].concat($$_$$_80_index.a(i), $$_$$_80_index.a(r$props$name)) : []
    }
    r.getRules = function () {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$rules = r$props.rules
      var n = undefined === r$props$rules ? [] : r$props$rules
      var /* [auto-meaningful-name] */r$props$fieldContext = r$props.fieldContext
      return n.map(function (e) {
        return "function" === typeof e ? e(r$props$fieldContext) : e
      })
    }
    r.refresh = function () {
      if (r.mounted) {
        r.setState(function (e) {
          return {
            resetCount: e.resetCount + 1
          }
        })
      }
    }
    r.triggerMetaEvent = function (e) {
      var /* [auto-meaningful-name] */r$props$onMetaChange = r.props.onMetaChange
      if (!(null === r$props$onMetaChange || undefined === r$props$onMetaChange)) {
        r$props$onMetaChange($$_$$_20.a($$_$$_20.a({}, r.getMeta()), {}, {
          destroy: e
        }))
      }
    }
    r.onStoreChange = function (e, t, n) {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$shouldUpdate = r$props.shouldUpdate
      var /* [auto-meaningful-name] */r$props$dependencies = r$props.dependencies
      var s = undefined === r$props$dependencies ? [] : r$props$dependencies
      var /* [auto-meaningful-name] */r$props$onReset = r$props.onReset
      var /* [auto-meaningful-name] */n$store = n.store
      var l = r.getNamePath()
      var f = r.getValue(e)
      var d = r.getValue(n$store)
      var h = t && U(t, l)
      switch ("valueUpdate" === n.type && "external" === n.source && f !== d && (r.touched = true, r.dirty = true, r.validatePromise = null, r.errors = te, r.warnings = te, r.triggerMetaEvent()), n.type) {
        case "reset":
          if (!t || h) {
            r.touched = false
            r.dirty = false
            r.validatePromise = null
            r.errors = te
            r.warnings = te
            r.triggerMetaEvent()
            if (!(null === r$props$onReset || undefined === r$props$onReset)) {
              r$props$onReset()
            }
            return void r.refresh()
          }
          break
        case "setField":
          if (h) {
            var /* [auto-meaningful-name] */n$data = n.data
            if ("touched" in n$data) {
              r.touched = n$data.touched
            }
            if ("validating" in n$data && !("originRCField" in n$data)) {
              r.validatePromise = n$data.validating ? Promise.resolve([]) : null
            }
            if ("errors" in n$data) {
              r.errors = n$data.errors || te
            }
            if ("warnings" in n$data) {
              r.warnings = n$data.warnings || te
            }
            r.dirty = true
            r.triggerMetaEvent()
            return void r.reRender()
          }
          if (r$props$shouldUpdate && !l.length && ne(r$props$shouldUpdate, e, n$store, f, d, n)) {
            return void r.reRender()
          }
          break
        case "dependenciesUpdate":
          if (s.map(N).some(function (e) {
            return U(n.relatedFields, e)
          })) {
            return void r.reRender()
          }
          break
        default:
          if (h || (!s.length || l.length || r$props$shouldUpdate) && ne(r$props$shouldUpdate, e, n$store, f, d, n)) {
            return void r.reRender()
          }
      }
      if (true === r$props$shouldUpdate) {
        r.reRender()
      }
    }
    r.validateRules = function (e) {
      var t = r.getNamePath()
      var n = r.getValue()
      var i = Promise.resolve().then(function () {
        if (!r.mounted) {
          return []
        }
        var /* [auto-meaningful-name] */r$props = r.props
        var /* [auto-meaningful-name] */r$props$validateFirst = r$props.validateFirst
        var s = undefined !== r$props$validateFirst && r$props$validateFirst
        var /* [auto-meaningful-name] */r$props$messageVariables = r$props.messageVariables
        var /* [auto-meaningful-name] */E$triggerName = (e || {}).triggerName
        var f = r.getRules()
        if (E$triggerName) {
          f = f.filter(function (e) {
            var /* [auto-meaningful-name] */e$validateTrigger = e.validateTrigger
            return !e$validateTrigger || x(e$validateTrigger).includes(E$triggerName)
          })
        }
        var d = $(t, n, f, e, s, r$props$messageVariables)
        d.catch(function (e) {
          return e
        }).then(function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : te
          if (r.validatePromise === i) {
            r.validatePromise = null
            var t = []
            var n = []
            e.forEach(function (e) {
              var /* [auto-meaningful-name] */e$rule$warningOnly = e.rule.warningOnly
              var /* [auto-meaningful-name] */e$errors = e.errors
              var o = undefined === e$errors ? te : e$errors
              if (e$rule$warningOnly) {
                n.push.apply(n, $$_$$_80_index.a(o))
              } else {
                t.push.apply(t, $$_$$_80_index.a(o))
              }
            })
            r.errors = t
            r.warnings = n
            r.triggerMetaEvent()
            r.reRender()
          }
        })
        return d
      })
      r.validatePromise = i
      r.dirty = true
      r.errors = te
      r.warnings = te
      r.triggerMetaEvent()
      r.reRender()
      return i
    }
    r.isFieldValidating = function () {
      return !!r.validatePromise
    }
    r.isFieldTouched = function () {
      return r.touched
    }
    r.isFieldDirty = function () {
      return !(!r.dirty && undefined === r.props.initialValue) || undefined !== (0, r.props.fieldContext.getInternalHooks(RC_FORM_INTERNAL_HOOKS).getInitialValue)(r.getNamePath())
    }
    r.getErrors = function () {
      return r.errors
    }
    r.getWarnings = function () {
      return r.warnings
    }
    r.isListField = function () {
      return r.props.isListField
    }
    r.isList = function () {
      return r.props.isList
    }
    r.isPreserve = function () {
      return r.props.preserve
    }
    r.getMeta = function () {
      r.prevValidating = r.isFieldValidating()
      return {
        touched: r.isFieldTouched(),
        validating: r.prevValidating,
        errors: r.errors,
        warnings: r.warnings,
        name: r.getNamePath()
      }
    }
    r.getOnlyChild = function (e) {
      if ("function" === typeof e) {
        var t = r.getMeta()
        return $$_$$_20.a($$_$$_20.a({}, r.getOnlyChild(e(r.getControlled(), t, r.props.fieldContext))), {}, {
          isFunction: true
        })
      }
      var n = function e(t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
        var r = []
        o.a.Children.forEach(t, function (t) {
          if (undefined !== t && null !== t || n.keepEmpty) {
            if (Array.isArray(t)) {
              r = r.concat(e(t))
            } else {
              if ($$_$$_242_index.isFragment(t) && t.props) {
                r = r.concat(e(t.props.children, n))
              } else {
                r.push(t)
              }
            }
          }
        })
        return r
      }(e)
      return 1 === n.length && React.isValidElement(n[0]) ? {
        child: n[0],
        isFunction: false
      } : {
        child: n,
        isFunction: false
      }
    }
    r.getValue = function (e) {
      var /* [auto-meaningful-name] */r$props$fieldContext$getFieldsValue = r.props.fieldContext.getFieldsValue
      var n = r.getNamePath()
      return M(e || r$props$fieldContext$getFieldsValue(true), n)
    }
    r.getControlled = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$trigger = r$props.trigger
      var /* [auto-meaningful-name] */r$props$validateTrigger = r$props.validateTrigger
      var /* [auto-meaningful-name] */r$props$getValueFromEvent = r$props.getValueFromEvent
      var /* [auto-meaningful-name] */r$props$normalize = r$props.normalize
      var /* [auto-meaningful-name] */r$props$valuePropName = r$props.valuePropName
      var /* [auto-meaningful-name] */r$props$getValueProps = r$props.getValueProps
      var /* [auto-meaningful-name] */r$props$fieldContext = r$props.fieldContext
      var d = undefined !== r$props$validateTrigger ? r$props$validateTrigger : r$props$fieldContext.validateTrigger
      var h = r.getNamePath()
      var /* [auto-meaningful-name] */r$props$fieldContext$getInternalHooks = r$props$fieldContext.getInternalHooks
      var /* [auto-meaningful-name] */r$props$fieldContext$getFieldsValue = r$props$fieldContext.getFieldsValue
      var A = r$props$fieldContext$getInternalHooks(RC_FORM_INTERNAL_HOOKS)
      var /* [auto-meaningful-name] */A$dispatch = A.dispatch
      var v = r.getValue()
      var m = r$props$getValueProps || function (e) {
        return $$_$$_29.a({}, r$props$valuePropName, e)
      }
      var y = e[r$props$trigger]
      var w = $$_$$_20.a($$_$$_20.a({}, e), m(v))
      w[r$props$trigger] = function () {
        var e
        r.touched = true
        r.dirty = true
        r.triggerMetaEvent()
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), i = 0; i < arguments$length; i++) {
          n[i] = arguments[i]
        }
        e = r$props$getValueFromEvent ? r$props$getValueFromEvent.apply(undefined, n) : Q.apply(undefined, [r$props$valuePropName].concat(n))
        if (r$props$normalize) {
          e = r$props$normalize(e, v, r$props$fieldContext$getFieldsValue(true))
        }
        A$dispatch({
          type: "updateValue",
          namePath: h,
          value: e
        })
        if (y) {
          y.apply(undefined, n)
        }
      }
      var E = x(d || [])
      E.forEach(function (e) {
        var t = w[e]
        w[e] = function () {
          if (t) {
            t.apply(undefined, arguments)
          }
          var /* [auto-meaningful-name] */r$props$rules = r.props.rules
          if (r$props$rules && r$props$rules.length) {
            A$dispatch({
              type: "validateField",
              namePath: h,
              triggerName: e
            })
          }
        }
      })
      return w
    }
    if (e.fieldContext) {
      (0, (0, e.fieldContext.getInternalHooks)(RC_FORM_INTERNAL_HOOKS).initEntityValue)($$_$$_103.a(r))
    }
    return r
  }
  $$_$$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$shouldUpdate = this$props.shouldUpdate
      var /* [auto-meaningful-name] */this$props$fieldContext = this$props.fieldContext
      this.mounted = true
      if (this$props$fieldContext) {
        var /* [auto-meaningful-name] */_0This$props$fieldContext$getInternalHooksRC_FORM_INTERNAL_HOOKS$registerField = (0, this$props$fieldContext.getInternalHooks)(RC_FORM_INTERNAL_HOOKS).registerField
        this.cancelRegisterFunc = _0This$props$fieldContext$getInternalHooksRC_FORM_INTERNAL_HOOKS$registerField(this)
      }
      if (true === this$props$shouldUpdate) {
        this.reRender()
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.cancelRegister()
      this.triggerMetaEvent(true)
      this.mounted = false
    }
  }, {
    key: "reRender",
    value: function () {
      if (this.mounted) {
        this.forceUpdate()
      }
    }
  }, {
    key: "render",
    value: function () {
      var e
      var /* [auto-meaningful-name] */this$state$resetCount = this.state.resetCount
      var /* [auto-meaningful-name] */this$props$children = this.props.children
      var r = this.getOnlyChild(this$props$children)
      var /* [auto-meaningful-name] */r$child = r.child
      if (r.isFunction) {
        e = r$child
      } else {
        if (React.isValidElement(r$child)) {
          e = React.cloneElement(r$child, this.getControlled(r$child.props))
        } else {
          y(!r$child, "`children` of Field is not validate ReactElement.")
          e = r$child
        }
      }
      return React.createElement(React.Fragment, {
        key: this$state$resetCount
      }, e)
    }
  }])
  return n
}(React.Component)
re.contextType = E
re.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
}
var ie = function (e) {
  var /* [auto-meaningful-name] */e$name = e.name
  var n = $$_$$_54.a(e, ee)
  var o = React.useContext(E)
  var a = undefined !== e$name ? N(e$name) : undefined
  var c = "keep"
  if (!n.isListField) {
    c = "_".concat((a || []).join("_"))
  }
  return React.createElement(re, $$_$$_19.a({
    key: c,
    name: a
  }, n, {
    fieldContext: o
  }))
}
var oe = function (e) {
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$initialValue = e.initialValue
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$rules = e.rules
  var /* [auto-meaningful-name] */e$validateTrigger = e.validateTrigger
  var s = React.useContext(E)
  var /* [auto-meaningful-name] */React$useRefKeysId0$current = React.useRef({
    keys: [],
    id: 0
  }).current
  if ("function" !== typeof e$children) {
    y(false, "Form.List only accepts function as children.")
    return null
  }
  var f = N(s.prefixName) || []
  var d = [].concat($$_$$_80_index.a(f), $$_$$_80_index.a(N(e$name)))
  return React.createElement(E.Provider, {
    value: $$_$$_20.a($$_$$_20.a({}, s), {}, {
      prefixName: d
    })
  }, React.createElement(ie, {
    name: [],
    shouldUpdate: function (e, t, n) {
      return "internal" !== n.source && e !== t
    },
    rules: e$rules,
    validateTrigger: e$validateTrigger,
    initialValue: e$initialValue,
    isList: true
  }, function (e, t) {
    var /* [auto-meaningful-name] */e$value = e.value
    var i = undefined === e$value ? [] : e$value
    var /* [auto-meaningful-name] */e$onChange = e.onChange
    var /* [auto-meaningful-name] */s$getFieldValue = s.getFieldValue
    var u = function () {
      return s$getFieldValue(d || []) || []
    }
    var f = {
      add: function (e, t) {
        var n = u()
        if (t >= 0 && t <= n.length) {
          React$useRefKeysId0$current.keys = [].concat($$_$$_80_index.a(React$useRefKeysId0$current.keys.slice(0, t)), [React$useRefKeysId0$current.id], $$_$$_80_index.a(React$useRefKeysId0$current.keys.slice(t)))
          e$onChange([].concat($$_$$_80_index.a(n.slice(0, t)), [e], $$_$$_80_index.a(n.slice(t))))
        } else {
          React$useRefKeysId0$current.keys = [].concat($$_$$_80_index.a(React$useRefKeysId0$current.keys), [React$useRefKeysId0$current.id])
          e$onChange([].concat($$_$$_80_index.a(n), [e]))
        }
        React$useRefKeysId0$current.id += 1
      },
      remove: function (e) {
        var t = u()
        var n = new Set(Array.isArray(e) ? e : [e])
        if (!(n.size <= 0)) {
          React$useRefKeysId0$current.keys = React$useRefKeysId0$current.keys.filter(function (e, t) {
            return !n.has(t)
          })
          e$onChange(t.filter(function (e, t) {
            return !n.has(t)
          }))
        }
      },
      move: function (e, t) {
        if (e !== t) {
          var n = u()
          if (!(e < 0 || e >= n.length || t < 0 || t >= n.length)) {
            React$useRefKeysId0$current.keys = W(React$useRefKeysId0$current.keys, e, t)
            e$onChange(W(n, e, t))
          }
        }
      }
    }
    var h = i || []
    if (!Array.isArray(h)) {
      h = []
    }
    return e$children(h.map(function (e, t) {
      var n = React$useRefKeysId0$current.keys[t]
      if (undefined === n) {
        React$useRefKeysId0$current.keys[t] = React$useRefKeysId0$current.id
        n = React$useRefKeysId0$current.keys[t]
        React$useRefKeysId0$current.id += 1
      }
      return {
        name: t,
        key: n,
        isListField: true
      }
    }), f, t)
  }))
}
import /* [auto-meaningful-name] */$$_$$_33_index = require("../../33/index")
var /* [auto-meaningful-name] */__Field_split__ = "__@field_split__"
function ce(e) {
  return e.map(function (e) {
    return "".concat($$_$$_108.a(e), ":").concat(e)
  }).join(__Field_split__)
}
var ue = function () {
  function e() {
    $$_$$_95.a(this, e)
    this.kvs = new Map()
  }
  $$_$$_96.a(e, [{
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
      return $$_$$_80_index.a(this.kvs.entries()).map(function (t) {
        var n = $$_$$_33_index.a(t, 2)
        var r = n[0]
        var i = n[1]
        var o = r.split(__Field_split__)
        return e({
          key: o.map(function (e) {
            var t = e.match(/^([^:]*):(.*)$/)
            var n = $$_$$_33_index.a(t, 3)
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
  }])
  return e
}()
var le = ["name", "errors"]
var fe = function e(t) {
  var n = this
  $$_$$_95.a(this, e)
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
    return e === RC_FORM_INTERNAL_HOOKS ? (n.formHooked = true, {
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
    return L(n.store, i.map(N))
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
            return [].concat($$_$$_80_index.a(t), [e])
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
                n.store = j(n.store, i, $$_$$_80_index.a(o)[0].value)
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
            (n = i).push.apply(n, $$_$$_80_index.a($$_$$_80_index.a(r).map(function (e) {
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
      n.store = j(n.store, e, t)
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
        n.store = j(n.store, o, i.value)
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
      var i = $$_$$_20.a($$_$$_20.a({}, r), {}, {
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
        n.store = j(n.store, r, e$props$initialValue)
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
          n.store = j(n.store, a, s, true)
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
        var /* [auto-meaningful-name] */_e$namePath = e.namePath,
          /* [auto-meaningful-name] */e$triggerName = e.triggerName
        n.validateFields([_e$namePath], {
          triggerName: e$triggerName
        })
    }
  }
  this.notifyObservers = function (e, t, r) {
    if (n.subscribable) {
      var i = $$_$$_20.a($$_$$_20.a({}, r), {}, {
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
    n.store = j(n.store, r, t)
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
      relatedFields: [r].concat($$_$$_80_index.a(o))
    })
    var /* [auto-meaningful-name] */n$callbacks$onValuesChange = n.callbacks.onValuesChange
    if (n$callbacks$onValuesChange) {
      n$callbacks$onValuesChange(L(n.store, [r]), n.getFieldsValue())
    }
    n.triggerOnFieldsChange([r].concat($$_$$_80_index.a(o)))
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
          var f = a.validateRules($$_$$_20.a({
            validateMessages: $$_$$_20.a($$_$$_20.a({}, B), n.validateMessages)
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
                n.push.apply(n, $$_$$_80_index.a(e$errors))
              } else {
                t.push.apply(t, $$_$$_80_index.a(e$errors))
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
  var r = $$_$$_33_index.a(n, 2)[1]
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
    value: $$_$$_20.a($$_$$_20.a({}, a), {}, {
      validateMessages: $$_$$_20.a($$_$$_20.a({}, a.validateMessages), e$validateMessages),
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
          s.current = $$_$$_20.a($$_$$_20.a({}, s.current), {}, $$_$$_29.a({}, e, t))
        }
        a.registerForm(e, t)
      },
      unregisterForm: function (e) {
        var t = $$_$$_20.a({}, s.current)
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
  var k = $$_$$_33_index.a(O, 1)[0]
  var S = k.getInternalHooks(RC_FORM_INTERNAL_HOOKS)
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
  S$setValidateMessages($$_$$_20.a($$_$$_20.a({}, C.validateMessages), e$validateMessages))
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
  var j = React.useRef()
  React.useEffect(function () {
    if (!function (e, t) {
      if (e === t) {
        return true
      }
      if (!e && t || e && !t) {
        return false
      }
      if (!e || !t || "object" !== $$_$$_108.a(e) || "object" !== $$_$$_108.a(t)) {
        return false
      }
      var n = Object.keys(e)
      var r = Object.keys(t)
      var i = new Set([].concat($$_$$_80_index.a(n), $$_$$_80_index.a(r)))
      return $$_$$_80_index.a(i).every(function (n) {
        var r = e[n]
        var i = t[n]
        return "function" === typeof r && "function" === typeof i || r === i
      })
    }(j.current || [], e$fields || [])) {
      k.setFields(e$fields || [])
    }
    j.current = e$fields
  }, [e$fields, k])
  var L = React.useMemo(function () {
    return $$_$$_20.a($$_$$_20.a({}, k), {}, {
      validateTrigger: g
    })
  }, [k, g])
  var U = React.createElement(E.Provider, {
    value: L
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
import /* [auto-meaningful-name] */$$_$$_1012 = require("../../1012")
import /* [auto-meaningful-name] */$$_$$_363_index = require("../../363/index")
import /* [auto-meaningful-name] */$$_611 = require("../611")
import /* [auto-meaningful-name] */$_910 = require("./910")
var Ee = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n(e) {
    var r
    $$_$$_95.a(this, n)
    r = t.call(this, e)
    $$_611.a(e.locale && e.locale.Modal)
    $$_$$_363_index.a("internalMark" === e._ANT_MARK__, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale")
    return r
  }
  $$_$$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      $$_611.a(this.props.locale && this.props.locale.Modal)
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      var /* [auto-meaningful-name] */this$props$locale = this.props.locale
      if (e.locale !== this$props$locale) {
        $$_611.a(this$props$locale && this$props$locale.Modal)
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      $$_611.a()
    }
  }, {
    key: "render",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$locale = this$props.locale
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var o = $$_$$_1012.a(function (e) {
        return $$_$$_19.a($$_$$_19.a({}, e), {
          exist: true
        })
      })(this$props$locale)
      return React.createElement($_910.a.Provider, {
        value: o
      }, this$props$children)
    }
  }])
  return n
}(React.Component)
Ee.defaultProps = {
  locale: {}
}
import /* [auto-meaningful-name] */$$_686 = require("../686")
import /* [auto-meaningful-name] */$$_$$_789 = require("../../789")
import /* [auto-meaningful-name] */$$_$$_514 = require("../../514")
import /* [auto-meaningful-name] */$$_$$_8 = require("../../8")
var Se = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_8)
import /* [auto-meaningful-name] */$$_$$_75_index = require("../../75/index")
var Be = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_75_index)
import /* [auto-meaningful-name] */$$_$$_1502_478 = require("../../1502/478")
import /* [auto-meaningful-name] */$$_$$_1502_428 = require("../../1502/428")
import /* [auto-meaningful-name] */$$_$$_1502_378 = require("../../1502/378")
function Re(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var Pe = function (e, t) {
  var n = {
    animationend: Re("Animation", "AnimationEnd"),
    transitionend: Re("Transition", "TransitionEnd")
  }
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition
    }
  }
  return n
}($$_$$_1502_378.a(), "undefined" !== typeof window ? window : {})
var Ne = {}
if ($$_$$_1502_378.a()) {
  var Me = document.createElement("div")
  Ne = Me.style
}
var je = {}
function Le(e) {
  if (je[e]) {
    return je[e]
  }
  var t = Pe[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ne) {
        je[e] = t[o]
        return je[e]
      }
    }
  }
  return ""
}
var Ue = Le("animationend")
var He = Le("transitionend")
var Ve = !(!Ue || !He)
var Ge = Ue || "animationend"
var ze = He || "transitionend"
function Qe(e, t) {
  return e ? "object" === $$_$$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function We(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_$$_33_index.a(n, 2)
  var o = r[0]
  var a = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [o, function (e) {
    if (!t.current) {
      a(e)
    }
  }]
}
var Ke = $$_$$_1502_378.a() ? React.useLayoutEffect : React.useEffect
import /* [auto-meaningful-name] */$$_$$_1502_228 = require("../../1502/228")
var Ye = ["prepare", "start", "active", "end"]
function qe(e) {
  return "active" === e || "end" === e
}
var $e = function (e, t) {
  var n = React.useState("none")
  var r = $$_$$_33_index.a(n, 2)
  var o = r[0]
  var a = r[1]
  var s = function () {
    var e = React.useRef(null)
    function t() {
      $$_$$_1502_228.a.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var o = $$_$$_1502_228.a(function () {
        if (i <= 1) {
          r({
            isCanceled: function () {
              return o !== e.current
            }
          })
        } else {
          n(r, i - 1)
        }
      })
      e.current = o
    }, t]
  }()
  var c = $$_$$_33_index.a(s, 2)
  var u = c[0]
  var l = c[1]
  Ke(function () {
    if ("none" !== o && "end" !== o) {
      var e = Ye.indexOf(o)
      var n = Ye[e + 1]
      var r = t(o)
      if (false === r) {
        a(n)
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              a(n)
            }
          }
          if (true === r) {
            t()
          } else {
            Promise.resolve(r).then(t)
          }
        })
      }
    }
  }, [e, o])
  React.useEffect(function () {
    return function () {
      l()
    }
  }, [])
  return [function () {
    a("prepare")
  }, o]
}
function Je(e, t, n, r) {
  var /* [auto-meaningful-name] */r$motionEnter = r.motionEnter
  var a = undefined === r$motionEnter || r$motionEnter
  var /* [auto-meaningful-name] */r$motionAppear = r.motionAppear
  var l = undefined === r$motionAppear || r$motionAppear
  var /* [auto-meaningful-name] */r$motionLeave = r.motionLeave
  var d = undefined === r$motionLeave || r$motionLeave
  var /* [auto-meaningful-name] */r$motionDeadline = r.motionDeadline
  var /* [auto-meaningful-name] */r$motionLeaveImmediately = r.motionLeaveImmediately
  var /* [auto-meaningful-name] */r$onAppearPrepare = r.onAppearPrepare
  var /* [auto-meaningful-name] */r$onEnterPrepare = r.onEnterPrepare
  var /* [auto-meaningful-name] */r$onLeavePrepare = r.onLeavePrepare
  var /* [auto-meaningful-name] */r$onAppearStart = r.onAppearStart
  var /* [auto-meaningful-name] */r$onEnterStart = r.onEnterStart
  var /* [auto-meaningful-name] */r$onLeaveStart = r.onLeaveStart
  var /* [auto-meaningful-name] */r$onAppearActive = r.onAppearActive
  var /* [auto-meaningful-name] */r$onEnterActive = r.onEnterActive
  var /* [auto-meaningful-name] */r$onLeaveActive = r.onLeaveActive
  var /* [auto-meaningful-name] */r$onAppearEnd = r.onAppearEnd
  var /* [auto-meaningful-name] */r$onEnterEnd = r.onEnterEnd
  var /* [auto-meaningful-name] */r$onLeaveEnd = r.onLeaveEnd
  var /* [auto-meaningful-name] */r$onVisibleChanged = r.onVisibleChanged
  var S = We()
  var T = $$_$$_33_index.a(S, 2)
  var B = T[0]
  var D = T[1]
  var I = We("none")
  var F = $$_$$_33_index.a(I, 2)
  var R = F[0]
  var P = F[1]
  var N = We(null)
  var M = $$_$$_33_index.a(N, 2)
  var j = M[0]
  var L = M[1]
  var U = React.useRef(false)
  var H = React.useRef(null)
  var V = React.useRef(false)
  var G = React.useRef(null)
  function z() {
    return n() || G.current
  }
  var Q = React.useRef(false)
  function W(e) {
    var t
    var n = z()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === R && Q.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === R && Q.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === R && Q.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || V.current)) {
        P("none")
        L(null)
      }
    }
  }
  var K = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(ze, r)
        e.removeEventListener(Ge, r)
      }
    }
    React.useEffect(function () {
      return function () {
        o(t.current)
      }
    }, [])
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(ze, r)
        e.addEventListener(Ge, r)
        t.current = e
      }
    }, o]
  }(W)
  var X = $$_$$_33_index.a(K, 1)[0]
  var Y = React.useMemo(function () {
    var e
    var t
    var n
    switch (R) {
      case "appear":
        e = {}
        $$_$$_29.a(e, "prepare", r$onAppearPrepare)
        $$_$$_29.a(e, "start", r$onAppearStart)
        $$_$$_29.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_$$_29.a(t, "prepare", r$onEnterPrepare)
        $$_$$_29.a(t, "start", r$onEnterStart)
        $$_$$_29.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_$$_29.a(n, "prepare", r$onLeavePrepare)
        $$_$$_29.a(n, "start", r$onLeaveStart)
        $$_$$_29.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [R])
  var q = $e(R, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */Y$prepare = Y.prepare
      return !!Y$prepare && Y$prepare(z())
    }
    var n
    if (Z in Y) {
      L((null === (n = Y[Z]) || undefined === n ? undefined : n.call(Y, z(), null)) || null)
    }
    if ("active" === Z) {
      X(z())
      if (r$motionDeadline > 0) {
        clearTimeout(H.current)
        H.current = setTimeout(function () {
          W({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var $ = $$_$$_33_index.a(q, 2)
  var J = $[0]
  var Z = $[1]
  var ee = qe(Z)
  Q.current = ee
  Ke(function () {
    D(t)
    var n
    var /* [auto-meaningful-name] */U$current = U.current
    U.current = true
    if (e) {
      if (!U$current && t && l) {
        n = "appear"
      }
      if (U$current && t && a) {
        n = "enter"
      }
      if (U$current && !t && d || !U$current && r$motionLeaveImmediately && !t && d) {
        n = "leave"
      }
      if (n) {
        P(n)
        J()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === R && !l || "enter" === R && !a || "leave" === R && !d) {
      P("none")
    }
  }, [l, a, d])
  React.useEffect(function () {
    return function () {
      clearTimeout(H.current)
      V.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== B && "none" === R) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(B)
      }
    }
  }, [B, R])
  var te = j
  if (Y.prepare && "start" === Z) {
    te = $$_$$_20.a({
      transition: "none"
    }, te)
  }
  return [R, Z, te, null !== B && undefined !== B ? B : t]
}
var Ze = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    $$_$$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_$$_96.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var et = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_$$_108.a(e)) {
    t = e.transitionSupport
  }
  var r = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var o = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var s = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var _ = n(e)
    var A = React.useRef()
    var g = React.useRef()
    var v = Je(_, o, function () {
      try {
        return $$_$$_1502_478.a(A.current || g.current)
      } catch (e) {
        return null
      }
    }, e)
    var m = $$_$$_33_index.a(v, 4)
    var y = m[0]
    var b = m[1]
    var w = m[2]
    var E = m[3]
    var x = React.useRef(E)
    if (E) {
      x.current = true
    }
    var C = React.useRef(t)
    C.current = t
    var O
    var k = React.useCallback(function (e) {
      A.current = e
      $$_$$_1502_428.b(C.current, e)
    }, [])
    var S = $$_$$_20.a($$_$$_20.a({}, e$eventProps), {}, {
      visible: o
    })
    if (e$children) {
      if ("none" !== y && n(e)) {
        var T
        var B
        if ("prepare" === b) {
          B = "prepare"
        } else {
          if (qe(b)) {
            B = "active"
          } else {
            if ("start" === b) {
              B = "start"
            }
          }
        }
        O = e$children($$_$$_20.a($$_$$_20.a({}, S), {}, {
          className: Se()(Qe(e$motionName, y), (T = {}, $$_$$_29.a(T, Qe(e$motionName, "".concat(y, "-").concat(B)), B), $$_$$_29.a(T, e$motionName, "string" === typeof e$motionName), T)),
          style: w
        }), k)
      } else {
        O = E ? e$children($$_$$_20.a({}, S), k) : !s && x.current ? e$children($$_$$_20.a($$_$$_20.a({}, S), {}, {
          className: e$leavedClassName
        }), k) : e$forceRender ? e$children($$_$$_20.a($$_$$_20.a({}, S), {}, {
          style: {
            display: "none"
          }
        }), k) : null
      }
    } else {
      O = null
    }
    return React.createElement(Ze, {
      ref: g
    }, O)
  })
  r.displayName = "CSSMotion"
  return r
}(Ve)
function tt(e) {
  var t
  t = e && "object" === $$_$$_108.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_$$_20.a($$_$$_20.a({}, t), {}, {
    key: String(t.key)
  })
}
function nt() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(tt)
}
function rt() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var o = nt(e)
  var a = nt(t)
  o.forEach(function (e) {
    for (var t = false, o = r; o < t$length; o += 1) {
      var s = a[o]
      if (s.key === e.key) {
        if (r < o) {
          n = n.concat(a.slice(r, o).map(function (e) {
            return $$_$$_20.a($$_$$_20.a({}, e), {}, {
              status: "add"
            })
          }))
          r = o
        }
        n.push($$_$$_20.a($$_$$_20.a({}, s), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_$$_20.a($$_$$_20.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(a.slice(r).map(function (e) {
      return $$_$$_20.a($$_$$_20.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var s = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    s[e$key] = (s[e$key] || 0) + 1
  })
  var c = Object.keys(s).filter(function (e) {
    return s[e] > 1
  })
  c.forEach(function (e) {
    (n = n.filter(function (t) {
      var /* [auto-meaningful-name] */t$key = t.key
      var /* [auto-meaningful-name] */t$status = t.status
      return t$key !== e || "remove" !== t$status
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep"
      }
    })
  })
  return n
}
var it = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
var ot = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : et
  var n = function (e) {
    $$_$$_120.a(o, e)
    var n = $$_$$_140.a(o)
    function o() {
      var e
      $$_$$_95.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_$$_20.a($$_$$_20.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_$$_96.a(o, [{
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$component = this$props.component
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
        var l = $$_$$_54.a(this$props, ["component", "children", "onVisibleChanged"])
        var f = this$props$component || React.Fragment
        var d = {}
        it.forEach(function (e) {
          d[e] = l[e]
          delete l[e]
        })
        delete l.keys
        return React.createElement(f, l, this$state$keyEntities.map(function (n) {
          var /* [auto-meaningful-name] */n$status = n.status
          var a = $$_$$_54.a(n, ["status"])
          var l = "add" === n$status || "keep" === n$status
          return React.createElement(t, $$_$$_19.a({}, d, {
            key: a.key,
            visible: l,
            eventProps: a,
            onVisibleChanged: function (t) {
              if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                this$props$onVisibleChanged(t, {
                  key: a.key
                })
              }
              if (!t) {
                e.removeKey(a.key)
              }
            }
          }), this$props$children)
        }))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var /* [auto-meaningful-name] */e$keys = e.keys
        var /* [auto-meaningful-name] */t$keyEntities = t.keyEntities
        var i = nt(e$keys)
        return {
          keyEntities: rt(t$keyEntities, i).filter(function (e) {
            var t = t$keyEntities.find(function (t) {
              var /* [auto-meaningful-name] */t$key = t.key
              return e.key === t$key
            })
            return !t || "removed" !== t.status || "remove" !== e.status
          })
        }
      }
    }])
    return o
  }(React.Component)
  n.defaultProps = {
    component: "div"
  }
  return n
}(Ve)
var at = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    var e
    $$_$$_95.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (e = t.call.apply(t, [this].concat(i))).closeTimer = null
    e.close = function (t) {
      if (t) {
        t.stopPropagation()
      }
      e.clearCloseTimer()
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$onClose = e$props.onClose
      var /* [auto-meaningful-name] */e$props$noticeKey = e$props.noticeKey
      if (e$props$onClose) {
        e$props$onClose(e$props$noticeKey)
      }
    }
    e.startCloseTimer = function () {
      if (e.props.duration) {
        e.closeTimer = window.setTimeout(function () {
          e.close()
        }, 1e3 * e.props.duration)
      }
    }
    e.clearCloseTimer = function () {
      if (e.closeTimer) {
        clearTimeout(e.closeTimer)
        e.closeTimer = null
      }
    }
    return e
  }
  $$_$$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      this.startCloseTimer()
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (this.props.duration !== e.duration || this.props.updateMark !== e.updateMark || this.props.visible !== e.visible && this.props.visible) {
        this.restartCloseTimer()
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.clearCloseTimer()
    }
  }, {
    key: "restartCloseTimer",
    value: function () {
      this.clearCloseTimer()
      this.startCloseTimer()
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$className = this$props.className
      var /* [auto-meaningful-name] */this$props$closable = this$props.closable
      var /* [auto-meaningful-name] */this$props$closeIcon = this$props.closeIcon
      var /* [auto-meaningful-name] */this$props$style = this$props.style
      var /* [auto-meaningful-name] */this$props$onClick = this$props.onClick
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var /* [auto-meaningful-name] */this$props$holder = this$props.holder
      var h = "".concat(this$props$prefixCls, "-notice")
      var p = Object.keys(this.props).reduce(function (t, n) {
        if (!("data-" !== n.substr(0, 5) && "aria-" !== n.substr(0, 5) && "role" !== n)) {
          t[n] = e.props[n]
        }
        return t
      }, {})
      var _ = React.createElement("div", $$_$$_19.a({
        className: Se()(h, this$props$className, $$_$$_29.a({}, "".concat(h, "-closable"), this$props$closable)),
        style: this$props$style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: this$props$onClick
      }, p), React.createElement("div", {
        className: "".concat(h, "-content")
      }, this$props$children), this$props$closable ? React.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(h, "-close")
      }, this$props$closeIcon || React.createElement("span", {
        className: "".concat(h, "-close-x")
      })) : null)
      return this$props$holder ? Be.a.createPortal(_, this$props$holder) : _
    }
  }])
  return n
}(React.Component)
function st(e) {
  var t = React.useRef({})
  var n = React.useState([])
  var o = $$_$$_33_index.a(n, 2)
  var a = o[0]
  var s = o[1]
  return [function (n) {
    var o = true
    e.add(n, function (e, n) {
      var /* [auto-meaningful-name] */n$key = n.key
      if (e && (!t.current[n$key] || o)) {
        var c = React.createElement(at, $$_$$_19.a({}, n, {
          holder: e
        }))
        t.current[n$key] = c
        s(function (e) {
          var t = e.findIndex(function (e) {
            return e.key === n.key
          })
          if (-1 === t) {
            return [].concat($$_$$_80_index.a(e), [c])
          }
          var r = $$_$$_80_index.a(e)
          r[t] = c
          return r
        })
      }
      o = false
    })
  }, React.createElement(React.Fragment, null, a)]
}
at.defaultProps = {
  onClose: function () {},
  duration: 1.5
}
var ct = 0
var ut = Date.now()
function lt() {
  var e = ct
  ct += 1
  return "rcNotification_".concat(ut, "_").concat(e)
}
var ft = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    var e
    $$_$$_95.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (e = t.call.apply(t, [this].concat(i))).state = {
      notices: []
    }
    e.hookRefs = new Map()
    e.add = function (t, n) {
      var r = t.key || lt()
      var i = $$_$$_20.a($$_$$_20.a({}, t), {}, {
        key: r
      })
      var /* [auto-meaningful-name] */e$props$maxCount = e.props.maxCount
      e.setState(function (e) {
        var /* [auto-meaningful-name] */e$notices = e.notices
        var a = e$notices.map(function (e) {
          return e.notice.key
        }).indexOf(r)
        var s = e$notices.concat()
        if (-1 !== a) {
          s.splice(a, 1, {
            notice: i,
            holderCallback: n
          })
        } else {
          if (e$props$maxCount && e$notices.length >= e$props$maxCount) {
            i.key = s[0].notice.key
            i.updateMark = lt()
            i.userPassKey = r
            s.shift()
          }
          s.push({
            notice: i,
            holderCallback: n
          })
        }
        return {
          notices: s
        }
      })
    }
    e.remove = function (t) {
      e.setState(function (e) {
        return {
          notices: e.notices.filter(function (e) {
            var /* [auto-meaningful-name] */e$notice = e.notice
            var /* [auto-meaningful-name] */e$notice$key = e$notice.key
            return (e$notice.userPassKey || e$notice$key) !== t
          })
        }
      })
    }
    e.noticePropsMap = {}
    return e
  }
  $$_$$_96.a(n, [{
    key: "getTransitionName",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$animation = this$props.animation
      var /* [auto-meaningful-name] */this$props$transitionName = this.props.transitionName
      if (!this$props$transitionName && this$props$animation) {
        this$props$transitionName = "".concat(this$props$prefixCls, "-").concat(this$props$animation)
      }
      return this$props$transitionName
    }
  }, {
    key: "render",
    value: function () {
      var e = this
      var /* [auto-meaningful-name] */this$state$notices = this.state.notices
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
      var /* [auto-meaningful-name] */this$props$className = this$props.className
      var /* [auto-meaningful-name] */this$props$closeIcon = this$props.closeIcon
      var /* [auto-meaningful-name] */this$props$style = this$props.style
      var l = []
      this$state$notices.forEach(function (n, r) {
        var /* [auto-meaningful-name] */n$notice = n.notice
        var /* [auto-meaningful-name] */n$holderCallback = n.holderCallback
        var c = r === this$state$notices.length - 1 ? n$notice.updateMark : undefined
        var /* [auto-meaningful-name] */n$notice$key = n$notice.key
        var /* [auto-meaningful-name] */n$notice$userPassKey = n$notice.userPassKey
        var h = $$_$$_20.a($$_$$_20.a($$_$$_20.a({
          prefixCls: this$props$prefixCls,
          closeIcon: this$props$closeIcon
        }, n$notice), n$notice.props), {}, {
          key: n$notice$key,
          noticeKey: n$notice$userPassKey || n$notice$key,
          updateMark: c,
          onClose: function (t) {
            var /* [auto-meaningful-name] */n$notice$onClose
            e.remove(t)
            if (!(null === (n$notice$onClose = n$notice.onClose) || undefined === n$notice$onClose)) {
              n$notice$onClose.call(n$notice)
            }
          },
          onClick: n$notice.onClick,
          children: n$notice.content
        })
        l.push(n$notice$key)
        e.noticePropsMap[n$notice$key] = {
          props: h,
          holderCallback: n$holderCallback
        }
      })
      return React.createElement("div", {
        className: Se()(this$props$prefixCls, this$props$className),
        style: this$props$style
      }, React.createElement(ot, {
        keys: l,
        motionName: this.getTransitionName(),
        onVisibleChanged: function (t, n) {
          var /* [auto-meaningful-name] */n$key = n.key
          if (!t) {
            delete e.noticePropsMap[n$key]
          }
        }
      }, function (t) {
        var /* [auto-meaningful-name] */t$key = t.key
        var /* [auto-meaningful-name] */t$className = t.className
        var /* [auto-meaningful-name] */t$style = t.style
        var /* [auto-meaningful-name] */t$visible = t.visible
        var l = e.noticePropsMap[t$key]
        var /* [auto-meaningful-name] */l$props = l.props
        var /* [auto-meaningful-name] */l$holderCallback = l.holderCallback
        return l$holderCallback ? React.createElement("div", {
          key: t$key,
          className: Se()(t$className, "".concat(this$props$prefixCls, "-hook-holder")),
          style: $$_$$_20.a({}, t$style),
          ref: function (t) {
            if ("undefined" !== typeof t$key) {
              if (t) {
                e.hookRefs.set(t$key, t)
                l$holderCallback(t, l$props)
              } else {
                e.hookRefs.delete(t$key)
              }
            }
          }
        }) : React.createElement(at, $$_$$_19.a({}, l$props, {
          className: Se()(t$className, null === l$props || undefined === l$props ? undefined : l$props.className),
          style: $$_$$_20.a($$_$$_20.a({}, t$style), null === l$props || undefined === l$props ? undefined : l$props.style),
          visible: t$visible
        }))
      }))
    }
  }])
  return n
}(React.Component)
ft.newInstance = undefined
ft.defaultProps = {
  prefixCls: "rc-notification",
  animation: "fade",
  style: {
    top: 65,
    left: "50%"
  }
}
ft.newInstance = function (e, t) {
  var n = e || {}
  var /* [auto-meaningful-name] */n$getContainer = n.getContainer
  var a = $$_$$_54.a(n, ["getContainer"])
  var c = document.createElement("div")
  if (n$getContainer) {
    n$getContainer().appendChild(c)
  } else {
    document.body.appendChild(c)
  }
  var u = false
  Be.a.render(React.createElement(ft, $$_$$_19.a({}, a, {
    ref: function (e) {
      if (!u) {
        u = true
        t({
          notice: function (t) {
            e.add(t)
          },
          removeNotice: function (t) {
            e.remove(t)
          },
          component: e,
          destroy: function () {
            Be.a.unmountComponentAtNode(c)
            if (c.parentNode) {
              c.parentNode.removeChild(c)
            }
          },
          useNotification: function () {
            return st(e)
          }
        })
      }
    }
  })), c)
}
var dt = ft
import /* [auto-meaningful-name] */$$_$$_606 = require("../../606")
var pt = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  name: "exclamation-circle",
  theme: "filled"
}
import /* [auto-meaningful-name] */$$_$$_223_index = require("../../223/index")
var At = function (e, t) {
  return React.createElement($$_$$_223_index.a, $$_$$_20.a($$_$$_20.a({}, e), {}, {
    ref: t,
    icon: pt
  }))
}
At.displayName = "ExclamationCircleFilled"
var gt = React.forwardRef(At)
import /* [auto-meaningful-name] */$$_$$_1022 = require("../../1022")
var mt = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      }
    }]
  },
  name: "check-circle",
  theme: "filled"
}
var yt = function (e, t) {
  return React.createElement($$_$$_223_index.a, $$_$$_20.a($$_$$_20.a({}, e), {}, {
    ref: t,
    icon: mt
  }))
}
yt.displayName = "CheckCircleFilled"
var bt
var wt = React.forwardRef(yt)
var Et = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  name: "info-circle",
  theme: "filled"
}
var xt = function (e, t) {
  return React.createElement($$_$$_223_index.a, $$_$$_20.a($$_$$_20.a({}, e), {}, {
    ref: t,
    icon: Et
  }))
}
xt.displayName = "InfoCircleFilled"
var /* [auto-meaningful-name] */e$top
var /* [auto-meaningful-name] */e$getContainer
var /* [auto-meaningful-name] */e$maxCount
var St = 3
var Tt = 1
var Bt = ""
var /* [auto-meaningful-name] */MoveUp = "move-up"
var It = false
var Ft = false
function Rt() {
  return Tt++
}
function Pt(e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var i = Cn()
  var /* [auto-meaningful-name] */i$getPrefixCls = i.getPrefixCls
  var /* [auto-meaningful-name] */i$getRootPrefixCls = i.getRootPrefixCls
  var /* [auto-meaningful-name] */i$getIconPrefixCls = i.getIconPrefixCls
  var c = i$getPrefixCls("message", e$prefixCls || Bt)
  var u = i$getRootPrefixCls(e.rootPrefixCls, c)
  var l = i$getIconPrefixCls()
  if (bt) {
    t({
      prefixCls: c,
      rootPrefixCls: u,
      iconPrefixCls: l,
      instance: bt
    })
  } else {
    var f = {
      prefixCls: c,
      transitionName: It ? MoveUp : "".concat(u, "-").concat(MoveUp),
      style: {
        top: e$top
      },
      getContainer: e$getContainer || e$getPopupContainer,
      maxCount: e$maxCount
    }
    dt.newInstance(f, function (e) {
      if (bt) {
        t({
          prefixCls: c,
          rootPrefixCls: u,
          iconPrefixCls: l,
          instance: bt
        })
      } else {
        bt = e
        t({
          prefixCls: c,
          rootPrefixCls: u,
          iconPrefixCls: l,
          instance: e
        })
      }
    })
  }
}
var Nt = {
  info: React.forwardRef(xt),
  success: wt,
  error: $$_$$_1022.a,
  warning: gt,
  loading: $$_$$_606.a
}
function Mt(e, t, n) {
  var r
  var o = undefined !== e.duration ? e.duration : St
  var a = Nt[e.type]
  var s = Se()("".concat(t, "-custom-content"), (r = {}, $$_$$_29.a(r, "".concat(t, "-").concat(e.type), e.type), $$_$$_29.a(r, "".concat(t, "-rtl"), true === Ft), r))
  return {
    key: e.key,
    duration: o,
    style: e.style || {},
    className: e.className,
    content: React.createElement(Sn, {
      iconPrefixCls: n
    }, React.createElement("div", {
      className: s
    }, e.icon || a && React.createElement(a, null), React.createElement("span", null, e.content))),
    onClose: e.onClose,
    onClick: e.onClick
  }
}
var jt
var Lt
var Ut = {
  open: function (e) {
    var t = e.key || Rt()
    var n = new Promise(function (n) {
      var i = function () {
        if ("function" === typeof e.onClose) {
          e.onClose()
        }
        return n(true)
      }
      Pt(e, function (n) {
        var /* [auto-meaningful-name] */n$prefixCls = n.prefixCls
        var /* [auto-meaningful-name] */n$iconPrefixCls = n.iconPrefixCls
        n.instance.notice(Mt($$_$$_19.a($$_$$_19.a({}, e), {
          key: t,
          onClose: i
        }), n$prefixCls, n$iconPrefixCls))
      })
    })
    var i = function () {
      if (bt) {
        bt.removeNotice(t)
      }
    }
    i.then = function (e, t) {
      return n.then(e, t)
    }
    i.promise = n
    return i
  },
  config: function (e) {
    if (undefined !== e.top) {
      e$top = e.top
      bt = null
    }
    if (undefined !== e.duration) {
      St = e.duration
    }
    if (undefined !== e.prefixCls) {
      Bt = e.prefixCls
    }
    if (undefined !== e.getContainer) {
      e$getContainer = e.getContainer
    }
    if (undefined !== e.transitionName) {
      MoveUp = e.transitionName
      bt = null
      It = true
    }
    if (undefined !== e.maxCount) {
      e$maxCount = e.maxCount
      bt = null
    }
    if (undefined !== e.rtl) {
      Ft = e.rtl
    }
  },
  destroy: function (e) {
    if (bt) {
      if (e) {
        (0, bt.removeNotice)(e)
      } else {
        var /* [auto-meaningful-name] */bt$destroy = bt.destroy
        bt$destroy()
        bt = null
      }
    }
  }
}
function Ht(e, t) {
  e[t] = function (n, i, o) {
    return function (e) {
      return "[object Object]" === Object.prototype.toString.call(e) && !!e.content
    }(n) ? e.open($$_$$_19.a($$_$$_19.a({}, n), {
      type: t
    })) : ("function" === typeof i && (o = i, i = undefined), e.open({
      content: n,
      duration: i,
      type: t,
      onClose: o
    }))
  }
}
["success", "info", "warning", "error", "loading"].forEach(function (e) {
  return Ht(Ut, e)
})
Ut.warn = Ut.warning
Ut.useMessage = (jt = Pt, Lt = Mt, function () {
  var /* [auto-meaningful-name] */n$getPrefixCls
  var /* [auto-meaningful-name] */n$getPopupContainer
  var n = null
  var o = st({
    add: function (e, t) {
      if (!(null === n || undefined === n)) {
        n.component.add(e, t)
      }
    }
  })
  var a = $$_$$_33_index.a(o, 2)
  var s = a[0]
  var c = a[1]
  var u = React.useRef({})
  u.current.open = function (i) {
    var /* [auto-meaningful-name] */i$prefixCls = i.prefixCls
    var a = n$getPrefixCls("message", i$prefixCls)
    var c = n$getPrefixCls()
    var u = i.key || Rt()
    var l = new Promise(function (e) {
      var o = function () {
        if ("function" === typeof i.onClose) {
          i.onClose()
        }
        return e(true)
      }
      jt($$_$$_19.a($$_$$_19.a({}, i), {
        prefixCls: a,
        rootPrefixCls: c,
        getPopupContainer: n$getPopupContainer
      }), function (e) {
        var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
        var /* [auto-meaningful-name] */e$instance = e.instance
        n = e$instance
        s(Lt($$_$$_19.a($$_$$_19.a({}, i), {
          key: u,
          onClose: o
        }), e$prefixCls))
      })
    })
    var f = function () {
      if (n) {
        n.removeNotice(u)
      }
    }
    f.then = function (e, t) {
      return l.then(e, t)
    }
    f.promise = l
    return f
  };
  ["success", "info", "warning", "error", "loading"].forEach(function (e) {
    return Ht(u.current, e)
  })
  return [u.current, React.createElement($$_$$_789.a, {
    key: "holder"
  }, function (n) {
    n$getPrefixCls = n.getPrefixCls
    n$getPopupContainer = n.getPopupContainer
    return c
  })]
})
var Vt = Ut
import /* [auto-meaningful-name] */$$_$$_791 = require("../../791")
import /* [auto-meaningful-name] */$$_1023 = require("../1023")
import /* [auto-meaningful-name] */$$_1025 = require("../1025")
import /* [auto-meaningful-name] */$$_914 = require("../914")
import /* [auto-meaningful-name] */$$_1024 = require("../1024")
var Xt
var Yt
var /* [auto-meaningful-name] */_e$maxCount
var $t = {}
var Jt = 4.5
var Zt = 24
var en = 24
var tn = ""
var /* [auto-meaningful-name] */TopRight = "topRight"
var rn = false
function on(e) {
  var t
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : Zt
  var r = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : en
  switch (e) {
    case "topLeft":
      t = {
        left: 0,
        top: n,
        bottom: "auto"
      }
      break
    case "topRight":
      t = {
        right: 0,
        top: n,
        bottom: "auto"
      }
      break
    case "bottomLeft":
      t = {
        left: 0,
        top: "auto",
        bottom: r
      }
      break
    default:
      t = {
        right: 0,
        top: "auto",
        bottom: r
      }
  }
  return t
}
function an(e, t) {
  var /* [auto-meaningful-name] */e$placement = e.placement
  var r = undefined === e$placement ? TopRight : e$placement
  var /* [auto-meaningful-name] */_e$top = e.top
  var /* [auto-meaningful-name] */e$bottom = e.bottom
  var /* [auto-meaningful-name] */_e$getContainer = e.getContainer
  var s = undefined === _e$getContainer ? Xt : _e$getContainer
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var l = Cn()
  var /* [auto-meaningful-name] */l$getPrefixCls = l.getPrefixCls
  var /* [auto-meaningful-name] */l$getIconPrefixCls = l.getIconPrefixCls
  var h = l$getPrefixCls("notification", e$prefixCls || tn)
  var p = l$getIconPrefixCls()
  var _ = "".concat(h, "-").concat(r)
  var A = $t[_]
  if (A) {
    Promise.resolve(A).then(function (e) {
      t({
        prefixCls: "".concat(h, "-notice"),
        iconPrefixCls: p,
        instance: e
      })
    })
  } else {
    var g = Se()("".concat(h, "-").concat(r), $$_$$_29.a({}, "".concat(h, "-rtl"), true === rn))
    $t[_] = new Promise(function (e) {
      dt.newInstance({
        prefixCls: h,
        className: g,
        style: on(r, _e$top, e$bottom),
        getContainer: s,
        maxCount: _e$maxCount
      }, function (n) {
        e(n)
        t({
          prefixCls: "".concat(h, "-notice"),
          iconPrefixCls: p,
          instance: n
        })
      })
    })
  }
}
var sn = {
  success: $$_1023.a,
  info: $$_1024.a,
  error: $$_1025.a,
  warning: $$_914.a
}
function cn(e, t, n) {
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$description = e.description
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$btn = e.btn
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$key = e.key
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var g = undefined === e$closeIcon ? Yt : e$closeIcon
  var v = undefined === e$duration ? Jt : e$duration
  var m = null
  if (e$icon) {
    m = React.createElement("span", {
      className: "".concat(t, "-icon")
    }, e.icon)
  } else {
    if (e$type) {
      m = React.createElement(sn[e$type] || null, {
        className: "".concat(t, "-icon ").concat(t, "-icon-").concat(e$type)
      })
    }
  }
  var y = React.createElement("span", {
    className: "".concat(t, "-close-x")
  }, g || React.createElement($$_$$_791.a, {
    className: "".concat(t, "-close-icon")
  }))
  var b = !e$description && m ? React.createElement("span", {
    className: "".concat(t, "-message-single-line-auto-margin")
  }) : null
  return {
    content: React.createElement(Sn, {
      iconPrefixCls: n
    }, React.createElement("div", {
      className: m ? "".concat(t, "-with-icon") : "",
      role: "alert"
    }, m, React.createElement("div", {
      className: "".concat(t, "-message")
    }, b, e$message), React.createElement("div", {
      className: "".concat(t, "-description")
    }, e$description), e$btn ? React.createElement("span", {
      className: "".concat(t, "-btn")
    }, e$btn) : null)),
    duration: v,
    closable: true,
    closeIcon: y,
    onClose: e$onClose,
    onClick: e$onClick,
    key: e$key,
    style: e$style || {},
    className: Se()(e$className, $$_$$_29.a({}, "".concat(t, "-").concat(e$type), !!e$type))
  }
}
var un = {
  open: function (e) {
    an(e, function (t) {
      var /* [auto-meaningful-name] */t$prefixCls = t.prefixCls
      var /* [auto-meaningful-name] */t$iconPrefixCls = t.iconPrefixCls
      t.instance.notice(cn(e, t$prefixCls, t$iconPrefixCls))
    })
  },
  close: function (e) {
    Object.keys($t).forEach(function (t) {
      return Promise.resolve($t[t]).then(function (t) {
        t.removeNotice(e)
      })
    })
  },
  config: function (e) {
    var /* [auto-meaningful-name] */e$duration = e.duration
    var /* [auto-meaningful-name] */e$placement = e.placement
    var /* [auto-meaningful-name] */e$bottom = e.bottom
    var /* [auto-meaningful-name] */_e$top2 = e.top
    var /* [auto-meaningful-name] */_e$getContainer2 = e.getContainer
    var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    if (undefined !== e$prefixCls) {
      tn = e$prefixCls
    }
    if (undefined !== e$duration) {
      Jt = e$duration
    }
    if (undefined !== e$placement) {
      TopRight = e$placement
    } else {
      if (e.rtl) {
        TopRight = "topLeft"
      }
    }
    if (undefined !== e$bottom) {
      en = e$bottom
    }
    if (undefined !== _e$top2) {
      Zt = _e$top2
    }
    if (undefined !== _e$getContainer2) {
      Xt = _e$getContainer2
    }
    if (undefined !== e$closeIcon) {
      Yt = e$closeIcon
    }
    if (undefined !== e.rtl) {
      rn = e.rtl
    }
    if (undefined !== e.maxCount) {
      _e$maxCount = e.maxCount
    }
  },
  destroy: function () {
    Object.keys($t).forEach(function (e) {
      Promise.resolve($t[e]).then(function (e) {
        e.destroy()
      })
      delete $t[e]
    })
  }
};
["success", "info", "warning", "error"].forEach(function (e) {
  un[e] = function (t) {
    return un.open($$_$$_19.a($$_$$_19.a({}, t), {
      type: e
    }))
  }
})
un.warn = un.warning
un.useNotification = function (e, t) {
  return function () {
    var /* [auto-meaningful-name] */e$getPrefixCls
    var o = null
    var a = st({
      add: function (e, t) {
        if (!(null === o || undefined === o)) {
          o.component.add(e, t)
        }
      }
    })
    var s = $$_$$_33_index.a(a, 2)
    var c = s[0]
    var u = s[1]
    var l = React.useRef({})
    l.current.open = function (i) {
      var /* [auto-meaningful-name] */i$prefixCls = i.prefixCls
      var s = e$getPrefixCls("notification", i$prefixCls)
      e($$_$$_19.a($$_$$_19.a({}, i), {
        prefixCls: s
      }), function (e) {
        var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
        var /* [auto-meaningful-name] */e$instance = e.instance
        o = e$instance
        c(t(i, e$prefixCls))
      })
    };
    ["success", "info", "warning", "error"].forEach(function (e) {
      l.current[e] = function (t) {
        return l.current.open($$_$$_19.a($$_$$_19.a({}, t), {
          type: e
        }))
      }
    })
    return [l.current, React.createElement($$_$$_789.a, {
      key: "holder"
    }, function (e) {
      e$getPrefixCls = e.getPrefixCls
      return u
    })]
  }
}(an, cn)
var ln = un
import /* [auto-meaningful-name] */$$_$$_1026_1011 = require("../../1026/1011")
import /* [auto-meaningful-name] */$_266 = require("./266")
import /* [auto-meaningful-name] */$_912 = require("./912")
import /* [auto-meaningful-name] */$_740 = require("./740")
import /* [auto-meaningful-name] */$_210 = require("./210")
var An = function () {
  function e(t, n) {
    var /* [auto-meaningful-name] */n$format
    if (undefined === t) {
      t = ""
    }
    if (undefined === n) {
      n = {}
    }
    if (t instanceof e) {
      return t
    }
    if ("number" === typeof t) {
      t = $_266.d(t)
    }
    this.originalInput = t
    var i = $_740.a(t)
    this.originalInput = t
    this.r = i.r
    this.g = i.g
    this.b = i.b
    this.a = i.a
    this.roundA = Math.round(100 * this.a) / 100
    this.format = null !== (n$format = n.format) && undefined !== n$format ? n$format : i.format
    this.gradientType = n.gradientType
    if (this.r < 1) {
      this.r = Math.round(this.r)
    }
    if (this.g < 1) {
      this.g = Math.round(this.g)
    }
    if (this.b < 1) {
      this.b = Math.round(this.b)
    }
    this.isValid = i.ok
  }
  e.prototype.isDark = function () {
    return this.getBrightness() < 128
  }
  e.prototype.isLight = function () {
    return !this.isDark()
  }
  e.prototype.getBrightness = function () {
    var e = this.toRgb()
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
  }
  e.prototype.getLuminance = function () {
    var e = this.toRgb()
    var t = e.r / 255
    var n = e.g / 255
    var r = e.b / 255
    return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
  }
  e.prototype.getAlpha = function () {
    return this.a
  }
  e.prototype.setAlpha = function (e) {
    this.a = $_210.b(e)
    this.roundA = Math.round(100 * this.a) / 100
    return this
  }
  e.prototype.toHsv = function () {
    var e = $_266.h(this.r, this.g, this.b)
    return {
      h: 360 * e.h,
      s: e.s,
      v: e.v,
      a: this.a
    }
  }
  e.prototype.toHsvString = function () {
    var e = $_266.h(this.r, this.g, this.b)
    var t = Math.round(360 * e.h)
    var n = Math.round(100 * e.s)
    var r = Math.round(100 * e.v)
    return 1 === this.a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this.roundA + ")"
  }
  e.prototype.toHsl = function () {
    var e = $_266.g(this.r, this.g, this.b)
    return {
      h: 360 * e.h,
      s: e.s,
      l: e.l,
      a: this.a
    }
  }
  e.prototype.toHslString = function () {
    var e = $_266.g(this.r, this.g, this.b)
    var t = Math.round(360 * e.h)
    var n = Math.round(100 * e.s)
    var r = Math.round(100 * e.l)
    return 1 === this.a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this.roundA + ")"
  }
  e.prototype.toHex = function (e) {
    if (undefined === e) {
      e = false
    }
    return $_266.f(this.r, this.g, this.b, e)
  }
  e.prototype.toHexString = function (e) {
    if (undefined === e) {
      e = false
    }
    return "#" + this.toHex(e)
  }
  e.prototype.toHex8 = function (e) {
    if (undefined === e) {
      e = false
    }
    return $_266.j(this.r, this.g, this.b, this.a, e)
  }
  e.prototype.toHex8String = function (e) {
    if (undefined === e) {
      e = false
    }
    return "#" + this.toHex8(e)
  }
  e.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    }
  }
  e.prototype.toRgbString = function () {
    var e = Math.round(this.r)
    var t = Math.round(this.g)
    var n = Math.round(this.b)
    return 1 === this.a ? "rgb(" + e + ", " + t + ", " + n + ")" : "rgba(" + e + ", " + t + ", " + n + ", " + this.roundA + ")"
  }
  e.prototype.toPercentageRgb = function () {
    var e = function (e) {
      return Math.round(100 * $_210.a(e, 255)) + "%"
    }
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    }
  }
  e.prototype.toPercentageRgbString = function () {
    var e = function (e) {
      return Math.round(100 * $_210.a(e, 255))
    }
    return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")"
  }
  e.prototype.toName = function () {
    if (0 === this.a) {
      return "transparent"
    }
    if (this.a < 1) {
      return false
    }
    for (var e = "#" + $_266.f(this.r, this.g, this.b, false), t = 0, n = Object.entries($_912.a); t < n.length; t++) {
      var r = n[t]
      var i = r[0]
      if (e === r[1]) {
        return i
      }
    }
    return false
  }
  e.prototype.toString = function (e) {
    var t = Boolean(e)
    e = null !== e && undefined !== e ? e : this.format
    var n = false
    var r = this.a < 1 && this.a >= 0
    return t || !r || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(true)), "hex4" === e && (n = this.toHex8String(true)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString()
  }
  e.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
  }
  e.prototype.clone = function () {
    return new e(this.toString())
  }
  e.prototype.lighten = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.l += t / 100
    n.l = $_210.c(n.l)
    return new e(n)
  }
  e.prototype.brighten = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toRgb()
    n.r = Math.max(0, Math.min(255, n.r - Math.round(-t / 100 * 255)))
    n.g = Math.max(0, Math.min(255, n.g - Math.round(-t / 100 * 255)))
    n.b = Math.max(0, Math.min(255, n.b - Math.round(-t / 100 * 255)))
    return new e(n)
  }
  e.prototype.darken = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.l -= t / 100
    n.l = $_210.c(n.l)
    return new e(n)
  }
  e.prototype.tint = function (e) {
    if (undefined === e) {
      e = 10
    }
    return this.mix("white", e)
  }
  e.prototype.shade = function (e) {
    if (undefined === e) {
      e = 10
    }
    return this.mix("black", e)
  }
  e.prototype.desaturate = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.s -= t / 100
    n.s = $_210.c(n.s)
    return new e(n)
  }
  e.prototype.saturate = function (t) {
    if (undefined === t) {
      t = 10
    }
    var n = this.toHsl()
    n.s += t / 100
    n.s = $_210.c(n.s)
    return new e(n)
  }
  e.prototype.greyscale = function () {
    return this.desaturate(100)
  }
  e.prototype.spin = function (t) {
    var n = this.toHsl()
    var r = (n.h + t) % 360
    n.h = r < 0 ? 360 + r : r
    return new e(n)
  }
  e.prototype.mix = function (t, n) {
    if (undefined === n) {
      n = 50
    }
    var r = this.toRgb()
    var i = new e(t).toRgb()
    var o = n / 100
    return new e({
      r: (i.r - r.r) * o + r.r,
      g: (i.g - r.g) * o + r.g,
      b: (i.b - r.b) * o + r.b,
      a: (i.a - r.a) * o + r.a
    })
  }
  e.prototype.analogous = function (t, n) {
    if (undefined === t) {
      t = 6
    }
    if (undefined === n) {
      n = 30
    }
    var r = this.toHsl()
    var i = 360 / n
    var o = [this]
    for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) {
      r.h = (r.h + i) % 360
      o.push(new e(r))
    }
    return o
  }
  e.prototype.complement = function () {
    var t = this.toHsl()
    t.h = (t.h + 180) % 360
    return new e(t)
  }
  e.prototype.monochromatic = function (t) {
    if (undefined === t) {
      t = 6
    }
    for (var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--;) {
      a.push(new e({
        h: r,
        s: i,
        v: o
      }))
      o = (o + s) % 1
    }
    return a
  }
  e.prototype.splitcomplement = function () {
    var t = this.toHsl()
    var n = t.h
    return [this, new e({
      h: (n + 72) % 360,
      s: t.s,
      l: t.l
    }), new e({
      h: (n + 216) % 360,
      s: t.s,
      l: t.l
    })]
  }
  e.prototype.onBackground = function (t) {
    var n = this.toRgb()
    var r = new e(t).toRgb()
    return new e({
      r: r.r + (n.r - r.r) * n.a,
      g: r.g + (n.g - r.g) * n.a,
      b: r.b + (n.b - r.b) * n.a
    })
  }
  e.prototype.triad = function () {
    return this.polyad(3)
  }
  e.prototype.tetrad = function () {
    return this.polyad(4)
  }
  e.prototype.polyad = function (t) {
    for (var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1; a < t; a++) {
      i.push(new e({
        h: (r + a * o) % 360,
        s: n.s,
        l: n.l
      }))
    }
    return i
  }
  e.prototype.equals = function (t) {
    return this.toRgbString() === new e(t).toRgbString()
  }
  return e
}()
import /* [auto-meaningful-name] */$$_$$_223_911 = require("../../223/911")
var vn = "-ant-".concat(Date.now(), "-").concat(Math.random())
var mn
var yn
import /* [auto-meaningful-name] */$$_605 = require("../605")
var wn = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "form"]
function En() {
  return mn || "ant"
}
function xn() {
  return yn || "anticon"
}
var Cn = function () {
  return {
    getPrefixCls: function (e, t) {
      return t || (e ? "".concat(En(), "-").concat(e) : En())
    },
    getIconPrefixCls: xn,
    getRootPrefixCls: function (e, t) {
      return e || mn || (t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : En())
    }
  }
}
var On = function (e) {
  var /* [auto-meaningful-name] */l$Form
  var /* [auto-meaningful-name] */$$_605$a$Form
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$csp = e.csp
  var /* [auto-meaningful-name] */e$autoInsertSpaceInButton = e.autoInsertSpaceInButton
  var /* [auto-meaningful-name] */e$form = e.form
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$componentSize = e.componentSize
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$space = e.space
  var /* [auto-meaningful-name] */e$virtual = e.virtual
  var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
  var /* [auto-meaningful-name] */e$legacyLocale = e.legacyLocale
  var /* [auto-meaningful-name] */e$parentContext = e.parentContext
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var m = React.useCallback(function (t, n) {
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    if (n) {
      return n
    }
    var i = e$prefixCls || e$parentContext.getPrefixCls("")
    return t ? "".concat(i, "-").concat(t) : i
  }, [e$parentContext.getPrefixCls, e.prefixCls])
  var y = $$_$$_19.a($$_$$_19.a({}, e$parentContext), {
    csp: e$csp,
    autoInsertSpaceInButton: e$autoInsertSpaceInButton,
    locale: e$locale || e$legacyLocale,
    direction: e$direction,
    space: e$space,
    virtual: e$virtual,
    dropdownMatchSelectWidth: e$dropdownMatchSelectWidth,
    getPrefixCls: m
  })
  wn.forEach(function (t) {
    var n = e[t]
    if (n) {
      y[t] = n
    }
  })
  var b = function (e, t, n) {
    var r = React.useRef({})
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e()
      r.current.condition = t
    }
    return r.current.value
  }(function () {
    return y
  }, y, function (e, t) {
    var n = Object.keys(e)
    var r = Object.keys(t)
    return n.length !== r.length || n.some(function (n) {
      return e[n] !== t[n]
    })
  })
  var w = React.useMemo(function () {
    return {
      prefixCls: e$iconPrefixCls,
      csp: e$csp
    }
  }, [e$iconPrefixCls])
  var E = e$children
  var x = {}
  if (e$locale) {
    x = (null === (l$Form = e$locale.Form) || undefined === l$Form ? undefined : l$Form.defaultValidateMessages) || (null === ($$_605$a$Form = $$_605.a.Form) || undefined === $$_605$a$Form ? undefined : $$_605$a$Form.defaultValidateMessages) || {}
  }
  if (e$form && e$form.validateMessages) {
    x = $$_$$_19.a($$_$$_19.a({}, x), e$form.validateMessages)
  }
  if (Object.keys(x).length > 0) {
    E = React.createElement(pe, {
      validateMessages: x
    }, e$children)
  }
  if (e$locale) {
    E = React.createElement(Ee, {
      locale: e$locale,
      _ANT_MARK__: "internalMark"
    }, E)
  }
  if (e$iconPrefixCls) {
    E = React.createElement($$_$$_223_780.a.Provider, {
      value: w
    }, E)
  }
  if (e$componentSize) {
    E = React.createElement($$_$$_514.a, {
      size: e$componentSize
    }, E)
  }
  return React.createElement($$_$$_789.b.Provider, {
    value: b
  }, E)
}
var kn = function (e) {
  React.useEffect(function () {
    if (e.direction) {
      Vt.config({
        rtl: "rtl" === e.direction
      })
      ln.config({
        rtl: "rtl" === e.direction
      })
    }
  }, [e.direction])
  return React.createElement($$_686.a, null, function (t, n, o) {
    return React.createElement($$_$$_789.a, null, function (t) {
      return React.createElement(On, $$_$$_19.a({
        parentContext: t,
        legacyLocale: o
      }, e))
    })
  })
}
kn.ConfigContext = $$_$$_789.b
kn.SizeContext = $$_$$_514.b
kn.config = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var /* [auto-meaningful-name] */e$theme = e.theme
  if (undefined !== e$prefixCls) {
    mn = e$prefixCls
  }
  if (undefined !== e$iconPrefixCls) {
    yn = e$iconPrefixCls
  }
  if (e$theme) {
    (function (e, t) {
      var n = {}
      var r = function (e, t) {
        var n = e.clone()
        return (n = (null === t || undefined === t ? undefined : t(n)) || n).toRgbString()
      }
      var i = function (e, t) {
        var i = new An(e)
        var o = $$_$$_223_911.a(i.toRgbString())
        n["".concat(t, "-color")] = r(i)
        n["".concat(t, "-color-disabled")] = o[1]
        n["".concat(t, "-color-hover")] = o[4]
        n["".concat(t, "-color-active")] = o[7]
        n["".concat(t, "-color-outline")] = i.clone().setAlpha(.2).toRgbString()
        n["".concat(t, "-color-deprecated-bg")] = o[1]
        n["".concat(t, "-color-deprecated-border")] = o[3]
      }
      if (t.primaryColor) {
        i(t.primaryColor, "primary")
        var o = new An(t.primaryColor)
        var a = $$_$$_223_911.a(o.toRgbString())
        a.forEach(function (e, t) {
          n["primary-".concat(t + 1)] = e
        })
        n["primary-color-deprecated-l-35"] = r(o, function (e) {
          return e.lighten(35)
        })
        n["primary-color-deprecated-l-20"] = r(o, function (e) {
          return e.lighten(20)
        })
        n["primary-color-deprecated-t-20"] = r(o, function (e) {
          return e.tint(20)
        })
        n["primary-color-deprecated-t-50"] = r(o, function (e) {
          return e.tint(50)
        })
        n["primary-color-deprecated-f-12"] = r(o, function (e) {
          return e.setAlpha(.12 * e.getAlpha())
        })
        var s = new An(a[0])
        n["primary-color-active-deprecated-f-30"] = r(s, function (e) {
          return e.setAlpha(.3 * e.getAlpha())
        })
        n["primary-color-active-deprecated-d-02"] = r(s, function (e) {
          return e.darken(2)
        })
      }
      if (t.successColor) {
        i(t.successColor, "success")
      }
      if (t.warningColor) {
        i(t.warningColor, "warning")
      }
      if (t.errorColor) {
        i(t.errorColor, "error")
      }
      if (t.infoColor) {
        i(t.infoColor, "info")
      }
      var c = Object.keys(n).map(function (t) {
        return "--".concat(e, "-").concat(t, ": ").concat(n[t], ";")
      })
      $$_$$_1026_1011.a("\n  :root {\n    ".concat(c.join("\n"), "\n  }\n  "), "".concat(vn, "-dynamic-theme"))
    })(En(), e$theme)
  }
}
var Sn = kn
export { kn as a }
export default kn
