import path from "path"
import { unpack, SetPath } from "./core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "0.dbc064e8.chunk.js"),
        path.resolve(distPath, "1.9f1213aa.chunk.js"),
        path.resolve(distPath, "2.590ea185.chunk.js"),
        path.resolve(distPath, "10.adabbe91.chunk.js"),
        path.resolve(distPath, "13.ee5dfd72.chunk.js"),
        path.resolve(distPath, "17.9f2e40be.chunk.js"),
        path.resolve(distPath, "20.7f439965.chunk.js"),
        path.resolve(distPath, "21.0649168c.chunk.js"),
        path.resolve(distPath, "main.59a3bab1.chunk.js")
    ],
    externals: [
        { key: 0, source: "react" },
        { key: 1, source: "regenerator-runtime" },
        { key: 31, source: "lodash" },
        { key: 32, source: "ot-json1" },
        { key: 51, source: "color" },
        { key: 93, source: "tslib" },
        { key: 134, source: "inversify" },
        { key: 155, source: "redux" },
        { key: 186, source: "axios" },
        { key: 204, source: "animejs" },
        { key: 259, source: "@kitten-team/gl-matrix" },
        { key: 411, source: "html2canvas" },
        { key: 458, source: "resize-observer-polyfill" },
        { key: 481, source: "socket.io-client" },
        { key: 483, source: "antd-mobile" },
        { key: 553, source: "qrcode" },
        { key: 616, source: "quill" },
        { key: 774, source: "js-sha256" },
        { key: 781, source: "@vikadata/vika" },
        { key: 559, source: "hammerjs" },
        { key: 1989, source: "punycode" },
        { key: 2102, source: "inversify-inject-decorators" },
        { key: 2107, source: "lodash.clonedeep" },
        { key: 2668, source: "@babel/core" },
        { key: 3272, source: "@babel/preset-react" }
    ],
    output: {
        path: path.resolve("unrestored", "shared"),
        pathMap: "path-map.json"
    },
    publicPath: "https://creation.codemao.cn/coconut/web/1.22.0-0/",
    setPath: SetPath.BY_DEPENDENCY,
    move: {
        2: "../../src/shared/events/messages-wrapper",
        23: "../../src/shared/ui/language",
        36: "../../src/shared/widget/custom/load",
        38: "../../src/shared/events/actions",
        41: "../../src/shared/utils/network/axios-with-credentials",
        79: "../../src/shared/widget/custom/type",
        98: "../../src/shared/widget/custom/storage",
        182: "../../src/shared/widget/custom/shop",
        233: "../../src/shared/widget/custom/restrict",
        262: "../../src/editor/block/toolbox",
        301: "../../src/editor/block/generate",
        345: "../../src/shared/widget/custom/external-module",
        1531: ".",
        2584: "../../src/editor/index"
    },
    nodePolyfill: {
        251: "global",
        368: "process",
        570: "buffer",
        571: "module",
        574: "module",
        625: "set-immediate"
    }
})
