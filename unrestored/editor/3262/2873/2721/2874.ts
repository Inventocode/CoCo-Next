"use strict";

var r = (0, require("../../2690").declare)(function (e) {
  e.assertVersion(7);
  return {
    name: "syntax-jsx",
    manipulateOptions: function (e, t) {
      if (!t.plugins.some(function (e) {
        return "typescript" === (Array.isArray(e) ? e[0] : e);
      })) {
        t.plugins.push("jsx");
      }
    }
  };
});
export default r;