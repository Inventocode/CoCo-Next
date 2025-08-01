"use strict";

var r = require("./220");
var i = require("./230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.DEFAULT_EXTENSIONS = void 0;
Object.defineProperty(exports, "File", {
  enumerable: !0,
  get: function () {
    return a.default;
  }
});
exports.OptionManager = void 0;
exports.Plugin = function (e) {
  throw new Error("The (".concat(e, ") Babel 5 plugin is being run with an unsupported Babel version."));
};
Object.defineProperty(exports, "buildExternalHelpers", {
  enumerable: !0,
  get: function () {
    return s.default;
  }
});
Object.defineProperty(exports, "createConfigItem", {
  enumerable: !0,
  get: function () {
    return c.createConfigItem;
  }
});
Object.defineProperty(exports, "createConfigItemAsync", {
  enumerable: !0,
  get: function () {
    return c.createConfigItemAsync;
  }
});
Object.defineProperty(exports, "createConfigItemSync", {
  enumerable: !0,
  get: function () {
    return c.createConfigItemSync;
  }
});
Object.defineProperty(exports, "getEnv", {
  enumerable: !0,
  get: function () {
    return l.getEnv;
  }
});
Object.defineProperty(exports, "loadOptions", {
  enumerable: !0,
  get: function () {
    return c.loadOptions;
  }
});
Object.defineProperty(exports, "loadOptionsAsync", {
  enumerable: !0,
  get: function () {
    return c.loadOptionsAsync;
  }
});
Object.defineProperty(exports, "loadOptionsSync", {
  enumerable: !0,
  get: function () {
    return c.loadOptionsSync;
  }
});
Object.defineProperty(exports, "loadPartialConfig", {
  enumerable: !0,
  get: function () {
    return c.loadPartialConfig;
  }
});
Object.defineProperty(exports, "loadPartialConfigAsync", {
  enumerable: !0,
  get: function () {
    return c.loadPartialConfigAsync;
  }
});
Object.defineProperty(exports, "loadPartialConfigSync", {
  enumerable: !0,
  get: function () {
    return c.loadPartialConfigSync;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: !0,
  get: function () {
    return h.parse;
  }
});
Object.defineProperty(exports, "parseAsync", {
  enumerable: !0,
  get: function () {
    return h.parseAsync;
  }
});
Object.defineProperty(exports, "parseSync", {
  enumerable: !0,
  get: function () {
    return h.parseSync;
  }
});
Object.defineProperty(exports, "resolvePlugin", {
  enumerable: !0,
  get: function () {
    return o.resolvePlugin;
  }
});
Object.defineProperty(exports, "resolvePreset", {
  enumerable: !0,
  get: function () {
    return o.resolvePreset;
  }
});
Object.defineProperty(exports, "template", {
  enumerable: !0,
  get: function () {
    return function () {
      var e = require("./2677/index");
      (function () {
        return e;
      });
      return e;
    }().default;
  }
});
Object.defineProperty(exports, "tokTypes", {
  enumerable: !0,
  get: function () {
    return function () {
      var e = require("./2689/index");
      (function () {
        return e;
      });
      return e;
    }().tokTypes;
  }
});
Object.defineProperty(exports, "transform", {
  enumerable: !0,
  get: function () {
    return p.transform;
  }
});
Object.defineProperty(exports, "transformAsync", {
  enumerable: !0,
  get: function () {
    return p.transformAsync;
  }
});
Object.defineProperty(exports, "transformFile", {
  enumerable: !0,
  get: function () {
    return f.transformFile;
  }
});
Object.defineProperty(exports, "transformFileAsync", {
  enumerable: !0,
  get: function () {
    return f.transformFileAsync;
  }
});
Object.defineProperty(exports, "transformFileSync", {
  enumerable: !0,
  get: function () {
    return f.transformFileSync;
  }
});
Object.defineProperty(exports, "transformFromAst", {
  enumerable: !0,
  get: function () {
    return d.transformFromAst;
  }
});
Object.defineProperty(exports, "transformFromAstAsync", {
  enumerable: !0,
  get: function () {
    return d.transformFromAstAsync;
  }
});
Object.defineProperty(exports, "transformFromAstSync", {
  enumerable: !0,
  get: function () {
    return d.transformFromAstSync;
  }
});
Object.defineProperty(exports, "transformSync", {
  enumerable: !0,
  get: function () {
    return p.transformSync;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: !0,
  get: function () {
    return function () {
      var e = require("./2647/index");
      (function () {
        return e;
      });
      return e;
    }().default;
  }
});
exports.version = exports.types = void 0;
var a = require("./2701/index");
var s = require("./3103/index");
var o = require("./2690");
var l = require("./2800");
function u() {
  var e = require("./2633/index");
  u = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "types", {
  enumerable: !0,
  get: function () {
    return u();
  }
});
var c = require("./2691/index");
var p = require("./3129/index");
var f = require("./3139");
var d = require("./3140");
var h = require("./3141/index");
exports.version = "7.16.0";
var y = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs", ".cjs"]);
exports.DEFAULT_EXTENSIONS = y;
var m = function () {
  function e() {
    r(this, e);
  }
  i(e, [{
    key: "init",
    value: function (e) {
      return (0, c.loadOptions)(e);
    }
  }]);
  return e;
}();
exports.OptionManager = m;