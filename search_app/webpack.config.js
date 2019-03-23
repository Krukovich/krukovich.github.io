const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },

    devServer: {
        contentBase: path.join(__dirname, "public")
    },

    devtool: "cheap-eval-source-map"
};