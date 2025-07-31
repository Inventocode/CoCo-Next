module.exports = function () {
  "use strict";

  var e = "day";
  return function (t, n, r) {
    var i = function (t) {
      return t.add(4 - t.isoWeekday(), e);
    };
    var o = n.prototype;
    o.isoWeekYear = function () {
      return i(this).year();
    };
    o.isoWeek = function (t) {
      if (!this.$utils().u(t)) {
        return this.add(7 * (t - this.isoWeek()), e);
      }
      var n;
      var o;
      var a;
      var s = i(this);
      n = this.isoWeekYear();
      a = 4 - (o = (this.$u ? r.utc : r)().year(n).startOf("year")).isoWeekday();
      if (o.isoWeekday() > 4) {
        a += 7;
      }
      var c = o.add(a, e);
      return s.diff(c, "week") + 1;
    };
    o.isoWeekday = function (e) {
      return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
    };
    var a = o.startOf;
    o.startOf = function (e, t) {
      var n = this.$utils();
      var r = !!n.u(t) || t;
      return "isoweek" === n.p(e) ? r ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : a.bind(this)(e, t);
    };
  };
}();