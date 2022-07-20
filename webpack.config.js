// 引入一个包

const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
// webpack配置信息
module.exports = {
  // 文件入口
  entry: "./src/index.ts",
  //   出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  //   webpack打包时要使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          { loader: "ts-loader" },
        ],
        exclude: /node_module/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  mode: "production",
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html",
    }),
  ],

  // 用来引入模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
