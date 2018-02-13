const config = {
  entry: './app/index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}

module.exports = config