/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2013
 */

var r = require("../2014/849")
function i() {
  this._array = []
  this._sorted = true
  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  }
}
i.prototype.unsortedForEach = function (e, t) {
  this._array.forEach(e, t)
}
i.prototype.add = function (e) {
  if (!function (e, t) {
    var /* [auto-meaningful-name] */e$generatedLine = e.generatedLine
    var /* [auto-meaningful-name] */t$generatedLine = t.generatedLine
    var /* [auto-meaningful-name] */e$generatedColumn = e.generatedColumn
    var /* [auto-meaningful-name] */t$generatedColumn = t.generatedColumn
    return t$generatedLine > e$generatedLine || t$generatedLine == e$generatedLine && t$generatedColumn >= e$generatedColumn || r.compareByGeneratedPositionsInflated(e, t) <= 0
  }(this._last, e)) {
    this._sorted = false
    this._array.push(e)
  } else {
    this._last = e
    this._array.push(e)
  }
}
i.prototype.toArray = function () {
  if (!this._sorted) {
    this._array.sort(r.compareByGeneratedPositionsInflated)
    this._sorted = true
  }
  return this._array
}
exports.MappingList = i
