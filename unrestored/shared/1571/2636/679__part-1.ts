/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：679__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Module_82 from /* 82 */"./82"
import * as /* [auto-meaningful-name] */Module_114 from /* 114 */"./114"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
var u = {
  type: Src_editor_widget_builtIn_types.z,
  icon: Module_82.g,
  title: "widgetName",
  contentTextField: "text",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  hasAnyWidget: true,
  properties: [
    Module_6.a({}, Module_9.n), Module_6.a({}, Module_9.l), {
      key: "ButtonTextGroup",
      label: "ButtonTextGroup",
      valueType: "string",
      editorType: "ButtonTextGroup",
      defaultValue: "",
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "ButtonIconGroup",
      label: "ButtonIconGroup",
      valueType: "string",
      editorType: "ButtonIconGroup",
      defaultValue: "",
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "ButtonBackground",
      label: "ButtonBackground",
      valueType: "string",
      editorType: "ButtonBackground",
      defaultValue: "",
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "textVisible",
      label: "text",
      valueType: "boolean",
      defaultValue: true,
      hidePropertyEditor: true,
      dropdown: [
        {
          label: "show",
          value: true
        }, {
          label: "hide",
          value: false
        }
      ],
      blockOptions: {
        getter: {
          generateBlock: false
        },
        setter: {
          line: "text"
        }
      }
    }, {
      key: "text",
      label: "textContent",
      valueType: "string",
      checkType: ["string", "number", "boolean", "array"],
      defaultValue: "按钮",
      hidePropertyEditor: true,
      blockOptions: {
        getter: {
          line: "returnValue"
        }
      }
    }, {
      key: "textColor",
      label: "textColor",
      valueType: "color",
      defaultValue: Module_82.e,
      hidePropertyEditor: true
    }, {
      key: "maxFontSize",
      label: "maxFontSize",
      valueType: "number",
      defaultValue: Module_82.h,
      hidePropertyEditor: true,
      blockOptions: {
        getter: {
          generateBlock: false
        }
      },
      validators: {
        greaterThan: {
          value: Module_82.o,
          message: "outOfRange"
        },
        lessThan: {
          value: Module_82.l,
          message: "outOfRange"
        },
        isInteger: true
      }
    }, {
      key: "textAlign",
      label: "textAlign",
      valueType: "string",
      defaultValue: Module_60.a.CENTER,
      hidePropertyEditor: true,
      dropdown: [
        {
          label: "left",
          value: Module_60.a.LEFT
        }, {
          label: "center",
          value: Module_60.a.CENTER
        }, {
          label: "right",
          value: Module_60.a.RIGHT
        }
      ],
      blockOptions: {
        getter: {
          generateBlock: false
        }
      }
    }, {
      key: "iconVisible",
      label: "icon",
      valueType: "boolean",
      defaultValue: false,
      hidePropertyEditor: true,
      dropdown: [
        {
          label: "show",
          value: true
        }, {
          label: "hide",
          value: false
        }
      ],
      blockOptions: {
        getter: {
          generateBlock: false
        },
        setter: {
          line: "icon"
        }
      }
    }, {
      key: "iconId",
      label: "iconId",
      valueType: "icon",
      defaultValue: "",
      hidePropertyEditor: true,
      blockOptions: {
        getter: {
          generateBlock: false
        }
      }
    }, {
      key: "iconColor",
      label: "iconColor",
      valueType: "color",
      defaultValue: Module_82.d,
      hidePropertyEditor: true,
      blockOptions: {
        getter: {
          generateBlock: false
        }
      }
    }, {
      key: "fontFamily",
      label: "fontFamily",
      valueType: "string",
      defaultValue: Module_82.b,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "allowMinFontSize",
      label: "allowMinFontSize",
      valueType: "number",
      defaultValue: Module_82.o,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "allowMaxFontSize",
      label: "allowMaxFontSize",
      valueType: "number",
      defaultValue: Module_82.l,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "backgroundMode",
      label: "backgroundMode",
      valueType: "string",
      defaultValue: Module_114.a.TEMPLATE,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "templateMode",
      label: "templateMode",
      valueType: "string",
      defaultValue: Module_114.b.RECTANGLE_FILL,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "backgroundColor",
      label: "backgroundColor",
      valueType: "color",
      defaultValue: Module_82.a,
      hidePropertyEditor: true,
      blockOptions: {
        setter: {
          generateBlock: false
        },
        getter: {
          generateBlock: true
        }
      }
    }, {
      key: "backgroundImage",
      label: "backgroundImage",
      valueType: "string",
      defaultValue: Module_82.f,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "imageResizeMode",
      label: "imageResizeMode",
      valueType: "string",
      defaultValue: Module_114.c.CONTAIN,
      hidePropertyEditor: true,
      blockOptions: {
        generateBlock: false
      }
    }, Module_6.a(Module_6.a({}, Module_9.m), {}, {
      blockOptions: {
        setter: {
          line: "general"
        }
      }
    }), {
      key: "__width",
      label: "width",
      valueType: "number",
      defaultValue: 120,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        lessThan: Module_82.m,
        greaterThan: Module_82.p
      }
    }, {
      key: "__height",
      label: "height",
      valueType: "number",
      defaultValue: 40,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        lessThan: Module_82.k,
        greaterThan: Module_82.n
      }
    }, {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 100,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"]
        },
        getter: {
          keys: ["__height", "__width"]
        }
      }
    }
  ],
  methods: [
    {
      key: "setTemplateMode",
      label: "templateMode",
      blockOptions: {
        callMethodLabel: "set",
        order: 30008.2,
        color: "#E76CEA",
        line: "mode"
      },
      params: [
        {
          key: "text",
          label: "",
          valueType: "string",
          checkType: ["string"],
          defaultValue: Module_114.b.RECTANGLE_FILL,
          dropdown: [
            {
              label: "rectangleFill",
              value: Module_114.b.RECTANGLE_FILL,
              image: "https://static.bcmcdn.com/coco/image/button-rect-fill-template.png",
              isHideFieldImage: true
            }, {
              label: "rectangleOutline",
              value: Module_114.b.RECTANGLE_OUTLINE,
              image: "https://static.bcmcdn.com/coco/image/button-rect-outline-template.png",
              isHideFieldImage: true
            }, {
              label: "circleFill",
              value: Module_114.b.CIRCLE_FILL,
              image: "https://static.bcmcdn.com/coco/image/button-circle-fill-template.png",
              isHideFieldImage: true
            }, {
              label: "circleOutline",
              value: Module_114.b.CIRCLE_OUTLINE,
              image: "https://static.bcmcdn.com/coco/image/button-circle-outline-template.png",
              isHideFieldImage: true
            }
          ]
        }, {
          key: "backgroundColor",
          label: "color",
          valueType: "color",
          defaultValue: Module_82.a
        }
      ]
    }, {
      key: "setBackgroundImage",
      label: "backgroundImage",
      blockOptions: {
        callMethodLabel: "set",
        order: 30008.3,
        color: "#E76CEA"
      },
      params: [
        {
          key: "text",
          label: "",
          valueType: "image",
          checkType: ["string"],
          defaultValue: "default"
        }
      ]
    }
  ],
  events: [
    {
      key: "onButtonPress",
      label: "onButtonPress",
      subTypes: [
        {
          key: "pressType",
          dropdown: [
            {
              label: "pressMsg",
              value: "Press"
            }, {
              label: "pressInMsg",
              value: "PressIn"
            }, {
              label: "pressOutMsg",
              value: "PressOut"
            }
          ]
        }
      ],
      params: [],
      blockOptions: {
        icon: "%{BKY_BLOCK_TAB_ICON}"
      }
    }
  ]
}
export { u }
