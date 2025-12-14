/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2613
 */

"use strict"

var r = this && this.__extends || function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n]
      }
    })(t, n)
  }
  return function (t, n) {
    function r() {
      this.constructor = t
    }
    e(t, n)
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var o = this && this.__assign || function () {
  return (o = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
var i = this && this.__spreadArrays || function () {
  for (var e = 0, t = 0, /* [auto-meaningful-name] */arguments$length = arguments.length; t < arguments$length; t++) {
    e += arguments[t].length
  }
  var r = Array(e)
  var o = 0
  for (t = 0; t < arguments$length; t++) {
    for (var i = arguments[t], a = 0, /* [auto-meaningful-name] */i$length = i.length; a < i$length; a++, o++) {
      r[o] = i[a]
    }
  }
  return r
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
var a = require("react")
var s = require("react")
var c = require("../../50/index")
var l = require("../1468/884")
var u = require("../1468/index")
var d = require("../1469")
var p = require("./2614/index")
var f = require("./2617")
var h = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.props = t
    n.changeDetectionService = new d.ChangeDetectionService()
    n.api = null
    n.portals = []
    n.hasPendingPortalUpdate = false
    n.destroyed = false
    n.SYNCHRONOUS_CHANGE_PROPERTIES = ["context"]
    return n
  }
  r(t, e)
  t.prototype.render = function () {
    var e = this
    return a.createElement("div", {
      style: this.createStyleForDiv(),
      className: this.props.className,
      ref: function (t) {
        e.eGridDiv = t
      }
    }, this.portals)
  }
  t.prototype.createStyleForDiv = function () {
    return o({
      height: "100%"
    }, this.props.containerStyle || {})
  }
  t.prototype.componentDidMount = function () {
    var e = this.props.modules || []
    var t = {
      providedBeanInstances: {
        agGridReact: this,
        frameworkComponentWrapper: new g(this)
      },
      modules: e
    }
    var n = this.props.gridOptions || {}
    var /* [auto-meaningful-name] */this$props$children = this.props.children
    if (u.AgGridColumn.hasChildColumns(this$props$children)) {
      n.columnDefs = u.AgGridColumn.mapChildColumnDefs(this$props$children)
    }
    this.gridOptions = l.ComponentUtil.copyAttributesToGridOptions(n, this.props)
    new l.Grid(this.eGridDiv, this.gridOptions, t)
    this.api = this.gridOptions.api
    this.columnApi = this.gridOptions.columnApi
  }
  t.prototype.waitForInstance = function (e, n, r) {
    var o = this
    if (undefined === r) {
      r = Date.now()
    }
    if (this.destroyed) {
      n(null)
    } else if (e.rendered()) {
      n(e)
    } else {
      if (Date.now() - r >= this.props.maxComponentCreationTimeMs && !this.hasPendingPortalUpdate) {
        return e.isNullValue() ? void n(e) : void console.error("AG Grid: React Component '" + e.getReactComponentName() + "' not created within " + t.MAX_COMPONENT_CREATION_TIME_IN_MS + "ms")
      }
      window.setTimeout(function () {
        o.waitForInstance(e, n, r)
      })
    }
  }
  t.prototype.mountReactPortal = function (e, t, n) {
    this.portals = i(this.portals, [e])
    this.waitForInstance(t, n)
    this.batchUpdate()
  }
  t.prototype.updateReactPortal = function (e, t) {
    this.portals[this.portals.indexOf(e)] = t
    this.batchUpdate()
  }
  t.prototype.batchUpdate = function () {
    var e = this
    if (!this.hasPendingPortalUpdate) {
      setTimeout(function () {
        if (e.api) {
          e.forceUpdate(function () {
            e.hasPendingPortalUpdate = false
          })
        }
      })
      this.hasPendingPortalUpdate = true
    }
  }
  t.prototype.destroyPortal = function (e) {
    this.portals = this.portals.filter(function (t) {
      return t !== e
    })
    this.batchUpdate()
  }
  t.prototype.getStrategyTypeForProp = function (e) {
    if ("rowData" === e) {
      if (this.props.rowDataChangeDetectionStrategy) {
        return this.props.rowDataChangeDetectionStrategy
      }
      if (this.isImmutableDataActive()) {
        return d.ChangeDetectionStrategyType.IdentityCheck
      }
    }
    return d.ChangeDetectionStrategyType.DeepValueCheck
  }
  t.prototype.isImmutableDataActive = function () {
    return this.props.deltaRowDataMode || this.props.immutableData || this.props.gridOptions && (this.props.gridOptions.deltaRowDataMode || this.props.gridOptions.immutableData)
  }
  t.prototype.shouldComponentUpdate = function (e) {
    this.processPropsChanges(this.props, e)
    return false
  }
  t.prototype.componentDidUpdate = function (e) {
    this.processPropsChanges(e, this.props)
  }
  t.prototype.processPropsChanges = function (e, t) {
    var n = {}
    this.extractGridPropertyChanges(e, t, n)
    this.extractDeclarativeColDefChanges(t, n)
    this.processSynchronousChanges(n)
    this.processAsynchronousChanges(n)
  }
  t.prototype.extractDeclarativeColDefChanges = function (e, t) {
    if (!(this.props.gridOptions && this.props.gridOptions.columnDefs || this.props.columnDefs)) {
      var n = !!e.debug
      var /* [auto-meaningful-name] */this$gridOptions$columnDefs = this.gridOptions.columnDefs
      if (u.AgGridColumn.hasChildColumns(e.children)) {
        var o = this.changeDetectionService.getStrategy(this.getStrategyTypeForProp("columnDefs"))
        var i = u.AgGridColumn.mapChildColumnDefs(e.children)
        if (!o.areEqual(this$gridOptions$columnDefs, i)) {
          if (n) {
            console.log("agGridReact: colDefs definitions changed")
          }
          t.columnDefs = {
            previousValue: this$gridOptions$columnDefs,
            currentValue: i
          }
        }
      } else if (this$gridOptions$columnDefs && this$gridOptions$columnDefs.length > 0) {
        t.columnDefs = {
          previousValue: this$gridOptions$columnDefs,
          currentValue: []
        }
      }
    }
  }
  t.prototype.extractGridPropertyChanges = function (e, t, n) {
    var r = this
    var o = !!t.debug
    Object.keys(t).forEach(function (i) {
      if (l._.includes(l.ComponentUtil.ALL_PROPERTIES, i)) {
        if (!r.changeDetectionService.getStrategy(r.getStrategyTypeForProp(i)).areEqual(e[i], t[i])) {
          if (o) {
            console.log("agGridReact: [" + i + "] property changed")
          }
          n[i] = {
            previousValue: e[i],
            currentValue: t[i]
          }
        }
      }
    })
    l.ComponentUtil.getEventCallbacks().forEach(function (i) {
      if (r.props[i] !== t[i]) {
        if (o) {
          console.log("agGridReact: [" + i + "] event callback changed")
        }
        n[i] = {
          previousValue: e[i],
          currentValue: t[i]
        }
      }
    })
  }
  t.prototype.componentWillUnmount = function () {
    if (this.api) {
      this.api.destroy()
      this.api = null
    }
    this.destroyed = true
  }
  t.prototype.isDisableStaticMarkup = function () {
    return this.props.disableStaticMarkup
  }
  t.prototype.isLegacyComponentRendering = function () {
    return this.props.legacyComponentRendering
  }
  t.prototype.processSynchronousChanges = function (e) {
    var t = o({}, e)
    if (Object.keys(t).length > 0) {
      var n = {}
      this.SYNCHRONOUS_CHANGE_PROPERTIES.forEach(function (e) {
        if (t[e]) {
          n[e] = t[e]
          delete t.context
        }
      })
      if (Object.keys(n).length > 0 && this.api) {
        l.ComponentUtil.processOnChange(n, this.gridOptions, this.api, this.columnApi)
      }
    }
    return t
  }
  t.prototype.processAsynchronousChanges = function (e) {
    var t = this
    if (Object.keys(e).length > 0) {
      window.setTimeout(function () {
        if (t.api) {
          l.ComponentUtil.processOnChange(e, t.gridOptions, t.api, t.columnApi)
        }
      })
    }
  }
  t.MAX_COMPONENT_CREATION_TIME_IN_MS = 1e3
  t.defaultProps = {
    legacyComponentRendering: false,
    disableStaticMarkup: false,
    maxComponentCreationTimeMs: t.MAX_COMPONENT_CREATION_TIME_IN_MS
  }
  return t
}(s.Component)
function m(e, t) {
  e.forEach(function (e) {
    h[e] = t
  })
}
exports.AgGridReact = h
h.propTypes = {
  gridOptions: c.object
}
m(l.ComponentUtil.getEventCallbacks(), c.func)
m(l.ComponentUtil.BOOLEAN_PROPERTIES, c.bool)
m(l.ComponentUtil.STRING_PROPERTIES, c.string)
m(l.ComponentUtil.OBJECT_PROPERTIES, c.object)
m(l.ComponentUtil.ARRAY_PROPERTIES, c.array)
m(l.ComponentUtil.NUMBER_PROPERTIES, c.number)
m(l.ComponentUtil.FUNCTION_PROPERTIES, c.func)
var g = function (e) {
  function t(t) {
    var n = e.call(this) || this
    n.agGridReact = t
    return n
  }
  r(t, e)
  t.prototype.createWrapper = function (e, t) {
    return this.agGridReact.isLegacyComponentRendering() ? new p.LegacyReactComponent(e, this.agGridReact, t) : new f.NewReactComponent(e, this.agGridReact, t)
  }
  return t
}(l.BaseComponentWrapper)
