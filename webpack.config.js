const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    main: path.resolve(__dirname, './src/index'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.(png|jp(e)g|gif|svg|ico)$/,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {},
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
