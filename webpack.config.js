const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sarah Port (っ·ᴥ·)っ',
      favicon: './src/public/favico.png'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './archive', to: '.' }]
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          // TODO: why does disabling removeViewBox break the d path animations??
          // options: {
          //   svgoConfig: {
          //     plugins: [
          //       {
          //         name: 'preset-default',
          //         params: {
          //           overrides: {
          //             // disable plugins
          //             removeViewBox: false,
          //           },
          //         },
          //       },
          //     ],
          //   }
          // }
        }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?jsx?$/,
        exclude: [/node_modules/, /\.test\.m?jsx$/],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /\.test\/\.tsx?$/],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.scss'],
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
