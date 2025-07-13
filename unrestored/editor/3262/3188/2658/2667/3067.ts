"use strict";

import * as r from "../../../3190/624/index";
var i = require("../2623/index").assertExpressionStatement;
function a(e) {
  return {
    code: function (e) {
      return "/* @babel/template */;\n".concat(e);
    },
    validate: function () {},
    unwrap: function (t) {
      return e(t.program.body.slice(1));
    }
  };
}
var s = a(function (e) {
  return e.length > 1 ? e : e[0];
});
export { s as smart };
var o = a(function (e) {
  return e;
});
export { o as statements };
var l = a(function (e) {
  if (0 === e.length) {
    throw new Error("Found nothing to return.");
  }
  if (e.length > 1) {
    throw new Error("Found multiple statements but wanted one");
  }
  return e[0];
});
export { l as statement };
var u = {
  code: function (e) {
    return "(\n".concat(e, "\n)");
  },
  validate: function (e) {
    if (e.program.body.length > 1) {
      throw new Error("Found multiple statements but wanted one");
    }
    if (0 === u.unwrap(e).start) {
      throw new Error("Parse result included parens.");
    }
  },
  unwrap: function (e) {
    var t = e.program;
    var n = r(t.body, 1)[0];
    i(n);
    return n.expression;
  }
};
export { u as expression };
exports.program = {
  code: function (e) {
    return e;
  },
  validate: function () {},
  unwrap: function (e) {
    return e.program;
  }
};