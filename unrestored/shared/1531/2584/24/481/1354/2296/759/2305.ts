var n = "undefined" !== typeof n ? n : "undefined" !== typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder && MozBlobBuilder;
var r = function () {
  try {
    return 2 === new Blob(["hi"]).size;
  } catch (e) {
    return !1;
  }
}();
var i = r && function () {
  try {
    return 2 === new Blob([new Uint8Array([1, 2])]).size;
  } catch (e) {
    return !1;
  }
}();
var o = n && n.prototype.append && n.prototype.getBlob;
function a(e) {
  return e.map(function (e) {
    if (e.buffer instanceof ArrayBuffer) {
      var t = e.buffer;
      if (e.byteLength !== t.byteLength) {
        var n = new Uint8Array(e.byteLength);
        n.set(new Uint8Array(t, e.byteOffset, e.byteLength));
        t = n.buffer;
      }
      return t;
    }
    return e;
  });
}
function s(e, t) {
  t = t || {};
  var r = new n();
  a(e).forEach(function (e) {
    r.append(e);
  });
  return t.type ? r.getBlob(t.type) : r.getBlob();
}
function c(e, t) {
  return new Blob(a(e), t || {});
}
if ("undefined" !== typeof Blob) {
  s.prototype = Blob.prototype;
  c.prototype = Blob.prototype;
}
module.exports = r ? i ? Blob : c : o ? s : void 0;