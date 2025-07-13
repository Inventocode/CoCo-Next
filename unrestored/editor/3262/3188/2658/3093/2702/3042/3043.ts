"use strict";

import * as r from "../../../../../2873/2721/805/index";
import * as i from "../../../220";
import * as a from "../../../230";
var s = /^[ \t]+$/;
var o = function () {
  function e(t) {
    i(this, e);
    this._map = null;
    this._buf = "";
    this._last = 0;
    this._queue = [];
    this._position = {
      line: 1,
      column: 0
    };
    this._sourcePosition = {
      identifierName: null,
      line: null,
      column: null,
      filename: null
    };
    this._disallowedPop = null;
    this._map = t;
  }
  a(e, [{
    key: "get",
    value: function () {
      this._flush();
      var e = this._map;
      var t = {
        code: this._buf.trimRight(),
        map: null,
        rawMappings: null == e ? void 0 : e.getRawMappings()
      };
      if (e) {
        Object.defineProperty(t, "map", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.map = e.get();
          },
          set: function (e) {
            Object.defineProperty(this, "map", {
              value: e,
              writable: !0
            });
          }
        });
      }
      return t;
    }
  }, {
    key: "append",
    value: function (e) {
      this._flush();
      var t = this._sourcePosition;
      var n = t.line;
      var r = t.column;
      var i = t.filename;
      var a = t.identifierName;
      var s = t.force;
      this._append(e, n, r, a, i, s);
    }
  }, {
    key: "queue",
    value: function (e) {
      if ("\n" === e) {
        for (; this._queue.length > 0 && s.test(this._queue[0][0]);) {
          this._queue.shift();
        }
      }
      var t = this._sourcePosition;
      var n = t.line;
      var r = t.column;
      var i = t.filename;
      var a = t.identifierName;
      var o = t.force;
      this._queue.unshift([e, n, r, a, i, o]);
    }
  }, {
    key: "_flush",
    value: function () {
      for (var e; e = this._queue.pop();) {
        this._append.apply(this, r(e));
      }
    }
  }, {
    key: "_append",
    value: function (e, t, n, r, i, a) {
      this._buf += e;
      this._last = e.charCodeAt(e.length - 1);
      var s = e.indexOf("\n");
      var o = 0;
      for (0 !== s && this._mark(t, n, r, i, a); -1 !== s;) {
        this._position.line++;
        this._position.column = 0;
        if ((o = s + 1) < e.length) {
          this._mark(++t, 0, r, i, a);
        }
        s = e.indexOf("\n", o);
      }
      this._position.column += e.length - o;
    }
  }, {
    key: "_mark",
    value: function (e, t, n, r, i) {
      var a;
      if (!(null == (a = this._map))) {
        a.mark(this._position.line, this._position.column, e, t, n, r, i);
      }
    }
  }, {
    key: "removeTrailingNewline",
    value: function () {
      if (this._queue.length > 0 && "\n" === this._queue[0][0]) {
        this._queue.shift();
      }
    }
  }, {
    key: "removeLastSemicolon",
    value: function () {
      if (this._queue.length > 0 && ";" === this._queue[0][0]) {
        this._queue.shift();
      }
    }
  }, {
    key: "getLastChar",
    value: function () {
      var e;
      if (this._queue.length > 0) {
        e = this._queue[0][0].charCodeAt(0);
      } else {
        e = this._last;
      }
      return e;
    }
  }, {
    key: "endsWithCharAndNewline",
    value: function () {
      var e = this._queue;
      if (e.length > 0) {
        if (10 !== e[0][0].charCodeAt(0)) {
          return;
        }
        return e.length > 1 ? e[1][0].charCodeAt(0) : this._last;
      }
    }
  }, {
    key: "hasContent",
    value: function () {
      return this._queue.length > 0 || !!this._last;
    }
  }, {
    key: "exactSource",
    value: function (e, t) {
      this.source("start", e, !0);
      t();
      this.source("end", e);
      this._disallowPop("start", e);
    }
  }, {
    key: "source",
    value: function (e, t, n) {
      if (!(e && !t)) {
        this._normalizePosition(e, t, this._sourcePosition, n);
      }
    }
  }, {
    key: "withSource",
    value: function (e, t, n) {
      if (!this._map) {
        return n();
      }
      var r = this._sourcePosition.line;
      var i = this._sourcePosition.column;
      var a = this._sourcePosition.filename;
      var s = this._sourcePosition.identifierName;
      this.source(e, t);
      n();
      if (!(this._sourcePosition.force && this._sourcePosition.line === r && this._sourcePosition.column === i && this._sourcePosition.filename === a || this._disallowedPop && this._disallowedPop.line === r && this._disallowedPop.column === i && this._disallowedPop.filename === a)) {
        this._sourcePosition.line = r;
        this._sourcePosition.column = i;
        this._sourcePosition.filename = a;
        this._sourcePosition.identifierName = s;
        this._sourcePosition.force = !1;
        this._disallowedPop = null;
      }
    }
  }, {
    key: "_disallowPop",
    value: function (e, t) {
      if (!(e && !t)) {
        this._disallowedPop = this._normalizePosition(e, t);
      }
    }
  }, {
    key: "_normalizePosition",
    value: function (e, t, n, r) {
      var i = t ? t[e] : null;
      if (void 0 === n) {
        n = {
          identifierName: null,
          line: null,
          column: null,
          filename: null,
          force: !1
        };
      }
      var a = n.line;
      var s = n.column;
      var o = n.filename;
      n.identifierName = "start" === e && (null == t ? void 0 : t.identifierName) || null;
      n.line = null == i ? void 0 : i.line;
      n.column = null == i ? void 0 : i.column;
      n.filename = null == t ? void 0 : t.filename;
      if (r || n.line !== a || n.column !== s || n.filename !== o) {
        n.force = r;
      }
      return n;
    }
  }, {
    key: "getCurrentColumn",
    value: function () {
      var e = this._queue.reduce(function (e, t) {
        return t[0] + e;
      }, "");
      var t = e.lastIndexOf("\n");
      return -1 === t ? this._position.column + e.length : e.length - 1 - t;
    }
  }, {
    key: "getCurrentLine",
    value: function () {
      for (var e = this._queue.reduce(function (e, t) {
          return t[0] + e;
        }, ""), t = 0, n = 0; n < e.length; n++) {
        if ("\n" === e[n]) {
          t++;
        }
      }
      return this._position.line + t;
    }
  }]);
  return e;
}();
export default o;