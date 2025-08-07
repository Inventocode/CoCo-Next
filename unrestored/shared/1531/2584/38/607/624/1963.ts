module.exports = function (e, t) {
  if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [];
    var r = true;
    var i = false;
    var o = undefined;
    try {
      for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
        ;
      }
    } catch (c) {
      i = true;
      o = c;
    } finally {
      try {
        if (!(r || null == s.return)) {
          s.return();
        }
      } finally {
        if (i) {
          throw o;
        }
      }
    }
    return n;
  }
};