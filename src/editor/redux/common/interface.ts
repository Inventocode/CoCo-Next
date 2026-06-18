import type { List } from "immutable"

export interface ICommonState extends IUserConfig {
  language: string
  editAreaUpdatedAt: number
  previewAreaUpdatedAt: number
  extensionListUpdateAt: number
  commonToastInfo: ICommonToastInfo
  confirmDialogInfo: IConfirmDialogInfo
  permissionDialogInfo: IPermissionDialogInfo
  richTextEditorDialogInfo: IRichTextEditorDialogInfo
  iconLibraryDialog: IIconLibraryDialog
  userInfo: unknown | null
  userInfoFetchDone: boolean
  importFailToastInfo: IImportFailToastInfo
  stageToast: IStageToast
  stageState: IStageState
  projectDialog: IProjectDialog
  gridDialog: IGridDialog
  gridStatus: IGridStatus
  tableDataDialog: IGridDialog
  createTableDataDialog: ICreateTableDataDialog
  widgetMallVisible: boolean
  isProjectModified: boolean
  isProjectFinishedOpen: boolean
  lastSavedTime?: number
  projectSaveProgressDialog: IProjectSaveProgressDialog
  consoleMessages: List<unknown>
  consoleHeight: number
  saving: boolean
  widgetAttributeVisible: boolean
  rightSideActiveMenu?: string
  signInDialogInfo: ISignInDialogInfo
  stageScale: number
  stageWidth: number
  stageVisible: boolean
  // [CoCo Next] 小屏设备可隐藏 header
  headerVisible: boolean
  isHoverBlockArea: boolean
  collAutoSave: boolean
  historyArchiveId: string
  editPermission: unknown
  historyDialogVisible: boolean
  myExtensionWidgets: unknown[]
  blockImageDialogInfo: IBlockImageDialogInfo
  releaseInfoDialogVisible: boolean
  cloudDBGridDialogInfo: ICloudDBGridDialogInfo
  cloudDBManagerDialogVisible: boolean
  cloudDBPublishDialogInfo: ICloudDBPublishDialogInfo
  sliderImageDialogInfo: ISliderImageDialogInfo
  switchImageDialogInfo: ISwitchImageDialogInfo
  isOffLine: boolean
  templateList: unknown[]
  courseList: unknown[]
  courseDialogVisible: boolean
  projectSavePrompt: IProjectSavePrompt
  floatMiniIcons: IFloatMiniIcons
}

export interface IUserConfig {
  stageRulerVisible: boolean
  blockyToolboxPinned: boolean
}

export interface ICommonToastInfo {
  visible?: boolean
  showPrefixIcon?: boolean
  type?: "success" | "info" | "error"
  message?: string
  showCloseIcon?: boolean
  duration?: number
}

export interface IConfirmDialogInfo {
  title: string
  content?: string | JSX.Element
  isDangerous?: boolean
  allowText?: string
  denyText?: string
  cancelText?: string
  cancelBtnVisible?: boolean
  confirmBtnVisible?: boolean
  visible?: boolean
  className?: string
  onClose?(): void
  onConfirm?(): void
  onDeny?(): void
  onCancel?(): void
}

export interface IPermissionDialogInfo {
  type?: unknown
  visible: boolean
  onClose?(): void
  onConfirm?(): void
  onDeny?(): void
  isDangerous?: boolean
  denyText?: string
  allowText?: string
  className?: string
}

export interface IRichTextEditorDialogInfo {
  visible: boolean
  onConfirm?(): void
  content?: string
}

export interface IIconLibraryDialog {
  visible: boolean
  onClose?(): void
  onSelect?(): void
  autoClose: boolean
  value: string
}

export interface IImportFailToastInfo {
  visible: boolean
  importFailResults: unknown[]
  fileType: string
}

export interface IStageToast {
  visible: boolean
  toast?: string
  showIcon?: boolean
}

export interface IStageState {
  isActorDragging: boolean
}

export interface IProjectDialog {
  visible: boolean
  selected: unknown
}

export interface IGridDialog {
  visible: boolean
  grid: {
    id: string
    name: string
    header: Record<string, unknown>
    data: unknown[]
  }
}

export interface ICreateTableDataDialog {
  visible: boolean
  widgetId: string
}

export interface IGridStatus {
  copiedContent: {
    rowId: string
    columnId: string
  }
  selectedContent: {
    rowId: string
    columnId: string
  }
  editingHeader: string
  errorHeaders: unknown[]
  animationHeaders: unknown[]
  errorCells: Record<string, unknown>
  isCustomWidth: boolean
}

export interface ISignInDialogInfo {
  visible: boolean
  onSuccess?(): void
}

export interface IBlockImageDialogInfo {
  visible: boolean
  imgSrc: string
}

export interface ICloudDBGridDialogInfo {
  widgetName: string
  visible: boolean
  cloudDBId: string
  isProd: boolean
  callback(): void
}

export interface ICloudDBPublishDialogInfo {
  visible: boolean
  type: string
  callback(): void
}

export interface ISliderImageDialogInfo {
  visible: boolean
  widgetId: string
  direction?: unknown
  handleImageFileId: string
  handleImageRatio: number
  handleImageDirection?: unknown
  backgroundImageFileId: string
  backgroundImageDirection?: unknown
  trackImageFileId: string
  trackImageDirection?: unknown
}

export interface ISwitchImageDialogInfo {
  visible: boolean
  widgetId: string
  imageOpenFileId: string
  imageCloseFileId: string
}

export interface IProjectSaveProgressDialog {
  visible: boolean
  progress: number
}

export interface IProjectSavePrompt {
  visible: boolean
  openFrom: string
}

export interface IFloatMiniIcons {
  fixedIcons: unknown[]
  temporaryIcons: unknown[]
}
