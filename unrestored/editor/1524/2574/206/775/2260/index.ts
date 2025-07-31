"use strict";

var r = require("../../../../../3262/3190/624/index");
var i = require("../../../../../3262/3188/2658/220");
var o = require("../../../../../3262/3188/2658/230");
var a = require("./2261/index");
var s = require("../1109");
var c = require("../806/index")("eslint:config-comment-parser");
module.exports = function () {
  function e() {
    i(this, e);
  }
  o(e, [{
    key: "parseStringConfig",
    value: function (e, t) {
      c("Parsing String config");
      var n = {};
      e.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([,:])[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/g, "$1").split(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|,+/).forEach(function (e) {
        if (e) {
          var i = e.split(":");
          var o = r(i, 2);
          var a = o[0];
          var s = o[1];
          var c = void 0 === s ? null : s;
          n[a] = {
            value: c,
            comment: t
          };
        }
      });
      return n;
    }
  }, {
    key: "parseJsonConfig",
    value: function (e, t) {
      c("Parsing JSON config");
      var n = {};
      try {
        if (n = a.parse("Object", e) || {}, s.isEverySeverityValid(n)) {
          return {
            success: !0,
            config: n
          };
        }
      } catch (i) {
        c("Levn parsing failed; falling back to manual parsing.");
      }
      n = {};
      var r = e.replace(/([\x2D\/-9A-Za-z]+):/g, '"$1":').replace(/(\]|[0-9])[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(?=")/, "$1,");
      try {
        n = JSON.parse("{".concat(r, "}"));
      } catch (i) {
        c("Manual parsing failed.");
        return {
          success: !1,
          error: {
            ruleId: null,
            fatal: !0,
            severity: 2,
            message: "Failed to parse JSON from '".concat(r, "': ").concat(i.message),
            line: t.start.line,
            column: t.start.column + 1
          }
        };
      }
      return {
        success: !0,
        config: n
      };
    }
  }, {
    key: "parseListConfig",
    value: function (e) {
      c("Parsing list config");
      var t = {};
      e.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/g, ",").split(/,+/).forEach(function (e) {
        var n = e.trim();
        if (n) {
          t[n] = !0;
        }
      });
      return t;
    }
  }]);
  return e;
}();