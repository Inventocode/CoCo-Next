"use strict";

require("./1633/86/index")({
  target: "URL",
  proto: !0,
  enumerable: !0
}, {
  toJSON: function () {
    return URL.prototype.toString.call(this);
  }
});