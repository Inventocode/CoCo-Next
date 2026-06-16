/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：681__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"./95"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
var u = {
  type: Src_editor_widget_builtIn_types.w,
  icon: Module_95.b,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    Module_6.a({}, Module_33.h), {
      key: "__width",
      label: "widthMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        greaterThan: Module_95.m
      }
    }, {
      key: "__height",
      label: "heightMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        greaterThan: Module_95.l
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
    }, {
      key: "hasErrorMessage",
      label: "hasErrorMessageLabel",
      valueType: "boolean",
      defaultValue: false,
      blockOptions: {
        getter: {
          func: "checkIfInputWidgetHasErrorMessage"
        }
      }
    }, {
      key: "placeholderColor",
      label: "placeholderContent",
      valueType: "color",
      defaultValue: Module_95.n,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "valueColor",
      label: "inputContent",
      valueType: "color",
      defaultValue: Module_95.o,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "contentColor",
      label: "contentColor",
      valueType: "color",
      defaultValue: Module_95.n,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["valueColor", "placeholderColor"]
        },
        getter: {
          keys: ["valueColor", "placeholderColor"]
        }
      }
    }, {
      key: "fontSize",
      label: "fontSize",
      valueType: "number",
      defaultValue: Module_95.g,
      validators: {
        greaterThan: {
          value: Module_60.n,
          message: "outOfRange"
        },
        isInteger: true
      }
    }, {
      key: "textAlign",
      label: "textAlign",
      valueType: "string",
      defaultValue: Module_60.a.LEFT,
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
      key: "errorMessage",
      label: "errorMessageContent",
      valueType: "string",
      defaultValue: "",
      blockOptions: {
        setter: {
          generateBlock: false
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
        color: "#E76CEA"
      },
      params: [
        {
          key: "text",
          label: "",
          valueType: "string",
          checkType: ["string"],
          defaultValue: Module_76.c.OUTLINED_NORMAL,
          dropdown: [
            {
              label: "outlinedNormal",
              value: Module_76.c.OUTLINED_NORMAL,
              image: "https://static.bcmcdn.com/coco/image/input-outline-normal-template.png",
              isHideFieldImage: true
            }, {
              label: "containedNormal",
              value: Module_76.c.CONTAINED_NORMAL,
              image: "https://static.bcmcdn.com/coco/image/input-contain-normal-template.png",
              isHideFieldImage: true
            }, {
              label: "containedRound",
              value: Module_76.c.CONTAINED_ROUND,
              image: "https://static.bcmcdn.com/coco/image/input-contain-round-template.png",
              isHideFieldImage: true
            }, {
              label: "outlinedFlat",
              value: Module_76.c.OUTLINED_FLAT,
              image: "https://static.bcmcdn.com/coco/image/input-outline-flat-template.png",
              isHideFieldImage: true
            }
          ]
        }, {
          key: "backgroundColor",
          label: "color",
          valueType: "color",
          defaultValue: Module_95.c
        }
      ]
    }, {
      key: "setBackgroundImage",
      label: "backgroundImage",
      blockOptions: {
        callMethodLabel: "set",
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
  events: []
}
export { u }
