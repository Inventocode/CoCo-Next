/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：540
 */

"use strict";

export { r as a };
export { o as b };
var r = "QR_SCANNER_WIDGET";
var o = {
  type: r,
  icon: "icon-scan-qr-code",
  title: "widgetNameMsg",
  platforms: ["android", "web"],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [],
  methods: [{
    key: "scan",
    label: "scanMsg",
    params: []
  }, {
    key: "scanImage",
    label: "scanImageMsg",
    params: [{
      key: "image",
      label: "imageMsg",
      valueType: "image",
      defaultValue: ""
    }]
  }],
  events: [{
    key: "onScanSuccess",
    label: "onScanSuccessMsg",
    params: [{
      key: "content",
      label: "contentMsg",
      valueType: "string"
    }]
  }, {
    key: "onScanError",
    label: "onScanErrorMsg",
    params: [{
      key: "error",
      label: "errorMsg",
      valueType: "string"
    }]
  }]
};
export default r;