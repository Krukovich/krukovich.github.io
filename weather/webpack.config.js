module.exports = {
    entry: './src/js/index.js',
    output: {
      path: __dirname + '/public/',
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
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loaders: ['babel-loader']
        }
      ]
    }
}