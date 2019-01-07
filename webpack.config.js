const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',
    }),
  ],
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
  },
}
