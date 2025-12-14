const webpack = require("webpack")
const { merge } = require("webpack-merge")
const SpeedMeasurePlugin = require("speed-measure-webpack-v5-plugin")

const baseConfig = require("./webpack.prod")

const smp = new SpeedMeasurePlugin()

/** @type {webpack.Configuration} */
const config = merge(baseConfig, {
    cache: { type: "memory" }
})

module.exports = smp.wrap(config, ["MiniCSSExtractPlugin"])
