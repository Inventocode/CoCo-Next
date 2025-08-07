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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("react");
var i = require("../../75/index");
var a = require("../1427/872");
var s = require("./2562/1429/index");
var c = require("./2562/1430");
var l = require("./2562/1431/index");
var u = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.staticMarkup = null;
    t.staticRenderTime = 0;
    return t;
  }
  r(t, e);
  t.prototype.init = function (e) {
    var t = this;
    this.eParentElement = this.createParentElement(e);
    this.renderStaticMarkup(e);
    return new a.AgPromise(function (n) {
      return t.createReactComponent(e, n);
    });
  };
  t.prototype.createReactComponent = function (e, t) {
    var n = this;
    if (!this.isStatelessComponent()) {
      e.ref = function (e) {
        n.componentInstance = e;
        n.addParentContainerStyleAndClasses();
        n.removeStaticMarkup();
      };
    }
    var r = o.createElement(this.reactComponent, e);
    var a = i.createPortal(r, this.eParentElement, c.default());
    this.portal = a;
    this.parentComponent.mountReactPortal(a, this, function (e) {
      t(e);
      if (n.isStatelessComponent()) {
        if (n.isSlowRenderer()) {
          n.removeStaticMarkup();
        }
        setTimeout(function () {
          n.removeStaticMarkup();
        });
      }
    });
  };
  t.prototype.fallbackMethodAvailable = function (e) {
    return false;
  };
  t.prototype.fallbackMethod = function (e, t) {};
  t.prototype.isSlowRenderer = function () {
    return this.staticRenderTime >= t.SLOW_RENDERERING_THRESHOLD;
  };
  t.prototype.isNullValue = function () {
    return "" === this.staticMarkup;
  };
  t.prototype.renderStaticMarkup = function (e) {
    if (!(this.parentComponent.isDisableStaticMarkup() || this.componentType.isCellRenderer && !this.componentType.isCellRenderer())) {
      var t = console.error;
      var n = o.createElement(this.reactComponent, e);
      try {
        console.error = function () {};
        var r = Date.now();
        var i = l.renderToStaticMarkup(n);
        this.staticRenderTime = Date.now() - r;
        console.error = t;
        if ("" === i) {
          this.staticMarkup = i;
        } else {
          if (i) {
            this.staticMarkup = document.createElement("span");
            this.staticMarkup.innerHTML = i;
            this.eParentElement.appendChild(this.staticMarkup);
          }
        }
      } catch (a) {} finally {
        console.error = t;
      }
    }
  };
  t.prototype.removeStaticMarkup = function () {
    if (!this.parentComponent.isDisableStaticMarkup() && this.componentType.isCellRenderer() && this.staticMarkup) {
      if (this.staticMarkup.remove) {
        this.staticMarkup.remove();
        this.staticMarkup = null;
      } else {
        if (this.eParentElement.removeChild) {
          this.eParentElement.removeChild(this.staticMarkup);
          this.staticMarkup = null;
        }
      }
    }
  };
  t.prototype.rendered = function () {
    return this.isNullValue() || !!this.staticMarkup || this.isStatelessComponent() && this.statelessComponentRendered() || !(this.isStatelessComponent() || !this.getFrameworkComponentInstance());
  };
  t.SLOW_RENDERERING_THRESHOLD = 3;
  return t;
}(s.ReactComponent);
exports.LegacyReactComponent = u;