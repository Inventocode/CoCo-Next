"use strict";

var r = require("./1382/index");
module.exports = function (e, t, n) {
  var i = n.config.validateStatus;
  if (!i || i(n.status)) {
    e(n);
  } else {
    t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
  }
};