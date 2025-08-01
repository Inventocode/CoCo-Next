(function () {
  var t;
  var r;
  var i;
  var o;
  var a;
  t = require("./2272/index");
  r = require("./2278");
  i = require("./1348/index").parseType;
  o = function (e, n, i) {
    if (null == i) {
      i = {};
    }
    if (null == i.explicit) {
      i.explicit = !1;
    }
    if (null == i.customTypes) {
      i.customTypes = {};
    }
    return r(t(e, n, i), e, i);
  };
  a = function (e, t, n) {
    return o(i(e), t, n);
  };
  module.exports = {
    VERSION: "0.3.0",
    parse: a,
    parsedTypeParse: o
  };
}).call(this);