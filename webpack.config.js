const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'eval-cheap-module-source-map',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		compress: true,
		port: 9000
	},
	plugins: [
		new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
		new ExtractTextWebpackPlugin({ filename: '[name].[chunkhash].css' }),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		})
	],
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, 'src'),
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /\.scss$/,
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: { sourceMap: true }
				}, {
					loader: 'sass-loader',
					options: { sourceMap: true }
				}]
			})
		}]
	}
}
