const path = require('path');
console.log('__dirname:', __dirname);
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js',
  },
	devServer: {
		hot: true,
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					'file-loader?name=assets/[name].[ext]'
				]
			},
			/*{
				test: /\.(html)$/,
				use: 'html-loader'
			},*/
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
		],
	},
};