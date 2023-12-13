//webpack.prod.js
const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-mal',
   module: {
    rule: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: {browsers: [">0.25%"]}}]
            ]
          }
        }
      }
    ]
   }
 });