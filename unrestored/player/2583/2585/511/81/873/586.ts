"use strict";

export { r as a };
var r = function () {
  function t(t, e, n) {
    this.deviceId = t;
    this.label = e;
    this.kind = "videoinput";
    this.groupId = n || undefined;
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
export default r;