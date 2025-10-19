/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2280
 */

(function () {
  var t;
  var r;
  var i;
  var o;
  var a;
  var s;
  var c;
  var u = {}.toString;
  function l(e, t) {
    if (!(e instanceof Object)) {
      return false;
    }
    switch (t.structure) {
      case "fields":
        return function (e, t) {
          var n;
          var r;
          var i;
          var o;
          var a;
          var s;
          var c;
          for (i in n = {}, r = 0, e) {
            n[i] = true;
            r++;
          }
          for (a in o = 0, s = t.of) {
            c = s[a];
            if (!d(e[a], c)) {
              return false;
            }
            if (n[a]) {
              o++;
            }
          }
          return t.subset || r === o;
        }(e, t);
      case "array":
        return function (e, t) {
          return i(function (e) {
            return d(e, t.of);
          }, e);
        }(e, t);
      case "tuple":
        return function (e, t) {
          var n;
          var r;
          var i;
          var o;
          var a;
          for (n = 0, r = 0, o = (i = t.of).length; r < o; ++r) {
            a = i[r];
            if (!d(e[n], a)) {
              return false;
            }
            n++;
          }
          return e.length <= n;
        }(e, t);
    }
  }
  function f(e, t) {
    var n;
    var r;
    var i;
    var o;
    n = t.type;
    r = t.structure;
    if (n) {
      return "*" === n || ((i = c[n] || a[n]) ? i.typeOf === u.call(e).slice(8, -1) && i.validate(e) : n === u.call(e).slice(8, -1) && (!r || l(e, t)));
    }
    if (r) {
      return (!(o = s[r]) || o === u.call(e).slice(8, -1)) && l(e, t);
    }
    throw new Error("No type defined. Input: " + e + ".");
  }
  function d(e, t) {
    if ("Array" !== u.call(t).slice(8, -1)) {
      throw new Error("Types must be in an array. Input: " + e + ".");
    }
    return r(function (t) {
      return f(e, t);
    }, t);
  }
  t = require("../2272/1347/index");
  r = t.any;
  i = t.all;
  o = t.isItNaN;
  a = {
    Number: {
      typeOf: "Number",
      validate: function (e) {
        return !o(e);
      }
    },
    NaN: {
      typeOf: "Number",
      validate: o
    },
    Int: {
      typeOf: "Number",
      validate: function (e) {
        return !o(e) && e % 1 === 0;
      }
    },
    Float: {
      typeOf: "Number",
      validate: function (e) {
        return !o(e);
      }
    },
    Date: {
      typeOf: "Date",
      validate: function (e) {
        return !o(e.getTime());
      }
    }
  };
  s = {
    array: "Array",
    tuple: "Array"
  };
  module.exports = function (e, t, n) {
    if (null == n) {
      n = {};
    }
    c = n.customTypes || {};
    return d(t, e);
  };
}).call(this);