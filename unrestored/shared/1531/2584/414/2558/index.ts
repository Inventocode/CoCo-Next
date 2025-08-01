"use strict";

var r = this && this.__extends || function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var o = this && this.__assign || function () {
  return (o = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o];
      }
    }
    return e;
  }).apply(this, arguments);
};
var i = this && this.__spreadArrays || function () {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
    e += arguments[t].length;
  }
  var r = Array(e);
  var o = 0;
  for (t = 0; t < n; t++) {
    for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) {
      r[o] = i[a];
    }
  }
  return r;
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = require("../../0/index");
var s = require("../../0/index");
var c = require("../../50/index");
var l = require("./872");
var u = require("../1427");
var d = require("../1428");
var p = require("./2559");
var f = require("./2562/index");
var h = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.props = t;
    n.changeDetectionService = new d.ChangeDetectionService();
    n.api = null;
    n.portals = [];
    n.hasPendingPortalUpdate = !1;
    n.destroyed = !1;
    n.SYNCHRONOUS_CHANGE_PROPERTIES = ["context"];
    return n;
  }
  r(t, e);
  t.prototype.render = function () {
    var e = this;
    return a.createElement("div", {
      style: this.createStyleForDiv(),
      className: this.props.className,
      ref: function (t) {
        e.eGridDiv = t;
      }
    }, this.portals);
  };
  t.prototype.createStyleForDiv = function () {
    return o({
      height: "100%"
    }, this.props.containerStyle || {});
  };
  t.prototype.componentDidMount = function () {
    var e = this.props.modules || [];
    var t = {
      providedBeanInstances: {
        agGridReact: this,
        frameworkComponentWrapper: new g(this)
      },
      modules: e
    };
    var n = this.props.gridOptions || {};
    var r = this.props.children;
    if (u.AgGridColumn.hasChildColumns(r)) {
      n.columnDefs = u.AgGridColumn.mapChildColumnDefs(r);
    }
    this.gridOptions = l.ComponentUtil.copyAttributesToGridOptions(n, this.props);
    new l.Grid(this.eGridDiv, this.gridOptions, t);
    this.api = this.gridOptions.api;
    this.columnApi = this.gridOptions.columnApi;
  };
  t.prototype.waitForInstance = function (e, n, r) {
    var o = this;
    if (void 0 === r && (r = Date.now()), this.destroyed) {
      n(null);
    } else if (e.rendered()) {
      n(e);
    } else {
      if (Date.now() - r >= this.props.maxComponentCreationTimeMs && !this.hasPendingPortalUpdate) {
        return e.isNullValue() ? void n(e) : void console.error("AG Grid: React Component '" + e.getReactComponentName() + "' not created within " + t.MAX_COMPONENT_CREATION_TIME_IN_MS + "ms");
      }
      window.setTimeout(function () {
        o.waitForInstance(e, n, r);
      });
    }
  };
  t.prototype.mountReactPortal = function (e, t, n) {
    this.portals = i(this.portals, [e]);
    this.waitForInstance(t, n);
    this.batchUpdate();
  };
  t.prototype.updateReactPortal = function (e, t) {
    this.portals[this.portals.indexOf(e)] = t;
    this.batchUpdate();
  };
  t.prototype.batchUpdate = function () {
    var e = this;
    if (!this.hasPendingPortalUpdate) {
      setTimeout(function () {
        if (e.api) {
          e.forceUpdate(function () {
            e.hasPendingPortalUpdate = !1;
          });
        }
      });
      this.hasPendingPortalUpdate = !0;
    }
  };
  t.prototype.destroyPortal = function (e) {
    this.portals = this.portals.filter(function (t) {
      return t !== e;
    });
    this.batchUpdate();
  };
  t.prototype.getStrategyTypeForProp = function (e) {
    if ("rowData" === e) {
      if (this.props.rowDataChangeDetectionStrategy) {
        return this.props.rowDataChangeDetectionStrategy;
      }
      if (this.isImmutableDataActive()) {
        return d.ChangeDetectionStrategyType.IdentityCheck;
      }
    }
    return d.ChangeDetectionStrategyType.DeepValueCheck;
  };
  t.prototype.isImmutableDataActive = function () {
    return this.props.deltaRowDataMode || this.props.immutableData || this.props.gridOptions && (this.props.gridOptions.deltaRowDataMode || this.props.gridOptions.immutableData);
  };
  t.prototype.shouldComponentUpdate = function (e) {
    this.processPropsChanges(this.props, e);
    return !1;
  };
  t.prototype.componentDidUpdate = function (e) {
    this.processPropsChanges(e, this.props);
  };
  t.prototype.processPropsChanges = function (e, t) {
    var n = {};
    this.extractGridPropertyChanges(e, t, n);
    this.extractDeclarativeColDefChanges(t, n);
    this.processSynchronousChanges(n);
    this.processAsynchronousChanges(n);
  };
  t.prototype.extractDeclarativeColDefChanges = function (e, t) {
    if (!(this.props.gridOptions && this.props.gridOptions.columnDefs || this.props.columnDefs)) {
      var n = !!e.debug;
      var r = this.gridOptions.columnDefs;
      if (u.AgGridColumn.hasChildColumns(e.children)) {
        var o = this.changeDetectionService.getStrategy(this.getStrategyTypeForProp("columnDefs"));
        var i = u.AgGridColumn.mapChildColumnDefs(e.children);
        if (!o.areEqual(r, i)) {
          if (n) {
            console.log("agGridReact: colDefs definitions changed");
          }
          t.columnDefs = {
            previousValue: r,
            currentValue: i
          };
        }
      } else if (r && r.length > 0) {
        t.columnDefs = {
          previousValue: r,
          currentValue: []
        };
      }
    }
  };
  t.prototype.extractGridPropertyChanges = function (e, t, n) {
    var r = this;
    var o = !!t.debug;
    Object.keys(t).forEach(function (i) {
      if (l._.includes(l.ComponentUtil.ALL_PROPERTIES, i)) {
        if (!r.changeDetectionService.getStrategy(r.getStrategyTypeForProp(i)).areEqual(e[i], t[i])) {
          if (o) {
            console.log("agGridReact: [" + i + "] property changed");
          }
          n[i] = {
            previousValue: e[i],
            currentValue: t[i]
          };
        }
      }
    });
    l.ComponentUtil.getEventCallbacks().forEach(function (i) {
      if (r.props[i] !== t[i]) {
        if (o) {
          console.log("agGridReact: [" + i + "] event callback changed");
        }
        n[i] = {
          previousValue: e[i],
          currentValue: t[i]
        };
      }
    });
  };
  t.prototype.componentWillUnmount = function () {
    if (this.api) {
      this.api.destroy();
      this.api = null;
    }
    this.destroyed = !0;
  };
  t.prototype.isDisableStaticMarkup = function () {
    return this.props.disableStaticMarkup;
  };
  t.prototype.isLegacyComponentRendering = function () {
    return this.props.legacyComponentRendering;
  };
  t.prototype.processSynchronousChanges = function (e) {
    var t = o({}, e);
    if (Object.keys(t).length > 0) {
      var n = {};
      this.SYNCHRONOUS_CHANGE_PROPERTIES.forEach(function (e) {
        if (t[e]) {
          n[e] = t[e];
          delete t.context;
        }
      });
      if (Object.keys(n).length > 0 && this.api) {
        l.ComponentUtil.processOnChange(n, this.gridOptions, this.api, this.columnApi);
      }
    }
    return t;
  };
  t.prototype.processAsynchronousChanges = function (e) {
    var t = this;
    if (Object.keys(e).length > 0) {
      window.setTimeout(function () {
        if (t.api) {
          l.ComponentUtil.processOnChange(e, t.gridOptions, t.api, t.columnApi);
        }
      });
    }
  };
  t.MAX_COMPONENT_CREATION_TIME_IN_MS = 1e3;
  t.defaultProps = {
    legacyComponentRendering: !1,
    disableStaticMarkup: !1,
    maxComponentCreationTimeMs: t.MAX_COMPONENT_CREATION_TIME_IN_MS
  };
  return t;
}(s.Component);
function m(e, t) {
  e.forEach(function (e) {
    h[e] = t;
  });
}
exports.AgGridReact = h;
h.propTypes = {
  gridOptions: c.object
};
m(l.ComponentUtil.getEventCallbacks(), c.func);
m(l.ComponentUtil.BOOLEAN_PROPERTIES, c.bool);
m(l.ComponentUtil.STRING_PROPERTIES, c.string);
m(l.ComponentUtil.OBJECT_PROPERTIES, c.object);
m(l.ComponentUtil.ARRAY_PROPERTIES, c.array);
m(l.ComponentUtil.NUMBER_PROPERTIES, c.number);
m(l.ComponentUtil.FUNCTION_PROPERTIES, c.func);
var g = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    n.agGridReact = t;
    return n;
  }
  r(t, e);
  t.prototype.createWrapper = function (e, t) {
    return this.agGridReact.isLegacyComponentRendering() ? new p.LegacyReactComponent(e, this.agGridReact, t) : new f.NewReactComponent(e, this.agGridReact, t);
  };
  return t;
}(l.BaseComponentWrapper);