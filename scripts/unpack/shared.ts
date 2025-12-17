import path from "path"
import { unpack, SetPath } from "./core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "0.3de57be9.chunk.js"),
        path.resolve(distPath, "1.a2793f6b.chunk.js"),
        path.resolve(distPath, "2.b50320a5.chunk.js"),
        path.resolve(distPath, "10.aa272396.chunk.js"),
        path.resolve(distPath, "13.60451ca9.chunk.js"),
        path.resolve(distPath, "19.ae3553b2.chunk.js"),
        path.resolve(distPath, "main.eee12093.chunk.js")
    ],
    externals: [
        { key: 0, source: "react" },
        { key: 1, source: "regenerator-runtime" },
        { key: 30, source: "lodash" },
        { key: 31, source: "ot-json1" },
        { key: 51, source: "color" },
        { key: 93, source: "tslib" },
        { key: 129, source: "axios" },
        { key: 134, source: "inversify" },
        { key: 156, source: "redux" },
        { key: 198, source: "antd-mobile" },
        { key: 205, source: "animejs" },
        { key: 258, source: "@kitten-team/gl-matrix" },
        { key: 298, source: "process" },
        { key: 414, source: "html2canvas" },
        { key: 462, source: "resize-observer-polyfill" },
        { key: 485, source: "socket.io-client" },
        { key: 556, source: "qrcode" },
        { key: 620, source: "quill" },
        { key: 785, source: "js-sha256" },
        { key: 793, source: "@vikadata/vika" },
        { key: 562, source: "hammerjs" },
        { key: 2027, source: "punycode" },
        { key: 2140, source: "inversify-inject-decorators" },
        { key: 2145, source: "lodash.clonedeep" },
        { key: 2720, source: "@babel/core" },
        { key: 3324, source: "@babel/preset-react" }
    ],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/shared",
        srcPath: "src",
        srcUnrestoredPath: "src-unrestored",
        pathMap: "path-map.json"
    },
    publicPath: "https://creation.codemao.cn/coconut/web/1.22.0-0/",
    setPath: SetPath.BY_DEPENDENCY,
    moveToSrc: {
        2: "/editor/events/main/messages-wrapper",
        5: "/editor/widget/built-in/types",
        23: "/shared/ui/language",
        34: "/shared/widget/custom/load",
        "37__part-12": "/editor/events/main/actions",
        "37__part-14": "/shared/events/store",
        41: "/shared/utils/network/axios-with-credentials",
        78: "/shared/widget/custom/type",
        96: "/shared/widget/custom/storage",
        183: "/shared/widget/custom/shop",
        232: "/shared/widget/custom/restrict",
        261: "/editor/block/toolbox",
        "301__part-0": "/editor/block/generate/index",
        "301__part-2": "/editor/block/generate/toolbox/index-1",
        "301__part-3": "/editor/block/generate/toolbox/index-2",
        "301__part-4": "/editor/block/generate/toolbox/index-3",
        "301__part-5": "/editor/block/generate/widget/utils",
        "301__part-6": "/editor/block/generate/widget/index",
        347: "/shared/widget/custom/external-module",
        1571: ".",
        "2636__part-7": "/editor/ui/dialogs/open-project/my/index",
        "2636__part-14": "/editor/ui/header/right/collaboration",
        "2636__part-22": "/editor/ui/header/wrapper",
        "2636__part-74": "/editor/widget/built-in/http-client-and-timer",
        "2636__part-195": "/editor/ui/open-work"
    },
    nodePolyfill: {
        250: "global",
        298: "process",
        574: "module",
        576: "module",
        628: "set-immediate"
    }
})
