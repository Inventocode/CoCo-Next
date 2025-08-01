"use strict";

var r = require("../../../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n, i) {
  return 1 === n.length && l(n[0]) && o(n[0].argument, {
    name: "arguments"
  }) ? i ? c(p(e, s("apply"), !1, !0), [t, n[0].argument], !1) : a(u(e, s("apply")), [t, n[0].argument]) : i ? c(p(e, s("call"), !1, !0), [t].concat(r(n)), !1) : a(u(e, s("call")), [t].concat(r(n)));
};
var i = require("../../../../2633/index");
var a = i.callExpression;
var s = i.identifier;
var o = i.isIdentifier;
var l = i.isSpreadElement;
var u = i.memberExpression;
var c = i.optionalCallExpression;
var p = i.optionalMemberExpression;