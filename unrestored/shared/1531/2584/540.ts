/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：540
 */

"use strict"

export { QR_SCANNER_WIDGET as a }
export { o as b }
var /* [auto-meaningful-name] */QR_SCANNER_WIDGET = "QR_SCANNER_WIDGET"
var o = {
  type: QR_SCANNER_WIDGET,
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
}
export default QR_SCANNER_WIDGET
