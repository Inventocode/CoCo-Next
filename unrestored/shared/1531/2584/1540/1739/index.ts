"use strict";

require("./938")("WeakSet", function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : undefined);
  };
}, require("./1250"));