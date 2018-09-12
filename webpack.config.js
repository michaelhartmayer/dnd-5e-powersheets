const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',

  resolve: {
    modules: ['src', 'node_modules']
  },

  module: {
    /*
    RULES
    */
    rules: [
      // html
      {
        test:   /\.html$/,
        loader: 'html-loader'
      },
      // jsx
      {
        test:    /\.js|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // stylus
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  /*
  PLUGINS
  */
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}