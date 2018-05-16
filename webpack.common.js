const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
  /*  new webpack.DllPlugin({
      name: '[name]',
      path: './build/library/[name].json'
   }),*/
  //  new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: '/'
  },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        { test: /\.less$/, use: 'style!css!less' },
        { test: /\.scss$/, use: 'style!css!sass' },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
       },
      { test: /\.json$/, loader: 'json' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=65000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=65000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=65000&mimetype=image/svg+xml" },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=65000' }
    ]
  }
};
