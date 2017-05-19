var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader" ,"css-loader"] },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: "babel-loader"
    }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.NamedModulesPlugin()]
};
