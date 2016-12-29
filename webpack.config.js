
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		path.resolve(__dirname, 'static/index.js')
	],
	output: {
		path: path.resolve(__dirname, 'static/build'),
		filename: 'bundle.js',
		publicPath:"/static/build"
	},
	module: {
		loaders: [
		{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.css$/, // Only .css files
			loader: 'style!css' // Run both loaders
		},{
			test: /\.scss$/,
			loader: 'style!css!sass'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	plugins: [
		new webpack.BannerPlugin("Created by vito on 2016/12/29!")
	]
};
