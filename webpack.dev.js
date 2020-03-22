const HtmlWebPackPlugin = require("html-webpack-plugin")
var path = require("path");
var srcPath = path.resolve(__dirname,"src"); 
var distPath = path.resolve(__dirname,"dist");


module.exports = {
    mode: 'development',
    target: 'web',
    entry: "./src/app.js",
    output: {
      path: distPath,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        excludeChunks: [ 'server' ]
      })
    ]
};
