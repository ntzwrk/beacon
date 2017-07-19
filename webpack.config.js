var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	entry: [
		"./app/ts/app.tsx",
		"./app/styles/app.scss"
	],

	output: {
		path: path.resolve(__dirname, "public"),
		filename: "js/bundle.js"
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		loaders: [
			{
			    test: /\.tsx?$/,
			    loader: "ts-loader",
			    exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader?sourceMap"],
				exclude: /node_modules/
			},
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
				loader: "file-loader"
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: "app"
			}
		], {
			ignore: ["ts/**", /\.scss$/]
		})
	]
};

module.exports = config;
