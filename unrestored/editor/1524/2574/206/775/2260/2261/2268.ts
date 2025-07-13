(function () {
  var t;
  var r;
  var i = {}.toString;
  function o(e, t, n) {
    var r;
    var o;
    return "Array" !== i.call(e).slice(8, -1) ? {
      type: "Nothing"
    } : (r = t.of, {
      type: "Just",
      value: function () {
        var t;
        var i;
        var a;
        var s = [];
        for (t = 0, a = (i = e).length; t < a; ++t) {
          o = i[t];
          s.push(c(o, r, n));
        }
        return s;
      }()
    });
  }
  function a(e, t, n) {
    var r;
    var o;
    var a;
    return "Object" !== i.call(e).slice(8, -1) ? {
      type: "Nothing"
    } : (r = t.of, {
      type: "Just",
      value: function () {
        var t;
        var i = {};
        for (o in t = e) {
          a = t[o];
          i[c(o, [{
            type: "String"
          }], n)] = c(a, r[o] || [{
            type: "*"
          }], n);
        }
        return i;
      }()
    });
  }
  function s(e, t, n) {
    var s;
    var u;
    var l;
    var f;
    if (s = t.type, u = t.structure, s) {
      if (!(l = (null != (f = n.customTypes[s]) ? f.cast : void 0) || r[s])) {
        throw new Error("Type not defined: " + s + ".");
      }
      return l(e, n, c);
    }
    switch (u) {
      case "array":
        return o(e, t, n);
      case "tuple":
        return function (e, t, n) {
          var r;
          var o;
          var a;
          var s;
          var u;
          var l;
          var f;
          if ("Array" !== i.call(e).slice(8, -1)) {
            return {
              type: "Nothing"
            };
          }
          for (r = [], o = 0, a = 0, u = (s = t.of).length; a < u; ++a) {
            l = s[a];
            f = c(e[o], l, n);
            if ("Undefined" !== i.call(f).slice(8, -1)) {
              r.push(f);
            }
            o++;
          }
          return e.length <= o ? {
            type: "Just",
            value: r
          } : {
            type: "Nothing"
          };
        }(e, t, n);
      case "fields":
        return a(e, t, n);
    }
  }
  function c(e, n, r) {
    var i;
    var o;
    var a;
    var c;
    var u;
    var l;
    for (i = 0, o = n.length; i < o; ++i) {
      if (u = (c = s(e, a = n[i], r)).type, l = c.value, "Nothing" !== u && t([a], l, {
        customTypes: r.customTypes
      })) {
        return l;
      }
    }
    throw new Error("Value " + JSON.stringify(e) + " does not type check against " + JSON.stringify(n) + ".");
  }
  t = require("./1341/index").parsedTypeCheck;
  r = {
    "*": function (e, t) {
      switch (i.call(e).slice(8, -1)) {
        case "Array":
          return s(e, {
            type: "Array"
          }, t);
        case "Object":
          return s(e, {
            type: "Object"
          }, t);
        default:
          return {
            type: "Just",
            value: c(e, [{
              type: "Undefined"
            }, {
              type: "Null"
            }, {
              type: "NaN"
            }, {
              type: "Boolean"
            }, {
              type: "Number"
            }, {
              type: "Date"
            }, {
              type: "RegExp"
            }, {
              type: "Array"
            }, {
              type: "Object"
            }, {
              type: "String"
            }], (t.explicit = !0, t))
          };
      }
    },
    Undefined: function (e) {
      return "undefined" === e || void 0 === e ? {
        type: "Just",
        value: void 0
      } : {
        type: "Nothing"
      };
    },
    Null: function (e) {
      return "null" === e ? {
        type: "Just",
        value: null
      } : {
        type: "Nothing"
      };
    },
    NaN: function (e) {
      function t(t) {
        return e.apply(this, arguments);
      }
      t.toString = function () {
        return e.toString();
      };
      return t;
    }(function (e) {
      return "NaN" === e ? {
        type: "Just",
        value: NaN
      } : {
        type: "Nothing"
      };
    }),
    Boolean: function (e) {
      return "true" === e ? {
        type: "Just",
        value: !0
      } : "false" === e ? {
        type: "Just",
        value: !1
      } : {
        type: "Nothing"
      };
    },
    Number: function (e) {
      return {
        type: "Just",
        value: +e
      };
    },
    Int: function (e) {
      return {
        type: "Just",
        value: +e
      };
    },
    Float: function (e) {
      return {
        type: "Just",
        value: +e
      };
    },
    Date: function (e) {
      function t(t, n) {
        return e.apply(this, arguments);
      }
      t.toString = function () {
        return e.toString();
      };
      return t;
    }(function (e, t) {
      var n;
      return (n = /^\#([\s\S]*)\#$/.exec(e)) ? {
        type: "Just",
        value: new Date(+n[1] || n[1])
      } : t.explicit ? {
        type: "Nothing"
      } : {
        type: "Just",
        value: new Date(+e || e)
      };
    }),
    RegExp: function (e) {
      function t(t, n) {
        return e.apply(this, arguments);
      }
      t.toString = function () {
        return e.toString();
      };
      return t;
    }(function (e, t) {
      var n;
      return (n = /^\/([\s\S]*)\/([gimy]*)$/.exec(e)) ? {
        type: "Just",
        value: new RegExp(n[1], n[2])
      } : t.explicit ? {
        type: "Nothing"
      } : {
        type: "Just",
        value: new RegExp(e)
      };
    }),
    Array: function (e, t) {
      return o(e, {
        of: [{
          type: "*"
        }]
      }, t);
    },
    Object: function (e, t) {
      return a(e, {
        of: {}
      }, t);
    },
    String: function (e) {
      var t;
      return "String" !== i.call(e).slice(8, -1) ? {
        type: "Nothing"
      } : (t = e.match(/^'([\s\S]*)'$/)) ? {
        type: "Just",
        value: t[1].replace(/\\'/g, "'")
      } : (t = e.match(/^"([\s\S]*)"$/)) ? {
        type: "Just",
        value: t[1].replace(/\\"/g, '"')
      } : {
        type: "Just",
        value: e
      };
    }
  };
  module.exports = c;
}).call(this);