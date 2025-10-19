/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1347
 */

var r;
var i;
var o;
var a;
var s;
var c;
var u;
var l;
var f;
var d = {}.toString;
function h(e, t) {
  var n;
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : [];
      n = t && n || this;
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o);
    } : e;
  }();
}
r = require("./2273");
i = require("./2274");
o = require("./2275");
a = require("./2276");
s = require("./2277");
c = function (e) {
  return e;
};
u = h(function (e, t) {
  return d.call(t).slice(8, -1) === e;
});
l = h(function (e, t) {
  var n;
  var r = [];
  for (n = 0; n < e; ++n) {
    r.push(t);
  }
  return r;
});
a.empty = i.empty;
a.slice = i.slice;
a.take = i.take;
a.drop = i.drop;
a.splitAt = i.splitAt;
a.takeWhile = i.takeWhile;
a.dropWhile = i.dropWhile;
a.span = i.span;
a.breakStr = i.breakList;
(f = {
  Func: r,
  List: i,
  Obj: o,
  Str: a,
  Num: s,
  id: c,
  isType: u,
  replicate: l
}).each = i.each;
f.map = i.map;
f.filter = i.filter;
f.compact = i.compact;
f.reject = i.reject;
f.partition = i.partition;
f.find = i.find;
f.head = i.head;
f.first = i.first;
f.tail = i.tail;
f.last = i.last;
f.initial = i.initial;
f.empty = i.empty;
f.reverse = i.reverse;
f.difference = i.difference;
f.intersection = i.intersection;
f.union = i.union;
f.countBy = i.countBy;
f.groupBy = i.groupBy;
f.fold = i.fold;
f.foldl = i.foldl;
f.fold1 = i.fold1;
f.foldl1 = i.foldl1;
f.foldr = i.foldr;
f.foldr1 = i.foldr1;
f.unfoldr = i.unfoldr;
f.andList = i.andList;
f.orList = i.orList;
f.any = i.any;
f.all = i.all;
f.unique = i.unique;
f.uniqueBy = i.uniqueBy;
f.sort = i.sort;
f.sortWith = i.sortWith;
f.sortBy = i.sortBy;
f.sum = i.sum;
f.product = i.product;
f.mean = i.mean;
f.average = i.average;
f.concat = i.concat;
f.concatMap = i.concatMap;
f.flatten = i.flatten;
f.maximum = i.maximum;
f.minimum = i.minimum;
f.maximumBy = i.maximumBy;
f.minimumBy = i.minimumBy;
f.scan = i.scan;
f.scanl = i.scanl;
f.scan1 = i.scan1;
f.scanl1 = i.scanl1;
f.scanr = i.scanr;
f.scanr1 = i.scanr1;
f.slice = i.slice;
f.take = i.take;
f.drop = i.drop;
f.splitAt = i.splitAt;
f.takeWhile = i.takeWhile;
f.dropWhile = i.dropWhile;
f.span = i.span;
f.breakList = i.breakList;
f.zip = i.zip;
f.zipWith = i.zipWith;
f.zipAll = i.zipAll;
f.zipAllWith = i.zipAllWith;
f.at = i.at;
f.elemIndex = i.elemIndex;
f.elemIndices = i.elemIndices;
f.findIndex = i.findIndex;
f.findIndices = i.findIndices;
f.apply = r.apply;
f.curry = r.curry;
f.flip = r.flip;
f.fix = r.fix;
f.over = r.over;
f.split = a.split;
f.join = a.join;
f.lines = a.lines;
f.unlines = a.unlines;
f.words = a.words;
f.unwords = a.unwords;
f.chars = a.chars;
f.unchars = a.unchars;
f.repeat = a.repeat;
f.capitalize = a.capitalize;
f.camelize = a.camelize;
f.dasherize = a.dasherize;
f.values = o.values;
f.keys = o.keys;
f.pairsToObj = o.pairsToObj;
f.objToPairs = o.objToPairs;
f.listsToObj = o.listsToObj;
f.objToLists = o.objToLists;
f.max = s.max;
f.min = s.min;
f.negate = s.negate;
f.abs = s.abs;
f.signum = s.signum;
f.quot = s.quot;
f.rem = s.rem;
f.div = s.div;
f.mod = s.mod;
f.recip = s.recip;
f.pi = s.pi;
f.tau = s.tau;
f.exp = s.exp;
f.sqrt = s.sqrt;
f.ln = s.ln;
f.pow = s.pow;
f.sin = s.sin;
f.tan = s.tan;
f.cos = s.cos;
f.acos = s.acos;
f.asin = s.asin;
f.atan = s.atan;
f.atan2 = s.atan2;
f.truncate = s.truncate;
f.round = s.round;
f.ceiling = s.ceiling;
f.floor = s.floor;
f.isItNaN = s.isItNaN;
f.even = s.even;
f.odd = s.odd;
f.gcd = s.gcd;
f.lcm = s.lcm;
f.VERSION = "1.1.2";
module.exports = f;