const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entry = glob.sync('./src/pages/*.js', { dotRelative: true }).reduce((acc, curr) => ({ ...acc, [path.basename(curr, '.js')]: curr }), {})
const htmlWebpackPlugins = Object.keys(entry).map((file) => {
  return new HtmlWebpackPlugin({
    title: 'Sarah Port (っ·ᴥ·)っ',
    favicon: './src/images/favico.png',
    // inject: false,
    chunks: [file],
    filename: file === 'index' ? 'index.html' : `${file}/index.html` // TODO: Why can't I use '[name].html'?
  })
})

module.exports = {
  mode: 'development',
  entry,
  plugins: [
    ...htmlWebpackPlugins,
    new CopyWebpackPlugin({
      patterns: [{ from: './archive', to: '.' }, { from: './src/public', to: './public'}]
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    // historyApiFallback: true,
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
    // publicPath: "/",
    clean: true,
  },
};
