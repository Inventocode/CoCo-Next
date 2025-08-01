"use strict";

export { o as i };
export { i as h };
export { a as d };
export { s as m };
export { c as l };
export { l as k };
export { u as j };
export { d as c };
export { p as e };
export { f as g };
export { h as b };
export { m as a };
export { g as f };
export { _ as n };
var r = require("./5");
var o = "icon-widget-list-viewer";
var i = 360;
var a = 500;
var s = 200;
var c = 100;
var l = 428;
var u = 926;
var d = "#F7F7F7";
var p = "tiled";
var f = r.o.IMAGE_AND_TITLE_DESC;
var h = "https://static.codemao.cn/crc-uploader/2021/12/9b6f23a1ed343087b5f7b2a5b1a447b6.png";
var m = "https://static.codemao.cn/crc-uploader/2021/12/97ff281423822cdac3fec80dfaed9b44.png";
var g = "https://static.codemao.cn/crc-uploader/2021/12/fb398b664f503453c8bef12cd33febc3.png";
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
        fileId: g
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
        fileId: m,
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
        fileId: g
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
        fileId: h
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
        fileId: m,
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
        fileId: m,
        borderRadius: "50%",
        resizeMode: "cover"
      }
    },
    bannerSlot: {
      widgetType: r.v,
      titleMessageId: "ListViewerWidget.banner",
      attributes: {
        fileId: h
      }
    }
  }
};
export default m;