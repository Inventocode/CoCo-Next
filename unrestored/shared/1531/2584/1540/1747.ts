"use strict";

require("./1623/86")({
  target: "URL",
  proto: true,
  enumerable: true
}, {
  toJSON: function () {
    return URL.prototype.toString.call(this);
  }
});