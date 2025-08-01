"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./2342/444");
function i(e) {
  return "function" === typeof e ? e.name : "symbol" === typeof e ? e.toString() : e;
}
function o(e) {
  if (e.name) {
    return e.name;
  }
  var t = e.toString();
  var n = t.match(/^function\s*([^\s(]+)/);
  return n ? n[1] : "Anonymous function: " + t;
}
exports.getServiceIdentifierAsString = i;
exports.listRegisteredBindingsForServiceIdentifier = function (e, t, n) {
  var r = "";
  var i = n(e, t);
  if (0 !== i.length) {
    r = "\nRegistered bindings:";
    i.forEach(function (e) {
      var t = "Object";
      if (null !== e.implementationType) {
        t = o(e.implementationType);
      }
      r = r + "\n " + t;
      if (e.constraint.metaData) {
        r = r + " - " + e.constraint.metaData;
      }
    });
  }
  return r;
};
exports.circularDependencyToException = function e(t) {
  t.childRequests.forEach(function (t) {
    if (function e(t, n) {
      return null !== t.parentRequest && (t.parentRequest.serviceIdentifier === n || e(t.parentRequest, n));
    }(t, t.serviceIdentifier)) {
      var n = function (e) {
        return function e(t, n) {
          if (void 0 === n) {
            n = [];
          }
          var r = i(t.serviceIdentifier);
          n.push(r);
          return null !== t.parentRequest ? e(t.parentRequest, n) : n;
        }(e).reverse().join(" --\x3e ");
      }(t);
      throw new Error(r.CIRCULAR_DEPENDENCY + " " + n);
    }
    e(t);
  });
};
exports.listMetadataForTarget = function (e, t) {
  if (t.isTagged() || t.isNamed()) {
    var n = "";
    var r = t.getNamedTag();
    var i = t.getCustomTags();
    if (null !== r) {
      n += r.toString() + "\n";
    }
    if (null !== i) {
      i.forEach(function (e) {
        n += e.toString() + "\n";
      });
    }
    return " " + e + "\n " + e + " - " + n;
  }
  return " " + e;
};
exports.getFunctionName = o;