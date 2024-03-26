import type { WebpackConfiguration } from "webpack-cli";

const config: WebpackConfiguration = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: __dirname + "/dist",
    clean: true,
  },
  resolve: {
    extensions: [".ts"],
  },
  target: "webworker",
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: {
          // generatorOpts: {
          //   compact: false,
          // },
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "16",
                },
              },
            ],
            [
              "@babel/preset-typescript",
              // {
              //   onlyRemoveTypeImports: true,
              //   optimizeConstEnums: true,
              //   rewriteImportExtensions: true,
              // },
            ],
          ],
        },
      },
      // {
      //   test: /\.ts$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // },
    ],
  },
};

export default config;
