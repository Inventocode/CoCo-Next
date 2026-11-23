const packageInfo = new URL("./package.json", import.meta.url).href
const readme = new URL("./README.md", import.meta.url).href
const plugin = "/static/scripts/builtin-plugins/plugin-shop-oldsquaw-community/index.js"

export { packageInfo as "package.json", readme as "README.md", plugin as "index.js" }
