const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),

  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.jsx/,
      //   use: '@babel/preset-react',
      // },
    ],
  },
  resolve: {
    extensions: ['*', 'js', 'jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
};
