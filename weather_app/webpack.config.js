module.exports = {
    entry: './js/index.js',
    output: {
      path: __dirname + '/js/',
      filename: 'main.js'
    },
    devtool: '#sourcemap',
    stats: {
     colors: true,
     reasons: true
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.jsx?$/, exclude: /(node_modules)/, loaders: ['babel-loader']},
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },   
        { test: /\.(png|jpg|gif)$/i, loader: 'url-loader' }
      ]
    }
  }