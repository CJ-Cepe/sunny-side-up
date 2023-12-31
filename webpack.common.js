//webpack.common.js
const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'SunnySideUp',
       favicon: './src/assets/icon.ico',
       filename: 'index.html',
       inject: 'head',
       scriptLoading: 'defer',
       meta: {
        'interactive-widget': {'content': 'overlays-content'},
       },
     }),
   ],
   output: {
     filename: 'index.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']}, 
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
    ]
   }
 };