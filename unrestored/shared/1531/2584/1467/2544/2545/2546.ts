/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2546
 */

module.exports = function () {
  var e = document.getSelection();
  if (!e.rangeCount) {
    return function () {};
  }
  for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) {
    n.push(e.getRangeAt(r));
  }
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
  }
  e.removeAllRanges();
  return function () {
    if ("Caret" === e.type) {
      e.removeAllRanges();
    }
    if (!e.rangeCount) {
      n.forEach(function (t) {
        e.addRange(t);
      });
    }
    if (t) {
      t.focus();
    }
  };
};