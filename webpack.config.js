module.exports = {
	entry: './app/App.js',
	output: {
		path: __dirname,
		filename: './public/assets/js/bundle.js',
	},
	devtool: 'source-map',
	resolve: {
		root: __dirname,
		alias: {
			AppStyles: 'app/styles/App.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: [/\.js?$/, /\.jsx?$/],
				exclude: /(node_modules|bower_components)/
			}
		]
	}
}
