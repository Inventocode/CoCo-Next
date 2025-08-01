"use strict";

var r = require("./1294/index");
module.exports = function (e, t, n) {
  var i = n.config.validateStatus;
  if (n.status && i && !i(n.status)) {
    t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
  } else {
    e(n);
  }
};