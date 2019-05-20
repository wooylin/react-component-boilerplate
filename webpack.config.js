const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');

const basePath = path.join(__dirname, '../');
const srcPath = path.join(basePath, 'src');
console.log(path.join(srcPath, 'i18n'));

module.exports = {
  cache: true,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: srcPath,
    historyApiFallback: true,
    hot: true,
    port: 8000,
    publicPath: '/',
    noInfo: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        type: 'javascript/auto', // 加上type
        loader: 'json-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less', '.scss', '.sass']
    // alias: {
    //   i18n: path.join(srcPath, 'i18n')
    // }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './demo/index.html',
      filename: './index.html'
    })
  ]
};
