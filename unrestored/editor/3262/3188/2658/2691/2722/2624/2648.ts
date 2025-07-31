"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = l;
var r = require("./2633/index");
var i = require("./2625");
var a = Function.call.bind(Object.prototype.hasOwnProperty);
function s(e, t, n) {
  return e && "string" === typeof e.type ? l(e, t, n) : e;
}
function o(e, t, n) {
  return Array.isArray(e) ? e.map(function (e) {
    return s(e, t, n);
  }) : s(e, t, n);
}
function l(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e) {
    return e;
  }
  var s = e.type;
  var l = {
    type: e.type
  };
  if ((0, i.isIdentifier)(e)) {
    l.name = e.name;
    if (a(e, "optional") && "boolean" === typeof e.optional) {
      l.optional = e.optional;
    }
    if (a(e, "typeAnnotation")) {
      l.typeAnnotation = t ? o(e.typeAnnotation, !0, n) : e.typeAnnotation;
    }
  } else {
    if (!a(r.NODE_FIELDS, s)) {
      throw new Error('Unknown node type: "'.concat(s, '"'));
    }
    for (var c = 0, p = Object.keys(r.NODE_FIELDS[s]); c < p.length; c++) {
      var f = p[c];
      if (a(e, f)) {
        l[f] = t ? (0, i.isFile)(e) && "comments" === f ? u(e.comments, t, n) : o(e[f], !0, n) : e[f];
      }
    }
  }
  if (a(e, "loc")) {
    l.loc = n ? null : e.loc;
  }
  if (a(e, "leadingComments")) {
    l.leadingComments = u(e.leadingComments, t, n);
  }
  if (a(e, "innerComments")) {
    l.innerComments = u(e.innerComments, t, n);
  }
  if (a(e, "trailingComments")) {
    l.trailingComments = u(e.trailingComments, t, n);
  }
  if (a(e, "extra")) {
    l.extra = Object.assign({}, e.extra);
  }
  return l;
}
function u(e, t, n) {
  return e && t ? e.map(function (e) {
    var t = e.type;
    var r = e.value;
    var i = e.loc;
    return n ? {
      type: t,
      value: r,
      loc: null
    } : {
      type: t,
      value: r,
      loc: i
    };
  }) : e;
}