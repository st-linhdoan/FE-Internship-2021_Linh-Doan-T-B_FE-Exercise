const path = require('path');
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
        test: /\.scss$/i,
        use: [
          'style-loader',
          'scss-loader',
        ],
      },
    ]
  },
  devtool:'inline-source-map',
}
