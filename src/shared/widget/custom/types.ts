export interface Exports {
  types: Types
  widget: Widget
}

export interface Types {
  type: string
  title: string
  contentTextField?: string
  icon: string
  version?: `${number}.${number}.${number}` | string | undefined
  docs?: {
    url?: string | undefined
  } | undefined
  platforms?: Platforms | undefined
  isInvisibleWidget: boolean
  isGlobalWidget: boolean
  hasAnyWidget?: boolean | undefined
  properties: PropertyTypes[]
  methods: MethodTypes[]
  events: EventTypes[]
}

export type Platforms = ("web" | "android" | "ios")[]

export interface PropertyTypes {
  key: string
  label: string
  hidePropertyEditor?: boolean | undefined
  blockOptions?: PropertyBlockOptionsTypes | undefined
  validators?: {
    lessThan?: number | {
      value?: number | undefined
      message?: string | undefined
    } | undefined
    greaterThan?: number | {
      value?: number | undefined
      message?: string | undefined
    } | undefined
    lessThanOrEqualTo?: number | {
      value?: number | undefined
      message?: string | undefined
    } | undefined
    greaterThanOrEqualTo?: number | {
      value?: number | undefined
      message?: string | undefined
    } | undefined
    isInteger?: boolean | undefined
    notEmpty?: {
      value?: number | undefined
      message?: string | undefined
      maxLength?: number | undefined
      minLength?: number | undefined
    }
  } | undefined
  readonly?: 0 | 1 | undefined
  unit?: string | undefined
  valueType: ValueType
  checkType?: CheckType | undefined
  editorType?: EditorType | undefined
  dropdown?: DropdownItemTypes[] | undefined
  defaultValue: number | string | boolean
}

export interface PropertyBlockOptionsTypes {
  generateBlock?: boolean | undefined
  line?: string | undefined
  space?: number | undefined
  order?: number | undefined
  getter?: PropertyCalculatorBlockOptionsTypes | undefined
  setter?: PropertyCalculatorBlockOptionsTypes | undefined
}

export interface PropertyCalculatorBlockOptionsTypes {
  generateBlock?: boolean | undefined
  line?: string | undefined
  space?: number | undefined
  order?: number | undefined
  keys?: string[] | undefined
}

export interface MethodTypes {
  key: string
  label?: string | undefined
  params: MethodParamTypes[]
  tooltip?: string | undefined
  blockOptions?: MethodBlockOptionsTypes | undefined
  valueType?: ValueType | undefined
}

export interface MethodParamTypes {
  key: string
  label?: string | undefined
  labelAfter?: string | undefined
  controller?: {
    min?: number | undefined
    max?: number | undefined
  } & ({
    leftText?: undefined
    rightText?: undefined
  } | {
    leftText: string
    rightText: string
  }) | undefined
  valueType: ValueType
  checkType?: CheckType | undefined
  defaultValue: number | string | boolean
  dropdown?: DropdownItemTypes[] | undefined
}

export interface MethodBlockOptionsTypes {
  generateBlock?: boolean | undefined
  line?: string | undefined
  space?: number | undefined
  order?: number | undefined
  icon?: string | undefined
  color?: string | undefined
  inputsInline?: boolean | undefined
  callMethodLabel?: boolean | string | undefined
}

export interface EventTypes {
  key: string
  subTypes?: EventSubType[] | undefined
  label: string
  params: EventParamTypes[]
  tooltip?: string | undefined
  blockOptions?: EventBlockOptionsTypes | undefined
}

export interface EventSubType {
  key: string
  dropdown?: DropdownItemTypes[] | undefined
}

export interface EventParamTypes {
  key: string
  label: string
  valueType: ValueType
}

export interface EventBlockOptionsTypes {
  generateBlock?: boolean | undefined
  line?: string | undefined
  space?: number | undefined
  order?: number | undefined
  icon?: string | undefined
}

export interface DropdownItemTypes {
  label: string
  value: string
}

export type ValueType = SignalValueType | SignalValueType[]

export type SignalValueType = "string" | "number" | "boolean" | "object" | "array" | "color" | "image" | "icon" | "multilineString" | "richTextString"

export type CheckType = "string" | "number" | "boolean" | "object" | "array" | "color" | "image"

export type EditorType = "Align" | "TextInput" | "InputNumber" | "Color" | "VisibleSwitch" | "DisabledSwitch" | "InputMode" | "InputSizeType" | "InputTextGroup" | "InputSettingGroup" | "InputBackground" | "Coordinate" | "Size" | "TextArea" | "FontFamily" | "BackgroundColor" | "HorizontalAlign" | "VerticalAlign" | "ButtonSizeType" | "ButtonTextGroup" | "ButtonIconGroup" | "ButtonBackground" | "ButtonMode" | "ChangeImage" | "WidgetTitle" | "Headline" | "Options" | "RadioMode" | "RadioSizeType" | "CheckboxSizeType" | "SliderDirection" | "SwitchMode" | "SwitchSizeType" | "SwitchBackground" | "SliderMode" | "SliderRange" | "NumberInputRow" | "DegreeInputRow" | "FlipInputRow" | "ScaleInputRow" | "StyleEditorSwitch" | "AudioChangeSoundFile" | "AudioVolume" | "AudioRate" | "LocalStorageFields" | "HttpBody" | "HttpHeader" | "HttpParams" | "ListNewDataSource" | "ListViewerDataSource" | "ListViewerStyleTemplate" | "OptionSwitch" | "PreviewImage" | "Select" | "HelpUrl" | "CloudDbList" | "AntSwitch" | "WidgetOpacity" | "TextWidgetTextGroup" | "TableData" | "RichTextEditor" | "NumberSlider" | "BrushDrawProcess" | "BrushPenColor" | "DictFields" | "TableFields" | "WarningFields" | "BluetoothConnect" | "AqaraAuth"

import type { ReactNode } from "react"

export interface Utils {

  /**
   * 判断宿主是否为客户端
   *
   * @returns 打包后的 App 中返回 true，其它场景下返回 false
   */
  isNative(): boolean

  /**
   * 通过文件名获取素材库中对应文件的链接
   *
   * @param fileName 素材库中该素材的文件名
   *
   * @returns 素材库中对应文件的链接
   */
  getWidgetImageUrl(fileName: string): string
}

interface WidgetInstance {
  widgetLog(this: this, message: string): void
  widgetWarn(this: this, message: string): void
  widgetError(this: this, message: string): void
  emit(this: this, key: string, ...args: unknown[]): void
}

export interface InvisibleWidget extends WidgetInstance {
  widgetInterrupt(this: this, message: string): void
}

export interface VisibleWidget extends WidgetInstance {
  setProps(this: this, props: Record<string, unknown>): void
  render(this: this): ReactNode
}

export interface WidgetProps {
  __widgetId: string
  __widgetType: string
}

export interface InvisibleWidgetProps extends WidgetProps {}

export interface VisibleWidgetProps extends WidgetProps {
  __width: number
  __height: number
}

export type Widget = new (props: Record<string, any>) => WidgetInstance
