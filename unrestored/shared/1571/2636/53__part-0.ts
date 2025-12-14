/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：53__part-0
 */

"use strict"

var r = [
  {
    id: "sans-serif",
    name: "默认字体",
    cdnUrl: "",
    image: "https://kn-cdn.codemao.cn/painter/img/mrht.png"
  }, {
    id: "zhanKuKuaiLeTi",
    name: "站酷快乐体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/zkklt.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/zkklt.png"
  }, {
    id: "zhanKuWenYiTi",
    name: "站酷文艺体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/zkwyt.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/zkwyt.png"
  }, {
    id: "zhanKuKuHeiTi",
    name: "站酷酷黑体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/zkht.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/zkkht.png"
  }, {
    id: "zhanKuXiaoWeiLogo",
    name: "站酷小微logo",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/zkxwLOGO.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/zkxwlogo.png"
  }, {
    id: "zhanKuHuangYouTi",
    name: "站酷庆科黄油体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/zkqkhyt.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/zkqkhyt.png"
  }, {
    id: "ruiZiZhenYanTi",
    name: "锐字真言体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/rzzyt.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/rzzyt.png"
  }, {
    id: "yangRenDongZhuShiTi",
    name: "杨任东竹石体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/yrdszt.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/yrdzst.png"
  }, {
    id: "baoTuXiaoBaiTi",
    name: "包图小白体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/btxb.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/btxbt.png"
  }, {
    id: "muYaoSuiXinShouXieTi",
    name: "沐瑶随心手写体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/myrbsx.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/mysxsxt.png"
  }, {
    id: "shouShuTi",
    name: "手书体",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/sst.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/sht.png"
  }, {
    id: "keAiDeKeAi",
    name: "可爱的可爱",
    cdnUrl: "https://kn-cdn.codemao.cn/painter/fonts/kadka.woff",
    image: "https://kn-cdn.codemao.cn/painter/img/kadka.png"
  }
]
var o = /^(-|\+)?\d*$/
var i = /^-+$/
var a = /^[a-zA-Z0-9\u4E00-\u9FFF ()\uff08\uff09\-_.']*$/
var s = /[^a-zA-Z0-9\u4E00-\u9FFF ()\uff08\uff09\-_.']/g
var c = /^[a-zA-Z0-9\u4E00-\u9FFF ()\uff08\uff09\-_']*$/
var l = /^[^0-9_]/
var u = /^[\u4E00-\u9FFFA-Za-z0-9_]*$/
var d = /[^\u4E00-\u9FFFA-Za-z0-9_]/g
var p = /^[\u4E00-\u9FFFA-Za-z0-9()\uff08\uff09\-_\s]*$/
var f = /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.\w+/i
var h = /^[^-]{0,}$/i
function m(e) {
  return new RegExp("^[\\d-]{0,".concat(e, "}$"), "i")
}
export { r }
export { o }
export { i }
export { a }
export { s }
export { c }
export { l }
export { u }
export { d }
export { p }
export { f }
export { h }
export { m }
export default a
