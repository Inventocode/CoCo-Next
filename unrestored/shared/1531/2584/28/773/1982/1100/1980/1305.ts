/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1305
 */

module.exports = {
  indexOf: function (e, t) {
    var n;
    var r;
    if (Array.prototype.indexOf) {
      return e.indexOf(t);
    }
    for (n = 0, r = e.length; n < r; n++) {
      if (e[n] === t) {
        return n;
      }
    }
    return -1;
  },
  forEach: function (e, t, n) {
    var r;
    var i;
    if (Array.prototype.forEach) {
      return e.forEach(t, n);
    }
    for (r = 0, i = e.length; r < i; r++) {
      t.call(n, e[r], r, e);
    }
  },
  trim: function (e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function (e) {
    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
  }
};