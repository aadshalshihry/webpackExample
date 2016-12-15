'use strict'
var path = require('path');

module.exports = {
	context: path.join(__dirname),
	entry: './entry.js',
	output: {
		path: path.join(__dirname),
		filename: "bundle.js"
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style!css!'}
		]
	}
}