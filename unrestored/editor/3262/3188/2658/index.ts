"use strict";

import * as r from "./220";
import * as i from "./230";
export { default as File } from "./2691/index";
exports.Plugin = function (e) {
  throw new Error("The (".concat(e, ") Babel 5 plugin is being run with an unsupported Babel version."));
};
export { default as buildExternalHelpers } from "./3093/index";
export { createConfigItem } from "./2681/index";
export { createConfigItemAsync } from "./2681/index";
export { createConfigItemSync } from "./2681/index";
export { getEnv } from "./2790";
export { loadOptions } from "./2681/index";
export { loadOptionsAsync } from "./2681/index";
export { loadOptionsSync } from "./2681/index";
export { loadPartialConfig } from "./2681/index";
export { loadPartialConfigAsync } from "./2681/index";
export { loadPartialConfigSync } from "./2681/index";
export { parse } from "./3131/index";
export { parseAsync } from "./3131/index";
export { parseSync } from "./3131/index";
export { resolvePlugin } from "./2680";
export { resolvePreset } from "./2680";
Object.defineProperty(t, "template", {
  enumerable: !0,
  get: function () {
    return function () {
      var e = require("./2667/index");
      (function () {
        return e;
      });
      return e;
    }().default;
  }
});
Object.defineProperty(t, "tokTypes", {
  enumerable: !0,
  get: function () {
    return function () {
      var e = require("./2679/index");
      (function () {
        return e;
      });
      return e;
    }().tokTypes;
  }
});
export { transform } from "./3119/index";
export { transformAsync } from "./3119/index";
export { transformFile } from "./3129";
export { transformFileAsync } from "./3129";
export { transformFileSync } from "./3129";
export { transformFromAst } from "./3130";
export { transformFromAstAsync } from "./3130";
export { transformFromAstSync } from "./3130";
export { transformSync } from "./3119/index";
Object.defineProperty(t, "traverse", {
  enumerable: !0,
  get: function () {
    return function () {
      var e = require("./2637/index");
      (function () {
        return e;
      });
      return e;
    }().default;
  }
});
import * as a from "./2691/index";
import * as s from "./3093/index";
import * as o from "./2680";
import * as l from "./2790";
function u() {
  var e = require("./2623/index");
  u = function () {
    return e;
  };
  return e;
}
Object.defineProperty(t, "types", {
  enumerable: !0,
  get: function () {
    return u();
  }
});
import * as c from "./2681/index";
import * as p from "./3119/index";
import * as f from "./3129";
import * as d from "./3130";
import * as h from "./3131/index";
exports.version = "7.16.0";
var y = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs", ".cjs"]);
export { y as DEFAULT_EXTENSIONS };
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
export { m as OptionManager };