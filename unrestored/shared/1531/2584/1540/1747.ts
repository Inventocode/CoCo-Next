"use strict";

require("./1623/86")({
  target: "URL",
  proto: !0,
  enumerable: !0
}, {
  toJSON: function () {
    return URL.prototype.toString.call(this);
  }
});