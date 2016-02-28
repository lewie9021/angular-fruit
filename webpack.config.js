var Path = require("path");
var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var NgAnnotatePlugin = require("ng-annotate-webpack-plugin");

var rootPath = __dirname;
var outputPath = Path.join(rootPath, "dist");

module.exports = {
    entry: Path.join(rootPath, "src", "app.entry.js"),

    output: {
        path: outputPath,
        filename: "bundle.js"
    },

    resolve: {
        root: Path.join(rootPath, "src"),
        extensions: ["", ".js", ".scss", "css", "html"]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "stage-2"],
                    plugins: ["transform-runtime"]
                }
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: "url-loader?limit=10000"
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract("style", ["css", "sass"])
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("theme.css")
    ]
};
