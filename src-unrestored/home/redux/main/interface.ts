/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：faTg
 */

export interface MainReducerState {
  language: string
  signDialogVisible: boolean
  courseDialogVisible: boolean
  userInfo: null | UserInfo
  userInfoFetchDone: boolean
  commonToastInfo: CommonToastInfo
  confirmDialogInfo: ConfirmDialogInfo
}
export interface UserInfo {
  id: number
  name: string
  avatar: string
}
export interface CommonToastInfo {
  visible: boolean
  type?: "success" | "error" | "info"
  message?: string
  showCloseIcon?: boolean
  showPrefixIcon?: boolean
  onClose?(): void
}
export interface ConfirmDialogInfo {
  visible: boolean
  title?: string
  content?: string
  className?: classNames.Argument
  isDangerous?: boolean
  cancelText?: string
  allowText?: string
  denyText?: string
  cancelBtnVisible?: boolean
  confirmBtnVisible?: boolean
  onDeny?(): void
  onConfirm?(): void
  onCancel?(): void
  onClose?(): void
}
