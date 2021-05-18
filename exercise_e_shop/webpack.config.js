const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    cart: './assets/javascript/cart.js',
    product: './assets/javascript/product.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    clean:true,
  },
  module:{
    rules:[
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({ template: 'index.html', filename: 'index.html',chunks:["product"]}),
    new HtmlWebpackPlugin({ template: 'cart.html', filename: 'cart.html',chunks:["cart"]})
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
  },
  mode:'development',
  devtool:'inline-source-map',
}
