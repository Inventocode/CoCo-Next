"use strict";

import * as r from "../../../../../../220";
import * as i from "../../../../../../230";
import * as a from "./2931/index";
var s = function () {
  function e(t, n) {
    r(this, e);
    this._cachedMap = void 0;
    this._code = void 0;
    this._opts = void 0;
    this._rawMappings = void 0;
    this._lastGenLine = void 0;
    this._lastSourceLine = void 0;
    this._lastSourceColumn = void 0;
    this._cachedMap = null;
    this._code = n;
    this._opts = t;
    this._rawMappings = [];
  }
  i(e, [{
    key: "get",
    value: function () {
      if (!this._cachedMap) {
        var e = this._cachedMap = new a.SourceMapGenerator({
          sourceRoot: this._opts.sourceRoot
        });
        var t = this._code;
        if ("string" === typeof t) {
          e.setSourceContent(this._opts.sourceFileName.replace(/\\/g, "/"), t);
        } else {
          if ("object" === typeof t) {
            Object.keys(t).forEach(function (n) {
              e.setSourceContent(n.replace(/\\/g, "/"), t[n]);
            });
          }
        }
        this._rawMappings.forEach(function (t) {
          return e.addMapping(t);
        }, e);
      }
      return this._cachedMap.toJSON();
    }
  }, {
    key: "getRawMappings",
    value: function () {
      return this._rawMappings.slice();
    }
  }, {
    key: "mark",
    value: function (e, t, n, r, i, a, s) {
      if (!(this._lastGenLine !== e && null === n)) {
        if (s || this._lastGenLine !== e || this._lastSourceLine !== n || this._lastSourceColumn !== r) {
          this._cachedMap = null;
          this._lastGenLine = e;
          this._lastSourceLine = n;
          this._lastSourceColumn = r;
          this._rawMappings.push({
            name: i || void 0,
            generated: {
              line: e,
              column: t
            },
            source: null == n ? void 0 : (a || this._opts.sourceFileName).replace(/\\/g, "/"),
            original: null == n ? void 0 : {
              line: n,
              column: r
            }
          });
        }
      }
    }
  }]);
  return e;
}();
export default s;