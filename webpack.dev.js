const path = require("path");
const merge = require("webpack-merge");
const exec = require("child_process").exec;
const ShellPlugin = require("webpack-shell-plugin-next");
const common = require("./webpack.common.js");


module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "api-docs/_build/html",
    port: 1919,
    open: false,
    hot: false,
    liveReload: true,
    publicPath: "/_static/",
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new ShellPlugin({
      onBuildStart: ["cd api-docs && make html && cd .."],
    })
  ]
});
