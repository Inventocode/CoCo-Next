"use strict";

import * as r from "../../../../3262/3188/2658/220";
import * as i from "../../../../3262/3188/2658/230";
import * as o from "./766/index";
var a = require("./806/index")("eslint:traverser");
function s() {}
var c = function () {
  function e() {
    r(this, e);
    this._current = null;
    this._parents = [];
    this._skipped = !1;
    this._broken = !1;
    this._visitorKeys = null;
    this._enter = null;
    this._leave = null;
  }
  i(e, [{
    key: "current",
    value: function () {
      return this._current;
    }
  }, {
    key: "parents",
    value: function () {
      return this._parents.slice(0);
    }
  }, {
    key: "break",
    value: function () {
      this._broken = !0;
    }
  }, {
    key: "skip",
    value: function () {
      this._skipped = !0;
    }
  }, {
    key: "traverse",
    value: function (e, t) {
      this._current = null;
      this._parents = [];
      this._skipped = !1;
      this._broken = !1;
      this._visitorKeys = t.visitorKeys || o.KEYS;
      this._enter = t.enter || s;
      this._leave = t.leave || s;
      this._traverse(e, null);
    }
  }, {
    key: "_traverse",
    value: function (e, t) {
      if (null !== (n = e) && "object" === typeof n && "string" === typeof n.type) {
        var n;
        if (this._current = e, this._skipped = !1, this._enter(e, t), !this._skipped && !this._broken) {
          var r = function (e, t) {
            var n = e[t.type];
            if (!n) {
              n = o.getKeys(t);
              a('Unknown node type "%s": Estimated visitor keys %j', t.type, n);
            }
            return n;
          }(this._visitorKeys, e);
          if (r.length >= 1) {
            this._parents.push(e);
            for (var i = 0; i < r.length && !this._broken; ++i) {
              var s = e[r[i]];
              if (Array.isArray(s)) {
                for (var c = 0; c < s.length && !this._broken; ++c) {
                  this._traverse(s[c], e);
                }
              } else {
                this._traverse(s, e);
              }
            }
            this._parents.pop();
          }
        }
        if (!this._broken) {
          this._leave(e, t);
        }
        this._current = t;
      }
    }
  }], [{
    key: "getKeys",
    value: function (e) {
      return o.getKeys(e);
    }
  }, {
    key: "traverse",
    value: function (t, n) {
      new e().traverse(t, n);
    }
  }, {
    key: "DEFAULT_VISITOR_KEYS",
    get: function () {
      return o.KEYS;
    }
  }]);
  return e;
}();
module.exports = c;