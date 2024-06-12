const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.ts",
  output: {
    filename: "./[name].js",
    path: path.join(__dirname, "dist"),
    assetModuleFilename: "[path][name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.hmpl$/i,
        use: "hmpl-loader",
      },
    ],
  },
};
