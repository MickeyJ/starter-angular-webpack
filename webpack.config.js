
module.exports = {
  entry: './src/',
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
    
  }
};