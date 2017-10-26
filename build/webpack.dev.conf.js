var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
  /*利于开发阶段调试 4个选项*/
  devtool: '#cheap-module-eval-source-map',
  plugins: [
   new webpack.BannerPlugin('版权所有，翻版必究'),
    /*   new HtmlWebpackPlugin({
      //new 一个这个插件的实例，并传入相关的参数
      template: "@/components/footer/Footer.vue"
    }),*/
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      /*向template或者templateContent中注入所有静态资源*/
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
