"use strict";

var r = require("./951/index");
module.exports = function (e) {
  return !(!e || "string" !== typeof e || e.length < 6) && !new RegExp("[^" + r.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(e);
};