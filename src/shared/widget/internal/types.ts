export interface Widget {
    type: string
    icon: string
    title: string
    contentTextField?: string | undefined
    hasAnyWidget: boolean
    previewAreaWidgetTitle: string
    component: new (props: Attributes) => {}
    widget: {
        size: Size
        isGlobalWidget: boolean
        attributes: Attributes
    }
    editConfig: (EditConfig | EditConfig[])[]
    isInvisibleWidget: boolean
    blockConfig: {
        type: string
        category: {
            iconId: string
            blocks: string
        }
        getTemplate: (widgetID: string) => string[]
        blockDeclareGroup: {
            setBlockGroupSnippet: (/** TODO */ ...args: unknown[]) => (/** TODO */ any)
            setBlockGroupProfile: (/** TODO */ ...args: unknown[]) => (/** TODO */ any)
        }
        renameBlocksInfo: {
            blocksList: string[]
            fieldName: string
        }
        topBlocks: (/** TODO */ any)[]
        categoryClass: {
            text: string
            iconId: string
            blocks: (/** TODO */ any)[]
        }
    }
}

export interface Size {
    width: number
    height: number
}

export type Attributes = Record<string, any>

export interface EditConfig {
    type: "Align" | "TextInput" | "InputNumber" | "Color" | "VisibleSwitch" | "DisabledSwitch" | "InputMode" | "InputSizeType" | "InputTextGroup" | "InputSettingGroup" | "InputBackground" | "Coordinate" | "Size" | "TextArea" | "FontFamily" | "BackgroundColor" | "HorizontalAlign" | "VerticalAlign" | "ButtonSizeType" | "ButtonTextGroup" | "ButtonIconGroup" | "ButtonBackground" | "ButtonMode" | "ChangeImage" | "WidgetTitle" | "Headline" | "Options" | "RadioMode" | "RadioSizeType" | "CheckboxSizeType" | "SliderDirection" | "SwitchMode" | "SwitchSizeType" | "SwitchBackground" | "SliderMode" | "SliderRange" | "NumberInputRow" | "DegreeInputRow" | "FlipInputRow" | "ScaleInputRow" | "StyleEditorSwitch" | "AudioChangeSoundFile" | "AudioVolume" | "AudioRate" | "LocalStorageFields" | "HttpBody" | "HttpHeader" | "HttpParams" | "ListNewDataSource" | "ListViewerDataSource" | "ListViewerStyleTemplate" | "OptionSwitch" | "PreviewImage" | "Select" | "HelpUrl" | "CloudDbList" | "AntSwitch" | "WidgetOpacity" | "TextWidgetTextGroup" | "TableData" | "RichTextEditor" | "NumberSlider" | "BrushDrawProcess" | "BrushPenColor" | "DictFields" | "TableFields" | "WarningFields" | "BluetoothConnect" | "AqaraAuth"
    key?: string | undefined
    label?: string | undefined
    addonAfter?: string | undefined
    sizeRange?: [[number, number], [number, number]]
    url?: string | undefined
    hasDisableOrVisible?: boolean | undefined
    dropdown?: { label: string, value: string }[] | undefined
}
