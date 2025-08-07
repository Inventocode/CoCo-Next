"use strict";

var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
  if (undefined === r) {
    r = n;
  }
  Object.defineProperty(e, r, {
    enumerable: true,
    get: function () {
      return t[n];
    }
  });
} : function (e, t, n, r) {
  if (undefined === r) {
    r = n;
  }
  e[r] = t[n];
});
var i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
  Object.defineProperty(e, "default", {
    enumerable: true,
    value: t
  });
} : function (e, t) {
  e.default = t;
});
var o = this && this.__importStar || function (e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (null != e) {
    for (var n in e) if (Object.hasOwnProperty.call(e, n)) {
      r(t, e, n);
    }
  }
  i(t, e);
  return t;
};
var a = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.remove = exports.insert = undefined;
var s = require("./1124");
var c = o(require("./1125"));
var u = a(require("./2291"));
var l = {
  create: function (e) {
    return e;
  },
  toString: function (e) {
    return e;
  },
  builder: function (e) {
    if ("string" !== typeof e) {
      throw Error("Invalid document snapshot: " + e);
    }
    var t = [];
    return {
      skip: function (n) {
        var r = s.uniToStrPos(e, n);
        if (r > e.length) {
          throw Error("The op is too long for this document");
        }
        t.push(e.slice(0, r));
        e = e.slice(r);
      },
      append: function (e) {
        t.push(e);
      },
      del: function (t) {
        e = e.slice(s.uniToStrPos(e, t));
      },
      build: function () {
        return t.join("") + e;
      }
    };
  },
  slice: c.uniSlice
};
var f = c.default(l);
var d = Object.assign(Object.assign({}, f), {
  api: u.default
});
exports.type = d;
exports.insert = function (e, t) {
  return 0 === t.length ? [] : 0 === e ? [t] : [e, t];
};
exports.remove = function (e, t) {
  return 0 === c.dlen(t) ? [] : 0 === e ? [{
    d: t
  }] : [e, {
    d: t
  }];
};
var h = require("./1125");
Object.defineProperty(exports, "makeType", {
  enumerable: true,
  get: function () {
    return h.default;
  }
});