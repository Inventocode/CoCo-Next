import path from "path"
import { unpack, SetPath } from "./core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coco", "home", "dist")

unpack({
    entry: [
        path.resolve(distPath, "commons.45126324b4177c062c0e.js"),
        path.resolve(distPath, "coco.e05e13740860acc49eec.js"),
        path.resolve(distPath, "work.f8567516d16b8c00ab38.js"),
        path.resolve(distPath, "1.035cad6653e8655c2224.js"),
        path.resolve(distPath, "2.33ab4423f02dd74059fb.js")
    ],
    externals: [
        {
            searchPath: /^react$/,
            replace: "react"
        }, {
            searchPath: /^react\/dom$/,
            replace: "react-dom"
        }, {
            searchPath: /^react\/redux$/,
            replace: "react-redux"
        }, {
            searchPath: /^react\/intl$/,
            replace: "react-intl"
        }, {
            searchPath: /^react\/draggable$/,
            replace: "react-draggable"
        }, {
            searchPath: /^(.*\/)?react\/three\/fiber$/,
            replace: "@react-three/fiber"
        }, {
            searchPath: /^react\/router(\/index)?$/,
            replace: "react-router"
        }, {
            searchPath: /^react\/router\/dom$/,
            replace: "react-router-dom"
        }, {
            searchPath: /^react\/loadable$/,
            replace: "react-loadable"
        }, {
            searchPath: /^react\/css\/modules$/,
            replace: "react-css-modules"
        }, {
            searchPath: /^lodash\//,
            replace: "lodash/"
        }, {
            searchPath: /^(.*\/)?ant\/design\/icons\/.*$/,
            replace: "@ant-design/icons"
        }, {
            searchPath: /^(.*\/)?ant\/design\/react\/.*$/,
            replace: "@ant-design/react-slick"
        }, {
            searchPath: /^antd(\/.*)?$/,
            replace: "antd"
        }, {
            searchPath: /^(.*\/)?babel\/runtime\//,
            replace: "@babel/runtime/"
        }, {
            searchPath: /^babel\/plugin\/react\/css\/modules\//,
            replace: "babel-plugin-react-css-modules/"
        }, {
            searchPath: /^babel\/polyfill.*$/,
            replace: "babel-polyfill"
        }, {
            searchPath: /^video\/react$/,
            replace: "video-react"
        }, {
            searchPath: /^sa\/sdk\/javascript$/,
            replace: "sa-sdk-javascript"
        }, {
            searchPath: /^intl$/,
            replace: "intl"
        }, {
            searchPath: /^axios$/,
            replace: "axios"
        }, {
            searchPath: /^shortid$/,
            replace: "shortid"
        }, {
            searchPath: /^redux$/,
            replace: "redux"
        }, {
            searchPath: /^redux\/actions$/,
            replace: "redux-actions"
        }, {
            searchPath: /^redux\/saga$/,
            replace: "redux-saga"
        }, {
            searchPath: /^redux\/saga\/effects$/,
            replace: "redux-saga/effects"
        }, {
            searchPath: /^classnames$/,
            replace: "classnames"
        }, {
            searchPath: /^build\/three\/module$/,
            replace: "three"
        }, {
            searchPath: /^three\/examples/,
            replace: "three/examples"
        }, {
            searchPath: /^invariant$/,
            replace: "invariant"
        }
    ],
    output: {
        path: path.resolve("unrestored", "home")
    },
    publicPath: "https://creation.codemao.cn/coco/home/dist/",
    setPath: SetPath.BY_IMPORT_NAME
})
