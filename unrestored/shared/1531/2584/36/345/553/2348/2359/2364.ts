"use strict";

var r = {
  single_source_shortest_paths: function (e, t, n) {
    var i = {};
    var o = {};
    o[t] = 0;
    var a;
    var s;
    var c;
    var u;
    var l;
    var f;
    var d;
    var h = r.PriorityQueue.make();
    for (h.push(t, 0); !h.empty();) {
      for (c in s = (a = h.pop()).value, u = a.cost, l = e[s] || {}) if (l.hasOwnProperty(c)) {
        f = u + l[c];
        d = o[c];
        if ("undefined" === typeof o[c] || d > f) {
          o[c] = f;
          h.push(c, f);
          i[c] = s;
        }
      }
    }
    if ("undefined" !== typeof n && "undefined" === typeof o[n]) {
      var p = ["Could not find a path from ", t, " to ", n, "."].join("");
      throw new Error(p);
    }
    return i;
  },
  extract_shortest_path_from_predecessor_list: function (e, t) {
    for (var n = [], r = t; r;) {
      n.push(r);
      e[r];
      r = e[r];
    }
    n.reverse();
    return n;
  },
  find_path: function (e, t, n) {
    var i = r.single_source_shortest_paths(e, t, n);
    return r.extract_shortest_path_from_predecessor_list(i, n);
  },
  PriorityQueue: {
    make: function (e) {
      var t;
      var n = r.PriorityQueue;
      var i = {};
      for (t in e = e || {}, n) if (n.hasOwnProperty(t)) {
        i[t] = n[t];
      }
      i.queue = [];
      i.sorter = e.sorter || n.default_sorter;
      return i;
    },
    default_sorter: function (e, t) {
      return e.cost - t.cost;
    },
    push: function (e, t) {
      var n = {
        value: e,
        cost: t
      };
      this.queue.push(n);
      this.queue.sort(this.sorter);
    },
    pop: function () {
      return this.queue.shift();
    },
    empty: function () {
      return 0 === this.queue.length;
    }
  }
};
module.exports = r;