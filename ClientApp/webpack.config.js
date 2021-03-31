const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', './app.tsx'),
    //dependOn: 'shared',
    //shared: 'lodash',
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ],
  },
  devtool: 'source-map',
  output: {
    //filename: '[name].js',
    path: path.resolve(__dirname, '../wwwroot/dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
  },
}