/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：681__part-1
 */

"use strict"

import * as o from "./6"
import * as i from "./95"
import * as a from "./5"
import * as s from "./33"
import * as c from "./76"
import * as l from "./60"
var u = {
  type: a.w,
  icon: i.b,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    o.a({}, s.h), {
      key: "__width",
      label: "widthMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        greaterThan: i.m
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
        greaterThan: i.l
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
      defaultValue: i.n,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "valueColor",
      label: "inputContent",
      valueType: "color",
      defaultValue: i.o,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "contentColor",
      label: "contentColor",
      valueType: "color",
      defaultValue: i.n,
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
      defaultValue: i.g,
      validators: {
        greaterThan: {
          value: l.n,
          message: "outOfRange"
        },
        isInteger: true
      }
    }, {
      key: "textAlign",
      label: "textAlign",
      valueType: "string",
      defaultValue: l.a.LEFT,
      dropdown: [
        {
          label: "left",
          value: l.a.LEFT
        }, {
          label: "center",
          value: l.a.CENTER
        }, {
          label: "right",
          value: l.a.RIGHT
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
          defaultValue: c.c.OUTLINED_NORMAL,
          dropdown: [
            {
              label: "outlinedNormal",
              value: c.c.OUTLINED_NORMAL,
              image: "https://static.bcmcdn.com/coco/image/input-outline-normal-template.png",
              isHideFieldImage: true
            }, {
              label: "containedNormal",
              value: c.c.CONTAINED_NORMAL,
              image: "https://static.bcmcdn.com/coco/image/input-contain-normal-template.png",
              isHideFieldImage: true
            }, {
              label: "containedRound",
              value: c.c.CONTAINED_ROUND,
              image: "https://static.bcmcdn.com/coco/image/input-contain-round-template.png",
              isHideFieldImage: true
            }, {
              label: "outlinedFlat",
              value: c.c.OUTLINED_FLAT,
              image: "https://static.bcmcdn.com/coco/image/input-outline-flat-template.png",
              isHideFieldImage: true
            }
          ]
        }, {
          key: "backgroundColor",
          label: "color",
          valueType: "color",
          defaultValue: i.c
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
