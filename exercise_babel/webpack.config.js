const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    home: './index.jsx'
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
          // options: {
          //   presets: [
          //     "@babel/preset-react",
          //     "@babel/preset-env",
          //   ]
          // }
        },
        exclude: '/node_modules/',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html', filename: 'index.html', chunks: ["home"] }),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 4000,
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
