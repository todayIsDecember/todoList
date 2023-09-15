const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("babel-core");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    fallback: {
      path: require.resolve("path-browserify"),
      stream: false,
      url: false,
      fs: false,
      buffer: false,
      tls: false,
      net: false,
      crypto: false,
      dns: false,
      assert: false,
      querystring: false,
      zlib: false,
      http: false,

    },
  },
  entry: {
    polyfill: "babel-polyfill",
    app: "./js/app.js",
  },
  context: path.resolve(__dirname, "src"),
  devServer: {
    port: 9000,
    host: "localhost",
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "./style.css" }),
    new HtmlWebpackPlugin({ template: "index.html", filename: "index.html" }),
  ],
  stats: {
    children: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "auto",
  },
  mode: "development",
};
