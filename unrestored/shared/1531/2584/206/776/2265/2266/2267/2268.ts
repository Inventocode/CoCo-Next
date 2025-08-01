"use strict";

var r = require("../../../../../../../3272/3198/2668/220");
var i = require("../../../../../../../3272/3198/2668/230");
var o = require("../../../../../1036/1363/569");
var a = require("../../1120");
function s(e) {
  return e.reachable;
}
function c(e, t, n, r) {
  for (var i = e.segmentsList, o = t >= 0 ? t : i.length + t, a = n >= 0 ? n : i.length + n, s = [], c = 0; c < e.count; ++c) {
    for (var u = [], l = o; l <= a; ++l) {
      u.push(i[l][c]);
    }
    s.push(r(e.idGenerator.next(), u));
  }
  return s;
}
function u(e, t) {
  for (var n = t; n.length > e.count;) {
    for (var r = [], i = 0, o = n.length / 2 | 0; i < o; ++i) {
      r.push(a.newNext(e.idGenerator.next(), [n[i], n[i + o]]));
    }
    n = r;
  }
  return n;
}
var l = function () {
  function e(t, n, i) {
    r(this, e);
    this.idGenerator = t;
    this.upper = n;
    this.count = i;
    this.segmentsList = [];
  }
  i(e, [{
    key: "head",
    get: function () {
      var e = this.segmentsList;
      return 0 === e.length ? [] : e[e.length - 1];
    }
  }, {
    key: "empty",
    get: function () {
      return 0 === this.segmentsList.length;
    }
  }, {
    key: "reachable",
    get: function () {
      var e = this.head;
      return e.length > 0 && e.some(s);
    }
  }, {
    key: "makeNext",
    value: function (e, t) {
      return c(this, e, t, a.newNext);
    }
  }, {
    key: "makeUnreachable",
    value: function (e, t) {
      return c(this, e, t, a.newUnreachable);
    }
  }, {
    key: "makeDisconnected",
    value: function (e, t) {
      return c(this, e, t, a.newDisconnected);
    }
  }, {
    key: "add",
    value: function (e) {
      o(e.length >= this.count, "".concat(e.length, " >= ").concat(this.count));
      this.segmentsList.push(u(this, e));
    }
  }, {
    key: "replaceHead",
    value: function (e) {
      o(e.length >= this.count, "".concat(e.length, " >= ").concat(this.count));
      this.segmentsList.splice(-1, 1, u(this, e));
    }
  }, {
    key: "addAll",
    value: function (e) {
      o(e.count === this.count);
      for (var t = e.segmentsList, n = 0; n < t.length; ++n) {
        this.segmentsList.push(t[n]);
      }
    }
  }, {
    key: "clear",
    value: function () {
      this.segmentsList = [];
    }
  }], [{
    key: "newRoot",
    value: function (t) {
      var n = new e(t, null, 1);
      n.add([a.newRoot(t.next())]);
      return n;
    }
  }, {
    key: "newEmpty",
    value: function (t, n) {
      return new e(t.idGenerator, t, (n ? 2 : 1) * t.count);
    }
  }]);
  return e;
}();
module.exports = l;