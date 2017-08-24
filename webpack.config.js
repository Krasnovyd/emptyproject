var path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'development';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader')
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('css-loader!less-loader')
			}
		]
	},
	resolve: {
		modules: ["node_modules"]
	},
	watch: NODE_ENV == 'development',
	devtool: 'source-map',
  plugins: [
		new ExtractTextPlugin("styles.css")
  ]
}