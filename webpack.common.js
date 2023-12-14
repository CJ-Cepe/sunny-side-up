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
       filename: 'index.html',
       inject: 'head',
       scriptLoading: 'defer',
     }),
   ],
   output: {
     filename: 'index.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
   }
 };