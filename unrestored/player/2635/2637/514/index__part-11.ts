/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-11
 */

"use strict"

var Tt
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$_248 from "./248"
import /* [auto-meaningful-name] */_$_ from "./248"
function Ct(t) {
  switch (t) {
    case Tt.UNEXPECTED_ERROR:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.UnexpectedError")
    case Tt.CAMERA_ACCESS_DENIED:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.CameraAccessDenied")
    case Tt.CAMERA_ACCESS_RESTRICTED:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.CameraAccessRestricted")
    case Tt.BACK_CAMERA_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.BackCameraUnavailable")
    case Tt.FRONT_CAMERA_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.FrontCameraUnavailable")
    case Tt.CAMERA_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.CameraUnavailable")
    case Tt.SCAN_CANCELED:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.ScanCanceled")
    case Tt.LIGHT_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.LightUnavailable")
    case Tt.OPEN_SETTINGS_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.SettingsUnavailable")
    case Tt.NOT_FOUND:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.NotFound")
    default:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.UnexpectedError")
  }
}
!function (t) {
  t[t.UNEXPECTED_ERROR = 0] = "UNEXPECTED_ERROR"
  t[t.CAMERA_ACCESS_DENIED = 1] = "CAMERA_ACCESS_DENIED"
  t[t.CAMERA_ACCESS_RESTRICTED = 2] = "CAMERA_ACCESS_RESTRICTED"
  t[t.BACK_CAMERA_UNAVAILABLE = 3] = "BACK_CAMERA_UNAVAILABLE"
  t[t.FRONT_CAMERA_UNAVAILABLE = 4] = "FRONT_CAMERA_UNAVAILABLE"
  t[t.CAMERA_UNAVAILABLE = 5] = "CAMERA_UNAVAILABLE"
  t[t.SCAN_CANCELED = 6] = "SCAN_CANCELED"
  t[t.LIGHT_UNAVAILABLE = 7] = "LIGHT_UNAVAILABLE"
  t[t.OPEN_SETTINGS_UNAVAILABLE = 8] = "OPEN_SETTINGS_UNAVAILABLE"
  t[t.NOT_FOUND = 9] = "NOT_FOUND"
}(Tt || (Tt = {}))
export { Tt }
export { Ct }
