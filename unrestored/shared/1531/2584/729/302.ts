"use strict";

export { o as press };
var r = require("../204");
function o(e) {
  return [Object(r.default)({
    targets: "#".concat(e),
    scale: [{
      value: .9,
      duration: 100
    }, {
      value: 1,
      duration: 200
    }]
  })];
}