const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        "background": path.join(__dirname, "src", "js", "background.js"),
        "popup": path.join(__dirname, "src", "js", "popup.js"),
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "js/[name].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, "src", "manifest.json"),
                to: "manifest.json"
            }, {
                from: path.join(__dirname, "src", "icons"),
                to: "icons"
            }]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "popup.html"),
            filename: "popup.html",
            chunks: ["popup"]
        }),
    ]
};