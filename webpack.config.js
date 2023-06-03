const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app");
const dirImages = path.join(__dirname, "app/images");
const dirStyles = path.join(__dirname, "app/styles");
const dirNode = "node_modules";

module.exports = {
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],
  resolve: {
    modules: [dirApp, dirImages, dirStyles, dirNode],
  },

  resolve: {
    modules: [dirApp, dirImages, dirStyles, dirNode],
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT,
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "app/images", to: "./images" }],
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: IS_DEVELOPMENT,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: IS_DEVELOPMENT,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: IS_DEVELOPMENT,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|fnt|webp)$/,
        loader: "file-loader",
        options: {
          name(file) {
            return "[hash].[ext]";
          },
        },
      },
    ],
  },
};
