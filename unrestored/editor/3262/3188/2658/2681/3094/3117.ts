"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.validatePluginObject = function (e) {
  var t = {
    type: "root",
    source: "plugin"
  };
  Object.keys(e).forEach(function (n) {
    var r = i[n];
    if (!r) {
      var a = new Error(".".concat(n, " is not a valid Plugin property"));
      throw a.code = "BABEL_UNKNOWN_PLUGIN_PROPERTY", a;
    }
    r({
      type: "option",
      name: n,
      parent: t
    }, e[n]);
  });
  return e;
};
var r = require("./2685/2801");
var i = {
  name: r.assertString,
  manipulateOptions: r.assertFunction,
  pre: r.assertFunction,
  post: r.assertFunction,
  inherits: r.assertFunction,
  visitor: function (e, t) {
    var n = (0, r.assertObject)(e, t);
    if (n && (Object.keys(n).forEach(function (e) {
      return function (e, t) {
        if (t && "object" === typeof t) {
          Object.keys(t).forEach(function (t) {
            if ("enter" !== t && "exit" !== t) {
              throw new Error('.visitor["'.concat(e, '"] may only have .enter and/or .exit handlers.'));
            }
          });
        } else if ("function" !== typeof t) {
          throw new Error('.visitor["'.concat(e, '"] must be a function'));
        }
        return t;
      }(e, n[e]);
    }), n.enter || n.exit)) {
      throw new Error("".concat((0, r.msg)(e), ' cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.'));
    }
    return n;
  },
  parserOverride: r.assertFunction,
  generatorOverride: r.assertFunction
};