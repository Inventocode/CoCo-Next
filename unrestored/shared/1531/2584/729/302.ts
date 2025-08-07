"use strict";

export { o as press };
import r = require("animejs");
function o(e) {
  return [r.default({
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