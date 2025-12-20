/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2601
 */

module.exports = function () {
  var e = document.getSelection()
  if (!e.rangeCount) {
    return function () {}
  }
  for (var /* [auto-meaningful-name] */document$activeElement = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) {
    n.push(e.getRangeAt(r))
  }
  switch (document$activeElement.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      document$activeElement.blur()
      break
    default:
      document$activeElement = null
  }
  e.removeAllRanges()
  return function () {
    if ("Caret" === e.type) {
      e.removeAllRanges()
    }
    if (!e.rangeCount) {
      n.forEach(function (t) {
        e.addRange(t)
      })
    }
    if (document$activeElement) {
      document$activeElement.focus()
    }
  }
}
