"use strict";

var r = require("../../../../../3200/624/index");
var i = require("../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.assumptionsNames = void 0;
exports.checkNoUnwrappedItemOptionPairs = function (e, t, n, r) {
  if (0 === t) {
    return;
  }
  var i = e[t - 1];
  var a = e[t];
  if (i.file && void 0 === i.options && "object" === typeof a.value) {
    r.message += "\n- Maybe you meant to use\n" + '"'.concat(n, 's": [\n  ["').concat(i.file.request, '", ').concat(JSON.stringify(a.value, void 0, 2), "]\n]\n") + "To be a valid ".concat(n, ", its name and options should be wrapped in a pair of brackets");
  }
};
exports.validate = function (e, t) {
  return f({
    type: "root",
    source: e
  }, t);
};
require("../2692");
var a = require("./3124");
var s = require("./2811");
var o = {
  cwd: s.assertString,
  root: s.assertString,
  rootMode: s.assertRootMode,
  configFile: s.assertConfigFileSearch,
  caller: s.assertCallerMetadata,
  filename: s.assertString,
  filenameRelative: s.assertString,
  code: s.assertBoolean,
  ast: s.assertBoolean,
  cloneInputAst: s.assertBoolean,
  envName: s.assertString
};
var l = {
  babelrc: s.assertBoolean,
  babelrcRoots: s.assertBabelrcSearch
};
var u = {
  extends: s.assertString,
  ignore: s.assertIgnoreList,
  only: s.assertIgnoreList,
  targets: s.assertTargets,
  browserslistConfigFile: s.assertConfigFileSearch,
  browserslistEnv: s.assertString
};
var c = {
  inputSourceMap: s.assertInputSourceMap,
  presets: s.assertPluginList,
  plugins: s.assertPluginList,
  passPerPreset: s.assertBoolean,
  assumptions: s.assertAssumptions,
  env: function (e, t) {
    if ("env" === e.parent.type) {
      throw new Error("".concat((0, s.msg)(e), " is not allowed inside of another .env block"));
    }
    var n = e.parent;
    var r = (0, s.assertObject)(e, t);
    if (r) {
      for (var i = 0, a = Object.keys(r); i < a.length; i++) {
        var o = a[i];
        var l = (0, s.assertObject)((0, s.access)(e, o), r[o]);
        if (l) {
          f({
            type: "env",
            name: o,
            parent: n
          }, l);
        }
      }
    }
    return r;
  },
  overrides: function (e, t) {
    if ("env" === e.parent.type) {
      throw new Error("".concat((0, s.msg)(e), " is not allowed inside an .env block"));
    }
    if ("overrides" === e.parent.type) {
      throw new Error("".concat((0, s.msg)(e), " is not allowed inside an .overrides block"));
    }
    var n = e.parent;
    var a = (0, s.assertArray)(e, t);
    if (a) {
      var o;
      var l = i(a.entries());
      try {
        for (l.s(); !(o = l.n()).done;) {
          var u = r(o.value, 2);
          var c = u[0];
          var p = u[1];
          var d = (0, s.access)(e, c);
          var h = (0, s.assertObject)(d, p);
          if (!h) {
            throw new Error("".concat((0, s.msg)(d), " must be an object"));
          }
          f({
            type: "overrides",
            index: c,
            parent: n
          }, h);
        }
      } catch (y) {
        l.e(y);
      } finally {
        l.f();
      }
    }
    return a;
  },
  test: s.assertConfigApplicableTest,
  include: s.assertConfigApplicableTest,
  exclude: s.assertConfigApplicableTest,
  retainLines: s.assertBoolean,
  comments: s.assertBoolean,
  shouldPrintComment: s.assertFunction,
  compact: s.assertCompact,
  minified: s.assertBoolean,
  auxiliaryCommentBefore: s.assertString,
  auxiliaryCommentAfter: s.assertString,
  sourceType: s.assertSourceType,
  wrapPluginVisitorMethod: s.assertFunction,
  highlightCode: s.assertBoolean,
  sourceMaps: s.assertSourceMaps,
  sourceMap: s.assertSourceMaps,
  sourceFileName: s.assertString,
  sourceRoot: s.assertString,
  parserOpts: s.assertObject,
  generatorOpts: s.assertObject
};
Object.assign(c, {
  getModuleId: s.assertFunction,
  moduleRoot: s.assertString,
  moduleIds: s.assertBoolean,
  moduleId: s.assertString
});
var p = new Set(["arrayLikeIsIterable", "constantReexports", "constantSuper", "enumerableModuleMeta", "ignoreFunctionLength", "ignoreToPrimitiveHint", "iterableIsArray", "mutableTemplateObject", "noClassCalls", "noDocumentAll", "noIncompleteNsImportDetection", "noNewArrows", "objectRestNoSymbols", "privateFieldsAsProperties", "pureGetters", "setClassMethods", "setComputedProperties", "setPublicClassFields", "setSpreadProperties", "skipForOfIteratorClosing", "superIsCallableConstructor"]);
function f(e, t) {
  var n = function e(t) {
    return "root" === t.type ? t.source : e(t.parent);
  }(e);
  (function (e) {
    if (h(e, "sourceMap") && h(e, "sourceMaps")) {
      throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both");
    }
  })(t);
  Object.keys(t).forEach(function (r) {
    var i = {
      type: "option",
      name: r,
      parent: e
    };
    if ("preset" === n && u[r]) {
      throw new Error("".concat((0, s.msg)(i), " is not allowed in preset options"));
    }
    if ("arguments" !== n && o[r]) {
      throw new Error("".concat((0, s.msg)(i), " is only allowed in root programmatic options"));
    }
    if ("arguments" !== n && "configfile" !== n && l[r]) {
      if ("babelrcfile" === n || "extendsfile" === n) {
        throw new Error("".concat((0, s.msg)(i), ' is not allowed in .babelrc or "extends"ed files, only in root programmatic options, ') + "or babel.config.js/config file options");
      }
      throw new Error("".concat((0, s.msg)(i), " is only allowed in root programmatic options, or babel.config.js/config file options"));
    }
    (c[r] || u[r] || l[r] || o[r] || d)(i, t[r]);
  });
  return t;
}
function d(e) {
  var t = e.name;
  if (a.default[t]) {
    var n = a.default[t];
    var r = n.message;
    var i = n.version;
    throw new Error("Using removed Babel ".concat(void 0 === i ? 5 : i, " option: ").concat((0, s.msg)(e), " - ").concat(r));
  }
  var o = new Error("Unknown option: ".concat((0, s.msg)(e), ". Check out https://babeljs.io/docs/en/babel-core/#options for more information about options."));
  throw o.code = "BABEL_UNKNOWN_OPTION", o;
}
function h(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
exports.assumptionsNames = p;