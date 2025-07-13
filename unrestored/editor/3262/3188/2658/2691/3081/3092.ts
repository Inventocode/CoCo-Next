"use strict";

export default i;
var r = i;
function i(e, t) {
  var n = e.filename;
  var r = e.filenameRelative;
  var i = void 0 === r ? n : r;
  var a = e.sourceRoot;
  var s = void 0 === a ? t.moduleRoot : a;
  var o = t.moduleId;
  var l = t.moduleIds;
  var u = void 0 === l ? !!o : l;
  var c = t.getModuleId;
  var p = t.moduleRoot;
  var f = void 0 === p ? s : p;
  if (!u) {
    return null;
  }
  if (null != o && !c) {
    return o;
  }
  var d = null != f ? f + "/" : "";
  if (i) {
    var h = null != s ? new RegExp("^" + s + "/?") : "";
    d += i.replace(h, "").replace(/\.(\w*?)$/, "");
  }
  d = d.replace(/\\/g, "/");
  return c && c(d) || d;
}
export default i = function (e, t) {
  var n;
  var i;
  var a;
  var s;
  return r(e, {
    moduleId: null != (n = t.moduleId) ? n : e.moduleId,
    moduleIds: null != (i = t.moduleIds) ? i : e.moduleIds,
    getModuleId: null != (a = t.getModuleId) ? a : e.getModuleId,
    moduleRoot: null != (s = t.moduleRoot) ? s : e.moduleRoot
  });
};