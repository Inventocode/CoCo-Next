const { rspack } = require("@rspack/core")
const { RspackDevServer } = require("@rspack/dev-server")
const { getPort } = require("get-port-please")

const packageInfo = require("../package.json")

;(async () => {
    const port = await getPort(7090)
    const config = require("../rspack.server.js")
    const compiler = rspack(config)
    const open = "http://coco-next.localhost:" + port
    const server = new RspackDevServer({
        ...config.devServer,
        port,
        open
    }, compiler)
    await server.start()
    console.log(`CoCo Next 服务已启动，若 CoCo Next 没有打开，可以手动在本机浏览器中打开 ${open}`)
    console.log(`如果打开出现问题，请到 ${packageInfo.bugs.url} 向我们反馈`)
})()
