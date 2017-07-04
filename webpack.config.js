var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	entry: ["./app/ts/app.tsx"],

	output: {
		path: path.resolve(__dirname, "public"),
		filename: "js/bundle.js"
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		loaders: [{
		    test: /\.tsx?$/,
		    loader: "ts-loader",
		    exclude: /node_modules/
		}]
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: "app"
			}
		], {
			ignore: ["ts/**"]
		})
	]
};

module.exports = config;
