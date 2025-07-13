"use strict";

import * as r from "../../../../../3262/3188/2658/220";
import * as i from "../../../../../3262/3188/2658/230";
import * as o from "../../../../../3262/2873/2721/805/index";
import * as a from "./2272";
import * as s from "../../../31/index";
function c(e) {
  switch (e.type) {
    case "identifier":
      return [e.value];
    case "matches":
      var t = e.selectors.map(c);
      return t.every(Boolean) ? s.union.apply(s, o(t)) : null;
    case "compound":
      var n = e.selectors.map(c).filter(function (e) {
        return e;
      });
      return n.length ? s.intersection.apply(s, o(n)) : null;
    case "child":
    case "descendant":
    case "sibling":
    case "adjacent":
      return c(e.right);
    default:
      return null;
  }
}
function u(e) {
  switch (e.type) {
    case "child":
    case "descendant":
    case "sibling":
    case "adjacent":
      return u(e.left) + u(e.right);
    case "compound":
    case "not":
    case "matches":
      return e.selectors.reduce(function (e, t) {
        return e + u(t);
      }, 0);
    case "attribute":
    case "field":
    case "nth-child":
    case "nth-last-child":
      return 1;
    default:
      return 0;
  }
}
function l(e) {
  switch (e.type) {
    case "child":
    case "descendant":
    case "sibling":
    case "adjacent":
      return l(e.left) + l(e.right);
    case "compound":
    case "not":
    case "matches":
      return e.selectors.reduce(function (e, t) {
        return e + l(t);
      }, 0);
    case "identifier":
      return 1;
    default:
      return 0;
  }
}
function f(e, t) {
  return e.attributeCount - t.attributeCount || e.identifierCount - t.identifierCount || (e.rawSelector <= t.rawSelector ? -1 : 1);
}
var h = s.memoize(function (e) {
  var t = function (e) {
    try {
      return a.parse(e.replace(/:exit$/, ""));
    } catch (t) {
      if ("number" === typeof t.offset) {
        throw new SyntaxError('Syntax error in selector "'.concat(e, '" at position ').concat(t.offset, ": ").concat(t.message));
      }
      throw t;
    }
  }(e);
  return {
    rawSelector: e,
    isExit: e.endsWith(":exit"),
    parsedSelector: t,
    listenerTypes: c(t),
    attributeCount: u(t),
    identifierCount: l(t)
  };
});
var d = function () {
  function e(t) {
    var n = this;
    r(this, e);
    this.emitter = t;
    this.currentAncestry = [];
    this.enterSelectorsByNodeType = new Map();
    this.exitSelectorsByNodeType = new Map();
    this.anyTypeEnterSelectors = [];
    this.anyTypeExitSelectors = [];
    t.eventNames().forEach(function (e) {
      var t = h(e);
      if (t.listenerTypes) {
        var r = t.isExit ? n.exitSelectorsByNodeType : n.enterSelectorsByNodeType;
        t.listenerTypes.forEach(function (e) {
          if (!r.has(e)) {
            r.set(e, []);
          }
          r.get(e).push(t);
        });
      } else {
        (t.isExit ? n.anyTypeExitSelectors : n.anyTypeEnterSelectors).push(t);
      }
    });
    this.anyTypeEnterSelectors.sort(f);
    this.anyTypeExitSelectors.sort(f);
    this.enterSelectorsByNodeType.forEach(function (e) {
      return e.sort(f);
    });
    this.exitSelectorsByNodeType.forEach(function (e) {
      return e.sort(f);
    });
  }
  i(e, [{
    key: "applySelector",
    value: function (e, t) {
      if (a.matches(e, t.parsedSelector, this.currentAncestry)) {
        this.emitter.emit(t.rawSelector, e);
      }
    }
  }, {
    key: "applySelectors",
    value: function (e, t) {
      for (var n = (t ? this.exitSelectorsByNodeType : this.enterSelectorsByNodeType).get(e.type) || [], r = t ? this.anyTypeExitSelectors : this.anyTypeEnterSelectors, i = 0, o = 0; i < n.length || o < r.length;) {
        if (i >= n.length || o < r.length && f(r[o], n[i]) < 0) {
          this.applySelector(e, r[o++]);
        } else {
          this.applySelector(e, n[i++]);
        }
      }
    }
  }, {
    key: "enterNode",
    value: function (e) {
      if (e.parent) {
        this.currentAncestry.unshift(e.parent);
      }
      this.applySelectors(e, !1);
    }
  }, {
    key: "leaveNode",
    value: function (e) {
      this.applySelectors(e, !0);
      this.currentAncestry.shift();
    }
  }]);
  return e;
}();
module.exports = d;