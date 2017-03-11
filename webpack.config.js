const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: './src/engine/index.js',
  output: { filename: 'bundle.js', path: 'dist' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            'es2015' 
          ] 
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
