/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1975
 */

var r = require("../1979/838");
function i() {
  this._array = [];
  this._sorted = true;
  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
i.prototype.unsortedForEach = function (e, t) {
  this._array.forEach(e, t);
};
i.prototype.add = function (e) {
  if (!function (e, t) {
    var n = e.generatedLine;
    var i = t.generatedLine;
    var o = e.generatedColumn;
    var a = t.generatedColumn;
    return i > n || i == n && a >= o || r.compareByGeneratedPositionsInflated(e, t) <= 0;
  }(this._last, e)) {
    this._sorted = false;
    this._array.push(e);
  } else {
    this._last = e;
    this._array.push(e);
  }
};
i.prototype.toArray = function () {
  if (!this._sorted) {
    this._array.sort(r.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};
exports.MappingList = i;