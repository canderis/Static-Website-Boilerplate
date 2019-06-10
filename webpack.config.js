const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["@babel/preset-env"]
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(png|jpg|svg|gif|ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			minify: {
				collapseWhitespace: true
			}
		}),
		new CopyPlugin([{ from: "./src/icons", to: "./icons" }])
	],
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: "all"
		}
	}
};
