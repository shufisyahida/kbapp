const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
	entry: {
		app: PATHS.app
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.app
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loaders: ['url-loader?limit=10000!img?progressive=true'],
				include: PATHS.app
			},
			{
				test: /\.(woff|woff2|otf)$/,
				loaders: ['url-loader?limit=100000'],
				include: PATHS.app
			},
			{
				test: /\.(ttf|eot|otf)$/,
				loaders: ['file-loader'],
				include: PATHS.app
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loaders: ['url-loader?limit=10000&mimetype=application/font-woff']
			},
			{
				test: /\.otf?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loaders: ['url-loader?limit=10000&mimetype=application/x-font-woff']
			},
			{
				test: /\.(otf|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loaders: ['file-loader']
			}
		]
	}
};

if(TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,

			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups.
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// Display only errors to reduce the amount of output.
			stats: 'errors-only',

			// Parse host and port from env so this is easy to customize.
			//
			// If you use Vagrant or Cloud9, set
			// host: process.env.HOST || '0.0.0.0';
			//
			// 0.0.0.0 is available to all network devices unlike default
			// localhost
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new NpmInstallPlugin({
				save: true
			})
		]
	});

}


if(TARGET === 'build') {
	module.exports = merge(common, {});
}

