const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    hot: true,
  },
};
