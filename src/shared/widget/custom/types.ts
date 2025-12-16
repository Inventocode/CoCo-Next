export interface Exports {
  types: Types
  widget: Widget
}

export interface Types {
  type: string
  title: string
  contentTextField?: string
  icon: string
  version?: `${number}.${number}.${number}` | string
  docs?: {
    url?: string
  }
  platforms?: Platforms
  isInvisibleWidget: boolean
  isGlobalWidget: boolean
  hasAnyWidget?: boolean
  properties: PropertyTypes[]
  methods: MethodTypes[]
  events: EventTypes[]
}

export type Platforms = ("web" | "android" | "ios")[]

export interface PropertyTypes {
  key: string
  label: string
  hidePropertyEditor?: boolean
  blockOptions?: PropertyBlockOptionsTypes
  validators?: {
    lessThan?: number | {
      value?: number
      message?: string
    }
    greaterThan?: number | {
      value?: number
      message?: string
    }
    lessThanOrEqualTo?: number | {
      value?: number
      message?: string
    }
    greaterThanOrEqualTo?: number | {
      value?: number
      message?: string
    }
    isInteger?: boolean
    notEmpty?: {
      value?: number
      message?: string
      maxLength?: number
      minLength?: number
    }
  }
  readonly?: 0 | 1
  unit?: string
  valueType: ValueType
  checkType?: CheckType
  editorType?: EditorType
  dropdown?: DropdownItemTypes[]
  defaultValue: number | string | boolean
}

export interface PropertyBlockOptionsTypes {
  generateBlock?: boolean
  line?: string
  space?: number
  order?: number
  getter?: PropertyCalculatorBlockOptionsTypes
  setter?: PropertyCalculatorBlockOptionsTypes
}

export interface PropertyCalculatorBlockOptionsTypes {
  generateBlock?: boolean
  line?: string
  space?: number
  order?: number
  keys?: string[]
}

export interface MethodTypes {
  key: string
  label?: string
  params: MethodParamTypes[]
  tooltip?: string
  blockOptions?: MethodBlockOptionsTypes
  valueType?: ValueType
}

export interface MethodParamTypes {
  key: string
  label?: string
  labelAfter?: string
  controller?: {
    min?: number
    max?: number
  } & ({
    leftText?: undefined
    rightText?: undefined
  } | {
    leftText: string
    rightText: string
  })
  valueType: ValueType
  checkType?: CheckType
  defaultValue: number | string | boolean
  dropdown?: DropdownItemTypes[]
}

export interface MethodBlockOptionsTypes {
  generateBlock?: boolean
  line?: string
  space?: number
  order?: number
  icon?: string
  color?: string
  inputsInline?: boolean
  callMethodLabel?: boolean | string
}

export interface EventTypes {
  key: string
  subTypes?: EventSubType[]
  label: string
  params: EventParamTypes[]
  tooltip?: string
  blockOptions?: EventBlockOptionsTypes
}

export interface EventSubType {
  key: string
  dropdown?: DropdownItemTypes[]
}

export interface EventParamTypes {
  key: string
  label: string
  valueType: ValueType
}

export interface EventBlockOptionsTypes {
  generateBlock?: boolean
  line?: string
  space?: number
  order?: number
  icon?: string
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
