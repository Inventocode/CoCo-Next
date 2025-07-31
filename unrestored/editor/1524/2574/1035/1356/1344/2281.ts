"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./1122");
var i = require("./1121");
function o(e, t) {
  return {
    get: e,
    getLength: function () {
      return e().length;
    },
    insert: function (n, r, o) {
      var a = i.strPosToUni(e(), n);
      return t([a, r], o);
    },
    remove: function (n, r, o) {
      var a = i.strPosToUni(e(), n);
      return t([a, {
        d: r
      }], o);
    },
    _onOp: function (e) {
      var t = this;
      r.eachOp(e, function (e, n, i) {
        switch (typeof e) {
          case "string":
            if (t.onInsert) {
              t.onInsert(i, e);
            }
            break;
          case "object":
            var o = r.dlen(e.d);
            if (t.onRemove) {
              t.onRemove(i, o);
            }
        }
      });
    },
    onInsert: null,
    onRemove: null
  };
}
exports.default = o;
o.provides = {
  text: !0
};