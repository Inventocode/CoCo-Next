"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = u;
var r = require("./2636/index");
var a = require("./2628");
var i = Function.call.bind(Object.prototype.hasOwnProperty);
function o(e, t, n) {
  return e && "string" === typeof e.type ? u(e, t, n) : e;
}
function s(e, t, n) {
  return Array.isArray(e) ? e.map(function (e) {
    return o(e, t, n);
  }) : o(e, t, n);
}
function u(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e) {
    return e;
  }
  var o = e.type;
  var u = {
    type: e.type
  };
  if ((0, a.isIdentifier)(e)) {
    u.name = e.name;
    if (i(e, "optional") && "boolean" === typeof e.optional) {
      u.optional = e.optional;
    }
    if (i(e, "typeAnnotation")) {
      u.typeAnnotation = t ? s(e.typeAnnotation, !0, n) : e.typeAnnotation;
    }
  } else {
    if (!i(r.NODE_FIELDS, o)) {
      throw new Error('Unknown node type: "'.concat(o, '"'));
    }
    for (var p = 0, f = Object.keys(r.NODE_FIELDS[o]); p < f.length; p++) {
      var d = f[p];
      if (i(e, d)) {
        u[d] = t ? (0, a.isFile)(e) && "comments" === d ? l(e.comments, t, n) : s(e[d], !0, n) : e[d];
      }
    }
  }
  if (i(e, "loc")) {
    u.loc = n ? null : e.loc;
  }
  if (i(e, "leadingComments")) {
    u.leadingComments = l(e.leadingComments, t, n);
  }
  if (i(e, "innerComments")) {
    u.innerComments = l(e.innerComments, t, n);
  }
  if (i(e, "trailingComments")) {
    u.trailingComments = l(e.trailingComments, t, n);
  }
  if (i(e, "extra")) {
    u.extra = Object.assign({}, e.extra);
  }
  return u;
}
function l(e, t, n) {
  return e && t ? e.map(function (e) {
    var t = e.type;
    var r = e.value;
    var a = e.loc;
    return n ? {
      type: t,
      value: r,
      loc: null
    } : {
      type: t,
      value: r,
      loc: a
    };
  }) : e;
}