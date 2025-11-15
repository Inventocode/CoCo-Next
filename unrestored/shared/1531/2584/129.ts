/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：129
 */

"use strict"

export { IconWidgetListViewer as i }
export { i as h }
export { a as d }
export { s as m }
export { c as l }
export { l as k }
export { u as j }
export { F7F7F7 as c }
export { Tiled as e }
export { r$o$IMAGE_AND_TITLE_DESC as g }
export { Https__static$codemao$cn_crcUploader_2021_12_9b6f23a1ed343087b5f7b2a5b1a447b6$png as b }
export { Https__static$codemao$cn_crcUploader_2021_12_97ff281423822cdac3fec80dfaed9b44$png as a }
export { Https__static$codemao$cn_crcUploader_2021_12_fb398b664f503453c8bef12cd33febc3$png as f }
export { _ as n }
import r = require("./5")
var /* [auto-meaningful-name] */IconWidgetListViewer = "icon-widget-list-viewer"
var i = 360
var a = 500
var s = 200
var c = 100
var l = 428
var u = 926
var /* [auto-meaningful-name] */F7F7F7 = "#F7F7F7"
var /* [auto-meaningful-name] */Tiled = "tiled"
var /* [auto-meaningful-name] */r$o$IMAGE_AND_TITLE_DESC = r.o.IMAGE_AND_TITLE_DESC
var /* [auto-meaningful-name] */Https__static$codemao$cn_crcUploader_2021_12_9b6f23a1ed343087b5f7b2a5b1a447b6$png = "https://static.codemao.cn/crc-uploader/2021/12/9b6f23a1ed343087b5f7b2a5b1a447b6.png"
var /* [auto-meaningful-name] */Https__static$codemao$cn_crcUploader_2021_12_97ff281423822cdac3fec80dfaed9b44$png = "https://static.codemao.cn/crc-uploader/2021/12/97ff281423822cdac3fec80dfaed9b44.png"
var /* [auto-meaningful-name] */Https__static$codemao$cn_crcUploader_2021_12_fb398b664f503453c8bef12cd33febc3$png = "https://static.codemao.cn/crc-uploader/2021/12/fb398b664f503453c8bef12cd33febc3.png"
var _ = {
  ONLY_TITLE: {
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.title",
      attributes: {
        color: "#333",
        fontSize: 16,
        lineClamp: 1
      }
    }
  },
  TITLE_AND_SUBTITLE: {
    subTitleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.subTitle",
      contentMessageId: "ListViewerWidget.subTitle",
      attributes: {
        color: "#666",
        fontSize: 12
      }
    },
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.title",
      attributes: {
        color: "#333",
        fontSize: 16,
        lineClamp: 1
      }
    }
  },
  IMAGE_TITLE_AND_SUBTITLE: {
    subTitleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.subTitle",
      contentMessageId: "ListViewerWidget.subTitle",
      attributes: {
        color: "#666",
        fontSize: 12
      }
    },
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.title",
      attributes: {
        color: "#333",
        fontSize: 16,
        lineClamp: 1
      }
    },
    imageSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.image",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_fb398b664f503453c8bef12cd33febc3$png
      }
    }
  },
  AVATAR_AND_TITLE_SUBTITLE: {
    subTitleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.subTitle",
      contentMessageId: "ListViewerWidget.subTitle",
      attributes: {
        color: "#999",
        fontSize: 12,
        lineClamp: 1
      }
    },
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.title",
      attributes: {
        color: "#333",
        fontSize: 16,
        lineClamp: 1
      }
    },
    avatarSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.avatar",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_97ff281423822cdac3fec80dfaed9b44$png,
        borderRadius: "50%",
        resizeMode: "cover"
      }
    }
  },
  IMAGE_AND_TITLE_DESC: {
    descSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.tips",
      contentMessageId: "ListViewerWidget.tips",
      attributes: {
        color: "#999",
        fontSize: 12,
        lineClamp: 1
      }
    },
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.longTitle",
      attributes: {
        color: "#333",
        fontSize: 14,
        lineClamp: 2
      }
    },
    imageSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.image",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_fb398b664f503453c8bef12cd33febc3$png
      }
    }
  },
  AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC: {
    descSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.desc",
      contentMessageId: "ListViewerWidget.longDesc",
      attributes: {
        color: "#333",
        fontSize: 14,
        lineClamp: 2
      }
    },
    bannerSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.banner",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_9b6f23a1ed343087b5f7b2a5b1a447b6$png
      }
    },
    subTitleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.subTitle",
      contentMessageId: "ListViewerWidget.subTitle",
      attributes: {
        color: "#999",
        fontSize: 12,
        lineClamp: 1
      }
    },
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.title",
      attributes: {
        color: "#333",
        fontSize: 16,
        lineClamp: 1
      }
    },
    avatarSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.avatar",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_97ff281423822cdac3fec80dfaed9b44$png,
        borderRadius: "50%",
        resizeMode: "cover"
      }
    }
  },
  IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC: {
    descSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.desc",
      contentMessageId: "ListViewerWidget.longDesc",
      attributes: {
        color: "#333",
        fontSize: 14,
        lineClamp: 2
      }
    },
    subTitleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.subTitle",
      contentMessageId: "ListViewerWidget.subTitle",
      attributes: {
        color: "#999",
        fontSize: 12,
        lineClamp: 1
      }
    },
    titleSlot: {
      widgetType: r.H,
      titleMessageId: "ListViewerWidget.title",
      contentMessageId: "ListViewerWidget.title",
      attributes: {
        color: "#333",
        fontSize: 16,
        lineClamp: 1
      }
    },
    avatarSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.avatar",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_97ff281423822cdac3fec80dfaed9b44$png,
        borderRadius: "50%",
        resizeMode: "cover"
      }
    },
    bannerSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.banner",
      attributes: {
        fileId: Https__static$codemao$cn_crcUploader_2021_12_9b6f23a1ed343087b5f7b2a5b1a447b6$png
      }
    }
  }
}
export default Https__static$codemao$cn_crcUploader_2021_12_97ff281423822cdac3fec80dfaed9b44$png
