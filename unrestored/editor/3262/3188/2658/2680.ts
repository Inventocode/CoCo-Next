"use strict";

import * as r from "../../../1524/2574/1/index";
var i = r.mark(u);
var a = r.mark(c);
var s = r.mark(p);
var o = r.mark(f);
var l = r.mark(d);
function u(e) {
  return r.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          return t.abrupt("return", {
            filepath: e,
            directories: [],
            pkg: null,
            isPackage: !1
          });
        case 1:
        case "end":
          return t.stop();
      }
    }
  }, i);
}
function c(e, t, n) {
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.abrupt("return", {
            config: null,
            ignore: null
          });
        case 1:
        case "end":
          return e.stop();
      }
    }
  }, a);
}
function p(e, t, n) {
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.abrupt("return", null);
        case 1:
        case "end":
          return e.stop();
      }
    }
  }, s);
}
function f(e, t, n, i) {
  return r.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          throw new Error("Cannot load ".concat(e, " relative to ").concat(t, " in a browser"));
        case 1:
        case "end":
          return n.stop();
      }
    }
  }, o);
}
function d(e) {
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.abrupt("return", null);
        case 1:
        case "end":
          return e.stop();
      }
    }
  }, l);
}
exports.findConfigUpwards = function (e) {
  return null;
};
export { u as findPackageData };
export { c as findRelativeConfig };
export { p as findRootConfig };
export { f as loadConfig };
exports.loadPlugin = function (e, t) {
  throw new Error("Cannot load plugin ".concat(e, " relative to ").concat(t, " in a browser"));
};
exports.loadPreset = function (e, t) {
  throw new Error("Cannot load preset ".concat(e, " relative to ").concat(t, " in a browser"));
};
exports.resolvePlugin = function (e, t) {
  return null;
};
exports.resolvePreset = function (e, t) {
  return null;
};
export { d as resolveShowConfigPath };
exports.ROOT_CONFIG_FILENAMES = [];