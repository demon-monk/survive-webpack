const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'eslint-loader',
      },
    ],
  },
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
    overlay: true, // show error msg on the top of you developing page
  },
}
