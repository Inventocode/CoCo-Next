/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2415
 */

module.exports = function (e) {
  return function (t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
      var c = a[e ? s : ++i];
      if (false === n(o[c], c, o)) {
        break;
      }
    }
    return t;
  };
};