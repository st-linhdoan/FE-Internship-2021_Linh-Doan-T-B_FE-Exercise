const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    home: './index.tsx'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$|jsx/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.tsx/,
        use: [
          'ts-loader'
        ],
        exclude: '/node_modules/',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html', filename: 'index.html', chunks: ["home"] }),
  ],
  resolve: {
    extensions: ['.jsx', '.js','.tsx']
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 4000,
  },
  mode: 'development',
  devtool: 'eval',
}
