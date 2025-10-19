/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：586
 */

"use strict";

export { n as a };
var n = function () {
  function t(t, e, r) {
    this.deviceId = t;
    this.label = e;
    this.kind = "videoinput";
    this.groupId = r || undefined;
  }
  t.prototype.toJSON = function () {
    return {
      kind: this.kind,
      groupId: this.groupId,
      deviceId: this.deviceId,
      label: this.label
    };
  };
  return t;
}();
export default n;