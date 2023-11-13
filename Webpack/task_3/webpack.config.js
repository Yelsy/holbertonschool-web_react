const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './public'),
    port: 8564,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['header', 'body', 'footer'],
    }),
    new CleanWebpackPlugin(),
  ],
};
