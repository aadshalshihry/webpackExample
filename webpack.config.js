'use strict'
var path = require('path');

module.exports = {
	context: path.join(__dirname),
	entry: './src/entry.js',
	output: {
		path: path.join(__dirname),
		filename: "bundle.js"
	},
	devtool: 'source-map',
	preloaders: [
		{
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: "jshint-loader"
		}
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!'
			},{
				test: /\.html$/, 
				loader: 'raw'
			}

		]
	},
	plugins: [

	]
};