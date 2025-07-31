"use strict";

function r() {
  var e = require("../../2803/2793/2794/index");
  r = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.access = s;
exports.assertArray = u;
exports.assertAssumptions = function (e, t) {
  if (void 0 === t) {
    return;
  }
  if ("object" !== typeof t || null === t) {
    throw new Error("".concat(a(e), " must be an object or undefined."));
  }
  var n = e;
  do {
    n = n.parent;
  } while ("root" !== n.type);
  for (var r = "preset" === n.source, o = 0, l = Object.keys(t); o < l.length; o++) {
    var u = l[o];
    var c = s(e, u);
    if (!i.assumptionsNames.has(u)) {
      throw new Error("".concat(a(c), " is not a supported assumption."));
    }
    if ("boolean" !== typeof t[u]) {
      throw new Error("".concat(a(c), " must be a boolean."));
    }
    if (r && !1 === t[u]) {
      throw new Error("".concat(a(c), " cannot be set to 'false' inside presets."));
    }
  }
  return t;
};
exports.assertBabelrcSearch = function (e, t) {
  if (void 0 === t || "boolean" === typeof t) {
    return t;
  }
  if (Array.isArray(t)) {
    t.forEach(function (t, n) {
      if (!c(t)) {
        throw new Error("".concat(a(s(e, n)), " must be a string/Function/RegExp."));
      }
    });
  } else if (!c(t)) {
    throw new Error("".concat(a(e), " must be a undefined, a boolean, a string/Function/RegExp ") + "or an array of those, got ".concat(JSON.stringify(t)));
  }
  return t;
};
exports.assertBoolean = o;
exports.assertCallerMetadata = function (e, t) {
  var n = l(e, t);
  if (n) {
    if ("string" !== typeof n.name) {
      throw new Error("".concat(a(e), ' set but does not contain "name" property string'));
    }
    for (var r = 0, i = Object.keys(n); r < i.length; r++) {
      var o = i[r];
      var u = s(e, o);
      var c = n[o];
      if (null != c && "boolean" !== typeof c && "string" !== typeof c && "number" !== typeof c) {
        throw new Error("".concat(a(u), " must be null, undefined, a boolean, a string, or a number."));
      }
    }
  }
  return t;
};
exports.assertCompact = function (e, t) {
  if (void 0 !== t && "boolean" !== typeof t && "auto" !== t) {
    throw new Error("".concat(a(e), ' must be a boolean, "auto", or undefined'));
  }
  return t;
};
exports.assertConfigApplicableTest = function (e, t) {
  if (void 0 === t) {
    return t;
  }
  if (Array.isArray(t)) {
    t.forEach(function (t, n) {
      if (!c(t)) {
        throw new Error("".concat(a(s(e, n)), " must be a string/Function/RegExp."));
      }
    });
  } else if (!c(t)) {
    throw new Error("".concat(a(e), " must be a string/Function/RegExp, or an array of those"));
  }
  return t;
};
exports.assertConfigFileSearch = function (e, t) {
  if (void 0 !== t && "boolean" !== typeof t && "string" !== typeof t) {
    throw new Error("".concat(a(e), " must be a undefined, a boolean, a string, ") + "got ".concat(JSON.stringify(t)));
  }
  return t;
};
exports.assertFunction = function (e, t) {
  if (void 0 !== t && "function" !== typeof t) {
    throw new Error("".concat(a(e), " must be a function, or undefined"));
  }
  return t;
};
exports.assertIgnoreList = function (e, t) {
  var n = u(e, t);
  if (n) {
    n.forEach(function (t, n) {
      return function (e, t) {
        if ("string" !== typeof t && "function" !== typeof t && !(t instanceof RegExp)) {
          throw new Error("".concat(a(e), " must be an array of string/Function/RegExp values, or undefined"));
        }
        return t;
      }(s(e, n), t);
    });
  }
  return n;
};
exports.assertInputSourceMap = function (e, t) {
  if (void 0 !== t && "boolean" !== typeof t && ("object" !== typeof t || !t)) {
    throw new Error("".concat(a(e), " must be a boolean, object, or undefined"));
  }
  return t;
};
exports.assertObject = l;
exports.assertPluginList = function (e, t) {
  var n = u(e, t);
  if (n) {
    n.forEach(function (t, n) {
      return function (e, t) {
        if (Array.isArray(t)) {
          if (0 === t.length) {
            throw new Error("".concat(a(e), " must include an object"));
          }
          if (t.length > 3) {
            throw new Error("".concat(a(e), " may only be a two-tuple or three-tuple"));
          }
          if (p(s(e, 0), t[0]), t.length > 1) {
            var n = t[1];
            if (void 0 !== n && !1 !== n && ("object" !== typeof n || Array.isArray(n) || null === n)) {
              throw new Error("".concat(a(s(e, 1)), " must be an object, false, or undefined"));
            }
          }
          if (3 === t.length) {
            var r = t[2];
            if (void 0 !== r && "string" !== typeof r) {
              throw new Error("".concat(a(s(e, 2)), " must be a string, or undefined"));
            }
          }
        } else {
          p(e, t);
        }
        return t;
      }(s(e, n), t);
    });
  }
  return n;
};
exports.assertRootMode = function (e, t) {
  if (void 0 !== t && "root" !== t && "upward" !== t && "upward-optional" !== t) {
    throw new Error("".concat(a(e), ' must be a "root", "upward", "upward-optional" or undefined'));
  }
  return t;
};
exports.assertSourceMaps = function (e, t) {
  if (void 0 !== t && "boolean" !== typeof t && "inline" !== t && "both" !== t) {
    throw new Error("".concat(a(e), ' must be a boolean, "inline", "both", or undefined'));
  }
  return t;
};
exports.assertSourceType = function (e, t) {
  if (void 0 !== t && "module" !== t && "script" !== t && "unambiguous" !== t) {
    throw new Error("".concat(a(e), ' must be "module", "script", "unambiguous", or undefined'));
  }
  return t;
};
exports.assertString = function (e, t) {
  if (void 0 !== t && "string" !== typeof t) {
    throw new Error("".concat(a(e), " must be a string, or undefined"));
  }
  return t;
};
exports.assertTargets = function (e, t) {
  if ((0, r().isBrowsersQueryValid)(t)) {
    return t;
  }
  if ("object" !== typeof t || !t || Array.isArray(t)) {
    throw new Error("".concat(a(e), " must be a string, an array of strings or an object"));
  }
  var n = s(e, "browsers");
  var i = s(e, "esmodules");
  f(n, t.browsers);
  o(i, t.esmodules);
  for (var l = 0, u = Object.keys(t); l < u.length; l++) {
    var c = u[l];
    var p = t[c];
    var h = s(e, c);
    if ("esmodules" === c) {
      o(h, p);
    } else if ("browsers" === c) {
      f(h, p);
    } else {
      if (!Object.hasOwnProperty.call(r().TargetNames, c)) {
        var y = Object.keys(r().TargetNames).join(", ");
        throw new Error("".concat(a(h), " is not a valid target. Supported targets are ").concat(y));
      }
      d(h, p);
    }
  }
  return t;
};
exports.msg = a;
var i = require("./index");
function a(e) {
  switch (e.type) {
    case "root":
      return "";
    case "env":
      return "".concat(a(e.parent), '.env["').concat(e.name, '"]');
    case "overrides":
      return "".concat(a(e.parent), ".overrides[").concat(e.index, "]");
    case "option":
      return "".concat(a(e.parent), ".").concat(e.name);
    case "access":
      return "".concat(a(e.parent), "[").concat(JSON.stringify(e.name), "]");
    default:
      throw new Error("Assertion failure: Unknown type ".concat(e.type));
  }
}
function s(e, t) {
  return {
    type: "access",
    name: t,
    parent: e
  };
}
function o(e, t) {
  if (void 0 !== t && "boolean" !== typeof t) {
    throw new Error("".concat(a(e), " must be a boolean, or undefined"));
  }
  return t;
}
function l(e, t) {
  if (void 0 !== t && ("object" !== typeof t || Array.isArray(t) || !t)) {
    throw new Error("".concat(a(e), " must be an object, or undefined"));
  }
  return t;
}
function u(e, t) {
  if (null != t && !Array.isArray(t)) {
    throw new Error("".concat(a(e), " must be an array, or undefined"));
  }
  return t;
}
function c(e) {
  return "string" === typeof e || "function" === typeof e || e instanceof RegExp;
}
function p(e, t) {
  if (("object" !== typeof t || !t) && "string" !== typeof t && "function" !== typeof t) {
    throw new Error("".concat(a(e), " must be a string, object, function"));
  }
  return t;
}
function f(e, t) {
  if (void 0 !== t && !(0, r().isBrowsersQueryValid)(t)) {
    throw new Error("".concat(a(e), " must be undefined, a string or an array of strings"));
  }
}
function d(e, t) {
  if (("number" !== typeof t || Math.round(t) !== t) && "string" !== typeof t) {
    throw new Error("".concat(a(e), " must be a string or an integer number"));
  }
}